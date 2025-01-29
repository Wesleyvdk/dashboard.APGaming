import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import type { Match } from "./types";

export async function getUpcomingMatches(): Promise<Match[]> {
  const user = await auth();

  if (!user) {
    return [];
  }

  const now = new Date();

  return prisma.match.findMany({
    where: {
      date: {
        gte: now,
      },
      team: {
        managers: {
          some: {
            id: user.userId,
          },
        },
      },
    },
    orderBy: {
      date: "asc",
    },
    take: 5,
    include: {
      team: {
        select: {
          name: true,
        },
      },
    },
  });
}
