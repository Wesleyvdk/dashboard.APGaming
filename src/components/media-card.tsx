"use client";

import { Card, CardContent } from "@/components/ui/card";
import { File, FileAudio, FileText, CheckCircle2 } from "lucide-react";
import { formatBytes } from "@/lib/utils";

interface MediaCardProps {
  item: any;
  onClick: () => void;
  isSelected?: boolean;
  selectable?: boolean;
}

export function MediaCard({
  item,
  onClick,
  isSelected = false,
  selectable = false,
}: MediaCardProps) {
  const getMediaPreview = () => {
    switch (item.type) {
      case "IMAGE":
        return (
          <div className="relative aspect-square overflow-hidden rounded-md">
            <img
              src={item.url || "/placeholder.svg"}
              alt={item.alt || item.originalFilename}
              className="object-cover w-full h-full"
            />
            {selectable && isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
        );
      case "VIDEO":
        return (
          <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            <File className="h-12 w-12 text-gray-400" />
            <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-1 rounded">
              Video
            </span>
            {selectable && isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
        );
      case "AUDIO":
        return (
          <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            <FileAudio className="h-12 w-12 text-gray-400" />
            {selectable && isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
        );
      case "DOCUMENT":
        return (
          <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            <FileText className="h-12 w-12 text-gray-400" />
            {selectable && isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            <File className="h-12 w-12 text-gray-400" />
            {selectable && isSelected && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <Card
      className={`overflow-hidden cursor-pointer transition-all ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      {getMediaPreview()}
      <CardContent className="p-2">
        <div className="truncate text-sm">{item.originalFilename}</div>
        <div className="text-xs text-muted-foreground">
          {formatBytes(item.size)}
        </div>
      </CardContent>
    </Card>
  );
}
