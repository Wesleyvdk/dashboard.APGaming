import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUpcomingMatches } from "@/lib/matches";
import { type Match, MatchType } from "@/lib/types";
import { format } from "date-fns";
import { Trophy, Swords, Users } from "lucide-react";

export async function MatchesWidget() {
  const matches: Match[] = await getUpcomingMatches();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.length === 0 ? (
            <p className="text-sm text-muted-foreground">No upcoming matches</p>
          ) : (
            matches.map((match) => (
              <div key={match.id} className="flex items-center space-x-4">
                {match.type === MatchType.TOURNAMENT ? (
                  <Trophy className="h-5 w-5 text-yellow-500" />
                ) : match.type === MatchType.OFFICIAL ? (
                  <Swords className="h-5 w-5 text-red-500" />
                ) : (
                  <Users className="h-5 w-5 text-blue-500" />
                )}
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {match.team.name} vs {match.opponent}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(match.date), "PPP")} at{" "}
                    {format(new Date(match.date), "p")}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
