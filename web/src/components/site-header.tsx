"use client";

import { KaivoMark } from "@/components/kaivo-mark";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const links = [
  { href: "#product", label: "Product" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const barTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

const layoutSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 34,
};

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  /** When reduced motion is on, the bar stays expanded (ignore scroll-collapsed state). */
  const showCollapsed = reduceMotion ? false : collapsed;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const thresholdTop = 56;
    const minDelta = 8;

    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastScrollY.current;
      const delta = y - prev;
      lastScrollY.current = y;

      if (y < thresholdTop) {
        setCollapsed(false);
        return;
      }

      if (delta > minDelta) {
        setCollapsed(true);
      } else if (delta < -minDelta) {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl justify-center px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10">
        <motion.div
          layout
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  layout: layoutSpring,
                  duration: barTransition.duration,
                  ease: barTransition.ease,
                }
          }
          className={cn(
            "surface-glass pointer-events-auto flex origin-top items-center rounded-2xl",
            "ring-1 ring-[var(--foreground)]/[0.04]",
            showCollapsed
              ? "w-fit max-w-[calc(100%-2rem)] gap-8 px-5 py-3"
              : "w-full justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 sm:py-3.5",
          )}
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.88, y: -6 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{ transformOrigin: "50% 0%" }}
        >
          <Link
            href="#top"
            className="flex min-w-0 shrink-0 items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-opacity hover:opacity-80"
          >
            <KaivoMark className="h-8 w-8 shrink-0" />
            <span className="truncate">Kaivo</span>
          </Link>

          <AnimatePresence initial={false} mode="popLayout">
            {!showCollapsed && (
              <motion.nav
                key="main-nav"
                layout
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="hidden min-w-0 flex-1 items-center justify-center gap-8 px-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]/95 sm:flex"
              >
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="py-1.5 transition-colors hover:text-[var(--foreground)]"
                  >
                    {l.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <Link
            href="#waitlist"
            className="shrink-0 rounded-full border border-[var(--accent-deep)]/25 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)] shadow-[0_8px_26px_-10px_rgba(38,229,201,0.55),0_2px_8px_-4px_rgba(6,51,46,0.2),inset_0_1px_0_0_rgba(255,255,255,0.42)] transition-[box-shadow,filter] hover:border-[var(--accent-deep)]/40 hover:shadow-[0_12px_34px_-10px_rgba(38,229,201,0.62),0_4px_12px_-4px_rgba(6,51,46,0.22),inset_0_1px_0_0_rgba(255,255,255,0.55)] hover:brightness-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:brightness-[0.98]"
          >
            Early access
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
