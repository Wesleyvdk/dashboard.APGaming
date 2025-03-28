import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

// Define validation schema for player creation
const playerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  inGameName: z.string().min(1),
  email: z.string().email().optional().nullable(),
  dateOfBirth: z.date().optional().nullable(),
  country: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  rank: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamIds: z.array(z.string()).optional(),
  socialLinks: z.record(z.string()).optional(),
  trackerLinks: z.record(z.string()).optional(),
})

export async function GET(request: Request) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const teamId = searchParams.get("teamId")
    const search = searchParams.get("search")

    // Build the where clause
    const where: any = {}

    if (teamId) {
      where.teams = {
        some: {
          id: teamId,
        },
      }
    }

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { inGameName: { contains: search, mode: "insensitive" } },
      ]
    }

    const players = await prisma.player.findMany({
      where,
      include: {
        teams: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        lastName: "asc",
      },
    })

    return NextResponse.json(players)
  } catch (error) {
    console.error("Get players error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Check if user has admin or team manager role
    if (!session.roles.some((role) => ["ADMIN", "TEAM_MANAGER"].includes(role))) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    const data = await request.json()

    // Validate the data
    const validationResult = playerSchema.safeParse(data)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: validationResult.error.format(),
        },
        { status: 400 },
      )
    }

    // Check if user exists if userId is provided
    if (data.userId) {
      const user = await prisma.user.findUnique({
        where: { id: data.userId },
        include: { player: true },
      })

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 })
      }

      // Check if user already has a player profile
      if (user.player) {
        return NextResponse.json({ message: "User already has a player profile" }, { status: 400 })
      }
    }

    // Create the player
    const player = await prisma.player.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        inGameName: data.inGameName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        country: data.country,
        role: data.role,
        rank: data.rank,
        socialLinks: data.socialLinks,
        trackerLinks: data.trackerLinks,
        user: data.userId ? { connect: { id: data.userId } } : undefined,
        teams: data.teamIds?.length
          ? {
            connect: data.teamIds.map((id: string) => ({ id })),
          }
          : undefined,
      },
      include: {
        teams: true,
        user: true,
      },
    })

    // If a user is linked, update their roles to include PLAYER
    if (data.userId) {
      await prisma.user.update({
        where: { id: data.userId },
        data: {
          roles: {
            push: "PLAYER",
          },
        },
      })
    }

    // Log activity
    await prisma.activity.create({
      data: {
        type: "PLAYER_ADDED",
        message: `Player ${data.firstName} ${data.lastName} (${data.inGameName}) was added`,
        user: { connect: { id: session.userId } },
        metadata: {
          playerId: player.id,
          playerName: `${data.firstName} ${data.lastName}`,
          inGameName: data.inGameName,
        },
      },
    })

    return NextResponse.json(player, { status: 201 })
  } catch (error) {
    console.error("Create player error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

