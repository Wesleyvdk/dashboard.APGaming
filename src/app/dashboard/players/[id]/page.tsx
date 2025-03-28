/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Trophy,
  Users,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  GamepadIcon as GameController,
} from "lucide-react";
import { countries } from "@/app/dashboard/profile/data/countries";

interface PlayerPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PlayerPageProps): Promise<Metadata> {
  const player = await prisma.player.findUnique({
    where: { id: await params.id },
  });

  if (!player) {
    return {
      title: "Player Not Found",
    };
  }

  return {
    title: `${player.firstName} ${player.lastName} | AP Gaming`,
    description: `Profile page for ${player.firstName} ${player.lastName} (${player.inGameName})`,
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const player = await prisma.player.findUnique({
    where: { id: params.id },
    include: {
      teams: true,
      user: {
        select: {
          id: true,
          username: true,
          email: true,
          profilePicture: true,
          bio: true,
        },
      },
    },
  });

  if (!player) {
    notFound();
  }

  const getCountryName = (code: string | null | undefined) => {
    if (!code) return "";
    const country = countries.find((c) => c.code === code);
    return country ? country.name : code;
  };

  const socialLinks = (player.socialLinks as Record<string, string>) || {};
  const trackerLinks = (player.trackerLinks as Record<string, string>) || {};

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  {player.user?.profilePicture ? (
                    <AvatarImage
                      src={player.user.profilePicture}
                      alt={player.firstName}
                    />
                  ) : (
                    <AvatarFallback className="text-3xl">
                      {player.firstName.charAt(0)}
                      {player.lastName.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">
                    {player.firstName} {player.lastName}
                  </h1>
                  <p className="text-xl text-primary">"{player.inGameName}"</p>

                  {player.country && (
                    <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {getCountryName(player.country)}
                    </div>
                  )}

                  {player.teams.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {player.teams.map((team) => (
                        <Badge key={team.id} variant="secondary">
                          {team.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {Object.values(socialLinks).some((link) => link) && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.discord && (
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Discord: {socialLinks.discord}</span>
                  </div>
                )}

                {socialLinks.twitter && (
                  <a
                    href={`https://twitter.com/${socialLinks.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <Twitter className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Twitter: @{socialLinks.twitter}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {socialLinks.instagram && (
                  <a
                    href={`https://instagram.com/${socialLinks.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <Instagram className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Instagram: @{socialLinks.instagram}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <Youtube className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>YouTube</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {socialLinks.twitch && (
                  <a
                    href={`https://twitch.tv/${socialLinks.twitch}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <Twitch className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Twitch: {socialLinks.twitch}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
              </CardContent>
            </Card>
          )}

          {Object.values(trackerLinks).some((link) => link) && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Game Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trackerLinks.trackerGG && (
                  <a
                    href={trackerLinks.trackerGG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <GameController className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Tracker.gg</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {trackerLinks.steam && (
                  <a
                    href={trackerLinks.steam}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <GameController className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Steam Profile</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {trackerLinks.epic && (
                  <a
                    href={`https://launcher.store.epicgames.com/u/${trackerLinks.epic}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <GameController className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Epic Games: {trackerLinks.epic}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}

                {trackerLinks.battleNet && (
                  <div className="flex items-center">
                    <GameController className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Battle.net: {trackerLinks.battleNet}</span>
                  </div>
                )}

                {trackerLinks.riot && (
                  <div className="flex items-center">
                    <GameController className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>Riot Games: {trackerLinks.riot}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Player Profile</CardTitle>
              {player.role && (
                <CardDescription>
                  {player.role} {player.rank ? `• ${player.rank}` : ""}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {player.user?.bio ? (
                <div className="prose dark:prose-invert max-w-none">
                  <p>{player.user.bio}</p>
                </div>
              ) : (
                <p className="text-muted-foreground">No bio available.</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Player Info</h3>
                  <dl className="space-y-4">
                    {player.dateOfBirth && (
                      <div className="flex items-start">
                        <dt className="w-1/3 flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          Birth Date
                        </dt>
                        <dd className="w-2/3">
                          {new Date(player.dateOfBirth).toLocaleDateString()}
                        </dd>
                      </div>
                    )}

                    {player.role && (
                      <div className="flex items-start">
                        <dt className="w-1/3 flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          Role
                        </dt>
                        <dd className="w-2/3">{player.role}</dd>
                      </div>
                    )}

                    {player.rank && (
                      <div className="flex items-start">
                        <dt className="w-1/3 flex items-center text-muted-foreground">
                          <Award className="h-4 w-4 mr-2" />
                          Rank
                        </dt>
                        <dd className="w-2/3">{player.rank}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Teams</h3>
                  {player.teams.length > 0 ? (
                    <ul className="space-y-4">
                      {player.teams.map((team) => (
                        <li key={team.id} className="flex items-center">
                          <Trophy className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{team.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">
                      Not currently on any teams.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Match history coming soon...
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Player achievements coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
