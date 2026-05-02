import { SectionShell } from "@/components/ui/section-shell";
import { SectionTag } from "@/components/ui/section-tag";

const pillars = [
  {
    title: "Built on Real Usage",
    body: "Every action on Kaivo runs through the token. More usage = more demand. Simple.",
    icon: "chartGrowth",
  },
  {
    title: "Supply That Shrinks",
    body: "Activity triggers automatic burns, permanently removing tokens from circulation. The more Kaivo is used, the scarcer it gets.",
    icon: "fire",
  },
  {
    title: "Revenue That Buys Back",
    body: "A share of platform revenue is used to buy tokens off the market, feeding value straight back into the ecosystem.",
    icon: "wallet",
  },
  {
    title: "Everything Aligned",
    body: "Users, builders, and holders all pull in the same direction. Growth isn't extracted - it's shared.",
    icon: "usersAlt",
  },
] as const;

const tokenIconPaths = {
  chartGrowth:
    "M21,20H20V5a1,1,0,0,0-2,0V20H16V9a1,1,0,0,0-2,0V20H12V13a1,1,0,0,0-2,0v7H8V17a1,1,0,0,0-2,0v3H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z",
  fire:
    "m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z",
  wallet:
    "M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z",
  usersAlt:
    "M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z",
} as const;

export function TokenSection() {
  return (
    <SectionShell
      tone="panel"
      showBorderBottom={false}
      className="border-t border-[color-mix(in_srgb,var(--foreground)_6%,transparent)]"
    >
      <article className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_95%,white_5%)] px-6 py-10 shadow-[var(--card-shadow-soft)] md:px-10 md:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_10%,transparent)] to-transparent"
        />
        <SectionTag icon="cube">
          Tokenomics
        </SectionTag>
        <h2 className="mt-3 max-w-3xl text-balance text-[clamp(1.5rem,3vw,2.35rem)] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)]">
          {`Kaivo's token isn't just part of the system…it `}
          <span className="italic text-[var(--accent-ink)]">is</span>
          {` the system.`}
        </h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_9%,transparent)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-4 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] sm:px-5"
            >
              <p className="inline-flex items-center gap-2 text-[15px] font-semibold leading-snug text-[var(--foreground)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 fill-current text-[var(--accent)]"
                  aria-hidden
                >
                  <path d={tokenIconPaths[p.icon]} />
                </svg>
                {p.title}
              </p>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}
