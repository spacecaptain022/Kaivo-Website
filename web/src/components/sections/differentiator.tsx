"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";

const oldModel = ["ads", "sponsored placements", "click optimization"] as const;
const kaivoModel = [
  "no ads",
  "no hidden incentives",
  "revenue only on booking",
] as const;

const cardClass =
  "h-full rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_96%,white_4%)] p-5 sm:p-6 shadow-[var(--card-shadow-soft)]";

export function DifferentiatorSection() {
  return (
    <SectionShell tone="paper">
      <div className="mx-auto w-full max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon="layers">
              Business model
            </SectionTag>
            <h2 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(1.6rem,3.2vw,2.45rem)] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)]">
              What drives &amp; differentiates{" "}
              <span className="text-[var(--accent)]">Kaivo</span>?
            </h2>
          </div>
        </FadeIn>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          <FadeIn delay={0.04} className="h-full">
            <article className={cardClass}>
              <p className="text-[clamp(1.05rem,1.9vw,1.35rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                Most platforms monetize attention:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[clamp(1rem,1.55vw,1.15rem)] leading-relaxed text-[var(--foreground)] marker:text-[var(--foreground)]">
                {oldModel.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.08} className="h-full">
            <article className={cardClass}>
              <p className="text-[clamp(1.05rem,1.9vw,1.35rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                This creates a conflict:
              </p>
              <p className="mt-3 text-[clamp(1.15rem,2vw,1.5rem)] font-semibold italic leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                they win when you click, not when you choose well
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.12} className="h-full md:col-span-2">
            <article className={cardClass}>
              <p className="text-[clamp(1.2rem,2.15vw,1.6rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                Kaivo is built differently.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[clamp(1rem,1.55vw,1.15rem)] leading-relaxed text-[var(--foreground)] marker:text-[var(--foreground)] md:columns-2 md:gap-8">
                {kaivoModel.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.16} className="mt-6">
          <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_22%,var(--line))] bg-[color-mix(in_srgb,var(--accent-field)_40%,var(--surface)_60%)] p-5 sm:p-6 shadow-[var(--card-shadow-soft)]">
            <p className="flex items-center gap-2 text-balance text-[clamp(1.2rem,2.45vw,1.8rem)] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
              <span className="inline-block h-[0.72em] w-1.5 shrink-0 rounded-full bg-[var(--accent)]/80" />
              <span>
                <span className="text-[var(--accent)]">Kaivo&apos;s</span>{" "}
                business model aligns with the{" "}
                <span className="italic">outcome.</span>
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
