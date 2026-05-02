import { KaivoMark } from "@/components/kaivo-mark";
import { cn } from "@/lib/cn";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

type FinalCtaSectionProps = {
  /** Omit default top rule (e.g. tokenomics page sits flush after last section). */
  hideTopBorder?: boolean;
};

export function FinalCtaSection({ hideTopBorder }: FinalCtaSectionProps = {}) {
  return (
    <footer
      className={cn(
        "relative z-10 bg-[var(--background)] text-[var(--foreground)]",
        hideTopBorder ? "border-t-0" : "border-t border-[var(--line)]",
      )}
    >
      <div className="mx-auto max-w-6xl px-5 py-[clamp(2.25rem,6vw,3.5rem)] sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-[clamp(1.25rem,3.4vw,2rem)]">
          <a
            href="/"
            className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-90 sm:flex-row sm:gap-6"
            aria-label="Kaivo — Home"
          >
            <KaivoMark
              className="h-[clamp(4rem,14vw,7rem)] w-[clamp(4rem,14vw,7rem)] shrink-0 text-[var(--accent)]"
            />
            <span className="text-[clamp(2.75rem,10vw,6.5rem)] font-semibold leading-none tracking-[-0.045em] text-[var(--foreground)]">
              Kaivo
            </span>
          </a>

          <nav
            className="flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[14px] font-medium text-[var(--muted)] sm:gap-x-10"
            aria-label="Footer"
          >
            {menuLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors duration-150 hover:text-[var(--foreground)] focus-visible:text-[var(--foreground)] focus-visible:outline-none focus-visible:underline"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex w-full justify-center">
            <a
              href="https://x.com/askkaivo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaivo on X (opens in a new tab)"
              className="inline-flex shrink-0 items-center justify-center rounded-md text-[var(--foreground)] transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
          </div>

          <p className="text-center text-[12px] leading-relaxed text-[var(--muted)]">
            © 2026 Kaivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
