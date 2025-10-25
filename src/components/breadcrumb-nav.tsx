"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadcrumbNav() {
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
      } else if (segment === "work") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>Work Timeline</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else if (segment === "technical-stack") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>Technical Stack</BreadcrumbPage>
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
    <Breadcrumb>
      <BreadcrumbList>{getBreadcrumbs()}</BreadcrumbList>
    </Breadcrumb>
  );
}