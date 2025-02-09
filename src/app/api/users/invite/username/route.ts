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

  const email = `${username}@apgaming.org`;
  const password = generateRandomPassword();

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: password,
        role,
        status: "ACTIVE",
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      credentials: { username, password },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

function generateRandomPassword() {
  return crypto.randomBytes(16).toString("hex"); // Generate a random 32-character password
}
