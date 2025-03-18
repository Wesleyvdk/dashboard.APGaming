"use client";

import { useState } from "react";
import { MediaCard } from "./media-card";
import { MediaDetailsDialog } from "./media-details-dialog";
import { Skeleton } from "@/components/ui/skeleton";

interface MediaGridProps {
  items: any[];
  isLoading: boolean;
  onSelect?: (item: any) => void;
  selectedItems?: any[];
  selectable?: boolean;
  maxItems?: number;
}

export function MediaGrid({
  items,
  isLoading,
  onSelect,
  selectedItems = [],
  selectable = false,
  maxItems,
}: MediaGridProps) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleItemClick = (item: any) => {
    if (selectable) {
      if (onSelect) {
        const isSelected = selectedItems.some(
          (selected) => selected.id === item.id
        );

        if (isSelected) {
          // Deselect the item
          onSelect(selectedItems.filter((selected) => selected.id !== item.id));
        } else {
          // Select the item, respecting maxItems
          if (maxItems && selectedItems.length >= maxItems) {
            // If maxItems is 1, replace the selected item
            if (maxItems === 1) {
              onSelect([item]);
            }
            // Otherwise, don't add more items
            return;
          }
          onSelect([...selectedItems, item]);
        }
      }
    } else {
      setSelectedItem(item);
      setDetailsOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <div className="text-center py-8">No media items found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
            onClick={() => handleItemClick(item)}
            isSelected={selectedItems.some(
              (selected) => selected.id === item.id
            )}
            selectable={selectable}
          />
        ))}
      </div>

      <MediaDetailsDialog
        item={selectedItem}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </>
  );
}
