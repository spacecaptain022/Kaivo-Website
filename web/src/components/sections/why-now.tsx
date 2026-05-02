"use client";

import {
  FeatureIconCodeInfra,
  FeatureIconPaymentLoop,
  FeatureIconReasonPaths,
  FeatureRowCard,
} from "@/components/ui/feature-row-card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const caps: { text: string; icon: ReactNode }[] = [
  {
    text: "Agents that reason through real travel trade-offs",
    icon: <FeatureIconReasonPaths />,
  },
  {
    text: "Travel infrastructure you can program in real time",
    icon: <FeatureIconCodeInfra />,
  },
  {
    text: "Payments and approvals that close the loop on the spot",
    icon: <FeatureIconPaymentLoop />,
  },
];

export function WhyNowSection() {
  const reduceMotion = useReducedMotion();
  const atRest = { opacity: 1, y: 0 };
  const above = { opacity: 0, y: -96 };

  return (
    <SectionShell>
      <div className="text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">
            Why now? AI can finally act, not just answer.
          </h2>
        </FadeIn>
        <FadeIn
          delay={0.06}
          className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]"
        >
          <p className="text-balance">
            AI can now understand intent, handle multi-step workflows, and prepare
            transactions in real time.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6 flex justify-center">
          <SectionTag variant="accent" icon="bolt" className="text-[10px]">
            What’s possible now
          </SectionTag>
        </FadeIn>
      </div>
      <div className="mx-auto mt-6 flex w-full max-w-lg flex-col items-center space-y-4 overflow-visible pt-2 sm:max-w-xl">
        {caps.map(({ text, icon }, i) => (
          <motion.div
            key={text}
            className="w-full"
            initial={reduceMotion ? atRest : above}
            whileInView={atRest}
            viewport={{ once: false, amount: 0.28, margin: "0px 0px -10% 0px" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1,
                  }
            }
          >
            <FeatureRowCard className="w-full" icon={icon} title={text} />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
