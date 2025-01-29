import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Timer } from "lucide-react";
import { getUserTasks } from "@/lib/tasks";
import type { Task } from "@/lib/types";

export async function TasksWidget() {
  const tasks: Task[] = await getUserTasks();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>My Tasks</span>
          <Badge variant="secondary">{tasks.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">No tasks assigned</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="flex items-start gap-2">
                {task.status === "COMPLETED" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                ) : task.status === "IN_PROGRESS" ? (
                  <Timer className="h-5 w-5 text-blue-500 mt-0.5" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400 mt-0.5" />
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{task.title}</p>
                    <Badge variant={getPriorityVariant(task.priority)}>
                      {task.priority.toLowerCase()}
                    </Badge>
                  </div>
                  {task.description && (
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                  )}
                  {task.dueDate && (
                    <p className="text-xs text-muted-foreground">
                      Due {formatDate(task.dueDate)}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getPriorityVariant(priority: string) {
  switch (priority) {
    case "URGENT":
      return "destructive";
    case "HIGH":
      return "default";
    case "MEDIUM":
      return "secondary";
    default:
      return "outline";
  }
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}
