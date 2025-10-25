"use client";

import * as React from "react";
import {
  User,
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  FileText,
  Award,
  Send,
  Github,
  FileDown,
  Trophy,
  MessageSquare,
  type LucideIcon,
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

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

interface NavSubItem {
  title: string;
  url: string;
  desc?: string;
}

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: NavSubItem[];
}

interface NavSecondaryItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const data: {
  user: UserProfile;
  navMain: NavItem[];
  navSecondary: NavSecondaryItem[];
} = {
  user: {
    name: "Abhinav Ganeshan Kalpathy",
    email: "abhinavganeshank@gmail.com",
    avatar: "/avatars/abhinav.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true, // Set Dashboard as the default active page
    },
    {
      title: "Profile",
      url: "#",
      icon: User,
      items: [
        {
          title: "Education",
          url: "/profile/education",
        },
        {
          title: "Technical Stack", // Renamed for a more modern feel
          url: "/profile/technical-stack",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderKanban,
    },
    {
      title: "Work & Leadership", // Combined section for all experience
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Complete Timeline",
          url: "/work",
          desc: "View my complete professional journey and current work.",
        },
        {
          title: "Adobe - Cybersecurity Intern",
          url: "/work/adobe",
          desc: "Developing malware detection systems using LLMs to identify vulnerable websites.",
        },
        {
          title: "Warbler.pro - SDE Intern",
          url: "/work/warbler",
          desc: "Led development of an AI-driven social media content platform using Next.js and AWS.",
        },
        {
          title: "Peritys - SDE Intern",
          url: "/work/peritys",
          desc: "Developed a Project Management Portal for the Tribal Welfare Dept., Govt. of Tamil Nadu.",
        },
        {
          title: "Stride.ai - SDE Intern",
          url: "/work/stride",
          desc: "Developed user-friendly interfaces for NLP solutions and standardized frontend projects.",
        },
        {
          title: "Projects Head, CodeChef-VIT", // Moved leadership role here
          url: "/work/codechef-vit",
          desc: "Planned projects, mentored members, and ensured high code quality through PR reviews.",
        },
      ],
    },
    {
      title: "Articles", // New section for blog posts
      url: "/articles",
      icon: FileText,
    },
    {
      title: "Certifications & Awards", // New, dedicated section for achievements
      url: "#",
      icon: Award,
      items: [
        {
          title: "AWS Certified Solutions Architect",
          url: "/certifications/aws-sa",
          desc: "Earned certification for designing scalable, secure, and cost-optimized cloud solutions.",
        },
        {
          title: "Yantra'24 Central Hack Winner",
          url: "/certifications/yantra24",
          desc: "Won 'Best Project' in track for a PWA seller app integrating ONDC with AI.",
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
  // Secondary navigation with added Resume and Source Code links
  navSecondary: [
    // {
    //   title: "Portfolio Stats",
    //   url: "/stats",
    //   icon: Trophy,
    // },
    {
      title: "Resume", // Added direct link to resume
      url: "/resume", // Link to your resume file in the /public folder
      icon: FileDown,
    },
    {
      title: "Source Code", // Added link to this portfolio's source code
      url: "https://github.com/Abh1noob/abhinavganeshan.in", // Example URL
      icon: Github,
    },
    // {
    //   title: "Feedback",
    //   url: "/feedback",
    //   icon: MessageSquare, // Using a more appropriate icon
    // },
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
                  <User className="size-4" />
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
