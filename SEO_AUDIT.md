# HolaTandem SEO Audit — holatandem.com

**Date:** July 7, 2026  
**Stack:** Next.js App Router · Vercel  
**Business type:** B2B SaaS + Local Service (Fuengirola, Málaga)  
**Audited by:** Claude SEO (8 parallel sub-agents)

---

## SEO Health Score: 46 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 52/100 | 11.4 |
| Content Quality (E-E-A-T) | 23% | 43/100 | 9.9 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Schema / Structured Data | 10% | 45/100 | 4.5 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness (GEO) | 10% | 41/100 | 4.1 |
| Images | 5% | 40/100 | 2.0 |
| **Total** | | | **46 / 100** |

The site has a clean foundation — Next.js SSR, Vercel CDN, TTFB 151ms, strong brand voice — but carries fundamental canonicalization failures that undermine every other investment, and a near-total absence of trust signals (no testimonials, no GBP, no blog, no social presence) that limit both ranking and conversion.

---

## Sub-Agent Scores

| Agent | Score | Primary Gap |
|---|---|---|
| Technical SEO | 52/100 | Canonical contradiction, no hreflang, JS language switch |
| Content / E-E-A-T | 43/100 | Zero testimonials, no blog, no NIF |
| Schema | ~45/100 | Missing SoftwareApplication, telephone, geo |
| Sitemap | ~65/100 | Dynamic lastmod, non-www URLs |
| Performance | ~55/100 | Google Fonts blocking LCP, founder.jpg mishandled |
| GEO / AI Search | 41/100 | No llms.txt, no statistics, no external signals |
| Local SEO | 34/100 | No GBP, Spanish invisible, no citations |
| SXO | 48/100 | No verticals, pricing opacity, dual CTA |

---

## Critical Issues — Fix Immediately

### C1 · Canonical vs www redirect contradiction
**Categories:** Technical · Indexability

The server issues a `308 Permanent Redirect` from `holatandem.com` → `www.holatandem.com`, but every `<link rel="canonical">` on every page points back to `https://holatandem.com/`. The sitemap and `robots.txt` also use non-www URLs, creating a four-way contradiction. Google cannot determine the authoritative URL.

**Fix (recommended — keep non-www):** Remove the www redirect in Vercel domain settings. The entire codebase (canonical, schema, sitemap, `robots.ts`) already uses non-www — the redirect is the only outlier.

**Fix (alternative — keep www):** Update `metadataBase` in `layout.tsx`, all sitemap entries in `sitemap.ts`, the `robots.ts` sitemap directive, and `localBusinessSchema` URL to `https://www.holatandem.com/`.

---

### C2 · Sub-pages canonicalize to the homepage
**Categories:** Technical · Indexability

`/privacy` and `/aviso-legal` both emit `<link rel="canonical" href="https://holatandem.com"/>` — pointing to the homepage. Google treats them as duplicates and will not index them independently.

**Fix** — add to `app/privacy/page.tsx` and `app/aviso-legal/page.tsx`:
```ts
export const metadata: Metadata = {
  alternates: { canonical: '/privacy' }, // or '/aviso-legal'
};
```

---

### C3 · Spanish content is invisible to Google
**Categories:** Technical · International · Local SEO

The bilingual EN/ES switch uses `data-en`/`data-es` attribute swapping via client-side JS. Google crawls the static HTML and indexes only the English text. `<html lang="en">` is hardcoded. No `hreflang` tags exist. Spanish-speaking business owners in Málaga searching in Spanish find nothing.

**Fix (short-term):** Add hreflang tags in `layout.tsx`:
```tsx
alternates: {
  languages: { 'en': '/', 'es': '/', 'x-default': '/' }
}
```

**Fix (proper):** Implement Next.js i18n routing with `/es/` routes serving SSR-rendered Spanish HTML. This unlocks the entire Spanish-language search market — the primary audience.

---

### C4 · No Google Business Profile confirmed
**Categories:** Local SEO · Map Pack

Zero on-site evidence of a claimed GBP. Without a verified GBP, HolaTandem cannot appear in the Local Pack or Google Maps for any query. GBP category is the #1 local ranking factor (Whitespark 2026).

**Fix:** Create and verify a GBP with primary category "Internet Marketing Service", service area set to Costa del Sol, photos uploaded, and a system to collect client reviews.

---

### C5 · No llms.txt
**Categories:** GEO · AI Search

