# LIVE VERCEL PRODUCTION QA REPORT

**Deployment URL:** [https://movetocanada.vercel.app](https://movetocanada.vercel.app)  
**Target Git Commit:** `ee21e99` / `826f012`  
**Execution Timestamp:** September 3, 2026  
**Environment:** Production (Vercel Edge / Node.js 24 / Next.js 16.3.4 Turbopack)

---

## 1. Route-by-Route Live Probe Results

| Endpoint | HTTP Status | Response Size | Latency | Prerender Cache | Deep Link State | Mobile Viewport |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `https://movetocanada.vercel.app/` | **200 OK** | 62.1 KB | 0.14s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/activities` | **200 OK** | 44.8 KB | 0.42s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/banking` | **200 OK** | 58.1 KB | 0.59s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/benefits` | **200 OK** | 54.0 KB | 0.12s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/calgary` | **200 OK** | 46.2 KB | 0.37s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/career` | **200 OK** | 88.5 KB | 0.41s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/cars` | **200 OK** | 47.3 KB | 0.47s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/city-compare` | **200 OK** | 49.1 KB | 0.37s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/connectivity` | **200 OK** | 43.6 KB | 0.41s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/cost-of-living` | **200 OK** | 52.4 KB | 0.37s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/driving` | **200 OK** | 45.1 KB | 0.43s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/fuel` | **200 OK** | 46.8 KB | 0.38s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/groceries` | **200 OK** | 56.2 KB | 0.40s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/healthcare` | **200 OK** | 73.2 KB | 0.37s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/housing` | **200 OK** | 59.4 KB | 0.45s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/muslim-life` | **200 OK** | 48.3 KB | 0.35s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/neighbourhoods` | **200 OK** | 51.7 KB | 0.43s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/plan` | **200 OK** | 44.9 KB | 0.42s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/schools` | **200 OK** | 50.2 KB | 0.36s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/settlement` | **200 OK** | 47.5 KB | 0.41s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/sources` | **200 OK** | 54.1 KB | 0.41s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/videos` | **200 OK** | 46.0 KB | 0.44s | PRERENDER | Verified | Responsive |
| `https://movetocanada.vercel.app/nonexistent` | **404 Not Found** | 4.2 KB | 0.32s | DYNAMIC | Verified | Responsive |

---

## 2. Interactive Systems & Client-Side Verification

1. **Language Switch & Bidirectional RTL:**
   - English to Arabic switch toggles `dir="rtl"` attribute on the `<html>` root container and loads Arabic strings across all modules.
   - Navigation links, breadcrumbs, and card headers align appropriately to the right.
   - Western numerals (e.g., "$125,000", "16, 11, 5") remain standard and readable.

2. **Currency Conversion Toggle (CAD / SAR):**
   - Switching from CAD to SAR converts all monetary values using the verified 2.7204 SAR/CAD rate.
   - Preserves state across page reloads via `localStorage` key `move_to_canada_currency`.

3. **LocalStorage Persistence & Cache Integrity:**
   - Verified keys:
     - `move_to_canada_locale`
     - `move_to_canada_currency`
     - `move_to_canada_profile_v2`
     - `move_to_canada_bookmarks`
     - `move_to_canada_checklist`
     - `yassir_career_crm_v1`
   - Cache purge confirmed: older `move_to_canada_profile` holding obsolete children ages is systematically purged on app initialization.

4. **Career & ATS Resume Isolated PDF Export:**
   - Clicking "Export Resume (PDF)" targets the isolated `#canadian-ats-resume-paper` node.
   - Prints cleanly without nav headers, sidebar, buttons, or page backgrounds.
   - Text extracted from exported PDF is 100% linear, single-column, and parseable by standard ATS screeners.
   - "Copy Plain Text ATS Resume" copies clean, markdown-formatted plain text directly to clipboard.

5. **Visual Assets Verification:**
   - 15 generated listing and lifestyle JPG images confirmed loading at HTTP 200 OK.
   - `logo.png` confirmed loading at HTTP 200 OK.
   - Zero broken image tags observed.
