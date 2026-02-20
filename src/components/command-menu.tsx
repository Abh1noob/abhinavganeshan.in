"use client";

import * as React from "react";
import {
    Laptop,
    Moon,
    Sun,
    FolderKanban,
    FileText,
    Home,
    Github,
    Linkedin,
    Copy,
    X,
    Briefcase,
    GraduationCap,
    Code,
    FileDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { dashboardConfig } from "@/config/dashboard";
import { toast } from "sonner";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const { setTheme } = useTheme();
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm xl:hidden cursor-pointer hover:bg-accent transition-colors"
            >
                <span className="text-xs">⌘K</span>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Pages">
                        <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>Overview</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/projects"))}
                        >
                            <FolderKanban className="mr-2 h-4 w-4" />
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/work"))}
                        >
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>Work & Experience</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/articles"))}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Articles</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/profile/education"))}
                        >
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Education</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/profile/technical-stack"))}
                        >
                            <Code className="mr-2 h-4 w-4" />
                            <span>Skills & Technologies</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/resume"))}
                        >
                            <FileDown className="mr-2 h-4 w-4" />
                            <span>Resume</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Social">
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    window.open(
                                        dashboardConfig.hero.contact.github,
                                        "_blank"
                                    )
                                )
                            }
                        >
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    window.open(dashboardConfig.hero.contact.linkedin, "_blank")
                                )
                            }
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => {
                                    navigator.clipboard.writeText(dashboardConfig.hero.contact.email);
                                    toast("Email copied to clipboard");
                                })
                            }}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            <span>Copy Email</span>
                            <CommandShortcut>⌘C</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>System</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
