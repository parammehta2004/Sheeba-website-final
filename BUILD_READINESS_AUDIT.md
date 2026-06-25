# BUILD READINESS AUDIT — Sheeba The Nutritionist V2
> Role: Creative Director / UX Strategist / Brand Designer / Systems Architect  
> Documents reviewed: CONTENT_AUDIT.md · PERSONALITY.md · V2_BRIEF.md · HOMEPAGE_CONCEPTS.md · VISUAL_METAPHOR.md · HOMEPAGE_SPEC.md · DESIGN.md  
> Date: 2026-06-06  
> Purpose: Determine whether sufficient information exists to begin homepage production.

---

## CRITICAL FINDING (READ FIRST)

`DESIGN.md` — the file named as a design system reference — is not a Sheeba design system. It is a reusable style reference for a different, unrelated brand ("Evergreen") with a completely different palette, typography stack (IvyPresto Headline), and component language. It was not created for this project.

**This is the single most important gap in the project.** The strategy documents describe a design system that does not yet exist in code. `globals.css` contains the CSS token layer but no component library, no SVG diagram system, no animation infrastructure, and no responsive layout system.

The strategy is ready. The execution layer is not.

---

## PART 1 — INFORMATION SUFFICIENCY AUDIT

### 1. Brand Positioning — **9/10**

**What exists:**  
PERSONALITY.md is exceptional. Brand archetypes (Sage + Healer + Magician) are precisely defined with verbatim evidence from 20 testimonials. The brand tensions (Science ↔ Spirituality, Ancient ↔ Modern) are named and preserved rather than resolved. The governing positioning line is clear: *"She sees what doctors miss."* V2_BRIEF.md reinforces this with rules about what the brand is not.

**What is missing:**  
No formal tagline has been confirmed for v2. The existing site uses *"Let food be thy medicine"* (on the Home page) but this does not appear in any strategy document as a retained or rejected element. **Non-critical** — a working headline exists in HOMEPAGE_SPEC.md.

**Gap criticality:** Non-critical.

---

### 2. Audience Understanding — **9/10**

**What exists:**  
Three distinct personas defined in V2_BRIEF.md with conversion barriers, trust triggers, entry emotional states (from PERSONALITY.md §2), and specific language patterns extracted from 20 real testimonials. The audience matrix in PERSONALITY.md §3 shows gender distribution (~85% female), age cluster (27–44), geography, trigger mechanism, and condition types. This exceeds what most agencies produce before a production start.

**What is missing:**  
No user journey mapping beyond the homepage scroll arc. Pages like `/about`, `/services`, and `/testimonial` have no equivalent persona analysis — the existing homepage spec covers the conversion funnel for the home page only.

**Gap criticality:** Non-critical for homepage production. Relevant for full site build.

---

### 3. Messaging Clarity — **8/10**

**What exists:**  
HOMEPAGE_SPEC.md provides exact copy for every section on the homepage — verbatim text sourced from CONTENT_AUDIT.md with voice adjustments noted. H1, subheading, section labels, form labels, CTA text, and success state message are all specified. Observation card copy (Sections 3) is written and ready for the design team.

**What is missing:**  
Two items require confirmation before production:
1. The book pull quote (*"Aging may be inevitable. Diseases are not."*) is flagged "to be confirmed from actual book content" — Sheeba needs to verify this.
2. The observation card copy (Sections 3 — fatigue, hormonal, chronic) is directionally written but not client-approved. These are in Sheeba's voice; she must verify they are accurate representations of her clinical view.

**Gap criticality:** The book quote is non-critical (one line). The observation card copy is **critical** — putting words in a practitioner's clinical voice without their approval is a legal and professional risk.

---

### 4. Differentiation — **10/10**

**What exists:**  
The differentiation analysis is the strongest element in the entire project. PERSONALITY.md §1 builds the Sage + Healer + Magician argument from direct textual evidence. VISUAL_METAPHOR.md §4 ("What Makes This Site Unmistakably Sheeba") identifies five signature elements that cannot be replicated by any competitor. HOMEPAGE_SPEC.md translates these into specific section-level content decisions. The prohibition lists in V2_BRIEF.md and VISUAL_METAPHOR.md are precise and actionable.

