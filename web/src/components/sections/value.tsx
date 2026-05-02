"use client";

import type { ReactNode } from "react";

import {
  FeatureIconCheckCircle,
  FeatureIconClock,
  FeatureIconTrending,
  FeatureRowCard,
} from "@/components/ui/feature-row-card";
import { SixtySecondTagline } from "@/components/sections/sixty-second-tagline";
import { ValueHeadline } from "@/components/sections/value-headline";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionTag } from "@/components/ui/section-tag";
import { motion, useReducedMotion } from "motion/react";

const cards: {
  title: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "Saves hours",
    body: "Less searching. Less comparing. Less admin.",
    icon: <FeatureIconClock />,
  },
  {
    title: "Gets it right",
    body:
      "Built around your timing, bags, budget, airline preferences, and trade-offs.",
    icon: <FeatureIconCheckCircle />,
  },
  {
    title: "Improves with you",
    body: "The more you use Kaivo, the less you have to explain.",
    icon: <FeatureIconTrending />,
  },
];

export function ValueSection() {
  const reduceMotion = useReducedMotion();
  const atRest = { opacity: 1, y: 0 };
  const above = { opacity: 0, y: -100 };

  return (
    <SectionShell tone="surface">
      <div className="text-center">
        <SectionTag icon="heart">
          Why people will love it
        </SectionTag>
        <ValueHeadline />
      </div>
      <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 justify-items-center gap-6 overflow-visible pt-2 sm:gap-8 md:grid-cols-3 md:items-stretch md:justify-items-center md:gap-6 lg:gap-8">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            className="flex h-full w-full max-w-sm"
            initial={reduceMotion ? atRest : above}
            whileInView={atRest}
            viewport={{ once: false, amount: 0.3, margin: "0px 0px -10% 0px" }}
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
            <FeatureRowCard
              className="h-full w-full"
              icon={c.icon}
              title={c.title}
              description={c.body}
            />
          </motion.article>
        ))}
      </div>
      <div className="relative mt-12 overflow-hidden rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-field)]/40 px-6 py-9 text-center shadow-[var(--card-shadow-soft)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url(/60-second-bg.png)" }}
        />
        <SixtySecondTagline />
      </div>
    </SectionShell>
  );
}
