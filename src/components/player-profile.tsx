import type { Player } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Trophy, Users, Star, Calendar } from "lucide-react";

interface PlayerProfileProps {
  player: Player;
}

export function PlayerProfile({ player }: PlayerProfileProps) {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{player.inGameName}</h1>
        <Button asChild variant="outline">
          <Link href={`/dashboard/players/${player.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium">Full Name:</dt>
                <dd>
                  {player.firstName} {player.lastName}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Email:</dt>
                <dd>{player.email || "N/A"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Date of Birth:</dt>
                <dd>
                  {player.dateOfBirth
                    ? new Date(player.dateOfBirth).toLocaleDateString()
                    : "N/A"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Country:</dt>
                <dd>{player.country || "N/A"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Game Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex justify-between items-center">
                <dt className="font-medium">Team:</dt>
                <dd className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {player.team?.name || "N/A"}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium">Role:</dt>
                <dd className="flex items-center">
                  <Trophy className="mr-2 h-4 w-4" />
                  {player.role || "N/A"}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium">Rank:</dt>
                <dd className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  {player.rank || "N/A"}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="font-medium">Join Date:</dt>
                <dd className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(player.joinDate).toLocaleDateString()}
                </dd>
              </div>
              {player.endDate && (
                <div className="flex justify-between items-center">
                  <dt className="font-medium">End Date:</dt>
                  <dd className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(player.endDate).toLocaleDateString()}
                  </dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>
      </div>

      {player.socialLinks && Object.keys(player.socialLinks).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(player.socialLinks).map(([platform, link]) => (
                <li key={platform} className="flex items-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    {getPlatformIcon(platform)}
                    <span className="ml-2">{platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function getPlatformIcon(platform: string) {
  // You can import and use appropriate icons for each platform
  // For this example, we'll use a generic icon
  return <Users className="h-4 w-4" />;
}
