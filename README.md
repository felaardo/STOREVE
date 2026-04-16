# STOREVE

Landing page for **STOREVE** — an AI-powered growth agency that helps local businesses (barbershops, gyms, restaurants, and service businesses) get more clients through high-converting websites and automation systems.

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling with custom design tokens
- [Framer Motion](https://www.framer.com/motion/) — scroll-based and entrance animations
- TypeScript

## Design System

Custom dark futuristic theme defined in `app/globals.css`:

| Token | Value |
|---|---|
| Background | `#07091a` |
| Navy | `#0d1630` |
| Blue accent | `#2563eb` |
| Cyan accent | `#06b6d4` |
| Foreground | `#f1f5f9` |

Key utility classes: `.glass-card`, `.glass-panel`, `.glass-btn`, `.gradient-text`, `.gradient-text-blue`, `.btn-primary`, `.glow-blue`, `.grid-pattern`.

## Page Sections

| Component | Description |
|---|---|
| `Navbar` | Sticky, blur-on-scroll, mobile hamburger menu |
| `Hero` | Full-screen hero with animated headline and stats bar |
| `WhatWeDo` | 3-card services overview |
| `HowItWorks` | Sticky-left + scrolling-right 3-step process |
| `BusinessTypes` | Bento grid showcasing barbershops, gyms, restaurants, and clinics |
| `Features` | 6-card feature grid |
| `Testimonials` | 3 testimonial cards with result badges |
| `Pricing` | 2-column pricing with setup fee and performance model |
| `About` | Company mission and values |
| `FinalCTA` | Email capture form with glass panel |
| `Footer` | Links, social icons, privacy/terms modals |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── globals.css       # Design tokens and global utility classes
│   ├── layout.tsx        # Root layout with font setup
│   └── page.tsx          # Page composition
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhatWeDo.tsx
│   ├── HowItWorks.tsx
│   ├── BusinessTypes.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── About.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── public/               # Static assets
```

## Deploy

```bash
npm run build
```

Recommended deployment: [Vercel](https://vercel.com).
