import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  Newspaper,
  Users,
  UserSquare,
  Settings,
  Calendar,
  FileImage,
  FileEdit,
  User,
  LogOut,
  Loader2,
  MoreHorizontal,
} from "lucide-react";
import { Role } from "@/prisma/generated/client";
import { hasAnyRole } from "@/lib/client-utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: Role[];
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: [
      Role.USER,
      Role.PLAYER,
      Role.NEWS_WRITER,
      Role.TEAM_MANAGER,
      Role.ADMIN,
    ],
  },
  {
    title: "News",
    href: "/dashboard/news",
    icon: Newspaper,
    roles: [Role.NEWS_WRITER, Role.ADMIN],
  },
  {
    title: "Drafts",
    href: "/dashboard/news/drafts",
    icon: FileEdit,
    roles: [Role.NEWS_WRITER, Role.ADMIN],
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
    roles: [
      Role.USER,
      Role.PLAYER,
      Role.NEWS_WRITER,
      Role.TEAM_MANAGER,
      Role.ADMIN,
    ],
  },
  {
    title: "Media",
    href: "/dashboard/media",
    icon: FileImage,
    roles: [Role.NEWS_WRITER, Role.TEAM_MANAGER, Role.ADMIN],
  },
  {
    title: "Players",
    href: "/dashboard/players",
    icon: UserSquare,
    roles: [Role.TEAM_MANAGER, Role.ADMIN],
  },
  { title: "Users", href: "/dashboard/users", icon: Users, roles: ["ADMIN"] },
];
// Bottom navigation items
const bottomNavItems: NavItem[] = [
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
    roles: [
      Role.USER,
      Role.PLAYER,
      Role.NEWS_WRITER,
      Role.TEAM_MANAGER,
      Role.ADMIN,
    ],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: [
      Role.USER,
      Role.PLAYER,
      Role.NEWS_WRITER,
      Role.TEAM_MANAGER,
      Role.ADMIN,
    ],
  },
];
interface DashboardSidebarProps {
  userRoles?: Role[];
}

export function AppSidebar({ userRoles }: DashboardSidebarProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const filteredNavItems = navItems.filter((item) =>
    hasAnyRole(userRoles, item.roles)
  );
  const filteredBottomNavItems = bottomNavItems.filter((item) =>
    hasAnyRole(userRoles, item.roles)
  );

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        toast({
          title: "Logged out",
          description: "You have been successfully logged out.",
        });
        router.push("/login");
      } else {
        throw new Error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
      setIsLoggingOut(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {filteredNavItems.map((item: any) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <a href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {filteredBottomNavItems.map((item) => (
            <SidebarMenuItem key={item.href} className="relative">
              <SidebarMenuButton asChild>
                <a href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </a>
              </SidebarMenuButton>

              {/* Add three-dot menu to Profile button */}
              {item.title === "Profile" && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="text-red-600 focus:text-red-600"
                        disabled={isLoggingOut}
                        onClick={handleLogout}
                      >
                        {isLoggingOut ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging out...
                          </>
                        ) : (
                          <>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                          </>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
