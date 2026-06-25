# VISUAL_METAPHOR.md — Sheeba The Nutritionist
> Version: 2.0 — Final  
> Direction: "The Cartographer" (Concept 1) with emotional depth from Concept 3  
> Sources: CONTENT_AUDIT.md · PERSONALITY.md · V2_BRIEF.md · HOMEPAGE_CONCEPTS.md  
> Status: Operationalized — use this as the design source of truth

---

## THE GOVERNING METAPHOR (FINAL)

> **Sheeba is a cartographer of the human body.**
>
> A cartographer does not fix the territory. She *reads* it. She translates invisible complexity into something navigable. She sees patterns in data that others treat as noise. She does not guess — she maps. And once you have a map drawn by someone who knows how to read the territory, you are no longer lost.
>
> The patient arrives without a map. Sheeba draws one — from their blood, their minerals, their bio-field, their history. The map is the diagnosis. The map is the protocol. The map is the promise that nothing is random and everything connects.

**The emotional layer from Concept 3:**  
The visitor arrives at this map room not as a curious academic. They arrive *exhausted from being lost*. The cartographer is not merely impressive — she is the person who finally makes sense of a territory that has been frightening and confusing. The authority of the map matters because the visitor has been wandering without one.

**This tension — the expert and the lost person — must live in every visual decision.**  
The world is precise *and* warm. The diagrams are beautiful *and* personal. The credentials are present *and* never cold. The map is for you, specifically, and you are not a data point in it — you are its centre.

---

## 1. THE BRAND WORLD

### The Map Room

The brand world is a **working practitioner's map room** — not a museum, not a clinic, not a salon. A working room where real intellectual labour happens on behalf of real people.

**Physical properties of this world:**

| Element | Specific Quality |
|---------|-----------------|
| **Light** | Directional, from a large window (left or upper left). Warm but not golden — the colour of 10am winter sun through glass. Never fluorescent. Never overhead. |
| **Surfaces** | Warm aged wood (desk, shelves). Parchment paper (maps, records, notes). Linen (texture in fabric, in paper weight). Glass (specimen vials, water). Never marble, never concrete, never metal. |
| **Objects** | Blood test printouts with handwritten margin notes. Botanical specimens pressed under glass. A magnifying loupe. Vials of amber liquid (plant extracts). Open journals with precise handwriting. A globe — not decorative, but worn. |
| **Scale** | Human. Not grand. Not austere. A room one person works in, designed for one other person to sit across from. |
| **Feeling** | The feeling of being inside somewhere that has been thought in for a long time. Accumulated knowledge. Specific smells: paper, eucalyptus, warm wood. Quiet. |

**What this world is NOT:**
- Not a sterile laboratory (no stainless steel, no white tiles)
- Not a luxury spa (no marble, no eucalyptus branches in glass vases)
- Not a corporate office (no glass partitions, no standing desks)
- Not a digital space (no screens, no keyboards visible)
- Not generic wellness (no mason jars of smoothies, no yoga mats)

---

## 2. RECURRING MOTIFS — FULLY OPERATIONALIZED

These six motifs are the brand's visual vocabulary. Every page uses a selection. No page uses all of them at full weight. They recur and reinforce without repeating.

---

### Motif 1 — THE COORDINATE / THE DOT

**What it is:**  
The single point on a map. The data point on a blood test. The moment of clarity when disconnected symptoms resolve into a single pattern.

**Visual form:**  
- A small filled circle, 6–8px, in `--accent-sage` or `--accent-olive`
- Used as bullet points throughout (replacing default `•` with a styled `○` or `●`)
- Appears as decorative dot-clusters at section transitions (a field of 8–15 dots at 15% opacity, scattered in organic clusters — not a grid)
- The dot that connects to another dot via a drawn line = the moment of connection

**Application rules:**
- Bullet points: always sage filled circle, never arrow, never dash, never chevron
- Section background texture: dot field at `opacity: 0.08–0.12` — barely there, but present
- The "connecting the dots" CTA animation: a line draws between two dots when hovered
- Never: emoji dots, coloured gradient dots, animated bouncing dots

