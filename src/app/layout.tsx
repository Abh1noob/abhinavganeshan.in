import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CommandMenu } from "@/components/command-menu";
import { Toaster } from "sonner";
import { StartupToast } from "@/components/startup-toast";
import React from "react";
import Head from "next/head";
import Script from "next/script";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Ganeshan Portfolio",
  description:
    "Portfolio showcasing Abhinav Ganeshan's web development projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Head>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9007034455335797"
            crossOrigin="anonymous"></Script>
        </Head>
        <ThemeProvider>
          <CommandMenu />
          <StartupToast />
          <Toaster />
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4 flex-1">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <BreadcrumbNav />
                </div>
                <div className="px-4">
                  <ThemeToggle />
                </div>
              </header>
              <div className="px-5">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}