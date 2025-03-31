import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import { jwtVerify, SignJWT } from "jose"
import { v4 as uuidv4 } from "uuid"
import { prisma } from "./prisma"
import type { Role } from "@prisma/client"
import { UAParser } from "ua-parser-js"

export interface DecodedToken {
  id: string
  sessionId: string
  roles: Role[]
}

// Create a Uint8Array of the JWT secret for use with jose
const getJWTSecretKey = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error("JWT Secret key is not set")
  }
  return new TextEncoder().encode(secret)
}

export async function signToken(payload: { id: string; roles: Role[]; sessionId: string }) {
  const secret = getJWTSecretKey()
  const token = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime("24h").sign(secret)

  return token
}

export async function verifyToken(token: string): Promise<DecodedToken | null> {
  try {
    const secret = getJWTSecretKey()
    const verified = await jwtVerify(token, secret)
    return verified.payload as unknown as DecodedToken
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}

export async function verifyRequestToken(request: NextRequest): Promise<DecodedToken | null> {
  const token = request.cookies.get("token")?.value

  if (!token) {
    return null
  }

  return verifyToken(token)
}

export async function auth(): Promise<DecodedToken | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    return null
  }

  return verifyToken(token)
}

export async function createSession(id: string, roles: Role[], request: Request) {
  const sessionId = uuidv4()
  const userAgent = request.headers.get("user-agent") || ""
  const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

  const parser = new UAParser(userAgent)
  const browser = parser.getBrowser()
  const os = parser.getOS()
  const device = parser.getDevice()

  const deviceInfo = {
    browser: `${browser.name || "Unknown"} ${browser.version || ""}`,
    os: `${os.name || "Unknown"} ${os.version || ""}`,
    device: device.type ? `${device.vendor || ""} ${device.model || ""} (${device.type})` : "Desktop",
  }

  // Create session in database
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 days from now
  const userId = id // Assuming id is the user ID
  await prisma.session.create({
    data: {
      id: sessionId,
      userId,
      token: sessionId, // We store the sessionId as the token in the database
      userAgent,
      ipAddress: Array.isArray(ipAddress) ? ipAddress[0] : ipAddress,
      expiresAt,
    },
  })

  // Create JWT token with session ID
  const token = await signToken({ id, roles, sessionId })

  return { token, sessionId, expiresAt }
}

export async function validateSession(token: string): Promise<boolean> {
  try {
    const decoded = await verifyToken(token)
    if (!decoded) return false

    // Check if session exists and is not expired
    const session = await prisma.session.findFirst({
      where: {
        id: decoded.sessionId,
        userId: decoded.id,
        expiresAt: {
          gt: new Date(),
        },
      },
    })

    if (!session) return false

    // Update last active timestamp
    await prisma.session.update({
      where: { id: decoded.sessionId },
      data: { lastActive: new Date() },
    })

    return true
  } catch (error) {
    console.error("Session validation error:", error)
    return false
  }
}

export async function invalidateSession(sessionId: string): Promise<boolean> {
  try {
    await prisma.session.delete({
      where: { id: sessionId },
    })
    return true
  } catch (error) {
    console.error("Session invalidation error:", error)
    return false
  }
}

export async function invalidateAllUserSessions(userId: string): Promise<boolean> {
  try {
    await prisma.session.deleteMany({
      where: { userId },
    })
    return true
  } catch (error) {
    console.error("All sessions invalidation error:", error)
    return false
  }
}

// Helper function to check if a user has a specific role
export function hasRole(user: DecodedToken | null, role: Role): boolean {
  if (!user) return false
  return user.roles.includes(role)
}

// Helper function to check if a user has any of the specified roles
export function hasAnyRole(user: DecodedToken | null, roles: Role[]): boolean {
  if (!user) return false
  return user.roles.some((role) => roles.includes(role))
}

