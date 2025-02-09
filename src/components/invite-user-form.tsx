"use client";

import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Role } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inviteSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  role: z.nativeEnum(Role),
});

export function InviteUserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invitationLink, setInvitationLink] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof inviteSchema>>({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      role: Role.USER,
    },
  });

  async function onSubmit(values: z.infer<typeof inviteSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/users/invite/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        setInvitationLink(data.invitationLink);
        toast({
          title: "Success",
          description: "Invitation link generated successfully.",
        });
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to generate invitation link"
        );
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to generate invitation link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite New User</CardTitle>
        <CardDescription>
          Generate an invitation link for a new user
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormDescription>
                    The username for the new user.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(Role).map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The role you want to assign to the user.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Generating..." : "Generate Invitation Link"}
            </Button>
          </form>
        </Form>
        {invitationLink && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Invitation Link:</h3>
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="break-all">{invitationLink}</p>
            </div>
            <Button
              className="mt-2"
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(invitationLink);
                toast({
                  title: "Copied",
                  description: "Invitation link copied to clipboard",
                });
              }}
            >
              Copy to Clipboard
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
