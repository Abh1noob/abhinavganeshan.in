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

      const isLast = path === pathname;

      if (segment === "projects") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            {isLast ? (
              <BreadcrumbPage>Projects</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={path}>Projects</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      } else if (segment === "work") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            {isLast ? (
              <BreadcrumbPage>Work Timeline</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/work">Work Timeline</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      } else if (segment === "profile") {
        // "profile" is never a final destination — skip rendering it as a standalone crumb
      } else if (segment === "education") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>Education</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else if (segment === "technical-stack") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>Skills & Technologies</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else if (path.startsWith("/work/") && segment !== "work") {
        const companyName = segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>{companyName} — Certificate</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else if (path.startsWith("/projects/") && segment !== "projects") {
        const projectSlug = segment;
        const projectTitle = projectSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage>{projectTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else if (segment === "articles") {
        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            {isLast ? (
              <BreadcrumbPage>Articles</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      } else if (path.startsWith("/articles/") && segment !== "articles") {
        const articleSlug = segment;
        const formattedTitle = articleSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        breadcrumbs.push(
          <BreadcrumbItem key={path}>
            <BreadcrumbPage className="line-clamp-1 max-w-[200px]">
              {formattedTitle}
            </BreadcrumbPage>
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