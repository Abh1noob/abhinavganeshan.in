import {
  User,
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  FileText,
  Send,
  Github,
  FileDown,
  type LucideIcon,
} from "lucide-react";
import { dashboardConfig } from "@/config/dashboard";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  monogram: string;
  status: string;
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

export const sidebarData: {
  user: UserProfile;
  labels: {
    mainNavigation: string;
  };
  navMain: NavItem[];
  navSecondary: NavSecondaryItem[];
} = {
  user: {
    name: dashboardConfig.hero.name,
    email: dashboardConfig.hero.contact.email,
    avatar: dashboardConfig.hero.avatar,
    monogram: dashboardConfig.hero.avatarFallback,
    status: dashboardConfig.hero.status,
  },
  labels: {
    mainNavigation: "Navigation",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
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
          title: "Skills & Technologies",
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
      title: "Work & Leadership",
      url: "/work",
      icon: Briefcase,
    },
    {
      title: "Articles",
      url: "/articles",
      icon: FileText,
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
          title: "GitHub",
          url: "https://github.com/Abh1noob",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/abhinavganeshan/",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/Abh1noob",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Resume",
      url: "/resume",
      icon: FileDown,
    },
    {
      title: "Source Code",
      url: "https://github.com/Abh1noob/abhinavganeshan.in",
      icon: Github,
    },
  ],
};
