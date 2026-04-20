<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# give me the tech stack .md

Yes — here’s a clean `.md` you can copy into your project docs.

```md
# Framer-Style Website Tech Stack

A code-first stack for building highly animated, premium marketing sites without using Framer.

## Core Stack

- **Framework:** Next.js with App Router  
  Best default if you want React, strong DX, routing, deployment simplicity, and modern React features like Server Components and nested layouts. [web:32][page:1]

- **UI Library:** React  
  Use React components for reusable sections, animated modules, nav, hero blocks, and interactive states. [page:1]

- **Language:** TypeScript  
  Helps a lot once the animation system grows and you start managing timelines, refs, props, and section variants.

- **Styling:** Tailwind CSS or CSS Modules  
  Tailwind is faster for landing-page iteration; CSS Modules can feel cleaner for custom art-direction-heavy builds.

## Animation Stack

- **Microinteractions / UI animation:** Motion for React  
  Motion is the current React animation library formerly known as Framer Motion, and it is designed for production-grade UI animation, gestures, layout animation, enter/exit transitions, and scroll-linked interactions. [web:31][page:2]

- **Scroll storytelling / cinematic animation:** GSAP + ScrollTrigger  
  Use GSAP when you want pinned sections, scrubbed timelines, text choreography, layered scroll scenes, SVG animation, and fine-grained timeline control. ScrollTrigger supports pinning, scrubbing, snapping, and timeline-based orchestration tied to scroll position. [web:27][web:28][web:17]

## Recommended Role Split

- **Motion:** buttons, cards, menus, nav state, hover, tap, modals, layout transitions, section entrance/exit. [web:31][page:2]
- **GSAP:** hero timelines, scroll reveals, pinned product walkthroughs, marquee sequences, parallax, SVG paths, cinematic section transitions. [web:27][web:17]

## Optional Add-ons

- **Smooth scroll:** Lenis  
  Optional if you want a softer premium scroll feel. Use carefully so it does not fight GSAP or hurt accessibility.

- **3D / immersive visuals:** Three.js or React Three Fiber  
  Only add this if you actually need 3D scenes, product objects, particles, or depth-heavy interactions. Keep it out unless the concept really calls for it. [web:15]

- **CMS:** Sanity, Payload, or Contentful  
  Useful if the site needs editable case studies, blog content, team pages, or marketing updates.

- **Forms / backend actions:** Next.js Server Actions  
  Good for lead capture, contact forms, waitlists, and lightweight conversion flows in App Router. [page:1]

## Deployment

- **Hosting:** Vercel  
  Best default for Next.js deployment, previews, and iteration speed.

- **Version control:** GitHub  
  Use branches for animation experiments because motion work tends to get messy fast.

## Suggested Packages

```bash
npm install motion gsap
```

If starting a new project:

```bash
npx create-next-app@latest
```

Motion installs via npm as `motion` and the recommended React import path is `motion/react`. [web:31][page:2]

## Base Project Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
  components/
    hero/
    sections/
    ui/
  lib/
    animations/
      gsap.ts
      motion-presets.ts
  styles/
  content/
  public/
```


## Best-Practice Stack Summary

### Minimal premium stack

- Next.js
- TypeScript
- Tailwind
- Motion
- GSAP + ScrollTrigger
- Vercel [web:27][web:31][page:1]


### More editorial / brand-heavy stack

- Next.js
- TypeScript
- CSS Modules or Tailwind
- Motion
- GSAP + ScrollTrigger
- Sanity CMS
- Vercel [web:27][page:1][page:2]


### Heavy visual / immersive stack

- Next.js
- TypeScript
- Tailwind or CSS Modules
- Motion
- GSAP + ScrollTrigger
- React Three Fiber / Three.js
- Vercel [web:15][web:27][page:2]


## My Recommendation

If you want the cleanest “Framer-style but coded” setup, use:

- **Next.js App Router**
- **TypeScript**
- **Tailwind**
- **Motion for UI**
- **GSAP + ScrollTrigger for scroll scenes**
- **Vercel for deploy** [page:1][web:27][page:2]

That is probably the best default stack for super-animated, modern landing pages in 2026. [page:1][web:27][page:2]

```

If you want, I can also give you:
- a **full `README.md`**
- a **`package.json` starter**
- or a **folder structure with example component names**
<span style="display:none">[^1][^10][^11][^12][^13][^14][^15][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
[^2]: https://gsap.com/docs/v3/GSAP/Timeline/scrollTrigger/
[^3]: https://gsap.com/docs/v3/
[^4]: https://backdropcms.org/project/gsap_scrolltrigger
[^5]: https://gsap.com/scroll/
[^6]: https://motion.dev/docs/react
[^7]: https://nextjs.org/docs
[^8]: https://gsap.com/docs/v3/GSAP/Tween/scrollTrigger/
[^9]: https://refine.dev/blog/framer-motion/
[^10]: https://oneuptime.com/blog/post/2026-02-02-nextjs-app-router/view
[^11]: https://bitworking.github.io/react-gsap/src-components-scroll-trigger/
[^12]: https://motion.dev
[^13]: https://nextjs.org/docs/app/glossary
[^14]: https://gsap.com/docs/v3/GSAP/
[^15]: https://motion.dev/docs/react-motion-component```

