"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

export function StartupToast() {
    const hasShownToast = useRef(false);
    const { startupToast } = siteConfig.ui;

    useEffect(() => {
        if (hasShownToast.current) return;

        // Skip on mobile devices
        // Checking max-width 768px (typical tablet/mobile breakpoint)
        // and user agent for good measure
        const isMobile =
            window.innerWidth < startupToast.mobileMaxWidth ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            hasShownToast.current = true;
            return;
        }

        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        const shortcut = isMac ? startupToast.macShortcut : startupToast.defaultShortcut;

        // Small delay to ensure UI is ready and it doesn't feel too abrupt
        setTimeout(() => {
            toast.info(startupToast.messageTemplate.replace("{shortcut}", shortcut));
            hasShownToast.current = true;
        }, startupToast.delayMs);

    }, [startupToast]);

    return null;
}
