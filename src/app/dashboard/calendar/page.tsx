import { Suspense } from "react";
import { CalendarView } from "@/components/events/calendar-view";
import { EventList } from "@/components/events/event-list";

export default function CalendarPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
      </div>

      <Suspense fallback={<div>Loading calendar...</div>}>
        <CalendarView />
      </Suspense>

      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <Suspense fallback={<div>Loading events...</div>}>
          <EventList />
        </Suspense>
      </div>
    </div>
  );
}
