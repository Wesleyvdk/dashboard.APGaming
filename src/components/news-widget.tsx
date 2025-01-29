import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentNews } from "@/lib/news";
import type { News } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

export async function NewsWidget() {
  const newsItems: News[] = await getRecentNews();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No recent news</p>
          ) : (
            newsItems.map((news) => (
              <div key={news.id} className="space-y-2">
                <h3 className="text-sm font-medium leading-none">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {news.content}
                </p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>By {news.author.email}</span>
                  <span>
                    {formatDistanceToNow(
                      new Date(news.publishedAt || news.createdAt),
                      { addSuffix: true }
                    )}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
