import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { token, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: { invitationToken: token },
  });

  if (!user) {
    return NextResponse.json(
      { error: "Invalid or expired invitation link" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      status: "ACTIVE",
      invitationToken: undefined,
    },
  });

  return NextResponse.json({ message: "Account created successfully" });
}
