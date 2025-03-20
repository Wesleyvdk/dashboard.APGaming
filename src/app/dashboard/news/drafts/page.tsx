import { Suspense } from "react";
import Link from "next/link";
import { getDrafts } from "@/lib/drafts";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { DraftStatusFilter } from "./draft-status-filter";
import { DraftStatus, Draft } from "@/lib/types";

export default async function DraftsPage() {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Draft Management</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/news">Published News</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/news/drafts/create">Create New Draft</Link>
          </Button>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DraftsList />
      </Suspense>
    </div>
  );
}

async function DraftsList() {
  const drafts = (await getDrafts()).map((draft) => ({
    ...draft,
    status: draft.status as DraftStatus,
  }));
  return (
    <>
      <DraftStatusFilter />
      <DataTable columns={columns} data={drafts} />
    </>
  );
}
