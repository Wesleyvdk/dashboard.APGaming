import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const params = await props.params;

  const event = await prisma.event.findUnique({
    where: { id: params.id },
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

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;

  const data = await request.json();

  const event = await prisma.event.update({
    where: { id: params.id },
    data: {
      title: data.title,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      allDay: data.allDay,
      type: data.type,
      ...(data.teamId
        ? { team: { connect: { id: data.teamId } } }
        : { team: { disconnect: true } }),
    },
  });

  return NextResponse.json(event);
}

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const params = await props.params;

  await prisma.event.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Event deleted successfully" });
}
