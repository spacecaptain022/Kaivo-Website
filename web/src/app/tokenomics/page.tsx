import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { TokenSection } from "@/components/sections/token";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Tokenomics — Kaivo",
  description:
    "How Kaivo’s token ties to real usage, supply, buybacks, and aligned growth across the ecosystem.",
};

export default function TokenomicsPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden bg-[var(--background)] pb-0 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.25rem+env(safe-area-inset-top,0px))]">
        <TokenSection />
      </main>
      <FinalCtaSection hideTopBorder />
    </>
  );
}
