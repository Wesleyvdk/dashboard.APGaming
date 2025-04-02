import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { DraftStatus } from "./types";

export async function getDrafts(status?: DraftStatus) {
  const user = await auth();

  if (!user) {
    return [];
  }

  const where: any = {};

  if (status) {
    where.status = status;
  }

  if (!user.roles.includes("ADMIN") && !user.roles.includes("NEWS_WRITER")) {
    where.authorId = user.id;
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

  if (
    draft &&
    !user.roles.includes("ADMIN") &&
    !user.roles.includes("NEWS_WRITER") &&
    draft.authorId !== user.id
  ) {
    return null;
  }

  return draft;
}
