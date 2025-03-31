import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email" // Using the existing email utility

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(request: Request) {
    try {
        // Check for authorization header (optional, for security)
        const authHeader = request.headers.get("Authorization")
        if (process.env.CRON_SECRET && (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // Get today's date (start and end of day)
        const today = new Date()
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)

        // Find all events happening today
        const todaysEvents = await prisma.event.findMany({
            where: {
                startDate: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            include: {
                attendees: {
                    where: {
                        wantsReminder: true,
                    },
                },
            },
        })

        let remindersSent = 0

        // Send reminders for each event
        for (const event of todaysEvents) {
            for (const attendee of event.attendees) {
                // Format event date for the email template
                const eventDate = event.startDate.toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })

                // Send reminder email using the existing email template system
                await sendEmail({
                    to: attendee.email,
                    subject: `Reminder: ${event.title} today`,
                    template: "EVENT_REMINDER",
                    data: {
                        userName: attendee.name,
                        eventTitle: event.title,
                        eventDate: eventDate,
                        eventLocation: event.location || "Online",
                        eventDescription: event.description || "",
                    },
                })

                remindersSent++
            }
        }

        return NextResponse.json({
            success: true,
            eventCount: todaysEvents.length,
            remindersSent,
        })
    } catch (error) {
        console.error("Error sending event reminders:", error)
        return NextResponse.json({ error: "Failed to send event reminders" }, { status: 500 })
    }
}

