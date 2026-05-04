export function KvidSection() {
  return (
    <section className="bg-[var(--surface)] py-10 sm:py-12 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-5 sm:px-8 lg:px-10">
        <video
          src="/kaivo-white-mockup-2026-small.mov"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Kaivo app demo"
          className="mx-auto block w-full max-w-4xl object-contain"
        />
      </div>
    </section>
  );
}
