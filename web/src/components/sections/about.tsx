import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <FadeIn>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">
          About Kaivo
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          Kaivo is building the delegation layer for modern life. We believe the
          next great consumer products won’t just help people search better.
          They’ll help people get things done.
        </p>
        <p>
          We’re starting with travel because it’s one of the clearest examples
          of digital overload: too many options, too much repetition, too much
          time lost to admin. Kaivo turns that mess into one clear, controlled,
          approval-first flow.
        </p>
        <p className="font-medium text-[var(--foreground)]">
          Less browsing. Less admin. Better outcomes.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
