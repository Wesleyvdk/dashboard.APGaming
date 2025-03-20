import { Suspense } from "react";
import { MediaLibrary } from "@/components/media-library";
import { MediaUploadButton } from "@/components/media-upload-button";

export default function MediaPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
        <MediaUploadButton />
      </div>

      <Suspense fallback={<div>Loading media...</div>}>
        <MediaLibrary />
      </Suspense>
    </div>
  );
}