**What is missing:**  
Nothing material.

**Gap criticality:** None.

---

### 5. Information Architecture — **8/10**

**What exists:**  
The IA constraint is explicitly honoured throughout every document: retain Home / About / Services / Testimonials / Book / Contact. No new pages proposed. Services sub-pages (`/treatment`, `/health-assessments`) are referenced in HOMEPAGE_SPEC.md with correct internal link targets. The section sequence of the homepage is justified with positional logic.

**What is missing:**  
No specification exists for any page other than the homepage. The inner pages — About, Services overview, individual service pages (6 treatments, 4 assessments), Testimonials, Contact — have no equivalent spec. For a full site build this is a significant gap. For homepage-first production it is non-critical.

**Gap criticality:** Non-critical for homepage only. Critical if full site is the immediate goal.

---

### 6. Homepage Strategy — **9/10**

**What exists:**  
HOMEPAGE_SPEC.md is production-ready at the strategic layer. All 9 sections are specified with Purpose, Visitor Question, Content, Components, Visual Direction, Motion Direction, CTA, and Success Criteria. The emotional progression arc is defined and justified. The positional logic for every section (why it appears before or after adjacent sections) is documented. Global rules are stated. This is a strong creative brief that most design teams would execute from directly.

**What is missing:**  
Section 3 observation card copy needs client approval (noted above). The hero portrait and the Register 1 photography brief assume photographs of Sheeba exist or will be shot — no photography brief or shoot plan is present.

**Gap criticality:** Photography availability is potentially critical. If no usable photography of Sheeba exists, the hero concept (which centres on her portrait) cannot be executed as specified.

---

### 7. Visual Direction — **8/10**

