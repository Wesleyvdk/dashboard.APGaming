import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { sendInvitationEmail } from "@/lib/email";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(request: Request) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, role } = await request.json();

  // Generate a unique invitation token
  const invitationToken = generateInvitationToken();
  const nonpassword = crypto.randomBytes(16).toString("hex"); // Generate a random 32-character password
  const password = await bcrypt.hash(nonpassword, 10);

  // Create a new user with a pending status
  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      role,
      status: "PENDING",
      invitationToken,
    },
  });

  // Send invitation email
  await sendInvitationEmail(email, invitationToken, password);

  return NextResponse.json({ message: "User invited successfully" });
}

function generateInvitationToken() {
  // Implement a secure method to generate a unique token
  return Math.random().toString(36).substr(2, 10);
}
