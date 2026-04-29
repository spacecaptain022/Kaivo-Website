"use client";

import { motion, useReducedMotion } from "motion/react";

export function AboutCopyScroll() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          We&apos;re starting with travel because it&apos;s one of the clearest
          examples of digital overload: too many options, too much repetition,
          too much time lost to admin. Kaivo turns that mess into one clear,
          controlled, approval-first flow.
        </p>
        <p className="font-medium text-[var(--foreground)]">
          Less browsing. Less admin. Better outcomes.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-[17px] leading-relaxed text-[var(--muted)]"
      initial={{ opacity: 0.18, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4, margin: "-56px 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p>
        We&apos;re starting with travel because it&apos;s one of the clearest
        examples of digital overload: too many options, too much repetition,
        too much time lost to admin. Kaivo turns that mess into one clear,
        controlled, approval-first flow.
      </p>
      <p className="font-medium text-[var(--foreground)]">
        Less browsing. Less admin. Better outcomes.
      </p>
    </motion.div>
  );
}
