# VELTRIXA TECHNOLOGY — MASTER BUILD PROMPT
### PRD · Requirements · Architecture · UI/UX · Development Plan (All-in-One)

> **How to use this document:** Feed this entire file as the system/context prompt to an AI coding tool (Claude Code, Cursor, etc.) to generate the full production website in one coherent build. It contains everything needed — brand system, requirements, architecture, design system, animation spec, page-by-page content, and a phased development plan.

---

## 0. PROJECT SNAPSHOT

| | |
|---|---|
| **Company** | Veltrixa Technology |
| **Tagline** | Engineering the Future |
| **Category** | Digital Agency — Web, App, Design, Marketing & Branding Studio |
| **Reference (design/animation/UX inspiration ONLY — do not copy content, copy, or projects)** | https://lunex-studio.web.app/ |
| **Animation Library Inspiration** | https://reactbits.dev/ |
| **Email** | veltrixatechnology@gmail.com |
| **Phone (Primary)** | +91 72049 06807 |
| **Phone (Alternate)** | +91 83107 70880 |
| **Free Consultation** | 15-minute discovery call (free) |
| **Entry Price Point** | Websites starting at ₹3,499/- (all prices exclusive of GST) |
| **Tone** | Professional, confident, modern, premium but approachable — NOT a heavy dark/black theme; light-forward with dark accent sections |

---

## 1. BRAND & VISUAL IDENTITY (derived from the logo)

The logo is a chrome/silver "VT" monogram with a cyan-blue gradient accent stroke, on a black background, paired with wordmark "VELTRIXA" (silver/chrome, with the "A" accented in cyan) and subtitle "TECHNOLOGY" in cyan, tracked-out uppercase. Tagline: "ENGINEERING THE FUTURE" in white.

The website must **not** replicate the logo's black background across the whole site — the user explicitly wants a site that is **not too dark**. Instead, use a **light-forward design system** that borrows the logo's metallic/cyan DNA as accents, with select full-dark sections (hero, footer, CTA bands) for contrast and drama.

### 1.1 Color Palette

```css
:root {
  /* Core neutrals — light-forward base */
  --color-bg: #F7F9FC;              /* main page background */
  --color-bg-alt: #EEF2F8;          /* alternate section background */
  --color-surface: #FFFFFF;         /* cards, panels */
  --color-border: #E2E8F0;

  /* Dark accent (hero / footer / CTA bands only) */
  --color-dark: #05070D;            /* near-black, matches logo bg */
  --color-dark-alt: #0B0F1A;
  --color-dark-surface: #10141F;

  /* Chrome / silver (headings, logo-matching metallic text & icons) */
  --color-chrome-1: #F8FAFC;
  --color-chrome-2: #CBD5E1;
  --color-chrome-3: #64748B;
  --chrome-gradient: linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 45%, #94A3B8 70%, #E2E8F0 100%);

  /* Cyan accent — the brand's signature color (from the logo's "A" & subtitle) */
  --color-accent: #17B4E8;
  --color-accent-2: #33E1FF;
  --color-accent-glow: #7CF3FF;
  --accent-gradient: linear-gradient(90deg, #0EA5D6 0%, #33E1FF 100%);

  /* Text */
  --color-text: #0F172A;
  --color-text-muted: #4B5566;
  --color-text-on-dark: #F1F5F9;
  --color-text-on-dark-muted: #94A3B8;

  /* Feedback */
  --color-success: #22C55E;
  --color-error: #EF4444;
}
```

