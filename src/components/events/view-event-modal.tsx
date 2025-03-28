"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, User, Edit, Trash } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { EventType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Event {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  allDay: boolean;
  type: EventType;
  team?: { id: string; name: string } | null;
  createdBy: { id: string; username: string; email: string };
}

interface ViewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string | null;
  onEventUpdated: () => void;
  onEditClick: (event: Event) => void;
}

export function ViewEventModal({
  isOpen,
  onClose,
  eventId,
  onEventUpdated,
  onEditClick,
}: ViewEventModalProps) {
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && eventId) {
      fetchEvent(eventId);
    }
  }, [isOpen, eventId]);

  const fetchEvent = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/events/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      } else {
        throw new Error("Failed to fetch event");
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      toast({
        title: "Error",
        description: "Failed to load event details. Please try again.",
        variant: "destructive",
      });
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!event) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/events/${event.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Event deleted successfully.",
        });
        onEventUpdated();
        onClose();
      } else {
        throw new Error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast({
        title: "Error",
        description: "Failed to delete event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  const getEventTypeBadge = (type: EventType) => {
    switch (type) {
      case EventType.MATCH:
        return <Badge variant="destructive">Match</Badge>;
      case EventType.PRACTICE:
        return <Badge variant="success">Practice</Badge>;
      case EventType.TOURNAMENT:
        return <Badge variant="purple">Tournament</Badge>;
      case EventType.MEETING:
        return <Badge variant="warning">Meeting</Badge>;
      default:
        return <Badge variant="secondary">Other</Badge>;
    }
  };

  if (!event && isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogTitle>Loading...</DialogTitle>
        <DialogContent>
          <div className="flex justify-center items-center h-40">
            <p>Loading event details...</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{event.title}</DialogTitle>
              {getEventTypeBadge(event.type)}
            </div>
            <DialogDescription>Event details and information</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {event.description && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Description
                </h3>
                <p>{event.description}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Date & Time
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {format(new Date(event.startDate), "MMMM d, yyyy")}
                    {new Date(event.startDate).toDateString() !==
                      new Date(event.endDate).toDateString() &&
                      ` - ${format(new Date(event.endDate), "MMMM d, yyyy")}`}
                  </span>
                </div>
                {!event.allDay && (
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {format(new Date(event.startDate), "h:mm a")} -{" "}
                      {format(new Date(event.endDate), "h:mm a")}
                    </span>
                  </div>
                )}
                {event.allDay && (
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>All day</span>
                  </div>
                )}
              </div>

              {event.team && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Team
                  </h3>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.team.name}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Created By
              </h3>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>
                  {event.createdBy.username} ({event.createdBy.email})
                </span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => onEditClick(event)}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => setDeleteDialogOpen(true)}
            >
              <Trash className="mr-2 h-4 w-4" /> Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              event.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
