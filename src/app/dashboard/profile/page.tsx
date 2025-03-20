"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";

// Update the form schema to include all fields
const profileFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .optional(),
    email: z.string().email("Invalid email address").optional(),
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.confirmPassword) return false;
      if (!data.newPassword && data.confirmPassword) return false;
      if (
        data.newPassword &&
        data.confirmPassword &&
        data.newPassword !== data.confirmPassword
      )
        return false;
      return true;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/user");
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        form.reset({
          username: userData.username || "",
          email: userData.email || "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast({
        title: "Error",
        description: "Failed to load user profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Update the onSubmit function to properly handle the form submission
  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your profile has been updated.",
        });
        fetchUserProfile();
        form.reset({
          ...form.getValues(),
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to update profile");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
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
        <h1 className="text-3xl font-bold">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Your personal information and account details
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                    user?.username || user?.email
                  }`}
                />
                <AvatarFallback>
                  {getInitials(user?.username || user?.email)}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-medium">
                  {user?.username || user?.email}
                </h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {user?.roles?.map((role: string) => (
                  <Badge key={role}>{role}</Badge>
                ))}
                <Badge
                  variant={user?.status === "ACTIVE" ? "success" : "secondary"}
                >
                  {user?.status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground text-center">
                <p>
                  Member since: {new Date(user?.createdAt).toLocaleDateString()}
                </p>
                {user?.player && (
                  <p className="mt-1">Player: {user.player.inGameName}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>
                Update your account information and change your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList className="mb-4">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  {user?.player && (
                    <TabsTrigger value="player">Player Info</TabsTrigger>
                  )}
                </TabsList>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <TabsContent value="account" className="space-y-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your public display name. You can only
                              change this once every 30 days.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" />
                            </FormControl>
                            <FormDescription>
                              Your email address is used for notifications and
                              account recovery.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Account Details</h3>
                        <div className="grid grid-cols-2 gap-4 p-4 border rounded-md">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Roles
                            </p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {user?.roles?.map((role: string) => (
                                <Badge key={role} variant="outline">
                                  {role}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Status
                            </p>
                            <p>{user?.status}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Member Since
                            </p>
                            <p>
                              {new Date(user?.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Last Login
                            </p>
                            <p>N/A</p>
                          </div>
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormDescription>
                              Enter your current password to confirm changes.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>

                    <TabsContent value="password" className="space-y-4">
                      <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormDescription>
                              Password must be at least 8 characters long.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>

                    {user?.player && (
                      <TabsContent value="player" className="space-y-4">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">
                            Player Information
                          </h3>
                          <div className="grid grid-cols-2 gap-4 p-4 border rounded-md">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                In-Game Name
                              </p>
                              <p>{user.player.inGameName}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                Full Name
                              </p>
                              <p>
                                {user.player.firstName} {user.player.lastName}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                Role
                              </p>
                              <p>{user.player.role || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                Rank
                              </p>
                              <p>{user.player.rank || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                Team
                              </p>
                              <p>{user.player.team?.name || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                Join Date
                              </p>
                              <p>
                                {user.player.joinDate
                                  ? new Date(
                                      user.player.joinDate
                                    ).toLocaleDateString()
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          {user.player.socialLinks &&
                            Object.keys(user.player.socialLinks).length > 0 && (
                              <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                  Social Links
                                </h3>
                                <div className="grid grid-cols-2 gap-2 p-4 border rounded-md">
                                  {Object.entries(user.player.socialLinks).map(
                                    ([platform, url]) => (
                                      <div
                                        key={platform}
                                        className="flex items-center"
                                      >
                                        <a
                                          href={url as string}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-500 hover:underline"
                                        >
                                          {platform}
                                        </a>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                          {user.player.trackerLinks &&
                            Object.keys(user.player.trackerLinks).length >
                              0 && (
                              <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                  Game Tracker Links
                                </h3>
                                <div className="grid grid-cols-2 gap-2 p-4 border rounded-md">
                                  {Object.entries(user.player.trackerLinks).map(
                                    ([platform, url]) => (
                                      <div
                                        key={platform}
                                        className="flex items-center"
                                      >
                                        <a
                                          href={url as string}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-500 hover:underline"
                                        >
                                          {platform}
                                        </a>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                          <div className="flex justify-end">
                            <Button variant="outline" asChild>
                              <Link
                                href={`/dashboard/players/${user.player.id}`}
                              >
                                View Full Player Profile
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    )}

                    <Button type="submit" disabled={isSaving}>
                      {isSaving ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </form>
                </Form>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function getInitials(name: string): string {
  if (!name) return "?";

  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}
