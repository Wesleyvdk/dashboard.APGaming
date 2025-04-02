/* eslint-disable @typescript-eslint/no-unused-vars */
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
        const tags = await prisma.tag.findMany({
            select: {
                id: true,
                name: true,
                _count: {
                    select: {
                        news: {
                            where: {
                                publishedAt: {
                                    not: null,
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                name: "asc",
            },
        })

        const transformedTags = tags.map((tag) => ({
            id: tag.id,
            name: tag.name,
            articleCount: tag._count.news,
        }))

        return cors(NextResponse.json({ tags: transformedTags }))
    } catch (error) {
        console.error("Error fetching news tags:", error)
        return cors(NextResponse.json({ error: "Failed to fetch news tags" }, { status: 500 }))
    }
}

