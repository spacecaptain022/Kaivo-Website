"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type SectionTone =
  | "default"
  | "paper"
  | "brand"
  | "surface"
  | "panel";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Covers the section backdrop (fills viewport width); stacks above tonal pseudos but below children. */
  overlay?: ReactNode;
  /** Background & atmosphere — rhythms the page beyond flat gray slabs */
  tone?: SectionTone;
  /** Default on: bottom rule between sections. Turn off when this shell is the last block before a flush footer. */
  showBorderBottom?: boolean;
};

const toneBg: Record<SectionTone, string> = {
  default:
    "bg-[var(--background)]",
  paper:
    "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--surface)_93%,var(--panel)_7%)_0%,var(--background)_100%)]",
  brand:
    "bg-[linear-gradient(180deg,var(--accent-field)_0%,rgba(245,245,245,0.96)_52%,var(--background)_100%)]",
  surface: "bg-[var(--surface)]",
  panel:
    "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--panel)_45%,var(--background)_55%)_0%,var(--background)_100%)]",
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  overlay,
  tone = "default",
  showBorderBottom = true,
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();
  const shellClassName = cn(
    "relative isolate scroll-mt-[7.25rem] overflow-hidden py-24 md:py-32",
    showBorderBottom &&
      "border-b border-[color-mix(in_srgb,var(--foreground)_6%,transparent)]",
    toneBg[tone],
    /* soft top vignette — section feels lifted from neighbour */
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[0] before:h-24 before:bg-gradient-to-b before:from-[var(--surface)]/75 before:to-transparent",
    /* ambient Kaivo wash (very subtle depth) */
    "after:pointer-events-none after:absolute after:-right-[15%] after:-top-[45%] after:z-[0] after:h-[min(480px,75vw)] after:w-[min(480px,75vw)] after:rounded-full after:bg-[radial-gradient(circle,var(--accent)_0%,transparent_68%)] after:opacity-[0.056] after:blur-3xl",
    className,
  );

  const content = (
    <>
      {overlay != null ? (
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-visible">
          {overlay}
        </div>
      ) : null}
      <div
        className={cn(
          "relative z-[8] mx-auto max-w-6xl px-5 sm:px-8 lg:px-10",
          innerClassName,
        )}
      >
        {children}
      </div>
    </>
  );

  if (reduceMotion) {
    return (
      <section id={id} className={shellClassName}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={shellClassName}
      initial={{ opacity: 0.92, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.section>
  );
}
