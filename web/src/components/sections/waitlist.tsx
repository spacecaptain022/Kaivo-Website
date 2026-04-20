import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

export function WaitlistSection() {
  return (
    <SectionShell
      id="waitlist"
      className="border-0 bg-transparent py-12 md:py-16"
    >
      <div className="rounded-3xl border border-[var(--foreground)]/85 bg-[var(--foreground)]/96 px-6 py-16 text-[var(--background)] shadow-[var(--card-shadow)] md:px-10 md:py-24">
        <FadeIn>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
            Now boarding: the people who never want to book the old way again.
          </h2>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--background)]/75">
          <p>Join the Kaivo waitlist to get:</p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>early access to the launch demo</li>
            <li>priority entry into beta</li>
            <li>private product drops</li>
            <li>a chance to win 26 flights in 2026</li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <FrameButton href="#final-cta" variant="inverted">
            Claim your boarding pass
          </FrameButton>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-6 text-[13px] text-[var(--background)]/65">
          Be early to the year travel booking got better.
        </FadeIn>
      </div>
    </SectionShell>
  );
}
