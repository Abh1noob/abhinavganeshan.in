import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code, Wrench, Database, Terminal, Shield, Globe } from "lucide-react";
import { Metadata } from "next";
import { techStackConfig } from "@/config/technical-stack";
import React from "react";

export const metadata: Metadata = {
  title: "Technical Stack - Abhinav Ganeshan",
  description:
    "Complete overview of programming languages, frameworks, tools, and technologies I work with.",
};

const iconMap = {
  Terminal,
  Wrench,
  Database,
  Shield,
  Code,
  Globe,
};

export default function TechStackPage() {
  const HeaderIcon =
    iconMap[techStackConfig.header.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
            {HeaderIcon && <HeaderIcon className="h-8 w-8" />}
            {techStackConfig.header.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {techStackConfig.header.description}
          </p>
        </section>

        {/* Dynamic Sections */}
        {techStackConfig.sections.map((section) => {
          const IconComponent = iconMap[section.icon as keyof typeof iconMap];

          return (
            <section key={section.id} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                {IconComponent && <IconComponent className="h-6 w-6" />}
                {section.title}
              </h2>

              {section.layout === "single" ? (
                <Card>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {section.items?.map((item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {section.sections?.map((subsection, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{subsection.title}</CardTitle>
                        <CardDescription>
                          {subsection.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {subsection.items.map((item, itemIndex) => (
                            <Badge key={itemIndex} variant="outline">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}
