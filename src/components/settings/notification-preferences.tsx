"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NotificationPreferencesProps {
  preferences: any;
  onUpdate: (preferences: any) => void;
}

export function NotificationPreferences({
  preferences,
  onUpdate,
}: NotificationPreferencesProps) {
  const [prefs, setPrefs] = useState(preferences);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleToggle = (key: string, value: boolean) => {
    setPrefs((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/users/notifications", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prefs),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message || "Failed to update notification preferences"
        );
      }

      const data = await response.json();
      onUpdate(data.preferences);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to update notification preferences",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium">Email Notifications</h3>
            <p className="text-sm text-muted-foreground">
              Receive email notifications about important updates and events.
            </p>
          </div>
          <Switch
            checked={prefs.emailNotifications}
            onCheckedChange={(value) =>
              handleToggle("emailNotifications", value)
            }
          />
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium">News Updates</h3>
            <p className="text-sm text-muted-foreground">
              Receive notifications about news articles and announcements.
            </p>
          </div>
          <Switch
            checked={prefs.newsUpdates}
            onCheckedChange={(value) => handleToggle("newsUpdates", value)}
          />
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium">Team Updates</h3>
            <p className="text-sm text-muted-foreground">
              Receive notifications about team changes and updates.
            </p>
          </div>
          <Switch
            checked={prefs.teamUpdates}
            onCheckedChange={(value) => handleToggle("teamUpdates", value)}
          />
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium">Match Reminders</h3>
            <p className="text-sm text-muted-foreground">
              Receive reminders about upcoming matches and events.
            </p>
          </div>
          <Switch
            checked={prefs.matchReminders}
            onCheckedChange={(value) => handleToggle("matchReminders", value)}
          />
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <h3 className="text-base font-medium">Discord Notifications</h3>
            <p className="text-sm text-muted-foreground">
              Receive notifications via Discord for team events and
              announcements.
            </p>
          </div>
          <Switch
            checked={prefs.discordNotifications}
            onCheckedChange={(value) =>
              handleToggle("discordNotifications", value)
            }
          />
        </div>
      </div>

      <Button onClick={handleSave} disabled={isSaving}>
        {isSaving ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save Preferences"
        )}
      </Button>
    </div>
  );
}
