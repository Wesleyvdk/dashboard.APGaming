"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Upload,
  X,
  FileText,
  Image,
  Film,
  FileAudio,
  File,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { MediaItem } from "@/prisma/generated/client";

interface MediaUploaderProps {
  onSuccess: (mediaItem: MediaItem) => void;
  allowedTypes?: string[];
  maxSizeMB?: number;
  folder?: string;
  showMetadataFields?: boolean;
}

export function MediaUploader({
  onSuccess,
  allowedTypes = ["image/*", "video/*", "audio/*", "application/pdf"],
  maxSizeMB = 50,
  folder = "media",
  showMetadataFields = true,
}: MediaUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    // Check file type
    const fileType = file.type;
    const isValidType = allowedTypes.some((type) => {
      if (type.endsWith("/*")) {
        const mainType = type.split("/")[0];
        return fileType.startsWith(`${mainType}/`);
      }
      return type === fileType;
    });

    if (!isValidType) {
      toast({
        title: "Invalid file type",
        description: `Please upload one of the following types: ${allowedTypes.join(", ")}`,
        variant: "destructive",
      });
      return false;
    }

    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${maxSizeMB}MB.`,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Create FormData
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("folder", folder);

      if (showMetadataFields) {
        formData.append("alt", alt);
        formData.append("caption", caption);
        formData.append("tags", tags);
      }

      // Create custom XMLHttpRequest to track progress
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round(
            (event.loaded / event.total) * 100
          );
          setUploadProgress(percentComplete);
        }
      });

      // Create a promise to handle the XHR
      const uploadPromise = new Promise<MediaItem>((resolve, reject) => {
        xhr.open("POST", "/api/media");

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            resolve(response.mediaItem);
          } else {
            reject(new Error(`Upload failed with status ${xhr.status}`));
          }
        };

        xhr.onerror = () => {
          reject(new Error("Network error occurred during upload"));
        };

        xhr.send(formData);
      });

      const mediaItem = await uploadPromise;

      onSuccess(mediaItem);

      toast({
        title: "Upload successful",
        description: "Your file has been uploaded successfully.",
      });

      // Reset state
      setSelectedFile(null);
      setAlt("");
      setCaption("");
      setTags("");
    } catch (error) {
      toast({
        title: "Upload failed",
        description:
          error instanceof Error ? error.message : "Failed to upload file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <Image className="h-6 w-6" />;
    } else if (file.type.startsWith("video/")) {
      return <Film className="h-6 w-6" />;
    } else if (file.type.startsWith("audio/")) {
      return <FileAudio className="h-6 w-6" />;
    } else if (
      file.type === "application/pdf" ||
      file.type.includes("document")
    ) {
      return <FileText className="h-6 w-6" />;
    } else {
      return <File className="h-6 w-6" />;
    }
  };

  const getFilePreview = () => {
    if (!selectedFile) return null;

    if (selectedFile.type.startsWith("image/")) {
      return (
        <div className="mt-4 flex justify-center">
          <img
            src={URL.createObjectURL(selectedFile) || "/placeholder.svg"}
            alt="Preview"
            className="max-h-48 max-w-full rounded-md object-contain"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={allowedTypes.join(",")}
        className="hidden"
      />

      <Card
        className={`border-2 border-dashed p-4 ${
          dragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25"
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-6 text-center">
          {!selectedFile ? (
            <>
              <Upload className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">
                Drag & drop or click to upload
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Supports {allowedTypes.join(", ")} up to {maxSizeMB}MB
              </p>
              <Button onClick={handleClick} variant="outline">
                Select File
              </Button>
            </>
          ) : (
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {getFileIcon(selectedFile)}
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-medium truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                {!isUploading && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={cancelUpload}
                    className="text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {getFilePreview()}

              {showMetadataFields && (
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="alt">Alt Text</Label>
                    <Input
                      id="alt"
                      value={alt}
                      onChange={(e) => setAlt(e.target.value)}
                      placeholder="Describe the file for accessibility"
                    />
                  </div>

                  <div>
                    <Label htmlFor="caption">Caption</Label>
                    <Textarea
                      id="caption"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Add a caption"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="Separate tags with commas"
                    />
                  </div>
                </div>
              )}

              {isUploading ? (
                <div className="space-y-2 mt-4">
                  <Progress value={uploadProgress} className="h-2" />
                  <p className="text-xs text-center text-muted-foreground">
                    Uploading... {uploadProgress}%
                  </p>
                </div>
              ) : (
                <Button onClick={uploadFile} className="w-full mt-4">
                  Upload File
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
