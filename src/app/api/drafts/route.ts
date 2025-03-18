import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { DraftStatus } from "@/lib/types";
import { ActivityType } from "@/lib/types";
import { hasAnyRole } from "../../../lib/auth";
import { Role } from "../../../prisma/generated/client/index";

export async function GET(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as DraftStatus | null;
  const authorId = searchParams.get("authorId");

  // Build the where clause based on filters
  const where: any = {};

  // If status is provided, filter by status
  if (status) {
    where.status = status;
  }

  // If authorId is provided, filter by author
  if (authorId) {
    where.authorId = authorId;
  }

  // For non-admin users, only show their own drafts
  if (!hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER])) {
    where.authorId = user.userId;
  }

  const drafts = await prisma.draft.findMany({
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

  return NextResponse.json(drafts);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { title, content, tags, featuredImageId, mediaItemIds, status } =
    await request.json();

  // Create activity log
  const activityData = {
    type: ActivityType.DRAFT_CREATED,
    message: `Draft "${title}" created`,
    userId: user.userId,
  };

  // Create the draft with a transaction to ensure both operations succeed or fail together
  const [draft, _] = await prisma.$transaction([
    prisma.draft.create({
      data: {
        title,
        content,
        authorId: user.userId,
        status: status || "IN_PROGRESS",
        ...(featuredImageId && {
          featuredImage: { connect: { id: featuredImageId } },
        }),
        ...(tags &&
          tags.length > 0 && {
            tags: {
              connect: tags.map((tagId: string) => ({ id: tagId })),
            },
          }),
        ...(mediaItemIds &&
          mediaItemIds.length > 0 && {
            mediaItems: {
              connect: mediaItemIds.map((id: string) => ({ id })),
            },
          }),
      },
      include: {
        tags: true,
        featuredImage: true,
        mediaItems: true,
      },
    }),
    prisma.activity.create({
      data: activityData,
    }),
  ]);

  return NextResponse.json(draft);
}
