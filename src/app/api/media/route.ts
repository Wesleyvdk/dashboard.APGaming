import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { MediaType } from "@/prisma/generated/client";
import { ActivityType } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import { uploadToR2 } from "@/lib/r2-storage";

export async function GET(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") as MediaType | null;
  const folder = searchParams.get("folder");
  const tag = searchParams.get("tag");
  const search = searchParams.get("search");

  // Build the where clause based on filters
  const where: any = {};

  // If type is provided, filter by type
  if (type) {
    where.type = type;
  }

  // If folder is provided, filter by folder
  if (folder) {
    where.folder = folder;
  }

  // If tag is provided, filter by tag
  if (tag) {
    where.tags = {
      has: tag,
    };
  }

  // If search is provided, search in filename, originalFilename, alt, and caption
  if (search) {
    where.OR = [
      { filename: { contains: search, mode: "insensitive" } },
      { originalFilename: { contains: search, mode: "insensitive" } },
      { alt: { contains: search, mode: "insensitive" } },
      { caption: { contains: search, mode: "insensitive" } },
    ];
  }

  const mediaItems = await prisma.mediaItem.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(mediaItems);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const folder = (formData.get("folder") as string) || "general";
    const alt = (formData.get("alt") as string) || "";
    const caption = (formData.get("caption") as string) || "";
    const tags = (formData.get("tags") as string) || "";
    const tagArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];

    // Generate a unique filename
    const fileExtension = file.name.split(".").pop() || "";
    const uniqueFilename = `${folder}/${uuidv4()}.${fileExtension}`;

    // Get file buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Determine media type
    let mediaType: MediaType = "OTHER";
    let width: number | null = null;
    let height: number | null = null;
    const duration: number | null = null;

    // Upload to R2
    const key = uniqueFilename;
    const contentType = file.type;

    if (file.type.startsWith("image/")) {
      mediaType = "IMAGE";

      // Get image dimensions
      try {
        const metadata = await sharp(buffer).metadata();
        width = metadata.width || null;
        height = metadata.height || null;
      } catch (error) {
        console.error("Error getting image metadata:", error);
      }
    } else if (file.type.startsWith("video/")) {
      mediaType = "VIDEO";
      // For video dimensions and duration, we would need additional processing
    } else if (file.type.startsWith("audio/")) {
      mediaType = "AUDIO";
      // For audio duration, we would need additional processing
    } else if (
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      mediaType = "DOCUMENT";
    }

    // Upload the file to R2
    const uploadResult = await uploadToR2(buffer, key, contentType);

    if (!uploadResult.url) {
      throw new Error("Failed to upload file to R2");
    }

    // Create activity log
    const activityData = {
      type: ActivityType.MEDIA_UPLOADED,
      message: `Media "${file.name}" uploaded`,
      userId: user.id,
    };

    // Create the media item with a transaction
    const [mediaItem, _] = await prisma.$transaction([
      prisma.mediaItem.create({
        data: {
          filename: key.split("/").pop() || key,
          originalFilename: file.name,
          path: key,
          url: uploadResult.url,
          type: mediaType,
          size: file.size,
          mimeType: file.type,
          width,
          height,
          duration,
          alt,
          caption,
          tags: tagArray,
          folder,
          uploadedBy: { connect: { id: user.id } },
        },
      }),
      prisma.activity.create({
        data: activityData,
      }),
    ]);

    return NextResponse.json(mediaItem);
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
