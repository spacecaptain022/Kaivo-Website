"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DemoSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const calloutRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: calloutRef,
    offset: ["start end", "end start"],
  });
  const calloutParallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const oldWay = [
    "Search across tabs",
    "Compare manually",
    "Enter details repeatedly",
    "Hope you chose right",
  ];

  const withKaivo = [
    "Tell Kaivo what you need",
    "Review a few options, curated for your preferences.",
    "Approve once",
    "Sit back & relax. Kaivo handles the rest.",
  ];

  return (
    <SectionShell id="product">
      <FadeIn className="text-center">
        <SectionTag icon="bolt">
          Product
        </SectionTag>
        {reduceMotion ? (
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
            From tabs and forms → to one decision.
          </h2>
        ) : (
          <motion.h2
            className="mt-3 flex flex-wrap items-baseline justify-center gap-x-[0.2em] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.65, margin: "-72px 0px" }}
            variants={{
              hidden: { opacity: 0.6, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: easeOut },
              },
            }}
          >
            <span>From tabs and forms</span>
            <motion.span
              aria-hidden
              className="inline-block will-change-transform"
              variants={{
                hidden: { x: -22, opacity: 0.45 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: easeOut, delay: 0.08 },
                },
              }}
            >
              →
            </motion.span>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { x: 14, opacity: 0.72 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.45, ease: easeOut, delay: 0.12 },
                },
              }}
            >
              to one decision.
            </motion.span>
          </motion.h2>
        )}
      </FadeIn>
      <FadeIn
        delay={0.06}
        className="mx-auto mt-6 max-w-2xl text-center text-[17px] leading-relaxed text-[var(--muted)]"
      >
        <p>
          The old way stacks tabs and busywork. Kaivo lines up one clear choice
          for you to approve.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.08}>
          <article className="surface-card flex h-full flex-col rounded-2xl bg-[var(--panel)]/35 p-6">
            <h3 className="max-w-md text-[11px] font-extrabold uppercase leading-snug tracking-[0.11em] text-[var(--foreground)] sm:text-[12px] md:max-w-none">
              WITH THE OLD WAY, MORE IS JUST MORE.
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[var(--muted)]">
              {oldWay.map((step) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/55"
                  />
                  {step}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="flex h-full flex-col rounded-2xl border border-[var(--accent-ink)]/45 bg-[var(--accent-field)]/45 p-6 shadow-[var(--card-shadow)]">
            <h3 className="max-w-md text-[11px] font-extrabold uppercase leading-snug tracking-[0.11em] text-[var(--foreground)] sm:text-[12px] md:max-w-none">
              WITH KAIVO, LESS IS MORE.
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] font-medium leading-relaxed text-[var(--foreground)]">
              {withKaivo.map((step, i) => {
                const content = (
                  <>
                    <span
                      aria-hidden
                      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/60 text-[10px] leading-none text-[var(--accent-ink)]"
                    >
                      ✓
                    </span>
                    {step}
                  </>
                );
                if (reduceMotion) {
                  return (
                    <li key={step} className="flex items-center gap-2">
                      {content}
                    </li>
                  );
                }
                return (
                  <motion.li
                    key={step}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-72px 0px" }}
                    transition={{
                      duration: 0.48,
                      delay: i * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {content}
                  </motion.li>
                );
              })}
            </ul>
          </article>
        </FadeIn>
      </div>
      <FadeIn delay={0.12} className="mt-10">
        <div
          ref={calloutRef}
          className="relative overflow-hidden rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-field)]/40 p-7 text-center shadow-[var(--card-shadow-soft)]"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -inset-y-8 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url(/lady-booking.png)",
              y: reduceMotion ? "0%" : calloutParallaxY,
            }}
          />
          <p className="relative z-10 mx-auto max-w-4xl text-[clamp(0.9375rem,2.35vw,1.5rem)] font-extrabold uppercase leading-snug tracking-[0.085em] text-[var(--foreground)]">
            WE EXIST SO YOU CAN MAKE BETTER CHOICES. AND QUICKER.
          </p>
          <p className="relative z-10 mt-4 text-[13px] text-[var(--muted)]">
            Natural-language booking. One review. One approval.
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
