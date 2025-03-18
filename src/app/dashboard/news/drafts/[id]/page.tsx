import { getDraftById } from "@/lib/drafts";
import { auth, hasAnyRole, hasRole } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Edit, ArrowLeft } from "lucide-react";
import { DraftStatus } from "@/lib/types";
import { DeleteDraftButton } from "@/components/delete-draft-button";
import { PublishDraftButton } from "@/components/publish-draft-button";
import { Role } from "@/prisma/generated/client";

export default async function ViewDraftPage(props: {
  params: Promise<{ id: string }>;
}) {
  const user = await auth();
  if (!user) {
    redirect("/dashboard");
  }
  const params = await props.params;

  const draft = await getDraftById(params.id);

  if (!draft) {
    notFound();
  }

  // Check if user has permission to view this draft
  if (
    !hasAnyRole(user, [Role.ADMIN, Role.NEWS_WRITER]) &&
    draft.authorId !== user.userId
  ) {
    redirect("/dashboard/news/drafts");
  }

  const isAdmin = hasRole(user, Role.ADMIN);
  const isAuthor = draft.authorId === user.userId;
  const canEdit = isAdmin || isAuthor;
  const canPublish = isAdmin || (isAuthor && draft.status === "APPROVED");

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{draft.title}</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/news/drafts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Drafts
            </Link>
          </Button>
          {canEdit && (
            <Button asChild>
              <Link href={`/dashboard/news/drafts/${draft.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Draft Content</CardTitle>
                <Badge>{formatDraftStatus(draft.status as DraftStatus)}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {draft.featuredImage && (
                <div className="mb-6">
                  <img
                    src={draft.featuredImage.url || "/placeholder.svg"}
                    alt={draft.featuredImage.alt || draft.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: draft.content }}
              />
            </CardContent>
          </Card>

          {draft.reviewNotes && (
            <Card>
              <CardHeader>
                <CardTitle>Review Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{draft.reviewNotes}</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Draft Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Author
                </h3>
                <p>{draft.author.username}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Last Updated
                </h3>
                <p>
                  {formatDistanceToNow(new Date(draft.updatedAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {draft.tags.length > 0 ? (
                    draft.tags.map((tag: any) => (
                      <Badge key={tag.id} variant="outline">
                        {tag.name}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No tags</p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              {canPublish && <PublishDraftButton draftId={draft.id} />}
              {canEdit && <DeleteDraftButton draftId={draft.id} />}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function formatDraftStatus(status: DraftStatus): string {
  switch (status) {
    case "IN_PROGRESS":
      return "In Progress";
    case "READY_FOR_REVIEW":
      return "Ready for Review";
    case "NEEDS_REVISION":
      return "Needs Revision";
    case "APPROVED":
      return "Approved";
    default:
      return status;
  }
}
