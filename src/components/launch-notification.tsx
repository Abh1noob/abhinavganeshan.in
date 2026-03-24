"use client";

import { Bell, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function LaunchNotification() {
  const { launchBanner } = siteConfig.ui;

  if (!launchBanner.enabled) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative h-9 w-9 rounded-full"
          aria-label="Open notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white ring-2 ring-background">
            1
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="w-80 p-0">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-semibold">Notifications</p>
          <p className="text-xs text-muted-foreground">1 unread update</p>
        </div>

        <div className="space-y-3 px-4 py-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] text-red-600"
            >
              New
            </Badge>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Product update
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-tight">
              {launchBanner.title}
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              {launchBanner.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" className="h-8 rounded-full px-3">
              <a
                href={launchBanner.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {launchBanner.playStoreLabel}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 rounded-full px-3"
            >
              <a
                href={launchBanner.landingPageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {launchBanner.landingPageLabel}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
