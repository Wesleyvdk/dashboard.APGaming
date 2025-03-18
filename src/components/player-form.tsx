"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Game, Player } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserSearch } from "./user-search";
import { MultiSelect } from "@/components/ui/multi-select";

const socialPlatforms = [
  { name: "X", url: "https://x.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "Twitch", url: "https://twitch.tv/" },
  { name: "YouTube", url: "https://youtube.com/" },
  { name: "TikTok", url: "https://tiktok.com/@" },
];

const trackerPlatforms = [
  { name: "Tracker.gg", url: "https://tracker.gg/profile/" },
  { name: "OP.GG", url: "https://op.gg/summoners/" },
  { name: "Blitz.gg", url: "https://blitz.gg/profile/" },
  {
    name: "Rocket League Tracker",
    url: "https://rocketleague.tracker.network/profile/",
  },
  { name: "Valorant Tracker", url: "https://tracker.gg/valorant/profile/" },
  { name: "Apex Tracker", url: "https://apex.tracker.gg/profile/" },
  { name: "Fortnite Tracker", url: "https://fortnitetracker.com/profile/" },
];

const playerFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  inGameName: z.string().min(2, "In-game name must be at least 2 characters"),
  dateOfBirth: z.string().optional(),
  country: z.string().optional(),
  teamIds: z.string().array().optional(),
  role: z.string().optional(),
  rank: z.string().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      username: z.string(),
    })
  ),
  trackerLinks: z.array(
    z.object({
      platform: z.string(),
      username: z.string(),
    })
  ),
  userId: z.string().optional(),
});

interface PlayerFormProps {
  games: Game[];
  player?: Player;
  onSubmit?: (values: z.infer<typeof playerFormSchema>) => Promise<void>;
}

export function PlayerForm({ games, player, onSubmit }: PlayerFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const form = useForm<z.infer<typeof playerFormSchema>>({
    resolver: zodResolver(playerFormSchema),
    defaultValues: {
      firstName: player?.firstName || "",
      lastName: player?.lastName || "",
      inGameName: player?.inGameName || "",
      dateOfBirth: player?.dateOfBirth
        ? new Date(player.dateOfBirth).toISOString().split("T")[0]
        : "",
      country: player?.country || "",
      teamIds: player?.teamIds || [],
      role: player?.role || "",
      rank: player?.rank || "",
      socialLinks: player?.socialLinks
        ? Object.entries(player.socialLinks).map(([platform, url]) => ({
            platform,
            username: url.split("/").pop() || "",
          }))
        : [],
      trackerLinks: player?.trackerLinks
        ? Object.entries(player.trackerLinks).map(([platform, url]) => ({
            platform,
            username: url.split("/").pop() || "",
          }))
        : [],
      userId: player?.userId || "",
    },
  });

  const {
    fields: socialFields,
    append: appendSocial,
    remove: removeSocial,
  } = useFieldArray({
    control: form.control,
    name: "socialLinks",
  });

  const {
    fields: trackerFields,
    append: appendTracker,
    remove: removeTracker,
  } = useFieldArray({
    control: form.control,
    name: "trackerLinks",
  });

  // When a user is selected from the search, update the form
  useEffect(() => {
    if (selectedUser) {
      form.setValue("firstName", selectedUser.firstName || "");
      form.setValue("lastName", selectedUser.lastName || "");
      form.setValue("userId", selectedUser.id);
    }
  }, [selectedUser, form]);

  // Replace the handleFormSubmit function with this non-async version
  function handleFormSubmit(values: z.infer<typeof playerFormSchema>) {
    setIsSubmitting(true);

    // Format the data
    const socialLinksObject = values.socialLinks.reduce(
      (acc, { platform, username }) => {
        const platformData = socialPlatforms.find((p) => p.name === platform);
        if (platformData && username) {
          acc[platform] = `${platformData.url}${username}`;
        }
        return acc;
      },
      {} as Record<string, string>
    );

    const trackerLinksObject = values.trackerLinks.reduce(
      (acc, { platform, username }) => {
        const platformData = trackerPlatforms.find((p) => p.name === platform);
        if (platformData && username) {
          acc[platform] = `${platformData.url}${username}`;
        }
        return acc;
      },
      {} as Record<string, string>
    );

    const playerData = {
      ...values,
      socialLinks: socialLinksObject,
      trackerLinks: trackerLinksObject,
    };

    if (onSubmit) {
      // Use the provided onSubmit callback
      onSubmit(playerData)
        .then(() => {
          // Success handling is done in the parent component
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: "Failed to save player. Please try again.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Default behavior if no callback is provided
      const url = player ? `/api/players/${player.id}` : "/api/players";
      const method = player ? "PUT" : "POST";

      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to save player");
          }
          toast({
            title: "Success",
            description: `Player ${
              player ? "updated" : "created"
            } successfully.`,
          });
          router.push("/dashboard/players");
          router.refresh();
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: "Failed to save player. Please try again.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-8"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="game">Game Info</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="trackers">Tracker Links</TabsTrigger>
            <TabsTrigger value="user">User Account</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="game" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Game Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="inGameName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>In-Game Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamIds" // Changed from teamId to teamIds
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teams</FormLabel>
                      <MultiSelect
                        options={games.flatMap((game) =>
                          game.teams.map((team) => ({
                            label: `${game.name} - ${team.name}`,
                            value: team.id,
                          }))
                        )}
                        selected={field.value || []}
                        onChange={field.onChange}
                        placeholder="Select teams"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rank"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rank</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialFields.map((field, index) => (
                    <div key={field.id} className="flex items-end space-x-2">
                      <FormField
                        control={form.control}
                        name={`socialLinks.${index}.platform`}
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select platform" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {socialPlatforms.map((platform) => (
                                  <SelectItem
                                    key={platform.name}
                                    value={platform.name}
                                  >
                                    {platform.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`socialLinks.${index}.username`}
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormControl>
                              <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                  {socialPlatforms.find(
                                    (p) =>
                                      p.name ===
                                      form.watch(
                                        `socialLinks.${index}.platform`
                                      )
                                  )?.url || ""}
                                </span>
                                <Input {...field} className="rounded-l-none" />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeSocial(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendSocial({ platform: "", username: "" })}
                  >
                    Add Social Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trackers" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Game Tracker Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackerFields.map((field, index) => (
                    <div key={field.id} className="flex items-end space-x-2">
                      <FormField
                        control={form.control}
                        name={`trackerLinks.${index}.platform`}
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select tracker" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {trackerPlatforms.map((platform) => (
                                  <SelectItem
                                    key={platform.name}
                                    value={platform.name}
                                  >
                                    {platform.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`trackerLinks.${index}.username`}
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormControl>
                              <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                  {trackerPlatforms.find(
                                    (p) =>
                                      p.name ===
                                      form.watch(
                                        `trackerLinks.${index}.platform`
                                      )
                                  )?.url || ""}
                                </span>
                                <Input {...field} className="rounded-l-none" />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeTracker(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      appendTracker({ platform: "", username: "" })
                    }
                  >
                    Add Tracker Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>User Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Link this player to an existing user account. This will allow
                  the player to log in to the system.
                </p>

                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Account</FormLabel>
                      <UserSearch
                        onSelect={setSelectedUser}
                        selectedUserId={field.value}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : player ? "Update" : "Create"} Player
          </Button>
        </div>
      </form>
    </Form>
  );
}
