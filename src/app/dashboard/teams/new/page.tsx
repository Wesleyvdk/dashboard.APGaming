import { getGames } from "@/lib/games";
import { TeamForm } from "@/components/team-form";

export default async function NewTeamPage() {
  const games = await getGames();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Add New Team</h1>
      <TeamForm games={games} />
    </div>
  );
}
