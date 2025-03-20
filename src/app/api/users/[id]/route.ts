import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";
import {
  auth, hasRole
} from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;
  const targetUser = await prisma.user.findUnique({
    where: { id: params.id },
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
  });

  if (!targetUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(targetUser);
}

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await props.params;

  const { roles, status } = await request.json();
  const updateData: any = {};

  if (roles) updateData.roles = roles;
  if (status) updateData.status = status;

  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data: updateData,
    select: {
      id: true,
      username: true,
      roles: true,
      status: true,
    },
  });

  return NextResponse.json(updatedUser);
}
