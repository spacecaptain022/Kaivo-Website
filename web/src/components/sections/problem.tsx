import { KaivoMark } from "@/components/kaivo-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const contrast = [
  { label: "Search", value: "more options" },
  { label: "OTAs", value: "more pages" },
  { label: "AI chat", value: "more answers" },
  { label: "Kaivo", value: "one ready decision", highlight: true },
];

export function ProblemSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <FadeIn>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
              You were promised convenience. You got work.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--muted)]">
            <p className="font-medium text-[var(--foreground)]">
              Tabs. Filters. Re-entering details. Second-guessing choices.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <div className="surface-card rounded-2xl p-6">
              <p className="border-l-2 border-[var(--accent)] pl-5 text-[20px] font-medium leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                More options didn’t remove the work. They multiplied it.
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.08}>
          <ul className="surface-card overflow-hidden rounded-2xl">
            {contrast.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-4 py-4 last:border-b-0"
              >
                <span
                  className={
                    row.label === "Kaivo"
                      ? "inline-flex min-w-0 items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]"
                      : "text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  }
                >
                  {row.label === "Kaivo" && (
                    <KaivoMark className="h-7 w-7 shrink-0" />
                  )}
                  {row.label}
                </span>
                <span
                  className={
                    row.highlight
                      ? "inline-flex shrink-0 items-center rounded-full border border-[var(--accent-deep)]/25 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)] px-3.5 py-2 text-right text-[14px] font-semibold leading-snug text-[var(--accent-ink)] shadow-[0_8px_26px_-10px_rgba(38,229,201,0.55),0_2px_8px_-4px_rgba(6,51,46,0.2),inset_0_1px_0_0_rgba(255,255,255,0.42)] sm:px-4 sm:text-[15px]"
                      : "text-right text-[15px] text-[var(--foreground)]"
                  }
                >
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
