import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about";
import { ApprovalSection } from "@/components/sections/approval";
import { DelegationSection } from "@/components/sections/delegation";
import { DifferentiatorSection } from "@/components/sections/differentiator";
import { DemoSection } from "@/components/sections/demo";
import { ContactSection } from "@/components/sections/contact";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HomeRefreshReset } from "@/components/home-refresh-reset";
import { JoinCtaSection } from "@/components/sections/join-cta";
import { KvidSection } from "@/components/sections/kvid-section";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SpeaksSection } from "@/components/sections/speaks";
import { TeamSection } from "@/components/sections/team";
import { ThesisSection } from "@/components/sections/thesis";
import { ValueSection } from "@/components/sections/value";
import { WhyNowSection } from "@/components/sections/why-now";

export default function Home() {
  return (
    <>
      <HomeRefreshReset />
      <SiteHeader />
      <main className="overflow-x-hidden bg-[var(--surface)]">
        <Hero />
        <KvidSection />
        <ProblemSection />
        <DelegationSection />
        <DemoSection />
        <SpeaksSection />
        <ApprovalSection />
        <ValueSection />
        <WhyNowSection />
        <AboutSection />
        <DifferentiatorSection />
        <ThesisSection />
        <TeamSection />
        <JoinCtaSection />
        <ContactSection />
      </main>
      <FinalCtaSection />
    </>
  );
}
