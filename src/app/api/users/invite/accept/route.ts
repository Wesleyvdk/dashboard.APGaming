import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  const { token, email, password } = await request.json();
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

  const userUpdate = await prisma.user.update({
    where: { id: user.id },
    data: {
      email: email,
      password: hashedPassword,
      status: "ACTIVE",
      invitationToken: null,
    },
  });


  // Send welcome email
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const loginLink = `${baseUrl}/login`

  console.log(userUpdate)

  await sendEmail({
    to: userUpdate.email as string,
    subject: "Welcome to AP Gaming!",
    template: "WELCOME",
    data: {
      userName: user.username,
      loginLink,
    },
  })

  return NextResponse.json({ message: "Account activated successfully" });
}
