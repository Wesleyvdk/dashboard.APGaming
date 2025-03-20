"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DraftStatus } from "@/lib/types";
export function DraftStatusFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeStatus, setActiveStatus] = useState<DraftStatus | "ALL">(
    (searchParams.get("status") as DraftStatus) || "ALL"
  );

  useEffect(() => {
    const status = searchParams.get("status") as DraftStatus | null;
    setActiveStatus(status || "ALL");
  }, [searchParams]);

  const handleStatusChange = (status: DraftStatus | "ALL") => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "ALL") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    router.push(`/dashboard/news/drafts?${params.toString()}`);
    setActiveStatus(status);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button
        variant={activeStatus === "ALL" ? "default" : "outline"}
        onClick={() => handleStatusChange("ALL")}
      >
        All
      </Button>
      <Button
        variant={activeStatus === "IN_PROGRESS" ? "default" : "outline"}
        onClick={() => handleStatusChange(DraftStatus.IN_PROGRESS)}
      >
        In Progress
      </Button>
      <Button
        variant={activeStatus === "READY_FOR_REVIEW" ? "default" : "outline"}
        onClick={() => handleStatusChange(DraftStatus.READY_FOR_REVIEW)}
      >
        Ready for Review
      </Button>
      <Button
        variant={activeStatus === "NEEDS_REVISION" ? "default" : "outline"}
        onClick={() => handleStatusChange(DraftStatus.NEEDS_REVISION)}
      >
        Needs Revision
      </Button>
      <Button
        variant={activeStatus === "APPROVED" ? "default" : "outline"}
        onClick={() => handleStatusChange(DraftStatus.APPROVED)}
      >
        Approved
      </Button>
    </div>
  );
}
