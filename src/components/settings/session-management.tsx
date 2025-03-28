"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, LogOut, Monitor, Smartphone, Laptop } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatDistanceToNow } from "date-fns";

interface Session {
  id: string;
  userAgent: string;
  ipAddress: string;
  lastActive: string;
  createdAt: string;
  isCurrent: boolean;
}

export function SessionManagement() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminating, setIsTerminating] = useState(false);
  const [isTerminatingAll, setIsTerminatingAll] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/sessions");
      if (response.ok) {
        const data = await response.json();
        setSessions(data);
      }
    } catch (error) {
      console.error("Error fetching sessions:", error);
      toast({
        title: "Error",
        description: "Failed to load active sessions.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const terminateSession = async (sessionId: string) => {
    setIsTerminating(true);
    try {
      const response = await fetch(`/api/auth/sessions/${sessionId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSessions((prev) =>
          prev.filter((session) => session.id !== sessionId)
        );
        toast({
          title: "Success",
          description: "Session terminated successfully.",
        });

        // If current session was terminated, redirect to login
        const currentSession = sessions.find(
          (s) => s.id === sessionId && s.isCurrent
        );
        if (currentSession) {
          window.location.href = "/login";
        }
      } else {
        throw new Error("Failed to terminate session");
      }
    } catch (error) {
      console.error("Error terminating session:", error);
      toast({
        title: "Error",
        description: "Failed to terminate session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTerminating(false);
    }
  };

  const terminateAllSessions = async () => {
    setIsTerminatingAll(true);
    try {
      const response = await fetch("/api/auth/logout/all", {
        method: "POST",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "All sessions terminated successfully.",
        });
        // Redirect to login page
        window.location.href = "/login";
      } else {
        throw new Error("Failed to terminate all sessions");
      }
    } catch (error) {
      console.error("Error terminating all sessions:", error);
      toast({
        title: "Error",
        description: "Failed to terminate all sessions. Please try again.",
        variant: "destructive",
      });
      setIsTerminatingAll(false);
    }
  };

  const getDeviceIcon = (userAgent: string) => {
    const ua = userAgent.toLowerCase();
    if (
      ua.includes("mobile") ||
      ua.includes("android") ||
      ua.includes("iphone")
    ) {
      return <Smartphone className="h-5 w-5" />;
    } else if (ua.includes("tablet") || ua.includes("ipad")) {
      return <Monitor className="h-5 w-5" />;
    } else {
      return <Laptop className="h-5 w-5" />;
    }
  };

  const formatLastActive = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Active Sessions</h3>
          <p className="text-sm text-muted-foreground">
            Manage your active sessions across devices.
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              disabled={isTerminatingAll || sessions.length === 0}
            >
              {isTerminatingAll ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Terminating...
                </>
              ) : (
                <>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out All Devices
                </>
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Log out from all devices?</AlertDialogTitle>
              <AlertDialogDescription>
                This will terminate all your active sessions and you will need
                to log in again on all devices.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={terminateAllSessions}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {sessions.length === 0 ? (
        <div className="text-center p-6 border rounded-lg">
          <p className="text-muted-foreground">No active sessions found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => (
            <Card
              key={session.id}
              className={session.isCurrent ? "border-primary" : ""}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted rounded-full p-2">
                      {getDeviceIcon(session.userAgent)}
                    </div>
                    <div>
                      <div className="font-medium flex items-center">
                        {session.userAgent.split(" ")[0]}
                        {session.isCurrent && (
                          <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        IP: {session.ipAddress} • Last active{" "}
                        {formatLastActive(session.lastActive)}
                      </div>
                    </div>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={isTerminating}
                      >
                        {isTerminating ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Terminate"
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Terminate this session?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {session.isCurrent
                            ? "This will log you out from the current device."
                            : "This will log out the device from your account."}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => terminateSession(session.id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
