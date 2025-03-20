import type { Role } from "@prisma/client";

// Client-side version of hasRole that doesn't rely on auth()
export function hasRole(userRoles: Role[] | undefined, role: Role): boolean {
  if (!userRoles) return false;
  return userRoles.includes(role);
}

// Client-side version of hasAnyRole that doesn't rely on auth()
export function hasAnyRole(
  userRoles: Role[] | undefined,
  roles: Role[]
): boolean {
  if (!userRoles) return false;
  return userRoles.some((role) => roles.includes(role));
}
