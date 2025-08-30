import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { dashboardConfig } from "@/config/dashboard";

import { Zap, GraduationCap } from "lucide-react";

const SkillsProgressWidget = () => {
  const skills = dashboardConfig.skills;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Core Strengths
        </CardTitle>
        <CardDescription>Technical focus areas and proficiency</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {skill.category}
                </Badge>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>{dashboardConfig.certification}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsProgressWidget;