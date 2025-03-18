import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasAnyRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const player = await prisma.player.findUnique({
    where: { id: params.id },
    include: {
      teams: true,
      stats: true,
      user: {
        select: {
          id: true,
          username: true,
          status: true,
        },
      },
      contracts: {
        orderBy: {
          startDate: "desc",
        },
      },
      notes: {
        include: {
          author: {
            select: {
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!player) {
    return NextResponse.json({ error: "Player not found" }, { status: 404 });
  }

  return NextResponse.json(player);
}

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user || !hasAnyRole(user, [Role.ADMIN, Role.TEAM_MANAGER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  const data = await request.json();

  // Start a transaction
  const result = await prisma.$transaction(async (prisma) => {
    // Get the current player
    const currentPlayer = await prisma.player.findUnique({
      where: { id: params.id },
      include: {
        user: true,
      },
    });

    if (!currentPlayer) {
      throw new Error("Player not found");
    }

    // Handle user account changes
    if (data.userId) {
      // If the player already has a different user linked
      if (currentPlayer.userId && currentPlayer.userId !== data.userId) {
        // Disconnect the current user
        await prisma.player.update({
          where: { id: params.id },
          data: {
            user: { disconnect: true },
          },
        });
      }

      // Check if the new user exists
      const existingUser = await prisma.user.findUnique({
        where: { id: data.userId },
        include: {
          player: true,
        },
      });

      if (!existingUser) {
        throw new Error("User not found");
      }

      // Check if the user already has a different player profile
      if (existingUser.player && existingUser.player.id !== params.id) {
        throw new Error("User already has a player profile");
      }

      // If the user is disabled, reactivate them and change role to PLAYER
      if (existingUser.status === "DISABLED") {
        await prisma.user.update({
          where: { id: data.userId },
          data: {
            status: "ACTIVE",
            roles: {
              push: Role.PLAYER,
            },
          },
        });
      }
      // If the user is not disabled but has a different role, change to PLAYER
      else if (!existingUser.roles.includes(Role.PLAYER)) {
        await prisma.user.update({
          where: { id: data.userId },
          data: {
            roles: {
              push: Role.PLAYER,
            },
          },
        });
      }
    }

    await prisma.player.update({
      where: { id: params.id },
      data: {
        teams: {
          set: [], // Disconnect all existing teams
        },
      },
    });

    const player = await prisma.player.update({
      where: { id: params.id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        inGameName: data.inGameName,
        username: data.username,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        country: data.country,
        teams:
          data.teamIds && data.teamIds.length > 0
            ? {
                connect: data.teamIds.map((id: string) => ({ id })),
              }
            : undefined,
        role: data.role,
        rank: data.rank,
        socialLinks: data.socialLinks || {},
        trackerLinks: data.trackerLinks || {},
        endDate: data.endDate ? new Date(data.endDate) : null,
        ...(data.userId && { user: { connect: { id: data.userId } } }),
      },
      include: {
        teams: true,
        stats: true,
        contracts: {
          where: {
            isActive: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            username: true,
            status: true,
          },
        },
      },
    });

    // Create activity log
    await prisma.activity.create({
      data: {
        type: "PLAYER_UPDATED",
        message: `Player "${data.inGameName}" updated`,
        userId: user.userId,
      },
    });

    return player;
  });

  return NextResponse.json(result);
}

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user || !hasAnyRole(user, [Role.ADMIN, Role.TEAM_MANAGER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  await prisma.player.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
