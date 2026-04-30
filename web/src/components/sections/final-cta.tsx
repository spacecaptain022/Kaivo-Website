import { KaivoMark } from "@/components/kaivo-mark";

const menuLinks = [
  { href: "#product", label: "Product" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function FinalCtaSection() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-5 py-[clamp(3.75rem,10vw,6rem)] sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-[clamp(2.25rem,6vw,3.5rem)]">
          <a
            href="#top"
            className="group flex flex-col items-center gap-5 transition-opacity hover:opacity-90 sm:flex-row sm:gap-10"
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
            className="flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[14px] font-medium text-[var(--muted)] sm:gap-x-12"
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
            <a
              href="https://x.com/askkaivo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] transition-colors duration-150 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:underline"
            >
              X (Twitter)
            </a>
          </nav>

          <p className="text-center text-[12px] leading-relaxed text-[var(--muted)]">
            © 2026 Kaivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
