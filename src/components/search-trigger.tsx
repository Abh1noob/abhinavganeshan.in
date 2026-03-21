"use client";

import { Search } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SearchTrigger() {
  const { searchTrigger } = siteConfig.ui;

  const openCommandMenu = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <button
      onClick={openCommandMenu}
      className="hidden xl:flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <Search className="h-3.5 w-3.5" />
      <span>{searchTrigger.label}</span>
      <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        {searchTrigger.shortcut}
      </kbd>
    </button>
  );
}
