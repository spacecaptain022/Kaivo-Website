"use client";

import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/cn";
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

  /* Subtle vertical shift on mock only — keep small so the bezel clears overflow-hidden clipping */
  const phoneRevealY = useTransform(scrollYProgress, [0, 1], [0, -6]);

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
          poster="/hero/airplane-island.png"
          className="h-full min-h-full w-full scale-105 object-cover object-[center_35%]"
        >
          <source src="/hero/airplane-island-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,20,28,0.9)_0%,rgba(6,30,38,0.78)_45%,rgba(5,16,24,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_11%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(38,229,201,0.16),transparent_56%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#050a14]/82 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      </div>

      {/* Centered copy + capsule + phone mock */}
      <motion.div
        className={cn(
          "relative z-10 flex min-h-[min(880px,_88svh)] flex-col items-center px-5 pb-0 pt-[calc(8.25rem+env(safe-area-inset-top))] sm:px-8 md:pt-[calc(8.75rem+env(safe-area-inset-top))]",
          !reduceMotion && "will-change-[opacity]",
        )}
        style={
          reduceMotion ? undefined : { opacity }
        }
      >
        <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center sm:gap-5 md:gap-6">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
              From search to delegation
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-sans text-[clamp(2.75rem,_9vw,_5.75rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-white drop-shadow-[0_12px_40px_rgba(0,_0,_0,_0.35)] md:leading-[0.88]">
              Search less.
              <br />
              <span className="bg-gradient-to-r from-[var(--accent)] via-[#7efceb] to-[var(--accent-mid)] bg-clip-text text-transparent">
                Go more.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto max-w-lg text-[clamp(1.2rem,_2.4vw,_1.85rem)] font-medium leading-snug tracking-[-0.02em] text-white/95">
              Stop doing.{" "}
              <span className="font-semibold text-[var(--accent)]">Start delegating.</span>{" "}
              Book a flight in under 60 seconds.
            </p>
          </FadeIn>

          <FadeIn delay={0.18} className="w-full max-w-xl md:max-w-[34rem]">
            <div
              className={cn(
                "relative z-10 mx-auto flex w-full flex-col items-stretch gap-4 px-5 py-4",
                "sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2.5 sm:pl-10 sm:pr-5",
                reduceMotion
                  ? "rounded-[2.25rem] bg-[color-mix(in_srgb,var(--accent)_24%,transparent)] backdrop-blur-xl backdrop-saturate-[1.45] shadow-[0_28px_80px_-28px_rgba(0,_0,_0,_0.5)] ring-1 ring-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
                  : "hero-waitlist-bordered",
              )}
            >
              <div className="min-w-0 flex-1 space-y-0.5 px-0 text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/78">
                  Waitlist
                </p>
                <p className="text-[14px] font-medium leading-snug tracking-[-0.02em] text-white text-balance sm:text-[15px] md:text-[16px]">
                  Early access &amp; live demo invites
                </p>
              </div>
              <FrameButton
                href="#final-cta"
                variant="primary"
                className="w-full shrink-0 justify-center sm:w-auto"
              >
                Join waitlist
              </FrameButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.06}
          className="mt-auto flex w-full justify-center pt-8 sm:pt-10 md:pt-12"
        >
          <div
            className={cn(
              "relative mx-auto w-[min(448px,_94vw)] overflow-hidden rounded-b-[1.875rem]",
              "sm:w-[min(488px,_90vw)]",
              "[height:calc(min(448px,_94vw)*2/3)] sm:h-[calc(min(488px,_90vw)*2/3)]",
            )}
          >
            <motion.img
              src="/hero/kaivo-mockup-phone-2026.png"
              alt="Kaivo on a phone"
              width={800}
              height={800}
              draggable={false}
              decoding="sync"
              sizes="(max-width: 639px) 94vw, 488px"
              fetchPriority="high"
              className={cn(
                "absolute left-1/2 top-0 block h-[130%] w-full max-w-none -translate-x-1/2 object-cover object-top select-none",
                "drop-shadow-[0_28px_64px_-8px_rgba(0,_0,_0,_0.55)]",
              )}
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: phoneRevealY,
                    }
              }
            />
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 z-[1] min-h-[38%]",
                "bg-gradient-to-t from-[#070a11]/[0.98] via-[#070a11]/52 to-transparent",
                "sm:from-[#050608]/[0.93]",
              )}
            />
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
