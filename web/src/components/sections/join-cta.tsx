import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const perks = [
  "Early access to the launch demo",
  "Priority entry into beta",
  "Private product drops + a chance to win 26 flights in 2026",
] as const;

export function JoinCtaSection() {
  return (
    <SectionShell id="final-cta" tone="surface" className="py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-10">
        <div>
          <FadeIn>
            <h2 className="max-w-3xl text-balance text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
              Stop the searching.{" "}
              <span className="text-[var(--accent)]">Start travelling.</span>
            </h2>
          </FadeIn>
          <FadeIn
            delay={0.06}
            className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]"
          >
            <p>
              Join Kaivo&apos;s early founders list and help shape how modern travel gets delegated.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-8">
            <FrameButton
              href="/waitlist"
              variant="primary"
              className="rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
            >
              Join waitlist
            </FrameButton>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.12}
          className="relative overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--accent)_20%,var(--line))] bg-[color-mix(in_srgb,var(--surface)_95%,white_5%)] p-4 shadow-[var(--card-shadow-soft)] sm:p-5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_10%,transparent)] to-transparent"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            What you get first
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="inline-flex items-start gap-2.5 rounded-xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-[color-mix(in_srgb,var(--surface)_90%,white_10%)] px-3.5 py-2.5 text-[13px] leading-relaxed text-[var(--foreground)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.42)]"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_20%,transparent)]" aria-hidden />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
