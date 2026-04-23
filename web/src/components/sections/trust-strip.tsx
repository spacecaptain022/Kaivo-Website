import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const pills = [
  "Frequent flyers",
  "Founders",
  "Operators",
  "Families",
  "Team travel planners",
];

export function TrustStrip() {
  return (
    <SectionShell className="border-b border-[var(--line)]/70 bg-[var(--surface)]/65 py-14 backdrop-blur-sm md:py-16">
      <FadeIn>
        <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] md:text-[17px]">
          For people who are done spending hours booking one trip.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[var(--line-strong)]/75 bg-[var(--surface)]/72 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground)] shadow-[var(--card-shadow-soft)]"
            >
              {p}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
