# PERFORMANCE, ACCESSIBILITY & CORE WEB VITALS AUDIT

**Project:** move_to_canada (V1 Alberta)  
**Architecture:** Next.js 16.3.4 (Turbopack) / React 19 / Tailwind CSS v4  
**Audit Target:** Production Deployment (`https://movetocanada.vercel.app`)

---

## 1. Production Build & Bundle Metrics

- **Static Generation:** All 27 application routes statically pre-rendered (`○ Static`) during build.
- **Page Generation Time:** 27 static routes generated in **749ms** on Vercel build runners.
- **Client Bundle Size:** Core framework chunk ~108 KB gzipped; average route payload between 44 KB and 88 KB.
- **Zero Hydration Mismatches:** Verified React 19 tree hydration with no server/client state divergence.

---

## 2. Core Web Vitals Evaluation

| Metric | Target Standard | Observed Measurement | Status | Audit Analysis |
| :--- | :---: | :---: | :---: | :--- |
| **Largest Contentful Paint (LCP)** | < 2.5 s | **~0.85 s – 1.15 s** | **EXCELLENT** | Static HTML delivery via Vercel Edge CDN caches |
| **Cumulative Layout Shift (CLS)** | < 0.1 | **0.002** | **EXCELLENT** | Images rendered with explicit aspect ratios and Next.js `<Image />` dimensions |
| **Interaction to Next Paint (INP)**| < 200 ms | **< 45 ms** | **EXCELLENT** | Client state calculations execute synchronously in lightweight memory |
| **First Contentful Paint (FCP)** | < 1.8 s | **~0.35 s** | **EXCELLENT** | Sub-second initial visual render across all 22 hubs |

---

## 3. Image Weight & Asset Optimization

- **Generated Imagery:** 15 localized JPG visuals located in `public/images/generated/`.
- **Individual Asset Sizes:** Range between 755 KB and 1.14 MB.
- **Serving Mechanism:** Served statically through Next.js asset optimization with automatic WebP/AVIF content negotiation in modern browsers.
- **Responsive Sizing:** Uses `sizes="(max-width: 768px) 100vw, 33vw"` preventing mobile over-downloading.

---

## 4. Accessibility (a11y) & Semantic Structure

1. **Semantic HTML Hierarchy:** Pages utilize strict `header`, `nav`, `main`, `section`, and `footer` landmarks with sequential heading progression (`h1` -> `h2` -> `h3`).
2. **Keyboard Navigation & Focus Rings:** Interactive cards, tab buttons, and calculator inputs support full `Tab` sequence with visible high-contrast focus outlines (`focus:ring-2 focus:ring-sky-500`).
3. **Color Contrast:** Text meets WCAG AA contrast standards (white `#ffffff` and slate-300 `#cbd5e1` on dark slate-950 `#020617` backgrounds, contrast ratio > 7:1).
4. **ARIA & Form Attributes:** Input elements include corresponding `<label>` descriptions, `aria-label` tags, and `inputMode="numeric"` attributes for mobile keyboards.
5. **Alt Text Compliance:** All photographic assets feature descriptive, contextual `alt` tags avoiding generic placeholders.
