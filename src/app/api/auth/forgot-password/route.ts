import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { signToken } from "@/lib/auth";

// Validation schema for forgot password request
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = forgotPasswordSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid request", details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Don't reveal if user exists or not for security
    if (!user || !user.email || user.status === "DISABLED") {
      // We still return success to prevent email enumeration attacks
      return NextResponse.json({ success: true });
    }

    // Generate reset token (valid for 1 hour)
    const resetToken = await signToken({
      id: user.id,
      purpose: "password-reset",
    });

    // Create reset URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

    // Send password reset email
    const emailSent = await sendEmail({
      to: user.email as string,
      subject: "Reset Your AP Gaming Password",
      template: "RESET_PASSWORD",
      data: {
        resetLink,
        userName: user.username || "there",
      },
    });

    if (!emailSent) {
      return NextResponse.json(
        { error: "Failed to send reset email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
