import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
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
      <FadeIn className="flex justify-start">
        <SectionTag icon="spark" variant="accent">
          Conversational control
        </SectionTag>
      </FadeIn>
      <FadeIn>
        <h2 className="mt-4 max-w-3xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
          It doesn&apos;t feel like software. It feels like someone&apos;s got
          this for you.
        </h2>
      </FadeIn>
      <FadeIn
        delay={0.06}
        className="mt-7 max-w-2xl text-[17px] font-normal leading-relaxed text-[var(--muted)]"
      >
        <p>
          Kaivo isn&apos;t a better search bar. It&apos;s a conversational travel
          operator. You describe what you want. It takes care of the rest.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {bubbles.map((item, i) => (
          <FadeIn key={`speak-${i}`} delay={0.1 + i * 0.05}>
            <figure
              className={
                item.highlight
                  ? "flex h-full min-h-[8.25rem] flex-col rounded-2xl border border-[color-mix(in_srgb,var(--accent)_35%,var(--line))] bg-[color-mix(in_srgb,var(--accent-field)_62%,var(--surface)_38%)] p-5 shadow-[var(--card-shadow-soft)]"
                  : "flex h-full min-h-[8.25rem] flex-col rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_96%,white_4%)] p-5 shadow-[var(--card-shadow-soft)]"
              }
            >
              <blockquote
                className={
                  item.highlight
                    ? "text-[15px] font-medium leading-relaxed text-[var(--accent-ink)]"
                    : "text-[15px] font-medium leading-relaxed text-[var(--foreground)]"
                }
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.22}>
        <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_14%,transparent)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-4 py-2 shadow-[0_10px_20px_-16px_rgba(10,10,10,0.28)]">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
          <p className="text-left text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)] md:text-[12px]">
            Natural language in. Real-world action out.
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
