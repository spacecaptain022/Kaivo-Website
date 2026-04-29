import { SectionShell } from "@/components/ui/section-shell";

const trustBullets = [
  "Every decision is visible",
  "Every cost is clear",
  "Every action happens with approval",
  "Your preferences get smarter over time",
];

export function ApprovalSection() {
  return (
    <SectionShell
      id="stay-in-control"
      tone="paper"
      innerClassName="max-w-4xl"
    >
      <div className="text-left">
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
          Delegation only works if you stay in control.
        </h2>
        <p className="mt-8 max-w-2xl text-[17px] font-normal leading-[1.55] text-[var(--muted)]">
          Kaivo never turns trust into guesswork. You see what was chosen, why it was chosen, what it costs, and what happens next. Then you approve.
        </p>

        <ul
          className="mt-10 grid max-w-3xl grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
          role="list"
        >
          {trustBullets.map((b) => (
            <li
              key={b}
              className="surface-card rounded-[2rem] px-6 py-5 text-left text-[15px] font-normal leading-snug text-[var(--foreground)]"
            >
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-[clamp(1.15rem,2.2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--accent-ink)]">
          Always asks first. Never hides the logic.
        </p>
      </div>
    </SectionShell>
  );
}
