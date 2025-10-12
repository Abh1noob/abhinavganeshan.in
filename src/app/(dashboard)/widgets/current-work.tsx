import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { dashboardConfig } from "@/config/dashboard";

import { Brain, Briefcase, Code2, Package } from "lucide-react";
import React from "react";

const iconMap = {
  briefcase: <Briefcase className="h-4 w-4 text-red-600 dark:text-red-400" />,
  code: <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
  package: <Package className="h-4 w-4 text-green-600 dark:text-green-400" />,
  brain: <Brain className="h-4 w-4 text-purple-600 dark:text-purple-400" />,
};

const CurrentWorkWidget = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
        <div className="animate-pulse">
            <Code2 className="h-4 w-4 text-green-500" />
        </div>
          <CardTitle>What I&apos;m Working On</CardTitle>
        </div>
        <CardDescription>Current projects and focus areas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dashboardConfig.currentWork.map((work, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-2 ${work.icon === 'briefcase' ? 'bg-red-100 dark:bg-red-900/20' : 'bg-blue-100 dark:bg-blue-900/20'} rounded-lg`}>
                  {iconMap[work.icon as keyof typeof iconMap]}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{work.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {work.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {work.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    <span>• {work.period}</span>
                  </div>
                </div>
              </div>
              {index < dashboardConfig.currentWork.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWorkWidget;
