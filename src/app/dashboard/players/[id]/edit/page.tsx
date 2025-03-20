import { getPlayerById } from "@/lib/players";
import { getGames } from "@/lib/games";
import { PlayerForm } from "@/components/player-form";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

async function getPlayer(id: string) {
  const player = await prisma.player.findUnique({
    where: { id },
    include: {
      teams: true,
      stats: true,
      contracts: {
        where: {
          isActive: true,
        },
      },
      user: true,
    },
  });

  if (!player) {
    notFound();
  }

  // Transform the player data to include teamIds for the form
  return {
    ...player,
    teamIds: player.teams.map((team) => team.id),
  };
}

export default async function EditPlayerPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const games = await getGames();
  const player = await getPlayer(params.id);

  if (!player) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Player</h1>
      <PlayerForm games={games} player={player} />
    </div>
  );
}