**Page appearances:**
- Home: dot-cluster texture behind the "Pattern She Sees" section
- About: dots cluster at the edge of the credentials section
- Services: dots as bullet points for all service feature lists
- Testimonial: dot = condition tag marker
- All pages: bullet points

---

### Motif 2 — THE DRAWN LINE

**What it is:**  
The cartographer's primary tool. A line drawn with intention — between two points, along a route, across a diagram. The line is the act of reading the map.

**Visual form:**  
- A single-weight stroke, 1–1.5px, in `--accent-sage` or `--accent-olive`
- The line is *never* perfectly straight — a slight organic variation (as if drawn by hand rather than printed)
- Animated: always drawn (path animation from 0% to 100% length) — never appearing fully formed
- The drawn line is the brand's primary animated element

**Application rules:**
- Section dividers: a drawn horizontal line that travels across the full width over 1.2s on scroll entry
- The 4-step process (Journey Line): drawn from left to right as the user scrolls through the section
- Hero diagram: the entire diagram is drawn lines — the blood chemistry map animates via path draw
- Timeline elements on About page: a drawn vertical line connecting credential entries
- Never: dashed lines (indecisive), double lines (decorative), gradient lines (digital), animated lines that loop

**Page appearances:**
- Home: hero diagram, journey line (process section), section dividers
- About: credential timeline, ingredient connection diagram
- Services: service category dividers
- All pages: section dividers

---

### Motif 3 — THE SPECIMEN / BOTANICAL PRECISION

**What it is:**  
Not decorative botanicals. The specific, studied plant — the one that *does* something, not the one that looks beautiful. A gemmotherapy concentrate is derived from the meristemic tissue of plants. An aromatherapy essential oil is a molecular compound. The plant is always specific, always purposeful.

**Visual form:**  
- Black-and-white or monochrome botanical line illustrations — the aesthetic of 19th-century scientific illustration
- Rendered in `--accent-sage` on `--background`, or `--accent-olive` on `--accent-beige-light`
- Not photographic. Not watercolour. Precise ink line — the kind that labels each part
- Leaves always show their veins. Roots always show their structure. Cross-sections always show their layers.

**Application rules:**
- Used as section ornaments — appearing in corners or at margins, partially cut off by the frame edge
- Scale: large (spanning 20–40% of the section width) but placed decoratively, not as content
- Never centred — always eccentric, bleeding off edges
- The leaf that bleeds off the right margin says: "life does not contain itself within rectangles"
- Animated on scroll entry: grows from a point outward, like a time-lapse of a plant growing

**The leaf specifically:**  
The single botanical leaf — already present in the original site's Lottie animation — is the brand's signature motif. It appears:
- Fixed in the lower-right viewport corner (slow ambient loop, always present)
- As section ornament on all major content sections
- In the footer, growing from the bottom edge upward
- On page transitions: a brief leaf-drift during the between-page fade

**Page appearances:**
- All pages: fixed lower-right Lottie
- Home: Accolades section left margin, Services Overview section
- About: Bio section right margin, Credentials section
- Services: Each service hero
- Testimonial: Behind each testimonial group header

---

### Motif 4 — THE DIAGRAM

**What it is:**  
The map itself. The blood chemistry grid. The mineral correlation table. The bio-field scan. The avocado cross-section. The circular assessment wheel. Every diagram Sheeba actually uses in her practice — made visible and beautiful.

**Visual form:**  
The diagram is not decorative. It is the central artefact of the brand — the proof that the cartographer's work is real and specific.

Three diagram types used across the site:

**Type A — The Chart (linear/grid)**  
- Blood chemistry analysis: a simplified horizontal bar chart showing reference ranges vs. optimal ranges vs. client's actual values
- Mineral correlation grid: a table showing inter-mineral relationships  
- Rendered in sage/olive on cream, with amber used to highlight the client's specific value
- The "client's value" is always within the frame — the chart is personalised, not generic

**Type B — The Radial (circular)**  
- The condition wheel: 12 conditions arranged around a circle (used on the Testimonials page as the primary navigation)  
- The assessment overview: Sheeba's 4 assessment types as quadrants of a circle
- The 11 "special ingredients" on the About page: a radial arrangement of her skills
- Rendered in concentric rings, with the outer ring being the category and the inner rings being the detail

