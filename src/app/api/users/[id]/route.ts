import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()
    const paramProps = await params

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const isAdminOrManager = session.roles.some((role) => ["ADMIN", "TEAM_MANAGER"].includes(role))

    if (!isAdminOrManager && session.userId !== paramProps.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    const user = await prisma.user.findUnique({
      where: { id: paramProps.id },
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
    console.error("Get user error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

