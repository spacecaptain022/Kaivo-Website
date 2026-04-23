import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

export function DemoSection() {
  const oldWay = [
    "Search across tabs",
    "Compare manually",
    "Enter details repeatedly",
    "Hope you chose right",
  ];

  const withKaivo = [
    "Tell Kaivo what you need",
    "Review one prepared option",
    "Approve once",
    "Done",
  ];

  return (
    <SectionShell id="product">
      <FadeIn>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          Product
        </p>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          From tabs and forms → to one decision.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          The old way stacks tabs and busywork. Kaivo lines up one clear choice
          for you to approve.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.08}>
          <article className="surface-card flex h-full flex-col rounded-2xl bg-[var(--panel)]/35 p-6">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              The old way
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[var(--muted)]">
              {oldWay.map((step) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/55"
                  />
                  {step}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="flex h-full flex-col rounded-2xl border border-[var(--accent-ink)]/45 bg-[var(--accent-field)]/45 p-6 shadow-[var(--card-shadow)]">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)]">
              With Kaivo
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] font-medium leading-relaxed text-[var(--foreground)]">
              {withKaivo.map((step) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)]/60 text-[10px] leading-none text-[var(--accent-ink)]"
                  >
                    ✓
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
      </div>
      <FadeIn delay={0.12} className="surface-card mt-10 rounded-2xl p-7 text-center">
        <p className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          From hours → to under 60 seconds.
        </p>
        <p className="mt-4 text-[13px] text-[var(--muted)]">
          Natural-language booking. One review. One approval.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
