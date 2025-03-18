import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasAnyRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function GET(request: Request) {
  const user = await auth();
  if (!user || !hasAnyRole(user, [Role.ADMIN, Role.TEAM_MANAGER])) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.length < 3) {
    return NextResponse.json([]);
  }

  const users = await prisma.user.findMany({
    where: {
      OR: [
        { email: { contains: query, mode: "insensitive" } },
        { username: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      email: true,
      username: true,
      roles: true,
      status: true,
      player: {
        select: {
          id: true,
        },
      },
    },
    take: 10,
  });

  // Filter out users that already have a player profile
  const availableUsers = users.filter((user) => !user.player);

  return NextResponse.json(availableUsers);
}
