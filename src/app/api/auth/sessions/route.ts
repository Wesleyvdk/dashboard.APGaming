import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        // Get all active sessions for the user
        const sessions = await prisma.session.findMany({
            where: {
                userId: session.userId,
                expiresAt: {
                    gt: new Date(),
                },
            },
            orderBy: {
                lastActive: "desc",
            },
        })

        // Mark the current session
        const sessionsWithCurrent = sessions.map((s) => ({
            ...s,
            isCurrent: s.id === session.sessionId,
        }))

        return NextResponse.json(sessionsWithCurrent)
    } catch (error) {
        console.error("Get sessions error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

