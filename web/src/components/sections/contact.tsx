import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionShell } from "@/components/ui/section-shell";

const channels = [
  {
    label: "Partnerships",
    blurb: "Airlines, rails, platforms, and ecosystem integrations.",
    email: "partner@kaivo.com",
  },
  {
    label: "Investors",
    blurb: "Strategy, traction, and long-term company building.",
    email: "invest@kaivo.com",
  },
  {
    label: "Press & media",
    blurb: "Interviews, features, and product story coverage.",
    email: "press@kaivo.com",
  },
  {
    label: "Careers",
    blurb: "Design, product, and engineering roles at Kaivo.",
    email: "careers@kaivo.com",
  },
] as const;

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      className="border-t border-[color-mix(in_srgb,var(--foreground)_6%,transparent)] bg-[linear-gradient(to_bottom,var(--surface)_0%,color-mix(in_srgb,var(--background)_94%,transparent)_85%)]"
    >
      <FadeIn className="flex justify-center">
        <SectionTag icon="users" variant="accent">
          Let&apos;s connect
        </SectionTag>
      </FadeIn>
      <FadeIn>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">
          Contact Kaivo
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mx-auto mt-7 max-w-3xl">
        <p className="text-center text-[17px] leading-relaxed text-[var(--muted)]">
          We&apos;re reworking how decisions get done, starting with flights.
          If you want to build, fund, or tell this story with us, we&apos;d love to hear from you.
        </p>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-8">
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {channels.map(({ label, blurb, email }) => (
            <li
              key={email}
              className="group rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_95%,white_5%)] px-5 py-4 text-[15px] shadow-[var(--card-shadow-soft)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--line))] hover:shadow-[0_18px_30px_-24px_rgba(87,212,196,0.45)]"
            >
              <p className="font-semibold leading-snug text-[var(--foreground)]">{label}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--muted)]">{blurb}</p>
              <a
                href={`mailto:${email}`}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_14%,transparent)] bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] px-3 py-1.5 text-[13px] font-medium text-[var(--foreground)] transition-colors duration-150 group-hover:border-[color-mix(in_srgb,var(--accent)_34%,transparent)] group-hover:text-[var(--accent-ink)]"
              >
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                {email}
                <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionShell>
  );
}
