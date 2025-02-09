import { getPlayerById } from "@/lib/players";
import { getGames } from "@/lib/games";
import { PlayerForm } from "@/components/player-form";
import { notFound } from "next/navigation";

export default async function EditPlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const games = await getGames();
  const player = await getPlayerById(params.id);

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
