import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function getEventById(id: string) {
  const user = await auth();

  if (!user) {
    return null;
  }

  return prisma.event.findUnique({
    where: { id },
    include: {
      team: {
        select: {
          id: true,
          name: true,
        },
      },
      createdBy: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
}
