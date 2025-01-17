"use client";
import * as React from "react";
import {
  Command,
  Frame,
  LifeBuoy,
  PieChart,
  Send,
  User,
  Award,
  Briefcase,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Abhinav Ganeshan Kalpathy",
    email: "abhinavganeshank@gmail.com",
    avatar: "/avatars/abhinav.jpg",
  },
  navMain: [
    {
      title: "About Me",
      url: "#",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Education",
          url: "#",
        },
        {
          title: "Technical Skills",
          url: "#",
        },
        {
          title: "Achievements",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: Frame,
      items: [
        {
          title: "Tribal Welfare Portal",
          url: "#",
        },
        {
          title: "3D Model Editor",
          url: "#",
        },
        {
          title: "Fincheck Accounting",
          url: "#",
        },
        {
          title: "DEVSOC'24",
          url: "#",
        },
        {
          title: "Yantra'24 Hackathon Project",
          url: "#",
        },
      ],
    },
    {
      title: "Experience",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Peritys",
          url: "#",
        },
        {
          title: "Pinkhippo",
          url: "#",
        },
        {
          title: "Stride.ai",
          url: "#",
        },
      ],
    },
    {
      title: "Achievements",
      url: "#",
      icon: Award,
      items: [
        {
          title: "Yantra'24 Hackathon Winner",
          url: "#",
        },
        {
          title: "CodeChef-VIT Board Member",
          url: "#",
        },
      ],
    },
    {
      title: "Contact",
      url: "#",
      icon: Send,
      items: [
        {
          title: "Email",
          url: "mailto:abhinavganeshank@gmail.com",
        },
        {
          title: "Phone",
          url: "tel:+919567683259",
        },
        {
          title: "GitHub",
          url: "https://github.com/Abh1noob",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Portfolio Stats",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Feedback",
      url: "#",
      icon: LifeBuoy,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Abhinav Ganeshan
                  </span>
                  <span className="truncate text-xs">Portfolio</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
