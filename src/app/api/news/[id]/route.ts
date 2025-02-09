import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const getParams = await params;
  const news = await prisma.news.findUnique({
    where: { id: getParams.id },
    include: {
      author: {
        select: {
          username: true,
        },
      },
      tags: true,
    },
  });

  if (!news) {
    return NextResponse.json({ error: "News not found" }, { status: 404 });
  }

  return NextResponse.json(news);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const putParams = await params;
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, isPublished, tags } = await request.json();

  const news = await prisma.news.update({
    where: { id: putParams.id },
    data: {
      title,
      content,
      publishedAt: isPublished ? new Date() : null,
      tags: {
        set: tags.map((tagId: string) => ({ id: tagId })),
      },
    },
    include: {
      tags: true,
    },
  });

  return NextResponse.json(news);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const deleteParams = await params;
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.news.delete({
    where: { id: deleteParams.id },
  });

  return NextResponse.json({ message: "News deleted successfully" });
}
