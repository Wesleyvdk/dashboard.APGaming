import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await auth();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { role } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data: { role },
    select: {
      id: true,
      username: true,
      role: true,
    },
  });

  return NextResponse.json(updatedUser);
}
