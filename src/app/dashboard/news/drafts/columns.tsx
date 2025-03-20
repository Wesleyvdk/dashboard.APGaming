"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  ArrowUpDown,
  Eye,
  Edit,
  Trash,
  Send,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDistanceToNow } from "date-fns";
import { DraftStatus } from "@/prisma/generated/client";
import { Draft } from "@/lib/types";

export const columns: ColumnDef<Draft>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "author.username",
    header: "Author",
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags") as Draft["tags"];
      return (
        <div className="flex flex-wrap gap-1">
          {tags && tags.length > 0 ? (
            tags.map((tag) => (
              <Badge key={tag.id} variant="outline">
                {tag.name}
              </Badge>
            ))
          ) : (
            <span className="text-muted-foreground text-sm">No tags</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return <div>{formatDistanceToNow(date, { addSuffix: true })}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as DraftStatus;
      let variant:
        | "default"
        | "secondary"
        | "destructive"
        | "outline"
        | "success" = "secondary";

      switch (status) {
        case "APPROVED":
          variant = "success";
          break;
        case "NEEDS_REVISION":
          variant = "destructive";
          break;
        case "READY_FOR_REVIEW":
          variant = "default";
          break;
        case "IN_PROGRESS":
        default:
          variant = "secondary";
      }

      return <Badge variant={variant}>{formatDraftStatus(status)}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const draft = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/news/drafts/${draft.id}`}>
                <Eye className="mr-2 h-4 w-4" />
                View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/news/drafts/${draft.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            {draft.status === DraftStatus.APPROVED && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/news/drafts/${draft.id}/publish`}>
                    <Send className="mr-2 h-4 w-4" />
                    Publish
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href={`/dashboard/news/drafts/${draft.id}/delete`}
                className="text-destructive"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function formatDraftStatus(status: DraftStatus): string {
  switch (status) {
    case "IN_PROGRESS":
      return "In Progress";
    case "READY_FOR_REVIEW":
      return "Ready for Review";
    case "NEEDS_REVISION":
      return "Needs Revision";
    case "APPROVED":
      return "Approved";
    default:
      return status;
  }
}
