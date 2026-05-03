"use client";

import { KaivoMark } from "@/components/kaivo-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";
import { motion } from "motion/react";

const contrast = [
  { label: "Search", value: "browse and filter it yourself" },
  {
    label: "Online Travel Agents",
    value: "compare endlessly, then book manually",
  },
  { label: "AI chat", value: "get answers, then start booking from scratch" },
  {
    label: "Kaivo",
    value: "get matched and book instantly",
  },
] as const;

export function ProblemSection() {
  return (
    <SectionShell tone="paper">
      <motion.div
        className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
        initial={{ opacity: 0, y: -36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-72px 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="lg:self-center">
          <FadeIn className="flex justify-start">
            <SectionTag icon="bolt" variant="accent">
              The problem
            </SectionTag>
          </FadeIn>
          <FadeIn>
            <h2 className="mt-4 max-w-xl text-balance text-[clamp(1.75rem,4vw,2.85rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
              You were promised convenience. You got work.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8">
            <p className="font-medium text-[17px] leading-relaxed text-[var(--foreground)]">
              Tabs. Filters. Re-entering details. Second-guessing choices.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="mt-10 max-w-2xl text-[17px] font-light leading-[1.62] tracking-[-0.01em] text-[var(--muted)] antialiased"
          >
            <p>
              Search gave you endless options. Comparison sites multiplied tabs.
              AI sped up answers; but you still do the work. You check multiple
              sites, compare flights, baggage, and policies, re-enter details,
              and wonder if you chose right.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.08}>
          <ul className="overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-[color-mix(in_srgb,var(--surface)_96%,white_4%)] shadow-[0_20px_34px_-26px_rgba(8,12,14,0.28)]">
            {contrast.map((row) => (
              <li
                key={row.label === "Kaivo" ? "kaivo-brand" : row.label}
                className={
                  row.label === "Kaivo"
                    ? "relative grid grid-cols-1 gap-3 overflow-hidden border-t border-[color-mix(in_srgb,var(--accent)_48%,transparent)] px-4 py-4 sm:grid-cols-[minmax(140px,220px)_1fr] sm:items-center sm:gap-5 sm:px-5"
                    : "grid grid-cols-1 gap-3 border-b border-[var(--line)] px-4 py-4 last:border-b-0 sm:grid-cols-[minmax(140px,220px)_1fr] sm:items-center sm:gap-5 sm:px-5"
                }
              >
                {row.label === "Kaivo" ? (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[url('/thin%20wave.jpg')] bg-cover bg-center bg-no-repeat opacity-[0.46]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(170deg,color-mix(in_srgb,var(--accent)_22%,rgba(7,14,16,0.3))_0%,rgba(7,12,16,0.4)_100%)]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[rgba(4,8,10,0.32)]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(4,10,12,0.06)]"
                    />
                  </>
                ) : null}
                <span
                  className={
                    row.label === "Kaivo"
                      ? "relative z-10 inline-flex min-w-0 items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
                      : "text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] sm:pl-1"
                  }
                >
                  {row.label === "Kaivo" && (
                    <KaivoMark
                      className="h-7 w-7 shrink-0 text-[var(--accent)]"
                      aria-hidden
                    />
                  )}
                  {row.label === "Kaivo" ? "KAIVO" : row.label}
                </span>
                <span
                  className={
                    row.label === "Kaivo"
                      ? "relative z-10 inline-flex min-h-[3.2rem] w-full items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_58%,transparent)] bg-[color-mix(in_srgb,var(--accent)_34%,rgba(12,24,26,0.28))] px-4 py-2.5 text-center text-[13px] font-semibold leading-snug text-white shadow-[0_12px_32px_-18px_color-mix(in_srgb,var(--accent)_52%,transparent),inset_0_1px_0_0_rgba(255,255,255,0.3)] backdrop-blur-[2px] sm:min-h-[3.6rem] sm:px-5 sm:text-[15px]"
                      : "text-left text-[15px] leading-relaxed text-[var(--foreground)] sm:max-w-[27ch]"
                  }
                >
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </motion.div>
    </SectionShell>
  );
}
