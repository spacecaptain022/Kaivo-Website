"use client";

import { motion, useReducedMotion } from "motion/react";

const flow = ["Intent", "Prepare", "Review", "Approve", "Done"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function DelegationFlow() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center gap-2 md:gap-2.5 font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[clamp(0.8rem,2.1vw,0.9375rem)]">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-[var(--muted)]" aria-hidden>
                  →
                </span>
              )}
              <span className="rounded-xl border border-[var(--line-strong)]/85 bg-[var(--surface)]/72 px-3.5 py-2 shadow-[var(--card-shadow-soft)] md:px-3 md:py-1.5">
                {step}
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-wrap items-center gap-2 md:gap-3 font-bold uppercase tracking-[0.14em] text-[var(--foreground)]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-4 text-[clamp(0.8rem,2.1vw,0.9375rem)] md:gap-x-4">
        {flow.map((step, i) => (
          <motion.span
            key={step}
            className="flex items-center gap-2 md:gap-2.5"
            variants={itemVariants}
          >
            {i > 0 && (
              <motion.span className="text-[var(--muted)]" aria-hidden layout>
                →
              </motion.span>
            )}
            <span className="rounded-xl border-2 border-[var(--accent-deep)]/20 bg-[var(--surface)]/85 px-3.5 py-2 shadow-[var(--card-shadow-soft)] backdrop-blur-sm md:border md:px-3 md:py-1.5 md:backdrop-blur-none">
              {step}
            </span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
