"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MediaGrid } from "./media-grid";
import { MediaUploadButton } from "./media-upload-button";
import { Search, X } from "lucide-react";
import { MediaType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MediaPickerProps {
  onSelect: (items: any[]) => void;
  selectedItems?: any[];
  maxItems?: number;
  filter?: {
    type?: MediaType;
    folder?: string;
    tag?: string;
  };
}

export function MediaPicker({
  onSelect,
  selectedItems = [],
  maxItems,
  filter,
}: MediaPickerProps) {
  const [open, setOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState<string>(filter?.type || "all");
  const [localSelectedItems, setLocalSelectedItems] =
    useState<any[]>(selectedItems);

  useEffect(() => {
    if (open) {
      fetchMediaItems();
    }
  }, [open, activeType]);

  useEffect(() => {
    setLocalSelectedItems(selectedItems);
  }, [selectedItems]);

  const fetchMediaItems = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (activeType !== "all") params.append("type", activeType);
      if (filter?.folder) params.append("folder", filter.folder);
      if (filter?.tag) params.append("tag", filter.tag);
      if (searchQuery) params.append("search", searchQuery);

      const response = await fetch(`/api/media?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setMediaItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch media items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMediaItems();
  };

  const handleTypeChange = (value: string) => {
    setActiveType(value);
  };

  const handleSelect = (items: any[]) => {
    setLocalSelectedItems(items);
  };

  const handleConfirm = () => {
    onSelect(localSelectedItems);
    setOpen(false);
  };

  const handleRemoveItem = (itemId: string) => {
    const newItems = localSelectedItems.filter((item) => item.id !== itemId);
    setLocalSelectedItems(newItems);
    onSelect(newItems);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {localSelectedItems.map((item) => (
          <Card key={item.id} className="relative w-24 h-24 overflow-hidden">
            {item.type === "IMAGE" ? (
              <img
                src={item.url || "/placeholder.svg"}
                alt={item.alt || item.originalFilename}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100">
                <span className="text-xs text-center p-1 truncate">
                  {item.originalFilename}
                </span>
              </div>
            )}
            <button
              className="absolute top-1 right-1 bg-black/50 rounded-full p-0.5"
              onClick={() => handleRemoveItem(item.id)}
            >
              <X className="h-3 w-3 text-white" />
            </button>
          </Card>
        ))}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-24 w-24">
              Select Media
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Media Library</DialogTitle>
              <DialogDescription>
                Select media from your library or upload new files.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 overflow-y-auto">
              <div className="flex justify-between items-center">
                <form onSubmit={handleSearch} className="flex-1 mr-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search media..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>
                <MediaUploadButton />
              </div>

              <Tabs
                defaultValue={activeType}
                value={activeType}
                onValueChange={handleTypeChange}
              >
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="IMAGE">Images</TabsTrigger>
                  <TabsTrigger value="VIDEO">Videos</TabsTrigger>
                  <TabsTrigger value="AUDIO">Audio</TabsTrigger>
                  <TabsTrigger value="DOCUMENT">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <MediaGrid
                    items={mediaItems}
                    isLoading={isLoading}
                    onSelect={handleSelect}
                    selectedItems={localSelectedItems}
                    selectable
                    maxItems={maxItems}
                  />
                </TabsContent>
                <TabsContent value="IMAGE" className="mt-0">
                  <MediaGrid
                    items={mediaItems}
                    isLoading={isLoading}
                    onSelect={handleSelect}
                    selectedItems={localSelectedItems}
                    selectable
                    maxItems={maxItems}
                  />
                </TabsContent>
                <TabsContent value="VIDEO" className="mt-0">
                  <MediaGrid
                    items={mediaItems}
                    isLoading={isLoading}
                    onSelect={handleSelect}
                    selectedItems={localSelectedItems}
                    selectable
                    maxItems={maxItems}
                  />
                </TabsContent>
                <TabsContent value="AUDIO" className="mt-0">
                  <MediaGrid
                    items={mediaItems}
                    isLoading={isLoading}
                    onSelect={handleSelect}
                    selectedItems={localSelectedItems}
                    selectable
                    maxItems={maxItems}
                  />
                </TabsContent>
                <TabsContent value="DOCUMENT" className="mt-0">
                  <MediaGrid
                    items={mediaItems}
                    isLoading={isLoading}
                    onSelect={handleSelect}
                    selectedItems={localSelectedItems}
                    selectable
                    maxItems={maxItems}
                  />
                </TabsContent>
              </Tabs>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleConfirm}>
                Select{" "}
                {localSelectedItems.length > 0
                  ? `(${localSelectedItems.length})`
                  : ""}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
