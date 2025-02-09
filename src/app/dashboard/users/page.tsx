import { Suspense } from "react";
import { UserList } from "@/components/user-list";
import { InviteUserForm } from "@/components/invite-user-form";
import { RolePermissions } from "@/components/role-permissions";
import { useRouter } from "next/router";

export default function UsersManagement() {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Staff Members</h2>
          <Suspense fallback={<div>Loading users...</div>}>
            <UserList />
          </Suspense>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Invite New User</h2>
          <InviteUserForm />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Role Descriptions</h2>
        <RolePermissions />
      </div>
    </div>
  );
}
