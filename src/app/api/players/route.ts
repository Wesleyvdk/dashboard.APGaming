import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasAnyRole, hasRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";
import crypto from "crypto";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameId = searchParams.get("gameId");
  const teamId = searchParams.get("teamId");

  const where = {
    ...(teamId && { teams: { some: { id: teamId } } }),
    ...(gameId && { teams: { some: { gameId } } }),
  };

  const players = await prisma.player.findMany({
    where,
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
        where: {
          isActive: true,
        },
      },
    },
  });

  return NextResponse.json(players);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user || !hasAnyRole(user, [Role.ADMIN, Role.TEAM_MANAGER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();

  // Start a transaction
  const result = await prisma.$transaction(async (prisma) => {
    let userId = data.userId;
    let invitationLink = null;

    // If no userId is provided but email is, check if user exists or create one
    if (!userId && data.email) {
      // Check if a user with this email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        // Use existing user
        userId = existingUser.id;

        // If the user is disabled, reactivate them and add PLAYER role
        if (existingUser.status === "DISABLED") {
          await prisma.user.update({
            where: { id: userId },
            data: {
              status: "ACTIVE",
              roles: {
                push: Role.PLAYER,
              },
            },
          });
        }
        // If the user is not disabled, add PLAYER role if not already present
        else if (!existingUser.roles.includes(Role.PLAYER)) {
          await prisma.user.update({
            where: { id: userId },
            data: {
              roles: {
                push: Role.PLAYER,
              },
            },
          });
        }
      } else {
        // Create a new user with a pending status
        const invitationToken = crypto.randomBytes(32).toString("hex");

        const newUser = await prisma.user.create({
          data: {
            email: data.email,
            username: data.inGameName, // Use in-game name as initial username
            roles: [Role.PLAYER],
            status: "PENDING",
            invitationToken,
          },
        });

        userId = newUser.id;
        invitationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/invite/accept/${invitationToken}`;
      }
    } else if (userId) {
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          player: true,
        },
      });

      if (!existingUser) {
        throw new Error("User not found");
      }

      // Check if the user already has a player profile
      if (existingUser.player) {
        throw new Error("User already has a player profile");
      }

      if (existingUser.status === "DISABLED") {
        await prisma.user.update({
          where: { id: userId },
          data: {
            status: "ACTIVE",
            roles: {
              push: Role.PLAYER,
            },
          },
        });
      } else if (!existingUser.roles.includes(Role.PLAYER)) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            roles: {
              push: Role.PLAYER,
            },
          },
        });
      }
    }

    // Create the player

    const player = await prisma.player.create({
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
        ...(userId && { user: { connect: { id: userId } } }),
        ...(data.contract && {
          contracts: {
            create: {
              startDate: new Date(data.contract.startDate),
              endDate: new Date(data.contract.endDate),
              terms: data.contract.terms,
            },
          },
        }),
      },
      include: {
        teams: true,
        stats: true,
        contracts: true,
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
        type: "PLAYER_ADDED",
        message: `Player "${data.inGameName}" added to the roster`,
        userId: user.userId,
      },
    });

    return { player, invitationLink };
  });

  return NextResponse.json(result);
}
