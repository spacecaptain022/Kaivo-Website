import { KaivoMark } from "@/components/kaivo-mark";
import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";

export function FinalCtaSection() {
  return (
    <footer
      id="final-cta"
      className="border-t border-[var(--line)] bg-gradient-to-b from-[var(--surface)]/65 to-[var(--background)] pb-16 pt-20 md:pb-20 md:pt-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Stop searching.{" "}
            <span className="text-[var(--accent)]">Start delegating.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
          <p>
            The first people to travel with Kaivo won’t just save time. They’ll
            wonder why booking ever took this long.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <FrameButton href="#waitlist">Get early access</FrameButton>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-6 text-[13px] text-[var(--muted)]">
          Join for early access, beta invites, and private product drops.
        </FadeIn>
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--line)]/80 pt-8 text-[12px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            <KaivoMark className="h-6 w-6 shrink-0" />
            Kaivo
          </span>
          <p>© {new Date().getFullYear()} Kaivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
