"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function StartupToast() {
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (hasShownToast.current) return;

        // Skip on mobile devices
        // Checking max-width 768px (typical tablet/mobile breakpoint)
        // and user agent for good measure
        const isMobile =
            window.innerWidth < 768 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            hasShownToast.current = true;
            return;
        }

        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        const shortcut = isMac ? "⌘K" : "Ctrl+K";

        // Small delay to ensure UI is ready and it doesn't feel too abrupt
        setTimeout(() => {
            toast.info(`Press ${shortcut} to open command palette`);
            hasShownToast.current = true;
        }, 1000);

    }, []);

    return null;
}
