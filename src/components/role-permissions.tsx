"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
// import { Role } from "@prisma/client";

export enum Role {
  USER = "USER",
  NEWS_WRITER = "NEWS_WRITER",
  TEAM_MANAGER = "TEAM_MANAGER",
  ADMIN = "ADMIN",
}

interface RoleDescription {
  role: Role;
  description: string;
  permissions: string[];
}

const roleDescriptions: RoleDescription[] = [
  {
    role: Role.USER,
    description: "Basic user with limited access",
    permissions: ["View public content", "Participate in forums"],
  },
  {
    role: Role.NEWS_WRITER,
    description: "Can create and edit news articles",
    permissions: [
      "Create news",
      "Edit news",
      "View public content",
      "Participate in forums",
    ],
  },
  {
    role: Role.TEAM_MANAGER,
    description: "Can manage team rosters and schedules",
    permissions: [
      "Manage team rosters",
      "Create and edit schedules",
      "View public content",
      "Participate in forums",
    ],
  },
  {
    role: Role.ADMIN,
    description: "Full access to all features",
    permissions: ["All permissions"],
  },
];

export function RolePermissions() {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      {roleDescriptions.map((roleDesc) => (
        <Card key={roleDesc.role}>
          <CardHeader>
            <CardTitle>{roleDesc.role}</CardTitle>
            <CardDescription>{roleDesc.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm font-medium mb-2">Permissions:</h4>
            <ul className="list-disc list-inside space-y-1">
              {roleDesc.permissions.map((permission, index) => (
                <li key={index} className="text-sm">
                  {permission}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
