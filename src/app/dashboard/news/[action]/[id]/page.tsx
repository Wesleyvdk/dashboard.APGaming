"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewsForm({
  params,
}: {
  params: { action: string; id?: string };
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.action === "edit" && params.id) {
      fetchNews(params.id);
    }
  }, [params.action, params.id]);

  const fetchNews = async (id: string) => {
    const response = await fetch(`/api/news/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      router.push("/dashboard/news");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {params.action === "edit" ? "Edit" : "Create"} News Article
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={10}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {params.action === "edit" ? "Update" : "Create"} Article
        </button>
      </form>
    </div>
  );
}
