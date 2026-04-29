import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about";
import { ApprovalSection } from "@/components/sections/approval";
import { DelegationSection } from "@/components/sections/delegation";
import { DemoSection } from "@/components/sections/demo";
import { ContactSection } from "@/components/sections/contact";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { JoinCtaSection } from "@/components/sections/join-cta";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SpeaksSection } from "@/components/sections/speaks";
import { TeamSection } from "@/components/sections/team";
import { ThesisSection } from "@/components/sections/thesis";
import { TokenSection } from "@/components/sections/token";
import { ValueSection } from "@/components/sections/value";
import { WhyNowSection } from "@/components/sections/why-now";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden bg-[var(--surface)]">
        <Hero />
        <ProblemSection />
        <DelegationSection />
        <DemoSection />
        <SpeaksSection />
        <ApprovalSection />
        <ValueSection />
        <WhyNowSection />
        <AboutSection />
        <ThesisSection />
        <TokenSection />
        <TeamSection />
        <JoinCtaSection />
        <ContactSection />
      </main>
      <FinalCtaSection />
    </>
  );
}
