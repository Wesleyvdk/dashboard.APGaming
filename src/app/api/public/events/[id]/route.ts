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

export async function GET(request: Request, { params }: { params: { id: string } }) {
    return cors(
        await (async () => {
            try {
                const paramProps = await params;
                const eventId = paramProps.id;

                const event = await prisma.event.findUnique({
                    where: {
                        id: eventId,
                        isPublic: true,
                    },
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

                if (!event) {
                    return NextResponse.json({ error: "Event not found or not public" }, { status: 404 })
                }

                return NextResponse.json({
                    ...event,
                    attendeeCount: event._count.attendees,
                    _count: undefined,
                    hasAvailableSpots: event.maxAttendees ? event._count.attendees < event.maxAttendees : true,
                })
            } catch (error) {
                console.error("Error fetching event:", error)
                return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 })
            }
        })(),
    )
}

