import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasAnyRole, hasRole } from "@/lib/auth";
import { ActivityType, Role } from "@/lib/types";

export async function POST(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  if (!hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const draft = await prisma.draft.findUnique({
    where: { id: params.id },
    include: {
      tags: true,
      featuredImage: true,
      mediaItems: true,
    },
  });

  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Check if user has permission to publish this draft
  if (hasRole(user, Role.ADMIN) && draft.authorId !== user.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Only allow publishing if draft is approved or if user is admin
  if (hasRole(user, Role.ADMIN) && draft.status !== "APPROVED") {
    return NextResponse.json(
      { error: "Draft must be approved before publishing" },
      { status: 400 }
    );
  }

  // Create activity log
  const activityData = {
    type: ActivityType.DRAFT_PUBLISHED,
    message: `Draft "${draft.title}" published as news`,
    userId: user.userId,
  };

  // Publish the draft (create news article) and delete the draft
  const [news, _, __] = await prisma.$transaction([
    prisma.news.create({
      data: {
        title: draft.title,
        content: draft.content,
        authorId: draft.authorId,
        publishedAt: new Date(),
        ...(draft.featuredImageId && {
          featuredImage: { connect: { id: draft.featuredImageId } },
        }),
        tags: {
          connect: draft.tags.map((tag) => ({ id: tag.id })),
        },
        mediaItems: {
          connect: draft.mediaItems.map((media) => ({ id: media.id })),
        },
      },
      include: {
        tags: true,
        featuredImage: true,
        mediaItems: true,
      },
    }),
    prisma.draft.delete({
      where: { id: params.id },
    }),
    prisma.activity.create({
      data: activityData,
    }),
  ]);

  return NextResponse.json(news);
}
