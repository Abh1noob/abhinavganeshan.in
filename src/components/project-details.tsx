import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    title: string;
    status: string;
    statusColor: string;
    description: string;
    tech: string[];
    impact: string;
    liveUrl: string;
    caseStudyUrl: string;
}

interface ProjectDetailsProps {
    project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <SheetContent className="overflow-y-auto sm:max-w-xl">
            <SheetHeader>
                <SheetTitle className="text-2xl font-bold">{project.title}</SheetTitle>
                <SheetDescription>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                        <Badge
                            variant="outline"
                            className={`${project.statusColor} border-0 bg-opacity-10`}
                        >
                            {project.status}
                        </Badge>
                    </div>
                </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-6">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        Overview
                    </h3>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        Impact
                    </h3>
                    <p className="text-sm font-medium">{project.impact}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Badge key={t} variant="secondary">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                        <Button className="flex-1" asChild>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        </Button>
                    )}
                    {/* Assuming caseStudyUrl might be a github link or similar if not a page */}
                    <Button variant="outline" className="flex-1" asChild>
                        <a
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Source / Details
                        </a>
                    </Button>
                </div>
            </div>
        </SheetContent>
    );
}
