"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";

interface InvitationLinkDialogProps {
  invitationLink: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function InvitationLinkDialog({
  invitationLink,
  isOpen,
  onClose,
}: InvitationLinkDialogProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (invitationLink) {
      navigator.clipboard.writeText(invitationLink);
      toast({
        title: "Copied!",
        description: "Invitation link copied to clipboard",
      });
    }
  };

  if (!invitationLink) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Player Created Successfully</DialogTitle>
          <DialogDescription>
            A new user account has been created. Share this invitation link with
            the player to complete their registration.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Invitation Link
            </Label>
            <Input
              id="link"
              readOnly
              value={invitationLink || ""}
              className="font-mono"
            />
          </div>
          <Button
            type="button"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            Copy
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
