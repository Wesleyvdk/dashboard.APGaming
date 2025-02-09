import { getPlayerById } from "@/lib/players";
import { notFound } from "next/navigation";
import { PlayerProfile } from "@/components/player-profile";
import { PlayerStats } from "@/components/player-stats";
import { PlayerContracts } from "@/components/player-contracts";
import { PlayerNotes } from "@/components/player-notes";

export default async function PlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const playerParams = await params;
  const player = await getPlayerById(playerParams.id);

  if (!player) {
    notFound();
  }

  return (
    <div className="w-full space-y-6">
      <PlayerProfile player={player} />
      <div className="grid gap-6 md:grid-cols-2">
        <PlayerStats player={player} />
        <PlayerContracts player={player} />
      </div>
      <PlayerNotes player={player} />
    </div>
  );
}
