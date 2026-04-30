import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionTagIcon =
  | "spark"
  | "users"
  | "bolt"
  | "cube"
  | "briefcase"
  | "heart"
  | "layers";

type SectionTagProps = {
  children: ReactNode;
  className?: string;
  variant?: "accent" | "neutral";
  icon?: SectionTagIcon;
};

function TagIcon({ icon }: { icon: SectionTagIcon }) {
  if (icon === "users") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M5.45 8.2a2.15 2.15 0 1 1 0-4.3 2.15 2.15 0 0 1 0 4.3zm5.1-.7a1.85 1.85 0 1 1 0-3.7 1.85 1.85 0 0 1 0 3.7zM2.8 12.6c0-1.75 1.52-3 3.35-3s3.35 1.25 3.35 3v.5H2.8v-.5zm7.9.5v-.4c0-.77-.23-1.45-.62-2 .25-.08.52-.13.8-.13 1.45 0 2.62.95 2.62 2.28v.25h-2.8z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "bolt") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M8.9 1.3L3.4 8h3.3L6.1 14.7l5.5-6.7H8.3l.6-6.7z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "cube") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M8 1.7l5.4 3.1v6.4L8 14.3l-5.4-3.1V4.8L8 1.7zm0 1.6L4.2 5.5 8 7.7l3.8-2.2L8 3.3zm-4 3.6V10L7.3 12V8.9L4 6.9zm8 0l-3.3 2v3.1l3.3-2V6.9z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "briefcase") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M5.6 2.4h4.8c.8 0 1.4.6 1.4 1.4v.8h1.1c.9 0 1.6.7 1.6 1.6v5.4c0 .9-.7 1.6-1.6 1.6H3.1c-.9 0-1.6-.7-1.6-1.6V6.2c0-.9.7-1.6 1.6-1.6h1.1v-.8c0-.8.6-1.4 1.4-1.4zm0 1.4v.8h4.8v-.8H5.6zm-2.5 3v4.8h9.8V6.8H3.1z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M8 14.1l-.6-.5C3.7 10.5 2 8.9 2 6.7A3 3 0 0 1 5 3.6c1.1 0 2.1.5 3 1.5.9-1 1.9-1.5 3-1.5a3 3 0 0 1 3 3.1c0 2.2-1.7 3.8-5.4 6.9l-.6.5z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "layers") {
    return (
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
        <path
          d="M8 1.9l6 3.2-6 3.2-6-3.2 6-3.2zm-4.8 5 4.8 2.6 4.8-2.6.8.4v.5L8 10.9 2.4 7.8v-.5l.8-.4zm0 2.7 4.8 2.6 4.8-2.6.8.4v.5L8 13.6l-5.6-3.1V10l.8-.4z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden focusable="false">
      <path
        d="M8 1.8L9.28 6.72 14.2 8l-4.92 1.28L8 14.2l-1.28-4.92L1.8 8l4.92-1.28L8 1.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SectionTag({
  children,
  className,
  variant = "neutral",
  icon = "spark",
}: SectionTagProps) {
  const styles =
    variant === "accent"
      ? "border border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_16%,var(--surface))] text-[var(--foreground)] shadow-[0_8px_22px_-12px_rgba(87,212,196,0.7)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)]"
      : "border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] text-[var(--muted)] shadow-[0_10px_20px_-16px_rgba(10,10,10,0.28)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
        styles,
        className,
      )}
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_24%,transparent)] text-[var(--accent-ink)]">
        <TagIcon icon={icon} />
      </span>
      <span>{children}</span>
    </span>
  );
}
