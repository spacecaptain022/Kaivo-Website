"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const members = [
  {
    name: "Aragon M. v. B. Brettschneider",
    role: "CEO",
    photoSrc: "/team/aragon.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aragonbrettschneider",
    bio: "Started his entrepreneurial journey over a decade ago, helping scale Rocket Internet’s e-commerce platform Daraz in Myanmar, which was later acquired by Alibaba in a nine-figure exit. He later built a medical PPE business during COVID that generated eight-figure profits while managing 100+ employees, before founding Astoria Succession Partners, an AI-powered B2B M&A lead generation platform.",
  },
  {
    name: "Davide Nuessle",
    role: "COO",
    photoSrc: "/team/davide.png",
    linkedinUrl: "https://www.linkedin.com/in/davide-nuessle-b82860174/",
    bio: "Former Senior Manager at Bain & Company with a focus on value creation plans and performance improvement for private equity portfolio companies. Previous experience in finance (Deutsche Bank, BlackRock) combined with hands-on operations experience give him the right foundation for scaling teams and pragmatic execution.",
  },
  {
    name: "Claire Cairns",
    role: "CMO",
    photoSrc: "/team/claire.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/olivia-y-cai",
    bio: "An award-winning CMO with 10 years of experience in Web3, AI, digital assets, and regulated fintech, specializing in turning complex technologies into clear market positioning. Before leading go-to-market, communications, and ecosystem growth for multiple emerging tech platforms, she founded and exited Bottle PR, building it into a top 10 UK agency and working with clients including IBM, Honda, Uber, and AMINA Bank.",
  },
  {
    name: "Julian Mick",
    role: "CFO",
    photoSrc: "/team/julian.png",
    linkedinUrl:
      "https://www.linkedin.com/in/julianmick?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "A private equity and M&A professional with experience spanning investing, corporate development, and transaction execution. His background includes THI Investments, Banyan Software, and prior exposure to firms such as Maxburg Capital Partners, Barclays, and EY.",
  },
  {
    name: "Umair Malik",
    role: "CTO",
    photoSrc: "/team/umair.png",
    linkedinUrl:
      "https://www.linkedin.com/in/umair-malik-47a3a4132?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "A fintech engineering leader and cloud architecture expert with senior experience across payments and platform infrastructure. He previously held engineering leadership roles linked to JPMorgan and Wise, and has worked on scaling modern payment and cloud-native systems.",
  },
] as const;

export function TeamSection() {
  const [openBio, setOpenBio] = useState<string | null>(null);

  return (
    <SectionShell tone="paper">
      <FadeIn className="text-center">
        <p className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_16%,var(--surface))] px-4 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-[var(--foreground)] shadow-[0_8px_22px_-12px_rgba(38,229,201,0.7)] ring-1 ring-[color-mix(in_srgb,var(--accent)_22%,transparent)]">
          Meet the team
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          The Team Building Kaivo
        </h2>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((m, i) => (
          <FadeIn
            key={`${m.name}-${m.role}`}
            className="h-full min-h-0"
            delay={0.05 + i * 0.04}
          >
            {(() => {
              const memberId = `${m.name}-${m.role}`;
              const bioPanelId = `bio-${i}`;
              const isOpen = openBio === memberId;

              return (
            <article className="group mx-auto h-full w-full max-w-[22rem] rounded-2xl">
              <div className="relative aspect-[0.92/1] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--card-shadow-soft)]">
                <Image
                  src={m.photoSrc}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 768px) 88vw, (max-width: 1280px) 40vw, 22rem"
                  className="object-cover object-top"
                  quality={100}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/22 via-black/5 to-transparent"
                />
              </div>
              <div className="mt-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/94 px-4 py-3 shadow-[var(--card-shadow-soft)]">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[clamp(1.15rem,1.5vw,1.9rem)] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-[15px] leading-tight text-[var(--muted)]">
                    {m.role}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={bioPanelId}
                    onClick={() => setOpenBio(isOpen ? null : memberId)}
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]"
                  >
                    {isOpen ? "Hide bio" : "Read bio"}
                  </button>
                  <a
                    href={m.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--line-strong)]/70 bg-[var(--surface)] text-[var(--foreground)]"
                  >
                    <span
                      aria-hidden
                      className="size-4 bg-[var(--accent)] [mask-image:url(/linkedin-svgrepo-com.svg)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url(/linkedin-svgrepo-com.svg)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                    />
                  </a>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p
                      id={bioPanelId}
                      key="bio"
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -4 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-3 overflow-hidden text-[14px] leading-relaxed text-[var(--muted)]"
                    >
                      {m.bio}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </article>
              );
            })()}
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
