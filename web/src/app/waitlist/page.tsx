import { KaivoMark } from "@/components/kaivo-mark";
import Link from "next/link";

const travelFrequencyOptions = [
  "1-2 trips per year",
  "1 trip per quarter",
  "1 trip per month",
  "2+ trips per month",
];

export default function WaitlistPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--surface)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_42%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)] transition-opacity hover:opacity-85"
          >
            <KaivoMark className="h-6 w-6 text-[var(--accent)]" />
            Kaivo
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_14%,transparent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-colors hover:bg-[var(--panel)]"
          >
            Back to site
          </Link>
        </header>

        <section className="mx-auto mt-10 w-full max-w-2xl rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_9%,transparent)] bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-6 shadow-[var(--glass-shadow)] backdrop-blur-xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-deep)]">
            Early Access
          </p>
          <h1 className="mt-3 text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Apply for the{" "}
            <span className="text-[var(--accent)]">Kaivo waitlist.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            Tell us a bit about your travel habits and we will prioritize the
            first wave of invites for people who are ready to delegate flights
            now.
          </p>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                Full name
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full rounded-xl border border-[color-mix(in_srgb,var(--foreground)_13%,transparent)] bg-[var(--surface)] px-4 py-3 text-[15px] normal-case tracking-normal text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                />
              </label>

              <label className="space-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                Work email
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[color-mix(in_srgb,var(--foreground)_13%,transparent)] bg-[var(--surface)] px-4 py-3 text-[15px] normal-case tracking-normal text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                Home airport
                <input
                  type="text"
                  name="homeAirport"
                  placeholder="LHR, DXB, JFK..."
                  className="w-full rounded-xl border border-[color-mix(in_srgb,var(--foreground)_13%,transparent)] bg-[var(--surface)] px-4 py-3 text-[15px] normal-case tracking-normal text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-light)] focus:border-[var(--accent)]"
                />
              </label>

              <label className="space-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                Travel frequency
                <select
                  name="travelFrequency"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-[color-mix(in_srgb,var(--foreground)_13%,transparent)] bg-[var(--surface)] px-4 py-3 text-[15px] normal-case tracking-normal text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                >
                  <option value="" disabled>
                    Select frequency
                  </option>
                  {travelFrequencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="space-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
              What should Kaivo handle first?
              <textarea
                name="priority"
                rows={4}
                placeholder="Flight searches, multi-city planning, redemption bookings..."
                className="w-full resize-none rounded-xl border border-[color-mix(in_srgb,var(--foreground)_13%,transparent)] bg-[var(--surface)] px-4 py-3 text-[15px] normal-case leading-relaxed tracking-normal text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-light)] focus:border-[var(--accent)]"
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--accent-deep)_38%,transparent)] bg-[var(--accent)] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-ink)] transition-[filter,transform,box-shadow] hover:brightness-[1.03] hover:shadow-[0_16px_30px_-16px_rgba(38,_229,_201,_0.8)] active:scale-[0.99]"
              >
                Submit application
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
