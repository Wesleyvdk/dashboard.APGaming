import type { Player } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlayerStatsProps {
  player: Player;
}

export function PlayerStats({ player }: PlayerStatsProps) {
  if (!player.stats) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Player Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          {Object.entries(player.stats.stats).map(([key, value]) => (
            <div key={key}>
              <dt className="font-medium">{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
