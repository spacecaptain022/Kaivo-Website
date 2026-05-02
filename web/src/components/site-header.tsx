"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { KaivoMark } from "@/components/kaivo-mark";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/tokenomics", label: "Tokenomics" },
  /** Slash + hash so inner routes (e.g. /tokenomics) still open marketing sections on `/`. */
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

function linkIsActive(href: string, pathname: string | null, rawHash: string) {
  const hash = (rawHash || "").toLowerCase();
  const path = pathname ?? "";
  const onHome = path === "/" || path === "";

  const homeSection = /^\/#([\w-]+)$/i.exec(href);
  if (homeSection) {
    return onHome && hash === `#${homeSection[1].toLowerCase()}`;
  }

  if (href.startsWith("/")) {
    const base = href.replace(/\/$/, "") || "/";
    if (base === "/") {
      return onHome && (!hash || hash === "#" || hash === "#top" || hash === "#");
    }
    return path === base || path.startsWith(`${base}/`);
  }

  return false;
}

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
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const lastScrollY = useRef(0);
  const [heroInView, setHeroInView] = useState(true);
  const showCollapsed = reduceMotion ? false : collapsed;

  useEffect(() => {
    const syncHash = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    const onMarketingHome = pathname === "/" || pathname === "";
    if (!onMarketingHome) {
      setHeroInView(false);
      return;
    }

    const el = document.getElementById("top");
    if (!el || typeof IntersectionObserver === "undefined") {
      setHeroInView(false);
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
  }, [pathname]);

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
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  /** Hero chrome (white nav, dark chip) only on `/` while `#top` is in view — inner pages always use light chrome. */
  const onMarketingHome = pathname === "/" || pathname === "";
  const useHeroChrome = onMarketingHome && heroInView;

  const barTone = useHeroChrome
    ? "border-white/[0.16] bg-[rgba(10,20,26,0.82)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_40px_-14px_rgba(0,0,0,0.5)]"
    : "border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-[rgba(255,255,255,0.84)] shadow-[var(--glass-shadow)]";

  const lockupTone = useHeroChrome ? "text-white" : "text-[var(--foreground)]";
  const lockupMuted = useHeroChrome
    ? "text-white hover:text-white/90"
    : "text-[var(--foreground)] hover:text-[var(--foreground)]";

  const markChip = cn(
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px]",
    "bg-gradient-to-b from-[#5ef8e4] via-[var(--accent)] to-[var(--accent-mid)]",
    "shadow-[inset_0_1px_0_0_rgba(255,_255,_255,_0.32)]",
    useHeroChrome ? "ring-1 ring-white/25" : "ring-1 ring-[var(--accent-deep)]/22",
  );

  /** Center pill nav — reference layout; tones swap on hero vs page */
  const navPill = useHeroChrome
    ? "border border-white/18 bg-white/[0.09] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
    : "border border-[color-mix(in_srgb,var(--foreground)_7%,transparent)] bg-[color-mix(in_srgb,var(--panel)_92%,var(--background)_8%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92)]";

  const navIdle = useHeroChrome
    ? "text-white/65 hover:bg-white/10 hover:text-white"
    : "text-[var(--muted)] hover:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] hover:text-[var(--foreground)]";

  const navActive = useHeroChrome
    ? "bg-white/17 text-[var(--accent)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)]"
    : "bg-[color-mix(in_srgb,var(--accent)_24%,var(--surface))] text-[var(--accent-deep)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)]";

  const waitlistCta = cn(
    "shrink-0 rounded-full border border-[var(--accent-deep)]/[0.22]",
    "bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)]",
    "px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)]",
    "shadow-[0_5px_20px_-6px_rgba(87,_212,_196,_0.42),inset_0_1px_0_0_rgba(255,_255,_255,_0.2)]",
    "transition-[box-shadow,filter,transform,border-color]",
    "hover:border-[var(--accent-deep)]/[0.38] hover:shadow-[0_8px_22px_-4px_rgba(87,_212,_196,_0.46)] hover:brightness-[1.05]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    "active:scale-[0.99] active:brightness-[0.99]",
    "sm:px-5 sm:text-[12px] sm:tracking-[0.14em]",
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
            "pointer-events-auto relative origin-top transition-colors duration-[220ms]",
            showCollapsed
              ? cn(
                  "flex items-center gap-5 rounded-full border px-3 py-2 backdrop-blur-2xl backdrop-saturate-[1.35]",
                  barTone,
                  "mx-auto w-fit max-w-[calc(100%-2rem)]",
                )
              : "flex w-full items-center justify-between border-0 bg-transparent py-2.5 shadow-none backdrop-blur-none sm:py-3",
          )}
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.94, y: -8 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{ transformOrigin: "50% 0%" }}
        >
          {showCollapsed ? (
            <div className="flex w-full items-center gap-5">
              <Link
                href="/"
                aria-label="Kaivo — Home"
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
                    "text-[13px] font-semibold tracking-[-0.03em]",
                    lockupTone,
                  )}
                >
                  Kaivo
                </span>
              </Link>
              <Link href="/waitlist" className={waitlistCta}>
                Join waitlist
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full sm:hidden",
                  useHeroChrome ? "text-white" : "text-[var(--foreground)]",
                )}
              >
                <span className="sr-only">Menu</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  {mobileMenuOpen ? (
                    <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                  ) : (
                    <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                  )}
                </svg>
              </button>
            </div>
          ) : (
            <div className="relative flex w-full min-w-0 items-center justify-between gap-3 sm:gap-4">
              <Link
                href="/"
                aria-label="Kaivo — Home"
                className={cn(
                  "relative z-30 flex min-w-0 shrink-0 items-center gap-2 transition-colors duration-150 sm:gap-2.5",
                  lockupMuted,
                )}
              >
                <span className={markChip}>
                  <KaivoMark className="h-5 w-5 shrink-0 text-white" />
                </span>
                <span
                  className={cn(
                    "text-[15px] font-semibold tracking-[-0.03em] sm:text-base",
                    lockupTone,
                  )}
                >
                  Kaivo
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
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
                  aria-label="Primary"
                >
                  <div
                    className={cn(
                      "pointer-events-auto flex items-center gap-0.5 rounded-full p-1",
                      navPill,
                    )}
                  >
                    {links.map((l) => {
                      const active = linkIsActive(l.href, pathname, hash);
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "inline-flex items-center rounded-full py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-150",
                            active
                              ? cn("gap-2 pl-2.5 pr-3.5", navActive)
                              : cn("px-3.5", navIdle),
                          )}
                        >
                          {active ? (
                            <span
                              className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              aria-hidden
                            />
                          ) : null}
                          {l.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.nav>
              </AnimatePresence>

              <div className="relative z-30 flex shrink-0 items-center gap-2 sm:gap-3">
                <Link href="/waitlist" className={waitlistCta}>
                  Join waitlist
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((v) => !v)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-full sm:hidden",
                    useHeroChrome ? "text-white" : "text-[var(--foreground)]",
                  )}
                >
                  <span className="sr-only">Menu</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                    {mobileMenuOpen ? (
                      <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                    ) : (
                      <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </header>

    {/* Full-screen mobile menu overlay */}
    <AnimatePresence>
      {mobileMenuOpen && (
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
          <div className="relative flex flex-1 flex-col items-center justify-center gap-2 px-8">
            {links.map((l, i) => {
              const active = linkIsActive(l.href, pathname, hash);
              return (
                <motion.div
                  key={l.href}
                  className="flex w-full justify-center"
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
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-[3rem] w-full max-w-[min(20rem,100%)] items-center justify-center rounded-full border text-[clamp(1rem,4.2vw,1.25rem)] font-semibold tracking-[-0.02em] transition-[color,background-color,border-color,box-shadow] duration-150",
                      active
                        ? "gap-2 border-white/22 bg-white/[0.11] pl-4 pr-5 text-[var(--accent)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                        : "border-transparent px-5 text-white/70 hover:border-white/14 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    {active ? (
                      <span
                        className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        aria-hidden
                      />
                    ) : null}
                    {l.label}
                  </Link>
                </motion.div>
              );
            })}
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
