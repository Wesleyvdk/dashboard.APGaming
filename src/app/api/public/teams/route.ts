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
        const gameId = searchParams.get("gameId")

        const where = gameId ? { gameId } : {}

        const teams = await prisma.team.findMany({
            where,
            select: {
                id: true,
                name: true,
                game: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                _count: {
                    select: {
                        players: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                name: "asc",
            },
        })

        const transformedTeams = teams.map((team) => ({
            id: team.id,
            name: team.name,
            game: team.game,
            playerCount: team._count.players,
            createdAt: team.createdAt,
            updatedAt: team.updatedAt,
        }))

        return cors(
            NextResponse.json({
                teams: transformedTeams,
            }),
        )
    } catch (error) {
        console.error("Error fetching teams:", error)
        return cors(NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 }))
    }
}

