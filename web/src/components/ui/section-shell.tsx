import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate scroll-mt-28 border-b border-[var(--line)]/80 bg-[var(--background)] py-20 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-12 before:bg-gradient-to-b before:from-[var(--surface)]/55 before:to-transparent md:py-28",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-5 sm:px-8 lg:px-10",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
