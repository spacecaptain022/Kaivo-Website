import { SectionShell } from "@/components/ui/section-shell";

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
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Why people will love it
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
          The best travel product isn&apos;t the one with the most options.
          It&apos;s the one that gives you your time back.
        </h2>
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
      <div className="mt-12 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-field)]/40 px-6 py-9 text-center shadow-[var(--card-shadow-soft)]">
        <p className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          Your next trip, booked in under 60 seconds.
        </p>
      </div>
    </SectionShell>
  );
}
