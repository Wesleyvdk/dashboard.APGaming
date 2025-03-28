import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken, hasAnyRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const decodedToken = await verifyToken(token);

    if (!decodedToken && !request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const requestedPath = request.nextUrl.pathname;

    // Define role-based access rules
    const roleAccess: { [key: string]: Role[] } = {
      "/dashboard/news": [Role.ADMIN, Role.NEWS_WRITER],
      "/dashboard/players": [Role.ADMIN, Role.TEAM_MANAGER],
      "/dashboard/users": [Role.ADMIN],
    };

    const requiredRoles = roleAccess[requestedPath];

    if (requiredRoles && !hasAnyRole(decodedToken, requiredRoles)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
