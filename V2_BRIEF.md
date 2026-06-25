# V2 DESIGN BRIEF — Sheeba The Nutritionist
> Sources: CONTENT_AUDIT.md · PERSONALITY.md  
> Status: Design direction only — no implementation  
> Date: 2026-06-05

---

## OVERVIEW

This brief defines the design direction for sheebathenutritionist.com v2. It is grounded in the content audit (what exists) and the personality analysis (what the brand actually is), not in trend or aesthetic preference alone.

The single governing question for every design decision is:

> **"Does this feel like the brilliant, warm, internationally-awarded expert who will finally understand me — or does it feel like something else?"**

If it feels medical → wrong.  
If it feels like a wellness influencer → wrong.  
If it feels like a tech product → wrong.  
If it feels like a premium, personal, earned authority → right.

---

## AUDIENCE

Three distinct personas, all sharing a common emotional entry state.

### Persona A — The Frustrated Seeker (Primary)
**Women seeking weight loss or nutrition coaching, 28–45**
- Has tried diets, plans, generic advice — none addressed her specifically
- Carries low-grade shame about her body that she won't admit in conversation
- Wants to feel like she's talking to someone who *gets* the complexity of her situation
- Trust trigger: testimonials from women exactly like her, plus credentials she can verify
- Conversion barrier: *"Is this really different from everything else I've tried?"*
- What she needs from the site within 8 seconds: *"This person is not selling me a programme. She is going to understand me."*

### Persona B — The Health-Conscious Professional (Secondary)
**Women in demanding careers, 32–50, Singapore/Japan/expat markets**
- Educated, skeptical, time-poor
- Has seen doctors, wants root-cause answers not symptom management
- Responds to evidence, credentials, method — not promises
- Trust trigger: awards, doctor referrals, published book, measurable outcomes
- Conversion barrier: *"I don't have time for something that won't work."*
- What she needs from the site: compressed authority + a process she can understand quickly

### Persona C — The Referral Arrival (Tertiary)
**Women sent by a friend or doctor, 25–55, any condition**
- Arrives pre-sold on Sheeba's credibility (because someone they trust said so)
- Needs the site to confirm the referral was right, not to persuade from scratch
- Trust trigger: seeing her own condition reflected in the testimonials
- Conversion barrier: *"How do I actually get started?"*
- What she needs: a clear, low-friction path to contact

---

## GOALS

### Goal 1 — Increase Trust
The site must feel like it was built for a practitioner of her calibre. Currently, the Webflow site does not match the weight of her credentials.

Trust is built through:
- **Depth** — not claiming things, but showing evidence of them
- **Specificity** — 20 named, condition-specific testimonials (not generic praise)
- **Competence signals** — awards rendered with gravitas, not badge-clutter
- **Restraint** — a premium brand does not need to shout

### Goal 2 — Increase Consultation Bookings
The primary commercial action is a consultation. Currently the site's only CTA path is "Let's talk" → form scroll. This is appropriate but must be strengthened.

Booking friction must be reduced through:
- A clear, repeated process (*"Here's how it works"* — already exists, must be visual and prominent)
- The form must feel like an invitation, not a submission
- The emotional narrative must guide the visitor toward *"this is the next step for me"*

### Goal 3 — Increase Authority
Sheeba has 5 international awards, 10 credentials, a published book, media features, and referrals from cardiologists. The current site buries much of this. V2 must surface it without arrogance.

Authority is communicated through:
- Structure — a site that is organised like an expert's, not like a service provider's
- Permanence — typographic and spatial choices that feel earned, not provisional
- Evidence — outcomes that are specific, named, and categorised (the 12-condition testimonial structure is the right instinct)

---

## VISUAL DIRECTION

The direction is: **Editorial Wellness Authority**

Reference category (mood, not imitation):  
Aesop (earned restraint) · Dr Barbara Sturm (science meets luxury) · Shou Sugi Ban House (nature as intelligence) · RMS Beauty (organic precision) · Kinfolk magazine (stillness, intimacy, warmth)

**NOT:** Goop (spiritual + luxury but not grounded) · Headspace (tech wellness) · Weight Watchers (mass-market) · Classpass (fitness SaaS) · any stock-photo health brand

---

## 1. TYPOGRAPHY DIRECTION

### Philosophy
Typography must communicate two things simultaneously:
1. **Authority** — this person is a published expert with decades of knowledge
2. **Intimacy** — she speaks to you one-to-one, not at a lecture

Typography achieves this through pairing an **editorial serif** (authority, permanence, warmth) with a **clean humanist sans-serif** (accessibility, modern, clear).

### Heading Typeface — `Playfair Display` (retain existing)
**Why it works:**
- High-contrast serif with organic stroke variation — feels alive, not clinical
- Italic variants carry emotional weight without being decorative
- Associates with editorial publications (The Guardian, Vogue wellness, The Cut)
- Contrasts with the medical/tech space which universally uses geometric sans-serif

**Usage rules:**
- All H1, H2, H3 in Playfair Display
- Italic variant used sparingly for emphasis — specifically for the *emotional* word in a headline
  - Example: `"Nutritionist Of The *Year*"` or `"The *best* version of you"`
- Never all-caps for Playfair headings — all-caps removes the warmth
- Weight: Regular (400) for body headlines, Semibold (600) for hero display
- Tracking: `-0.02em` (already implemented — retain)

### Body Typeface — `Rubik` (retain existing)
**Why it works:**
- Humanist sans-serif — slightly rounded, warm, approachable
- Highly legible at small sizes for long testimonial copy
- Not clinical (not Helvetica), not decorative (not a script font)
- Pairs naturally with Playfair without competing

**Usage rules:**
- All body copy, UI labels, captions, form fields in Rubik
- Weight: Regular (400) for body, Medium (500) for subheadings and labels
- Line height: 1.85–1.9 for body copy (generous — signals patience and care)
- Max line length: 65–72 characters per line. Long testimonials must not feel like walls of text.

### Type Scale Direction
The existing scale is solid. The key directive for v2:

- **H1 display** (`clamp(52px, 7vw, 80px)`) — used ONCE per page, only in the hero. Not repeated.
- **H2 section headers** (`40–54px`) — should have breathing room above and below (minimum 80px vertical margin)
- **Body copy** (`18–19px`) — this is correct for the audience. Do not go smaller.
- **Labels/badges** (`11–12px`, uppercase, 2px letter-spacing) — used to categorise content, never to shout
- **Credentials and awards** — set in a distinct typographic treatment (small caps or spaced uppercase) to signal their category without over-emphasising

### Typography "Voice" Hierarchy
```
DISPLAY:       Playfair Display, Semibold, italic emphasis — the emotional hook
HEADLINE:      Playfair Display, Regular — the substantive claim
BODY:          Rubik Regular, generous line-height — the explanation
LABEL/BADGE:   Rubik Medium, uppercase, spaced — the category signal
QUOTE:         Playfair Display, Italic, large — the proof
DATA/STAT:     Rubik Medium, large number — the authority shorthand
```

---

## 2. COLOR DIRECTION

### Philosophy
The current color system is correct in principle but needs direction in *application*. The palette signals organic warmth and holistic wellness — it must not become muddy, flat, or indistinct through poor contrast management.

### Retain the Existing Palette (do not change)
```
--background:         #F9F6F0   Alabaster cream — the page ground
--foreground:         #4A4E46   Deep forest gray-green — primary text
--accent-sage:        #8A9A86   Muted sage — the primary brand accent
--accent-olive:       #5C6653   Deep olive — the authority dark
--accent-amber:       #C89B7B   Warm terracotta — the warmth accent
--accent-amber-light: #E8D3C3   Dusty blush — surface backgrounds
--accent-beige:       #E2DCD0   Stone — borders, dividers, cards
```

### Color Application Rules (the direction)

**Rule 1 — Restraint is authority**  
A premium brand does not use its accent colors liberally. The sage and amber accents should appear at no more than 20% of the page's visual surface. When they appear, they mean something.

**Rule 2 — The background is not neutral — it is the brand**  
`#F9F6F0` alabaster is not white. It is warm, organic, slightly aged — like linen or unbleached parchment. Every section should feel like it lives within this warmth, not fights against it. Section backgrounds should vary between this base and `--accent-beige-light` only — never pure white, never gray-white.

**Rule 3 — Sage is the credential color**  
`--accent-sage` should be used for: award badges, credential tags, condition labels on testimonials, "Learn more" accent underlines. It carries the authority signal. It is not a decorative color.

**Rule 4 — Amber is the warmth color**  
`--accent-amber` and its light variant should be used for: hover states on CTAs, quote marks on testimonials, selected states, the form area background. It carries the human signal.

**Rule 5 — Deep olive is for emphasis, not atmosphere**  
`--accent-olive` should be used sparingly: key word emphasis in headlines, the primary CTA button, active navigation state. It should feel like a moment of focus.

**Rule 6 — No pure black**  
All text in `--foreground` (`#4A4E46`). Zero instances of `#000000` or `#111111`. The brand is warm, not stark.

**Rule 7 — Glassmorphism is for floating elements only**  
The `--glass-bg` treatment (frosted panel with backdrop blur) must be reserved for: cards that float above section backgrounds, the navigation bar on scroll, testimonial cards, modal-style overlays. Not for general section dividers. Glassmorphism used everywhere becomes noise.

