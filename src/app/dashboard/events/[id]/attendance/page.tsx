import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default async function EventAttendancePage({
  params,
}: {
  params: { id: string };
}) {
  const eventId = params.id;

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      attendees: {
        orderBy: { registeredAt: "desc" },
      },
      _count: {
        select: { attendees: true },
      },
    },
  });

  if (!event) {
    return notFound();
  }

  // Count attendees who want reminders
  const remindersCount = event.attendees.filter((a) => a.wantsReminder).length;

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Event Attendance</h1>
        <Button asChild>
          <Link href={`/api/events/${eventId}/export-attendance`}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Registrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{event._count.attendees}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Reminder Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{remindersCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Event Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {event.startDate.toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendee List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Registered At</TableHead>
                <TableHead>Reminder</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {event.attendees.map((attendee) => (
                <TableRow key={attendee.id}>
                  <TableCell className="font-medium">{attendee.name}</TableCell>
                  <TableCell>{attendee.email}</TableCell>
                  <TableCell>
                    {attendee.registeredAt.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {attendee.wantsReminder ? (
                      <Badge variant="default">Yes</Badge>
                    ) : (
                      <Badge variant="outline">No</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {event.attendees.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-4 text-muted-foreground"
                  >
                    No attendees registered yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