**Type C — The Journey Line (sequential)**  
- The 4-step process: a horizontal path with 4 nodes — drawn left to right  
- The client arc (entry state → turning point → outcome): a curved arc, annotated
- Timeline on the About page: a vertical line with events as nodes

**Application rules:**
- All diagrams are drawn via SVG path animation on scroll entry
- Drawing time: 1.0–1.6s per diagram element, staggered 0.2s between elements
- Diagrams are never pre-built stock graphics — they are always brand-palette renderings of actual clinical tools
- Diagrams always have labels — in Rubik Regular 12px, in `--foreground` at 70% opacity
- The annotation aesthetic: small arrows pointing to specific values, the way a handwritten note points to something important

**Page appearances:**
- Home hero: the blood chemistry map (hero right panel) — the most prominent diagram on the site
- Home process: the journey line  
- Health Assessments: a diagram per assessment type  
- About: radial ingredient diagram, credential timeline  
- Testimonials: the conditions wheel (radial, interactive)

---

### Motif 5 — THE MARGIN NOTE

**What it is:**  
The practitioner's handwriting in the margin — the annotation that says "this is what this means for you." On a blood test, the margin note is the thing that turns data into diagnosis. On a map, the annotation is what makes a line meaningful.

**Visual form:**  
- Appears as a typographic treatment: Playfair Italic, 15–17px, set at a slight rotation (1–2 degrees) — as if written by hand
- Colour: `--accent-olive` at 85% opacity
- Position: always offset from the main text column — in the left or right margin, or above/below a diagram element
- Contains the *interpretive* voice — the sentence that explains what the data means for the patient

**Used for:**  
- Sheeba's "first-person observations" in the Pattern She Sees section (the statements about what she reads differently)
- Pull quotes from the About page philosophy
- The annotation layer on diagrams (pointing to a specific data point)
- The form's helper text (*"Please include your country code"*) — even this becomes a margin note, not a grey placeholder

**Application rules:**
- Never more than 2–3 margin notes visible at once on a section
- The rotation is subtle — never more than 2 degrees
- Never used for navigation or UI labels — only for interpretive, personal content
- On mobile: the margin note collapses to inline, losing the offset position

---

### Motif 6 — THE OPEN DOOR (from Concept 3)

**What it is:**  
Borrowed from Concept 3's emotional DNA and the original site's Lottie door-open animation on the About page. The door is the moment of entry into the brand's world — the moment the visitor crosses from the world where their body has been misread, into the world where it will be understood.

