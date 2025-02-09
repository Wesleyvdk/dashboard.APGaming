import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import type { Activity } from "./types";

export async function getRecentActivity(): Promise<Activity[]> {
  const user = await auth();

  if (!user) {
    return [];
  }

  return prisma.activity.findMany({
    where: {
      OR: [
        { userId: user.userId },
        {
          user: {
            teams: {
              some: {
                managers: {
                  some: {
                    id: user.userId,
                  },
                },
              },
            },
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
}
