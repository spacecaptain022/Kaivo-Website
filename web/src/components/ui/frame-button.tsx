import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

type FrameButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "ghost" | "inverted";
  href?: string;
};

export function FrameButton({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: FrameButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl border px-5 py-3 text-[13px] font-medium uppercase tracking-[0.12em] shadow-[var(--card-shadow-soft)] transition-[color,background-color,border-color,box-shadow,transform,filter] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const styles =
    variant === "primary"
      ? "border-[color-mix(in_srgb,var(--accent-deep)_40%,transparent)] bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)] hover:border-[color-mix(in_srgb,var(--accent-deep)_55%,transparent)] hover:shadow-[var(--card-shadow)] hover:-translate-y-[1px]"
      : variant === "inverted"
        ? "border-[var(--background)]/80 bg-[var(--background)] text-[var(--foreground)] hover:bg-[#e8e8e4] hover:-translate-y-[1px]"
        : "border-[var(--line-strong)] bg-[var(--surface)]/55 text-[var(--foreground)] backdrop-blur-md hover:border-[var(--foreground)]/55 hover:bg-[var(--surface)]/72 hover:-translate-y-[1px]";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn(base, styles, className)} {...props}>
      {children}
    </button>
  );
}
