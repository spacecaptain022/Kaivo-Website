import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const bubbles = [
  {
    quote: "Book me a window seat if it's under £40 extra.",
    highlight: false,
  },
  {
    quote: "Anything with a brutal layover? Skip it.",
    highlight: false,
  },
  {
    quote:
      "My meeting in central Paris ends at 3pm, and I need to be back in London by 8pm.",
    highlight: true,
  },
] as const;

export function SpeaksSection() {
  return (
    <SectionShell tone="surface" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
          It doesn&apos;t feel like software. It feels like someone handling it.
        </h2>
      </FadeIn>
      <FadeIn
        delay={0.06}
        className="mt-8 max-w-2xl text-[17px] font-medium leading-relaxed text-[var(--muted)]"
      >
        <p>
          Kaivo isn&apos;t a better search bar. It&apos;s a conversational travel
          operator. You describe what you want. It takes care of the rest.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
        {bubbles.map((item, i) => (
          <FadeIn key={`speak-${i}`} delay={0.1 + i * 0.05}>
            <figure
              className={
                item.highlight
                  ? "flex h-full min-h-[7.5rem] flex-col rounded-2xl border border-[var(--accent-deep)]/25 bg-gradient-to-br from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)] p-5 shadow-[var(--card-shadow-soft)]"
                  : "surface-card flex h-full min-h-[7.5rem] flex-col rounded-2xl p-5"
              }
            >
              <blockquote
                className={
                  item.highlight
                    ? "text-[15px] font-medium leading-snug text-[var(--accent-ink)]"
                    : "text-[15px] font-medium leading-snug text-[var(--foreground)]"
                }
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.22}>
        <p className="mt-10 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)] md:text-[12px]">
          Natural language in. Real-world action out.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
