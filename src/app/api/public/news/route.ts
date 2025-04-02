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
        const limit = Number.parseInt(searchParams.get("limit") || "10")
        const page = Number.parseInt(searchParams.get("page") || "1")
        const sort = searchParams.get("sort") || "desc"
        const tag = searchParams.get("tag")

        if (sort !== "asc" && sort !== "desc") {
            return cors(NextResponse.json({ error: "Sort parameter must be 'asc' or 'desc'" }, { status: 400 }))
        }

        const skip = (page - 1) * limit

        const where = {
            publishedAt: {
                not: null,
            },
            ...(tag
                ? {
                    tags: {
                        some: {
                            name: tag,
                        },
                    },
                }
                : {}),
        }

        const articles = await prisma.news.findMany({
            where,
            select: {
                id: true,
                title: true,
                content: false,
                author: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
                publishedAt: true,
                tags: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                featuredImage: {
                    select: {
                        id: true,
                        url: true,
                        alt: true,
                    },
                },
            },
            orderBy: {
                publishedAt: sort,
            },
            skip,
            take: limit,
        })

        const totalArticles = await prisma.news.count({ where })

        return cors(
            NextResponse.json({
                articles,
                pagination: {
                    total: totalArticles,
                    pages: Math.ceil(totalArticles / limit),
                    current: page,
                    limit,
                },
            }),
        )
    } catch (error) {
        console.error("Error fetching news articles:", error)
        return cors(NextResponse.json({ error: "Failed to fetch news articles" }, { status: 500 }))
    }
}

