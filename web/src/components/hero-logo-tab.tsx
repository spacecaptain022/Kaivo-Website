import Link from "next/link";
import { KaivoMark } from "@/components/kaivo-mark";

/** Kaivo-accent “tab” docking from the top edge with the mark (travel-landing style). */
export function HeroLogoTab() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center pt-[env(safe-area-inset-top,0)]">
      <Link
        href="#top"
        className={[
          "pointer-events-auto flex h-[3.625rem] w-[6.875rem] items-center justify-center",
          "rounded-b-[3.625rem] bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent-mid)] px-2.5 py-1.5",
          "shadow-[0_14px_40px_-10px_rgba(38,229,201,0.55),0_4px_12px_-6px_rgba(6,51,46,0.12)] ring-1 ring-[var(--accent-deep)]/25",
          "transition-[filter,transform] hover:brightness-[1.03] hover:shadow-[0_18px_44px_-12px_rgba(38,229,201,0.5)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-deep)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        ].join(" ")}
        aria-label="Kaivo — Home"
      >
        <KaivoMark className="h-8 w-8 shrink-0 text-[var(--accent-ink)]" />
      </Link>
    </div>
  );
}
