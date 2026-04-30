import { FadeIn } from "@/components/ui/fade-in";
import { AboutCopyScroll } from "@/components/sections/about-copy-scroll";
import { AboutHeadline } from "@/components/sections/about-headline";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about" tone="paper">
      <FadeIn className="text-center">
        <SectionTag icon="briefcase">
          About Kaivo
        </SectionTag>
      </FadeIn>
      <div className="mt-6">
        <AboutHeadline />
      </div>
      <AboutCopyScroll />
    </SectionShell>
  );
}
