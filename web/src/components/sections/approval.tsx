import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const bullets = [
  "Every decision is visible",
  "Nothing moves forward without your approval",
  "Your preferences get smarter over time",
];

export function ApprovalSection() {
  return (
    <SectionShell className="bg-[var(--panel)]/42">
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          You stay in control.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          See what was chosen, why, and what it costs — before you approve.
        </p>
      </FadeIn>
      <FadeIn delay={0.08} className="mt-10">
        <ul className="grid gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-[var(--line)]/85 bg-[var(--surface)]/68 px-4 py-3 text-[15px] text-[var(--foreground)] shadow-[var(--card-shadow-soft)]"
            >
              {b}
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionShell>
  );
}
