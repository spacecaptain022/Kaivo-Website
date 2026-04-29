import { FadeIn } from "@/components/ui/fade-in";
import { AboutCopyScroll } from "@/components/sections/about-copy-scroll";
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
      <AboutCopyScroll />
    </SectionShell>
  );
}
