import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;

  const notes = await prisma.playerNote.findMany({
    where: {
      playerId: params.id,
      OR: [
        { authorId: user.id },
        { isPrivate: false },
        { author: { roles: { has: "ADMIN" } } },
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
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;

  const { content, isPrivate } = await request.json();

  const note = await prisma.playerNote.create({
    data: {
      playerId: params.id,
      authorId: user.id,
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
