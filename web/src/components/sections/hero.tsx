import { FrameButton } from "@/components/ui/frame-button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/cn";

const microCards = [
  "Best flight found",
  "1 bag included",
  "Arrives before 7pm",
  "Approved in 1 tap",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-b-[60px] border-b border-[var(--line)] bg-[var(--background)] pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/airplane-island.png"
          className="h-full w-full object-cover opacity-25"
        >
          <source src="/hero/airplane-island-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="pointer-events-none absolute -left-28 top-24 z-[1] h-64 w-64 rounded-full bg-[var(--accent)]/24 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 z-[1] h-72 w-72 rounded-full bg-[var(--accent-mid)]/24 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[var(--surface)]/35 via-[var(--background)]/10 to-[var(--background)]/42"
        aria-hidden
      />
      <div
        className="texture-noise pointer-events-none absolute inset-0 z-[2] opacity-[0.12] mix-blend-soft-light"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div className="flex flex-col gap-8">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              Travel bookings just got better
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Search less.
              <br />
              <span className="text-[var(--accent)]">Go more.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-md text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium leading-snug tracking-[-0.02em]">
              Stop doing.{" "}
              <span className="text-[var(--accent)]">Start delegating.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="max-w-lg text-[17px] leading-relaxed text-[var(--muted)]">
              Book flights in under 60 seconds. Kaivo compares, prepares, and
              lines everything up for approval, so you spend less time searching
              and more time going.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.14}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <FrameButton href="#waitlist">Get your boarding pass</FrameButton>
            <FrameButton href="#product" variant="ghost">
              See the demo
            </FrameButton>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-md text-[13px] leading-relaxed text-[var(--muted)]">
              Join the waitlist for early access to the live demo launch,
              priority invites, and a chance to win one of our 26-flights-in-2026
              giveaway.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--foreground)]">
              Prepared for you · Approved by you · Done for you
            </p>
          </FadeIn>
        </div>

        <div className="relative flex flex-col gap-6">
          <FadeIn delay={0.08}>
            <div
              className={cn(
                "surface-card relative aspect-[4/3] w-full overflow-hidden rounded-2xl",
                "ring-1 ring-[var(--foreground)]/[0.04]",
              )}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/hero/airplane-island.png"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/Kaivo Demo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-[var(--surface)]/80 bg-[var(--surface)]/72 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-ink)] backdrop-blur-sm">
                Demo
              </div>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.09}
            className="pointer-events-none absolute -right-2 -top-5 z-10 hidden rounded-2xl border border-[var(--line)]/75 bg-[var(--surface)]/82 px-3 py-2 shadow-[var(--card-shadow-soft)] backdrop-blur-md md:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--surface)] bg-[var(--accent)]/85 text-[10px] font-semibold text-[var(--accent-ink)]">
                  F
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--surface)] bg-[var(--panel)] text-[10px] font-semibold text-[var(--foreground)]">
                  O
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--surface)] bg-[var(--surface)] text-[10px] font-semibold text-[var(--muted)]">
                  T
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Decision-ready
                </p>
                <p className="text-[12px] font-semibold text-[var(--foreground)]">
                  1 tap approval
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <aside className="surface-card rounded-2xl p-5 text-[13px] leading-relaxed">
              <p className="font-semibold text-[var(--foreground)]">
                303 minutes. 141 pages.
              </p>
              <p className="mt-2 text-[var(--muted)]">
                That’s how much travel booking can take today. Kaivo cuts the
                chaos down to one clear decision.
              </p>
            </aside>
          </FadeIn>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2">
            {microCards.map((label) => (
              <li
                key={label}
                className="rounded-xl border border-[var(--line)]/90 bg-[var(--surface)]/72 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--muted)] backdrop-blur-sm"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
