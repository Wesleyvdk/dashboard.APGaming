import { prisma } from "@/lib/prisma";
import type { News } from "./types";

export async function getRecentNews(): Promise<News[]> {
  const news = await prisma.news.findMany({
    where: {
      publishedAt: { not: null },
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 5,
    include: {
      author: {
        select: {
          email: true,
        },
      },
    },
  });

  if (!news || news.length === 0) {
    return [
      {
        id: "default-id",
        title: "No recent news available",
        content: "There are currently no recent news articles available.",
        authorId: "cm6i6u0qz0000ub4g3ke2mgjm",
        author: {
          email: "contact@ap-gaming.org",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
      },
    ];
  }

  return news;
}

export async function getNews(): Promise<News[]> {
  return prisma.news.findMany({
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    include: {
      author: {
        select: {
          email: true,
        },
      },
    },
  });
}
