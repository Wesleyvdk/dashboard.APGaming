import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const decodedToken = await verifyToken(request);

  if (!decodedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get more user details from the database
  const user = await prisma.user.findUnique({
    where: { id: decodedToken.userId },
    select: {
      id: true,
      email: true,
      username: true,
      roles: true,
      status: true,
      createdAt: true,
      player: {
        select: {
          id: true,
          inGameName: true,
          firstName: true,
          lastName: true,
          role: true,
          rank: true,
          joinDate: true,
          socialLinks: true,
          trackerLinks: true,
          teams: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
