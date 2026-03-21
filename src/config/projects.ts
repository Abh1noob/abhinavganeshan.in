export interface Project {
  title: string;
  desc: string;
  github?: string;
  tech: string[];
  timeline: string;
  deployment: string;
  slug: string;
  type: string;
  status: 'active' | 'completed';
}

export const projectsConfig = {
  metadata: {
    title: "Projects Portfolio | Abhinav Ganeshan",
    description:
      "A comprehensive collection of development work, live projects, and engineering contributions.",
  },
  header: {
    title: "Projects Portfolio",
    description: "A comprehensive collection of my development work and contributions"
  },
  ui: {
    searchPlaceholder: "Search projects, technologies, or descriptions...",
    noResultsTitle: "No projects found",
    noResultsDescription: "Try adjusting your search terms or category filter",
    statusLabels: {
      active: "Active",
      completed: "Completed",
    },
    detailsPanel: {
      overviewLabel: "Overview",
      impactLabel: "Impact",
      techStackLabel: "Tech Stack",
      liveDemoButton: "Live Demo",
      sourceDetailsButton: "Source / Details",
    },
  },
  projects: [
    {
      title: "sprout.",
      desc: "Android app for paper trading on real NSE prices without real money — helping users test strategies, learn trading, and build confidence before entering live markets.",
      tech: ["React Native (Expo)", "SQLite", "MongoDB", "Next.js"],
      timeline: " Feb 2026 - Present",
      deployment: "https://sprout.parklanelabs.com",
      slug: "sprout",
      type: "Personal Project",
      status: "active",
    },
    {
      title: "Papers by CodeChef-VIT",
      desc: "Platform providing VIT students access to previous year question papers, serving nearly 40k active users during exam seasons.",
      github: "https://github.com/CodeChefVIT/papers-codechef",
      tech: ["Next.js", "MongoDB", "Cloudinary", "Gemini API"],
      timeline: "Jun 2024 - Present",
      deployment: "https://papers.codechefvit.com",
      slug: "vit-question-paper-bank",
      type: "Team Lead",
      status: "active",
    },
    {
      title: "VIT FFCS Helper",
      desc: "Course planner tool for VIT students, automating and simplifying timetable creation with conflict detection and optimization algorithms.",
      github: "https://github.com/CodeChefVIT/ffcs",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "May 2025 - Jun 2025",
      deployment: "https:/ffcs.codechefvit.com",
      slug: "vit-ffcs-helper",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "Trader.Pro",
      desc: "A comprehensive paper trading platform, built with microservices architecture for scalable performance and time travel support.",
      github: "https://github.com/Abh1noob/trader.pro-fe",
      tech: ["Next.js", "Go", "PostgreSQL", "AWS", "FastAPI"],
      timeline: "Apr 2025",
      deployment: "https://github.com/Abh1noob/trader.pro-fe",
      slug: "trader-pro",
      type: "Personal Project",
      status: "completed",
    },
    {
      title: "DevSOC'25 Portal",
      desc: "Front-end portal for DevSOC'25 event management, enabling seamless participant registration and coordination with modern UI/UX design.",
      github: "https://github.com/CodeChefVIT/devsoc-portal-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2025 - Feb 2025",
      deployment: "https://portal.devsoc25.codechefvit.com",
      slug: "devsoc25-portal",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "DevSOC'25 Landing Page",
      desc: "Landing page for DevSOC'25, conveying event details and attracting participants with engaging animations and responsive design.",
      github: "https://github.com/CodeChefVIT/devsoc-landing-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2025 - Feb 2025",
      deployment: "https://devsoc25.codechefvit.com",
      slug: "devsoc25-landing",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "DevSOC'25 Admin Portal",
      desc: "Admin portal for managing DevSOC'25 event operations, including participant and content management with comprehensive analytics dashboard.",
      github: "https://github.com/CodeChefVIT/devsoc-admin-25",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2025 - Feb 2025",
      deployment: "https://admin.devsoc25.codechefvit.com",
      slug: "devsoc25-admin",
      type: "Team Lead",
      status: "active"
    },
    {
      title: "CookOff'24 Portal",
      desc: "Portal for CookOff'24, facilitating competitive coding event management and participant interaction with real-time leaderboards.",
      github: "https://github.com/CodeChefVIT/cookoff-portal-9.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Aug 2024 - Sep 2024",
      deployment: "http://portal.cookoff24.codechefvit.com",
      slug: "cookoff24-portal",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "CookOff'24 Admin",
      desc: "Admin dashboard for managing CookOff'24 event data, including users, questions, and test cases with comprehensive management tools.",
      github: "https://github.com/CodeChefVIT/cookoff-admin-9.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Aug 2024 - Sep 2024",
      deployment: "https://admin.cookoff24.codechefvit.com",
      slug: "cookoff24-admin",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "Clueminati Portal",
      desc: "Team-led portal for the Clueminati event, mentored juniors in development while implementing modern web development practices.",
      github: "https://github.com/CodeChefVIT/clueminati-portal-2.0",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Aug 2024 - Sep 2024",
      deployment: "https://portal.clueminati24.codechefvit.com",
      slug: "clueminati-portal",
      type: "Team Lead",
      status: "completed"
    },
    {
      title: "Gravitas'24 Landing Page",
      desc: "Landing page for Gravitas'24, co-hosted with CookOff'24 and Clueminati 2.0, showcasing tech events at VIT with interactive elements.",
      github: "https://github.com/CodeChefVIT/gravitas24-landing",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Aug 2024 - Sep 2024",
      deployment: "http://gravitas24.codechefvit.com",
      slug: "gravitas24-landing",
      type: "Team Lead",
      status: "completed"
    },
    {
      title: "icETITE'24 Conference Portal",
      desc: "Portal for the icETITE'24 conference, handling registrations, schedules, and information with automated email notifications.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2024 - Feb 2024",
      deployment: "icetite.vit.ac.in",
      slug: "icetite24-conference-portal",
      type: "Solo Development",
      status: "completed"
    },
    {
      title: "icETITE Conference Landing Page",
      desc: "Landing page for the icETITE'24 conference, providing event information and registration details with modern design principles.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2024 - Feb 2024",
      deployment: "",
      slug: "icetite-conference-landing",
      type: "Team Development",
      status: "completed"
    },
    {
      title: "icETITE Bolt Hackathon Registration Portal",
      desc: "Registration portal for the icETITE Bolt Hackathon, streamlining participant sign-ups and team management with validation systems.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2024 - Feb 2024",
      deployment: "/",
      slug: "icetite-bolt-registration-portal",
      type: "Team Development",
      status: "completed"
    },
    {
      title: "icETITE Bolt Landing Page",
      desc: "Landing page for the icETITE Bolt Hackathon, conveying event details and attracting participants with engaging visuals.",
      github: "",
      tech: ["Next.js", "React", "Tailwind CSS"],
      timeline: "Jan 2024 - Feb 2024",
      deployment: "/",
      slug: "icetite-bolt-landing",
      type: "Team Development",
      status: "completed"
    }
  ] as Project[]
};
