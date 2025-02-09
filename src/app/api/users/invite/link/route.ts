import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import crypto from "crypto";

export async function POST(request: Request) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { username, role } = await request.json();

  // Generate a unique invitation token
  const invitationToken = crypto.randomBytes(32).toString("hex");

  // Create a new user with a pending status
  const newUser = await prisma.user.create({
    data: {
      username,
      role,
      status: "PENDING",
      invitationToken,
    },
  });

  const invitationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/invite/accept/${invitationToken}`;

  return NextResponse.json({ invitationLink });
}
