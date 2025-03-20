import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { DraftStatus } from "./types";

export async function getDrafts(status?: DraftStatus) {
  const user = await auth();

  if (!user) {
    return [];
  }

  // Build the where clause based on filters
  const where: any = {};

  // If status is provided, filter by status
  if (status) {
    where.status = status;
  }

  // For non-admin users, only show their own drafts
  if (user.role !== "ADMIN" && user.role !== "NEWS_WRITER") {
    where.authorId = user.userId;
  }

  return prisma.draft.findMany({
    where,
    include: {
      author: {
        select: {
          username: true,
        },
      },
      tags: true,
      featuredImage: {
        select: {
          id: true,
          url: true,
          alt: true,
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getDraftById(id: string) {
  const user = await auth();

  if (!user) {
    return null;
  }

  const draft = await prisma.draft.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          username: true,
        },
      },
      tags: true,
      featuredImage: true,
      mediaItems: true,
    },
  });

  // Check if user has permission to view this draft
  if (
    draft &&
    user.role !== "ADMIN" &&
    user.role !== "NEWS_WRITER" &&
    draft.authorId !== user.userId
  ) {
    return null;
  }

  return draft;
}
