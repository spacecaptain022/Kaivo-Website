import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const aligned = [
  "Usage drives demand",
  "Activity reduces supply",
  "Revenue feeds back into the system",
] as const;

export function TokenSection() {
  return (
    <SectionShell className="border-t border-[var(--line)]/80 bg-[var(--panel)]/50">
      <FadeIn>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          Tokenomics
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
          The system aligns incentives.
        </h2>
      </FadeIn>
      <FadeIn delay={0.08} className="mt-10">
        <ul className="grid gap-3 sm:grid-cols-3">
          {aligned.map((line) => (
            <li
              key={line}
              className="surface-card rounded-2xl px-5 py-4 text-[15px] font-medium leading-snug text-[var(--foreground)] shadow-[var(--card-shadow-soft)]"
            >
              {line}
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionShell>
  );
}
