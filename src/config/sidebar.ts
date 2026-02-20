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

export const sidebarData: {
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
