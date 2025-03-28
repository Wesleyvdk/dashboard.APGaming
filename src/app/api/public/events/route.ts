import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const upcoming = searchParams.get("upcoming") === "true"
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit") as string) : undefined
    const page = searchParams.get("page") ? Number.parseInt(searchParams.get("page") as string) : 1
    const pageSize = limit || 10
    const skip = (page - 1) * pageSize

    const where = {
        isPublic: true,
        ...(upcoming && {
            startDate: {
                gte: new Date(),
            },
        }),
    }

    const [events, totalCount] = await Promise.all([
        prisma.event.findMany({
            where,
            include: {
                team: {
                    select: {
                        id: true,
                        name: true,
                        logo: true,
                    },
                },
            },
            orderBy: {
                startDate: "asc",
            },
            skip,
            take: pageSize,
        }),
        prisma.event.count({ where }),
    ])

    const publicEvents = events.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate,
        allDay: event.allDay,
        type: event.type,
        location: event.location,
        team: event.team,
    }))

    return NextResponse.json({
        events: publicEvents,
        pagination: {
            total: totalCount,
            page,
            pageSize,
            pageCount: Math.ceil(totalCount / pageSize),
        },
    })
}

