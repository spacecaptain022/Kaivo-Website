"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KaivoMark } from "@/components/kaivo-mark";
import { cn } from "@/lib/cn";

const links = [
  { href: "#product", label: "Product" },
  { href: "/waitlist", label: "Waitlist" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [heroInView, setHeroInView] = useState(true);
  const showCollapsed = reduceMotion ? false : collapsed;

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

  useEffect(() => {
    if (!showCollapsed) {
      return;
    }
    setMobileMenuOpen(false);
  }, [showCollapsed]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const barTone = heroInView
    ? "border-white/[0.16] bg-[rgba(10,20,26,0.82)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_40px_-14px_rgba(0,0,0,0.5)]"
    : "border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-[rgba(255,255,255,0.84)] shadow-[var(--glass-shadow)]";

  const lockupTone = heroInView ? "text-white" : "text-[var(--foreground)]";
  const lockupMuted = heroInView
    ? "text-white hover:text-white/90"
    : "text-[var(--foreground)] hover:text-[var(--foreground)]";

  const markChip = cn(
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px]",
    "bg-gradient-to-b from-[#5ef8e4] via-[var(--accent)] to-[var(--accent-mid)]",
    "shadow-[inset_0_1px_0_0_rgba(255,_255,_255,_0.32)]",
    heroInView ? "ring-1 ring-white/25" : "ring-1 ring-[var(--accent-deep)]/22",
  );

  return (
    <>
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-[max(0.65rem,_env(safe-area-inset-top,0px))] sm:px-6 lg:px-10">
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
            "pointer-events-auto relative flex origin-top items-center backdrop-blur-2xl backdrop-saturate-[1.35] transition-colors duration-[220ms]",
            barTone,
            showCollapsed
              ? "mx-auto w-fit max-w-[calc(100%-2rem)] gap-6 rounded-[1.375rem] px-3 py-2"
              : "w-full justify-between gap-3 rounded-[1.375rem] px-3 py-2.5 sm:gap-10 sm:px-4 sm:py-3",
          )}
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.94, y: -8 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{ transformOrigin: "50% 0%" }}
        >
          {showCollapsed ? (
            <div className="flex w-full items-center gap-6">
              <Link
                href="#top"
                className={cn(
                  "group flex min-w-0 shrink-0 items-center gap-2 transition-colors duration-150 sm:gap-2.5",
                  lockupMuted,
                )}
              >
                <span className={markChip}>
                  <KaivoMark className="h-5 w-5 shrink-0 text-white" />
                </span>
                <span
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.24em]",
                    lockupTone,
                  )}
                >
                  Kaivo
                </span>
              </Link>
              <Link
                href="/waitlist"
                className={cn(
                  "shrink-0 rounded-full border border-[var(--accent-deep)]/[0.22]",
                  "bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)]",
                  "px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]",
                  "text-[var(--accent-ink)]",
                  "shadow-[0_5px_20px_-6px_rgba(87,_212,_196,_0.42),inset_0_1px_0_0_rgba(255,_255,_255,_0.2)]",
                  "transition-[box-shadow,_filter,_transform,_border-color]",
                  "hover:border-[var(--accent-deep)]/[0.38] hover:shadow-[0_8px_22px_-4px_rgba(87,_212,_196,_0.46)] hover:brightness-[1.05]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  "active:scale-[0.99] active:brightness-[0.99]",
                )}
              >
                Join waitlist
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full sm:hidden text-[var(--foreground)]"
              >
                <span className="sr-only">Menu</span>
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
                  {mobileMenuOpen ? (
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M3.5 6h13M3.5 10h13M3.5 14h13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          ) : (
            <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
              <Link
                href="#top"
                className={cn(
                  "group justify-self-start transition-colors duration-150",
                  lockupMuted,
                )}
              >
                <span className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                  <span className={markChip}>
                    <KaivoMark className="h-5 w-5 shrink-0 text-white" />
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.24em]",
                      lockupTone,
                    )}
                  >
                    Kaivo
                  </span>
                </span>
              </Link>

              <AnimatePresence initial={false} mode="popLayout">
                <motion.nav
                  key="main-nav"
                  layout
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "pointer-events-none hidden justify-center gap-x-8 justify-self-center sm:flex lg:gap-x-10 xl:gap-x-12 sm:flex-row sm:items-center",
                    "[&_a]:pointer-events-auto",
                    "text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-150",
                  )}
                >
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "py-2 whitespace-nowrap transition-colors duration-150",
                        heroInView
                          ? "text-white/75 hover:text-white"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]",
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </motion.nav>
              </AnimatePresence>

              <Link
                href="/waitlist"
                className={cn(
                  "justify-self-end rounded-full border border-[var(--accent-deep)]/[0.22]",
                  "bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)]",
                  "px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]",
                  "text-[var(--accent-ink)]",
                  "shadow-[0_5px_20px_-6px_rgba(87,_212,_196,_0.42),inset_0_1px_0_0_rgba(255,_255,_255,_0.2)]",
                  "transition-[box-shadow,_filter,_transform,_border-color]",
                  "hover:border-[var(--accent-deep)]/[0.38] hover:shadow-[0_8px_22px_-4px_rgba(87,_212,_196,_0.46)] hover:brightness-[1.05]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  "active:scale-[0.99] active:brightness-[0.99]",
                )}
              >
                Join waitlist
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center justify-self-end rounded-full sm:hidden",
                  heroInView ? "text-white" : "text-[var(--foreground)]",
                )}
              >
                <span className="sr-only">Menu</span>
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
                  {mobileMenuOpen ? (
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M3.5 6h13M3.5 10h13M3.5 14h13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </header>

    {/* Full-screen mobile menu overlay */}
    <AnimatePresence>
      {mobileMenuOpen && !showCollapsed && (
        <motion.div
          key="mobile-fullscreen"
          className="fixed inset-0 z-40 flex flex-col sm:hidden pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[rgba(8,16,22,0.96)] backdrop-blur-3xl" />

          {/* Links — vertically centered */}
          <div className="relative flex flex-1 flex-col items-center justify-center gap-1 px-8">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                className="w-full"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center text-[clamp(1.125rem,4.2vw,1.375rem)] font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="relative flex justify-center pb-16 pt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.22, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "rounded-full border border-[var(--accent-deep)]/[0.22]",
                "bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)]",
                "px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
                "text-[var(--accent-ink)]",
                "shadow-[0_8px_28px_-6px_rgba(87,212,196,0.55),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
              )}
            >
              Join waitlist
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
