import { FadeIn } from "@/components/ui/fade-in";
import { AboutHeadline } from "@/components/sections/about-headline";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about" tone="paper">
      <FadeIn className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          About Kaivo
        </p>
      </FadeIn>
      <div className="mt-6">
        <AboutHeadline />
      </div>
      <FadeIn
        delay={0.08}
        className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-[17px] leading-relaxed text-[var(--muted)]"
      >
        <p>
          We&apos;re starting with travel because it&apos;s one of the clearest
          examples of digital overload: too many options, too much repetition,
          too much time lost to admin. Kaivo turns that mess into one clear,
          controlled, approval-first flow.
        </p>
        <p className="font-medium text-[var(--foreground)]">
          Less browsing. Less admin. Better outcomes.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
