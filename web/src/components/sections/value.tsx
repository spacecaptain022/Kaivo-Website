import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const cards = [
  {
    title: "Saves hours",
    body: "Less search, less comparing, less admin.",
  },
  {
    title: "Gets it right",
    body: "Timing, bags, budget, airlines, and trade-offs — aligned to how you travel.",
  },
  {
    title: "Improves with you",
    body: "The more you use Kaivo, the less you repeat yourself.",
  },
];

export function ValueSection() {
  return (
    <SectionShell>
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          The best travel product gives you your time back.
        </h2>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={0.06 + i * 0.05}>
            <article className="surface-card flex h-full flex-col rounded-2xl p-6">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                {c.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.18} className="mt-10 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Travel booking re-engineered
        </p>
        <p className="mt-3 text-[17px] leading-relaxed text-[var(--muted)]">
          Kaivo is built for the moment search stops being enough — when you want
          the trip booked, not another tab to manage.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} className="mt-12 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-field)]/40 px-6 py-8 text-center shadow-[var(--card-shadow-soft)]">
        <p className="text-[clamp(1.25rem,2.5vw,1.65rem)] font-semibold tracking-[-0.03em]">
          Your next trip. One message. One approval. Done.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
