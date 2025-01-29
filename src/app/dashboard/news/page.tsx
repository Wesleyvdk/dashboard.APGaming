"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  author: { email: string };
  createdAt: string;
}

export default function NewsManagement() {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await fetch("/api/news", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setNews(data);
    }
  };

  const deleteNews = async (id: string) => {
    const response = await fetch(`/api/news/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      fetchNews();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage News Articles</h1>
      <Link
        href="/dashboard/news/create"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create New Article
      </Link>
      <div className="mt-4">
        {news.map((article) => (
          <div key={article.id} className="border p-4 mb-4 rounded">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">By {article.author.email}</p>
            <p className="mt-2">{article.content.substring(0, 100)}...</p>
            <div className="mt-4">
              <Link
                href={`/dashboard/news/edit/${article.id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteNews(article.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
