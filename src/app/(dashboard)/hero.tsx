import { Download, Github, Linkedin, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { dashboardConfig } from "@/config/dashboard";

const HeroSection = () => {
  const { hero } = dashboardConfig;
  return (
    <div className="mb-8 rounded-xl border bg-card overflow-hidden shadow-sm">
      {/* Banner */}
      <div className="hero-banner h-28 sm:h-36" />

      {/* Profile section */}
      <div className="px-4 sm:px-6 pb-6">
        {/* Avatar + action buttons row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-10 sm:-mt-14 mb-4">
          <Avatar className="h-20 w-20 sm:h-28 sm:w-28 border-4 border-card shadow-xl">
            <AvatarImage src={hero.avatar} alt="@abhinavganeshan" />
            <AvatarFallback className="text-xl">{hero.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-0 sm:pb-1">
            <Button asChild size="sm">
              <a href={hero.resumeUrl} className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${hero.contact.email}`} className="gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={hero.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={hero.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={hero.contact.x} target="_blank" rel="noopener noreferrer">
                <X className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Name, title, bio, location */}
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">{hero.status}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
          {hero.name}
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-primary mb-3">
          {hero.title}
        </h2>
        <p className="text-muted-foreground max-w-xl mb-3">{hero.bio}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1.5 h-4 w-4" />
          <span>{hero.location}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
