"use client";

import { KaivoMark } from "@/components/kaivo-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionTag } from "@/components/ui/section-tag";
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
    logos: [
      { src: "/team/rocket-logo.jpg", alt: "Rocket Internet" },
      { src: "/team/accenture.png", alt: "Accenture" },
    ],
    bio: "Started his entrepreneurial journey over a decade ago, helping scale Rocket Internet’s e-commerce platform Daraz in Myanmar, which was later acquired by Alibaba in a nine-figure exit. He later built a medical PPE business during COVID that generated eight-figure profits while managing 100+ employees, before founding Astoria Succession Partners, an AI-powered B2B M&A lead generation platform.",
  },
  {
    name: "Davide Nuessle",
    role: "COO",
    photoSrc: "/team/davide.png",
    linkedinUrl: "https://www.linkedin.com/in/davide-nuessle-b82860174/",
    logos: [
      { src: "/team/bain-and-company.png", alt: "Bain & Company" },
      { src: "/team/blackrock-logo.png", alt: "BlackRock" },
    ],
    bio: "Former Senior Manager at Bain & Company with a focus on value creation plans and performance improvement for private equity portfolio companies. Previous experience in finance (Deutsche Bank, BlackRock) combined with hands-on operations experience give him the right foundation for scaling teams and pragmatic execution.",
  },
  {
    name: "Claire Cairns",
    role: "CMO",
    photoSrc: "/team/claire.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/clairecblockchain/",
    logos: [
      { src: "/team/uber-logo.png", alt: "Uber" },
      { src: "/team/ibm.svg", alt: "IBM" },
    ],
    bio: "An award-winning CMO with 10 years of experience in Web3, AI, digital assets, and regulated fintech, specializing in turning complex technologies into clear market positioning. Before leading go-to-market, communications, and ecosystem growth for multiple emerging tech platforms, she founded and exited Bottle PR, building it into a top 10 UK agency and working with clients including IBM, Honda, Uber, and AMINA Bank.",
  },
  {
    name: "Julian Mick",
    role: "CFO",
    photoSrc: "/team/julian.png",
    linkedinUrl:
      "https://www.linkedin.com/in/julianmick?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    logos: [
      { src: "/team/thi-logo.png", alt: "THI Investments" },
      { src: "/team/barclays-logo.svg", alt: "Barclays" },
    ],
    bio: "A private equity and M&A professional with experience spanning investing, corporate development, and transaction execution. His background includes THI Investments, Banyan Software, and prior exposure to firms such as Maxburg Capital Partners, Barclays, and EY.",
  },
  {
    name: "TBA",
    role: "CTO",
    photoSrc: "/team/umair.png",
    usePlaceholderPhoto: true,
    bio: "CTO announcement coming soon.",
  },
] as const;

export function TeamSection() {
  const [openBio, setOpenBio] = useState<string | null>(null);

  return (
    <SectionShell tone="paper">
      <FadeIn className="text-center">
        <SectionTag
          variant="accent"
          icon="users"
          className="tracking-[0.01em] normal-case"
        >
          Meet the team
        </SectionTag>
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
                {"usePlaceholderPhoto" in m && m.usePlaceholderPhoto ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(120%_100%_at_50%_0%,rgba(87,212,196,0.14),rgba(10,10,10,0.96)_50%,rgba(0,0,0,1)_100%)]">
                    <KaivoMark className="h-24 w-24 text-[var(--accent)] opacity-95 drop-shadow-[0_0_24px_rgba(87,212,196,0.35)]" />
                  </div>
                ) : (
                  <Image
                    src={m.photoSrc}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 88vw, (max-width: 1280px) 40vw, 22rem"
                    className="object-cover object-top"
                    quality={100}
                  />
                )}
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
                  {"logos" in m ? (
                    <div className="flex items-center gap-2">
                      {m.logos.map((logo) => (
                        <span
                          key={logo.src}
                          className="inline-flex h-10 items-center rounded-md border border-[var(--line-strong)]/45 bg-[var(--surface)] px-3"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={30}
                            className={`w-auto object-contain ${
                              logo.alt === "THI Investments"
                                ? "h-[52px]"
                                : logo.alt === "Uber" || logo.alt === "IBM"
                                ? "h-[24px]"
                                : "h-[28px]"
                            }`}
                          />
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span />
                  )}
                  {"linkedinUrl" in m ? (
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
                  ) : (
                    <span />
                  )}
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
                  <span />
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
