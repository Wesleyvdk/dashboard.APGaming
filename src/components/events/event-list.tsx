"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import { format } from "date-fns";
import { EventType } from "@/lib/types";
import { ViewEventModal } from "./view-event-modal";
import { EditEventModal } from "./edit-event-modal";

interface Event {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  allDay: boolean;
  type: EventType;
  team?: { name: string } | null;
}

export function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events?upcoming=true");
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setViewModalOpen(true);
  };

  const handleEditClick = (event: any) => {
    setSelectedEvent(event);
    setViewModalOpen(false);
    setEditModalOpen(true);
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

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (events.length === 0) {
    return <div>No upcoming events</div>;
  }

  return (
    <>
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    {getEventTypeBadge(event.type)}
                  </div>
                  {event.description && (
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {format(new Date(event.startDate), "MMMM d, yyyy")}
                        {!event.allDay && (
                          <>
                            {" "}
                            {format(new Date(event.startDate), "h:mm a")} -{" "}
                            {format(new Date(event.endDate), "h:mm a")}
                          </>
                        )}
                        {event.allDay && " (All day)"}
                      </span>
                    </div>
                    {event.team && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.team.name}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewEvent(event.id)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ViewEventModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        eventId={selectedEventId}
        onEventUpdated={fetchEvents}
        onEditClick={handleEditClick}
      />

      <EditEventModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        event={selectedEvent}
        onEventUpdated={fetchEvents}
      />
    </>
  );
}
