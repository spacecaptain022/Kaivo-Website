import { RouteEdgeCard } from "@/components/ui/route-edge-card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";

const caps = [
  "Agents that reason through real travel trade-offs",
  "Travel infrastructure you can program in real time",
  "Payments and approvals that close the loop on the spot",
] as const;

export function WhyNowSection() {
  return (
    <SectionShell>
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          Why now? AI can finally act, not just answer.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          AI can now understand intent, handle multi-step workflows, and prepare
          transactions in real time.
        </p>
      </FadeIn>
      <FadeIn delay={0.08} className="mt-6">
        <SectionTag variant="accent" icon="bolt" className="text-[10px]">
          What’s possible now
        </SectionTag>
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
