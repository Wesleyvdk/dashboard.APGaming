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
        const paramProps = await params;
        const teamId = paramProps.id

        const team = await prisma.team.findUnique({
            where: { id: teamId },
            select: {
                id: true,
                name: true,
                game: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                players: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        inGameName: true,
                        role: true,
                        rank: true,
                        country: true,
                    },
                    orderBy: {
                        inGameName: "asc",
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
        })

        if (!team) {
            return cors(NextResponse.json({ error: "Team not found" }, { status: 404 }))
        }

        return cors(NextResponse.json({ team }))
    } catch (error) {
        console.error("Error fetching team:", error)
        return cors(NextResponse.json({ error: "Failed to fetch team" }, { status: 500 }))
    }
}

