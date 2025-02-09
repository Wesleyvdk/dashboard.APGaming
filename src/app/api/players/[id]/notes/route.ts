import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const notes = await prisma.playerNote.findMany({
    where: {
      playerId: params.id,
      OR: [
        { authorId: user.userId },
        { isPrivate: false },
        { author: { role: "ADMIN" } },
      ],
    },
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
  });

  return NextResponse.json(notes);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content, isPrivate } = await request.json();

  const note = await prisma.playerNote.create({
    data: {
      playerId: params.id,
      authorId: user.userId,
      content,
      isPrivate,
    },
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });

  return NextResponse.json(note);
}
