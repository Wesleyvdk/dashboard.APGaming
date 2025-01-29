"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import type { DecodedToken } from "@/lib/auth";
import type React from "react";

import { AppSidebar } from "@/components/app-siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<DecodedToken | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/user");
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router.push]); // Added router.push to dependencies
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar user={user} />
        <main className="flex gap-2">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
