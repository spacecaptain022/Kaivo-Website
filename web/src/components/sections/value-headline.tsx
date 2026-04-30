"use client";

import { motion, useReducedMotion } from "motion/react";

const popTransition = {
  type: "spring" as const,
  stiffness: 430,
  damping: 22,
  mass: 0.7,
};

const popVariants = {
  hidden: {
    opacity: 0.45,
    scale: 0.86,
    y: "0.22em",
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export function ValueHeadline() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] [text-wrap:balance]">
        <span className="text-[var(--foreground)]">
          The best travel product isn&apos;t
        </span>{" "}
        <span className="text-[var(--foreground)]">the one with</span>{" "}
        <span className="text-[var(--accent)]">the most options.</span>{" "}
        <span className="text-[var(--foreground)]">It&apos;s the one that</span>{" "}
        <span className="text-[var(--foreground)]">gives you </span>
        <span className="text-[var(--accent)]">your time back.</span>
      </h2>
    );
  }

  return (
    <motion.h2
      className="mx-auto mt-3 max-w-4xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] [text-wrap:balance]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px 0px" }}
    >
      <span className="text-[var(--foreground)]">
        The best travel product isn&apos;t
      </span>{" "}
      <span className="text-[var(--foreground)]">
        the one with
      </span>{" "}
      <motion.span
        className="inline-block text-[var(--accent)] will-change-[opacity,filter,transform]"
        variants={popVariants}
        transition={popTransition}
      >
        the most options.
      </motion.span>{" "}
      <span className="text-[var(--foreground)]">It&apos;s the one that gives you </span>
      <motion.span
        className="inline-block text-[var(--accent)] will-change-[opacity,filter,transform]"
        variants={popVariants}
        transition={{ ...popTransition, delay: 0.1 }}
      >
        your time back.
      </motion.span>
    </motion.h2>
  );
}
