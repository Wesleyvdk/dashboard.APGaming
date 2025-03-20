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
} from "lucide-react";
import { Role } from "@/prisma/generated/client";
import { hasAnyRole } from "@/lib/client-utils";

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
  const filteredNavItems = navItems.filter((item) =>
    hasAnyRole(userRoles, item.roles)
  );
  const filteredBottomNavItems = bottomNavItems.filter((item) =>
    hasAnyRole(userRoles, item.roles)
  );

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
          {filteredBottomNavItems.map((item: any) => (
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
      </SidebarFooter>
    </Sidebar>
  );
}
