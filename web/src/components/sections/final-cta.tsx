import { KaivoMark } from "@/components/kaivo-mark";

export function FinalCtaSection() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--background)] pb-10 pt-10 text-[var(--foreground)] md:pb-12 md:pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-[12px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
          <KaivoMark className="h-6 w-6 shrink-0 text-[var(--foreground)]" />
          Kaivo
        </span>
        <p>© {new Date().getFullYear()} Kaivo. All rights reserved.</p>
      </div>
    </footer>
  );
}
