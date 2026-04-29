import { KaivoMark } from "@/components/kaivo-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import Image from "next/image";

const members = [
  {
    name: "Aragon M. v. B. Brettschneider",
    role: "CEO",
    photoSrc: "/team/aragon.jpeg",
    bio: "Started his entrepreneurial journey over a decade ago, helping scale Rocket Internet’s e-commerce platform Daraz in Myanmar, which was later acquired by Alibaba in a nine-figure exit. He later built a medical PPE business during COVID that generated eight-figure profits while managing 100+ employees, before founding Astoria Succession Partners, an AI-powered B2B M&A lead generation platform.",
  },
  {
    name: "Davide Nuessle",
    role: "COO",
    photoSrc: "/team/davide.jpeg",
    bio: "Former Senior Manager at Bain & Company with a focus on value creation plans and performance improvement for private equity portfolio companies. Previous experience in finance (Deutsche Bank, BlackRock) combined with hands-on operations experience give him the right foundation for scaling teams and pragmatic execution.",
  },
  {
    name: "Umair Malik",
    role: "CTO",
    photoSrc: "/team/umair.jpeg",
    bio: "A fintech engineering leader and cloud architecture expert with senior experience across payments and platform infrastructure. He previously held engineering leadership roles linked to JPMorgan and Wise, and has worked on scaling modern payment and cloud-native systems.",
  },
  {
    name: "Claire Cairns",
    role: "CMO",
    photoSrc: "/team/claire.jpeg",
    bio: "An award-winning CMO with 10 years of experience in Web3, AI, digital assets, and regulated fintech, specializing in turning complex technologies into clear market positioning. Before leading go-to-market, communications, and ecosystem growth for multiple emerging tech platforms, she founded and exited Bottle PR, building it into a top 10 UK agency and working with clients including IBM, Honda, Uber, and AMINA Bank.",
  },
  {
    name: "Julian Mick",
    role: "CFO",
    photoSrc: "/team/julian.jpeg",
    bio: "A private equity and M&A professional with experience spanning investing, corporate development, and transaction execution. His background includes THI Investments, Banyan Software, and prior exposure to firms such as Maxburg Capital Partners, Barclays, and EY.",
  },
] as const;

function TeamMarkBackdrop() {
  return (
    <div className="flex h-full min-h-[min(28rem,_55vh)] w-full items-center justify-center">
      <div className="relative aspect-square w-[min(130vw,_68rem)] max-w-[min(130vw,_68rem)]">
        <span
          className="absolute inset-[14%] rounded-full bg-[var(--accent)]/[0.04] blur-[72px]"
          aria-hidden
        />
        <KaivoMark
          className="absolute left-1/2 top-1/2 z-[1] h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 text-[color-mix(in_srgb,var(--accent-deep)_48%,var(--background))] opacity-[0.14] contrast-[1.02] [filter:drop-shadow(-1.5px_-1.5px_2px_rgba(255,_255,_255,_0.72))_drop-shadow(2px_2px_6px_rgba(10,_10,_10,_0.12))_drop-shadow(0_1px_0_rgba(255,_255,_255,_0.35))]"
        />
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <SectionShell tone="panel" overlay={<TeamMarkBackdrop />}>
      <FadeIn>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">
          Meet the team
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--muted)]">
          Leadership building the future of delegation, starting with travel.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((m, i) => (
          <FadeIn key={`${m.name}-${m.role}`} delay={0.05 + i * 0.04}>
            <article className="surface-card flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow-[var(--card-shadow-soft)] ring-1 ring-[var(--foreground)]/[0.08]">
                  <Image
                    src={m.photoSrc}
                    alt={`${m.name}`}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                    quality={92}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-semibold leading-snug tracking-[-0.02em] sm:text-[17px]">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    {m.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-[var(--muted)]">
                {m.bio}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
