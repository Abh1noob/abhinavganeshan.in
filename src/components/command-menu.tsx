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
            <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm xl:hidden">
                <span className="text-xs">⌘K</span>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/projects"))}
                        >
                            <FolderKanban className="mr-2 h-4 w-4" />
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => router.push("/articles"))}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Articles</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Social">
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    window.open(
                                        "https://github.com/Abh1noob",
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
                                    window.open("https://linkedin.com/in/abhinav-ganeshan-kalpathy-532677229/", "_blank")
                                )
                            }
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => {
                                    navigator.clipboard.writeText("abhinavganeshank@gmail.com");
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
