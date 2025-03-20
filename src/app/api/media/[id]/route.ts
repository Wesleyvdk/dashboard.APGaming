import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { deleteFromR2 } from "@/lib/r2-storage";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mediaItem = await prisma.mediaItem.findUnique({
    where: { id: params.id },
    include: {
      uploadedBy: {
        select: {
          username: true,
        },
      },
    },
  });

  if (!mediaItem) {
    return NextResponse.json(
      { error: "Media item not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(mediaItem);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mediaItem = await prisma.mediaItem.findUnique({
    where: { id: params.id },
  });

  if (!mediaItem) {
    return NextResponse.json(
      { error: "Media item not found" },
      { status: 404 }
    );
  }

  // Only allow the uploader or admin to update the media item
  if (user.role !== "ADMIN" && mediaItem.uploadedById !== user.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { alt, caption, tags, folder } = await request.json();

  const updatedMediaItem = await prisma.mediaItem.update({
    where: { id: params.id },
    data: {
      alt: alt !== undefined ? alt : mediaItem.alt,
      caption: caption !== undefined ? caption : mediaItem.caption,
      tags: tags !== undefined ? tags : mediaItem.tags,
      folder: folder !== undefined ? folder : mediaItem.folder,
    },
  });

  return NextResponse.json(updatedMediaItem);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mediaItem = await prisma.mediaItem.findUnique({
    where: { id: params.id },
    include: {
      featuredInNews: true,
      featuredAsNewsImage: true,
      featuredInDrafts: true,
      featuredAsDraftImage: true,
    },
  });

  if (!mediaItem) {
    return NextResponse.json(
      { error: "Media item not found" },
      { status: 404 }
    );
  }

  // Only allow the uploader or admin to delete the media item
  if (user.role !== "ADMIN" && mediaItem.uploadedById !== user.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Check if the media item is being used
  if (
    mediaItem.featuredInNews.length > 0 ||
    mediaItem.featuredAsNewsImage ||
    mediaItem.featuredInDrafts.length > 0 ||
    mediaItem.featuredAsDraftImage
  ) {
    return NextResponse.json(
      {
        error: "Cannot delete media item that is being used in news or drafts",
      },
      { status: 400 }
    );
  }

  // Delete the file from R2
  try {
    await deleteFromR2(mediaItem.path);
  } catch (error) {
    console.error("Error deleting file from R2:", error);
    // Continue with deletion from database even if file deletion fails
  }

  // Delete the media item from the database
  await prisma.mediaItem.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Media item deleted successfully" });
}
