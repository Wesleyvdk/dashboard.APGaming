import { getPlayerById } from "@/lib/players";
import { PlayerForm } from "@/components/players/player-form";
import { notFound } from "next/navigation";

export default async function EditPlayerPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const player = await getPlayerById(params.id);

  if (!player) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Player</h1>
      <PlayerForm playerId={player.id} />
    </div>
  );
}
