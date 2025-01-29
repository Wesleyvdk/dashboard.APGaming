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
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: string[];
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["USER", "NEWS_WRITER", "TEAM_MANAGER", "ADMIN"],
  },
  {
    title: "News",
    href: "/dashboard/news",
    icon: Newspaper,
    roles: ["NEWS_WRITER", "ADMIN"],
  },
  {
    title: "Players",
    href: "/dashboard/players",
    icon: UserSquare,
    roles: ["TEAM_MANAGER", "ADMIN"],
  },
  { title: "Users", href: "/dashboard/users", icon: Users, roles: ["ADMIN"] },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["USER", "NEWS_WRITER", "TEAM_MANAGER", "ADMIN"],
  },
];

export function AppSidebar({ user }: { user: any }) {
  const filteredNavItems = navItems.filter(
    (item) => user && item.roles.includes(user.role)
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
      <SidebarFooter />
    </Sidebar>
  );
}
