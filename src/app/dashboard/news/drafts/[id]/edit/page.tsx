import { DraftForm } from "@/components/draft-form";
import { getDraftById } from "@/lib/drafts";
import { auth, hasRole } from "@/lib/auth";
import { DraftStatus } from "@/lib/types";
import { redirect, notFound } from "next/navigation";
import { Role } from "@/prisma/generated/client";

export default async function EditDraftPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await auth();

  if (!user) {
    redirect("/dashboard");
  }
  let draft = await getDraftById(params.id);

  // Ensure the draft status matches the DraftStatus type
  if (draft) {
    draft = {
      ...draft,
      status: draft.status,
    };
  }
  if (!draft) {
    notFound();
  }

  // Check if user has permission to edit this draft
  if (!hasRole(user, Role.ADMIN) && draft.authorId !== user.userId) {
    redirect("/dashboard/news/drafts");
  }

  const isAdmin = hasRole(user, Role.ADMIN);

  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl font-bold">Edit Draft</h1>
      <DraftForm draft={draft} isAdmin={isAdmin} />
    </div>
  );
}
