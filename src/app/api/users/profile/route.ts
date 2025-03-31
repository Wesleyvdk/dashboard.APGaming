import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

const profileSchema = z.object({
    email: z.string().email().optional(),
    username: z.string().min(3).optional(),
    bio: z.string().max(500).optional(),

    // Player data
    player: z
        .object({
            firstName: z.string().min(1).optional(),
            lastName: z.string().min(1).optional(),
            inGameName: z.string().min(1).optional(),
            dateOfBirth: z.date().nullable().optional(),
            country: z.string().optional(),
            role: z.string().optional(),
            rank: z.string().optional(),
            socialLinks: z.record(z.string()).optional(),
            trackerLinks: z.record(z.string()).optional(),
        })
        .optional(),
})

export async function GET() {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { id: session.id },
            include: {
                player: true,
                notificationPrefs: true,
            },
        })

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }

        const { password, ...userWithoutPassword } = user

        return NextResponse.json(userWithoutPassword)
    } catch (error) {
        console.error("Get profile error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

export async function PATCH(request: Request) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const data = await request.json()

        const validationResult = profileSchema.safeParse(data)
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    errors: validationResult.error.format(),
                },
                { status: 400 },
            )
        }
        const user = await prisma.user.findUnique({
            where: { id: session.userId },
            include: { player: true },
        })

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }

        const userUpdateData: any = {}
        if (data.email !== undefined) userUpdateData.email = data.email
        if (data.username !== undefined) userUpdateData.username = data.username
        if (data.bio !== undefined) userUpdateData.bio = data.bio

        const updatedUser = await prisma.user.update({
            where: { id: session.userId },
            data: userUpdateData,
            include: { player: true },
        })

        if (data.player && user.player) {
            const playerUpdateData: any = {}

            if (data.player.firstName !== undefined) playerUpdateData.firstName = data.player.firstName
            if (data.player.lastName !== undefined) playerUpdateData.lastName = data.player.lastName
            if (data.player.inGameName !== undefined) playerUpdateData.inGameName = data.player.inGameName
            if (data.player.dateOfBirth !== undefined) playerUpdateData.dateOfBirth = data.player.dateOfBirth
            if (data.player.country !== undefined) playerUpdateData.country = data.player.country
            if (data.player.role !== undefined) playerUpdateData.role = data.player.role
            if (data.player.rank !== undefined) playerUpdateData.rank = data.player.rank
            if (data.player.socialLinks !== undefined) playerUpdateData.socialLinks = data.player.socialLinks
            if (data.player.trackerLinks !== undefined) playerUpdateData.trackerLinks = data.player.trackerLinks

            await prisma.player.update({
                where: { id: user.player.id },
                data: playerUpdateData,
            })
        }

        const refreshedUser = await prisma.user.findUnique({
            where: { id: session.userId },
            include: { player: true },
        })

        const { password: _, ...userWithoutPassword } = refreshedUser!

        return NextResponse.json({
            message: "Profile updated successfully",
            user: userWithoutPassword,
        })
    } catch (error) {
        console.error("Update profile error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

