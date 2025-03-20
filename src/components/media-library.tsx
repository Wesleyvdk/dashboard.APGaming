"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MediaGrid } from "./media-grid";
import { MediaFilters } from "./media-filters";
import { Search, RefreshCw } from "lucide-react";
import { MediaType } from "@/lib/types";

export function MediaLibrary() {
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") as MediaType | null;
  const folder = searchParams.get("folder");
  const tag = searchParams.get("tag");
  const search = searchParams.get("search");

  useEffect(() => {
    fetchMediaItems();

    if (search) {
      setSearchQuery(search);
    }
  }, [type, folder, tag, search]);

  const fetchMediaItems = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (type) params.append("type", type);
      if (folder) params.append("folder", folder);
      if (tag) params.append("tag", tag);
      if (search) params.append("search", search);

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

    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    router.push(`/dashboard/media?${params.toString()}`);
  };

  const handleRefresh = () => {
    fetchMediaItems();
  };

  const handleTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }

    router.push(`/dashboard/media?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <MediaFilters />
        </div>

        <div className="w-full md:w-3/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
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
                <Button variant="outline" size="icon" onClick={handleRefresh}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>

              <Tabs
                defaultValue="all"
                value={type || "all"}
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
                  <MediaGrid items={mediaItems} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="IMAGE" className="mt-0">
                  <MediaGrid items={mediaItems} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="VIDEO" className="mt-0">
                  <MediaGrid items={mediaItems} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="AUDIO" className="mt-0">
                  <MediaGrid items={mediaItems} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="DOCUMENT" className="mt-0">
                  <MediaGrid items={mediaItems} isLoading={isLoading} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
