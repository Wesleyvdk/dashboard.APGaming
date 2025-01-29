"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { News } from "@/lib/types";
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
  const router = useRouter();

  useEffect(() => {
    if (params.action === "edit" && params.id) {
      fetchNews(params.id);
    }
  }, [params.action, params.id]);

  const fetchNews = async (id: string) => {
    const response = await fetch(`/api/news/${id}`);
    if (response.ok) {
      const data: News = await response.json();
      setTitle(data.title);
      setContent(data.content.replace("<p>", "").replace("</p>", ""));
      setIsPublished(!!data.publishedAt);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      params.action === "edit" ? `/api/news/${params.id}` : "/api/news";
    const method = params.action === "edit" ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, isPublished }),
    });

    if (response.ok) {
      router.push("/dashboard/news");
    }
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
