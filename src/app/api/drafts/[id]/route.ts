import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasAnyRole, hasRole } from "@/lib/auth";
import { ActivityType, Role } from "@/lib/types";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  const draft = await prisma.draft.findUnique({
    where: { id: params.id },
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

  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Check if user has permission to view this draft
  if (
    !hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER]) &&
    draft.authorId !== user.userId
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  return NextResponse.json(draft);
}

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;

  const draft = await prisma.draft.findUnique({
    where: { id: params.id },
  });

  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Check if user has permission to edit this draft
  if (!hasRole(user, Role.ADMIN) && draft.authorId !== user.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const {
    title,
    content,
    tags,
    featuredImageId,
    mediaItemIds,
    status,
    reviewNotes,
  } = await request.json();

  // Create activity log
  const activityData = {
    type: ActivityType.DRAFT_UPDATED,
    message: `Draft "${title}" updated`,
    userId: user.userId,
  };

  // Update the draft with a transaction
  const [updatedDraft, _] = await prisma.$transaction([
    prisma.draft.update({
      where: { id: params.id },
      data: {
        title,
        content,
        status: status || draft.status,
        reviewNotes:
          reviewNotes !== undefined ? reviewNotes : draft.reviewNotes,
        ...(!hasRole(user, Role.ADMIN) &&
          status === "NEEDS_REVISION" && { reviewerId: user.userId }),
        ...(featuredImageId !== undefined && {
          featuredImage: featuredImageId
            ? { connect: { id: featuredImageId } }
            : { disconnect: true },
        }),
        ...(tags && {
          tags: {
            set: tags.map((tagId: string) => ({ id: tagId })),
          },
        }),
        ...(mediaItemIds && {
          mediaItems: {
            set: mediaItemIds.map((id: string) => ({ id })),
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

  return NextResponse.json(updatedDraft);
}

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  const draft = await prisma.draft.findUnique({
    where: { id: params.id },
  });

  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Check if user has permission to delete this draft
  if (!hasRole(user, Role.ADMIN) && draft.authorId !== user.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Create activity log
  const activityData = {
    type: ActivityType.DRAFT_UPDATED,
    message: `Draft "${draft.title}" deleted`,
    userId: user.userId,
  };

  // Delete the draft with a transaction
  await prisma.$transaction([
    prisma.draft.delete({
      where: { id: params.id },
    }),
    prisma.activity.create({
      data: activityData,
    }),
  ]);

  return NextResponse.json({ message: "Draft deleted successfully" });
}
