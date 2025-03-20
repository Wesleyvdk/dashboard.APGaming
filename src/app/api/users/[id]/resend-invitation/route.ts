import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import crypto from "crypto";

export async function POST(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const targetUser = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!targetUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (targetUser.status !== "PENDING") {
    return NextResponse.json(
      { error: "Can only resend invitations for pending users" },
      { status: 400 }
    );
  }

  // Generate a new invitation token
  const invitationToken = crypto.randomBytes(32).toString("hex");

  // Update the user with the new token
  await prisma.user.update({
    where: { id: params.id },
    data: { invitationToken },
  });

  const invitationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/invite/accept/${invitationToken}`;

  return NextResponse.json({ invitationLink });
}
