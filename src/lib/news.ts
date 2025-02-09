import { prisma } from "@/lib/prisma";
import type { News } from "./types";

export async function getRecentNews(): Promise<News[]> {
  return prisma.news.findMany({
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
          username: true,
        },
      },
      tags: true,
    },
  });
}

export async function getNews(): Promise<News[]> {
  return prisma.news.findMany({
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    include: {
      author: {
        select: {
          username: true,
        },
      },
      tags: true, // Make sure tags are included in the query
    },
  });
}
