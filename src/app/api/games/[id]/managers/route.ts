import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await request.json();

  const gameManager = await prisma.gameManager.create({
    data: {
      gameId: params.id,
      userId,
    },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  });

  return NextResponse.json(gameManager);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await request.json();

  await prisma.gameManager.delete({
    where: {
      gameId_userId: {
        gameId: params.id,
        userId,
      },
    },
  });

  return NextResponse.json({ success: true });
}