`/llms.txt` returns 404. This is the primary machine-readable signal for LLM systems (ChatGPT, Perplexity, Claude). For a SaaS with no Wikipedia entry and no external brand mentions, this is the fastest way to establish entity identity with AI search.

**Fix:** Create `public/llms.txt`:
```
# HolaTandem
> Done-for-you WhatsApp AI for Costa del Sol salons, aesthetic clinics and estate agents.
> Answers leads instantly, books appointments and follows up in any language.
> Founded by Elena Ignat, based in Fuengirola, Málaga, Spain.
> Supports: Spanish, English, Russian, German, French, Romanian.
> GDPR-compliant, EU-hosted infrastructure.

## Product
- What it is: A managed WhatsApp AI assistant service (not a self-serve chatbot).
- Who it is for: Hair salons, aesthetic clinics, and estate agents in Costa del Sol, Spain.
- How it works: White-glove setup in days; AI handles enquiries 24/7; human handoff on demand.
- No long-term contracts. Cancel anytime.

## Key pages
- Homepage: https://holatandem.com/
- Privacy Policy: https://holatandem.com/privacy

## Contact
- WhatsApp: https://wa.me/34638054941
- Email: info@holatandem.com
- Location: Fuengirola, Málaga, Spain
```

---

### C6 · Spanish NIF/CIF missing from Aviso Legal
**Categories:** Legal compliance · Trust

Spanish LSSI-CE (Ley 34/2002) requires the operator's tax ID in the legal notice. Its absence is a legal compliance risk and a local trust signal gap.

**Fix:** Add Elena Ignat's NIF to `/aviso-legal` and display it in the footer alongside the address.

---

## High Priority — Fix Within 1 Week

### H1 · FAQPage schema missing despite 7 FAQ items

Seven well-written Q&A pairs exist in `<details>/<summary>` elements with zero `FAQPage` JSON-LD. This adds Google AIO eligibility and AI citation signals with no content changes — the highest-leverage one-hour schema task.

**Fix:** Add to `page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this just a chatbot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Unlike a basic chatbot, it understands what each customer is asking and replies naturally in their language — and hands the conversation to you whenever a human touch is needed."
      }
    }
  ]
}
```
Add all 7 existing FAQ items. Add one new entry: "What is HolaTandem?" with a 2–3 sentence entity definition.

---

### H2 · Schema missing telephone, geo, and postalCode

The `ProfessionalService` block is missing three of the most important local ranking properties.

**Fix** — extend the existing schema in `page.tsx`:
```json
"telephone": "+34638054941",
"email": "info@holatandem.com",
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 36.54006,
  "longitude": -4.62504
},
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Fuengirola",
  "postalCode": "29640",
  "addressRegion": "Málaga",
  "addressCountry": "ES"
}
```

---

### H3 · No SoftwareApplication or WebSite schema

The product itself has no schema. Recommended `@graph` structure for `layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://holatandem.com/#website",
      "name": "HolaTandem",
      "url": "https://holatandem.com/",
      "publisher": { "@id": "https://holatandem.com/#organization" }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://holatandem.com/#organization",
      "name": "HolaTandem",
      "telephone": "+34638054941",
      "email": "info@holatandem.com",
      "url": "https://holatandem.com/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fuengirola",
        "postalCode": "29640",
        "addressRegion": "Málaga",
        "addressCountry": "ES"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 36.54006, "longitude": -4.62504 },
      "areaServed": { "@type": "Place", "name": "Costa del Sol, Málaga, Spain" },
      "knowsLanguage": ["es", "en", "ru", "de", "fr", "ro"],
      "founder": { "@id": "https://holatandem.com/#elena-ignat" }
    }
  ]
}
```

Add a separate `SoftwareApplication` block in `page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://holatandem.com/#app",
  "name": "HolaTandem WhatsApp AI Assistant",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "WhatsApp Business Platform",
  "featureList": [
    "Instant WhatsApp replies in any language",
    "Automated appointment booking",
    "Lead qualification",
    "Appointment reminders and no-show reduction",
    "Human handover on demand",
    "Done-for-you setup and management"
  ],
  "provider": { "@id": "https://holatandem.com/#organization" }
}
```

