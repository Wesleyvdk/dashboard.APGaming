"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, UserPlus } from "lucide-react";

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  inGameName: string;
  user: any | null;
}

export function UnlinkedPlayersWidget() {
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUnlinkedPlayers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/players");
        if (!response.ok) throw new Error("Failed to fetch players");

        const allPlayers = await response.json();
        const unlinkedPlayers = allPlayers
          .filter((player: Player) => !player.user)
          .slice(0, 5); // Only show the first 5

        setPlayers(unlinkedPlayers);
      } catch (error) {
        console.error("Error fetching unlinked players:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUnlinkedPlayers();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Players Without Accounts</CardTitle>
          <CardDescription>
            Players that need to be linked to user accounts
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (players.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Players Without Accounts</CardTitle>
          <CardDescription>
            All players are linked to user accounts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-6">
            Great job! All players have user accounts.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Players Without Accounts</CardTitle>
        <CardDescription>
          Players that need to be linked to user accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player) => (
            <div key={player.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {player.firstName.charAt(0)}
                    {player.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {player.firstName} {player.lastName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {player.inGameName}
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/dashboard/players/${player.id}`)}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Link
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => router.push("/dashboard/players?filter=unlinked")}
        >
          View All Unlinked Players
        </Button>
      </CardFooter>
    </Card>
  );
}
