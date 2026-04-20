import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const points = [
  {
    title: "Built on real usage",
    body: "Every action on Kaivo runs through the token. More usage means more demand. Simple.",
  },
  {
    title: "Supply that shrinks",
    body: "Activity triggers automatic burns, permanently removing tokens from circulation. The more Kaivo is used, the scarcer it gets.",
  },
  {
    title: "Revenue that buys back",
    body: "A share of platform revenue is used to buy tokens off the market, feeding value straight back into the ecosystem.",
  },
  {
    title: "Everything aligned",
    body: "Users, builders, and holders all pull in the same direction. Growth isn’t extracted — it’s shared.",
  },
];

export function TokenSection() {
  return (
    <SectionShell className="border-t border-[var(--line)]/80 bg-[var(--panel)]/50">
      <FadeIn>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          Tokenomics
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
          Kaivo’s token isn’t just part of the system, it{" "}
          <em className="not-italic text-[var(--accent-deep)]">is</em> the system.
        </h2>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {points.map((p, i) => (
          <FadeIn key={p.title} delay={0.05 + i * 0.04}>
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-[14px] font-semibold tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                {p.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
