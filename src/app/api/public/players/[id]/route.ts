import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { cors } from "@/lib/cors"

export async function OPTIONS() {
    return cors(
        new Response(null, {
            status: 204,
        }),
    )
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const paramProps = await params

        const playerId = paramProps.id

        const player = await prisma.player.findUnique({
            where: { id: playerId },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                inGameName: true,
                dateOfBirth: false,
                country: true,
                role: true,
                rank: true,
                socialLinks: true,
                trackerLinks: true,
                teams: {
                    select: {
                        id: true,
                        name: true,
                        game: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
        })

        if (!player) {
            return cors(NextResponse.json({ error: "Player not found" }, { status: 404 }))
        }

        return cors(NextResponse.json({ player }))
    } catch (error) {
        console.error("Error fetching player:", error)
        return cors(NextResponse.json({ error: "Failed to fetch player" }, { status: 500 }))
    }
}

