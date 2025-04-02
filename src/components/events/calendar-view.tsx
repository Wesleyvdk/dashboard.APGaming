"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  Views,
  type SlotInfo,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { EventType } from "@/lib/types";
import { CreateEventModal } from "./create-event-modal";
import { ViewEventModal } from "./view-event-modal";
import { EditEventModal } from "./edit-event-modal";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  type: EventType;
  teamId?: string | null;
  resource?: any;
}

export function CalendarView() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      if (response.ok) {
        const data = await response.json();
        const formattedEvents = data.map((event: any) => ({
          id: event.id,
          title: event.title,
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          allDay: event.allDay,
          type: event.type,
          teamId: event.teamId,
          resource: event,
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEventId(event.id);
    setViewModalOpen(true);
  };

  const handleEditClick = (event: any) => {
    setSelectedEvent(event);
    setViewModalOpen(false);
    setEditModalOpen(true);
  };

  const handleSlotSelect = (slotInfo: SlotInfo) => {
    setSelectedDate(slotInfo.start);
    setCreateModalOpen(true);
  };

  const eventStyleGetter = (event: CalendarEvent) => {
    let backgroundColor = "#3182ce"; // default blue

    switch (event.type) {
      case EventType.MATCH:
        backgroundColor = "#e53e3e"; // red
        break;
      case EventType.PRACTICE:
        backgroundColor = "#38a169"; // green
        break;
      case EventType.TOURNAMENT:
        backgroundColor = "#805ad5"; // purple
        break;
      case EventType.MEETING:
        backgroundColor = "#dd6b20"; // orange
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0",
        display: "block",
      },
    };
  };

  const CalendarToolbar = (toolbar: any) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };
    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };
    const goToCurrent = () => {
      toolbar.onNavigate("TODAY");
    };

    return (
      <div className="flex justify-between items-center mb-4">
        <div>
          <Button variant="outline" onClick={goToCurrent}>
            Today
          </Button>
          <Button variant="ghost" onClick={goToBack} className="ml-2">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" onClick={goToNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <span className="ml-2 text-lg font-semibold">{toolbar.label}</span>
        </div>
        <div>
          <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <div>Loading calendar...</div>;
  }

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div style={{ height: 600 }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%" }}
              onSelectEvent={handleEventClick}
              onSelectSlot={handleSlotSelect}
              selectable={true}
              eventPropGetter={eventStyleGetter}
              views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
              popup
              components={{
                toolbar: CalendarToolbar,
              }}
            />
          </div>
        </CardContent>
      </Card>

      <CreateEventModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onEventCreated={fetchEvents}
        selectedDate={selectedDate}
      />

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
