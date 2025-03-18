import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, hasRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";
import crypto from "crypto";

export async function POST(request: Request) {
  const user = await auth();
  if (!user || !hasRole(user, Role.ADMIN)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { username, roles } = await request.json();

  // Generate a unique invitation token
  const invitationToken = crypto.randomBytes(32).toString("hex");

  // Create a new user with a pending status
  const newUser = await prisma.user.create({
    data: {
      username,
      roles,
      status: "PENDING",
      invitationToken,
    },
  });

  const invitationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/invite/accept/${invitationToken}`;

  return NextResponse.json({ invitationLink });
}
