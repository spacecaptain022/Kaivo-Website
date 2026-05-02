import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Size tokens only — glyphs use Unicons Line fills (`fill-current`). */
const iconBase =
  "h-6 w-6 shrink-0 fill-current sm:h-[26px] sm:w-[26px]";

/** One shared icon tile: field wash, deep stroke, matching teal-tinted shadow. */
const featureIconTileClass =
  "bg-[var(--accent-field)] text-[var(--accent-deep)] shadow-[0_10px_26px_-12px_rgba(15,61,56,0.22),0_3px_10px_-6px_rgba(15,61,56,0.14),inset_0_1px_0_0_rgba(255,255,255,0.55)]";

type FeatureRowCardProps = {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function FeatureRowCard({
  icon,
  title,
  description,
  className,
}: FeatureRowCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3.5 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_94%,var(--accent)_6%)] p-4 shadow-[var(--card-shadow-soft)] sm:gap-4 sm:p-5",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-[0.65rem]",
          featureIconTileClass,
        )}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-[16px]">
          {title}
        </div>
        {description != null && description !== "" ? (
          <p className="mt-1.5 text-[14px] font-normal leading-relaxed text-[var(--muted)] sm:mt-2 sm:text-[15px]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Same shell as FeatureRowCard; mint circle shows a zero-padded step index. */
export function NumberedRowCard({
  step,
  children,
  className,
}: {
  step: number;
  children: ReactNode;
  className?: string;
}) {
  const label = String(Math.min(99, Math.max(1, Math.floor(step)))).padStart(
    2,
    "0",
  );

  return (
    <div
      className={cn(
        "flex gap-3.5 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_94%,var(--accent)_6%)] p-4 shadow-[var(--card-shadow-soft)] sm:gap-4 sm:p-5",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-full sm:size-14",
          featureIconTileClass,
        )}
      >
        <span className="text-[12px] font-bold tabular-nums tracking-[0.05em] text-current sm:text-[13px]">
          {label}
        </span>
      </div>
      <div className="min-w-0 flex-1 self-center">
        <p className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-[16px]">
          {children}
        </p>
      </div>
    </div>
  );
}

/** Unicons Line — Iconscout (same glyphs as Ultimate Icon Library community pack). */

export function FeatureIconClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" />
    </svg>
  );
}

export function FeatureIconEye({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
    </svg>
  );
}

export function FeatureIconBanknote({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z" />
    </svg>
  );
}

export function FeatureIconShieldCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39ZM13.54,9.59l-2.69,2.7-.89-.9a1,1,0,0,0-1.42,1.42l1.6,1.6a1,1,0,0,0,1.42,0L15,11a1,1,0,0,0-1.42-1.42Z" />
    </svg>
  );
}

export function FeatureIconSparkles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm9.71-2.71L19.36,9V5.64a1,1,0,0,0-1-1H15.05L12.71,2.29a1,1,0,0,0-1.42,0L9,4.64H5.64a1,1,0,0,0-1,1V9L2.29,11.29a1,1,0,0,0,0,1.42l2.35,2.34v3.31a1,1,0,0,0,1,1H9l2.34,2.35a1,1,0,0,0,1.42,0l2.34-2.35h3.31a1,1,0,0,0,1-1V15.05l2.35-2.34A1,1,0,0,0,21.71,11.29Zm-4.05,2.64a1,1,0,0,0-.3.71v2.72H14.64a1,1,0,0,0-.71.3L12,19.59l-1.93-1.93a1,1,0,0,0-.71-.3H6.64V14.64a1,1,0,0,0-.3-.71L4.41,12l1.93-1.93a1,1,0,0,0,.3-.71V6.64H9.36a1,1,0,0,0,.71-.3L12,4.41l1.93,1.93a1,1,0,0,0,.71.3h2.72V9.36a1,1,0,0,0,.3.71L19.59,12Z" />
    </svg>
  );
}

export function FeatureIconCheckCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </svg>
  );
}

export function FeatureIconTrending({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z" />
    </svg>
  );
}

/** Branching paths — agents / trade-offs. */
export function FeatureIconReasonPaths({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    </svg>
  );
}

/** Code / programmable infra. */
export function FeatureIconCodeInfra({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

/**
 * Exchange / close-the-loop (Unicons `exchange`) — payment + settlement read.
 */
export function FeatureIconPaymentLoop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(iconBase, className)} aria-hidden>
      <path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z" />
    </svg>
  );
}
