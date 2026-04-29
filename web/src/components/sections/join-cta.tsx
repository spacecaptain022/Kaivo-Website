import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

export function JoinCtaSection() {
  return (
    <SectionShell id="final-cta" tone="surface" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
          Stop time wasting.{" "}
          <span className="text-[var(--accent)]">
            Start fast-forwarding travel.
          </span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p className="font-medium text-[var(--muted)]">
          Join Kaivo&apos;s early boarders to enjoy:
        </p>
        <ul className="mt-5 list-outside list-disc space-y-2 pl-5 marker:text-[var(--muted)]">
          <li>early access to the launch demo</li>
          <li>priority entry into beta</li>
          <li>
            private product drops - a chance to win 26 flights in 2026
          </li>
        </ul>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <FrameButton
          href="#contact"
          variant="primary"
          className="rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
        >
          Join waitlist
        </FrameButton>
      </FadeIn>
    </SectionShell>
  );
}
