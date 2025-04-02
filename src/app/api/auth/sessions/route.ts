import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const sessions = await prisma.session.findMany({
            where: {
                userId: session.id,
                expiresAt: {
                    gt: new Date(),
                },
            },
            orderBy: {
                lastActive: "desc",
            },
        })

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

