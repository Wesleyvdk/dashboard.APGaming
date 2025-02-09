"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/multi-select";
import type { News, Tag } from "@/lib/types";
import React from "react";

export default function NewsForm({
  params: paramsPromise,
}: {
  params: Promise<{ action: string; id?: string }>;
}) {
  const params = React.use(paramsPromise);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [newTags, setNewTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchTags();
    if (params.action === "edit" && params.id) {
      fetchNews(params.id);
    }
  }, [params.action, params.id]);

  const fetchTags = async () => {
    const response = await fetch("/api/tags");
    if (response.ok) {
      const tags: Tag[] = await response.json();
      setAvailableTags(tags);
    }
  };

  const fetchNews = async (id: string) => {
    const response = await fetch(`/api/news/${id}`);
    if (response.ok) {
      const data: News = await response.json();
      setTitle(data.title);
      setContent(data.content);
      setIsPublished(!!data.publishedAt);
      setTags(data.tags.map((tag) => tag.id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      params.action === "edit" ? `/api/news/${params.id}` : "/api/news";
    const method = params.action === "edit" ? "PUT" : "POST";

    // Create new tags if necessary
    const createdTags = await Promise.all(
      newTags.map(async (tagName) => {
        const response = await fetch("/api/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: tagName }),
        });
        if (response.ok) {
          return await response.json();
        }
        return null;
      })
    );

    const allTagIds = [
      ...tags,
      ...createdTags
        .filter((tag): tag is Tag => tag !== null)
        .map((tag) => tag.id),
    ];

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, isPublished, tags: allTagIds }),
    });

    if (response.ok) {
      router.push("/dashboard/news");
    }
  };

  const handleTagChange = (selected: string[]) => {
    const existingTagIds = selected.filter((id) =>
      availableTags.some((tag) => tag.id === id)
    );
    const newTagNames = selected.filter(
      (id) => !availableTags.some((tag) => tag.id === id)
    );
    setTags(existingTagIds);
    setNewTags(newTagNames);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-8">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Editor value={content} onChange={setContent} />
      </div>
      <div>
        <Label htmlFor="tags">Tags</Label>
        <MultiSelect
          options={[
            ...availableTags.map((tag) => ({ label: tag.name, value: tag.id })),
            ...newTags.map((tag) => ({ label: tag, value: tag })),
          ]}
          selected={[...tags, ...newTags]}
          onChange={handleTagChange}
          placeholder="Select or create tags"
          allowCreate
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="published"
          checked={isPublished}
          onCheckedChange={(checked) => setIsPublished(checked as boolean)}
        />
        <Label htmlFor="published">Publish immediately</Label>
      </div>
      <Button type="submit">
        {params.action === "edit" ? "Update" : "Create"} Article
      </Button>
    </form>
  );
}
