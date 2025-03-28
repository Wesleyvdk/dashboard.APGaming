import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const upcoming = searchParams.get("upcoming") === "true";

  const where = upcoming
    ? {
      startDate: {
        gte: new Date(),
      },
    }
    : {};

  const events = await prisma.event.findMany({
    where,
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
    orderBy: {
      startDate: "asc",
    },
    ...(upcoming && { take: 10 }),
  });

  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();

  const event = await prisma.event.create({
    data: {
      title: data.title,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      allDay: data.allDay,
      type: data.type,
      location: data.location,
      isPublic: data.isPublic || false,
      ...(data.teamId && { team: { connect: { id: data.teamId } } }),
      createdBy: { connect: { id: user.userId } },
    },
  });

  return NextResponse.json(event);
}