**Visual form:**  
- The Lottie door-open animation (already exists in the site's assets) — retained exactly as-is
- The brand frame itself behaves like a door: the first load animation is the world coming into existence
- The page-load overlay ("Preparing our nutrition haven for you...") is the door being opened

**Application rules:**
- The door is always slow — never snappy, never playful
- The door appears only at page load and at the form section
- On the contact form: the section entry triggers a soft reveal that echoes the door opening — the background lightens, the content breathes in
- The door is never decorative — it is always threshold-crossing

---

## 3. IMAGERY SYSTEM

### The Three Image Registers

Every photograph or illustration on the site belongs to one of three registers. Never mix registers within a single section.

---

**Register 1 — The Expert's World (Editorial Practitioner)**

*Used for:* All photographs of Sheeba

*Character:*  
- Three-quarter or environmental portrait — never headshot, never full-body pose
- Natural directional light from one source (left or upper-left)
- Sheeba always in sage-olive-green — this is the brand's most important recurring visual fact
- Expression: complete presence, not performance — the look of someone thinking about your specific problem
- Background: her environment (consultation room, working library, clinic space) — slightly out of focus but recognisable
- Grain: slight natural film grain is acceptable and desirable — it signals authenticity over production

*What this register says:* "This person exists in a real place, doing real work. She is not a concept."

*Forbidden in this register:* Studio backgrounds, full-smile poses, looking-at-camera-with-arms-crossed authority poses, white backgrounds, overly retouched skin

---

**Register 2 — The Territory (Botanical Precision)**

*Used for:* Scientific/botanical detail photographs — close-ups of plant material, cellular imagery, the physical world of what Sheeba works with

*Character:*  
- Extreme close-up, shallow depth of field — one element in precise focus, the rest dissolving into warm blur
- Colour: the brand palette expressed through nature. Sage-green leaves. Amber botanical oils. Cream parchment. Deep olive roots.
- Objects: a single leaf backlit to show veins; a cross-section of a citrus fruit showing its radial architecture; roots pulled from soil; amber liquid in a glass vial; seeds on a wooden surface
- Never: romantic bouquets, flower arrangements, smoothie bowls, stock "wellness" food photography

*What this register says:* "The natural world is not decoration. It is a precise system — as specific and measurable as any laboratory instrument."

*Forbidden in this register:* Overhead food photography, arranged plates, Instagram-style produce, any image that looks like it belongs on a wellness influencer's feed

---

**Register 3 — The Outcome (Implied Vitality)**

*Used for:* Testimonials, outcomes sections — the visual evidence of transformation

*Character:*  
- NOT before-and-after photography
- Environmental images of women in their own lives — at work, with family, outdoors, in motion
- The quality being photographed is *energy* and *presence*, not body shape or skin
- Warm, natural, specific — these are not models, they are real people in real environments
- Images that contain both stillness and motion: a woman mid-conversation, a hand reaching for something, a body in natural movement

*What this register says:* "This is what a life that works feels like. It does not look like a fitness advertisement."

*Forbidden in this register:* Body-focused shots (waistlines, before/after comparisons), gym contexts, measurement tools (scales, tape measures), clinical settings, stock-photo "happy woman" poses

---

### Illustration vs. Photography Rule

| Page location | Medium |
|--------------|--------|
| Section ornaments, dividers | Botanical line illustration |
| Hero and portrait sections | Photography (Register 1) |
| Scientific/methodology sections | Diagram (see §4) |
| Testimonials | Photography (Register 3) or illustrated avatar |
| Service pages | Photography (Register 2) + Diagram |
| Background texture | Dot-field or subtle illustration at opacity |

---

## 4. ICONOGRAPHY SYSTEM

The icon system for this brand is **not a standard icon set.** There are no Feather icons, no Material icons, no Font Awesome icons. All icons are custom, derived from the cartographer metaphor.

### Icon Aesthetic

All icons are drawn in the **single-weight line** style — the same aesthetic as the diagram lines. The line weight is 1.5px, with slightly organic path quality (not perfectly geometric). They are rendered in `--accent-sage` or `--accent-olive`.

### Icon Categories

**Navigation & UI Icons** — Minimal, functional:
- Arrow: a hand-drawn directional arrow — not a chevron, not a caret. A real arrow, slightly imperfect
- Close: two intersecting lines, organic weight
- Expand/collapse: a single line that extends
- External link: a small compass rose (the cartographer's navigation symbol, replacing the standard "external link" box-arrow)

**Service Icons** — Derived from the modalities:
- Assessment: a magnifying loupe over a document
- Blood Chemistry: a simplified horizontal bar chart (miniaturised diagram)
- Dutch Test: a cellular ring (the DUTCH test literally maps hormone metabolites in a ring pattern)
- Hair Mineral: a vertical bar grid (the HTMA grid pattern)
- Compatibility: a branching tree (testing compatibility = mapping which branches thrive)
- NES: a wave field (the bio-field as a sine wave landscape)
- Aromatherapy: a single spiral (the molecular helix of an essential oil compound)
- Dropzone: a descending arc (the trajectory of weight loss)
- Gemmotherapy: a germinating seed (the stem cell = the point of origin)
- Reconnective Healing: a connection line between two points with no intermediary
- Craniosacral: a gentle wave form (the fluid dynamics of craniosacral rhythm)

**Condition Icons** (Testimonial page — the condition wheel):
- Each of the 12 condition categories has a simplified symbol derived from its physiology
- Not medical clip-art — abstract geometric forms that suggest the condition
- All rendered in the single-weight line style

### Icon Rules

- All icons are 24×24px at base size, scalable
- Never filled solid — always outlined
- Never in colours outside the brand palette
- Never used without a label — icons alone are not sufficient in this brand
- The arrow icon specifically: used for all CTAs as a trailing element, always the hand-drawn arrow, never a chevron `>`

---

## 5. DIAGRAM LANGUAGE — OPERATIONALIZED

### The Blood Chemistry Map (Hero Diagram)

This is the most complex and most important diagram in the site. It appears in the hero of the homepage (right panel) and in distilled form on the Health Assessments page.

**What it shows:**  
A simplified blood chemistry analysis chart — five to seven markers (not all of them — enough to feel real, not overwhelming):
- Glucose
- Ferritin
- TSH (thyroid)
- Cortisol
- Vitamin D
- Homocysteine

Each marker appears as a horizontal row with:
1. The marker name (Rubik Regular 11px, `--foreground` 70%)
2. A horizontal bar showing: grey zone = standard reference range, sage zone = Sheeba's optimal range, amber dot = "your" value
3. A small margin annotation where the value falls outside the standard range but inside the optimal range — the signature Sheeba observation

**Animation sequence:**
1. The horizontal axis draws across the full width (0.8s)
2. Marker labels appear top-to-bottom, staggered 0.1s each
3. Reference range bars grow from left edge outward (0.6s each, staggered)
4. Optimal range overlay fades in on top (0.4s each)
5. The amber dot drops into position from above (0.3s each, with slight bounce)
6. Margin annotations fade in last (0.5s each)
7. Total animation time: approximately 4–5 seconds
8. Triggered on: hero section entering viewport

**The annotation text on the hero diagram:**  
Not real patient data. A specific, fictionalised but plausible observation:  
*"Ferritin at 22 — 'normal' by hospital standards. Optimal is 70. This is why you're exhausted."*

This single annotation text is the most important piece of content in the hero. It demonstrates, in one line, exactly what Sheeba does differently.

---

### The Journey Line (Process)

A single horizontal path from left to right with four nodes:

```
[●]━━━━━━━━━━━━━[●]━━━━━━━━━━━━━[●]━━━━━━━━━━━━━[●]
Assessment    Consultation    Protocol      Follow-up
```

- The line is drawn left to right as the section enters the viewport
- Each node is a sage circle (8px) that appears as the line reaches it
- Below each node: the step title in Rubik Medium 14px and a 2-line description in Rubik Regular 13px
- The line itself: 1.5px, sage, with slight organic variation (not a perfect straight line — it curves microscopically, as terrain does on a real map)
- Between nodes 2 and 3, a small amber annotation appears: *"Customised for you"* — this is the most important step, and the annotation calls it out

---

### The Condition Wheel (Testimonials)

A radial SVG diagram with 12 condition names at equal intervals around the circumference.

- Outer ring: condition name text (Rubik Medium 12px)
- Inner ring: a small arc showing the number of testimonials in that condition (thicker arc = more testimonials)
- Centre: the stat "Over 1,000 clients" in Playfair italic
- Interactive: clicking a condition segment rotates the wheel (eased rotation, 0.6s) to bring that segment to the front, and the testimonials for that condition slide in from the right

**Mobile version:** The wheel collapses to a vertical accordion. The circular elegance is a desktop-only experience.

---

### The Radial Ingredient Diagram (About)

The 11 "special ingredients" (Connecting the Dots, Functional Medicine, Customise Protocols, etc.) arranged around a central image of Sheeba.

- 11 lines radiate from the centre (like spokes of a wheel, but organically spaced — not perfectly equidistant)
- Each spoke ends in a small circle with the ingredient name
- The spokes draw outward from the centre on scroll entry (staggered, 0.15s between each)
- On hover: the spoke thickens slightly, the ingredient name expands to show the first sentence of the description
- The central image of Sheeba is a circle-cropped photograph — the only circle-cropped photo on the entire site, and this circularity is meaningful: she is the centre of this system

---

## 6. SECTION TRANSITIONS

Section transitions are the cartographer's way of turning the page — moving from one portion of the map to the next.

### The Primary Transition: The Drawn Divider

Between every major section, a horizontal line draws across the full width of the viewport. This is not a `<hr>` element — it is an SVG path that animates on scroll.

- Line weight: 1px
- Colour: `--accent-beige` (the lightest visible mark — just enough to feel intentional)
- Animation: draws from left to right over 0.8s, triggered when the line enters the viewport at the bottom
- Timing: begins drawing as the previous section completes its scroll-reveal

### The Tonal Transition: Background Warmth

Section background colours shift through the page — not dramatically, but measurably. This is borrowed from Concept 3's light-shift idea and merged into The Cartographer's world.

The map room window provides different qualities of light at different depths of the room:

| Page depth | Background colour | Feeling |
|-----------|------------------|---------|
| Hero | `#F9F6F0` (alabaster) | Morning light, neutral, the starting point |
| Credentials/Press | `#F5F1E8` (slightly warmer) | Moving deeper into the room |
| Outcomes/Testimonials | `#F2EDE2` (warm cream) | The warmest part of the room, by the window |
| Process | `#F9F6F0` (back to base) | A clear space, a working surface |
| Form/Contact | `#EDE8DE` (the warmest) | The innermost space — the invitation to sit down |

This progression is subtle — the difference between the coolest and warmest backgrounds is less than 8% tonal shift. But it is felt.

### Section Entry Behaviour

All sections follow the same entry rule: **reveal once, gracefully, with no repetition.**

- Primary content (headlines, body copy): `opacity: 0 → 1` + `translateY: 40px → 0`, 0.9s, cubic-bezier(0.22, 1, 0.36, 1)
- Secondary content (diagrams, images): `opacity: 0 → 1` only, 1.2s, delayed 0.2s after primary
- Ornamental elements (botanical illustrations): `opacity: 0 → 0.6`, grow animation, 1.6s, delayed 0.4s
- Nothing enters from the left or right — only from below or in place. Horizontal entry is for carousels only.

---

## 7. INTERACTION PHILOSOPHY

### The Primary Principle: **Deliberate Response**

Every interaction in this brand has a *considered response* — not an instant one. The cartographer does not react — she *responds*. There is a moment of consideration between the input and the output.

This is expressed as: **all interactions have a minimum 200ms delay before responding.** Not a technical delay — a designed one. Hover states begin at 200ms. Transitions start at 200ms after trigger.

This single principle separates this brand from every generic SaaS or e-commerce site it could be confused with.

---

### Hover Philosophy

**What hover means in the map room:**  
When you hover over something on a map, you are asking: *"What does this mean?"* The hover reveals meaning — not just visual change.

**Primary hover behaviour — "The Annotation Hover":**  
When the user hovers over a service card, a testimonial card, or a diagram element, a margin-note-style annotation appears — offset, slightly rotated, in Playfair Italic. This annotation contains one sentence that is not in the main content — an additional observation, like the practitioner adding a note in the margin.

Example:
- Hover on "Functional Blood Chemistry Analysis" card → annotation appears: *"This is always Sheeba's first step."*
- Hover on a testimonial card → annotation appears: *"[Name] has been with Sheeba for [duration]."*
- Hover on the Ferritin marker in the hero diagram → annotation appears: *"The most commonly missed deficiency she sees."*

**Secondary hover behaviour — "The Reveal":**  
Cards lift subtly (translateY: -6px, shadow deepens). Lines brighten slightly. The "Learn more" text link gains its underline (not visible at rest — the underline is the reward for attention, not a default state).

**Navigation hover:**  
A single, slow underline wipe — left to right, 0.25s. The line is 1px, sage. The text colour does not change.

---

### Scroll Philosophy

**Smooth scroll via Lenis (already implemented — retain).**

Additional scroll behaviour:

- The hero diagram (right panel) has a very gentle parallax — it scrolls at 0.92× the normal scroll speed, giving a subtle sense of depth without being distracting. Max parallax offset: 40px.
- The fixed Lottie plant does not parallax — it is genuinely fixed and unaffected by scroll
- The drawn-line section dividers are the only elements that are 100% scroll-driven — they draw in real time as the scroll position moves through their zone

**The "read time" principle:**  
Long testimonials do not auto-advance. The visitor reads at their own pace. The carousel dots are present, but there is no auto-play. This is not a brand that rushes you.

---

### CTA Interaction Philosophy

**The primary CTA ("Start the conversation →" or "Begin your assessment →"):**

Default state: olive fill, white text, the drawn-arrow icon, fully pill-shaped (border-radius: 40px)

Hover state:
1. At 0ms: nothing
2. At 200ms: background colour begins transitioning from olive to amber-dark (0.35s)
3. At 200ms: the drawn arrow moves 4px to the right (0.3s)
4. The text does not change colour
5. The pill lifts 2px (translateY: -2px, shadow deepens)

The arrow moving forward is the most important micro-animation in the site. It says: *"This is the direction. I will take you there."*

**Form submit state:**  
- "Start the conversation →" → "Sending..." (arrow disappears, a small drawn line pulses) → "Sheeba will be in touch." (no arrow — the conversation has begun, there is no next direction yet)
- The transition between states uses the opacity fade: 0.3s each

---

## 8. WHAT MUST NEVER BE USED

These are absolute prohibitions. Any element in this list is incompatible with the cartographer brand world and must be removed or replaced.

### Visual Prohibitions

| Prohibited element | Why it's wrong | Replace with |
|-------------------|----------------|-------------|
| Stock wellness photography (glowing woman, linen, smoothie) | Collapses brand into a category it explicitly transcends | Register 2 botanical precision, or Register 1 Sheeba portraits |
| Pure white (`#FFFFFF`) backgrounds | Cold, clinical, digital — not the map room | `--background` `#F9F6F0` or warmer variants |
| Geometric sans-serif icons (Feather, Material) | Tech aesthetic, not practitioner aesthetic | Custom single-weight line icons |
| Chevrons `>` or carets as CTAs | Generic UI convention | The hand-drawn arrow only |
| Bold body text for emphasis | Creates urgency, not depth | Playfair italic for emphasis |
| Gradient backgrounds (coloured gradients) | Instagram/startup aesthetic | Tonal shifts within the brand palette only |
| Countdown timers, urgency banners ("Limited spots!") | Destroys the unhurried authority of the cartographer | Remove entirely — no equivalent |
| Pop-up modals, exit-intent overlays | Violates the "private consultation space" brand world | Remove entirely |
| Before/after weight loss photos | Influencer aesthetic, reduces dignity | Register 3 implied vitality photography |
| Auto-advancing carousels | Removes the visitor's agency — the cartographer respects your pace | Manual navigation only |
| Animated GIFs | Cheap, distracting, no craft | Lottie animations or SVG path animations only |
| Testimonial star ratings (★★★★★) | Reductive of the depth of the testimonials | Full verbatim quotes, condition-categorised |
| Any shade of blue, purple, or red | Outside the palette entirely — carries wrong emotional registers | Sage, olive, amber, cream only |
| Drop shadows with colour (coloured glows) | Digital, not physical | Neutral shadows only (`rgba(74, 77, 66, 0.06)`) |
| Rounded corner images (except the About radial portrait) | Softens to a level of genericness | Straight-edge images or full-bleed |

### Copy Prohibitions

| Prohibited phrase | Why | Replace with |
|------------------|-----|-------------|
| "Transform your health!" | Exclamatory urgency | "What does it feel like to finally have answers?" |
| "Book now" | Transactional, not relational | "Start the conversation" or "Begin your assessment" |
| "Limited availability" | Artificial urgency | Remove — no scarcity language |
| "Best nutritionist" (superlative without evidence) | Empty claim | Specific award: "Nutritionist of the Year 2020 — Prestige Awards" |
| "Holistic approach" as a headline | Over-used to the point of meaninglessness | "She reads what your blood test didn't tell you" |
| "Affordable" or "competitive pricing" | Positions below market | Remove — pricing is never mentioned |
| "One-stop-shop" | Retail language | "A single practitioner who sees the complete picture" |
| Any wellness jargon without definition (detox, cleanse, reset) | Ungrounded | Use with specific clinical explanation |

---

## 9. HOW THE METAPHOR EXTENDS ACROSS ALL PAGES

The cartographer metaphor is not just the homepage's concept — it is the brand's world-view, expressed differently on each page through a different "room" of the map room.

---

### Home — "The Map Room (entrance)"
The full cartographer world established. The hero diagram. The journey line. The pattern observations. This is where the visitor first encounters the map room and understands what kind of place they are in.

**Dominant motif:** The Diagram (blood chemistry hero)  
**Emotional register:** Authority establishing itself, then warmth entering (Concept 3 emotional layer)

---

### About — "The Cartographer's Study"
The room where the cartographer works, reads, accumulates knowledge. The 11 special ingredients as a radial diagram. The credentials as a timeline. The biography as a story of a life spent reading the body's language.

**Key visual:** The radial ingredient diagram — spokes radiating from Sheeba's circle-cropped portrait  
**Unique element:** The page-load door animation (retained from original site) — you are entering someone's private working space  
**Dominant motif:** The Radial Diagram, the Drawn Line (credential timeline)

---

### Services — "The Index"
The map's index — where you look up what kind of territory you are dealing with. Structured, precise, two categories (Assessments = how we read the map; Treatments = how we change the territory).

**Key visual:** The assessment/treatment split rendered as two map regions — organic shape boundaries, not grid columns  
**Dominant motif:** The Coordinate (service dots), the Drawn Line (category divider)

---

### Treatments — "The Treatment Legend"
The legend of the map — what each symbol means, what each territory contains. Six treatment cards, each with a custom icon (the single-weight line icons), a photograph, and a drawn annotation.

**Key visual:** Each card has a custom treatment icon (top left), a Register 2 botanical photograph, and a margin-note annotation that Sheeba would actually write  
**Dominant motif:** The Margin Note, the Specimen (botanical photos)

---

### Health Assessments — "The Instrument Room"
The room where the cartographer's instruments are kept. Four assessments, each with its own diagram showing what it measures and how.

**Key visual:** Each assessment has a simplified version of its actual diagram (blood chemistry bars, mineral grid, HTMA table, DUTCH hormone ring)  
**Dominant motif:** The Diagram (assessment-specific), the Drawn Line

---

### Testimonials — "The Territory"
The territory the maps describe — the actual landscape of real people's lives and health. The conditions wheel as the primary navigation. Each testimonial as a field report.

**Key visual:** The interactive condition wheel (radial SVG), testimonials displayed as field notes  
**Dominant motif:** The Radial Diagram (conditions wheel), the Coordinate (condition tags), the Margin Note (client name/age as annotation)  
**Emotional register:** Fully Concept 3 here — these are the stories of people who were lost, then found

---

### Contact — "The Starting Point"
On a map, the starting point is marked with a specific symbol — usually more prominent than all other points. This is yours.

**Key visual:** A large, elegant coordinate marker over the form — a cross-hair rendered in the single-weight line style, 60×60px, sage  
**Form framing:** "Every map begins with one question: Where are you now?"  
**Dominant motif:** The Coordinate (the starting point marker), the Open Door (section transition)  
**Emotional register:** Fully warm — this is the moment of crossing the threshold

---

### Service Sub-Pages (`/services/[slug]`) — "The Detail Map"
A detail map of a specific territory — zooming in from the overview to the specific. Each page opens with the service's custom icon (large, hero-scale), followed by the clinical description (the territory's specific properties), followed by testimonials from clients who needed this specific service.

**Consistent elements across all sub-pages:**
- Large custom service icon (80×80px, animated on entry)
- A single diagram showing what the service measures or affects
- A pulled testimonial from a client whose condition relates to this service
- A "What Sheeba reads in this" annotation — a margin note in her voice about what this treatment reveals

---

## THE SYSTEM IN ONE IMAGE

If this entire document had to be expressed as a single visual:

> **A blood test result on aged parchment paper, partially annotated in Sheeba's handwriting — amber ink in the margins, sage lines connecting the data points — with a single botanical leaf pressed between the page and the desk beneath it, and morning light falling from the left, making the handwriting gold.**

Every element of that image is a motif. Every quality of light and texture is a brand decision. The whole world is in it.

That is "The Cartographer."

---

*End of VISUAL_METAPHOR.md — Version 2.0 (Final)*  
*Sources: CONTENT_AUDIT.md · PERSONALITY.md · V2_BRIEF.md · HOMEPAGE_CONCEPTS.md*  
*Date: 2026-06-05*
