import { RouteEdgeCard } from "@/components/ui/route-edge-card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const caps = [
  "AI agents that can reason through travel trade-offs",
  "Travel infrastructure that is programmable in real time",
  "Embedded payments and approval flows that close the loop instantly",
] as const;

export function WhyNowSection() {
  return (
    <SectionShell>
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          Why now? Because AI can finally do, not just answer.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          For years, travel platforms have owned discovery. But discovery isn’t
          the prize. The prize is the decision.
        </p>
        <p className="mt-4">
          Kaivo sits at the moment a traveller wants the answer to become an
          outcome. That shift is possible now because AI can understand intent,
          operate across steps, and prepare transactions in real time.
        </p>
      </FadeIn>
      <FadeIn delay={0.08} className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          What’s possible now
        </p>
      </FadeIn>
      <div className="mt-6 max-w-3xl space-y-4">
        {caps.map((line, i) => (
          <FadeIn key={line} delay={0.12 + i * 0.05}>
            <RouteEdgeCard step={(i + 1) as 1 | 2 | 3}>
              {line}
            </RouteEdgeCard>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
