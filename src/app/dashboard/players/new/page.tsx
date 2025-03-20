import { getGames } from "@/lib/games";
import { NewPlayerForm } from "./new-player-form";

export default async function NewPlayerPage() {
  const games = await getGames();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Player</h1>
      <NewPlayerForm games={games} />
    </div>
  );
}