### Color Emotion Map
```
Background (#F9F6F0)    → Safety, stillness, home
Sage (#8A9A86)          → Trust, nature, expertise, calm
Olive (#5C6653)         → Groundedness, authority, certainty
Amber (#C89B7B)         → Warmth, human connection, hope
Foreground (#4A4E46)    → Depth, permanence, seriousness
```

---

## 3. IMAGERY DIRECTION

### Philosophy
The imagery direction is: **Presence over Perfection**

The wrong approach: stock wellness photography — glowing women in white linen holding smoothies, overhead acai bowls, clinical white backgrounds.

The right approach: specific, earned, real — images that feel like they belong to *this* person's world, not to a category.

### Primary Image Types

**Type A — Sheeba herself (the most important image category)**

She is the brand. Her imagery must communicate:
- Authority without formality — she is photographed in real environments (her clinic, a consultation space, outdoors in green), never in a posed studio setting
- Warmth at full strength — direct eye contact, natural expression, not airbrushed
- Her signature green (she appears in green throughout the original site — this is meaningful and should be preserved and intentional in v2)

Guidance: Do not use generic headshots. The images of Sheeba in the original site (in the green dress outdoors, sitting with colourful cushions) are already in the right direction. More environmental, less studio.

**Type B — The world she works with (botanical, clinical-organic)**

- Close-up botanical details: leaves, roots, plant cells, herbs — photographed with precision, not romantically
- Blood chemistry imagery that is artful not clinical — the visual overlap between a blood slide and a botanical micro-photograph is the aesthetic sweet spot
- Food as medicine: single ingredients (not arranged plates), depth-of-field, organic context
- Hands — the practitioner's hands performing assessment or therapy, not sterile gloved medical hands

**Type C — Outcomes (implied, not literal)**

The brand does not show weight-loss "before/after" photography. That is the influencer aesthetic.

Instead, outcomes are conveyed through:
- Women in environments that signal *aliveness* — in their own lives, not posed for a shoot
- Energy is visible: posture, presence, expression
- Never clinical: no gym mirrors, no measuring tapes, no scales

### What to Avoid

| Avoid | Because |
|-------|---------|
| Stock wellness photography (Unsplash-style) | Generic, indistinguishable from any health brand |
| Before/after weight loss photos | Influencer aesthetic, reduces dignity |
| White background product shots | Medical or e-commerce, not wellness authority |
| Posed group photos (community feel) | Not this brand — it is one-to-one |
| Overly saturated colours in food | Instagram food aesthetic — not premium |
| Hands holding supplements/pills | Too clinical, undermines the natural positioning |
| Clean empty rooms | Tech/minimal aesthetic — too cold |

### Illustration Direction (the brand already uses this — retain and elevate)

The original site's avocado character, leaf Lottie, and botanical line-art illustrations are *correct* and *distinctive*. They are not decorative whimsy — they are brand language that says "alive, organic, warm."

In v2:
- Retain botanical line illustrations as section dividers and breathing space
- The floating leaf animation belongs — it is the brand's signature motion
- Illustrations should feel hand-drawn but precise (not sketchy, not clipart)
- They punctuate the editorial photography, not replace it

---

## 4. INTERACTION DIRECTION

### Philosophy
The interaction direction is: **Unhurried Presence**

Every interaction should feel like the brand's personality in motion — grounded, warm, never frantic. The opposite of a SaaS dashboard (micro-interactions everywhere, snappy, functional). The opposite of a landing page (aggressive fade-ins, pop-ups, countdown timers).

The frame of reference: the feeling of entering a high-end spa or private consultation space. Things move, but slowly and with intention. Nothing jumps at you.

### Scroll Behavior
- **Smooth scroll via Lenis** (already implemented — retain)
- Duration: `1.2s` with exponential ease-out — this is correct, do not reduce
- No scroll hijacking or section-snap. The user moves at their own pace.

### Reveal Animations
**Rule: Reveal once, gracefully. Never repeat.**

- Elements enter the viewport with a single `opacity: 0 → 1` combined with `translateY: 60px → 0`
- Duration: `1.0–1.4s`, ease: `power3.out` (smooth deceleration, not spring)
- Stagger on grids: `0.08–0.12s` between items — enough to feel sequential, not enough to feel slow
- No horizontal slides, no scale effects, no rotation on scroll
- Testimonial cards: fade in individually as they scroll into view

**What NOT to do:**
- No scroll-triggered parallax on text (distracting, dated)
- No aggressive "pop in" with scale (anxious, startup feel)
- No elements that move while the user is still scrolling past them

### Hover States

