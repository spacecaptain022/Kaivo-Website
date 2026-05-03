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
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[color-mix(in_srgb,var(--accent)_32%,transparent)] shadow-[0_24px_56px_-30px_rgba(0,0,0,0.45),0_0_42px_-18px_color-mix(in_srgb,var(--accent)_38%,transparent)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[var(--card-image-photo-opacity)]"
          style={{ backgroundImage: "url(/contact/web-flow-2026.jpg)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(170deg,color-mix(in_srgb,var(--accent)_20%,rgba(7,14,16,0.44))_0%,rgba(7,12,16,0.54)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[rgba(4,8,10,0.48)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(4,10,12,0.12)]"
        />
        <div className="relative z-[1] flex flex-col gap-8 px-6 py-12 sm:px-10 sm:py-14">
          <FadeIn className="flex justify-center">
            <SectionTag icon="users" variant="accent">
              Let&apos;s connect
            </SectionTag>
          </FadeIn>
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-balance text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
              Contact Kaivo
            </h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <p className="text-center text-[17px] leading-relaxed text-white/82">
              We&apos;re reworking how decisions get done, starting with flights.
              If you want to build, fund, or tell this story with us, we&apos;d love to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {channels.map(({ label, blurb, email }) => (
                <li
                  key={email}
                  className="rounded-2xl border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_30%,transparent)] px-5 py-4 text-[15px] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.52),inset_0_1px_0_0_rgba(255,255,255,0.28)] backdrop-blur-[26px] backdrop-saturate-[1.45]"
                >
                  <p className="font-semibold leading-snug text-white">{label}</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/80">{blurb}</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-3 py-1.5 text-[13px] font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_20px_-14px_rgba(0,0,0,0.35)] backdrop-blur-md"
                  >
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                    {email}
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </SectionShell>
  );
}
