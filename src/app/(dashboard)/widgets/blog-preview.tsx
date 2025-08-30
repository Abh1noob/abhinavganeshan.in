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

const BlogPreviewWidget = () => {
  const latestPost = {
    title: "Using S3 as Extended Storage for Next.js with Clean URLs",
    excerpt:
      "Learn how to leverage Amazon S3 for scalable file storage in Next.js applications while maintaining clean, SEO-friendly URLs.",
    publishedAt: "Apr 20, 2025",
    readTime: "2 min read",
    url: "https://abh1noob.hashnode.dev/using-s3-as-extended-storage-for-nextjs-with-clean-urls",
    tags: ["Next.js", "AWS S3", "Web Development"],
  };

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
                {latestPost.publishedAt}
              </span>
              <span>•</span>
              <span>{latestPost.readTime}</span>
            </div>

            <h4 className="font-semibold leading-tight hover:text-primary transition-colors cursor-pointer">
              {latestPost.title}
            </h4>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {latestPost.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {latestPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button size="sm" asChild>
              <a
                href={latestPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Read Article <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://abh1noob.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Blog
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPreviewWidget;