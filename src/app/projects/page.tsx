"use client";

import { useState } from "react";
import {
  Calendar,
  Code2,
  ExternalLink,
  Github,
  Lock,
  Search,
  Users, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Project, projectsConfig } from "@/config/projects";

const ProjectsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = projectsConfig.projects;

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Personal Project":
        return <Code2 className="h-4 w-4" />;
      case "Team Lead":
        return <Users className="h-4 w-4" />;
      case "Solo Development":
        return <Briefcase className="h-4 w-4" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="group-hover:text-primary transition-colors text-lg">
                {project.title}
              </CardTitle>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {getTypeIcon(project.type)}
                <span>{project.type}</span>
              </div>
              {project.status && (
                <div
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status === "active" ? "Active" : "Completed"}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {project.github ? (
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            ) : (
              <div className="h-8 w-8 flex items-center justify-center">
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            {project.deployment !== "/" && (
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a
                  href={project.deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="leading-relaxed mb-4 flex-1">
          {project.desc}
        </CardDescription>

        <div className="space-y-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.timeline}</span>
            </div>

            {/* <Button variant="outline" size="sm" asChild>
              <a href={`/projects/${project.slug}`} className="gap-2">
                View Details
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 ">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {projectsConfig.header.title}
              </h1>
              <p className="text-muted-foreground">
                {projectsConfig.header.description}
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <TabsContent value={selectedCategory} className="mt-6">
            {filteredProjects.length === 0 ? (
              <Card>
                <CardContent className="text-center py-16">
                  <Code2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or category filter
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
