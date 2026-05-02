"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/cn";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Fade hero copy on scroll; no translate on the column (clips vs overflow-hidden rounding). */
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden rounded-b-[2.75rem] sm:rounded-b-[3.75rem]"
    >
      {/* Full-bleed media */}
      <div className="absolute inset-0 z-0 min-h-[100%]" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nofullscreen nodownload noremoteplayback"
          preload="auto"
          tabIndex={-1}
          aria-hidden
          poster="/hero/airplane-island.png"
          className="pointer-events-none h-full min-h-full w-full scale-105 object-cover object-[center_35%]"
        >
          <source src="/hero/airplane-island-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,6,8,0.92)_0%,rgba(8,8,10,0.82)_45%,rgba(5,5,7,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_11%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(87,212,196,0.16),transparent_56%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/82 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      </div>

      {/* Centered copy + capsule + phone mock */}
      <motion.div
        className={cn(
          "relative z-10 flex min-h-[min(880px,_88svh)] flex-col items-center px-5 pb-0 pt-[calc(9.75rem+env(safe-area-inset-top))] sm:px-8 md:pt-[calc(10.25rem+env(safe-area-inset-top))]",
          !reduceMotion && "will-change-[opacity]",
        )}
        style={
          reduceMotion ? undefined : { opacity }
        }
      >
        <div className="flex w-full min-w-0 max-w-4xl flex-col items-center gap-4 text-center sm:gap-5 md:gap-6">
          <FadeIn delay={0.05} className="w-full min-w-0">
            <h1 className="mx-auto flex w-full min-w-0 max-w-[16ch] flex-col items-center text-balance text-center font-sans text-[clamp(2.2rem,_7vw,_4.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] sm:max-w-[18ch] sm:leading-[1] md:max-w-none md:leading-[0.94] lg:leading-[0.88] xl:leading-[0.86]">
              <span className="block max-w-full text-white drop-shadow-[0_12px_40px_rgba(0,_0,_0,_0.35)]">
                Let AI do the work.
              </span>
              <span className="mt-[0.1em] flex w-full max-w-full flex-col items-center sm:mt-[0.11em] md:mt-[0.12em]">
                <span className="block max-w-full bg-gradient-to-r from-[var(--accent)] via-[#7efceb] to-[var(--accent-mid)] bg-clip-text pb-[0.06em] leading-[1] text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                  Enjoy your trip
                </span>
                <span className="mt-[0.03em] block max-w-full bg-gradient-to-r from-[var(--accent)] via-[#7efceb] to-[var(--accent-mid)] bg-clip-text pb-[0.03em] leading-[1] text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone] sm:mt-[0.04em] md:mt-[0.05em]">
                  before you even arrive.
                </span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full min-w-0">
            <p className="mx-auto max-w-none text-[clamp(1.2rem,_2.4vw,_1.85rem)] font-medium leading-snug tracking-[-0.02em] text-white/95 sm:leading-normal md:whitespace-nowrap">
              Stop doing.{" "}
              <span className="font-semibold text-[var(--accent)]">Start delegating.</span>{" "}
              Book a flight in under 60 seconds.
            </p>
          </FadeIn>

          <FadeIn delay={0.18} className="mt-2 w-full max-w-[17.5rem] sm:max-w-[18.5rem] md:max-w-sm lg:max-w-md">
            <div
              className={cn(
                "relative z-10 mx-auto flex w-full flex-col items-stretch gap-3 px-3.5 py-3.5",
                "sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-2.5 sm:pl-5 sm:pr-3.5",
                reduceMotion
                  ? "rounded-[2.25rem] bg-[color-mix(in_srgb,var(--accent)_24%,transparent)] backdrop-blur-xl backdrop-saturate-[1.45] shadow-[0_28px_80px_-28px_rgba(0,_0,_0,_0.5)] ring-1 ring-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
                  : "hero-waitlist-bordered",
              )}
            >
              <div className="min-w-0 flex-1 space-y-0.5 px-0 text-center sm:text-left">
                <p className="text-[13px] font-medium leading-snug tracking-[-0.02em] text-white text-balance sm:text-[14px] md:text-[15px]">
                  Early access &amp; live demo invites
                </p>
              </div>
              <Link
                href="/waitlist"
                className={cn(
                  "group inline-flex w-full items-center justify-between gap-3 rounded-full border border-[color-mix(in_srgb,var(--accent-deep)_35%,transparent)]",
                  "bg-[var(--accent)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-ink)] shadow-[var(--card-shadow-soft)]",
                  "transition-[filter,transform,box-shadow,border-color] hover:brightness-[1.02] hover:shadow-[var(--card-shadow)] active:scale-[0.99]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  "sm:w-auto sm:shrink-0",
                )}
              >
                <span className="pl-2">Join waitlist</span>
                <span
                  aria-hidden
                  className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--accent-deep)] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] ring-1 ring-black/10 transition-transform duration-200 group-hover:translate-y-[-1px]"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
                    <path
                      d="M6.5 13.5 13.5 6.5M13.5 6.5H7.25M13.5 6.5V12.75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div
          className={cn(
            "mt-auto flex w-full flex-col items-center justify-center pt-8 sm:pt-10 md:pt-12",
            "h-[calc(min(448px,_94vw)*2/3)] sm:h-[calc(min(488px,_90vw)*2/3)]",
          )}
        >
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[13px]">
            Scroll to view demo
          </p>
          <motion.span
            aria-hidden
            className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_48%,transparent)] bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--accent)] shadow-[0_10px_24px_-16px_rgba(87,_212,_196,_0.85)] backdrop-blur-sm"
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5"
              focusable="false"
              aria-hidden
            >
              <path
                d="M10 3v11.2m0 0l-4.2-4.2M10 14.2l4.2-4.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
