import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { dashboardConfig } from "@/config/dashboard";
import { Code2, Briefcase, Users, Zap } from "lucide-react";
import React from "react";

const iconMap = {
  code: <Code2 className="h-5 w-5" />,
  briefcase: <Briefcase className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
};

const QuickStartWidget = () => {
  const stats = dashboardConfig.quickStats;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </CardTitle>
            <div className="text-muted-foreground">{iconMap[stat.icon as keyof typeof iconMap]}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <p className="text-xs text-muted-foreground mb-1">
              {stat.description}
            </p>
            <p className="text-xs text-green-600 font-medium">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStartWidget;
