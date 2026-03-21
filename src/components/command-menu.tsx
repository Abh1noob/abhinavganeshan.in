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
import { siteConfig } from "@/config/site";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const { setTheme } = useTheme();
    const router = useRouter();
    const commandConfig = siteConfig.ui.commandMenu;
    const themeLabels = siteConfig.ui.themeToggle;

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
                <span className="text-xs">{commandConfig.mobileShortcutLabel}</span>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder={commandConfig.inputPlaceholder} />
                <CommandList>
                    <CommandEmpty>{commandConfig.emptyText}</CommandEmpty>
                    <CommandGroup heading={commandConfig.headings.pages}>
                        <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.overview}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/projects"))}
                        >
                            <FolderKanban className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.projects}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/work"))}
                        >
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.work}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/articles"))}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.articles}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/profile/education"))}
                        >
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.education}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/profile/technical-stack"))}
                        >
                            <Code className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.technicalStack}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/resume"))}
                        >
                            <FileDown className="mr-2 h-4 w-4" />
                            <span>{commandConfig.pages.resume}</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={commandConfig.headings.social}>
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
                            <span>{commandConfig.social.github}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    window.open(dashboardConfig.hero.contact.linkedin, "_blank")
                                )
                            }
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>{commandConfig.social.linkedin}</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => {
                                    navigator.clipboard.writeText(dashboardConfig.hero.contact.email);
                                    toast(commandConfig.social.copyEmailToast);
                                })
                            }}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            <span>{commandConfig.social.copyEmail}</span>
                            <CommandShortcut>{commandConfig.shortcuts.copyEmail}</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={commandConfig.headings.theme}>
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>{themeLabels.lightLabel}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>{themeLabels.darkLabel}</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>{themeLabels.systemLabel}</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
