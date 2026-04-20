import type { ReactNode } from "react";

const cardChrome =
  "surface-card rounded-2xl ring-1 ring-[var(--foreground)]/[0.04]";

/**
 * Capability row — shares chrome with Value / Demo cards. Step index reads as
 * a small “gate / sequence” mark in brand teal fields (cohesive with the rest
 * of the UI, not a separate illustration style).
 */
export function RouteEdgeCard({
  children,
  step,
}: {
  children: ReactNode;
  step: 1 | 2 | 3;
}) {
  return (
    <div className={`flex gap-4 p-5 pl-4 sm:gap-5 sm:pl-5 ${cardChrome}`}>
      <div
        className="flex h-[3.25rem] w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[var(--accent-field)]/80 to-[var(--accent-field)]/35 ring-1 ring-[var(--accent)]/20"
        aria-hidden
      >
        <span className="text-[11px] font-semibold tabular-nums leading-none text-[var(--accent-ink)]">
          {String(step).padStart(2, "0")}
        </span>
      </div>
      <div className="min-w-0 flex-1 self-center text-[15px] leading-relaxed text-[var(--foreground)]">
        {children}
      </div>
    </div>
  );
}
