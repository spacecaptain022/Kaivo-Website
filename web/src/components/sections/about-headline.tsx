"use client";

import { motion, useReducedMotion } from "motion/react";

const LINE =
  "Kaivo is building the delegation layer for modern life. We believe the next great consumer products won't just help people search better. They'll help people get things done.";
const words = LINE.split(/\s+/);

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.02,
      when: "beforeChildren" as const,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: "0.4em",
    filter: "blur(4px)",
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AboutHeadline() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h2 className="mx-auto max-w-5xl text-center text-[clamp(2.1rem,6vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--foreground)] [text-wrap:balance]">
        {words.map((word, i) => {
          const normalized = word.replace(/[^\w']/g, "").toLowerCase();
          const isAccentWord = normalized === "kaivo" || normalized === "done";
          return (
            <span
              key={`${i}-${word}`}
              className={isAccentWord ? "text-[var(--accent)]" : undefined}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </h2>
    );
  }

  return (
    <>
      <h2 className="sr-only">{LINE}</h2>
      <motion.h2
        aria-hidden
        className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-[0.26em] gap-y-1 text-center text-[clamp(2.1rem,6vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--foreground)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px 0px" }}
      >
        {words.map((word, i) => {
          const normalized = word.replace(/[^\w']/g, "").toLowerCase();
          const isAccentWord = normalized === "kaivo" || normalized === "done";
          return (
          <motion.span
            key={`${i}-${word}`}
            className={`inline-block will-change-[opacity,filter,transform] ${isAccentWord ? "text-[var(--accent)]" : ""}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
          );
        })}
      </motion.h2>
    </>
  );
}
