"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
        <main className="flex w-full p-4">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
