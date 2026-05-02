"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  FeatureIconBanknote,
  FeatureIconEye,
  FeatureIconShieldCheck,
  FeatureIconSparkles,
  FeatureRowCard,
} from "@/components/ui/feature-row-card";
import { SectionShell } from "@/components/ui/section-shell";
import { motion, useReducedMotion } from "motion/react";

const trustRows: {
  text: string;
  icon: ReactNode;
}[] = [
  {
    text: "Every decision is visible",
    icon: <FeatureIconEye />,
  },
  {
    text: "Every cost is clear",
    icon: <FeatureIconBanknote />,
  },
  {
    text: "Every action happens with approval",
    icon: <FeatureIconShieldCheck />,
  },
  {
    text: "Your preferences get smarter over time",
    icon: <FeatureIconSparkles />,
  },
];

export function ApprovalSection() {
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <SectionShell
      id="stay-in-control"
      tone="paper"
      innerClassName="max-w-4xl"
    >
      <div className="text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
          Delegation only works if you stay in control.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-[17px] font-normal leading-[1.55] text-[var(--muted)]">
          Kaivo never turns trust into guesswork. You see what was chosen, why it was chosen, what it costs, and what happens next. Then you approve.
        </p>

        <ul
          className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch sm:gap-4 md:gap-5"
          role="list"
        >
          {trustRows.map(({ text, icon }, i) => {
            const topRow = i < 2;
            const restX = isDesktop ? (topRow ? -32 : 32) : 0;
            const offX = isDesktop ? (topRow ? -140 : 140) : 0;
            const atRest = { opacity: 1, x: restX };
            const offScreen = { opacity: 0, x: offX };

            return (
              <motion.li
                key={text}
                className="min-w-0 w-full max-w-[32rem] sm:max-w-none"
                initial={reduceMotion ? atRest : offScreen}
                whileInView={atRest}
                viewport={{ once: false, amount: 0.32, margin: "0px 0px -12% 0px" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.68,
                        ease: [0.22, 1, 0.36, 1],
                        delay: isDesktop ? i * 0.08 : 0,
                      }
                }
              >
                <FeatureRowCard
                  className="h-full w-full"
                  icon={icon}
                  title={text}
                />
              </motion.li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-balance text-[clamp(1.15rem,2.2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--accent-ink)]">
          Always asks first. Never hides the logic.
        </p>
      </div>
    </SectionShell>
  );
}
