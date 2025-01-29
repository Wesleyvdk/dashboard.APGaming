import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

// GET a specific news article
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const news = await prisma.news.findUnique({
      where: { id: params.id },
      include: { author: { select: { email: true } } },
    });
    if (!news) {
      return NextResponse.json(
        { error: "News article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT (update) a news article
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const decodedToken = await verifyToken(request);
  if (!decodedToken || !["ADMIN", "NEWS_WRITER"].includes(decodedToken.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { title, content } = await request.json();
    const news = await prisma.news.update({
      where: { id: params.id },
      data: { title, content },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error("Error updating news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE a news article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const decodedToken = await verifyToken(request);
  if (!decodedToken || !["ADMIN"].includes(decodedToken.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    await prisma.news.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "News article deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
