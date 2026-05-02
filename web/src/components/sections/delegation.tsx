import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

import { DelegationFlow } from "./delegation-flow";

export function DelegationSection() {
  return (
    <SectionShell
      tone="default"
      className="[&::after]:hidden !overflow-visible"
    >
      <FadeIn>
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] md:text-left">
          The next interface isn’t search. It’s delegation.
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
        <p className="text-center md:text-left">
          You tell Kaivo what you need. It finds, compares, and prepares the
          best option. You review. You approve. It’s done.
        </p>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10 w-full md:w-auto">
        <DelegationFlow />
      </FadeIn>
      <FadeIn delay={0.12} className="mt-10">
        <p className="text-center text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] text-[var(--accent-ink)] md:text-left">
          Kaivo does the work. You do the deciding.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
