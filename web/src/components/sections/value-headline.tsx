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
        <span className="text-[var(--accent)]">the one with</span>{" "}
        <span className="text-[var(--foreground)]">the most options.</span>{" "}
        <span className="text-[var(--accent)]">It&apos;s the one that</span>{" "}
        <span className="text-[var(--foreground)]">gives you your time back.</span>
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
      <motion.span
        className="inline-block text-[var(--accent)] will-change-[opacity,filter,transform]"
        variants={popVariants}
        transition={popTransition}
      >
        the one with
      </motion.span>{" "}
      <span className="text-[var(--foreground)]">the most options.</span>{" "}
      <motion.span
        className="inline-block text-[var(--accent)] will-change-[opacity,filter,transform]"
        variants={popVariants}
        transition={{ ...popTransition, delay: 0.1 }}
      >
        It&apos;s the one that
      </motion.span>{" "}
      <span className="text-[var(--foreground)]">gives you your time back.</span>
    </motion.h2>
  );
}
