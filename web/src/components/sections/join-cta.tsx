import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

export function JoinCtaSection() {
  return (
    <SectionShell id="final-cta" tone="surface" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-balance text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
            Stop the searching.{" "}
            <span className="text-[var(--accent)]">Start travelling.</span>
          </h2>
        </FadeIn>
        <FadeIn
          delay={0.06}
          className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]"
        >
          <p>
            Join Kaivo&apos;s early founders list and help shape how modern travel gets delegated.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8 flex justify-center">
          <FrameButton
            href="/waitlist"
            variant="primary"
            className="rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
          >
            Join waitlist
          </FrameButton>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
