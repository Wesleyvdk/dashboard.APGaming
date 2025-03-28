import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

const themeSchema = z.object({
    darkMode: z.boolean(),
})

export async function PUT(request: Request) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const data = await request.json()

        // Validate the data
        const validationResult = themeSchema.safeParse(data)
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    errors: validationResult.error.format(),
                },
                { status: 400 },
            )
        }

        // Update user theme preference
        await prisma.user.update({
            where: { id: session.userId },
            data: { darkMode: data.darkMode },
        })

        return NextResponse.json({
            message: "Theme preference updated successfully",
            darkMode: data.darkMode,
        })
    } catch (error) {
        console.error("Update theme preference error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

