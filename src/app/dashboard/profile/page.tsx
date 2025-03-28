"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ProfilePictureUpload } from "@/components/profile/profile-picture-upload";
import { Loader2, CalendarIcon, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { countries } from "./data/countries";

interface UserProfile {
  id: string;
  email: string;
  username: string;
  profilePicture: string | null;
  roles: string[];
  bio?: string | null;
  player?: PlayerProfile | null;
}

interface PlayerProfile {
  id: string;
  firstName: string;
  lastName: string;
  inGameName: string;
  dateOfBirth?: string | null;
  country?: string | null;
  role?: string | null;
  rank?: string | null;
  socialLinks?: Record<string, string> | null;
  trackerLinks?: Record<string, string> | null;
}

interface ProfileFormData {
  // User data
  email: string;
  username: string;
  bio: string;

  // Player data
  firstName: string;
  lastName: string;
  inGameName: string;
  dateOfBirth: Date | null;
  country: string;
  gameRole: string;
  rank: string;

  // Social links
  discord: string;
  twitter: string;
  instagram: string;
  youtube: string;
  twitch: string;

  // Tracker links
  trackerGG: string;
  steamProfile: string;
  epicGames: string;
  battleNet: string;
  riotGames: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState<ProfileFormData>({
    email: "",
    username: "",
    bio: "",
    firstName: "",
    lastName: "",
    inGameName: "",
    dateOfBirth: null,
    country: "",
    gameRole: "",
    rank: "",
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

  const { toast } = useToast();
  const isPlayer = profile?.roles?.includes("PLAYER");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/users/profile");
      if (!response.ok) throw new Error("Failed to fetch profile");

      const data = await response.json();
      setProfile(data);

      // Initialize form data from both user and player data
      const socialLinks = data.player?.socialLinks || {};
      const trackerLinks = data.player?.trackerLinks || {};

      setFormData({
        email: data.email || "",
        username: data.username || "",
        bio: data.bio || "",
        firstName: data.player?.firstName || "",
        lastName: data.player?.lastName || "",
        inGameName: data.player?.inGameName || "",
        dateOfBirth: data.player?.dateOfBirth
          ? new Date(data.player.dateOfBirth)
          : null,
        country: data.player?.country || "",
        gameRole: data.player?.role || "",
        rank: data.player?.rank || "",
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
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Prepare the data for submission
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
        // User data
        email: formData.email,
        username: formData.username,
        bio: formData.bio,

        // Player data
        player: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          inGameName: formData.inGameName,
          dateOfBirth: formData.dateOfBirth,
          country: formData.country,
          role: formData.gameRole,
          rank: formData.rank,
          socialLinks,
          trackerLinks,
        },
      };

      const response = await fetch("/api/users/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });

      // Refresh profile data
      fetchProfile();
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleProfilePictureUpdate = (url: string) => {
    if (profile) {
      setProfile({
        ...profile,
        profilePicture: url,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container py-6 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container py-6 space-y-6">
      <h1 className="text-3xl font-bold">Profile Settings</h1>

      {!isPlayer && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Player profile not linked</AlertTitle>
          <AlertDescription>
            Your account is not linked to a player profile. Some fields will be
            unavailable until an admin links your account to a player.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <ProfilePictureUpload
                  currentImageUrl={profile?.profilePicture || null}
                  onSuccess={handleProfilePictureUpdate}
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">
                    {profile?.player
                      ? `${profile.player.firstName} ${profile.player.lastName}`
                      : profile?.username}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {profile?.player?.inGameName &&
                      `"${profile.player.inGameName}"`}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {profile?.roles?.join(", ")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="gaming">Gaming Profile</TabsTrigger>
              <TabsTrigger value="social">Social & Trackers</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal information and contact details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          disabled={!isPlayer}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          disabled={!isPlayer}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Your username"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleSelectChange("country", value)
                        }
                        disabled={!isPlayer}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
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

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Birth Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.dateOfBirth && "text-muted-foreground"
                            )}
                            disabled={!isPlayer}
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
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Tell us about yourself, your gaming experience, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gaming">
                <Card>
                  <CardHeader>
                    <CardTitle>Gaming Profile</CardTitle>
                    <CardDescription>
                      Update your gaming information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="inGameName">In-Game Name</Label>
                      <Input
                        id="inGameName"
                        name="inGameName"
                        value={formData.inGameName}
                        onChange={handleInputChange}
                        placeholder="Your in-game name or handle"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gameRole">Game Role</Label>
                        <Input
                          id="gameRole"
                          name="gameRole"
                          value={formData.gameRole}
                          onChange={handleInputChange}
                          placeholder="Your role (e.g., Support, Entry Fragger)"
                          disabled={!isPlayer}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rank">Rank</Label>
                        <Input
                          id="rank"
                          name="rank"
                          value={formData.rank}
                          onChange={handleInputChange}
                          placeholder="Your current rank"
                          disabled={!isPlayer}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social">
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>
                      Connect your social media accounts
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
                        placeholder="Your Discord username"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        placeholder="Your Twitter username (without @)"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        placeholder="Your Instagram username"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="youtube">YouTube</Label>
                      <Input
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleInputChange}
                        placeholder="Your YouTube channel URL"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitch">Twitch</Label>
                      <Input
                        id="twitch"
                        name="twitch"
                        value={formData.twitch}
                        onChange={handleInputChange}
                        placeholder="Your Twitch username"
                        disabled={!isPlayer}
                      />
                    </div>

                    <Separator className="my-4" />

                    <h3 className="text-lg font-medium">Game Trackers</h3>

                    <div className="space-y-2">
                      <Label htmlFor="trackerGG">Tracker.gg</Label>
                      <Input
                        id="trackerGG"
                        name="trackerGG"
                        value={formData.trackerGG}
                        onChange={handleInputChange}
                        placeholder="Your Tracker.gg profile URL"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="steamProfile">Steam</Label>
                      <Input
                        id="steamProfile"
                        name="steamProfile"
                        value={formData.steamProfile}
                        onChange={handleInputChange}
                        placeholder="Your Steam profile URL"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="epicGames">Epic Games</Label>
                      <Input
                        id="epicGames"
                        name="epicGames"
                        value={formData.epicGames}
                        onChange={handleInputChange}
                        placeholder="Your Epic Games username"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="battleNet">Battle.net</Label>
                      <Input
                        id="battleNet"
                        name="battleNet"
                        value={formData.battleNet}
                        onChange={handleInputChange}
                        placeholder="Your Battle.net ID"
                        disabled={!isPlayer}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="riotGames">Riot Games</Label>
                      <Input
                        id="riotGames"
                        name="riotGames"
                        value={formData.riotGames}
                        onChange={handleInputChange}
                        placeholder="Your Riot Games ID"
                        disabled={!isPlayer}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </form>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
