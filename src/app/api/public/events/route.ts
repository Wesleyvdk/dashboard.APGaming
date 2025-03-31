import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { cors } from "@/lib/cors"

export async function OPTIONS() {
    return cors(
        new Response(null, {
            status: 204,
        }),
    )
}

export async function GET(request: Request) {
    return cors(
        await (async () => {
            try {
                const { searchParams } = new URL(request.url)
                const limit = Number.parseInt(searchParams.get("limit") || "10")
                const page = Number.parseInt(searchParams.get("page") || "1")
                const skip = (page - 1) * limit

                // Get upcoming public events
                const events = await prisma.event.findMany({
                    where: {
                        startDate: {
                            gte: new Date(),
                        },
                        isPublic: true,
                    },
                    orderBy: {
                        startDate: "asc",
                    },
                    take: limit,
                    skip: skip,
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        startDate: true,
                        endDate: true,
                        type: true,
                        location: true,
                        maxAttendees: true,
                        _count: {
                            select: {
                                attendees: true,
                            },
                        },
                    },
                })

                // Get total count for pagination
                const totalEvents = await prisma.event.count({
                    where: {
                        startDate: {
                            gte: new Date(),
                        },
                        isPublic: true,
                    },
                })


                console.log("Events:", events);


                return NextResponse.json({
                    events: events.map((event) => ({
                        ...event,
                        attendeeCount: event._count.attendees,
                        _count: undefined,
                    })),
                    pagination: {
                        total: totalEvents,
                        pages: Math.ceil(totalEvents / limit),
                        current: page,
                        limit,
                    },
                })
            } catch (error) {
                console.error("Error fetching public events:", error)
                return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
            }
        })(),
    )
}

