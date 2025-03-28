import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { deleteFromR2 } from "@/lib/r2-storage"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Get the media item
    const mediaItem = await prisma.mediaItem.findUnique({
      where: { id },
    })

    if (!mediaItem) {
      return NextResponse.json({ message: "Media item not found" }, { status: 404 })
    }

    // Delete from R2
    await deleteFromR2(mediaItem.path)

    // Delete from database
    await prisma.mediaItem.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Media item deleted successfully" })
  } catch (error) {
    console.error("Media delete error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

