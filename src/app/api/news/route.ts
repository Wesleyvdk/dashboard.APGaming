import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const news = await prisma.news.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
      tags: true,
    },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, isPublished, tags } = await request.json();

  const news = await prisma.news.create({
    data: {
      title,
      content,
      authorId: user.userId,
      publishedAt: isPublished ? new Date() : null,
      tags: {
        connect: tags.map((tagId: string) => ({ id: tagId })),
      },
    },
    include: {
      tags: true,
    },
  });

  return NextResponse.json(news);
}
