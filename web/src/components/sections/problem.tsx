"use client";

import { KaivoMark } from "@/components/kaivo-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { motion } from "motion/react";

const contrast = [
  { label: "Search", value: "browse and filter it yourself" },
  { label: "OTAs", value: "compare endlessly, then book manually" },
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
        className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        initial={{ opacity: 0, y: -36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-72px 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <FadeIn>
            <h2 className="max-w-xl text-[clamp(1.75rem,4vw,2.85rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
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
              Search made options infinite. Comparison sites made tabs multiply.
              AI made answers faster. But somehow, you still do the work. You
              still check five websites. You still compare flight times, baggage
              rules, layovers, and refund policies. You still re-enter passenger
              details. You still second-guess whether you picked the right
              option.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.08}>
          <ul className="surface-card overflow-hidden rounded-2xl">
            {contrast.map((row) => (
              <li
                key={row.label === "Kaivo" ? "kaivo-brand" : row.label}
                className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-4 py-4 last:border-b-0"
              >
                <span
                  className={
                    row.label === "Kaivo"
                      ? "inline-flex min-w-0 items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]"
                      : "text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  }
                >
                  {row.label === "Kaivo" && (
                    <KaivoMark className="h-7 w-7 shrink-0" aria-hidden />
                  )}
                  {row.label === "Kaivo" ? "KAIVO" : row.label}
                </span>
                <span
                  className={
                    row.label === "Kaivo"
                      ? "inline-flex min-h-[3.75rem] shrink-0 items-center rounded-3xl border border-[var(--accent-deep)]/25 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)] px-5 py-3 text-center text-[13px] font-semibold leading-snug text-[var(--accent-ink)] shadow-[0_8px_26px_-10px_rgba(87,212,196,0.45),0_2px_8px_-4px_rgba(6,51,46,0.18),inset_0_1px_0_0_rgba(255,255,255,0.42)] sm:min-w-[17rem] sm:text-[14px]"
                      : "text-right text-[15px] text-[var(--foreground)]"
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