And a `Person` block for Elena Ignat:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://holatandem.com/#elena-ignat",
  "name": "Elena Ignat",
  "jobTitle": "Founder",
  "image": "https://holatandem.com/assets/founder.jpg",
  "worksFor": { "@id": "https://holatandem.com/#organization" }
}
```

---

### H4 · Zero testimonials or social proof

The site asks business owners to connect their primary customer channel (WhatsApp) to an AI, backed by zero social proof. Even one named client quote with a business type and location would disproportionately improve E-E-A-T and conversion.

**Fix:** Obtain 2–3 client quotes from named Costa del Sol businesses. Display with business type and town. Example placeholder:
> "I was losing bookings every evening. Now my WhatsApp replies by itself and my diary fills up. I haven't had to chase a client in weeks." — Maria G., hair salon, Marbella

---

### H5 · Pricing completely hidden

The Pricing section creates strong searcher expectation then delivers "book a demo." Decision-stage buyers comparing tools exit here. Competitors show pricing from their SERP snippet.

**Fix:** Add at minimum a "from €X/month" anchor price with a note that custom plans follow the demo call.

---

### H6 · Dynamic `lastmod` in sitemap

`sitemap.ts` uses `new Date()` for all entries — every deploy stamps all pages with the same identical timestamp regardless of content changes. Google stops trusting this signal.

**Fix** in `sitemap.ts`:
```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://holatandem.com/', lastModified: '2026-06-26' },
    { url: 'https://holatandem.com/privacy', lastModified: '2026-06-02' },
    { url: 'https://holatandem.com/aviso-legal', lastModified: '2026-06-08' },
  ];
}
```
Update the date manually when page content meaningfully changes.

---

### H7 · Google Fonts render-blocking (LCP)

External Google Fonts CSS fires a cross-origin request before the browser can paint. Estimated LCP penalty: 200–600ms. Estimated current LCP: **2.0–3.5s** (borderline Good/Needs Improvement).

**Fix** — replace in `layout.tsx`:
```tsx
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // remove unused weight 500
  display: 'swap',
  variable: '--font-manrope',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-playfair',
});
```
`next/font` self-hosts at build time, eliminates the external network request, and auto-injects `size-adjust` to reduce CLS from font swap.

---

### H8 · Founder image mishandled (preload + format + dimensions)

Three overlapping issues:
1. `founder.jpg` is eagerly preloaded in `<head>` but is the 8th section — far below the fold, stealing bandwidth from render-critical resources
2. Served as 208KB JPEG; AVIF equivalent would be ~50KB
3. No `width`/`height` attributes → CLS risk
4. Plain `<img>` bypasses Next.js Image Optimization entirely

**Fix:**
```tsx
// Remove from layout.tsx:
// <link rel="preload" href="assets/founder.jpg" as="image" />

// Replace in founder section:
import Image from 'next/image';

<Image
  src="/assets/founder.jpg"
  alt="Elena Ignat, founder of HolaTandem"
  width={104}
  height={104}
  loading="lazy"
  className="founder-avatar"
/>
```

---

### H9 · Language switcher: 117 synchronous DOM mutations (INP risk)

`setLang()` in `HeaderControls.tsx` runs `innerHTML` on 117 elements in one synchronous call. On mid-range Android this is a 150–300ms long task — INP "Needs Improvement" territory.

**Fix:**
```ts
function setLang(l: 'en' | 'es') {
  // Respond to interaction immediately
  document.getElementById('en')?.classList.toggle('active', l === 'en');
  document.getElementById('es')?.classList.toggle('active', l === 'es');

  // Defer bulk DOM writes until after the click is committed
  requestAnimationFrame(() => {
    document.documentElement.lang = l;
    document.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
      const v = el.getAttribute('data-' + l);
      if (v != null) el.innerHTML = v;
    });
    try { localStorage.setItem('ht_lang', l); } catch {}
  });
}
```

---

### H10 · Missing security headers

No `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, or `Referrer-Policy`.

**Fix** — add to `next.config.mjs` in the `headers()` function:
```js
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
```

---

### H11 · `/qr` page needs noindex

`/qr/page.tsx` is a pure redirect with no `noindex`. Googlebot discovering it independently will waste crawl budget.

**Fix:**
```ts
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

---

## Medium Priority — Fix Within 1 Month

| # | Issue | Fix |
|---|---|---|
| M1 | No vertical landing pages | Create `/salons`, `/aesthetic-clinics`, `/estate-agents` with vertical-specific H1, copy, FAQ, schema — the #1 local and SERP ranking opportunity |
| M2 | No blog / content layer | Entire organic surface is 889 words; start with 3 posts targeting informational WhatsApp automation queries |
| M3 | No quantified claims | Add at least one specific statistic per pain section; AI systems and skeptical buyers both require numbers |
| M4 | Founder credentials not linked | Add one sentence of relevant background + LinkedIn URL to the founder bio |
| M5 | No social media links | Create and link a LinkedIn company page and Instagram |
| M6 | Title tag has no geo-modifier | Change to: "WhatsApp AI for Costa del Sol Salons & Clinics — HolaTandem" |
| M7 | Comparison table uses `<div>` not `<table>` | Switch to proper HTML `<table>` elements for AI extraction and semantic correctness |
| M8 | No IndexNow | Submit URLs to Bing/Yandex on each deploy via a GitHub Action |
| M9 | HSTS missing `includeSubDomains; preload` | Update header; submit to hstspreload.org |
| M10 | No `/contact` page | Dedicated page with full NAP in `<address>`, Google Maps embed, business hours, WhatsApp link |
| M11 | No `openingHoursSpecification` in schema | Add 24/7 spec for the AI service |
| M12 | Remove `changefreq`/`priority` from sitemap | Both ignored by Google; remove dead weight |
| M13 | Dual CTA at equal weight | Make WhatsApp "Try the demo" the primary CTA; demote Calendly to secondary |
| M14 | Register on Spain B2B directories | Clutch.co, Páginas Amarillas, Cylex Spain, Trustpilot Spain, ProductHunt, G2/Capterra |

---

## Low Priority — Backlog

- Add `og:image:alt` meta tag
- Fix copyright year rendered by JS — populate server-side
- Change nav logo from `href="#top"` to `href="/"`
- Add `rel="noreferrer"` to all cross-origin CTAs (WhatsApp, Calendly)
- SSL cert expires **August 31, 2026** — monitor Vercel auto-renewal
- Add `sameAs` array to schema once social profiles exist
- Add explicit AI crawler rules to `robots.ts` (GPTBot, ClaudeBot, PerplexityBot named explicitly)
- Register YouTube channel; post a 90-second WhatsApp demo video (highest-correlation AI citation signal: ~0.737)
- Resolve Facebook handle ambiguity (@holatandem maps to a personal profile)
- Add "What is HolaTandem?" as the first FAQ entry with a 55-word entity definition answer
- Add FAQPage entries for PAA-matched questions: "How does it integrate with my booking software?", "What happens if the AI gets it wrong?", "How much does it cost?"
- Add `priceRange: "€€"` to schema

---

## Prioritised Sprint Plan

### Sprint 1 — One afternoon, no architectural changes
1. Fix `metadataBase` / canonical to resolve www vs non-www (C1)
2. Add self-referencing canonicals to `/privacy` and `/aviso-legal` (C2)
3. Fix `lastmod` in `sitemap.ts` with real dates (H6)
4. Add `noindex` to `/qr/page.tsx` (H11)
5. Add `telephone`, `geo`, `postalCode` to schema (H2)
6. Add `FAQPage` JSON-LD block to `page.tsx` (H1)
7. Add `SoftwareApplication` + `WebSite` + `Person` schema `@graph` (H3)
8. Replace Google Fonts `<link>` with `next/font/google` (H7)
9. Replace `<img>` with `<Image>` + `loading="lazy"` + remove preload (H8)
10. Wrap `setLang()` DOM writes in `requestAnimationFrame` (H9)
11. Add security headers to `next.config.mjs` (H10)
12. Remove `changefreq`/`priority` from `sitemap.ts` (M12)
13. Fix nav logo `href` from `#top` to `/` (Low)
14. Add NIF to Aviso Legal (C6)

### Sprint 2 — Content & trust (1–2 weeks)
- Create `public/llms.txt` (C5)
- Claim and verify Google Business Profile (C4)
- Add 2–3 client testimonials with attribution (H4)
- Add a pricing anchor (H5)
- Add quantified claims to body copy (M3)
- Add founder LinkedIn link + one credential sentence (M4)

### Sprint 3 — Architecture (1–2 months)
- Implement Next.js i18n routing (`/es/` routes with SSR Spanish HTML + hreflang) (C3)
- Create `/salons`, `/aesthetic-clinics`, `/estate-agents` vertical pages (M1)
- Start blog with 3 informational posts targeting WhatsApp automation queries (M2)
- Create `/contact` page with full NAP + Google Maps embed (M10)

---

## GEO / AI Search Detail

**GEO Readiness Score: 41 / 100**

| Platform | Score | Key Gap |
|---|---|---|
| Google AI Overviews | 38/100 | No FAQPage schema, no reviews, thin backlink graph |
| ChatGPT (web search) | 22/100 | No Wikipedia entity, no social training signal, no blog |
| Perplexity | 44/100 | Good FAQ content + SSR, but zero cited statistics |
| Bing Copilot | 40/100 | OG tags good, but no pricing data or review schema |

Top 5 GEO actions by ROI:
1. Create `llms.txt` — 2 hours
2. Add `FAQPage` schema — 1 hour
3. Add explicit AI bot rules to `robots.ts` — 30 minutes
4. Add quantified claims to body copy — half day
5. Post one YouTube demo video — 1 day (highest citation correlation ~0.737)

---

## Local SEO Detail

**Local SEO Score: 34 / 100**

| Dimension | Score |
|---|---|
| GBP Signals | 8/100 |
| Reviews & Reputation | 5/100 |
| Local On-Page SEO | 62/100 |
| NAP Consistency & Citations | 40/100 |
| Local Schema Markup | 55/100 |
| Local Link & Authority Signals | 70/100 |

**NAP discrepancies found:**
- Phone number in WA CTA link but absent from schema `telephone` property
- Footer address has no `<address>` HTML element
- No postal/street address — only city and region
- Facebook @holatandem handle maps to a personal profile (not a business page)

---

## Performance Detail

| Metric | Observed | Status |
|---|---|---|
| TTFB | 151ms | Good |
| x-vercel-cache | HIT | CDN serving cached page |
| HTML payload | 95,900 bytes uncompressed | Heavy (bilingual data attrs) |
| Estimated LCP | 2.0–3.5s | Borderline — blocked by Google Fonts |
| Estimated CLS | 0.05–0.15 | Borderline — font swap + no img dimensions |
| Estimated INP | <200ms typical | At risk on mobile from language switcher |

---

## E-E-A-T Detail

| Factor | Score | Primary Gap |
|---|---|---|
| Experience | 35/100 | No testimonials, no case studies, no metrics |
| Expertise | 42/100 | No founder credentials linked, no tech depth |
| Authoritativeness | 28/100 | No social profiles, no press, no backlinks |
| Trustworthiness | 62/100 | No NIF, phone not displayed, no `<address>` tag |

---

## SXO Detail (Search Experience Optimization)

**SXO Gap Score: 48 / 100**

**SERP page-type mismatches:**

| Target Query | SERP Dominant Type | HolaTandem Type | Mismatch |
|---|---|---|---|
| WhatsApp AI for salons | Vertical-specific product page | General multi-vertical page | HIGH |
| WhatsApp automation Spain | Informational blog/guide | Commercial landing page | CRITICAL |
| AI assistant for appointments | Comparison list article | Single-product landing page | HIGH |
| holatandem.com (brand) | Product landing page | Product landing page | ALIGNED |

**Persona scores (1–100):**

| Persona | Score | Key Gap |
|---|---|---|
| Busy salon owner | 66/100 | No testimonials, pricing hidden |
| Aesthetic clinic manager | 56/100 | GDPR signal buried, no vertical page |
| Estate agent | 47/100 | No lead-volume context, no CRM mention |
| Tech-savvy comparison buyer | 38/100 | No pricing, no integrations list, no reviews |

**Conversion path:** Structurally sound until the Pricing section (step 8 of 10). Pricing opacity is the primary conversion exit point. WhatsApp demo CTA is the right primary action for this audience but is co-equal with Calendly — should be dominant.

---

## Schema Detail

**Existing schema:** `ProfessionalService` (valid, partial)

**Missing schema types by priority:**

| Type | Priority | Impact |
|---|---|---|
| `FAQPage` | High | Google AIO eligibility, AI citation |
| `SoftwareApplication` | High | Correct product categorisation for SaaS |
| `WebSite` | High | SERP site name treatment |
| `Person` (Elena Ignat) | Medium | E-E-A-T, AI entity disambiguation |
| `AggregateRating` | Medium | Rich snippets (requires reviews) |
| `FAQPage` entries for PAA questions | Low | Extended AI coverage |

**Note on FAQPage (as of May 7, 2026):** Google retired FAQ rich results (SERP accordions) for all sites on May 7, 2026. Adding `FAQPage` schema has **zero SERP visual benefit** but retains significant AI/LLM citation benefit. Implement for GEO, not for SERP stars.

---

*Generated by claude-seo · 8 sub-agents · July 7, 2026*
