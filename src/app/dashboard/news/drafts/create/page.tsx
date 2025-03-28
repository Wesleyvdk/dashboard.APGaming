import { DraftForm } from "@/components/drafts/draft-form";
import { auth, hasAnyRole, hasRole } from "@/lib/auth";
import { Role } from "@/prisma/generated/client";
import { redirect } from "next/navigation";

export default async function CreateDraftPage() {
  const user = await auth();

  if (!user || !hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER])) {
    redirect("/dashboard");
  }

  const isAdmin = hasRole(user, Role.ADMIN);

  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl font-bold">Create New Draft</h1>
      <DraftForm isAdmin={isAdmin} />
    </div>
  );
}