**Buttons (primary CTA):**
- Background shifts from olive → amber-dark over `0.35s`
- Subtle `translateY(-2px)` lift (not dramatic)
- Text does not change color — only the background shifts

**Cards (testimonials, treatments, assessments):**
- Glass card lifts: `box-shadow` deepens + `translateY(-6px)` over `0.4s`
- A barely perceptible border-color shift toward sage
- The "Learn more" link reveals its underline on hover (not visible by default)

**Navigation links:**
- Underline wipe: a line grows from left to right beneath the text over `0.25s`
- No color change — the underline IS the hover state

**Images:**
- Gentle scale: `transform: scale(1.03)` inside a clipped container over `0.5s`
- Never scale more than `1.05` — anything beyond is aggressive

### Page Transitions
- Between pages: a simple opacity fade `0 → 1` over `0.6s` on the page container
- No full-screen wipe or slide transitions — these are for portfolios, not wellness brands
- The Lottie page-load animations (plant on Home, door on About) should be retained as brand moments — they are the only "theatrical" interaction the brand allows

### Form Interactions
- The form is an invitation. It must feel like sitting down, not filling out paperwork.
- Fields: no borders by default. Only an animated underline appears on focus.
- Label animates upward and reduces to caption size when the field is focused (floating label pattern)
- Submit button: `"Submit"` → `"Sending..."` → `"Thank you"` — no redirect, no page jump. The confirmation appears inline, replacing the form gracefully with a fade.

### Botanical / Motion Language
The original site's Lottie plant animation is the brand's most distinctive motion element. It must be:
- Present on every page (fixed position, lower-right, gentle loop)
- Never scaled up or made prominent — it is a whisper, not a headline
- Speed: slow. If it looks slow, slow it down more.

---

## 5. CONTENT HIERARCHY RULES (for v2 page structure)

These rules flow from the brand strategy and govern how content is prioritised, not what content to show.

### Rule 1 — Lead with transformation, follow with evidence
Every page opens with an *emotional claim* (what the client will feel/become), not a service description. The service description exists to answer the question the emotional claim creates.

### Rule 2 — Credentials after connection
Awards and credentials appear after the visitor has connected with the brand emotionally. Leading with "I won 5 awards" triggers comparison. Leading with "I see what doctors miss" triggers recognition.

### Rule 3 — Testimonials are case studies, not endorsements
A single testimonial by Ruby Atkins (71, 15-year diabetic, reduced insulin in 3 weeks) is more powerful than 20 generic 5-star ratings. The 12-condition grouping structure is correct — it lets visitors find themselves in the evidence.

### Rule 4 — One CTA per scroll context
At any given moment of scrolling, only one call to action should be visually dominant. Multiple competing CTAs create decision paralysis. The single primary action is always: **"Book a consultation"** or **"Let's talk"**.

### Rule 5 — The form is not the end — it is the beginning
The enquiry form must be framed as the *start of the journey*, not the administrative end of the website visit. The copy above the form ("Make a change today", "We're here to listen") is already moving in this direction. In v2, this framing must be more emphatic.

---

## 6. WHAT V2 MUST NOT DO

These are non-negotiables derived from the personality analysis and audience research.

| Must Not | Why |
|----------|-----|
| Use countdown timers or urgency language | Undermines the calm authority the brand is built on |
| Use generic stock wellness photography | Collapses brand distinctiveness |
| Lead with weight loss as the primary benefit | The actual product is *health sovereignty*, not weight loss |
| Make awards the hero section | Credentials support trust; they do not create desire |
| Use pop-ups or exit-intent modals | Destroys the "high-end consultation space" feeling |
| Display testimonials without condition context | Decontextualised praise is weak; condition-grouped proof is powerful |
| Use pure white as a background anywhere | Pulls the brand toward clinical/medical aesthetic |
| Use bold font weights for body copy | Reduces intimacy, increases urgency — wrong emotional register |
| Auto-play video with sound | Startling, not serene |
| Use the word "affordable" | Positions the brand below its actual market position |

---

## 7. SUCCESS CRITERIA

V2 is successful if:

- A first-time visitor can, within 8 seconds, understand: *"This is a world-class naturopathic nutritionist who is going to treat me as an individual."*
- A skeptical professional visitor can, without scrolling more than 2 sections, see verifiable credentials and outcomes from people in their situation.
- A referred visitor can, without friction, find their specific condition reflected in testimonials and reach the contact form within 3 clicks.
- The site does not look like any other nutritionist, wellness, or health website in Southeast Asia.
- A potential client closing the tab thinks: *"I need to come back to that."*

---

*End of V2_BRIEF.md*  
*Sources: CONTENT_AUDIT.md · PERSONALITY.md · Site analysis*  
*Date: 2026-06-05*
