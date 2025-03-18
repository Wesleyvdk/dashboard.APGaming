import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function GET(request: Request) {
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "10");
  const skip = (page - 1) * pageSize;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
        username: true,
        roles: true,
        status: true,
      },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    }),
    prisma.user.count(),
  ]);

  return NextResponse.json({ users, total });
}
