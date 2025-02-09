import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameId = searchParams.get("gameId");
  const teamId = searchParams.get("teamId");

  const where = {
    ...(teamId && { teamId }),
    ...(gameId && { team: { gameId } }),
  };

  const players = await prisma.player.findMany({
    where,
    include: {
      team: true,
      stats: true,
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
  if (!user || !["ADMIN", "TEAM_MANAGER"].includes(user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();

  const player = await prisma.player.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      inGameName: data.inGameName,
      username: data.username,
      dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
      country: data.country,
      teamId: data.teamId,
      role: data.role,
      rank: data.rank,
      socialLinks: data.socialLinks || {},
      ...(data.stats && {
        stats: {
          create: {
            stats: data.stats,
          },
        },
      }),
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
      team: true,
      stats: true,
      contracts: true,
    },
  });

  return NextResponse.json(player);
}
