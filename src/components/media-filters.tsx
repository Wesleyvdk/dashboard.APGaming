"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Folder, Tag, X } from "lucide-react";

export function MediaFilters() {
  const [folders, setFolders] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFolder = searchParams.get("folder");
  const activeTag = searchParams.get("tag");

  useEffect(() => {
    // In a real app, you would fetch folders and tags from the API
    // For now, we'll use some dummy data
    setFolders(["general", "news", "events", "players", "teams"]);
    setTags(["logo", "banner", "profile", "game", "tournament", "match"]);
  }, []);

  const handleFolderClick = (folder: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeFolder === folder) {
      params.delete("folder");
    } else {
      params.set("folder", folder);
    }

    router.push(`/dashboard/media?${params.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }

    router.push(`/dashboard/media?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("folder");
    params.delete("tag");

    router.push(`/dashboard/media?${params.toString()}`);
  };

  const hasActiveFilters = activeFolder || activeTag;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {hasActiveFilters && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Active Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {activeFolder && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Folder className="h-3 w-3" />
                  {activeFolder}
                  <X
                    className="h-3 w-3 ml-1 cursor-pointer"
                    onClick={() => handleFolderClick(activeFolder)}
                  />
                </Badge>
              )}
              {activeTag && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {activeTag}
                  <X
                    className="h-3 w-3 ml-1 cursor-pointer"
                    onClick={() => handleTagClick(activeTag)}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium mb-2">Folders</h3>
          <div className="space-y-1">
            {folders.map((folder) => (
              <Button
                key={folder}
                variant={activeFolder === folder ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFolderClick(folder)}
              >
                <Folder className="h-4 w-4 mr-2" />
                {folder}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Tags</h3>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
