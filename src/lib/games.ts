import { prisma } from "@/lib/prisma";
import type { Game } from "./types";

export async function getGames(): Promise<Game[]> {
  return prisma.game.findMany({
    include: {
      teams: {
        include: {
          players: true,
        },
      },
      managers: {
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      },
    },
  });
}
