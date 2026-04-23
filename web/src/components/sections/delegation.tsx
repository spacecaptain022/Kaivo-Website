import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const flow = ["Intent", "Prepare", "Review", "Approve", "Done"];

export function DelegationSection() {
  return (
    <SectionShell className="bg-[var(--accent-field)]/40">
      <FadeIn>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          The next interface isn’t search. It’s delegation.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          You tell Kaivo what you need. It finds, compares, and prepares the
          best option. You review. You approve. It’s done.
        </p>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-[var(--muted)]" aria-hidden>
                  →
                </span>
              )}
              <span className="rounded-lg border border-[var(--line-strong)]/80 bg-[var(--surface)]/72 px-2 py-1 shadow-[var(--card-shadow-soft)]">
                {step}
              </span>
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.12} className="mt-10">
        <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] text-[var(--accent-ink)]">
          Kaivo does the work. You do the deciding.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
