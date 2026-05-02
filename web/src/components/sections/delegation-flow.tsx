"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const flow = ["Intent", "Prepare", "Review", "Approve", "Done"] as const;

function ArrowDown() {
  return (
    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" aria-hidden style={{ opacity: 0.72 }}>
      <line x1="6" y1="0" x2="6" y2="15" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 11 L6 19 L11 11" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden style={{ opacity: 0.72 }}>
      <line x1="0" y1="6" x2="15" y2="6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 1 L19 6 L11 11" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

const stepVariantsH = {
  hidden: { opacity: 0, scale: 0.82, x: -36, filter: "blur(3px)", transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const } },
  visible: { opacity: 1, scale: 1, x: 0, filter: "blur(0px)", transition: springPop },
};

const stepVariantsV = {
  hidden: { opacity: 0, scale: 0.88, y: -24, filter: "blur(3px)", transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const } },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: springPop },
};

const doneVariantsH = {
  hidden: stepVariantsH.hidden,
  visible: { opacity: 1, scale: 1, x: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 440, damping: 20, mass: 0.72 } },
};

const doneVariantsV = {
  hidden: stepVariantsV.hidden,
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 440, damping: 20, mass: 0.72 } },
};

export function DelegationFlow() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const stepVariants = isMobile ? stepVariantsV : stepVariantsH;
  const doneVariants = isMobile ? doneVariantsV : doneVariantsH;

  const pillClass = (isDone: boolean) =>
    isDone
      ? "rounded-xl border-2 border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] px-3.5 py-2 shadow-[var(--card-shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)] md:px-3 md:py-1.5"
      : "rounded-xl border-2 border-[var(--accent-deep)]/20 bg-[var(--surface)]/85 px-3.5 py-2 shadow-[var(--card-shadow-soft)] md:border md:px-3 md:py-1.5";

  if (reduceMotion) {
    return (
      <div className="flex w-full flex-col items-center gap-2 text-[clamp(0.8rem,2.1vw,0.9375rem)] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-3">
        {flow.map((step, i) => (
          <Fragment key={step}>
            {i > 0 && (
              <span className="flex w-full items-center justify-center md:w-auto">
                <span className="md:hidden"><ArrowDown /></span>
                <span className="hidden md:flex"><ArrowRight /></span>
              </span>
            )}
            <span className={pillClass(step === "Done")}>{step}</span>
          </Fragment>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-2 text-[clamp(0.8rem,2.1vw,0.9375rem)] font-bold uppercase tracking-[0.14em] text-[var(--foreground)] md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-56px 0px" }}
    >
      {flow.map((step, i) => {
        const isDone = step === "Done";
        return (
          <Fragment key={step}>
            {i > 0 && (
              <span className="flex w-full items-center justify-center md:w-auto">
                <span className="md:hidden"><ArrowDown /></span>
                <span className="hidden md:flex"><ArrowRight /></span>
              </span>
            )}
            <motion.span
              className={pillClass(isDone)}
              variants={isDone ? doneVariants : stepVariants}
            >
              {step}
            </motion.span>
          </Fragment>
        );
      })}
    </motion.div>
  );
}
