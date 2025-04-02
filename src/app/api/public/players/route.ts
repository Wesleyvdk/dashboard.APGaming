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

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const teamId = searchParams.get("teamId")
        const gameId = searchParams.get("gameId")

        let where = {}

        if (teamId) {
            where = {
                teams: {
                    some: {
                        id: teamId,
                    },
                },
            }
        }

        if (gameId) {
            where = {
                ...where,
                teams: {
                    some: {
                        gameId,
                    },
                },
            }
        }

        const players = await prisma.player.findMany({
            where,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                inGameName: true,
                role: true,
                rank: true,
                country: true,
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
            orderBy: {
                inGameName: "asc",
            },
        })

        return cors(NextResponse.json({ players }))
    } catch (error) {
        console.error("Error fetching players:", error)
        return cors(NextResponse.json({ error: "Failed to fetch players" }, { status: 500 }))
    }
}

