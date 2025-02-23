"use client";

import * as React from "react";
import {
  User,
  Frame,
  Briefcase,
  Award,
  Send,
  Code,
  Trophy,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

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
          url: "/about/education",
        },
        {
          title: "Technical Skills",
          url: "/about/skills",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Frame,
    },
    {
      title: "Experience",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Peritys - SDE Intern",
          url: "/experience/peritys",
          desc: "Developed Project Management Portal and Landing Page for Tribal Welfare Dept., and admin dashboard for HaaNaa betting app (Jun 2024 - Present).",
        },
        {
          title: "Warbler.pro - SDE Intern",
          url: "/experience/warbler",
          desc: "Built full-stack AI-driven social media content platform with Next.js, AWS, and Blender-based Python scripts (May 2024 - Present).",
        },
        {
          title: "Stride.ai - SDE Intern",
          url: "/experience/stride",
          desc: "Developed user-friendly NLP interfaces and standardized frontend templates (Jun 2024 - Jul 2024).",
        },
      ],
    },
    {
      title: "Achievements",
      url: "#",
      icon: Award,
      items: [
        {
          title: "Yantra'24 Central Hack Winner",
          url: "/achievements/yantra24",
          desc: "Developed a PWA seller app integrating ONDC with AI-based cataloging, winning best project in Good Wealth and Economic Growth track.",
        },
        {
          title: "AWS Certified Solutions Architect - Associate",
          url: "/achievements/aws",
          desc: "Certified expertise in designing scalable, secure, and cost-optimized cloud solutions.",
        },
        {
          title: "Projects Head, CodeChef-VIT",
          url: "/achievements/codechef",
          desc: "Planned and organized projects, mentored members, and ensured high code quality through PR reviews.",
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
      icon: Trophy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Code,
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
                  <User className="size-4" />{" "}
                  {/* Using User icon for consistency */}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {data.user.name}
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
