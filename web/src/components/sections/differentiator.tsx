"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const oldModel = ["ads", "sponsored placements", "click optimization"] as const;
const kaivoModel = [
  "no ads",
  "no hidden incentives",
  "revenue only on booking",
] as const;

export function DifferentiatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-90, 90]);

  return (
    <SectionShell tone="surface">
      <div
        ref={sectionRef}
        className="surface-card relative overflow-hidden rounded-3xl p-6 md:p-10"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-y-24 inset-x-0 bg-cover bg-center opacity-[0.34] will-change-transform"
          style={
            reduceMotion
              ? { backgroundImage: "url('/kaivo-plan-2026.png')" }
              : {
                  backgroundImage: "url('/kaivo-plan-2026.png')",
                  y: backgroundY,
                  scale: 1.08,
                }
          }
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/42 to-white/48"
        />
        <div className="relative z-10">
          <FadeIn>
            <SectionTag icon="layers">
              Business model
            </SectionTag>
            <h2 className="mt-3 max-w-4xl text-[clamp(1.6rem,3.2vw,2.45rem)] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)]">
              What drives &amp; differentiates Kaivo?
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:mt-9 md:grid-cols-2 md:gap-6">
            <FadeIn delay={0.04}>
              <div className="h-full rounded-2xl border border-[color-mix(in_srgb,var(--accent)_40%,white)] bg-[linear-gradient(165deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.76)_100%)] p-5 shadow-[0_10px_28px_-18px_rgba(87,212,196,0.75),inset_0_1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-sm">
                <p className="text-[clamp(1.1rem,2.1vw,1.45rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  Most platforms monetize attention:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[clamp(1.02rem,1.85vw,1.22rem)] leading-relaxed text-[var(--foreground)] marker:text-[var(--foreground)]">
                  {oldModel.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="h-full rounded-2xl border border-[color-mix(in_srgb,var(--accent)_40%,white)] bg-[linear-gradient(165deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.76)_100%)] p-5 shadow-[0_10px_28px_-18px_rgba(87,212,196,0.75),inset_0_1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-sm">
                <p className="text-[clamp(1.1rem,2.1vw,1.45rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  This creates a conflict:
                </p>
                <p className="mt-3 text-[clamp(1.2rem,2.2vw,1.58rem)] font-semibold italic leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  they win when you click, not when you choose well
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="h-full rounded-2xl border border-[color-mix(in_srgb,var(--accent)_40%,white)] bg-[linear-gradient(165deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.76)_100%)] p-5 shadow-[0_10px_28px_-18px_rgba(87,212,196,0.75),inset_0_1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-sm md:col-span-2">
                <p className="text-[clamp(1.3rem,2.4vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  Kaivo is built differently.
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[clamp(1.02rem,1.85vw,1.22rem)] leading-relaxed text-[var(--foreground)] marker:text-[var(--foreground)] md:columns-2 md:gap-8">
                  {kaivoModel.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="max-w-5xl text-[clamp(1.25rem,2.55vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)] md:col-span-2">
                <span className="text-[var(--accent)]">Kaivo&apos;s</span>{" "}
                business model aligns with the{" "}
                <span className="italic">outcome.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
