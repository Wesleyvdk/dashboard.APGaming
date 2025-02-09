import { Suspense } from "react";
import { getGames } from "@/lib/games";
import { GameRosters } from "./game-rosters";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Users } from "lucide-react";

export default async function PlayersPage() {
  const games = await getGames();

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Players</h1>
        <div className="space-x-2">
          <Button asChild>
            <Link href="/dashboard/teams/new">
              <Users className="mr-2 h-4 w-4" /> Add Team
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/players/new">
              <Plus className="mr-2 h-4 w-4" /> Add Player
            </Link>
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {games.map((game) => (
          <GameRosters key={game.id} game={game} />
        ))}
      </Suspense>
    </div>
  );
}
