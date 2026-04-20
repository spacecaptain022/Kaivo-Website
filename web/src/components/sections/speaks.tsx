import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const examples = [
  "Book me a window seat if it’s under £40 extra.",
  "Anything with a brutal layover? Skip it.",
  "Can you leave after my 3pm meeting and get me there before midnight?",
];

export function SpeaksSection() {
  return (
    <SectionShell>
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
          It doesn’t feel like software. It feels like having someone on it.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          Kaivo isn’t a search bar with better manners. It’s a conversational
          travel operator. You can type or talk naturally. It can ask clarifying
          questions, explain why it picked something, and keep things moving
          without making you manage every step.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {examples.map((line, i) => (
          <FadeIn key={line} delay={0.08 + i * 0.04}>
            <blockquote className="surface-card h-full rounded-2xl p-4 text-[14px] leading-snug text-[var(--foreground)]">
              “{line}”
            </blockquote>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.18} className="mt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-deep)]">
        Natural language in. Real-world action out.
      </FadeIn>
    </SectionShell>
  );
}
