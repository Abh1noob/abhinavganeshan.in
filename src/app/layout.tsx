"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import React from "react";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Abhinav Ganeshan Portfolio",
//   description:
//     "Portfolio showcasing Abhinav Ganeshan’s web development projects and experience.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Function to generate breadcrumb items based on the pathname
  const getBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter(Boolean); // Split and filter out empty segments
    const breadcrumbs = [];

    let path = "";
    for (const segment of pathSegments) {
      path += `/${segment}`;
      if (segment === "projects") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbLink href={path}>Projects</BreadcrumbLink>
          </BreadcrumbItem>
        );
      } else if (segment.startsWith("projects/")) {
        // Extract project slug and title (you can fetch project data or map slugs to titles)
        const projectSlug = segment.replace("projects/", "");
        const projectTitle = projectSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "); // Capitalize and join for readable title (e.g., "papers-codechef" → "Papers Codechef")
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>{projectTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        );
      }
    }

    // Add home breadcrumb if not already included
    if (breadcrumbs.length === 0) {
      breadcrumbs.push(
        <BreadcrumbItem key="/">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      );
    } else {
      breadcrumbs.unshift(
        <BreadcrumbItem key="/">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      );
    }

    return breadcrumbs.map((item, index) => (
      <React.Fragment key={index}>
        {item}
        {index < breadcrumbs.length - 1 && (
          <BreadcrumbSeparator className="hidden md:block" />
        )}
      </React.Fragment>
    ));
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>{getBreadcrumbs()}</BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="px-5">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
