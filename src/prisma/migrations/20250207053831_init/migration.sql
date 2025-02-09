-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'DISABLED';

-- CreateTable
CREATE TABLE "DiscordInvitation" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordInvitation_pkey" PRIMARY KEY ("id")
);
