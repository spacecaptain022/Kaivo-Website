"use client";

import { motion, useReducedMotion } from "motion/react";

const flow = ["Intent", "Prepare", "Review", "Approve", "Done"] as const;

const containerVariants = {
  /** Reverse stagger when leaving viewport so it reads DONE → INTENT */
  hidden: {
    transition: {
      staggerChildren: 0.075,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.03,
      when: "beforeChildren" as const,
    },
  },
};

/** Slide in from the left and spring-pop — stagger on the container reads left → right */
const springPop = {
  type: "spring" as const,
  stiffness: 520,
  damping: 26,
  mass: 0.72,
};

const stepVariants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    x: -36,
    filter: "blur(3px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springPop,
  },
};

const doneVariants = {
  hidden: stepVariants.hidden,
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 440,
      damping: 20,
      mass: 0.72,
    },
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
              <span
                className={
                  step === "Done"
                    ? "rounded-xl border-2 border-[color-mix(in_srgb,var(--accent)_52%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))] px-3.5 py-2 shadow-[var(--card-shadow-soft)] md:px-3 md:py-1.5"
                    : "rounded-xl border border-[var(--line-strong)]/85 bg-[var(--surface)]/72 px-3.5 py-2 shadow-[var(--card-shadow-soft)] md:px-3 md:py-1.5"
                }
              >
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
      className="flex flex-wrap items-center gap-x-3 gap-y-4 text-[clamp(0.8rem,2.1vw,0.9375rem)] font-bold uppercase tracking-[0.14em] text-[var(--foreground)] md:gap-x-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-56px 0px" }}
    >
      {flow.map((step, i) => {
        const isDone = step === "Done";
        const pillClass = isDone
          ? "rounded-xl border-2 border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] px-3.5 py-2 shadow-[var(--card-shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)] backdrop-blur-sm md:px-3 md:py-1.5 md:backdrop-blur-none"
          : "rounded-xl border-2 border-[var(--accent-deep)]/20 bg-[var(--surface)]/85 px-3.5 py-2 shadow-[var(--card-shadow-soft)] backdrop-blur-sm md:border md:px-3 md:py-1.5 md:backdrop-blur-none";

        return (
          <motion.span
            key={step}
            className="flex items-center gap-2 md:gap-2.5"
            variants={isDone ? doneVariants : stepVariants}
          >
            {i > 0 && (
              <span className="text-[var(--muted)]" aria-hidden>
                →
              </span>
            )}
            <span className={pillClass}>{step}</span>
          </motion.span>
        );
      })}
    </motion.div>
  );
}
