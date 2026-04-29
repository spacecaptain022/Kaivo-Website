"use client";

import { motion, useReducedMotion } from "motion/react";

const LINE = "Your next trip, booked in under 60 seconds.";
const words = LINE.trim().split(/\s+/);

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      when: "beforeChildren",
    },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: {
    opacity: 0,
    y: "0.5em",
    filter: "blur(5px)",
    transition: { duration: 0.26, ease: easeOut },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: easeOut },
  },
};

export function SixtySecondTagline() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <p className="relative z-10 mx-auto max-w-[min(100%,52ch)] text-center text-[clamp(1.35rem,2.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.03em] text-[var(--foreground)]">
        {LINE}
      </p>
    );
  }

  return (
    <>
      <p className="sr-only">{LINE}</p>
      <motion.p
        aria-hidden
        className="relative z-10 mx-auto flex max-w-[min(100%,52ch)] flex-wrap justify-center gap-x-[0.3em] gap-y-1 text-center text-[clamp(1.35rem,2.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.03em] text-[var(--foreground)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-64px 0px" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${i}-${word}`}
            variants={wordVariants}
            className="inline-block will-change-[opacity,filter,transform]"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}
