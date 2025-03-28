import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"

export async function processEventReminders() {
    // Get events that are coming up in the next 24 hours and haven't had reminders sent
    const upcomingEvents = await prisma.event.findMany({
        where: {
            startDate: {
                gte: new Date(),
                lte: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
            },
            reminderSent: false,
        },
        include: {
            team: {
                select: {
                    id: true,
                    name: true,
                    players: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    email: true,
                                    notificationPreferences: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    })

    for (const event of upcomingEvents) {
        // Get all users who should be notified
        const usersToNotify =
            event.team?.players
                .filter((player) => player.user?.notificationPreferences?.matchReminders)
                .map((player) => player.user) || []

        // Also get all users with matchReminders enabled if it's a general event
        if (!event.team) {
            const allUsers = await prisma.user.findMany({
                where: {
                    notificationPreferences: {
                        matchReminders: true,
                    },
                },
                include: {
                    notificationPreferences: true,
                },
            })
            usersToNotify.push(...allUsers)
        }

        // Send email notifications
        for (const user of usersToNotify) {
            if (user?.notificationPreferences?.emailNotifications && user.email) {
                await sendEmail({
                    to: user.email,
                    subject: `Reminder: ${event.title} is coming up!`,
                    template: "EVENT_REMINDER",
                    data: {
                        userName: user.username || "there",
                        eventTitle: event.title,
                        eventDate: event.startDate.toLocaleString(),
                        eventLocation: event.location || "TBA",
                        eventDescription: event.description || "",
                    },
                })
            }
        }

        // Mark the event as having had reminders sent
        await prisma.event.update({
            where: { id: event.id },
            data: { reminderSent: true },
        })
    }
}

