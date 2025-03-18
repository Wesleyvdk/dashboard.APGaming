import { Suspense } from "react";
import { getGames } from "@/lib/games";
import { GameRosters } from "./game-rosters";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Users } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
async function getAllPlayers() {
  const players = await prisma.player.findMany({
    include: {
      teams: {
        include: {
          game: true,
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          username: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return players;
}

export default async function PlayersPage() {
  const games = await getGames();
  const players = await getAllPlayers();

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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>In-Game Name</TableHead>
            <TableHead>Teams</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>
                {player.firstName} {player.lastName}
              </TableCell>
              <TableCell>{player.inGameName}</TableCell>
              <TableCell>
                {player.teams && player.teams.length > 0
                  ? player.teams.map((team) => team.name).join(", ")
                  : "—"}
              </TableCell>
              <TableCell>{player.role || "—"}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/players/${player.id}`}>View</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/players/${player.id}/edit`}>
                      Edit
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Suspense fallback={<div>Loading...</div>}>
        {games.map((game) => (
          <GameRosters key={game.id} game={game} />
        ))}
      </Suspense>
    </div>
  );
}
