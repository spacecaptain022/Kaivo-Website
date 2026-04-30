"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function KvidSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const tiltRotateX = useTransform(scrollYProgress, [0.45, 1], [0, 6]);
  const tiltRotateZ = useTransform(scrollYProgress, [0.45, 1], [0, -1.8]);
  const tiltY = useTransform(scrollYProgress, [0.45, 1], [0, -16]);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--surface)] py-10 sm:py-12 md:py-14"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="mx-auto flex w-full max-w-6xl justify-center px-5 sm:px-8 lg:px-10"
        style={
          reduceMotion
            ? undefined
            : {
                rotateX: tiltRotateX,
                rotateZ: tiltRotateZ,
                y: tiltY,
                transformOrigin: "50% 8%",
              }
        }
      >
        <video
          src="/KVID.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-4xl rounded-2xl object-cover"
        />
      </motion.div>
    </section>
  );
}
