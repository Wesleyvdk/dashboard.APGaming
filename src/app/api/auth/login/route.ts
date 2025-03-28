import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { createSession } from "@/lib/auth"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  try {
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        notificationPrefs: true,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 })
    }

    if (user.status !== "ACTIVE") {
      return NextResponse.json({ message: "Account is not active" }, { status: 400 })
    }

    if (!user.password) {
      return NextResponse.json({ message: "Password not set" }, { status: 400 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 })
    }

    // Create a new session
    const { token, expiresAt } = await createSession(user.id, user.roles, request)

    // Create a response object
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        roles: user.roles,
        darkMode: user.darkMode,
      },
    })

    // Set the token as an HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: expiresAt,
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

