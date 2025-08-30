import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { dashboardConfig } from "@/config/dashboard";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectsWidget = () => {
  const projects = dashboardConfig.projects;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="text-muted-foreground">Recent work and contributions</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="/projects" className="gap-2">
            View All <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
                  >
                    {project.status}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium text-primary">
                  {project.impact}
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.caseStudyUrl}>Details</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWidget;
