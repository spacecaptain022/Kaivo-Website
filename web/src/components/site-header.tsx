"use client";

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
  { href: "#final-cta", label: "Waitlist" },
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
  const [heroInView, setHeroInView] = useState(true);
  /** When reduced motion is on, the bar stays expanded (ignore scroll-collapsed state). */
  const showCollapsed = reduceMotion ? false : collapsed;

  /** Hero (#top): Kaivo + mid-nav links white while hero intersects; dark/muted palette after scrolling past. */
  useEffect(() => {
    const el = document.getElementById("top");
    if (!el || typeof IntersectionObserver === "undefined") {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.intersectionRatio > 0);
      },
      { root: null, threshold: [0, 0.01, 0.08, 1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      <div className="mx-auto flex max-w-6xl justify-center px-4 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))] lg:px-10">
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
            /* Bright frosted pill; typography switches by hero intersect (see heroInView).
             Nav is absolutely centered in the bar — not “between logo and CTA” — so links align to page center. */
            "pointer-events-auto flex origin-top items-center rounded-full border border-white/[0.14]",
            "bg-white/[0.38] backdrop-blur-xl backdrop-saturate-[1.35] shadow-[inset_0_1px_0_0_rgba(255,_255,_255,_0.38),0_8px_32px_-10px_rgba(0,_0,_0,_0.18)]",
            showCollapsed
              ? "w-fit max-w-[calc(100%-2rem)] gap-6 px-4 py-2"
              : "relative w-full justify-between gap-3 px-3 py-2 sm:gap-8 sm:px-5 sm:py-2.5",
          )}
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.88, y: -6 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{ transformOrigin: "50% 0%" }}
        >
          <Link
            href="#top"
            className={cn(
              "z-10 flex min-w-0 shrink-0 items-center text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-150 sm:text-[12px]",
              heroInView
                ? "text-white hover:text-white/92"
                : "text-[var(--foreground)] hover:text-[var(--foreground)]",
            )}
          >
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
                className={cn(
                  "pointer-events-none absolute inset-y-0 left-0 right-0 hidden flex-row items-center justify-center gap-[1.375rem] px-2 text-[10px] font-normal uppercase leading-none tracking-[0.26em] transition-colors duration-150 sm:flex",
                  "[&_a]:pointer-events-auto",
                )}
              >
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "py-2 transition-colors duration-150",
                      heroInView
                        ? "text-white hover:text-white/92"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <Link
            href="#final-cta"
            className={cn(
              "z-10 shrink-0 rounded-full border border-[var(--accent-deep)]/[0.26]",
              "bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)]",
              "px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.22em]",
              "text-[var(--accent-ink)]",
              "shadow-[0_4px_16px_-4px_rgba(38,_229,_201,_0.42),inset_0_1px_0_0_rgba(255,_255,_255,_0.22)]",
              "transition-[box-shadow,_filter,_transform,_border-color]",
              "hover:border-[var(--accent-deep)]/[0.4] hover:shadow-[0_6px_18px_-3px_rgba(38,_229,_201,_0.46)] hover:brightness-[1.06]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              "active:scale-[0.99] active:brightness-[0.99]",
            )}
          >
            Join waitlist
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
