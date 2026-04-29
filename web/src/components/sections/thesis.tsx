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
      <div className="relative overflow-hidden rounded-3xl border border-[var(--background)]/12 bg-[var(--foreground)]/96 px-6 py-16 text-[var(--background)] shadow-[var(--card-shadow)] md:px-10 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url(/vert-paris.png)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
        />
        <div className="relative z-10">
        <FadeIn>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
            Travel is the starting point.{" "}
            <span className="text-[var(--accent)]">Delegation is the future.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--background)]/75">
          <p>
            Travel is where the pain is highest: volatile pricing, repeated
            decisions, too many tabs. It’s the perfect place to prove a new way.
          </p>
          <p className="mt-4">
            Start with flights. Then expand to the rest of travel. Then to
            everything repetitive people are tired of managing manually.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="mt-10 max-w-2xl rounded-2xl border border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-[linear-gradient(120deg,color-mix(in_srgb,var(--accent)_22%,transparent)_0%,color-mix(in_srgb,var(--accent)_10%,transparent)_55%,color-mix(in_srgb,var(--accent)_18%,transparent)_100%)] p-5 text-[15px] font-medium leading-relaxed text-[var(--background)]/95 shadow-[0_14px_30px_-16px_rgba(38,229,201,0.5)] ring-1 ring-[color-mix(in_srgb,var(--accent)_24%,transparent)] backdrop-blur-sm"
        >
          Kaivo owns the moment of decision. Every approval becomes an outcome.
        </FadeIn>
        <FadeIn delay={0.14} className="mt-10">
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
        </div>
      </div>
    </SectionShell>
  );
}
