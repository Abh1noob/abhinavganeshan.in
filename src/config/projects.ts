export interface Project {
  title: string;
  desc: string;
  github?: string;
  tech: string[];
  timeline: string;
  deployment: string;
  slug: string;
  category: string;
  type: string;
  status: 'active' | 'completed';
}

export const projectsConfig = {
  header: {
    title: "Projects Portfolio",
    description: "A comprehensive collection of my development work and contributions"
  },
  projects: [
    {
      title: "Trader.Pro",
      desc: "A comprehensive paper trading platform, built with microservices architecture for scalable performance and time travel support.",
      github: "https://github.com/Abh1noob/trader-pro",
      tech: ["Next.js", "Go", "PostgreSQL", "AWS", "FastAPI"],
      timeline: "April 2025",
      deployment: "#",
      slug: "trader-pro",
      category: "featured",
      type: "Personal Project",
      status: "completed",
    },
    {
      title: "VIT Question Paper Bank",
      desc: "Platform providing VIT students access to previous year question papers, serving nearly 40k active users during exam seasons.",
      github: "https://github.com/CodeChefVIT/papers-codechef",
      tech: ["Next.js", "MongoDB", "Cloudinary", "Gemini API"],
      timeline: "June 2024 - Present",
      deployment: "https://papers.codechefvit.com",
      slug: "vit-question-paper-bank",
      category: "featured",
      type: "Team Lead",
      status: "active",
    },
    {
      title: "Devsoc25 Portal",
      desc: "Front-end portal for Devsoc '25 event management, enabling seamless participant registration and coordination with modern UI/UX design.",
      github: "https://github.com/CodeChefVIT/devsoc-portal-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2025",
      deployment: "/",
      slug: "devsoc25-portal",
      category: "recent",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "DevSOC'25 Landing Page",
      desc: "Landing page for DevSOC'25, conveying event details and attracting participants with engaging animations and responsive design.",
      github: "https://github.com/CodeChefVIT/devsoc-landing-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2025",
      deployment: "/",
      slug: "devsoc25-landing",
      category: "recent",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "DevSOC'25 Admin Portal",
      desc: "Admin portal for managing DevSOC'25 event operations, including participant and content management with comprehensive analytics dashboard.",
      github: "https://github.com/CodeChefVIT/devsoc-admin-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2025",
      deployment: "/",
      slug: "devsoc25-admin",
      category: "recent",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "CookOff'24 Portal",
      desc: "Portal for CookOff'24, facilitating competitive coding event management and participant interaction with real-time leaderboards.",
      github: "https://github.com/CodeChefVIT/cookoff-portal-9.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "cookoff24-portal",
      category: "events",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "CookOff'24 Admin",
      desc: "Admin dashboard for managing CookOff'24 event data, including users, questions, and test cases with comprehensive management tools.",
      github: "https://github.com/CodeChefVIT/cookoff-admin-9.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "cookoff24-admin",
      category: "events",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "Clueminati Portal",
      desc: "Team-led portal for the Clueminati event, mentored juniors in development while implementing modern web development practices.",
      github: "https://github.com/CodeChefVIT/clueminati-portal-2.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "clueminati-portal",
      category: "events",
      type: "Team Lead",
      status: "completed"
    },
    {
      title: "Gravitas'24 Landing Page",
      desc: "Landing page for Gravitas'24, co-hosted with CookOff'24 and Clueminati 2.0, showcasing tech events at VIT with interactive elements.",
      github: "https://github.com/CodeChefVIT/gravitas24-landing",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "gravitas24-landing",
      category: "events",
      type: "Team Lead",
      status: "completed"
    },
    {
      title: "icETITE'24 Conference Portal",
      desc: "Portal for the icETITE'24 conference, handling registrations, schedules, and information with automated email notifications.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "icetite24-conference-portal",
      category: "conference",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "icETITE Conference Landing Page",
      desc: "Landing page for the icETITE'24 conference, providing event information and registration details with modern design principles.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "icetite-conference-landing",
      category: "conference",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "icETITE Bolt Hackathon Registration Portal",
      desc: "Registration portal for the icETITE Bolt Hackathon, streamlining participant sign-ups and team management with validation systems.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "icetite-bolt-registration-portal",
      category: "conference",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "icETITE Bolt Landing Page",
      desc: "Landing page for the icETITE Bolt Hackathon, conveying event details and attracting participants with engaging visuals.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "icetite-bolt-landing",
      category: "conference",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "VIT FFCS Helper",
      desc: "Course planner tool for VIT students, automating and simplifying timetable creation with conflict detection and optimization algorithms.",
      github: "https://github.com/CodeChefVIT/ffcs",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "2024",
      deployment: "/",
      slug: "vit-ffcs-helper",
      category: "utility",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "Papers by CodeChef-VIT",
      desc: "Admin dashboard for managing question papers on the VIT Question Paper Bank platform with bulk upload and moderation features.",
      github: "https://github.com/CodeChefVIT/papers-admin",
      tech: ["Next.js", "MongoDB", "Cloudinary"],
      timeline: "June 2024 - Present",
      deployment: "/",
      slug: "vit-question-paper-bank-admin",
      category: "utility",
      type: "Team Lead",
      status: "active"
    }
  ] as Project[]
};
