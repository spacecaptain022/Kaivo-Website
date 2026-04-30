import { SectionShell } from "@/components/ui/section-shell";
import { SixtySecondTagline } from "@/components/sections/sixty-second-tagline";
import { ValueHeadline } from "@/components/sections/value-headline";
import { SectionTag } from "@/components/ui/section-tag";

const cards = [
  {
    title: "Saves hours",
    body: "Less searching. Less comparing. Less admin.",
  },
  {
    title: "Gets it right",
    body:
      "Built around your timing, bags, budget, airline preferences, and trade-offs.",
  },
  {
    title: "Improves with you",
    body: "The more you use Kaivo, the less you have to explain.",
  },
];

export function ValueSection() {
  return (
    <SectionShell tone="surface">
      <div className="text-center">
        <SectionTag icon="heart">
          Why people will love it
        </SectionTag>
        <ValueHeadline />
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="surface-card flex h-full flex-col rounded-2xl p-6"
          >
            <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
              {c.body}
            </p>
          </article>
        ))}
      </div>
      <div className="relative mt-12 overflow-hidden rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-field)]/40 px-6 py-9 text-center shadow-[var(--card-shadow-soft)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url(/60-second-bg.png)" }}
        />
        <SixtySecondTagline />
      </div>
    </SectionShell>
  );
}
