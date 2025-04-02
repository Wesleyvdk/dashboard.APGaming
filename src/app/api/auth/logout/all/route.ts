import { NextResponse } from "next/server"
import { auth, invalidateAllUserSessions } from "@/lib/auth"

export async function POST() {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        await invalidateAllUserSessions(session.id)

        const response = NextResponse.json({ success: true })

        // Clear the token cookie
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 0,
            path: "/",
        })

        return response
    } catch (error) {
        console.error("Logout all error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

