"use client";

import { useState, useEffect } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import type { Tag } from "@/lib/types";

export function TagFilter() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    setSelectedTags(selected);
    // TODO: Implement filtering logic
  };

  return (
    <div className="mb-4">
      <MultiSelect
        options={tags.map((tag) => ({ label: tag.name, value: tag.id }))}
        selected={selectedTags}
        onChange={handleTagChange}
        placeholder="Filter by tags"
      />
    </div>
  );
}
