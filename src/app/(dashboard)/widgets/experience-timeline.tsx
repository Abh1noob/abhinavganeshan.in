import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { dashboardConfig } from "@/config/dashboard";
import { TrendingUp, Briefcase } from "lucide-react";

const ExperienceTimelineWidget = () => {
  const experiences = dashboardConfig.experience;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Professional Journey
        </CardTitle>
        <CardDescription>Recent experience and growth</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="text-sm font-semibold">
                  {exp.logo}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm">{exp.role}</h4>
                  <span className="text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <Button variant="outline" className="w-full" asChild>
            <a href="/work" className="gap-2">
              <Briefcase className="h-4 w-4" />
              View Complete Timeline
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};


export default ExperienceTimelineWidget;