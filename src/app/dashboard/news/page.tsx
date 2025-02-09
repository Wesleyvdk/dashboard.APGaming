import { Suspense } from "react";
import Link from "next/link";
import { getNews } from "@/lib/news";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { TagFilter } from "./tag-filter";

export default async function NewsPage() {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">News Management</h1>
        <Button asChild>
          <Link href="/dashboard/news/create/1">Create New Article</Link>
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsList />
      </Suspense>
    </div>
  );
}

async function NewsList() {
  const news = await getNews();
  return (
    <>
      <TagFilter />
      <DataTable columns={columns} data={news} />
    </>
  );
}
