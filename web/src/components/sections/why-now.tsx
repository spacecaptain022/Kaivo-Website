import { RouteEdgeCard } from "@/components/ui/route-edge-card";
import { FadeIn } from "@/components/ui/fade-in";
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
        <p className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_16%,var(--surface))] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-[0_8px_22px_-12px_rgba(38,229,201,0.7)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)]">
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
