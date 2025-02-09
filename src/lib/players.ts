import { prisma } from "@/lib/prisma";
import type { Player } from "./types";

export async function getPlayerById(id: string): Promise<Player | null> {
  return prisma.player.findUnique({
    where: { id },
    include: {
      team: true,
      stats: true,
      contracts: {
        orderBy: {
          startDate: "desc",
        },
      },
      notes: {
        include: {
          author: {
            select: {
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
}
