import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

// GET all news articles
export async function GET() {
  try {
    const news = await prisma.news.findMany({
      include: { author: { select: { email: true } } },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST a new news article
export async function POST(request: NextRequest) {
  const decodedToken = await verifyToken(request);
  if (!decodedToken || !["ADMIN", "NEWS_WRITER"].includes(decodedToken.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { title, content } = await request.json();
    const news = await prisma.news.create({
      data: {
        title,
        content,
        authorId: decodedToken.userId,
      },
    });
    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
