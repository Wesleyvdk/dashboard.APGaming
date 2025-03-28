"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Edit,
  Trash2,
  MoreVertical,
  UserCheck,
  UserX,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/app/dashboard/profile/data/countries";

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  inGameName: string;
  email?: string | null;
  country?: string | null;
  role?: string | null;
  rank?: string | null;
  teams: Team[];
  user?: {
    id: string;
    username: string;
    email: string;
    profilePicture?: string | null;
  } | null;
}

interface Team {
  id: string;
  name: string;
}

interface PlayersTableProps {
  initialPlayers: Player[];
  teams: Team[];
}

export function PlayersTable({ initialPlayers, teams }: PlayersTableProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [isLinkedFilter, setIsLinkedFilter] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    applyFilters(e.target.value, selectedTeam, isLinkedFilter);
  };

  const handleTeamFilter = (teamId: string) => {
    setSelectedTeam(teamId);
    applyFilters(searchQuery, teamId, isLinkedFilter);
  };

  const handleLinkedFilter = (linked: string) => {
    setIsLinkedFilter(linked);
    applyFilters(searchQuery, selectedTeam, linked);
  };

  const applyFilters = async (
    search: string,
    teamId: string,
    linked: string
  ) => {
    let url = "/api/players?";

    if (search) {
      url += `search=${encodeURIComponent(search)}&`;
    }

    if (teamId) {
      url += `teamId=${encodeURIComponent(teamId)}&`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch players");

      let filteredPlayers = await response.json();

      // Apply linked filter client-side
      if (linked === "linked") {
        filteredPlayers = filteredPlayers.filter(
          (player: Player) => player.user
        );
      } else if (linked === "unlinked") {
        filteredPlayers = filteredPlayers.filter(
          (player: Player) => !player.user
        );
      }

      setPlayers(filteredPlayers);
    } catch (error) {
      console.error("Failed to fetch players:", error);
      toast({
        title: "Error",
        description: "Failed to fetch players",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/players/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete player");

      setPlayers(players.filter((player) => player.id !== id));

      toast({
        title: "Player deleted",
        description: "Player has been deleted successfully",
      });
    } catch (error) {
      console.error("Failed to delete player:", error);
      toast({
        title: "Error",
        description: "Failed to delete player",
        variant: "destructive",
      });
    }
  };

  const getCountryName = (code: string | null | undefined) => {
    if (!code) return "";
    const country = countries.find((c: any) => c.code === code);
    return country ? country.name : code;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search players..."
            className="pl-8"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Select value={selectedTeam} onValueChange={handleTeamFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Teams</SelectItem>
              {teams.map((team) => (
                <SelectItem key={team.id} value={team.id}>
                  {team.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={isLinkedFilter} onValueChange={handleLinkedFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="User account status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Players</SelectItem>
              <SelectItem value="linked">Linked to User</SelectItem>
              <SelectItem value="unlinked">Not Linked</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={() => router.push("/dashboard/players/new")}>
            Add Player
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead>In-Game Name</TableHead>
              <TableHead className="hidden md:table-cell">Country</TableHead>
              <TableHead className="hidden md:table-cell">Role</TableHead>
              <TableHead className="hidden lg:table-cell">Teams</TableHead>
              <TableHead className="hidden lg:table-cell">
                User Account
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-8 text-muted-foreground"
                >
                  No players found. Try adjusting your filters or add a new
                  player.
                </TableCell>
              </TableRow>
            ) : (
              players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        {player.user?.profilePicture ? (
                          <AvatarImage
                            src={player.user.profilePicture}
                            alt={player.firstName}
                          />
                        ) : (
                          <AvatarFallback>
                            {player.firstName.charAt(0)}
                            {player.lastName.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {player.firstName} {player.lastName}
                        </div>
                        <div className="text-xs text-muted-foreground hidden sm:block">
                          {player.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{player.inGameName}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {player.country ? getCountryName(player.country) : "-"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {player.role || "-"}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {player.teams.length > 0 ? (
                        player.teams.map((team) => (
                          <Badge key={team.id} variant="outline">
                            {team.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {player.user ? (
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{player.user.username}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <UserX className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Not linked
                        </span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(`/dashboard/players/${player.id}`)
                          }
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem
                              onSelect={(e) => e.preventDefault()}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete {player.firstName}{" "}
                                {player.lastName} ({player.inGameName}). This
                                action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(player.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
