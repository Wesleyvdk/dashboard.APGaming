import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { uploadToR2 } from "@/lib/r2-storage"

export async function POST(request: Request) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const formData = await request.formData()
        const file = formData.get("file") as File

        if (!file) {
            return NextResponse.json({ message: "No file provided" }, { status: 400 })
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            return NextResponse.json({ message: "Only image files are allowed" }, { status: 400 })
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                {
                    message: "File too large. Maximum size is 5MB.",
                },
                { status: 400 },
            )
        }

        // Generate a unique filename for the profile picture
        const contentType = file.type;
        const fileName = `${session.userId}-${Date.now()}.${file.name.split(".").pop()}`
        const filePath = `profile-pictures/${fileName}`
        const buffer = Buffer.from(await file.arrayBuffer());

        // Upload to R2 using the existing r2-storage.ts utility
        const { url } = await uploadToR2(
            buffer,
            fileName,
            contentType,
        )

        // Update user profile picture
        await prisma.user.update({
            where: { id: session.userId },
            data: { profilePicture: url },
        })

        return NextResponse.json({
            message: "Profile picture updated successfully",
            url,
        })
    } catch (error) {
        console.error("Profile picture upload error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

