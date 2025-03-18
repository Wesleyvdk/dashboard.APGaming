import { getPlayerById } from "@/lib/players";
import { notFound } from "next/navigation";
import { PlayerProfile } from "@/components/player-profile";
import { PlayerStats } from "@/components/player-stats";
import { PlayerContracts } from "@/components/player-contracts";
import { PlayerNotes } from "@/components/player-notes";
import { prisma } from "@/lib/prisma";

export default async function PlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const playerParams = await params;
  const player = await getPlayer(playerParams.id);

  if (!player) {
    notFound();
  }

  return (
    <div className="w-full space-y-6">
      <PlayerProfile player={player} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Team Information</h3>
          {player.teams && player.teams.length > 0 ? (
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="space-y-4">
                {player.teams.map((team) => (
                  <div
                    key={team.id}
                    className="border-b pb-3 last:border-b-0 last:pb-0"
                  >
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-gray-500">
                      Game: {team.game.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-sm text-gray-500">
                  Role: {player.role || "Not specified"}
                </p>
                <p className="text-sm text-gray-500">
                  Rank: {player.rank || "Not specified"}
                </p>
                <p className="text-sm text-gray-500">
                  Joined: {new Date(player.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No teams assigned</p>
          )}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <PlayerStats player={player} />
        <PlayerContracts player={player} />
      </div>
      <PlayerNotes player={player} />
    </div>
  );
}

async function getPlayer(id: string) {
  const player = await prisma.player.findUnique({
    where: { id },
    include: {
      teams: {
        include: {
          game: true,
        },
      },
      stats: true,
      contracts: {
        where: {
          isActive: true,
        },
        orderBy: {
          startDate: "desc",
        },
      },
      notes: {
        include: {
          author: {
            select: {
              id: true,
              username: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          username: true,
          status: true,
        },
      },
    },
  });

  if (!player) {
    notFound();
  }

  return player;
}
