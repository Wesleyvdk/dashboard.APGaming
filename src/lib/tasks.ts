import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import type { Task } from "./types";

export async function getUserTasks(): Promise<Task[]> {
  const user = await auth();

  if (!user) {
    return [];
  }

  return prisma.task.findMany({
    where: {
      userId: user.userId,
      status: {
        not: "COMPLETED",
      },
    },
    orderBy: [
      {
        priority: "desc",
      },
      {
        dueDate: "asc",
      },
    ],
    take: 5,
  });
}
