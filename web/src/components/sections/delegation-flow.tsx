"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const flow = ["Intent", "Prepare", "Review", "Approve", "Done"] as const;

const accentLine = "bg-[var(--accent)]";

const lineViewport = { once: false, margin: "-56px 0px" } as const;

const lineEase = [0.22, 1, 0.36, 1] as const;

/** Short gray segment between Intent / Prepare / Review (mobile). */
function MobileGrayHopConnector({ delay }: { delay: number }) {
  return (
    <motion.span
      aria-hidden
      className="mx-1 inline-flex h-[2px] w-4 shrink-0 origin-center self-center sm:w-5"
      initial={{ opacity: 0, scaleX: 0.2 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={lineViewport}
      transition={{ duration: 0.38, delay, ease: lineEase }}
    >
      <span className="block h-full w-full rounded-full bg-[var(--line-strong)]" />
    </motion.span>
  );
}

/** Horizontal segment between pills on desktop (staggered via variants). */
function ConnectorHMotion({
  variants,
  tone,
}: {
  variants: Variants;
  tone: "gray" | "accent";
}) {
  const bar =
    tone === "gray"
      ? "bg-[var(--line-strong)]"
      : "bg-[color-mix(in_srgb,var(--accent)_72%,transparent)]";
  return (
    <motion.span
      aria-hidden
      variants={variants}
      className="inline-flex w-4 shrink-0 origin-center items-center justify-center md:w-5"
    >
      <span className={`block h-[2px] w-full rounded-full ${bar}`} />
    </motion.span>
  );
}

/**
 * Mobile: gray curve from end of step 1–2–3 (Review, right) down to Approve (left).
 */
function MobileCurveReviewToApprove({ animated = true }: { animated?: boolean }) {
  const pathD = "M 250 1 C 252 42 52 44 50 75";
  return (
    <div className="mx-auto w-full max-w-[20rem] px-1" aria-hidden>
      <svg
        className="mx-auto block h-[4.75rem] w-full max-w-[17.5rem] overflow-visible"
        viewBox="0 0 300 76"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {animated ? (
          <motion.path
            d={pathD}
            stroke="var(--line-strong)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={lineViewport}
            transition={{ duration: 0.5, delay: 0.18, ease: lineEase }}
          />
        ) : (
          <path
            d={pathD}
            stroke="var(--line-strong)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}

/** Approve→Done accent line runs first; Done pill uses `mobileDonePillDelay` after this completes. */
const mobileApproveDoneLine = { delay: 0.24, duration: 0.36 } as const;
const mobileDonePillDelay =
  mobileApproveDoneLine.delay + mobileApproveDoneLine.duration + 0.1;

/** Mobile: straight Kaivo accent between Approve and Done */
function MobileApproveDoneConnector({ animated = true }: { animated?: boolean }) {
  const inner = <span className={`block h-full w-full rounded-full ${accentLine}`} />;
  if (!animated) {
    return (
      <span
        aria-hidden
        className="mx-1.5 inline-flex h-[2px] min-w-[1.5rem] max-w-[6rem] flex-1"
      >
        {inner}
      </span>
    );
  }
  return (
    <motion.span
      aria-hidden
      className="mx-1.5 inline-flex h-[2px] min-w-[1.5rem] max-w-[6rem] flex-1 origin-center"
      initial={{ opacity: 0, scaleX: 0.15 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={lineViewport}
      transition={{
        duration: mobileApproveDoneLine.duration,
        delay: mobileApproveDoneLine.delay,
        ease: lineEase,
      }}
    >
      {inner}
    </motion.span>
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

const springPop = {
  type: "spring" as const,
  stiffness: 520,
  damping: 26,
  mass: 0.72,
};

const stepVariantsH = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    x: -36,
    y: 0,
    filter: "blur(3px)",
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const },
  },
  visible: { opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)", transition: springPop },
};

const doneVariantsH = {
  hidden: stepVariantsH.hidden,
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 440, damping: 20, mass: 0.72 },
  },
};

/** Desktop hop lines: same stagger slot as pills, slightly snappier spring. */
const connectorVariantsH: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0.12,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { type: "spring", stiffness: 560, damping: 30, mass: 0.42 },
  },
};

const typeClass =
  "text-[clamp(0.8rem,2.1vw,0.9375rem)] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]";

function mobileChipMotion(delay: number, doneChip: boolean) {
  if (doneChip) {
    return {
      initial: { opacity: 0, x: -40, y: 0, scale: 0.94, filter: "blur(4px)" },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      viewport: { once: false, margin: "-56px 0px" },
      transition: {
        type: "spring" as const,
        stiffness: 420,
        damping: 24,
        mass: 0.72,
        delay,
      },
    };
  }
  return {
    initial: { opacity: 0, y: -10, x: 0, scale: 0.92, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: false, margin: "-56px 0px" },
    transition: { ...springPop, delay },
  };
}

export function DelegationFlow() {
  const reduceMotion = useReducedMotion();

  const pillClass = (isDone: boolean) =>
    isDone
      ? "inline-flex items-center justify-center text-center rounded-xl border-2 border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] px-3.5 py-2 shadow-[var(--card-shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)] md:px-3 md:py-1.5"
      : "inline-flex items-center justify-center text-center rounded-xl border-2 border-[var(--accent-deep)]/20 bg-[var(--surface)]/85 px-3.5 py-2 shadow-[var(--card-shadow-soft)] md:border md:px-3 md:py-1.5";

  if (reduceMotion) {
    return (
      <>
        <div className={`flex w-full max-w-full flex-col items-center md:hidden ${typeClass}`}>
          <div className="mx-auto flex w-full max-w-[20rem] flex-col items-stretch gap-1">
            <div className="flex flex-nowrap items-center justify-center">
              <span className={`${pillClass(false)} shrink-0 border-0 px-3`}>{flow[0]}</span>
              <span
                aria-hidden
                className="mx-1 h-[2px] w-4 shrink-0 self-center rounded-full bg-[var(--line-strong)] sm:w-5"
              />
              <span className={`${pillClass(false)} shrink-0 border-0 px-3`}>{flow[1]}</span>
              <span
                aria-hidden
                className="mx-1 h-[2px] w-4 shrink-0 self-center rounded-full bg-[var(--line-strong)] sm:w-5"
              />
              <span className={`${pillClass(false)} shrink-0 border-0 px-3`}>{flow[2]}</span>
            </div>
            <MobileCurveReviewToApprove animated={false} />
            <div className="flex w-full flex-nowrap items-center justify-center">
              <span className={`${pillClass(false)} shrink-0 border-0 px-3`}>{flow[3]}</span>
              <MobileApproveDoneConnector animated={false} />
              <span className={`${pillClass(true)} shrink-0 border-0 px-3`}>{flow[4]}</span>
            </div>
          </div>
        </div>

        <div
          className={`hidden w-full max-w-full flex-row flex-nowrap items-center justify-start gap-0 md:flex ${typeClass}`}
        >
          {flow.map((step, i) => (
            <Fragment key={step}>
              {i > 0 && (
                <span
                  aria-hidden
                  className={`inline-block h-[2px] w-4 shrink-0 rounded-full md:w-5 ${
                    i < 4 ? "bg-[var(--line-strong)]" : "bg-[color-mix(in_srgb,var(--accent)_72%,transparent)]"
                  }`}
                />
              )}
              <span className={pillClass(step === "Done")}>{step}</span>
            </Fragment>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {/*
        Plain wrapper: FadeIn on DelegationSection already fades this block in.
        A nested motion opacity here kept children (including the curve SVG) at 0 on mobile.
      */}
      <div className={`flex w-full max-w-full flex-col items-center md:hidden ${typeClass}`}>
        <div className="mx-auto flex w-full max-w-[20rem] flex-col items-stretch gap-1">
          <div className="flex flex-nowrap items-center justify-center">
            <motion.span
              className={`${pillClass(false)} shrink-0 border-0 px-3`}
              {...mobileChipMotion(0, false)}
            >
              {flow[0]}
            </motion.span>
            <MobileGrayHopConnector delay={0.04} />
            <motion.span
              className={`${pillClass(false)} shrink-0 border-0 px-3`}
              {...mobileChipMotion(0.08, false)}
            >
              {flow[1]}
            </motion.span>
            <MobileGrayHopConnector delay={0.115} />
            <motion.span
              className={`${pillClass(false)} shrink-0 border-0 px-3`}
              {...mobileChipMotion(0.16, false)}
            >
              {flow[2]}
            </motion.span>
          </div>
          <MobileCurveReviewToApprove />
          <div className="flex w-full flex-nowrap items-center justify-center overflow-visible">
            <motion.span
              className={`${pillClass(false)} shrink-0 border-0 px-3`}
              {...mobileChipMotion(0.22, false)}
            >
              {flow[3]}
            </motion.span>
            <MobileApproveDoneConnector />
            <motion.span
              className={`${pillClass(true)} shrink-0 border-0 px-3`}
              {...mobileChipMotion(mobileDonePillDelay, true)}
            >
              {flow[4]}
            </motion.span>
          </div>
        </div>
      </div>

      <motion.div
        className={`hidden w-full max-w-full flex-row flex-nowrap items-center justify-start gap-0 md:flex ${typeClass}`}
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
                <ConnectorHMotion
                  variants={connectorVariantsH}
                  tone={i < 4 ? "gray" : "accent"}
                />
              )}
              <motion.span
                className={pillClass(isDone)}
                variants={isDone ? doneVariantsH : stepVariantsH}
              >
                {step}
              </motion.span>
            </Fragment>
          );
        })}
      </motion.div>
    </>
  );
}
