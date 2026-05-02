import { cn } from "@/lib/cn";

/** NE corner stroke (no stem), centered for rotate — matches hero waitlist glyph. */
export function CornerArrowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("block shrink-0 origin-center", className)}
      aria-hidden
    >
      <g transform="translate(12 12)">
        <path
          d="M4 -4H-4M4 -4V4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
