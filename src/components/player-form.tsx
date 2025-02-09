"use client";

import { useState } from "react";
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

const socialPlatforms = [
  { name: "X", url: "https://x.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "Twitch", url: "https://twitch.tv/" },
  { name: "YouTube", url: "https://youtube.com/" },
  { name: "TikTok", url: "https://tiktok.com/@" },
];

const playerFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  inGameName: z.string().min(2, "In-game name must be at least 2 characters"),
  username: z.string().optional().or(z.literal("")),
  dateOfBirth: z.string().optional(),
  country: z.string().optional(),
  teamId: z.string().optional(),
  role: z.string().optional(),
  rank: z.string().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      username: z.string(),
    })
  ),
});

interface PlayerFormProps {
  games: Game[];
  player?: Player;
}

export function PlayerForm({ games, player }: PlayerFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof playerFormSchema>>({
    resolver: zodResolver(playerFormSchema),
    defaultValues: {
      firstName: player?.personalInfo.firstName || "",
      lastName: player?.personalInfo.lastName || "",
      inGameName: player?.personalInfo.inGameName || "",
      username: player?.username || "",
      dateOfBirth: player?.personalInfo.dateOfBirth
        ? new Date(player.personalInfo.dateOfBirth).toISOString().split("T")[0]
        : "",
      country: player?.personalInfo.country || "",
      teamId: player?.teamId || "",
      role: player?.role || "",
      rank: player?.rank || "",
      socialLinks: player?.socialLinks
        ? Object.entries(player.socialLinks).map(([platform, url]) => ({
            platform,
            username: url.split("/").pop() || "",
          }))
        : [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "socialLinks",
  });

  async function onSubmit(values: z.infer<typeof playerFormSchema>) {
    setIsSubmitting(true);
    try {
      const socialLinksObject = values.socialLinks.reduce(
        (acc, { platform, username }) => {
          const platformData = socialPlatforms.find((p) => p.name === platform);
          if (platformData) {
            acc[platform] = `${platformData.url}${username}`;
          }
          return acc;
        },
        {} as Record<string, string>
      );

      const playerData = {
        ...values,
        socialLinks: socialLinksObject,
      };

      const url = player ? `/api/players/${player.id}` : "/api/players";
      const method = player ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerData),
      });

      if (!response.ok) {
        throw new Error("Failed to save player");
      }

      toast({
        title: "Success",
        description: `Player ${player ? "updated" : "created"} successfully.`,
      });
      router.push("/dashboard/players");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save player. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} type="username" />
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
                name="teamId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a team" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {games.flatMap((game) =>
                          game.teams.map((team) => (
                            <SelectItem key={team.id} value={team.id}>
                              {game.name} - {team.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
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
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fields.map((field, index) => (
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
                                  form.watch(`socialLinks.${index}.platform`)
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
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => append({ platform: "", username: "" })}
              >
                Add Social Link
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : player ? "Update" : "Create"} Player
        </Button>
      </form>
    </Form>
  );
}
