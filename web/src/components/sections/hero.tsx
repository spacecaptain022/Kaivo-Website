"use client";

import { CornerArrowMark } from "@/components/ui/corner-arrow-mark";
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
          className="pointer-events-none h-full min-h-full w-full object-cover object-[center_35%]"
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
                Your perfect trip, matched by AI.
              </span>
              <span className="mt-[0.1em] block max-w-full bg-gradient-to-r from-[var(--accent)] via-[#7efceb] to-[var(--accent-mid)] bg-clip-text pb-[0.06em] leading-[1] text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone] sm:mt-[0.11em] md:mt-[0.12em]">
                Found &amp; booked in under 60 seconds.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full min-w-0">
            <p className="mx-auto max-w-4xl text-[clamp(1.2rem,_2.4vw,_1.85rem)] font-medium leading-snug tracking-[-0.02em] text-white/95 sm:leading-normal">
              <span className="block">
                No endless searching. No guesswork. Just better travel choices, faster.
              </span>
              <span className="mt-2 block sm:mt-2.5">
                Stop doing.{" "}
                <span className="font-semibold text-[var(--accent)]">Start delegating.</span>
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.18} className="mt-5 flex w-full justify-center px-1 sm:mt-6">
            <div
              className={cn(
                "relative z-10 flex w-fit max-w-[min(100%,18rem)] origin-center flex-col items-stretch justify-center overflow-visible p-1 transition-[transform,box-shadow] duration-[680ms] ease-[cubic-bezier(0.22,1.78,0.34,1.02)] motion-reduce:duration-200 motion-reduce:ease-out has-[a:hover]:translate-y-px has-[a:hover]:scale-[0.98] has-[a:focus-visible]:translate-y-px has-[a:focus-visible]:scale-[0.98] motion-reduce:has-[a:hover]:translate-y-0 motion-reduce:has-[a:hover]:scale-100 motion-reduce:has-[a:focus-visible]:translate-y-0 motion-reduce:has-[a:focus-visible]:scale-100 sm:p-1.5",
                reduceMotion
                  ? "rounded-[2.25rem] bg-[color-mix(in_srgb,var(--accent)_30%,transparent)] backdrop-blur-xl backdrop-saturate-[1.45] shadow-[0_28px_80px_-28px_rgba(0,_0,_0,_0.5)] ring-1 ring-[color-mix(in_srgb,var(--accent)_38%,transparent)]"
                  : "hero-waitlist-bordered",
              )}
            >
              <Link
                href="/waitlist"
                className={cn(
                  "group inline-flex w-auto min-w-0 max-w-full items-center justify-between gap-2.5 overflow-visible rounded-[calc(2.25rem-0.25rem)] border border-[color-mix(in_srgb,var(--accent-deep)_28%,transparent)] sm:gap-3 sm:rounded-[calc(2.25rem-0.375rem)]",
                  "bg-[var(--accent)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent-ink)] shadow-[var(--card-shadow-soft)] sm:px-4 sm:tracking-[0.18em]",
                  "transition-[filter,transform,box-shadow] duration-[680ms] ease-[cubic-bezier(0.22,1.78,0.34,1.02)] motion-reduce:duration-200 motion-reduce:ease-out hover:brightness-[0.99] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.12),var(--card-shadow-soft)] active:scale-[0.98] motion-reduce:active:scale-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                )}
              >
                <span className="pl-1.5 sm:pl-2">Join waitlist</span>
                <span
                  aria-hidden
                  className="inline-flex size-9 origin-center items-center justify-center rounded-full bg-[var(--accent-deep)] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] ring-1 ring-black/10 transition-[transform,box-shadow] duration-[680ms] ease-[cubic-bezier(0.22,1.78,0.34,1.02)] motion-reduce:duration-200 motion-reduce:ease-out motion-safe:group-hover:scale-[1.1] motion-safe:group-focus-visible:scale-[1.1] motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100 motion-safe:group-hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.35)] motion-reduce:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)]"
                >
                  <CornerArrowMark className="h-5 w-5 transition-transform duration-[720ms] ease-[cubic-bezier(0.22,1.78,0.34,1.02)] motion-reduce:duration-200 motion-reduce:ease-out motion-safe:group-hover:rotate-45 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:rotate-45 motion-safe:group-focus-visible:scale-110 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:rotate-0 motion-reduce:group-focus-visible:scale-100 sm:h-[22px] sm:w-[22px]" />
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
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              focusable="false"
              aria-hidden
            >
              <path d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z" />
            </svg>
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
