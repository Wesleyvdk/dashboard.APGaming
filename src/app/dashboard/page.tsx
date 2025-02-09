import { Suspense } from "react";
import { TasksWidget } from "@/components/tasks-widget";
import { ActivityWidget } from "@/components/activity-widget";
import { RosterWidget } from "@/components/roster-widget";
import { MatchesWidget } from "@/components/matches-widget";
import { AnnouncementsWidget } from "@/components/announcements-widget";
import { NewsWidget } from "@/components/news-widget";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Tasks Widget */}
        <Suspense fallback={<WidgetSkeleton />}>
          <TasksWidget />
        </Suspense>

        {/* Activity Feed */}
        <Suspense fallback={<WidgetSkeleton />}>
          <ActivityWidget />
        </Suspense>

        {/* Roster Snapshot (for managers) */}
        <Suspense fallback={<WidgetSkeleton />}>
          <RosterWidget />
        </Suspense>

        {/* Upcoming Matches */}
        <Suspense fallback={<WidgetSkeleton />}>
          <MatchesWidget />
        </Suspense>

        {/* Announcements */}
        <Suspense fallback={<WidgetSkeleton />}>
          <AnnouncementsWidget />
        </Suspense>

        {/* Recent News */}
        <Suspense fallback={<WidgetSkeleton />}>
          <NewsWidget />
        </Suspense>
      </div>
    </div>
  );
}

function WidgetSkeleton() {
  return (
    <Card className="p-4">
      <Skeleton className="h-4 w-[150px] mb-4" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </Card>
  );
}
