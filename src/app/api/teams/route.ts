import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const teams = await prisma.team.findMany({
    include: {
      game: true,
      players: true,
    },
  });
  return NextResponse.json(teams);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user || !["ADMIN", "TEAM_MANAGER"].includes(user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();

  // Find the game based on the provided gameId
  const game = await prisma.game.findFirst({
    where: {
      name: {
        in: ["Rocket League", "League of Legends", "EAFC"],
      },
      id: data.gameId,
    },
  });

  if (!game) {
    return NextResponse.json(
      { error: "Invalid game selected" },
      { status: 400 }
    );
  }

  const team = await prisma.team.create({
    data: {
      name: data.name,
      game: { connect: { id: game.id } },
    },
    include: {
      game: true,
    },
  });

  return NextResponse.json(team);
}
