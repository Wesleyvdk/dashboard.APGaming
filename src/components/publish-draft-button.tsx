"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

interface PublishDraftButtonProps {
  draftId: string;
}

export function PublishDraftButton({ draftId }: PublishDraftButtonProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const response = await fetch(`/api/drafts/${draftId}/publish`, {
        method: "POST",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Draft published successfully.",
        });
        router.push("/dashboard/news");
        router.refresh();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to publish draft");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to publish draft. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">
          <Send className="mr-2 h-4 w-4" />
          Publish Draft
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish this draft?</AlertDialogTitle>
          <AlertDialogDescription>
            This will publish the draft as a news article and delete the draft.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handlePublish} disabled={isPublishing}>
            {isPublishing ? "Publishing..." : "Publish"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
