import type { ReactNode } from "react";

const cardChrome =
  "relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] shadow-[0_18px_38px_-28px_rgba(0,0,0,0.42),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-[var(--foreground)]/[0.04]";

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
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_10%,transparent)] to-transparent opacity-70"
      />
      <div
        className="relative flex h-[3.3rem] w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-[var(--accent)]/20 bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_28%,white_72%)] via-[color-mix(in_srgb,var(--accent)_20%,white_80%)] to-[color-mix(in_srgb,var(--accent)_14%,white_86%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_8px_18px_-12px_rgba(6,51,46,0.34)]"
        aria-hidden
      >
        <span className="text-[11px] font-semibold tabular-nums leading-none tracking-[0.08em] text-[var(--accent-ink)]">
          {String(step).padStart(2, "0")}
        </span>
      </div>
      <div className="relative min-w-0 flex-1 self-center text-[15px] font-medium leading-relaxed text-[var(--foreground)]">
        {children}
      </div>
    </div>
  );
}
