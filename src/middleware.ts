import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken, hasAnyRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";

export async function middleware(request: NextRequest) {
  console.log("Middleware called for path:", request.nextUrl.pathname);

  const token = request.cookies.get("token")?.value;
  console.log("Token from cookie:", token ? "exists" : "not found");

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    console.log("No token, redirecting to login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const decodedToken = await verifyToken(request);

    if (!decodedToken && !request.nextUrl.pathname.startsWith("/login")) {
      console.log("Invalid token, redirecting to login");
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
      console.log("Unauthorized access, redirecting to dashboard");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  console.log("Middleware allowing request");
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
