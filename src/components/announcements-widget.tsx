import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getActiveAnnouncements } from "@/lib/announcements";
import { type Announcement, Priority } from "@/lib/types";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

export async function AnnouncementsWidget() {
  const announcements: Announcement[] = await getActiveAnnouncements();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No active announcements
            </p>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement.id} className="flex items-start space-x-4">
                {announcement.priority === Priority.URGENT ? (
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                ) : announcement.priority === Priority.HIGH ? (
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                ) : (
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                )}
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {announcement.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {announcement.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
