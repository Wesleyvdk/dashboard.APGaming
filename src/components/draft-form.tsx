"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/editor";
import { MultiSelect } from "@/components/ui/multi-select";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaPicker } from "@/components/media-picker";
import { Draft, MediaType } from "@/lib/types";
import { DraftStatus } from "@/prisma/generated/client";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const draftFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.array(z.string()).optional(),
  featuredImageId: z.string().optional(),
  mediaItemIds: z.array(z.string()).optional(),
  status: z.nativeEnum(DraftStatus),
  reviewNotes: z.string().optional(),
});

interface Tag {
  id: string;
  name: string;
}

interface DraftFormProps {
  draft?: Draft;
  isAdmin?: boolean;
}

export function DraftForm({ draft, isAdmin = false }: DraftFormProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTags, setNewTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [selectedFeaturedImage, setSelectedFeaturedImage] = useState<any>(
    draft?.featuredImage || null
  );
  const [selectedMediaItems, setSelectedMediaItems] = useState<any[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof draftFormSchema>>({
    resolver: zodResolver(draftFormSchema),
    defaultValues: {
      title: draft?.title || "",
      content: draft?.content || "",
      tags: draft?.tags.map((tag) => tag.id) || [],
      featuredImageId: draft?.featuredImage?.id,
      mediaItemIds: [],
      status: draft?.status || "IN_PROGRESS",
      reviewNotes: draft?.reviewNotes || "",
    },
  });

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    const response = await fetch("/api/tags");
    if (response.ok) {
      const fetchedTags: Tag[] = await response.json();
      setTags(fetchedTags);
    }
  };

  const handleTagChange = (selected: string[]) => {
    const existingTagIds = selected.filter((id) =>
      tags.some((tag) => tag.id === id)
    );
    const newTagNames = selected.filter(
      (id) => !tags.some((tag) => tag.id === id)
    );
    form.setValue("tags", existingTagIds);
    setNewTags(newTagNames);
  };

  const handleFeaturedImageSelect = (image: any) => {
    setSelectedFeaturedImage(image);
    form.setValue("featuredImageId", image.id);
  };

  const handleMediaItemsSelect = (items: any[]) => {
    setSelectedMediaItems(items);
    form.setValue(
      "mediaItemIds",
      items.map((item) => item.id)
    );
  };

  const onSubmit = async (values: z.infer<typeof draftFormSchema>) => {
    setIsSubmitting(true);
    try {
      // Create new tags if necessary
      const createdTags = await Promise.all(
        newTags.map(async (tagName) => {
          const response = await fetch("/api/tags", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: tagName }),
          });
          if (response.ok) {
            return await response.json();
          }
          return null;
        })
      );

      const allTagIds = [
        ...(values.tags || []),
        ...createdTags
          .filter((tag): tag is Tag => tag !== null)
          .map((tag) => tag.id),
      ];

      const url = draft ? `/api/drafts/${draft.id}` : "/api/drafts";
      const method = draft ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          tags: allTagIds,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `Draft ${draft ? "updated" : "created"} successfully.`,
        });
        router.push("/dashboard/news/drafts");
        router.refresh();
      } else {
        throw new Error("Failed to save draft");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save draft. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Draft Details</CardTitle>
                <CardDescription>
                  Enter the details of your draft article
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="media">Media</TabsTrigger>
                    {(isAdmin || draft?.status === "NEEDS_REVISION") && (
                      <TabsTrigger value="review">Review Notes</TabsTrigger>
                    )}
                  </TabsList>
                  <TabsContent value="content" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Editor
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  <TabsContent value="media">
                    <div className="space-y-4">
                      <div>
                        <FormLabel>Featured Image</FormLabel>
                        <MediaPicker
                          onSelect={handleFeaturedImageSelect}
                          selectedItems={
                            selectedFeaturedImage ? [selectedFeaturedImage] : []
                          }
                          maxItems={1}
                          filter={{ type: MediaType.IMAGE }}
                        />
                      </div>
                      <div>
                        <FormLabel>Additional Media</FormLabel>
                        <MediaPicker
                          onSelect={handleMediaItemsSelect}
                          selectedItems={selectedMediaItems}
                          maxItems={10}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  {(isAdmin || draft?.status === "NEEDS_REVISION") && (
                    <TabsContent value="review">
                      <FormField
                        control={form.control}
                        name="reviewNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Review Notes</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter review notes"
                                {...field}
                                disabled={
                                  !isAdmin && draft?.status !== "NEEDS_REVISION"
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              {isAdmin
                                ? "Provide feedback for the author"
                                : "Review notes from the editor"}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publishing Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="IN_PROGRESS">
                            In Progress
                          </SelectItem>
                          <SelectItem value="READY_FOR_REVIEW">
                            Ready for Review
                          </SelectItem>
                          {isAdmin && (
                            <>
                              <SelectItem value="NEEDS_REVISION">
                                Needs Revision
                              </SelectItem>
                              <SelectItem value="APPROVED">Approved</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {isAdmin
                          ? "Set the status of this draft"
                          : "Set to 'Ready for Review' when you're done editing"}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <MultiSelect
                        options={[
                          ...tags.map((tag) => ({
                            label: tag.name,
                            value: tag.id,
                          })),
                          ...newTags.map((tag) => ({ label: tag, value: tag })),
                        ]}
                        selected={[...(field.value || []), ...newTags]}
                        onChange={handleTagChange}
                        placeholder="Select or create tags"
                        allowCreate
                      />
                      <FormDescription>
                        Select existing tags or create new ones
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : draft ? "Update" : "Create"}{" "}
                  Draft
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
