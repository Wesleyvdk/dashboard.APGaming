"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { NotificationPreferences } from "@/components/settings/notification-preferences";
import { SessionManagement } from "@/components/settings/session-management";
import { ThemeSettings } from "@/components/settings/theme-settings";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [notificationPrefs, setNotificationPrefs] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchNotificationPreferences();
  }, []);

  const fetchNotificationPreferences = async () => {
    try {
      const response = await fetch("/api/users/notifications");
      if (response.ok) {
        const data = await response.json();
        setNotificationPrefs(data);
      }
    } catch (error) {
      console.error("Error fetching notification preferences:", error);
      toast({
        title: "Error",
        description: "Failed to load notification preferences.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationUpdate = (updatedPrefs: any) => {
    setNotificationPrefs(updatedPrefs);
    toast({
      title: "Success",
      description: "Notification preferences updated successfully.",
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>
            Manage your application preferences and account settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="notifications">
            <TabsList className="mb-4">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
            </TabsList>

            <TabsContent value="notifications">
              <NotificationPreferences
                preferences={notificationPrefs}
                onUpdate={handleNotificationUpdate}
              />
            </TabsContent>

            <TabsContent value="appearance">
              <ThemeSettings />
            </TabsContent>

            <TabsContent value="sessions">
              <SessionManagement />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
