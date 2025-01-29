import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import type { Team } from "./types";

export async function getUserTeams(): Promise<Team[]> {
  const user = await auth();

  if (!user) {
    return [];
  }

  return prisma.team.findMany({
    where: {
      managers: {
        some: {
          id: user.userId,
        },
      },
    },
    include: {
      players: {
        orderBy: {
          joinDate: "desc",
        },
      },
    },
  });
}
