"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlayerForm } from "@/components/players/player-form";
import { InvitationLinkDialog } from "@/components/users/invitation-link-dialog";
import { useToast } from "@/hooks/use-toast";
import type { Game } from "@/lib/types";

interface NewPlayerFormProps {
  games: Game[];
}

export function NewPlayerForm({ games }: NewPlayerFormProps) {
  const [invitationLink, setInvitationLink] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleFormSubmit = (values: any) => {
    return new Promise<void>((resolve, reject) => {
      fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create player");
          }
          return response.json();
        })
        .then((data) => {
          if (data.invitationLink) {
            setInvitationLink(data.invitationLink);
            setIsDialogOpen(true);
          } else {
            toast({
              title: "Success",
              description: "Player created successfully",
            });
            router.push("/dashboard/players");
            router.refresh();
          }
          resolve();
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error.message || "Failed to create player",
            variant: "destructive",
          });
          reject(error);
        });
    });
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    router.push("/dashboard/players");
    router.refresh();
  };

  return (
    <>
      <PlayerForm />
      <InvitationLinkDialog
        invitationLink={invitationLink}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
    </>
  );
}
