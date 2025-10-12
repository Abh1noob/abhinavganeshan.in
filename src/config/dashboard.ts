export const dashboardConfig = {
    hero: {
        avatar: "/avatars/Abh1noob.jpg",
        avatarFallback: "AG",
        status: "Open to new opportunities",
        name: "Abhinav Ganeshan",
        title: "Full-Stack Developer",
        bio: "Creating scalable web applications and cloud-based solutions. Currently diving into Cybersecurity technologies.",
        location: "Vellore, Tamil Nadu, India",
        resumeUrl: "/resume",
        contact: {
            email: "abhinavganeshank@gmail.com",
            github: "https://github.com/Abh1noob",
            linkedin: "https://www.linkedin.com/in/abhinav-gk/",
        },
    },
    currentWork: [
        {
            title: "Software Engineer | Warbler.Pro",
            description: "Developing AI-powered social media content management and Ad targeting platform",
            tags: ["Next.js", "AWS"],
            period: "Ongoing",
            icon: "brain",
        },
        {
            title: "Opensource Developer | TableMint",
            description: "Building NPM package that helps developers to transform their API responses into production ready tables in no time",
            tags: ["JavaScript", "NPM"],
            period: "Ongoing",
            icon: "package",
        },
        {
            title: "Freelance Developer | Knoos Alankaran",
            description: "Building backend infrastructure for Knoos Alankaran - an online marketplace for traditional Indian clothing",
            tags: ["GoFiber", "AWS"],
            period: "Ongoing",
            icon: "briefcase",
        },
        {
            title: "Papers by CodeChef-VIT",
            description: "Managing question paper repository platform that supports VIT students throughout examination periods",
            tags: ["Next.js", "MongoDB", "GCP"],
            period: "Ongoing",
            icon: "code",
        },
    ],
    experience: [
        {
            company: "Adobe",
            role: "Cybersecurity Intern",
            period: "May - July 2025",
            description: "Created LLM-based JavaScript malware detection solutions to strengthen web application security",
            logo: "A",
        },
        {
            company: "Warbler.Pro",
            role: "SDE Intern",
            period: "May 2024 - Apr 2025",
            description: "Led the development of AI-powered social media content management and Ad targeting platform",
            logo: "W",
        },
        {
            company: "Peritys",
            role: "SDE Intern",
            period: "Jun 2024 - Mar 2025",
            description: "Developed project management portal for Tribal Welfare Departmen, govt of Tamil Nadu featuring multi-language capabilities",
            logo: "P",
        },
    ],
    quickStats: [
        {
            icon: "code",
            label: "Active Projects",
            value: "2",
            description: "In development",
        },
        {
            icon: "briefcase",
            label: "Experience",
            value: "2+ years",
            description: "Professional development",
        },
        {
            icon: "users",
            label: "User Reach",
            value: "40K+",
            description: "Across platforms",
        },
        {
            icon: "zap",
            label: "Technologies",
            value: "10+",
            description: "Proficient in",
        },
    ],
    projects: [
        {
            title: "Trader.pro",
            description:
                "A virtual trading platform featuring live market data simulation, developed using microservices design for enhanced scalability.",
            tech: ["Next.js", "Go", "PostgreSQL", "AWS"],
            status: "Recently Completed",
            statusColor:
                "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
            liveUrl: "#",
            caseStudyUrl: "/projects/trader-pro",
            impact: "Live market simulation",
        },
        {
            title: "Papers by CodeChef-VIT",
            description:
                "Academic resource platform providing historical exam papers, supporting thousands of students in their exam preparation journey.",
            tech: ["Next.js", "MongoDB", "Cloudinary"],
            status: "Live & Active",
            statusColor:
                "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
            liveUrl: "https://papers.codechefvit.com",
            caseStudyUrl: "/projects/papers-codechef-vit",
            impact: "40K+ engaged users",
        },
    ],
    skills: [
        { name: "Web Development", level: 95, category: "Primary" },
        { name: "AWS Cloud Solutions", level: 75, category: "Primary" },
        { name: "Cybersecurity", level: 40, category: "Backend" },
    ],
    certification: "AWS Certified Solutions Architect",
    blog: {
        title: "Recent Insights",
        description: "Sharing thoughts on technology, programming, and discoveries",
        comingSoonTitle: "Blog Posts In Progress",
        comingSoonDescription: "Preparing a technical blog to document project learnings and development experiences",
        buttonText: "Coming Soon",
    }
};
