import { prisma } from "@/lib/prisma";
import type { Game } from "./types";
import { Player } from "@prisma/client";

export async function getAllPlayers(): Promise<Player[]> {
  return prisma.player.findMany({
    include: {
      teams: {
        include: {
          game: true,
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          username: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

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
