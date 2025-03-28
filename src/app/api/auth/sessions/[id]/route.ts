import { NextResponse } from "next/server"
import { auth, invalidateSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        // Check if the session belongs to the user
        const sessionToDelete = await prisma.session.findUnique({
            where: { id: params.id },
        })

        if (!sessionToDelete || sessionToDelete.userId !== session.userId) {
            return NextResponse.json({ message: "Session not found" }, { status: 404 })
        }

        // Delete the session
        await invalidateSession(params.id)

        // If the user is deleting their current session, clear the cookie
        const response = NextResponse.json({ success: true })

        if (params.id === session.sessionId) {
            response.cookies.set("token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 0,
                path: "/",
            })
        }

        return response
    } catch (error) {
        console.error("Delete session error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