**What exists:**  
VISUAL_METAPHOR.md is operationalized to a high level. Six motifs are defined with pixel values, colour tokens, animation timing, placement rules, and per-page appearances. Three image registers (Expert's World, Territory, Outcome) have explicit prohibitions. The icon aesthetic is defined (single-weight line, custom-derived, not from icon libraries). The diagram language covers three diagram types with full animation sequences.

**What is missing:**  
**The actual design system does not exist.** `globals.css` contains tokens. There are no:
- Component files (beyond a basic `Button.module.css` and `Card.module.css`)
- SVG diagram assets (the blood chemistry chart, the journey line, the radial condition wheel)
- Custom icon files (the 11 service icons, the navigation arrow, the coordinate crosshair)
- Botanical illustration assets (the leaf motifs, specimen ornaments)
- Lottie animation files (unless the original Webflow site's Lottie files have been extracted)

DESIGN.md is for a different project entirely and contributes zero to this build.

**Gap criticality:** The SVG diagrams and the Lottie plant file are **critical** — the hero concept and the brand's signature motion are built around them. The botanical illustrations are important but can be iterated. The icon set is important but can be phased.

---

### 8. Motion Direction — **8/10**

**What exists:**  
Motion direction is thorough. VISUAL_METAPHOR.md §6 specifies the draw animation, grow animation, and emergence animation types with exact timing, easing curves, and trigger conditions. HOMEPAGE_SPEC.md provides motion direction per section including stagger values, duration, and state transitions for the form. The scroll behaviour (Lenis, 1.2s exponential ease-out) is already implemented.

**What is missing:**  
No GSAP or CSS animation scaffolding exists. Lenis is referenced as already implemented — this should be verified in the codebase before production starts. The SVG path draw animations (the core of the Cartographer metaphor) require a GSAP ScrollTrigger + DrawSVG setup that has not been architected.

**Gap criticality:** Non-critical as a document gap — the direction is clear. But as an implementation gap, the animation infrastructure is the highest-complexity engineering task in the build and should be scoped and prototyped first.

---

### 9. Content Strategy — **8/10**

**What exists:**  
CONTENT_AUDIT.md is the most thorough document in the project — 47KB of sourced content including all 20 testimonials verbatim, all 5 awards, all press features, all 10 service descriptions, the 4-step process copy, and the form field structure. All homepage content is sourced from this audit with exact provenance noted.

**What is missing:**  
- No SEO strategy (meta titles, meta descriptions, H1 hierarchy per page). This is non-critical for production but should be addressed before launch.
- No alt text specification for images.
- Blog content is explicitly excluded (per user directive) — confirmed non-issue.
- The book pull quote requires client confirmation (noted above).

**Gap criticality:** Non-critical for homepage production start.

---

### 10. Conversion Strategy — **8/10**

**What exists:**  
HOMEPAGE_SPEC.md defines a single primary CTA (form submit in Section 9), specifies secondary CTAs per section, defines the form field voice, the success state message, and the form's emotional framing. The no-pop-up / no-urgency rule is explicit. Success criteria are defined per section in measurable terms (scroll depth %, interaction rates, bounce rate targets). The form posts to `https://vapor.biohackk.com/api/leads` (from CONTENT_AUDIT.md §6) — this endpoint must be confirmed as live and accepting submissions.

**What is missing:**  
- No analytics implementation plan (how success criteria will actually be tracked).
- No A/B testing plan.
- The form endpoint (`vapor.biohackk.com/api/leads`) needs to be confirmed as operational — this is the production booking mechanism.

**Gap criticality:** The form endpoint is **critical** — a non-functional form submission is a broken conversion path. Analytics and A/B testing are non-critical for launch.

---

### 11. Design System Readiness — **4/10**

**What exists:**  
`globals.css` has a correct and complete token layer: colour tokens, typography variables (Playfair + Rubik font families), spacing scale, border radius, shadow tokens, glass panel utilities. `Button.module.css` and `Card.module.css` exist as stubs.

**What is missing:**  
The gap here is significant and is the honest reason for a score of 4:

- No `<BloodChemistryDiagram>` component
- No `<JourneyLine>` SVG component
- No `<MarginAnnotation>` positioned component
- No `<ObservationCard>` component
- No `<TestimonialCard>` with glassmorphism
- No `<ConditionFilter>` interactive pill list
- No `<HeroBadge>` component
- No botanical SVG illustrations as assets
- No custom icon set
- No Lottie integration
- No GSAP + ScrollTrigger + DrawSVG setup
- No responsive grid system
- No floating label form implementation
- No section divider draw animation

DESIGN.md, which might have been expected to fill this gap, belongs to an entirely different brand and cannot be used.

**Gap criticality:** The design system gap is the most critical execution gap in the project. It does not block strategy — but it is the primary risk factor for production quality and speed.

---

### 12. Production Readiness — **6/10**

**What exists:**  
- Next.js project is running (`npm run dev` has been running for 31+ hours — server is stable)
- `globals.css` token layer is in place
- Font imports (Playfair Display, Rubik) are likely in place (referenced throughout spec documents)
- The project structure (`src/app`, `src/components/ui`) exists

**What is missing:**  
- No photographs of Sheeba confirmed as available in the project's `/public` directory
- No Lottie files extracted from the original site (the plant animation, the door animation)
- No SVG diagram assets
- No component library beyond two stub files
- The animation stack (GSAP, ScrollTrigger, DrawSVG, or CSS equivalents) has not been installed or configured
- No page routing beyond the base route (assumed — not verified)

**Gap criticality:** Without photography and the Lottie plant file, the hero and the brand's signature ambient animation cannot be built. These are blocking items.

---

## PART 2 — MISSING INFORMATION ASSESSMENT

### CRITICAL (must exist before production begins)

**1. Client approval of observation card copy (Section 3)**  
Three first-person clinical observations are written in Sheeba's voice. They are directionally correct but put specific clinical claims in her name. She must approve or edit these before they are built into a component. This is a 30-minute task for the client — but it cannot be skipped.  
*Document needed: A short email or message from Sheeba confirming or editing the three observation card texts.*

**2. Photography inventory**  
The hero depends entirely on a specific type of Sheeba portrait (three-quarter, natural light, olive-green, direct gaze). If no such photograph exists in usable resolution, the hero must be redesigned or a photo shoot must be commissioned.  
*Document needed: Confirmation that at least 2–3 usable high-resolution photographs of Sheeba exist matching the Register 1 direction.*

**3. Lottie animation files**  
The original Webflow site contains a plant Lottie (fixed, lower-right) and a door Lottie (About page). These are the brand's most distinctive motion elements. They must be extracted from the original Webflow build before development starts.  
*Asset needed: The `.json` Lottie files for the plant and door animations.*

**4. Form endpoint confirmation**  
The form posts to `https://vapor.biohackk.com/api/leads`. This must be tested and confirmed as live, accepting the expected fields (name, phone, email, message), and returning a success state. If this endpoint is down or changed, the entire conversion path breaks.  
*Action needed: Test the endpoint with a curl or fetch call before building the form component.*

---

### HELPFUL (would improve output, not required to begin)

**5. Per-page specifications for inner pages**  
HOMEPAGE_SPEC.md covers the homepage. The About, Services, Testimonials, and Contact pages have no equivalent spec. These can be built after the homepage is complete, but starting them in parallel would reduce total build time.  
*Helpful, not blocking for homepage production.*

**6. SEO metadata per page**  
No meta titles, meta descriptions, or structured data have been specified. These are important for launch but do not affect the build itself.  
*Helpful, not blocking.*

**7. Mobile-specific layout decisions**  
HOMEPAGE_SPEC.md references mobile fallbacks (e.g., "accordion by condition category on mobile", "diagram simplifies to 3 markers on mobile") but does not provide a complete mobile layout spec. A competent developer can make reasonable mobile decisions from the desktop spec — but high-fidelity mobile behaviour for the blood chemistry diagram and the condition filter should be specified before those components are built.  
*Helpful, not blocking. Can be addressed during development iteration.*

---

### UNNECESSARY (common deliverable — skip)

**8. A/B testing plan**  
The site is being rebuilt, not optimised. Running A/B tests before baseline traffic is established on the new site creates noise, not signal. Build first, test at scale later.

**9. User testing / usability research**  
The content audit already draws on 20 real client testimonials as qualitative research. Adding formal usability research before a conversion-focused rebuild would add weeks without proportionate value. The HOMEPAGE_SPEC success criteria are the testing framework — implement them via analytics post-launch.

**10. Competitor analysis document**  
The brand's differentiation is defined entirely from its own content (correct approach). Adding a competitor audit now would be a distraction and potentially introduce influencer-wellness or medical-website aesthetic contamination. The "what this brand is NOT" lists in V2_BRIEF.md and VISUAL_METAPHOR.md are sufficient.

**11. Wireframes**  
HOMEPAGE_SPEC.md is a functional specification with component lists. Wireframes would re-document what already exists in text form. Skip — go directly to component development.

**12. Brand guidelines document**  
Everything a brand guidelines document would contain is distributed across PERSONALITY.md, V2_BRIEF.md, and VISUAL_METAPHOR.md. Creating a consolidated brand guidelines PDF would be three days of production work with zero new information. Unnecessary.

---

## PART 3 — BUILD READINESS VERDICT

### **B. Mostly ready — one final deliverable required**

**Justification:**

The strategy layer is production-ready. HOMEPAGE_SPEC.md is one of the most thoroughly specified homepage blueprints possible at this stage. The content is sourced. The emotional arc is justified. The visual direction is operationalized. The motion language is precise.

The verdict is B rather than A for three reasons:

**Reason 1 — Four pre-production tasks must be completed before the first component is built.** These are not documents — they are actions. Client approval of observation card copy, photography inventory, Lottie file extraction, and form endpoint test. None of these require strategic work. All four can be completed in a single focused session. Combined they represent approximately 2–4 hours of effort, not a week.

**Reason 2 — The design system must be built before the page can be built.** The strategy documents describe components that do not exist in code. The gap between `globals.css` (tokens) and a working `<BloodChemistryDiagram>` component is the real production bottleneck. This is not a missing strategy document — it is the build itself. It cannot be shortcut by more planning.

**Reason 3 — DESIGN.md is not this project's design system.** This created a false sense of design system completeness. The real design system for this project needs to be built from `globals.css` upward, using VISUAL_METAPHOR.md as the component specification reference.

The verdict is not C because no new strategic documents are required. Everything that needs to be decided has been decided. The path from here to production is execution, not discovery.

---

## PART 4 — RISK ASSESSMENT

### Biggest risk if production starts today

**The blood chemistry diagram (hero right panel) consumes the first sprint.**  
The hero diagram is the most technically complex, most brand-critical, and most time-consuming element on the homepage. It requires: custom SVG markup for 5–6 marker rows, GSAP DrawSVG path animation in a specific 7-step sequence, responsive simplification logic for mobile (3 markers), and a margin annotation positioned absolutely with slight rotation. If the team begins with the hero and the diagram takes longer than expected, the entire homepage build is delayed. The risk of starting today without a scoped estimate for the diagram is that it becomes a black hole.

**Mitigation:** Build the diagram as a standalone prototype first — separate from the page layout — and establish a time-box of no more than 2 days before simplifying the animation to CSS-only if GSAP setup is taking too long.

### Biggest risk if strategy continues for another week

**Analysis paralysis and stakeholder fatigue.**  
The strategy documents are already beyond what most production teams need. Adding another week of documentation will not improve the homepage. It will reduce momentum, invite revisiting of already-made decisions, and delay the only thing that produces real feedback: a visible, interactive page in the browser.

The strategy is done. Every additional day of non-production work increases the risk that the client loses confidence in the process and demands a faster but less considered result.

### Most likely failure mode

**The photography gap.**  
If Sheeba does not have high-quality photographs that match Register 1 (three-quarter portrait, natural directional light, olive-green, direct gaze, environmental background), the hero concept cannot be executed as specified. A headshot-quality photograph or a studio photograph against a white background would require a significant redesign of the hero panel. This is the failure mode with the highest likelihood and the highest impact on the final quality.

**Second most likely failure mode:** The observation card copy is built without client approval, Sheeba disagrees with or corrects the clinical statements, and Section 3 requires a rebuild after the component is complete.

### Most likely success path

**Build the design system components first, page layout second.**

Build each named component from HOMEPAGE_SPEC.md independently, test it in isolation, then assemble the page. This approach:
- Allows parallel development (multiple components built simultaneously)
- Surfaces technical issues (diagram animation complexity, glassmorphism browser compatibility) before they are embedded in the page
- Produces a reusable component library that serves all subsequent pages (About, Services, etc.)
- Is naturally incremental — each completed component is a visible proof of progress

The page that results will be built from verified, tested parts rather than assembled in one fragile composition.

---

## PART 5 — RECOMMENDED NEXT STEPS

### Before production begins (this session or today)

**Step 1 — Complete the 4 pre-production tasks** (2–4 hours total)

- [ ] **Photography inventory:** Check the `/public` directory of the current Next.js project. Identify any existing photographs of Sheeba. If none usable, flag to client immediately — this determines whether the hero can be built or must be modified.
- [ ] **Lottie extraction:** Visit the original Webflow site, open DevTools → Network tab, filter by `.json`, identify and download the plant Lottie file. Save to `/public/lottie/plant.json`. Repeat for the door animation.
- [ ] **Form endpoint test:** `fetch('https://vapor.biohackk.com/api/leads', { method: 'POST', body: JSON.stringify({name:'Test', email:'test@test.com', phone:'0000', message:'test'}) })`. Confirm 200 response and that the fields match what the spec calls for.
- [ ] **Client copy approval:** Send Sheeba the three observation card texts (Section 3 of HOMEPAGE_SPEC.md) for approval. This is a 5-minute read for her and a blocking dependency. Do not build Section 3 until approval is received.

---

### Production Phase 1 — Design System (Days 1–3)

**Step 2 — Update globals.css to match the spec exactly**

The current `globals.css` token layer is close but not complete relative to VISUAL_METAPHOR.md and HOMEPAGE_SPEC.md. Specifically:
- Verify Playfair Display and Rubik are loaded via `next/font` (not CDN)
- Add missing tokens: `--dot-motif-size`, `--drawn-line-weight`, `--annotation-rotation`, `--glass-bg`, `--glass-border` (check if present)
- Confirm the background warmth progression tokens (`#F9F6F0` through `#EDE8DE`) are named

**Step 3 — Build the 12 reusable components from HOMEPAGE_SPEC.md**

Build in this order (dependency order, not page order):

1. `<SectionLabel>` — simplest, used everywhere
2. `<CTAButton>` — primary olive pill with drawn arrow + hover states
3. `<DrawnDivider>` — horizontal SVG line with draw animation (CSS or GSAP)
4. `<MarginAnnotation>` — absolute-positioned Playfair Italic with rotation
5. `<HeroBadge>` — year badge with drawn-circle
6. `<ObservationCard>` — parchment panel + drawn left border + annotation
7. `<TestimonialCard>` — glassmorphism + condition badge + dot motif
8. `<ConditionFilter>` — pill list with sage fill state transition
9. `<JourneyLine>` — SVG horizontal path + 4 nodes + draw animation
10. `<BloodChemistryDiagram>` — the most complex component — time-box at 2 days maximum
11. `<FloatingLabelInput>` — form field with animated underline + label lift
12. `<FormSuccessState>` — the confirmation fade state

**Step 4 — Install and configure animation infrastructure**

- Install `lottie-react` (for the plant Lottie) 
- Confirm `lenis` is installed and initialised in the layout
- Decide: GSAP + DrawSVG (full power, licensed) vs. CSS stroke-dashoffset animation (free, sufficient for most draw effects). For the hero diagram, CSS stroke-dashoffset is likely sufficient and eliminates a dependency. Make this decision before building `<BloodChemistryDiagram>`.

---

### Production Phase 2 — Homepage Assembly (Days 4–6)

**Step 5 — Assemble the homepage**

With all components built and tested in isolation, the homepage assembly is primarily layout work:
- Build the 9 sections using the component library
- Implement the background warmth progression via section-level `background-color` tokens
- Add the `<DrawnDivider>` between every section
- Place the botanical leaf SVG ornaments in the correct positions with correct opacity
- Add the fixed Lottie plant (lower-right, always visible)
- Implement scroll-triggered reveals using IntersectionObserver (or GSAP ScrollTrigger if installed)
- Wire the form to the `vapor.biohackk.com` endpoint

**Step 6 — Mobile pass**

After the desktop layout is complete:
- Implement the blood chemistry diagram's 3-marker mobile reduction
- Collapse the condition filter from horizontal pills to a `<select>` dropdown
- Stack the hero panels (portrait above, diagram below)
- Verify all margin annotations collapse to inline correctly
- Test the floating label inputs on mobile touch

---

### Production Phase 3 — Quality and Launch Prep (Days 7–8)

**Step 7 — Cross-section review against HOMEPAGE_SPEC.md success criteria**

Walk through each section against its stated success criteria. For elements that cannot be verified without live traffic:
- Confirm the visual implementation matches the spec
- Verify all CTAs link to their correct targets
- Verify form submission produces the correct success state
- Verify the Lottie plant is present on all scroll positions

**Step 8 — Inner page specifications (can begin in parallel with Phase 2)**

While the homepage is being built, begin defining specs for:
- About page (the Cartographer's Study — radial ingredient diagram, credential timeline, door Lottie)
- Services overview page
- Individual treatment and assessment sub-pages

---

### Summary Timeline

| Day | Work |
|-----|------|
| Today | 4 pre-production tasks (photography, Lottie, endpoint, client copy approval) |
| Day 1–3 | 12 reusable components + animation infrastructure |
| Day 4–6 | Homepage assembly (desktop) |
| Day 6 | Mobile pass |
| Day 7–8 | QA against spec + inner page spec begins |
| Day 8+ | Inner page production |

**Total to a production-ready homepage: 6–8 focused working days** assuming photography exists and client approves observation copy promptly.

If photography does not exist, add 3–5 days for a shoot or redesign the hero concept. This is the only decision that significantly changes the timeline.

---

## FINAL STATEMENT

The project is strategically complete. The six documents produced in this session constitute a legitimate, thorough, and decision-ready foundation for a premium website rebuild. The work ahead is production, not strategy.

Do not create another document. Open the code editor and begin with Step 1.

---

*End of BUILD_READINESS_AUDIT.md*  
*Date: 2026-06-06*
