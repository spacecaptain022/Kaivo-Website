"use client";

import { useEffect, useState } from "react";

import { KaivoMark } from "@/components/kaivo-mark";

type AppBootLoaderProps = {
  children: React.ReactNode;
};

export function AppBootLoader({ children }: AppBootLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-[200] transition-opacity duration-500",
          isVisible ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!isVisible}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          aria-hidden
          poster="/hero/airplane-island.png"
          className="pointer-events-none h-full w-full object-cover object-[center_35%]"
        >
          <source src="/hero/airplane-island-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,5,0.96)_0%,rgba(5,6,8,0.9)_45%,rgba(2,2,4,0.96)_100%)]" />
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--accent)_9%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(87,212,196,0.12),transparent_56%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <KaivoMark
            className={[
              "h-20 w-20 text-[var(--accent)] animate-[spin_2.2s_cubic-bezier(0.4,0,0.2,1)_infinite] transition-opacity duration-400 sm:h-24 sm:w-24",
              isVisible ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        </div>
      </div>

      {children}
    </>
  );
}
