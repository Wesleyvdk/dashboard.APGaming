import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: "auto", // R2 uses 'auto' as the region
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME!;
const PUBLIC_URL =
  process.env.R2_PUBLIC_URL ||
  `https://${process.env.R2_BUCKET_NAME}.${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;

/**
 * Upload a file to R2 storage
 * @param buffer The file buffer to upload
 * @param key The key (path) to store the file at
 * @param contentType The MIME type of the file
 * @returns Object containing the URL of the uploaded file
 */
export async function uploadToR2(
  buffer: Buffer,
  key: string,
  contentType: string
) {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  try {
    await s3Client.send(command);

    // If you're using Cloudflare's Public R2 Buckets feature
    // The URL format would be: https://pub-[hash].r2.dev/[key]
    // If you're using a custom domain with R2, use that URL format instead
    const url = `${PUBLIC_URL}/${key}`;

    return { url };
  } catch (error) {
    console.error("Error uploading to R2:", error);
    throw error;
  }
}

/**
 * Delete a file from R2 storage
 * @param key The key (path) of the file to delete
 */
export async function deleteFromR2(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  try {
    await s3Client.send(command);
    return true;
  } catch (error) {
    console.error("Error deleting from R2:", error);
    throw error;
  }
}
