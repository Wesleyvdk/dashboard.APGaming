"use client";

import type React from "react";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Cropper from "react-easy-crop";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProfilePictureUploadProps {
  currentImageUrl?: string | null;
  onSuccess: (url: string) => void;
}

export function ProfilePictureUpload({
  currentImageUrl,
  onSuccess,
}: ProfilePictureUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCropperOpen, setIsCropperOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return false;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (validateFile(file)) {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setIsCropperOpen(true);
      }
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.crossOrigin = "anonymous";
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: any
  ): Promise<Blob> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    // Set canvas size to the cropped size
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Draw the cropped image
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // As a blob
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) throw new Error("Canvas is empty");
          resolve(blob);
        },
        "image/jpeg",
        0.95
      );
    });
  };

  const uploadCroppedImage = async () => {
    if (!previewUrl || !croppedAreaPixels) return;

    try {
      setIsUploading(true);

      // Get the cropped image as a blob
      const croppedImage = await getCroppedImg(previewUrl, croppedAreaPixels);

      // Create a file from the blob
      const file = new File(
        [croppedImage],
        selectedFile?.name || "profile.jpg",
        {
          type: "image/jpeg",
        }
      );

      // Create FormData
      const formData = new FormData();
      formData.append("file", file);

      // Upload the image
      const response = await fetch("/api/users/profile/picture", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload profile picture");
      }

      const data = await response.json();

      onSuccess(data.url);

      toast({
        title: "Profile picture updated",
        description: "Your profile picture has been updated successfully.",
      });

      // Reset state
      setSelectedFile(null);
      setPreviewUrl(null);
      setIsCropperOpen(false);
    } catch (error) {
      toast({
        title: "Upload failed",
        description:
          error instanceof Error
            ? error.message
            : "Failed to upload profile picture",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setIsCropperOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <Card className="overflow-hidden">
        <CardContent className="p-4 flex flex-col items-center">
          <div className="relative mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-border">
            {currentImageUrl ? (
              <img
                src={currentImageUrl || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
          </div>

          <Button onClick={handleClick} variant="outline" size="sm">
            Change Profile Picture
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isCropperOpen} onOpenChange={setIsCropperOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Crop Profile Picture</DialogTitle>
          </DialogHeader>

          <div className="relative h-64 w-full mt-4">
            {previewUrl && (
              <Cropper
                image={previewUrl}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={cancelUpload}>
              Cancel
            </Button>
            <Button onClick={uploadCroppedImage} disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
