import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const ladder = [
  "Flights",
  "Trains",
  "Hotels",
  "End-to-end trips",
  "Repeat purchases",
  "Life admin",
];

export function ThesisSection() {
  return (
    <SectionShell className="border-0 bg-transparent py-12 md:py-16">
      <div className="rounded-3xl border border-[var(--background)]/12 bg-[var(--foreground)]/96 px-6 py-16 text-[var(--background)] shadow-[var(--card-shadow)] md:px-10 md:py-28">
        <FadeIn>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
            Travel is the wedge. Delegation is the platform.
          </h2>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--background)]/75">
          <p>
            Travel is where this problem is most painful: volatile pricing,
            repeated decisions, multiple tabs, and a high cost of getting it
            wrong. That’s why it’s the perfect place to prove a bigger behaviour
            shift.
          </p>
          <p className="mt-4">
            Start with flights. Then expand to the rest of travel. Then to
            everything repetitive people are tired of managing manually.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--background)]/55">
            Expansion
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ladder.map((step, i) => (
              <span key={step} className="flex items-center gap-2 text-[13px]">
                {i > 0 && <span className="text-[var(--background)]/35">→</span>}
                <span className="rounded-lg border border-[var(--background)]/20 bg-[var(--background)]/5 px-2.5 py-1">
                  {step}
                </span>
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn
          delay={0.14}
          className="mt-10 max-w-2xl rounded-2xl border border-[var(--background)]/25 p-5 text-[15px] leading-relaxed text-[var(--background)]/85"
        >
          Kaivo wins by owning the moment of approval. Every approved outcome is
          a transaction opportunity.
        </FadeIn>
      </div>
    </SectionShell>
  );
}
