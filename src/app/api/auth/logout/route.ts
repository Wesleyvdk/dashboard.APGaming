import { NextResponse } from "next/server"
import { auth, invalidateSession } from "@/lib/auth"

export async function POST() {
    try {
        const session = await auth()

        if (session && session.sessionId) {
            await invalidateSession(session.sessionId)
        }

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
        console.error("Logout error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

