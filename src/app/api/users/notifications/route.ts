import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

const notificationSchema = z.object({
    emailNotifications: z.boolean().optional(),
    newsUpdates: z.boolean().optional(),
    teamUpdates: z.boolean().optional(),
    matchReminders: z.boolean().optional(),
    discordNotifications: z.boolean().optional(),
})

export async function GET() {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        // Get or create notification preferences
        let preferences = await prisma.notificationPreferences.findUnique({
            where: { userId: session.userId },
        })

        if (!preferences) {
            // Create default preferences
            preferences = await prisma.notificationPreferences.create({
                data: { userId: session.userId },
            })
        }

        return NextResponse.json(preferences)
    } catch (error) {
        console.error("Get notification preferences error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

export async function PUT(request: Request) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const data = await request.json()

        // Validate the data
        const validationResult = notificationSchema.safeParse(data)
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    errors: validationResult.error.format(),
                },
                { status: 400 },
            )
        }

        // Update or create notification preferences
        const preferences = await prisma.notificationPreferences.upsert({
            where: { userId: session.userId },
            update: data,
            create: {
                userId: session.userId,
                ...data,
            },
        })

        return NextResponse.json({
            message: "Notification preferences updated successfully",
            preferences,
        })
    } catch (error) {
        console.error("Update notification preferences error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

