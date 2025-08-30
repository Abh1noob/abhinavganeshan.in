import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { dashboardConfig } from "@/config/dashboard";

const HeroSection = () => {
  const { hero } = dashboardConfig;
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
        <AvatarImage src={hero.avatar} alt="@abhinavganeshan" />
        <AvatarFallback className="text-2xl">{hero.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">
            {hero.status}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          {hero.name}
        </h1>
        <h2 className="text-xl font-medium text-primary mb-3">
          {hero.title}
        </h2>
        <p className="text-muted-foreground max-w-xl mb-4">
          {hero.bio}
        </p>
        <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mb-6">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{hero.location}</span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button asChild>
            <a href={hero.resumeUrl} className="gap-2">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${hero.contact.email}`} className="gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={hero.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={hero.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
