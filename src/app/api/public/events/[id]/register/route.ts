import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { cors } from "@/lib/cors"

// Configure CORS for public API endpoints
export async function OPTIONS() {
    return cors(
        new Response(null, {
            status: 204,
        }),
    )
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
    // Apply CORS headers
    const response = await cors(
        await (async () => {
            try {
                const eventId = params.id
                const data = await request.json()
                const { name, email, wantsReminder = false } = data

                // Get IP and user agent
                const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
                const userAgent = request.headers.get("user-agent") || "unknown"
                const referrer = request.headers.get("referer") || null

                // Check if event exists and is public
                const event = await prisma.event.findUnique({
                    where: {
                        id: eventId,
                        isPublic: true,
                    },
                })

                if (!event) {
                    return NextResponse.json({ error: "Event not found or not public" }, { status: 404 })
                }

                // Validate required fields
                if (!email || !name) {
                    return NextResponse.json({ error: "Email and name are required" }, { status: 400 })
                }

                // Check if user already registered
                const existingAttendance = await prisma.eventAttendance.findFirst({
                    where: {
                        eventId,
                        email,
                    },
                })

                if (existingAttendance) {
                    // Update the existing registration if wantsReminder changed
                    if (existingAttendance.wantsReminder !== wantsReminder) {
                        await prisma.eventAttendance.update({
                            where: { id: existingAttendance.id },
                            data: { wantsReminder },
                        })

                        return NextResponse.json({
                            success: true,
                            message: "Registration updated",
                            attendanceId: existingAttendance.id,
                        })
                    }

                    return NextResponse.json(
                        {
                            success: true,
                            message: "Already registered for this event",
                            attendanceId: existingAttendance.id,
                        },
                        { status: 200 }
                    )
                }

                // Create attendance record
                const attendance = await prisma.eventAttendance.create({
                    data: {
                        eventId,
                        name,
                        email,
                        wantsReminder,
                        ipAddress: Array.isArray(ipAddress) ? ipAddress[0] : ipAddress,
                        userAgent,
                        referrer,
                    },
                })

                return NextResponse.json({
                    success: true,
                    message: "Successfully registered for event",
                    attendanceId: attendance.id,
                })
            } catch (error) {
                console.error("Error registering for event:", error)
                return NextResponse.json({ error: "Failed to register for event" }, { status: 500 })
            }
        })(),
    )

    return response
}

