import { prisma } from "@/lib/prisma";
import type { Announcement } from "./types";

export async function getActiveAnnouncements(): Promise<Announcement[]> {
  const now = new Date();

  return prisma.announcement.findMany({
    where: {
      isActive: true,
      OR: [{ expiresAt: null }, { expiresAt: { gte: now } }],
    },
    orderBy: [{ priority: "desc" }, { createdAt: "desc" }],
    take: 5,
  });
}
