import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const player = await prisma.player.findUnique({
    where: { id: params.id },
    include: {
      team: true,
      stats: true,
      contracts: {
        orderBy: {
          startDate: "desc",
        },
      },
      notes: {
        include: {
          author: {
            select: {
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!player) {
    return NextResponse.json({ error: "Player not found" }, { status: 404 });
  }

  return NextResponse.json(player);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user || !["ADMIN", "TEAM_MANAGER"].includes(user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();

  const player = await prisma.player.update({
    where: { id: params.id },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      inGameName: data.inGameName,
      email: data.email,
      dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
      country: data.country,
      teamId: data.teamId,
      role: data.role,
      rank: data.rank,
      socialLinks: data.socialLinks || {},
      endDate: data.endDate ? new Date(data.endDate) : null,
    },
    include: {
      team: true,
      stats: true,
      contracts: true,
    },
  });

  return NextResponse.json(player);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user || !["ADMIN", "TEAM_MANAGER"].includes(user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.player.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
