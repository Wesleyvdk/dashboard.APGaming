import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function POST(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const paramsId = await params.id;
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await request.json();

  const gameManager = await prisma.gameManager.create({
    data: {
      gameId: paramsId,
      userId,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return NextResponse.json(gameManager);
}

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const params = await props.params;

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
