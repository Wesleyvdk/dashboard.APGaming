import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { token: string } }
) {
  const user = await prisma.user.findUnique({
    where: { invitationToken: params.token },
    select: { username: true },
  });

  if (!user) {
    return NextResponse.json(
      { error: "Invalid or expired invitation link" },
      { status: 400 }
    );
  }

  return NextResponse.json({ username: user.username });
}