**Usage rules**
- Hero section, footer, and 1–2 CTA "band" sections use `--color-dark` backgrounds (mirrors the logo's black canvas) with chrome-gradient headline text and cyan accent details — this is where the logo's identity shows through fully, including the 3D VT monogram element.
- All other sections (Services, Process, About, Pricing, Contact) sit on light backgrounds (`--color-bg` / `--color-surface`) so the site never feels heavy.
- Cyan (`--color-accent`) is the single recurring accent used for links, active states, icon strokes, underline swipes, progress indicators, and button fills.
- Chrome gradient text is reserved for major headings only (H1/H2 on dark sections) — do not overuse on light backgrounds where it loses contrast; on light backgrounds use solid `--color-text` with a cyan underline/accent instead.

### 1.2 Typography

- **Display / Headings:** `Space Grotesk` or `Sora` (geometric, technical, matches the angular logo) — weight 600–700.
- **Body:** `Inter` — weight 400–500, generous line-height (1.6) for readability on light backgrounds.
- **Accent / Eyebrow labels:** uppercase, letter-spacing 0.15–0.25em, small size, cyan color — mirrors the tracked-out "TECHNOLOGY" wordmark treatment.
- Use a fluid type scale (`clamp()`) so headings scale smoothly across breakpoints.

### 1.3 Logo Usage
- Primary logo (as supplied) on dark backgrounds (header when transparent-over-hero, footer).
- Provide/generate a **light-background variant**: same chrome/cyan mark but with a dark navy (`--color-dark`) wordmark instead of white, for use in the sticky light header once the user scrolls past the hero.
- Maintain clear space around the logo equal to the height of the "V" stroke; never stretch or recolor the cyan accent.

### 1.4 Iconography & Graphics
- Line icons, 1.5–2px stroke, cyan or chrome-gradient fill on hover.
- Recurring motif: thin angular/chevron shapes (echoing the "V" and "T" strokes in the logo) used as section dividers, card corner accents, and button hover states.
- Background textures: subtle isometric grid, circuit-line patterns, and soft glow blobs (cyan, low opacity) — technical but light, never heavy noise/dark textures on light sections.

---

## 2. PRODUCT REQUIREMENTS DOCUMENT (PRD)

### 2.1 Problem Statement
Veltrixa Technology is a new digital agency needing a flagship website that (a) establishes credibility as a premium, technically capable studio, (b) clearly communicates its full service catalogue across all business domains, (c) converts visitors into qualified leads via a free 15-minute consultation call and a detailed enquiry form, and (d) visually differentiates itself with a modern, animated, partially-3D experience that reflects the "Engineering the Future" brand promise.

### 2.2 Goals
1. Generate qualified leads (calls booked + form submissions) from businesses of all types and sizes.
2. Present the full service catalogue with clear starting pricing for the website service line.
3. Build trust through a transparent, well-explained process/roadmap.
4. Deliver a distinctive, animation-rich, partially-3D experience that stands out from generic agency templates.
5. Be fully responsive and performant on mobile (60%+ of expected traffic).

### 2.3 Non-Goals (explicitly out of scope for this build)
- No client project case studies/portfolio pieces copied or fabricated from the reference site — reference is for **layout, animation, and UX pattern inspiration only**.
- No listing of specific target industries/business types on the Website service (per instruction: keep this general — "for businesses of all types" — rather than an industry-by-industry breakdown). General "who we serve" framing can apply agency-wide.
- No e-commerce/payment checkout in this phase (leads are captured, not paid for, online).
- No blog/CMS in phase 1 (flagged as a future phase).

### 2.4 Target Audience
Startups, SMEs, D2C brands, local businesses, professional practices, and enterprises across all industries looking for websites, apps, branding, marketing, or design work — from founders directly to marketing managers.

### 2.5 Success Metrics
- Consultation call bookings / contact form submissions per month.
- Average session duration & scroll depth (animation engagement proxy).
- Mobile bounce rate < industry benchmark.
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms despite heavy animation/3D use.

### 2.6 Key User Stories
- As a visitor, I want to quickly understand what Veltrixa does and see proof of capability, so I trust the agency.
- As a visitor, I want to browse services in an engaging carousel and click into details, so I can find the exact service I need.
- As a visitor, I want to see a clear starting price for a website, so I can gauge affordability instantly.
- As a visitor, I want to book a free 15-minute call or submit an enquiry with my project details, so I can get a personalized estimate.
- As a mobile visitor, I want the same rich experience without lag or broken layouts.

---

## 3. FUNCTIONAL REQUIREMENTS

1. **Global Navigation** — sticky header, transparent-over-hero → solid-on-scroll, logo variant swap, mobile hamburger with full-screen animated menu.
2. **Services Carousel** — horizontal draggable/auto-playing carousel (GSAP + Draggable/Observer or Embla+GSAP) showing all services with icon, short description, "starting at" price where applicable, and link to detail anchor/section.
3. **3D Hero Element** — Three.js/React Three Fiber scene featuring an abstract geometric object (echoing the "VT" monogram — e.g., a rotating faceted glass/metal polyhedron or an extruded "VT" mark) with cyan emissive glow, mouse-parallax interaction, reduced-motion fallback (static/CSS-animated 2D graphic).
4. **Scroll Animations** — GSAP + ScrollTrigger for: pinned sections, staggered text/card reveals, horizontal scroll segments (services/process), parallax backgrounds, number counters (stats), progress-linked SVG line drawing (the chevron/V-T motif).
5. **Process Roadmap Section** — animated step-by-step timeline (vertical on mobile, horizontal/pinned on desktop).
6. **Pricing Highlight** — dedicated component spotlighting "Websites starting at ₹3,499*" with `*Prices exclusive of GST` note, plus secondary service pricing tiers/ranges where applicable.
7. **Contact & Lead Capture** —
   - Multi-field enquiry form: Full Name*, Company Name (optional), Mobile Number*, Email*, Service Interested In* (dropdown of all services), Project Details / Reason for Enquiry* (textarea), Budget Range (optional).
   - "Book a Free 15-min Call" CTA — opens a scheduling modal/section (embeddable Calendly-style block, or a simple date/time-preference form as MVP if no scheduling tool is integrated) alongside direct call/WhatsApp/email links.
   - Direct contact shortcuts: `tel:+917204906807`, `tel:+918310770880`, `mailto:veltrixatechnology@gmail.com`, WhatsApp deep link.
   - Form submissions routed via a serverless function (e.g., Next.js Route Handler) to email delivery (Resend/Nodemailer/EmailJS) targeting veltrixatechnology@gmail.com, with success/error toast states and basic honeypot/rate-limit spam protection.
8. **Footer** — sitemap links, service links, contact block, social icons, newsletter (optional, phase 2), and copyright line: `© {current year} Veltrixa Technology. All Rights Reserved.`
9. **SEO & Meta** — per-page metadata, Open Graph/Twitter cards using brand palette, sitemap.xml, robots.txt, JSON-LD LocalBusiness/Organization schema.
10. **Accessibility** — semantic HTML, keyboard-navigable carousel/menu, `prefers-reduced-motion` respected across all GSAP/Three.js animation (provide non-animated fallback states), color contrast AA minimum on light sections.
11. **Analytics-ready** — structure for GA4/Meta Pixel drop-in (event stubs on CTA clicks, form submit, call button clicks).

---

## 4. NON-FUNCTIONAL REQUIREMENTS

- **Performance:** lazy-load 3D scene and below-the-fold sections; compress/convert logo & graphics to WebP/AVIF + SVG; code-split GSAP/Three.js bundles; target Lighthouse Performance ≥ 85 on mobile despite animation load.
- **Responsiveness:** mobile-first breakpoints (360px, 480px, 768px, 1024px, 1280px, 1536px); 3D scene simplifies or becomes a lighter/static variant below 768px to protect performance and battery.
- **Browser Support:** last 2 versions of Chrome, Safari, Edge, Firefox; graceful degradation (no WebGL support → static hero graphic).
- **Security:** form input sanitization, HTTPS enforced, environment-variable-based secrets for email service, basic spam protection (honeypot + simple rate limiting).
- **Maintainability:** service/pricing content sourced from a single typed content file/CMS-lite JSON so non-devs can update copy without touching components.
- **Scalability:** architecture allows later addition of a Blog, Portfolio/Case Studies, and Client Login without restructuring.

---

## 5. INFORMATION ARCHITECTURE / SITEMAP

```
/                     Home
/services             Services (overview + all categories)
/services/[slug]      Individual service detail (dynamic route, optional phase 1.5)
/about                About Us
/process              How We Work (process roadmap, can also live as a Home section + standalone page)
/pricing              Pricing & Packages
/contact              Contact / Get an Estimate / Book a Call
/privacy-policy        Legal
/terms-of-service      Legal
```

> Note: A `/work` or `/portfolio` route is intentionally **excluded from phase 1** since no real client projects exist yet — placeholder note in this doc's Appendix explains how to add it later without copying the reference site's projects.

---

## 6. SYSTEM ARCHITECTURE

### 6.1 Tech Stack
- **Framework:** Next.js 14+ (App Router), TypeScript.
- **Styling:** Tailwind CSS (with the custom design tokens from Section 1 wired into `tailwind.config.ts`), CSS variables for theme colors.
- **Animation:** GSAP (core + ScrollTrigger + Draggable/Observer plugins) for all scroll/carousel/timeline animation; Framer Motion optional for micro-interactions (button/hover states) if desired alongside GSAP.
- **3D:** Three.js via React Three Fiber (`@react-three/fiber`) + `@react-three/drei` for the hero 3D element and any secondary 3D accents.
- **Forms:** React Hook Form + Zod validation.
- **Email delivery:** Resend (preferred) or Nodemailer via a Next.js Route Handler (`/app/api/contact/route.ts`).
- **Icons:** Lucide React (swap to custom SVGs for brand-specific chevron/VT motifs).
- **Fonts:** `next/font` for Space Grotesk/Sora + Inter (self-hosted, no layout shift).
- **Deployment:** Vercel (recommended for Next.js + edge functions) or any Node-compatible host.
- **Content model:** `/content/services.ts`, `/content/process.ts`, `/content/pricing.ts` — typed arrays consumed by components (single source of truth, easy to edit).

### 6.2 Folder Structure (indicative)
```
/app
  /(site)
    /page.tsx                → Home
    /services/page.tsx
    /services/[slug]/page.tsx
    /about/page.tsx
    /process/page.tsx
    /pricing/page.tsx
    /contact/page.tsx
    /privacy-policy/page.tsx
    /terms-of-service/page.tsx
  /api/contact/route.ts
  layout.tsx
  globals.css
/components
  /layout      (Header, Footer, MobileMenu)
  /sections    (Hero, ServicesCarousel, ProcessTimeline, PricingHighlight, ContactForm, Stats, CTASection)
  /three       (HeroScene, VTMonogram3D)
  /ui          (Button, Card, Badge, Input, Textarea, Select, Modal)
/content       (services.ts, process.ts, pricing.ts, seo.ts)
/lib           (validations.ts, email.ts, analytics.ts)
/public        (logo assets, og-image, favicons)
```

### 6.3 Component Architecture Notes
- Every animated section is a **client component** wrapping its GSAP context in `useGSAP` (from `@gsap/react`) with proper cleanup (`gsap.context()` / `revertOnUpdate`) to avoid memory leaks on route change.
- The 3D hero is isolated in its own client component, dynamically imported with `next/dynamic` (`ssr:false`) and a lightweight loading skeleton, so it never blocks server-rendered content/SEO text.
- Carousel component accepts a generic `items` prop so it can be reused for Services and (later) Testimonials/Portfolio.

---

## 7. UI/UX DESIGN SYSTEM

### 7.1 Layout Principles
- Generous whitespace on light sections; dense/dramatic contrast only in dark hero & CTA bands.
- 12-column responsive grid, 1200–1320px max content width, fluid gutters.
- Section rhythm: alternate light → light-alt → dark-band roughly every 3–4 sections to keep pacing (never two dark sections back-to-back except Hero→immediate stats strip if needed).

### 7.2 Core Components & Behavior
| Component | Behavior |
|---|---|
| **Header** | Transparent over hero, blurs+solidifies with logo swap on scroll ≥ 80px; active-link cyan underline; CTA button "Get a Free Quote" always visible. |
| **Hero** | Dark background, 3D VT/geometric element right or center, chrome-gradient headline, cyan-accented sub-line, two CTAs ("Get Free Estimate" primary cyan, "Book 15-min Call" secondary outline), scroll-cue indicator animated with GSAP. |
| **Stats/Trust strip** | Animated counters (projects mindset stated generically e.g. "Full-stack agency", "All-industry expertise", "Fast turnaround", "Dedicated support") — no fabricated hard numbers unless user later supplies real ones. |
| **Services Carousel** | Card-based, GSAP Draggable + inertia OR Observer-driven horizontal scroll; each card: icon, title, 1–2 line description, "From ₹X" tag where relevant, hover lift + cyan border glow. |
| **Process Timeline** | Numbered steps with connecting animated line (SVG stroke-dashoffset draw-on-scroll), icon per step, alternating layout on desktop, stacked on mobile. |
| **Pricing Highlight Band** | Dark band, large chrome/cyan price callout "Websites starting at ₹3,499*/-", supporting line "*All prices exclusive of GST", secondary CTA to full pricing page. |
| **About** | Split layout: brand story/mission copy + graphic (logo motif abstracted into ambient background shape), values grid with icons. |
| **Contact** | Two-column: left = enquiry form; right = direct contact card (phone x2 as tap-to-call, email as tap-to-email, WhatsApp button, "Book Free 15-min Call" scheduling block) + office/availability note. |
| **Footer** | Dark, 4-column (Brand+tagline+socials / Services links / Company links / Contact), bottom bar with copyright + legal links. |

### 7.3 Motion & Animation Guidelines (GSAP + reactbits.dev-style patterns)
- **Entrance reveals:** fade+translateY(24px) with stagger 0.06–0.1s on card grids and text lines (SplitText-style word/line reveal for hero headline).
- **Scroll-pinned segments:** Services and Process sections use `ScrollTrigger.pin` for a horizontal-scroll-within-vertical-scroll effect on desktop ≥1024px; simplified to native scroll/swipe on mobile.
- **Magnetic buttons:** primary CTAs have a subtle cursor-magnet effect (desktop only) — GSAP quickTo for x/y translate toward cursor within a bounded radius.
- **Cursor-reactive 3D:** hero 3D object rotates subtly toward pointer position (desktop) / device orientation or auto-rotate (mobile).
- **Marquee accents:** thin cyan marquee strip (e.g., scrolling text "WEB • APP • BRANDING • MARKETING • SEO • ") between sections for texture, reactbits-style infinite scroll.
- **Reduced motion:** all of the above must check `prefers-reduced-motion` and fall back to simple opacity fades / static states.

---

## 8. SERVICES CONTENT (all to be represented on the site)

> Framing note: present these as **"Solutions for every business — from startups to enterprises"** in a single general statement rather than an industry-by-industry breakdown, per project direction.

1. **Website Design & Development** — Starting at ₹3,499/- (excl. GST). Custom responsive websites, landing pages, business sites, portfolio sites.
2. **Web Application Development** — Custom web apps, dashboards, internal tools, SaaS MVPs.
3. **Mobile App Development** — iOS & Android, cross-platform builds.
4. **UI/UX Design** — Wireframes, prototypes, design systems, usability-first interfaces.
5. **Branding & Logo Design** — Brand identity, logo design, style guides.
6. **E-commerce Development** — Online stores, catalog + checkout builds.
7. **Digital & Social Media Marketing** — Campaign strategy, ad management, content calendars, social growth.
8. **SEO Package** — On-page/technical SEO, keyword strategy, local SEO, ongoing optimization.
9. **Video Editing** — Promotional videos, reels/shorts editing, motion graphics for socials/ads.
10. **Poster & Graphic Design** — Posters, social creatives, marketing collateral design.
11. **Maintenance & Support** — Ongoing website/app updates, hosting support, bug fixes.

Each service card/detail should include: short description, what's included (bullet list), and (only where relevant, e.g., Websites) a starting price with the GST-exclusive disclaimer.

---

## 9. PROCESS / ROADMAP (agency working process)

1. **Discovery Call (Free, 15 minutes)** — Understand goals, requirements, and budget; no obligation.
2. **Proposal & Estimate** — Scope, timeline, and pricing shared clearly, tailored to the enquiry.
3. **Planning & Wireframing** — Sitemap, wireframes, and content structure agreed upon.
4. **Design** — Visual UI design/mockups aligned to brand, shared for feedback.
5. **Development** — Build phase (website/app/marketing assets), with progress check-ins.
6. **Review & Revisions** — Client walkthrough, feedback rounds, refinements.
7. **Testing & QA** — Cross-device/browser testing, performance and accessibility checks.
8. **Launch / Delivery** — Go-live (or asset delivery for design/marketing/video work) plus walkthrough/training.
9. **Post-Launch Support** — Ongoing maintenance, updates, and marketing support as needed.

---

## 10. CONTACT / LEAD-CAPTURE SPEC

**Form fields:**
- Full Name (required)
- Company Name (optional)
- Mobile Number (required, validated)
- Email Address (required, validated)
- Service Interested In (required, dropdown — populated from Section 8 list, + "Not sure yet")
- Reason for Enquiry / Project Details (required, textarea — placeholder: "Tell us what you need help with…")
- Preferred Contact Time (optional)

**CTAs on this page:**
- "Book a Free 15-Minute Call" (primary)
- "Get an Estimate" (submits form)
- Direct: Call +91 72049 06807 / +91 83107 70880, Email veltrixatechnology@gmail.com, WhatsApp

**Post-submit:** success animation/toast, auto-email acknowledgment to the user (optional phase 2), internal email to veltrixatechnology@gmail.com with all field values.

---

## 11. FOOTER / LEGAL COPY

```
© {current year} Veltrixa Technology. All Rights Reserved.
```
Include Privacy Policy and Terms of Service pages (standard agency boilerplate — draft generic versions covering data collection via the contact form, cookies/analytics, and no-liability/service-terms clauses; to be reviewed by the client before go-live).

---

## 12. TECHNICAL SEO REQUIREMENTS (site-wide, mandatory)

> Note: this is SEO **for the Veltrixa website itself**, separate from the "SEO Package" listed as a client-facing service in Section 8. Both must be implemented — this section governs the former.

### 12.1 On-Page & Metadata
- Unique, keyword-considered `<title>` (50–60 chars) and meta description (140–160 chars) per page, generated via Next.js `generateMetadata` / `metadata` exports — no duplicate titles across routes.
- One `<h1>` per page, logical `h2`/`h3` hierarchy matching the visual section order (no skipped levels, no heading used purely for styling).
- Descriptive, human-readable URL slugs (`/services/website-development`, not `/services/1`), all lowercase, hyphen-separated.
- Internal linking: every service card links to its detail anchor/page; footer and body copy cross-link related pages (Services ↔ Pricing ↔ Process ↔ Contact).
- Image `alt` text on every image (descriptive, not keyword-stuffed); logo alt = "Veltrixa Technology logo".

### 12.2 Structured Data (JSON-LD)
- `Organization` schema on the Home page (name, logo, url, sameAs social links, contactPoint with both phone numbers and email).
- `LocalBusiness` or `ProfessionalService` schema (if/when a location is confirmed) with priceRange reflecting the "starting at ₹3,499" positioning.
- `Service` schema for each entry in Section 8 (name, description, provider = Organization).
- `BreadcrumbList` schema on nested pages (e.g., individual service detail pages).
- `FAQPage` schema if an FAQ block is added to Services/Pricing/Contact (recommended — good for featured snippets and voice search).

### 12.3 Technical Foundations
- `sitemap.xml` auto-generated via Next.js `app/sitemap.ts`, covering every route in Section 5.
- `robots.txt` via `app/robots.ts`, allowing all crawl, pointing to the sitemap.
- Canonical tags (`rel=canonical`) on every page to avoid duplicate-content issues from trailing slashes/query params.
- Self-hosted fonts and `next/image` for all imagery to protect Core Web Vitals (LCP/CLS directly affect ranking).
- Server-rendered/static HTML for all core content (headlines, service descriptions, pricing, contact info) — the 3D/GSAP layer must be a progressive enhancement on top of real crawlable text, never a replacement for it (e.g., no text-as-canvas/WebGL-only content).
- Mobile-first indexing compliance: since the site is mobile-responsive by requirement (Section 4), verify parity of content between mobile and desktop DOM (nothing hidden from mobile that exists on desktop).
- Page speed: target Core Web Vitals thresholds already listed in Section 4 (LCP < 2.5s, CLS < 0.1, INP < 200ms) — these are ranking signals as well as UX requirements.

### 12.4 Open Graph & Social
- Unique OG image per key page (Home, Services, Pricing, Contact) using brand palette/logo, 1200×630px.
- `og:title`, `og:description`, `og:type`, `og:url`, `twitter:card=summary_large_image` on every page.

### 12.5 Local & Off-Page Readiness
- Ensure NAP (Name, Address, Phone) consistency across the site footer, Contact page, and schema — even if address is left generic for now, phone/email must match exactly everywhere.
- Add a Google Business Profile–ready contact block (phone tap-to-call, email, WhatsApp) since this supports local SEO once a GMB listing is created.
- Structure the "SEO Package" service page (Section 8) itself to rank — since it's a service Veltrixa sells, it should be a strong on-page SEO example in its own right.

---

## 13. DEVELOPMENT PLAN

### Phase 0 — Setup (Day 1)
- Initialize Next.js + TS + Tailwind project; wire design tokens; set up fonts; add logo assets (dark + light variants, favicon, OG image).

### Phase 1 — Core Structure (Day 2–3)
- Build Header/Footer/MobileMenu, global layout, routing for all pages in Section 5, base content files (`/content/*.ts`).

### Phase 2 — Home Page & Hero (Day 3–5)
- Build Hero with 3D scene (R3F), headline reveal animation, stats strip, CTA magnetic buttons.

### Phase 3 — Services & Process (Day 5–7)
- Build Services carousel (GSAP draggable), service detail sections/cards, animated Process timeline.

### Phase 4 — Pricing, About, Contact (Day 7–9)
- Pricing highlight band + full pricing page, About page, Contact page with form + API route + email integration.

### Phase 5 — Motion Polish (Day 9–11)
- Apply ScrollTrigger pinning, marquee accents, magnetic buttons, cursor-reactive 3D, reduced-motion fallbacks across all sections.

### Phase 6 — QA & Optimization (Day 11–13)
- Cross-device testing, Lighthouse/perf pass, accessibility audit, SEO metadata + schema, sitemap/robots.

### Phase 7 — Launch (Day 14)
- Final content check, deploy to Vercel, connect domain, verify forms end-to-end, go live.

### Future Phases (post-launch, not in scope now)
- Blog/CMS integration.
- Portfolio/Case Studies page (once real client work exists — do **not** backfill with reference-site projects).
- Testimonials section.
- Live chat / WhatsApp widget.
- Client login/portal.

---

## 14. BUILD INSTRUCTION SUMMARY (for the AI coding agent)

Build the full Veltrixa Technology marketing website per every section above:
- Use Next.js 14 (App Router) + TypeScript + Tailwind, with GSAP for scroll/carousel/timeline animation and React Three Fiber for the 3D hero element.
- Follow the color palette, typography, and motion guidelines in Sections 1 and 7 exactly — **light-forward overall design**, with dark dramatic bands only for Hero, Pricing Highlight, and Footer, echoing the supplied logo's black/chrome/cyan identity.
- Implement all pages from Section 5, all services from Section 8, the process roadmap from Section 9, and the contact/lead-capture spec from Section 10.
- Implement every requirement in Section 12 (Technical SEO) exactly — metadata, JSON-LD schema, sitemap/robots, canonical tags, server-rendered crawlable content beneath the animation layer, and Core Web Vitals targets.
- Make every animated section respect `prefers-reduced-motion`, and ensure full mobile responsiveness with simplified/lighter 3D and animation on small screens.
- Do not fabricate client projects, testimonials, or numeric stats — use qualitative trust statements only, per Section 7.2.
- Footer copyright: `© {current year} Veltrixa Technology. All Rights Reserved.`
- Contact details to embed site-wide: veltrixatechnology@gmail.com · +91 72049 06807 · +91 83107 70880.
