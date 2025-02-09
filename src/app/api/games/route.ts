import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const games = await prisma.game.findMany({
    include: {
      teams: {
        include: {
          players: true,
        },
      },
      managers: {
        include: {
          user: {
            select: {
              id: true,
              email: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json(games);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name } = await request.json();

  const game = await prisma.game.create({
    data: {
      name,
    },
  });

  return NextResponse.json(game);
}
