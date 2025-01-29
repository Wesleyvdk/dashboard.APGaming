import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserTeams } from "@/lib/teams";
import { formatDistanceToNow } from "date-fns";
import type { Team } from "@/lib/types";

export async function RosterWidget() {
  const teams: Team[] = await getUserTeams();

  if (teams.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Rosters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {teams.map((team) => (
            <div key={team.id} className="space-y-2">
              <h3 className="font-semibold">{team.name}</h3>
              <div className="grid gap-2">
                {team.players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{player.name}</p>
                      {player.role && (
                        <p className="text-sm text-muted-foreground">
                          {player.role}
                        </p>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Joined{" "}
                      {formatDistanceToNow(player.joinDate, {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
