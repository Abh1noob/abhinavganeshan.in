import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dashboardConfig } from "@/config/dashboard";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Timeline - Abhinav Ganeshan",
  description:
    "Complete professional timeline showcasing my experience, internships, and current work projects.",
};

export default function WorkPage() {
  const experiences = dashboardConfig.experience;
  const currentWork = dashboardConfig.currentWork;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        {/* Current Work Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Current Work
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {currentWork.map((work, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {work.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 overflow-hidden ">
                      <AvatarImage src={exp.logo} alt={exp.company} className="p-1 bg-white scale-110" />
                      <AvatarFallback className="text-sm font-semibold">
                        {exp.company.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>

                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-10 bottom-0 w-0.5 h-6 bg-border translate-y-full" />
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 pt-8 border-t">
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s Connect</CardTitle>
              <CardDescription>
                Interested in working together or learning more about my
                experience?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href={`mailto:${dashboardConfig.hero.contact.email}`}>
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={dashboardConfig.hero.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={dashboardConfig.hero.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
