**KAIVO WEBSITE REWRITE**

### Implementation status

This document is the **copy and structure spec**. It has been **implemented in the Next.js app** under `web/` (see `web/src/app/page.tsx` for section order and `web/src/components/sections/*.tsx` for copy).

**Page order (marketing flow):** Hero → Trust strip → Problem → Delegation → Demo (old way / Kaivo) → Speaks → Approval → Value (includes §18 final strip) → About → Thesis (“travel wedge”) → Why now → Team → Waitlist (§16 CTA block) → Contact (§17) → Footer / final CTA (`FinalCtaSection`). *(Tokenomics / token page removed.)*

**Notes:**

- §5 **Ask. Approve. Done.** — removed from the page (spec: remove or microcopy only).
- §6 Product area uses headline **From tabs and forms → to one decision.** with a short supporting sentence under it (not the old “On one side…” paragraph verbatim).
- Site chrome (metadata, nav, primary buttons) uses **Get early access** / **Early access** where the spec calls for it.

---

**1\. HERO**

| Current | New |
| :---- | :---- |
| Travel bookings just got better | (remove) |
| **Search less. Go more.** | **Search less. Go more.** |
| Stop doing. Start delegating. | **Stop doing. Start delegating.** |
| Book flights in under 60 seconds. Kaivo compares, prepares, and lines everything up for approval... | **Book flights in under 60 seconds. Kaivo finds, compares, and prepares one decision for you.** |
| GET YOUR BOARDING PASS / SEE THE DEMO | **Primary: Get early access** Secondary: See demo |
| Join the waitlist for early access... | **Join for early access and private demo invites.** |

**2\. “303 minutes / 141 pages”**

| Current | New |
| :---- | :---- |
| 303 minutes. 141 pages. That’s how much travel booking can take today... | **Booking a trip can take hours. Kaivo turns it into one decision.** |

**3\. AUDIENCE STRIP**

| Current | New |
| :---- | :---- |
| For people who are done wasting half a day booking one trip. | **For people who are done spending hours booking one trip.** |
| Frequent flyers / Founders / Operators / Families... | (keep as-is) |

**4\. “You were promised convenience”**

| Current | New |
| :---- | :---- |
| You were promised convenience. You got homework. | **You were promised convenience. You got work.** |
| Search made options infinite... | (remove) |
| But somehow, you still do the work. | (remove) |
| You still check five websites... long paragraph | **Tabs. Filters. Re-entering details. Second-guessing choices.** |
| More choice didn’t remove the work. It extended it. | **More options didn’t remove the work. They multiplied it.** |

**5\. “The next interface…”**

| Current | New |
| :---- | :---- |
| The next interface isn’t better search. It’s delegation. | **The next interface isn’t search. It’s delegation.** |
| You tell Kaivo what you need... long paragraph | **You tell Kaivo what you need. It finds, compares, and prepares the best option. You review. You approve. It’s done.** |
| Intent → Prepare → Review → Approve → Done | (keep) |
| Kaivo does the work. You do the deciding. | (keep) |
| Ask. Approve. Done. | (remove or keep as microcopy) |

**6\. “Watch 25 minutes disappear”** 

| Current | New |
| :---- | :---- |
| Watch 25 minutes disappear. | REMOVE |
| On one side: the old way... | **From tabs and forms → to one decision.** |
| The old way vs with Kaivo list | (keep, slightly tightened) |

**7\. OLD WAY vs KAIVO**

| Current | New |
| :---- | :---- |
| Search options / Compare trade-offs / Enter details / Check out / Hope you chose right | **Search across tabs** Compare manually Enter details repeatedly Hope you chose right |
| Tell Kaivo what you need / Review / Approve / Done | **Tell Kaivo what you need** Review one prepared option Approve once Done |

**8\. “From 25 minutes to under 60 seconds”**

| Current | New |
| :---- | :---- |
| From 25 minutes to under 60 seconds. | **From hours → to under 60 seconds.** |
| Video modules description | **Natural-language booking. One review. One approval.** |

**9\. “It doesn’t feel like software”**

| Current | New |
| :---- | :---- |
| It doesn’t feel like software. It feels like having someone on it. | **It doesn’t feel like software. It feels like someone handling it.** |
| Kaivo isn’t a search bar with better manners... long paragraph | **Kaivo isn’t a better search bar. It’s a conversational travel operator. You describe what you want. It takes care of the rest.** |
| Example prompts | (keep) |

**10\. “Delegation only works if you stay in control”**

| Current | New |
| :---- | :---- |
| Delegation only works if you stay in control. | **You stay in control.** |
| Kaivo never turns trust into guesswork... | **See what was chosen, why, and what it costs \- before you approve.** |
| Every decision is visible | (keep) |
| Every cost is clear | remove |
| Every action happens with approval | (keep, rephrase) |
| Preferences get smarter over time | (keep) |
| Always asks first... | remove |

**11\. “Best product gives time back”**

| Current | New |
| :---- | :---- |
| The best travel product isn’t the one with the most options... | **The best travel product gives you your time back.** |
| Saves hours / Gets it right / Improves with you | (keep, tighten copy slightly) |

**12\. ABOUT KAIVO**

| Current | New |
| :---- | :---- |
| Kaivo is building the delegation layer for modern life... long paragraph | **Kaivo is building the delegation layer for modern life \- starting with travel.** |
| We’re starting with travel because... | **Travel is the clearest example: too many options, too much repetition, too much time lost.** |
| Less browsing. Less admin. Better outcomes. | **Less searching. Less admin. Better outcomes.** |

**13\. “Travel is the wedge”**

| Current | New |
| :---- | :---- |
| Travel is the wedge. Delegation is the platform. | **Travel is the starting point. Delegation is the future.** |
| Long explanation paragraph | **Travel is where the pain is highest: volatile pricing, repeated decisions, too many tabs. It’s the perfect place to prove a new way.** |
| Expansion list | (keep) |
| “Kaivo wins by owning the moment of approval…” | **Kaivo owns the moment of decision. Every approval becomes an outcome.** |

**14\. “Why now”**

| Current | New |
| :---- | :---- |
| Why now? Because AI can finally do, not just answer. | **Why now? AI can finally act, not just answer.** |
| Long explanation | **AI can now understand intent, handle multi-step workflows, and prepare transactions in real time.** |
| 3 bullets | (keep, slightly tightened) |

**15\. TOKENOMICS** — *Removed from the implemented site (no `/tokenomics` route or token section).*

**16\. FINAL CTA**

| Current | New |
| :---- | :---- |
| Now boarding: the people who never want to book the old way again. | **Stop searching. Start delegating.** |
| Join the Kaivo waitlist to get... | **Join Kaivo early:** |
| Bullet list | **Early demo access** Priority beta Private product drops |
| Claim your boarding pass | **Get early access** |
| Be early to the year travel booking got better | remove |

**17\. NEW SECTION \- CONTACT**

Contact Kaivo

We’re reworking how decisions get done \- starting with flights.

If you want to be part of it, we’d love to hear from you.

* **Partnerships** — partner@kaivo.com  
* **Investors** — invest@kaivo.com  
* **Press & media** — press@kaivo.com  
* **Careers** — careers@kaivo.com

**18\. FINAL STRIP**

| Current | New |
| :---- | :---- |
| Your next trip, booked in under 60 seconds. | **Your next trip. One message. One approval. Done.** |

