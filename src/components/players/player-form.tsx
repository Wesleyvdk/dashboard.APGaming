/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { countries } from "@/app/dashboard/profile/data/countries";

interface User {
  id: string;
  email: string;
  username: string;
}

interface Team {
  id: string;
  name: string;
}

interface PlayerFormProps {
  playerId?: string;
}

export function PlayerForm({ playerId }: PlayerFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    inGameName: "",
    email: "",
    dateOfBirth: null as Date | null,
    country: "",
    role: "",
    rank: "",
    userId: "",
    teamIds: [] as string[],
    discord: "",
    twitter: "",
    instagram: "",
    youtube: "",
    twitch: "",
    trackerGG: "",
    steamProfile: "",
    epicGames: "",
    battleNet: "",
    riotGames: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch available users
        const usersResponse = await fetch("/api/users?role=USER");
        const usersData = await usersResponse.json();
        setUsers(usersData.users);

        // Fetch available teams
        const teamsResponse = await fetch("/api/teams");
        const teamsData = await teamsResponse.json();
        setTeams(teamsData);

        // If editing, fetch player data
        if (playerId) {
          const playerResponse = await fetch(`/api/players/${playerId}`);
          const playerData = await playerResponse.json();

          const socialLinks = playerData.socialLinks || {};
          const trackerLinks = playerData.trackerLinks || {};

          setFormData({
            firstName: playerData.firstName || "",
            lastName: playerData.lastName || "",
            inGameName: playerData.inGameName || "",
            email: playerData.email || "",
            dateOfBirth: playerData.dateOfBirth
              ? new Date(playerData.dateOfBirth)
              : null,
            country: playerData.country || "",
            role: playerData.role || "",
            rank: playerData.rank || "",
            userId: playerData.userId || "",
            teamIds: playerData.teams?.map((team: any) => team.id) || [],
            discord: socialLinks.discord || "",
            twitter: socialLinks.twitter || "",
            instagram: socialLinks.instagram || "",
            youtube: socialLinks.youtube || "",
            twitch: socialLinks.twitch || "",
            trackerGG: trackerLinks.trackerGG || "",
            steamProfile: trackerLinks.steam || "",
            epicGames: trackerLinks.epic || "",
            battleNet: trackerLinks.battleNet || "",
            riotGames: trackerLinks.riot || "",
          });
        }
      } catch (error) {
        console.error("Failed to load data:", error);
        toast({
          title: "Error",
          description: "Failed to load data",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [playerId, toast]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[];

      if (Array.isArray(currentValues)) {
        if (currentValues.includes(value)) {
          return {
            ...prev,
            [name]: currentValues.filter((v) => v !== value),
          };
        } else {
          return {
            ...prev,
            [name]: [...currentValues, value],
          };
        }
      }

      return prev;
    });
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date || null,
    }));
  };

  const handleUserSelect = (userId: string) => {
    setFormData((prev) => ({
      ...prev,
      userId,
    }));

    if (userId) {
      fetchUserData(userId);
    }
  };

  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) return;

      const userData = await response.json();

      setFormData((prev) => ({
        ...prev,
        email: prev.email || userData.email || "",
        firstName: prev.firstName || userData.player?.firstName || "",
        lastName: prev.lastName || userData.player?.lastName || "",
        inGameName: prev.inGameName || userData.player?.inGameName || "",
        dateOfBirth:
          prev.dateOfBirth ||
          (userData.player?.dateOfBirth
            ? new Date(userData.player.dateOfBirth)
            : null),
        country: prev.country || userData.player?.country || "",
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const socialLinks = {
        discord: formData.discord,
        twitter: formData.twitter,
        instagram: formData.instagram,
        youtube: formData.youtube,
        twitch: formData.twitch,
      };

      const trackerLinks = {
        trackerGG: formData.trackerGG,
        steam: formData.steamProfile,
        epic: formData.epicGames,
        battleNet: formData.battleNet,
        riot: formData.riotGames,
      };

      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        inGameName: formData.inGameName,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth?.toISOString(),
        country: formData.country,
        role: formData.role,
        rank: formData.rank,
        userId: formData.userId || null,
        teamIds: formData.teamIds,
        socialLinks,
        trackerLinks,
      };

      const url = playerId ? `/api/players/${playerId}` : "/api/players";

      const method = playerId ? "PATCH" : "POST";
      console.log(submissionData);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save player");
      }

      toast({
        title: playerId ? "Player updated" : "Player created",
        description: playerId
          ? "Player has been updated successfully"
          : "Player has been created successfully",
      });

      // Redirect to players list
      router.push("/dashboard/players");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to save player",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-6">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="trackers">Game Trackers</TabsTrigger>
        </TabsList>

        <div className="mt-6 space-y-6">
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the player's basic information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userId">Link to User Account</Label>
                  <Select
                    value={formData.userId}
                    onValueChange={handleUserSelect}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a user (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      {users.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.username} ({user.email})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Linking a player to a user account will allow them to log in
                    and manage their profile
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inGameName">In-Game Name</Label>
                  <Input
                    id="inGameName"
                    name="inGameName"
                    value={formData.inGameName}
                    onChange={handleInputChange}
                    placeholder="In-game name or handle"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.dateOfBirth && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dateOfBirth ? (
                          format(formData.dateOfBirth, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.dateOfBirth || undefined}
                        onSelect={handleDateChange}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={1950}
                        toYear={new Date().getFullYear() - 13}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      handleSelectChange("country", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Player role"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rank">Rank</Label>
                    <Input
                      id="rank"
                      name="rank"
                      value={formData.rank}
                      onChange={handleInputChange}
                      placeholder="Current rank"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams">
            <Card>
              <CardHeader>
                <CardTitle>Team Assignment</CardTitle>
                <CardDescription>
                  Assign the player to one or more teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teams.length > 0 ? (
                    teams.map((team) => (
                      <div
                        key={team.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id={`team-${team.id}`}
                          checked={formData.teamIds.includes(team.id)}
                          onChange={() =>
                            handleMultiSelectChange("teamIds", team.id)
                          }
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor={`team-${team.id}`}>{team.name}</Label>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">
                      No teams available. Create teams first.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Add the player's social media profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="discord">Discord</Label>
                  <Input
                    id="discord"
                    name="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                    placeholder="Discord username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    placeholder="Twitter username (without @)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="Instagram username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    placeholder="YouTube channel URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitch">Twitch</Label>
                  <Input
                    id="twitch"
                    name="twitch"
                    value={formData.twitch}
                    onChange={handleInputChange}
                    placeholder="Twitch username"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trackers">
            <Card>
              <CardHeader>
                <CardTitle>Game Trackers</CardTitle>
                <CardDescription>
                  Add links to the player's game tracking profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trackerGG">Tracker.gg</Label>
                  <Input
                    id="trackerGG"
                    name="trackerGG"
                    value={formData.trackerGG}
                    onChange={handleInputChange}
                    placeholder="Tracker.gg profile URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steamProfile">Steam</Label>
                  <Input
                    id="steamProfile"
                    name="steamProfile"
                    value={formData.steamProfile}
                    onChange={handleInputChange}
                    placeholder="Steam profile URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="epicGames">Epic Games</Label>
                  <Input
                    id="epicGames"
                    name="epicGames"
                    value={formData.epicGames}
                    onChange={handleInputChange}
                    placeholder="Epic Games username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="battleNet">Battle.net</Label>
                  <Input
                    id="battleNet"
                    name="battleNet"
                    value={formData.battleNet}
                    onChange={handleInputChange}
                    placeholder="Battle.net ID"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="riotGames">Riot Games</Label>
                  <Input
                    id="riotGames"
                    name="riotGames"
                    value={formData.riotGames}
                    onChange={handleInputChange}
                    placeholder="Riot Games ID"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/players")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : playerId ? (
                "Update Player"
              ) : (
                "Create Player"
              )}
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
}
