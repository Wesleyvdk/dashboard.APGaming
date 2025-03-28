import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

// Define validation schema for player updates
const playerUpdateSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  inGameName: z.string().min(1).optional(),
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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const player = await prisma.player.findUnique({
      where: { id: params.id },
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
    })

    if (!player) {
      return NextResponse.json({ message: "Player not found" }, { status: 404 })
    }

    return NextResponse.json(player)
  } catch (error) {
    console.error("Get player error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
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
    const validationResult = playerUpdateSchema.safeParse(data)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: validationResult.error.format(),
        },
        { status: 400 },
      )
    }

    // Get the current player
    const currentPlayer = await prisma.player.findUnique({
      where: { id: params.id },
      include: { user: true },
    })

    if (!currentPlayer) {
      return NextResponse.json({ message: "Player not found" }, { status: 404 })
    }

    // Check if user exists if userId is provided and different from current
    if (data.userId && data.userId !== currentPlayer.userId) {
      const user = await prisma.user.findUnique({
        where: { id: data.userId },
        include: { player: true },
      })

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 })
      }

      // Check if user already has a player profile
      if (user.player && user.player.id !== params.id) {
        return NextResponse.json({ message: "User already has a player profile" }, { status: 400 })
      }
    }

    // Handle team connections/disconnections
    let teamUpdateData = {}
    if (data.teamIds) {
      // Get current team IDs
      const currentTeams = await prisma.team.findMany({
        where: {
          players: {
            some: {
              id: params.id,
            },
          },
        },
        select: { id: true },
      })

      const currentTeamIds = currentTeams.map((team) => team.id)

      // Determine teams to connect and disconnect
      const teamsToConnect = data.teamIds.filter((id: any) => !currentTeamIds.includes(id))
      const teamsToDisconnect = currentTeamIds.filter((id) => !data.teamIds.includes(id))

      teamUpdateData = {
        teams: {
          connect: teamsToConnect.map((id: any) => ({ id })),
          disconnect: teamsToDisconnect.map((id) => ({ id })),
        },
      }
    }

    // Handle user connection/disconnection
    let userUpdateData = {}
    if (data.userId !== undefined) {
      if (data.userId === null) {
        // Disconnect user if null is provided
        userUpdateData = {
          user: {
            disconnect: true,
          },
        }

        // If there was a user connected, remove PLAYER role
        if (currentPlayer.userId) {
          await prisma.user.update({
            where: { id: currentPlayer.userId },
            data: {
              roles: {
                set: (currentPlayer.user?.roles || []).filter((role) => role !== "PLAYER"),
              },
            },
          })
        }
      } else if (data.userId !== currentPlayer.userId) {
        // Connect new user
        userUpdateData = {
          user: {
            connect: { id: data.userId },
          },
        }

        // Add PLAYER role to new user
        await prisma.user.update({
          where: { id: data.userId },
          data: {
            roles: {
              push: "PLAYER",
            },
          },
        })

        // If there was a previous user, remove PLAYER role
        if (currentPlayer.userId) {
          await prisma.user.update({
            where: { id: currentPlayer.userId },
            data: {
              roles: {
                set: (currentPlayer.user?.roles || []).filter((role) => role !== "PLAYER"),
              },
            },
          })
        }
      }
    }

    // Update the player
    const player = await prisma.player.update({
      where: { id: params.id },
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
        ...userUpdateData,
        ...teamUpdateData,
      },
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
    })

    // Log activity
    await prisma.activity.create({
      data: {
        type: "PLAYER_UPDATED",
        message: `Player ${player.firstName} ${player.lastName} (${player.inGameName}) was updated`,
        user: { connect: { id: session.userId } },
        metadata: {
          playerId: player.id,
          playerName: `${player.firstName} ${player.lastName}`,
          inGameName: player.inGameName,
        },
      },
    })

    return NextResponse.json(player)
  } catch (error) {
    console.error("Update player error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Check if user has admin or team manager role
    if (!session.roles.some((role) => ["ADMIN", "TEAM_MANAGER"].includes(role))) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    // Get the player to be deleted
    const player = await prisma.player.findUnique({
      where: { id: params.id },
      include: { user: true },
    })

    if (!player) {
      return NextResponse.json({ message: "Player not found" }, { status: 404 })
    }

    // If player is linked to a user, remove PLAYER role
    if (player.userId) {
      await prisma.user.update({
        where: { id: player.userId },
        data: {
          roles: {
            set: (player.user?.roles || []).filter((role) => role !== "PLAYER"),
          },
        },
      })
    }

    // Delete the player
    await prisma.player.delete({
      where: { id: params.id },
    })

    // Log activity
    await prisma.activity.create({
      data: {
        type: "PLAYER_UPDATED",
        message: `Player ${player.firstName} ${player.lastName} (${player.inGameName}) was deleted`,
        user: { connect: { id: session.userId } },
        metadata: {
          playerName: `${player.firstName} ${player.lastName}`,
          inGameName: player.inGameName,
        },
      },
    })

    return NextResponse.json({ message: "Player deleted successfully" })
  } catch (error) {
    console.error("Delete player error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

