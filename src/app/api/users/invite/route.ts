import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(request: Request) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { username, role } = await request.json();

  // Generate a unique invitation token
  const invitationToken = generateInvitationToken();
  const nonpassword = crypto.randomBytes(16).toString("hex"); // Generate a random 32-character password
  const password = await bcrypt.hash(nonpassword, 10);

  // Create a new user with a pending status
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
      role,
      status: "PENDING",
      invitationToken,
    },
  });

  return NextResponse.json({ message: "User invited successfully" });
}

function generateInvitationToken() {
  // Implement a secure method to generate a unique token
  return Math.random().toString(36).substr(2, 10);
}
