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
        const articleId = paramProps.id

        // Fetch the article with all related data
        const article = await prisma.news.findUnique({
            where: {
                id: articleId,
            },
            select: {
                id: true,
                title: true,
                content: true,
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
                mediaItems: {
                    select: {
                        id: true,
                        url: true,
                        alt: true,
                        caption: true,
                    },
                },
            },
        })

        // Return 404 if article not found or not published
        if (!article || !article.publishedAt) {
            return cors(NextResponse.json({ error: "Article not found or not published" }, { status: 404 }))
        }

        // Return the response with CORS headers
        return cors(NextResponse.json({ article }))
    } catch (error) {
        console.error("Error fetching news article:", error)
        return cors(NextResponse.json({ error: "Failed to fetch news article" }, { status: 500 }))
    }
}

