import { getPost } from "@/lib/hashnode";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { articlesConfig } from "@/config/articles";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: articlesConfig.articlePage.notFoundTitle,
        }
    }

    return {
        title: `${post.title} | ${articlesConfig.articlePage.titleSuffix}`,
        description: post.brief,
        openGraph: {
            images: post.coverImage?.url ? [post.coverImage.url] : []
        }
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    const dateLocale = siteConfig.ui.dateLocale;
    const author = articlesConfig.articlePage.author;
    const hero = dashboardConfig.hero;

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Navigation Bar removed in favor of global breadcrumbs */}

            <article className="container max-w-4xl mx-auto px-4 py-10 selection:bg-primary/20">
                {/* Header Section */}
                <div className="space-y-6 mb-10 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTimeInMinutes} {articlesConfig.page.readTimeSuffix}
                        </div>
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {post.tags?.map((tag) => (
                            <span key={tag.name} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Cover Image */}
                {post.coverImage?.url && (
                    <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-xl border shadow-sm">
                        <img
                            src={post.coverImage.url}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none mx-auto
            prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-pre:bg-muted/50 prose-pre:border
            prose-blockquote:border-l-primary prose-blockquote:bg-muted/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
        ">
                    <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
                </div>

                <Separator className="my-12" />

                {/* Footer / Author Block (Optional but good for blog style) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-muted/30 p-8 rounded-xl border">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 border-2 border-background">
                            <AvatarImage src={hero.avatar} alt={hero.avatarAlt} />
                            <AvatarFallback>{hero.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold text-lg">{author.name}</h3>
                            <p className="text-sm text-muted-foreground">{author.role}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/articles">{author.readMoreArticlesButton}</Link>
                        </Button>
                    </div>
                </div>

            </article>
        </div>
    );
}
