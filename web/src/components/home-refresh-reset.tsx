"use client";

import { useLayoutEffect } from "react";

/**
 * On hard refreshes, always restore the home page to hero/top.
 * This avoids browser scroll restoration dropping users mid-page.
 */
export function HomeRefreshReset() {
  useLayoutEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = nav?.type === "reload";
    if (!isReload) return;

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (window.location.hash !== "#top") {
      window.history.replaceState(null, "", "/#top");
    }
  }, []);

  return null;
}
