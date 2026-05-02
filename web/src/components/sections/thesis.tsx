import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
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
      <div className="relative overflow-hidden rounded-3xl border border-[var(--background)]/12 bg-[var(--foreground)]/94 px-6 py-14 text-[var(--background)] shadow-[var(--card-shadow)] md:px-10 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
          style={{ backgroundImage: "url(/vert-paris.png)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.035] via-transparent to-black/[0.12]"
        />
        <div className="relative z-10">
          <FadeIn className="flex justify-start">
            <SectionTag icon="bolt" variant="neutral" className="text-[var(--background)]/85">
              Delegation thesis
            </SectionTag>
          </FadeIn>
          <FadeIn>
            <h2 className="mt-4 max-w-3xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
              Travel is the starting point.{" "}
              <span className="text-[var(--accent)]">Delegation is the future.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-7 max-w-3xl text-[17px] leading-relaxed text-[var(--background)]/74">
            <p>
              Flights are where friction is highest: price swings, endless
              options, and repeated decisions.
            </p>
            <p className="mt-3.5">
              You search again and again, different dates, routes, trade-offs.
              Too many tabs. Too many variables. No clear best choice.
            </p>
            <p className="mt-3.5">It&apos;s the perfect place to prove a better way.</p>
            <p className="mt-3.5">
              We&apos;re starting with flights. Then everything around
              travel: trains, hotels, full trips. Then the rest of life:
              anything repetitive that should be simple to book.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="mt-8 max-w-3xl rounded-2xl border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_14%,rgba(0,0,0,0.22))] p-5 text-[15px] font-medium leading-relaxed text-[var(--background)]/95 shadow-[0_14px_30px_-16px_rgba(87,212,196,0.35)] ring-1 ring-[color-mix(in_srgb,var(--accent)_18%,transparent)]"
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
              Kaivo owns the moment of decision. Every approval becomes an outcome.
            </span>
          </FadeIn>
          <FadeIn delay={0.14} className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--background)]/55">
              Expansion
            </p>
            <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-2 sm:gap-x-2.5 sm:gap-y-2.5">
              {ladder.map((step) => {
                const isFlights = step === "Flights";
                const chipBase =
                  "inline-flex w-full max-w-full items-center justify-center rounded-full px-2 py-1.5 text-center text-[11px] leading-snug shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:px-3 sm:text-[13px] sm:leading-normal";
                const chipClass = isFlights
                  ? `${chipBase} border border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-[color-mix(in_srgb,var(--accent)_42%,rgba(4,5,6,0.92))] font-semibold text-[var(--background)] ring-1 ring-[color-mix(in_srgb,var(--accent)_32%,transparent)]`
                  : `${chipBase} border border-[var(--background)]/18 bg-[var(--background)]/[0.06] text-[var(--background)]/92`;
                return (
                  <div key={step} className="flex min-w-0 justify-center">
                    <span className={chipClass}>{step}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionShell>
  );
}
