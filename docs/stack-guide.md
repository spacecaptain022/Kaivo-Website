# Framer-Style Website Starter

A production-friendly starter approach for building a highly animated, premium marketing site without using Framer.

This stack is built around Next.js for the app foundation, Motion for React for UI animation, and GSAP with ScrollTrigger for cinematic scroll storytelling.[cite:32][cite:31][cite:27]

## What this project is for

This setup is a strong fit for:

- Brand sites
- Startup landing pages
- Product launches
- Narrative scroll experiences
- Agency-style interactive marketing pages

It is especially good when the goal is a site that feels polished, custom, and motion-rich rather than template-driven.[cite:17][cite:27][cite:31]

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js App Router | Modern React framework with routing, layouts, data fetching patterns, and deployment ergonomics.[cite:32] |
| UI | React + TypeScript | Reusable component system and safer animation/state management. |
| Styling | Tailwind CSS or CSS Modules | Fast iteration for landing pages, or more handcrafted control for custom art direction. |
| UI motion | Motion for React | Built for React animation, gestures, layout transitions, and component-level motion.[cite:31] |
| Scroll motion | GSAP + ScrollTrigger | Best for pinned sections, scrubbed timelines, coordinated reveals, and scroll-linked storytelling.[cite:27][cite:28] |
| Deploy | Vercel | Smooth default deployment path for Next.js projects.[cite:32] |

## Recommended role split

Use **Motion** for component behavior such as hover states, menus, cards, nav transitions, modals, and layout changes.[cite:31]

Use **GSAP + ScrollTrigger** for hero sequences, pinned walkthroughs, parallax, SVG choreography, text reveals, and timeline-driven section transitions tied to scroll progress.[cite:27][cite:17][cite:28]

A simple rule is: Motion handles interface feel, while GSAP handles cinematic storytelling.[cite:27][cite:31]

## Base install

```bash
npx create-next-app@latest my-site
cd my-site
npm install gsap motion
```

Next.js documents the App Router and core project structure in its official docs, and Motion’s React docs use the `motion/react` package path for React usage.[cite:32][cite:31]

## Suggested structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    hero/
    sections/
    ui/
  lib/
    animations/
      gsap.ts
      motion-presets.ts
  content/
  public/
```

This structure keeps content, sections, and animation helpers separated so motion logic does not get scattered across the whole codebase.

## Recommended packages

### Core

```bash
npm install gsap motion clsx
```

### Optional

```bash
npm install @studio-freight/lenis
npm install three @react-three/fiber @react-three/drei
npm install lucide-react
```

Add Lenis only if smooth scrolling materially improves the experience, because extra scroll abstraction can complicate performance and accessibility if handled poorly.

Add Three.js or React Three Fiber only when the concept truly needs immersive 3D scenes or product objects; otherwise keep the stack lighter.[cite:15]

## Workflow

### 1. Define direction

Start with a short creative brief before writing code.

Include:

- Product name
- One-line value proposition
- Audience
- Desired visual tone
- 2–3 reference sites
- Required sections
- Animation intensity

This produces better results than asking for a vague “make it look cool” landing page, because AI-assisted web workflows improve when taste and references are constrained up front.[cite:6][cite:19]

### 2. Build static first

Build the layout, typography, spacing, and section hierarchy before adding heavy animation.

This keeps the site from becoming an effects demo with weak structure and matches the stronger Claude-based workflows for polished web builds.[cite:6][cite:19]

### 3. Add motion in passes

Layer motion in this order:

1. Entrance reveals
2. Hover and tap interactions
3. Section-level scroll triggers
4. Pinned story sequences
5. One signature hero effect
6. Optional page transitions

ScrollTrigger is specifically built for linking animation timing to scroll position and coordinating start/end points for those sequences.[cite:27][cite:28]

### 4. Optimize mobile early

Check mobile as soon as the first animated section is built.

Scroll-heavy sites often feel great on desktop but break rhythm, spacing, or performance on mobile if mobile QA happens too late.[cite:17][cite:20]

### 5. Polish assets and timing

After structure and motion are working, refine the imagery, typography rhythm, easing, and transition timing.

Recent animated-site workflows increasingly combine generated visuals or branded assets with code-based motion to create the standout “hero moment” users remember.[cite:9][cite:15]

### 6. Deploy and iterate

Use preview deploys, branch often, and test animation changes in isolation.

Motion work becomes messy fast, so separating experiments by branch keeps the main site stable.

## Example implementation plan

### Day 1

- Define visual direction
- Write page outline
- Build static homepage
- Establish type and spacing system

### Day 2

- Add hero animation
- Add section reveals
- Add pinned feature sequence
- Refine responsive layout

### Day 3

- Tune performance
- Improve copy
- Replace placeholder assets
- Final mobile QA
- Deploy

This phased build order aligns with current Claude-assisted animated-site workflows that emphasize structure first, motion second, and polish last.[cite:6][cite:9][cite:12]

## Best practices

- Keep the layout clean and let motion create the premium feeling.
- Use one major hero effect instead of animating everything.
- Prefer left-aligned content for most sections unless the concept truly needs centered composition.
- Make reduced-motion behavior intentional.
- Avoid stacking too many animation systems into the same section.
- Test real devices, not only desktop browser resize.

GSAP’s tooling and Motion’s React-specific APIs are both capable, but the strongest results come from disciplined use rather than maximum effect density.[cite:27][cite:31]

## Suggested prompts for Claude

### Initial scaffold

```txt
Build a clean, premium landing page in Next.js App Router with TypeScript.
Do not add animations yet.
Focus on typography, spacing, hierarchy, and mobile responsiveness.
Create reusable components for hero, feature sections, proof bar, CTA, and footer.
Use a modern editorial-tech aesthetic.
```

### Motion pass

```txt
Add Motion-based animations for nav, cards, CTA buttons, and section entrances.
Keep the motion subtle and premium.
Use layout transitions only where they improve clarity.
Respect reduced-motion settings.
```

### GSAP pass

```txt
Add GSAP ScrollTrigger to create a cinematic hero reveal and one pinned product-story section.
Use scrubbed animation only where it improves narrative flow.
Avoid performance-heavy effects on mobile.
Respect reduced-motion settings.
```

## When not to use this stack

This stack may be overkill if the project is:

- A simple brochure site
- A CMS-only marketing site with minimal motion
- A fast MVP that needs visual editing more than code control
- A site maintained by non-technical marketers only

In those cases, a visual builder may still be faster even if it gives up some flexibility.[cite:4][cite:2]

## Default recommendation

For a modern coded alternative to Framer, the strongest default stack is:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- GSAP + ScrollTrigger
- Vercel

That setup gives a strong balance of control, animation quality, and production readiness for premium landing pages.[cite:32][cite:31][cite:27]
