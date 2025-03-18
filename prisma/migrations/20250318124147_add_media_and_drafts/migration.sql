/*
  Warnings:

  - A unique constraint covering the columns `[featuredImageId]` on the table `News` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "DraftStatus" AS ENUM ('IN_PROGRESS', 'READY_FOR_REVIEW', 'NEEDS_REVISION', 'APPROVED');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ActivityType" ADD VALUE 'DRAFT_CREATED';
ALTER TYPE "ActivityType" ADD VALUE 'DRAFT_UPDATED';
ALTER TYPE "ActivityType" ADD VALUE 'DRAFT_PUBLISHED';
ALTER TYPE "ActivityType" ADD VALUE 'MEDIA_UPLOADED';

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "featuredImageId" TEXT;

-- CreateTable
CREATE TABLE "Draft" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "featuredImageId" TEXT,
    "status" "DraftStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "reviewNotes" TEXT,
    "reviewerId" TEXT,

    CONSTRAINT "Draft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItem" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "originalFilename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "size" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "duration" DOUBLE PRECISION,
    "alt" TEXT,
    "caption" TEXT,
    "uploadedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],
    "folder" TEXT,

    CONSTRAINT "MediaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DraftToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DraftToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DraftMedia" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DraftMedia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NewsMedia" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_NewsMedia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Draft_featuredImageId_key" ON "Draft"("featuredImageId");

-- CreateIndex
CREATE INDEX "_DraftToTag_B_index" ON "_DraftToTag"("B");

-- CreateIndex
CREATE INDEX "_DraftMedia_B_index" ON "_DraftMedia"("B");

-- CreateIndex
CREATE INDEX "_NewsMedia_B_index" ON "_NewsMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "News_featuredImageId_key" ON "News"("featuredImageId");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_featuredImageId_fkey" FOREIGN KEY ("featuredImageId") REFERENCES "MediaItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_featuredImageId_fkey" FOREIGN KEY ("featuredImageId") REFERENCES "MediaItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaItem" ADD CONSTRAINT "MediaItem_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftToTag" ADD CONSTRAINT "_DraftToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Draft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftToTag" ADD CONSTRAINT "_DraftToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftMedia" ADD CONSTRAINT "_DraftMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "Draft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftMedia" ADD CONSTRAINT "_DraftMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "MediaItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsMedia" ADD CONSTRAINT "_NewsMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "MediaItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsMedia" ADD CONSTRAINT "_NewsMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
