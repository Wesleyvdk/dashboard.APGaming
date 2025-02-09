"use client";

import { useState } from "react";
import type { Game } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamRoster } from "./team-roster";

interface GameRostersProps {
  game: Game;
}

export function GameRosters({ game }: GameRostersProps) {
  const [activeTeam, setActiveTeam] = useState(game.teams[0]?.id || "");

  if (game.teams.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>
          {game.managers.map((manager) => manager.user.username).join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTeam} onValueChange={setActiveTeam}>
          <TabsList className="w-full justify-start">
            {game.teams.map((team) => (
              <TabsTrigger key={team.id} value={team.id}>
                {team.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {game.teams.map((team) => (
            <TabsContent key={team.id} value={team.id}>
              <TeamRoster team={team} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
