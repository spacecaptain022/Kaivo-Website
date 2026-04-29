import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";

const channels = [
  { label: "Partnerships", email: "partner@kaivo.com" },
  { label: "Investors", email: "invest@kaivo.com" },
  { label: "Press & media", email: "press@kaivo.com" },
  { label: "Careers", email: "careers@kaivo.com" },
] as const;

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      className="border-t border-[color-mix(in_srgb,var(--foreground)_6%,transparent)] bg-[linear-gradient(to_bottom,var(--surface)_0%,color-mix(in_srgb,var(--background)_94%,transparent)_85%)]"
    >
      <FadeIn>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">
          Contact Kaivo
        </h2>
      </FadeIn>
      <FadeIn delay={0.06} className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-[var(--muted)]">
        <p>
          We’re reworking how decisions get done — starting with flights.
        </p>
        <p>
          If you want to be part of it, we’d love to hear from you.
        </p>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-2">
          {channels.map(({ label, email }) => (
            <li
              key={email}
              className="surface-card rounded-2xl px-5 py-4 text-[15px] shadow-[var(--card-shadow-soft)]"
            >
              <span className="font-semibold text-[var(--foreground)]">
                {label}
              </span>
              <a
                href={`mailto:${email}`}
                className="mt-1 block text-[var(--foreground)] underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionShell>
  );
}
