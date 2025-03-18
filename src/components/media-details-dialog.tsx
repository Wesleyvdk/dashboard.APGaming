"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { formatBytes } from "@/lib/utils";
import { MediaType } from "@/lib/types";
import { Trash, Download, Copy, Check } from "lucide-react";
import { format } from "date-fns";

interface MediaDetailsDialogProps {
  item: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MediaDetailsDialog({
  item,
  open,
  onOpenChange,
}: MediaDetailsDialogProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    alt: "",
    caption: "",
    tags: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  // Update form data when item changes
  if (item && open && formData.alt === "") {
    setFormData({
      alt: item.alt || "",
      caption: item.caption || "",
      tags: item.tags ? item.tags.join(", ") : "",
    });
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!item) return;

    setIsUpdating(true);
    try {
      const response = await fetch(`/api/media/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alt: formData.alt,
          caption: formData.caption,
          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Media details updated successfully.",
        });
        router.refresh();
      } else {
        throw new Error("Failed to update media details");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update media details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!item) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/media/${item.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Media deleted successfully.",
        });
        onOpenChange(false);
        router.refresh();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete media");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to delete media. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDownload = () => {
    if (!item) return;

    const link = document.createElement("a");
    link.href = item.url;
    link.download = item.originalFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyUrl = () => {
    if (!item) return;

    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Media Details</DialogTitle>
          <DialogDescription>
            View and edit details for this media item.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            {item.type === "IMAGE" ? (
              <img
                src={item.url || "/placeholder.svg"}
                alt={item.alt || item.originalFilename}
                className="max-h-[300px] object-contain rounded-md"
              />
            ) : item.type === "VIDEO" ? (
              <video
                src={item.url}
                controls
                className="max-h-[300px] w-full rounded-md"
              />
            ) : item.type === "AUDIO" ? (
              <audio src={item.url} controls className="w-full" />
            ) : (
              <div className="flex items-center justify-center h-[200px] w-full bg-gray-100 rounded-md">
                <p className="text-muted-foreground">{item.originalFilename}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-muted-foreground">Filename</Label>
              <p className="text-sm truncate">{item.originalFilename}</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Type</Label>
              <p className="text-sm">{formatMediaType(item.type)}</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Size</Label>
              <p className="text-sm">{formatBytes(item.size)}</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Uploaded</Label>
              <p className="text-sm">
                {format(new Date(item.createdAt), "PPP")}
              </p>
            </div>
            {item.width && item.height && (
              <div>
                <Label className="text-muted-foreground">Dimensions</Label>
                <p className="text-sm">
                  {item.width} × {item.height}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="alt">Alt Text</Label>
            <Input
              id="alt"
              name="alt"
              value={formData.alt}
              onChange={handleInputChange}
              placeholder="Describe the media for accessibility"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              placeholder="Add a caption"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="tag1, tag2, tag3"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyUrl}>
              {copied ? (
                <Check className="h-4 w-4 mr-2" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? "Copied" : "Copy URL"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <DialogFooter className="flex justify-between">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <Trash className="h-4 w-4 mr-2" />
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
          <Button onClick={handleUpdate} disabled={isUpdating}>
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function formatMediaType(type: MediaType): string {
  switch (type) {
    case "IMAGE":
      return "Image";
    case "VIDEO":
      return "Video";
    case "AUDIO":
      return "Audio";
    case "DOCUMENT":
      return "Document";
    default:
      return "Other";
  }
}
