import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params: paramsPromise }: { params: Promise<{ id: string }> }
) {
  const params = await paramsPromise;
  const news = await prisma.news.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: {
          email: true,
        },
      },
    },
  });

  if (!news) {
    return NextResponse.json({ error: "News not found" }, { status: 404 });
  }
  return NextResponse.json(news);
}

export async function PUT(
  request: Request,
  { params: paramsPromise }: { params: Promise<{ id: string }> }
) {
  const params = await paramsPromise;
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, isPublished } = await request.json();

  const news = await prisma.news.update({
    where: { id: params.id },
    data: {
      title,
      content,
      publishedAt: isPublished ? new Date() : null,
    },
  });

  return NextResponse.json(news);
}

export async function DELETE(
  request: Request,
  { params: paramsPromise }: { params: Promise<{ id: string }> }
) {
  const params = await paramsPromise;
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.news.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "News deleted successfully" });
}
