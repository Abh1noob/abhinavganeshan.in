import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Globe } from "lucide-react";

const projects = [
  // Solo Projects (Coded Yourself)
  {
    title: "Cookoff24 Admin",
    desc: "Admin dashboard for managing Cookoff ‘24 event data, including users, questions, and test cases (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/cookoff-admin-9.0",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "cookoff24-admin",
  },
  {
    title: "Devsoc24 Landing",
    desc: "Landing page for Devsoc ‘24, facilitating information dissemination and participant engagement (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/DEVSOC-23-Landing",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "devsoc24-landing",
  },
  {
    title: "Devsoc24 Portal",
    desc: "Front-end portal for Devsoc ‘24 event management, enabling seamless participant registration and coordination (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/devsoc24-portal-fe",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "devsoc24-portal",
  },
  {
    title: "Devsoc24 Admin Portal",
    desc: "Admin portal for managing Devsoc ‘24 event operations, including participant and content management (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/devsoc-23-admin-portal",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "devsoc24-admin-portal",
  },
  {
    title: "icETITE'24 Conference Portal",
    desc: "Portal for the icETITE ‘24 conference, handling registrations, schedules, and information (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "", // No GitHub link, will show "Private Repository"
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "icetite24-conference-portal",
  },
  {
    title: "icETITE Bolt Hackathon Registration Portal",
    desc: "Registration portal for the icETITE Bolt Hackathon, streamlining participant sign-ups and team management (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "", // No GitHub link, will show "Private Repository"
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "icetite-bolt-registration-portal",
  },
  {
    title: "icETITE Bolt Landing Page",
    desc: "Landing page for the icETITE Bolt Hackathon, conveying event details and attracting participants (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "", // No GitHub link, will show "Private Repository"
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "icetite-bolt-landing",
  },
  {
    title: "icETITE Conference Landing Page",
    desc: "Landing page for the icETITE ‘24 conference, providing event information and registration details (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "", // No GitHub link, will show "Private Repository"
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "icetite-conference-landing",
  },

  // Team-Led Projects (Led as Projects Head, CodeChef-VIT)
  {
    title: "Clueminati Portal",
    desc: "Team-led portal for the Clueminati event, mentored juniors in development (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/clueminati-portal-2.0",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "clueminati-portal",
  },
  {
    title: "Gravitas24 Landing",
    desc: "Landing page for Gravitas ‘24, co-hosted with Cookoff 9.0 and Clueminati 2.0, showcasing tech events at VIT (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/gravitas24-landing",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "gravitas24-landing",
  },
  {
    title: "VIT FFCS Helper",
    desc: "Course planner tool for VIT students, automating and simplifying timetable creation (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/ffcs",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "vit-ffcs-helper",
  },
  {
    title: "VIT Question Paper Bank",
    desc: "Platform providing VIT students access to previous year question papers, led team development (Next.js, MongoDB, Cloudinary, based on resume and GitHub).",
    github: "https://github.com/CodeChefVIT/papers-codechef",
    tech: "Next.js, MongoDB, Cloudinary",
    timeline: "June 2024 - Present",
    deployment: "/", // Add deployed URL if available
    slug: "vit-question-paper-bank",
  },
  {
    title: "VIT Question Paper Bank Admin",
    desc: "Admin dashboard for managing question papers on the VIT Question Paper Bank platform (Next.js, MongoDB, Cloudinary, based on resume and GitHub).",
    github: "https://github.com/CodeChefVIT/papers-admin",
    tech: "Next.js, MongoDB, Cloudinary",
    timeline: "June 2024 - Present",
    deployment: "/", // Add deployed URL if available
    slug: "vit-question-paper-bank-admin",
  },
  {
    title: "Cookoff24 Portal",
    desc: "Portal for Cookoff ‘24, facilitating competitive coding event management and participant interaction (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/cookoff-portal-9.0",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "cookoff24-portal",
  },
  {
    title: "Cookoff24 Admin",
    desc: "Admin portal for managing Cookoff ‘24 event data, including users, questions, and test cases (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/cookoff-admin-9.0",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2024",
    deployment: "/", // Add deployed URL if available
    slug: "cookoff24-admin",
  },
  {
    title: "Devsoc25 Admin",
    desc: "Admin portal for managing Devsoc ‘25 event operations, including participant and content management (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/devsoc-admin-25",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2025",
    deployment: "/", // Add deployed URL if available
    slug: "devsoc25-admin",
  },
  {
    title: "Devsoc25 Portal",
    desc: "Front-end portal for Devsoc ‘25 event management, enabling seamless participant registration and coordination (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/devsoc-portal-25",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2025",
    deployment: "/", // Add deployed URL if available
    slug: "devsoc25-portal",
  },
  {
    title: "Devsoc25 Landing",
    desc: "Landing page for Devsoc ‘25, conveying event details and attracting participants (Next.js, assumed React/Tailwind based on CodeChef-VIT projects).",
    github: "https://github.com/CodeChefVIT/devsoc-landing-25",
    tech: "Next.js, React, Tailwind (assumed)",
    timeline: "2025",
    deployment: "/",
    slug: "devsoc25-landing",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="space-y-4">
                <p>{project.desc}</p>
                <p className="text-sm text-gray-500">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Timeline:</strong> {project.timeline}
                </p>
              </div>
              <div className="flex flex-row gap-4">
                {project.github && (
                  <Button asChild variant="outline">
                    <Link href={project.github} target="_blank">
                      <Github className="" />
                    </Link>
                  </Button>
                )}
                {project.deployment && (
                  <Button asChild variant="outline">
                    <Link href={project.deployment} target="_blank">
                      <Globe className="" />
                    </Link>
                  </Button>
                )}
                <Button asChild>
                  <Link href={`/projects/${project.slug}`}>
                    <ExternalLink className="" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
