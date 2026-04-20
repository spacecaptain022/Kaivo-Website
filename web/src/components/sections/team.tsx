import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const placeholders = [
  { name: "Name", role: "Role", line: "One-line credibility / story." },
  { name: "Name", role: "Role", line: "One-line credibility / story." },
];

export function TeamSection() {
  return (
    <SectionShell className="bg-[var(--panel)]/34">
      <FadeIn>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">
          Meet the team
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
          A team building the future of delegation, starting with travel.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {placeholders.map((m, i) => (
          <FadeIn key={i} delay={0.06 + i * 0.05}>
            <article className="surface-card rounded-2xl p-6">
              <div className="aspect-[4/3] w-full rounded-xl border border-[var(--line)] bg-[var(--panel)]" />
              <h3 className="mt-4 text-[17px] font-semibold">{m.name}</h3>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {m.role}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                {m.line}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.15} className="mt-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Advisors
        </p>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
          Operators across AI, travel, product, fintech, and consumer scale.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
