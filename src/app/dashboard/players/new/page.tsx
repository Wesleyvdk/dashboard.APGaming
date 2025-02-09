import { getGames } from "@/lib/games";
import { PlayerForm } from "@/components/player-form";

export default async function NewPlayerPage() {
  const games = await getGames();

  return (
    <div>
      <h1 className="w-full text-3xl font-bold mb-6">Add New Player</h1>
      <PlayerForm games={games} />
    </div>
  );
}
