import { SectionShell } from "@/components/ui/section-shell";
import { SectionTag } from "@/components/ui/section-tag";

const pillars = [
  {
    title: "Built on Real Usage",
    body: "Every action on Kaivo runs through the token. More usage = more demand. Simple.",
  },
  {
    title: "Supply That Shrinks",
    body: "Activity triggers automatic burns, permanently removing tokens from circulation. The more Kaivo is used, the scarcer it gets.",
  },
  {
    title: "Revenue That Buys Back",
    body: "A share of platform revenue is used to buy tokens off the market, feeding value straight back into the ecosystem.",
  },
  {
    title: "Everything Aligned",
    body: "Users, builders, and holders all pull in the same direction. Growth isn't extracted - it's shared.",
  },
] as const;

export function TokenSection() {
  return (
    <SectionShell tone="panel" className="border-t border-[color-mix(in_srgb,var(--foreground)_6%,transparent)]">
      <article className="surface-card rounded-3xl px-6 py-10 shadow-[var(--card-shadow-soft)] md:px-10 md:py-12">
        <SectionTag icon="cube">
          Tokenomics
        </SectionTag>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.5rem,3vw,2.35rem)] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)]">
          {`Kaivo's token isn't just part of the system…it `}
          <span className="italic text-[var(--accent-ink)]">is</span>
          {` the system.`}
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12">
          {pillars.map((p) => (
            <div key={p.title}>
              <p className="text-[15px] font-semibold leading-snug text-[var(--foreground)]">
                {p.title}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}
