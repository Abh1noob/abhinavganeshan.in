import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getPosts } from "@/lib/hashnode";

const BlogPreviewWidget = async () => {
  const { edges } = await getPosts(1);
  const latestPost = edges[0]?.node;

  if (!latestPost) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Articles Found</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Latest Article
        </CardTitle>
        <CardDescription>
          Sharing insights from development experiences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                {new Date(latestPost.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
              <span>•</span>
              <span>{latestPost.readTimeInMinutes} min read</span>
            </div>

            <Link href={`/articles/${latestPost.slug}`} className="block">
              <h4 className="font-semibold leading-tight hover:text-primary transition-colors cursor-pointer">
                {latestPost.title}
              </h4>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {latestPost.brief}
            </p>

            <div className="flex flex-wrap gap-2">
              {latestPost.tags?.map((tag) => (
                <Badge key={tag.name} variant="secondary" className="text-xs">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button size="sm" asChild>
              <Link
                href={`/articles/${latestPost.slug}`}
                className="gap-2"
              >
                Read Article <ArrowUpRight className="h-3 w-3" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/articles">
                View Blog
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPreviewWidget;