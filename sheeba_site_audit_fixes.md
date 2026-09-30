# Website Fix Spec — sheebathenutritionist.com

**Audited:** 29 Sep 2026 · **Overall grade:** D+ · **Scores:** Accessibility 3/10 · Usability 8/10 · SEO 4/10 · GEO 3/10

## Context for the agent

- **Site:** https://www.sheebathenutritionist.com/ (Sheeba The Nutritionist Pte Ltd, Singapore)
- **Pages confirmed:** `/`, `/about`, `/faq`. Nav also links Services, Therapies, Health Assessments, Testimonials, Media, Contact, T&Cs, and Data & Privacy Policy. Find their real URLs in the codebase or router.
- **Platform:** not confirmed. The footer says "Built with finesse by the Admiral systems team" and assets are served from `/assets/`. Check the repo before choosing an approach. If it's a framework such as Next.js, generate the sitemap and robots.txt from code. If it's a site builder, use its SEO settings panel.
- **Existing, keep as-is:** HTTPS, viewport meta (`maximum-scale=5`), Open Graph and Twitter tags, `theme-color #2d5a5a`, Google Search Console verification meta, and `index, follow` robots meta.
- **Business facts to use in markup:**
  - Name: Sheeba The Nutritionist
  - Practitioner: Sheeba Majmudar
  - Address: 200 Cantonment Road, #06-01A, Southpoint, Singapore 089763
  - Phone: +65 9656 6714 (also WhatsApp)
  - Email: admin@sheebathenutritionist.com
  - Credentials (from /about): MSc Human Nutrition (USA), BA Psychology, Diploma Clinical Herbology (USA)
  - Book: *Edible to Incredible* (sold on Amazon)
  - Socials: Facebook `https://www.facebook.com/sheebanutritionist/`, YouTube `https://www.youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g`. Get the LinkedIn, Instagram and TikTok URLs from the footer.
- **Do not invent:** opening hours, prices, ratings or review counts. Leave a field out if it isn't known.

---

## Tasks (in priority order)

### 1. Add robots.txt and an XML sitemap — SEO (currently both 404)

`/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.sheebathenutritionist.com/sitemap.xml
```
- `/sitemap.xml` must list every public, indexable page using absolute `https://www.` URLs, with `lastmod` on each.
- Don't block AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Visibility to them is the goal.
- **Done when:** both URLs return 200 with the correct content type.

### 2. Unique title, meta description and canonical per page — SEO

Right now `/`, `/about` and `/faq` all return the homepage title ("Sheeba The Nutritionist | Best Nutritionist in Singapore") and the same description. None of them has a canonical tag.

- Every page gets its own `<title>` (≤60 chars) and `<meta name="description">` (≤155 chars) that describe that page.
- Every page gets `<link rel="canonical" href="https://www.sheebathenutritionist.com/<path>">`. Pick one host (www) and one trailing-slash style, and 301-redirect the other variants to it.
- Make `og:title`, `og:description` and `og:url` match each page.
- Suggested starting points (edit freely):
  - `/about` → "About Sheeba Majmudar, MSc Human Nutrition | Sheeba The Nutritionist"
  - `/faq` → "FAQ: Working with a Functional Nutritionist in Singapore | Sheeba The Nutritionist"
- **Done when:** no two pages share a title or description, and each page has a self-referencing canonical.

### 3. Add JSON-LD structured data — GEO (currently none)

Put this in `<head>` site-wide (or at least on `/` and `/about`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": "https://www.sheebathenutritionist.com/#business",
      "name": "Sheeba The Nutritionist",
      "url": "https://www.sheebathenutritionist.com/",
      "telephone": "+65 9656 6714",
      "email": "admin@sheebathenutritionist.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 Cantonment Road, #06-01A, Southpoint",
        "addressLocality": "Singapore",
        "postalCode": "089763",
        "addressCountry": "SG"
      },
      "areaServed": "Singapore",
      "founder": { "@id": "https://www.sheebathenutritionist.com/#sheeba" },
      "sameAs": [
        "https://www.facebook.com/sheebanutritionist/",
        "https://www.youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.sheebathenutritionist.com/#sheeba",
      "name": "Sheeba Majmudar",
      "jobTitle": "Nutritionist",
      "worksFor": { "@id": "https://www.sheebathenutritionist.com/#business" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Master of Science in Human Nutrition (USA)" },
        { "@type": "EducationalOccupationalCredential", "name": "Bachelor of Arts (Psychology)" },
        { "@type": "EducationalOccupationalCredential", "name": "Diploma in Clinical Herbology (USA)" }
      ],
      "knowsAbout": ["Functional medicine", "Naturopathy", "Clinical nutrition", "Blood chemistry analysis"]
    },
    {
      "@type": "Book",
      "name": "Edible to Incredible",
      "author": { "@id": "https://www.sheebathenutritionist.com/#sheeba" }
    }
  ]
}
</script>
```
- Add the LinkedIn, Instagram and TikTok URLs to `sameAs`. Add `geo` coordinates and `openingHoursSpecification` only if the owner provides them.
- On `/faq`, add a `FAQPage` block built from the five real questions and their answers **as they appear on the page**:
  1. How can a nutritionist help me?
  2. What does the process involve if I decide to see Sheeba?
  3. Do I need to get tests done to achieve my goals?
  4. Do I have to buy all the supplements from you?
  5. How do I know the program is working?
- **Done when:** Google's Rich Results Test and validator.schema.org report no errors.

### 4. Semantic HTML and language — Accessibility

- Add `lang="en-SG"` to `<html>`.
- Wrap the page regions in `<header>`, `<nav aria-label="Main">`, `<main id="main">` and `<footer>` (none exist today).
- Add a skip link as the first focusable element: `<a href="#main" class="skip-link">Skip to content</a>`. It should be visually hidden until it receives focus.

### 5. Form labels — Accessibility

The consultation form fields (Full Name, Email, Phone, "What are you looking to resolve?") have no `<label for>` or `aria-label`.
- Give each field a visible `<label for="...">` matched to the input's `id`. Keep the placeholders if you like, but they don't replace labels.
- Add `autocomplete` attributes: `name`, `email`, `tel`.
- Mark required fields with `required` and `aria-required="true"`. Error messages must be programmatically linked to their field (`aria-describedby`).

### 6. Alt text and accessible names — Accessibility

- Logo `Logo--Sheeba.svg` (header and footer): `alt="Sheeba The Nutritionist"`. If the logo is wrapped in a home link, the link's name should be "Sheeba The Nutritionist – Home".
- Press logos: about 15 images all use `alt="Featured Press"`. Give each one its outlet name, e.g. `alt="BBC"`, `"CNA"`, `"The Straits Times"`, `"Vogue Singapore"`, `"Harper's Bazaar"`, `"Her World"`, `"ELLE Singapore"`, `"Expat Living"`, `"Men's Health"`, `"The Sunday Times"`, `"Today's Parent"`. `Group 661.png` and `home-logo_3c9d35b8 1.png` need a visual check to see which outlets they are.
- If the logo strip is duplicated for a marquee or carousel, give the duplicate copies `alt=""` and `aria-hidden="true"` so screen readers don't read them twice.
- Social icon links: add `aria-label="Facebook"`, `"YouTube"`, `"LinkedIn"`, `"Instagram"`, `"TikTok"`. Mark the decorative SVGs inside them `aria-hidden="true"`.
- Check the hamburger/menu button too: it needs `aria-label` and `aria-expanded`.

### 7. Single H1 — Accessibility / SEO

The homepage has 2 H1s: the logo wordmark "SHEEBA THE NUTRITIONIST" and the hero line "Your blood test told a story…". Change the logo to a non-heading element. Keep the hero line as the only H1, and leave the H2/H3 structure as it is.

### 8. llms.txt and og:image — GEO

- Create `/llms.txt`: a short markdown summary covering who Sheeba is, credentials, services (the assessments: Metabolic Mapping, Food Compatibility Test, DUTCH Test, Hair Tissue Mineral Analysis; the therapies: E4L System, Aromatherapy, Weight Programs, Practitioner Supplements), the location, contact details, and links to the key pages.
- Add `og:image` (1200×630) and switch `twitter:card` to `summary_large_image`.

---

## Outside the codebase (for the owner, not the agent)

- **NAP consistency:** Tuugo, SGAds and Finest Services still show an old "off Mountbatten Road" address. Update them, and the Google Business Profile, to the Southpoint address and the same phone number. AI tools cross-check these listings against the site.
- After deploying tasks 1–3, submit the sitemap in Google Search Console. The site is already verified there.

## Verification checklist

- [ ] `/robots.txt` and `/sitemap.xml` return 200
- [ ] Every page has a unique title and description, plus a self-referencing canonical
- [ ] Rich Results Test passes for LocalBusiness, Person and FAQPage
- [ ] WAVE / axe DevTools: no missing-label, missing-alt, empty-link or missing-lang errors
- [ ] Exactly one `<h1>` per page
- [ ] Keyboard-only: the skip link works, the form can be filled in and submitted, and focus is always visible
- [ ] Not yet audited, check separately: colour contrast, focus order, Core Web Vitals (PageSpeed Insights)

## Audit caveat

Findings come from the page HTML, not a rendered browser session. The missing `lang`, landmarks and form labels should be confirmed in DevTools before they're changed.
