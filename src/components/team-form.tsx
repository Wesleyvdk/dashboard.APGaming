"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Game, Team } from "@/lib/types";
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
import { Textarea } from "@/components/ui/textarea";

const teamFormSchema = z.object({
  name: z.string().min(2, "Team name must be at least 2 characters"),
  gameId: z.enum(["rocket-league", "league-of-legends", "eafc"], {
    required_error: "Please select a game",
  }),
  description: z.string().optional(),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
});

interface TeamFormProps {
  games: Game[];
  team?: Team;
}

export function TeamForm({ games, team }: TeamFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      name: team?.name || "",
      gameId: team?.gameId || "",
    },
  });

  async function onSubmit(values: z.infer<typeof teamFormSchema>) {
    setIsSubmitting(true);
    try {
      const gameIdMap = {
        "rocket-league": "ROCKET_LEAGUE_ID",
        "league-of-legends": "LEAGUE_OF_LEGENDS_ID",
        eafc: "EAFC_ID",
      };

      const gameId = gameIdMap[values.gameId as keyof typeof gameIdMap];

      const url = team ? `/api/teams/${team.id}` : "/api/teams";
      const method = team ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, gameId }),
      });

      if (!response.ok) {
        throw new Error("Failed to save team");
      }

      toast({
        title: "Success",
        description: `Team ${team ? "updated" : "created"} successfully.`,
      });
      router.push("/dashboard/players");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save team. Please try again.",
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
              <CardTitle>Team Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gameId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Game</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a game" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="rocket-league">
                          Rocket League
                        </SelectItem>
                        <SelectItem value="league-of-legends">
                          League of Legends
                        </SelectItem>
                        <SelectItem value="eafc">EAFC</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : team ? "Update" : "Create"} Team
        </Button>
      </form>
    </Form>
  );
}
