import type { NextRequest } from "next/server";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import type { Role } from "@prisma/client";

export interface DecodedToken {
  userId: string;
  roles: Role[];
}

// Create a Uint8Array of the JWT secret for use with jose
const getJWTSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT Secret key is not set");
  }
  return new TextEncoder().encode(secret);
};

export async function signToken(payload: any) {
  const secret = getJWTSecretKey();

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);

  return token;
}

export async function verifyToken(
  request: NextRequest
): Promise<DecodedToken | null> {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(token, getJWTSecretKey());
    const decodedToken = {
      userId: verified.payload.userId as string,
      roles: verified.payload.roles as Role[],
    };
    return decodedToken;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

export async function auth(): Promise<DecodedToken | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(token, getJWTSecretKey());
    const decodedToken = {
      userId: verified.payload.userId as string,
      roles: verified.payload.roles as Role[],
    };
    return decodedToken;
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}

export function hasRole(user: DecodedToken | null, role: Role): boolean {
  if (!user) return false;
  return user.roles.includes(role);
}

export function hasAnyRole(user: DecodedToken | null, roles: Role[]): boolean {
  if (!user) return false;
  return user.roles.some((role) => roles.includes(role));
}
