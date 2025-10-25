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
          title: "Technical Stack",
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
          title: "Projects Head, CodeChef-VIT",
          url: "/work/codechef-vit",
          desc: "Planned projects, mentored members, and ensured high code quality through PR reviews.",
        },
      ],
    },
    {
      title: "Articles",
      url: "/articles",
      icon: FileText,
    },
    {
      title: "Certifications & Awards",
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
          title: "GitHub",
          url: "https://github.com/Abh1noob",
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
