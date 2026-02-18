import { getPosts } from "@/lib/hashnode";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Articles | Abhinav Ganeshan",
    description: "Technical articles and tutorials on Web Development, Cloud Computing, and more.",
};

export default async function ArticlesPage() {
    const { edges: posts } = await getPosts(20);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto p-4 sm:p-6 md:p-8">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Articles</h1>
                            <p className="text-muted-foreground">
                                Thoughts on software engineering, cloud architecture, and building products.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(({ node: post }) => (
                        <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                            {post.coverImage && (
                                <div className="relative w-full aspect-video overflow-hidden rounded-t-lg border-b">
                                    <img
                                        src={post.coverImage.url}
                                        alt={post.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <CardHeader className="pb-4">
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {post.tags?.slice(0, 3).map((tag) => (
                                            <Badge key={tag.name} variant="secondary" className="text-xs">
                                                {tag.name}
                                            </Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                        <Link href={`/articles/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col">
                                <CardDescription className="line-clamp-3 mb-4 flex-1">
                                    {post.brief}
                                </CardDescription>

                                <div className="space-y-4 mt-auto">
                                    <div className="flex items-center justify-between pt-4 border-t text-sm text-muted-foreground">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {post.readTimeInMinutes} min read
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button variant="ghost" className="w-full justify-between group/btn px-0 hover:bg-transparent hover:text-primary" asChild>
                                    <Link href={`/articles/${post.slug}`}>
                                        Read Article
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
