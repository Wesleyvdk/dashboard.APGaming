import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const tags = await prisma.tag.findMany();
  return NextResponse.json(tags);
}

export async function POST(request: Request) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name } = await request.json();

  const existingTag = await prisma.tag.findUnique({
    where: { name },
  });

  if (existingTag) {
    return NextResponse.json(existingTag);
  }

  const newTag = await prisma.tag.create({
    data: { name },
  });

  return NextResponse.json(newTag);
}
