# HOMEPAGE_SPEC.md — Sheeba The Nutritionist
> Document type: Functional Blueprint  
> Concept: "The Cartographer" + emotional depth from "The Turning Point"  
> Sources: CONTENT_AUDIT.md · PERSONALITY.md · V2_BRIEF.md · VISUAL_METAPHOR.md  
> Audience: Design Team, Development Team  
> Status: Pre-production reference

---

## DOCUMENT PURPOSE

This document specifies exactly what must be built on the homepage. It is not a brief. It is not a concept. The creative direction is already decided. The visual metaphor is already defined. The content is already audited.

This document answers one question for every section: **what needs to exist here, why, and how will we know it's working.**

Read it in order. The sequence is the argument.

---

## THE EMOTIONAL PROGRESSION (READ THIS FIRST)

The homepage must take the visitor through a specific psychological arc. Every section serves a stage in that arc. No section exists for decoration.

```
STAGE 1 — RECOGNITION      (Sections 1–2)   "You understand my situation."
STAGE 2 — AUTHORITY        (Sections 3–4)   "You are qualified to help me."
STAGE 3 — PROOF            (Section 5)      "You have done this for people like me."
STAGE 4 — METHOD           (Section 6)      "I understand what will happen if I come to you."
STAGE 5 — OFFERING         (Section 7)      "I understand what specifically you provide."
STAGE 6 — DEPTH            (Section 8)      "You have thought about this more deeply than anyone else I've found."
STAGE 7 — INVITATION       (Section 9)      "I know exactly how to begin."
```

A visitor who reaches Stage 7 having passed through all previous stages is ready to enquire. A visitor who jumps to Stage 7 without the preceding stages will bounce.

Every section must earn the right to the next section.

---

## POSITIONAL LOGIC (THE SEQUENCE ARGUMENT)

**Why Recognition comes before Authority:**  
If you lead with credentials, the visitor evaluates Sheeba against other credentialled people. If you first name the visitor's experience — the exhaustion, the failed doctors, the confusion — they are no longer comparing. They are *recognising*. Recognition precedes trust.

**Why Authority comes before Proof:**  
Testimonials from unknown people are only as credible as the source. The visitor must first believe Sheeba is exceptional before they can believe that exceptional outcomes happened because of her. Credentials without outcomes are empty. Outcomes without credentials are unverifiable.

**Why Proof comes before Method:**  
The visitor who is emotionally convinced (Stage 3) is now ready to understand the process intellectually. Reversing this order produces the pattern of every generic wellness site: clinical explanation before emotional buy-in.

**Why Method comes before Services:**  
Knowing *how* Sheeba works removes the fear of the unknown before the visitor encounters the service menu. Without Method, Services feels like a catalogue. With Method, Services feels like a coherent offering the visitor has already agreed to explore.

**Why the Book appears after Services:**  
By this point, the visitor has seen the whole offering. The book is not a promotional moment — it is a depth signal. It says: "This is someone who has thought about this enough to write a book. There is more here than a website." It elevates everything above it retrospectively.

**Why Contact closes the page:**  
The contact form is the culmination of the emotional arc. The visitor who has arrived at it has earned it — and so has Sheeba. The form is not a desperate pop-up or an aggressive CTA in the hero. It is the natural end of a thoughtful journey.

---

---

## SECTION 1 — HERO

### Why This Section Exists
The hero establishes the brand's fundamental premise in under 8 seconds. It must simultaneously communicate authority (Sheeba is world-class), differentiation (she reads what others miss), and invitation (this is for you). It carries the most creative risk and the highest conversion weight of any section on the page.

### Why It Appears First
Self-evidently. But the specific content choice — leading with her core *capability* rather than her *title* — is a deliberate departure from standard practitioner sites that open with "Hi, I'm [Name], a nutritionist." The capability is the hook. The person is revealed within it.

---

### Purpose
Establish the brand's core premise: Sheeba sees what others cannot read. Create immediate differentiation from every other nutritionist, dietitian, or wellness practitioner the visitor has previously encountered. Create enough curiosity and recognition to earn a scroll.

### Visitor Question
*"Is this person different from the ones I've already seen?"*

### Content

**LEFT PANEL (60% width on desktop)**

Badge (above headline):
```
Nutritionist of the Year — 2020
```
Rendered: Rubik Medium 11px, uppercase, 2px letter-spacing, `--accent-sage`, with a drawn-circle containing the year

Headline (H1):
```
Your blood test
told a story.

Everyone else
missed it.
```
Rendered: Playfair Display Semibold. "story" and "missed it" in Playfair Italic. Line breaks exactly as written — each line is a beat.

Subheading:
```
Sheeba Majmudar connects the dots that conventional medicine leaves unread — using functional medicine, naturopathy, and a decade of evidence from over 1,000 clients globally.
```
Rendered: Rubik Regular 18px, `--foreground` at 80%, max-width 520px

CTA:
```
Begin your assessment →
```

Social proof micro-line (below CTA):
```
Recommended by GPs, Cardiologists, and Gynaecologists across Singapore
```
Rendered: Rubik Regular 12px, `--foreground` at 55%, italic

Sheeba's portrait: Below the headline area on desktop, partially visible — editorial three-quarter portrait, natural light, olive-green, direct gaze. Not a separate panel — bleeds into the section.

**RIGHT PANEL (40% width on desktop)**

The Blood Chemistry Diagram: A simplified, animated blood chemistry analysis chart showing 5–6 markers.

Markers to display (chosen for emotional impact, not clinical completeness):
1. Ferritin
2. Vitamin D
3. Cortisol (morning)
4. TSH
5. Homocysteine
6. Glucose

Each marker row contains:
- Marker name (left, Rubik 11px)
- Reference range bar (grey, full width)
- Optimal range overlay (sage, narrower — Sheeba's functional range)
- Client value dot (amber, positioned within the frame)

One margin annotation, handwritten-style (Playfair Italic 14px, slightly rotated, `--accent-olive`):
```
"Ferritin at 22 — 'normal' by hospital standards.
Optimal is 70+. This is why you're exhausted."
```

Diagram label (below the chart, Rubik 12px, `--foreground` 50%):
```
Functional Blood Chemistry Analysis — a reading most practitioners skip.
```

**MOBILE LAYOUT**

Stack: Badge → Headline → Subheading → Portrait (full-width image) → Diagram (simplified to 3 markers) → CTA

The diagram simplifies to 3 markers on mobile. The annotation remains.

### Components
- `<HeroBadge>` — year badge with drawn-circle ornament
- `<HeroHeadline>` — H1 with mixed weight/italic Playfair Display
- `<HeroSubheading>` — Rubik body text
- `<BloodChemistryDiagram>` — SVG animated chart (5–6 marker rows, path draw animation)
- `<MarginAnnotation>` — Playfair Italic, slight rotation, positioned absolutely
- `<CTAButton>` — primary olive pill with drawn arrow
- `<SocialProofLine>` — micro-text below CTA
- `<HeroPortrait>` — editorial photograph, no border-radius

### Visual Direction
The left panel is Sheeba — present, alive, certain. The right panel is her clinical instrument: the blood chemistry diagram, drawn in real time. Together they make the central claim of the brand visible without a single word of explanation.

The diagram is not illustrative. It is a real, specific clinical tool rendered beautifully. The annotation is the moment where the precision becomes personal — one sentence that every fatigued woman in the target audience will read and feel seen by.

The background is `--background` `#F9F6F0`. No gradient. No hero image behind the content. The warm parchment ground of the brand world.

A botanical leaf illustration bleeds in from the left edge, behind the portrait, at very low opacity (0.3). It is barely there — the brand's heartbeat, already present.

### Motion Direction

**On page load (after the page-load overlay clears):**
1. Badge fades in: `opacity 0→1`, 0.6s, delay 0.1s
2. Headline reveals line by line: each line `opacity 0→1` + `translateY 30px→0`, 0.8s, staggered 0.15s between lines
3. Subheading fades in: 0.7s, delay after last headline line + 0.2s
4. Portrait fades in: `opacity 0→1`, 1.0s, delay 0.3s after headline completes
5. CTA + social proof: `opacity 0→1`, 0.6s, after portrait starts appearing
6. Diagram begins drawing: starts simultaneously with portrait, 7-step sequence (see VISUAL_METAPHOR.md)
7. Botanical leaf: `opacity 0→0.3`, 1.4s, last element to appear
8. Total hero load: approximately 3.5–4.5 seconds end-to-end

**On scroll:**
- Diagram has gentle parallax at 0.92× scroll speed (max offset 40px)
- Headline and subheading: no parallax — they are ground truth, not atmospheric

### CTA
**Primary:** `"Begin your assessment →"` — links to anchor `#contact` (the consultation form at bottom of page)

The CTA does not link to a separate page. The journey begins on this page.

### Success Criteria
- Scroll depth past the hero exceeds 70% of visitors
- Time-on-hero section: average 8+ seconds (visitor is reading the diagram annotation)
- The headline and the annotation are the two most-read text elements on the page (confirmed via heatmap)
- Bounce rate from hero alone is below 35%

---

---

## SECTION 2 — RECOGNITION / PROBLEM SECTION

### Why This Section Exists
The visitor has seen the hero — they know Sheeba is impressive. But impressive is not enough. The visitor needs to feel *understood* before they can trust. This section is the emotional pivot: from "she's credentialed" to "she understands me." It borrows the emotional DNA from Concept 3 ("The Turning Point") — naming the visitor's experience before asking for anything in return.

### Why It Appears Here
This section must appear immediately after the hero, before any credentials or testimonials. It is the brand saying: *"Before we tell you more about us, we want to acknowledge what you've been through."* This sequencing is rare in the wellness space and therefore immediately differentiating. It signals that Sheeba's practice is not transactional.

### Why It Appears Before Section 3
Section 3 (What Makes Sheeba Different) asks the visitor to receive information about Sheeba's methodology. They will only be receptive to that information if they first feel recognised. Recognition unlocks receptivity.

---

### Purpose
Mirror the visitor's pre-arrival experience — the exhaustion, the failed specialists, the confusion of conflicting advice — without melodrama or manipulation. Create the feeling of being seen. Establish that this practice operates differently because it starts by understanding the person, not diagnosing the symptom.

### Visitor Question
*"Does this person understand where I'm coming from, or is this just another wellness service?"*

### Content

Section label (above content, small):
```
You are not alone in this
```
Rendered: Rubik Medium 11px, uppercase, 3px letter-spacing, `--accent-sage`

Three recognition statements — displayed sequentially (not simultaneously), one per panel or in a slow-advancing horizontal sequence:

**Statement 1:**
```
You've seen the doctors.
You've done the tests.
You've been told everything looks normal.

And yet.
```

**Statement 2:**
```
You've been given the same advice
everyone else gets.

It hasn't worked for you specifically.
```

**Statement 3:**
```
You've started to wonder if this is
just how things are now.
```

**Resolution line** (appears after all three statements, centred, larger):
```
It isn't how it has to be.
```
Rendered: Playfair Display Italic, 32–38px, `--accent-olive`

**Supporting copy** (below the resolution line):
```
Sheeba's clients arrive having seen multiple specialists.
They leave knowing exactly what has been happening in their body — and with a specific protocol to change it.
```
Rendered: Rubik Regular 17px, centred, max-width 560px

**Stat anchor** (below supporting copy):
```
Over 1,000 clients. Conditions spanning 12 clinical categories. Results that their previous doctors told them were not possible.
```
Rendered: Rubik Regular 15px, `--foreground` at 65%

### Components
- `<SectionLabel>` — small uppercase badge text
- `<RecognitionSequence>` — three-panel statement component (horizontal progression on desktop, vertical stack on mobile)
- `<ResolutionStatement>` — large Playfair Italic centred line
- `<SupportingCopy>` — Rubik body, centred
- `<StatAnchor>` — compact stat line

### Visual Direction
This section deliberately minimises visual complexity. No diagram. No photograph. No illustration. Text on the warm parchment background — the page at its most spare.

The three statements appear against slightly different background tonal values (each 2–3% warmer than the last) — a barely perceptible warmth progression. By the time the resolution line appears, the ground has shifted.

The resolution line — *"It isn't how it has to be."* — is the typographic hero of this section. It is the largest Playfair Italic type on the page outside the hero. It should feel like someone said something quietly and directly that you needed to hear.

A very faint dot-field texture (opacity 0.06) appears in the background — barely present, suggesting invisible order within the confusion.

### Motion Direction
- Statements appear in sequence — Statement 1 is fully visible, Statement 2 is partially visible below, Statement 3 is further below
- As the visitor scrolls, each statement rises into full opacity and the previous fades to 40%
- This is a scroll-linked opacity sequence — not a timer, not a carousel. The visitor's scroll controls the pacing.
- The resolution line: when it enters the viewport, it fades in slowly (`opacity 0→1`, 1.4s) then holds
- The resolution line does not animate with a translate — it simply *arrives*

### CTA
No CTA in this section. This is not an action section. A CTA here would break the emotional register — this section is for recognition, not conversion. The absence of a CTA is intentional and should not be "fixed."

### Success Criteria
- Scroll depth through this section: 80%+ (visitors pause here)
- Average time in section: 15+ seconds (three statements take time to read)
- Exit rate from this section: below 8% (if visitors reach here and leave, the recognition copy is failing)

---

---

## SECTION 3 — WHAT MAKES SHEEBA DIFFERENT

### Why This Section Exists
The visitor has been recognised (Section 2). They are now receptive. This section delivers the intellectual substance of Sheeba's differentiation — not as marketing claims, but as specific observations from her clinical practice. This is the Sage archetype operating at full strength: precise, specific, evidenced.

### Why It Appears Here
After recognition comes understanding. The visitor now needs to understand *how* Sheeba is different — not just *that* she is. This is the intellectual credential that precedes the formal credentials list (Section 4). Method before title.

---

### Purpose
Demonstrate, through specific clinical observations, what Sheeba reads that conventional medicine routinely misses. Transform the abstract claim "she sees what others miss" into concrete, verifiable evidence of a distinct methodology. Create the intellectual conviction that precedes emotional commitment.

### Visitor Question
*"What does she actually do differently?"*

### Content

Section label:
```
The pattern she sees
```

Section headline:
```
"I read the same blood test
your doctor read.
I reach different conclusions."
```
Rendered: Playfair Display, two sizes — the quoted text smaller and italic, as if from a letter

Three observation cards — each containing a specific clinical insight in Sheeba's first-person voice:

**Card 1 — Fatigue:**
```
"Most fatigue cases I see have iron values within the normal reference range.
But ferritin — the stored form of iron — sits at 15–20, when the functional
optimal is 70–100. The standard test doesn't flag this. I do."
```

**Card 2 — Hormonal:**
```
"Hormonal imbalance rarely begins with hormones. It begins in the gut,
moves through liver detoxification pathways, and arrives at hormones last.
Most protocols address hormones first. Mine addresses the root."
```

**Card 3 — Chronic:**
```
"Autoimmune conditions and digestive issues almost always share a root cause.
Treating them as separate conditions — as most practitioners do — is why
they don't resolve. I treat the system, not the symptoms."
```

Each card has:
- The observation text (Playfair Italic for the core insight sentence, Rubik Regular for the surrounding context)
- A small margin annotation (Playfair Italic 12px, slightly rotated): `"This is the conversation most patients never have."`
- A tiny drawn-line divider between the observation and the annotation

Below all three cards, a single line:
```
This is functional medicine. This is what she calls: connecting the dots.
```
Rendered: Rubik Regular 15px, `--foreground` at 60%, centred

### Components
- `<SectionLabel>` — small uppercase
- `<SectionHeadline>` — Playfair with mixed italic treatment
- `<ObservationCard>` × 3 — each with observation text + margin annotation + drawn divider
- `<MarginAnnotation>` — the offset, rotated annotation component (from VISUAL_METAPHOR.md)
- `<ClosingLine>` — small centred Rubik text

### Visual Direction
The three observation cards are the primary visual element. They are not cards in the UI-card sense (no border, no shadow box). They sit on a slightly warmer background (`--accent-beige-light`), each with a single drawn-line left border in sage.

The left border draws downward on scroll entry — from the top of the card to the bottom, 0.8s. It marks: "pay attention to this."

The margin annotation is offset to the right of the card — sitting in the white space beyond the text column. On mobile, it collapses inline below the card.

The three cards sit at slightly different vertical positions — not a perfect grid, but offset by 12–16px between each. As if placed by hand rather than aligned by software.

### Motion Direction
- Cards reveal: staggered `opacity 0→1` + `translateY 40px→0`, 0.9s each, staggered 0.2s
- The drawn left border: each card's border draws downward as the card enters viewport, starting 0.3s after the card begins appearing
- Margin annotations: fade in last, 0.5s delay after their parent card is fully visible
- On hover (desktop): the left border brightens slightly from sage to olive. The annotation increases from 80% to 100% opacity. Nothing else changes.

### CTA
No primary CTA. An optional secondary text link:
```
Read how Sheeba approaches a new client →
```
This links to the About page. It is small, understated, and optional. The priority is to keep the visitor on the page.

### Success Criteria
- At least one of the three observation cards is read completely (scroll depth through the full card text)
- The About page link registers measurable click traffic (secondary metric — not primary)
- Visitors who read this section have a higher consultation form completion rate than those who don't (tracked via heatmap scroll cohort analysis)

---

---

## SECTION 4 — CREDENTIALS & AWARDS

### Why This Section Exists
The visitor now has emotional recognition (Section 2) and intellectual understanding (Section 3). They believe Sheeba is different and that her methodology is specific. They now need formal proof that this difference is real, verifiable, and recognised by the establishment she operates within. Credentials are the sceptic's checkpoint.

### Why It Appears Here
This is the critical positioning: credentials appear *after* methodology, not before it. A credentials-first approach triggers comparison ("let me evaluate her against other credentialled people"). A methodology-first approach triggers recognition ("this is the kind of thinking I've been looking for") — which makes the credentials feel like confirmation rather than argument.

---

### Purpose
Establish Sheeba's formal authority through verifiable external recognition. Convert sceptics who have been following the emotional arc but need institutional proof before they can fully trust. Reinforce for believers the scale of what they've found.

### Visitor Question
*"Can I verify that she's actually as good as she seems?"*

### Content

Section label:
```
Recognition
```

Section headline:
```
You're being looked after
by the best.
```
Source: verbatim from existing site (retain this headline exactly — it is correct)

**Awards subsection** (displayed as a restrained horizontal list, not a badge wall):

| Award | Organisation | Year |
|-------|-------------|------|
| Nutritionist of the Year | Prestige Awards | 2020 |
| Best Naturopathic Nutritionist | APAC Business Awards | 2021 |
| Outstanding Best International Nutritionist | South East Asia Business Awards | 2021 |
| 100 Most Inspiring Women | CozyCot International Women's Day | 2014 |
| Asia's Greatest Brands | Asia's Greatest Brands | — |

Each award: Award name in Rubik Medium 14px, Organisation in Rubik Regular 12px `--foreground` 60%, Year in Rubik Regular 11px sage.

**Separator line** (drawn horizontal, full section width)

**Press logos subsection:**

Label: `As featured in` (Rubik 11px uppercase spaced)

Logos: Today's Parent · Channel News Asia · BBC · The Straits Times · [Home magazine]

All logos: monochrome, `--foreground` at 40% opacity. On hover: 70% opacity.

**Separator line**

**Doctor referrals statement** (a single, distinct line, centred):
```
"Recommended by GPs, Obstetricians, Gynaecologists,
Cardiologists and Physiotherapists across Singapore."
```
Rendered: Playfair Display Italic 20px, `--foreground` at 85%. Treated like a pull-quote because it is — this is the most trust-building credential on the page for a sceptical visitor.

**Credentials footnote** (small, below the referrals statement):
```
MSc Human Nutrition (USA) · Reconnective Healing (Dr. Eric Pearl) ·
Biodynamic Craniosacral Therapy Level 4 · Advanced Blood Chemistry Analysis ·
NES Total Wellness Practitioner · Aromatherapist · Gemmotherapy · + 4 more
```
Rendered: Rubik Regular 12px, `--foreground` 55%, centred. `"+ 4 more"` links to the About page credentials section.

### Components
- `<SectionLabel>` — small uppercase
- `<SectionHeadline>` — Playfair Display
- `<AwardsList>` — restrained horizontal/vertical award list (not icon cards)
- `<DrawnDivider>` — animated horizontal divider line
- `<PressLogos>` — monochrome logo row
- `<DoctorReferralQuote>` — Playfair Italic pull-quote treatment
- `<CredentialsFootnote>` — small Rubik credential row with "more" link

### Visual Direction
This section must not look like a trophy case. The awards are typographic, not visual badges — no medal icons, no gold colours, no certificate imagery. Text carries more authority than decoration here.

The press logos are muted — supporting evidence, not the centrepiece.

The doctor referrals statement is the most visually prominent element in this section — because it is the most credible signal for this audience. A GP referring a patient is institutional trust: the kind of credentialled, sceptical endorsement that Persona B (the health-conscious professional) most respects.

The section has a slightly warmer background than the preceding section.

A small dot-field texture at very low opacity (0.06) appears behind the awards list.

### Motion Direction
- Awards list: items reveal staggered `opacity 0→1`, 0.5s each, staggered 0.1s
- Drawn dividers: animate from left-to-right on scroll entry, 0.8s each
- Press logos: fade in together, `opacity 0→0.4`, 1.0s
- Doctor referral quote: `opacity 0→1` + `translateY 20px→0`, 1.2s — slower than surrounding elements, because it is the most important

### CTA
Secondary text link (not a button):
```
Full credentials and qualifications →
```
Links to `/about` credentials section.

Not a primary CTA. The visitor's next action should be scrolling to Outcomes (Section 5), not leaving the page.

### Success Criteria
- The doctor referral statement registers the highest dwell time of any element in this section (heatmap)
- About page link click rate: secondary metric, not the primary goal of this section
- Visitors who pass through this section without bouncing have 2× the consultation form completion rate of those who scroll past quickly

---

---

## SECTION 5 — OUTCOMES / TESTIMONIALS

### Why This Section Exists
The visitor has been recognised, understood Sheeba's methodology, and verified her credentials. They are now ready to see evidence from people like them. This is the Proof stage — and it is the section with the highest potential for conversion if executed correctly, because it transforms abstract authority into specific, personal, verifiable outcomes.

### Why It Appears Here
Testimonials appear after credentials because their impact depends on the credibility already established. An unverified source's testimonial is interesting. A testimonial about a practitioner you already believe is exceptional is *compelling*.

### Why The Condition-Grouping Matters
The original site groups testimonials into 12 clinical conditions. This must be retained. A testimonial from "Ruby Atkins, 71 — Diabetes" is infinitely more powerful for a diabetic visitor than a testimonial from "Ruby Atkins, 71" with no context. The condition tag is the mechanism by which the visitor finds themselves in the evidence.

---

### Purpose
Prove through named, specific, condition-categorised testimonials that Sheeba's methodology produces measurable outcomes for real people with real chronic conditions. Allow visitors to self-select into the evidence most relevant to their situation. Convert the convinced visitor into an enquiring one.

### Visitor Question
*"Has she done this for someone like me?"*

### Content

Section label:
```
Sweet words by our sweetest clients
```
Source: verbatim from existing site (retain — it is warm and distinctive)

Section headline:
```
Here's what they said about their experience.
```
Source: verbatim from existing site (retain)

Stat line (above the testimonials):
```
Over 1,000 Happy clients — Changing lives, one person at a time.
```
Source: verbatim from existing site

**Condition navigation** (horizontal scrollable pill list on desktop, dropdown on mobile):
```
All  |  Diabetes  |  High Blood Pressure  |  Weight Loss  |  Weight Gain  |
Autoimmune  |  Liver  |  Metabolic Syndrome  |  Infections  |  Chronic Fatigue  |
Hormonal  |  Digestive  |  Skin
```

Default state: "All" selected — shows the 3 homepage feature testimonials.

When a condition is selected: the testimonial display filters to show only testimonials in that condition group. (Note: on the full `/testimonial` page, all 20 are displayed. On the homepage, a maximum of 6 are displayed with a link to the full page.)

**Homepage feature testimonials** (shown in "All" state — 3 cards):

The 3 testimonials from the original homepage are correct and should be retained:
1. **Sheela Thomas, 39** — Anemia/Chronic Fatigue
2. **Serina Baxter, 41** — Skin/Autoimmune
3. **Andre, 37** — Weight Loss/Blood Pressure

Each testimonial card contains:
- Condition badge (top-left): `"Chronic Fatigue"` or `"Psoriasis · Autoimmune"` — Rubik 10px, uppercase, sage background, sage text
- Client name: Rubik Medium 15px
- Age: Rubik Regular 12px, `--foreground` 60%
- Quote excerpt (3–4 sentences maximum): Rubik Regular 15px, line-height 1.8
- A "Read full story →" text link (small, sage) — links to the condition section on `/testimonial`

Below the testimonial cards:

```
These are 3 of 1,000+ clients. Read all 20 featured stories →
```
Rendered: Rubik Regular 14px, `--foreground` 60%. The link goes to `/testimonial`.

Disclaimer line (below the link):
```
* Individual results may vary from person to person.
```
Rendered: Rubik Regular 11px, `--foreground` 40%

### Components
- `<SectionLabel>` — small uppercase
- `<StatLine>` — the "Over 1,000 clients" line, prominent but not overwhelming
- `<SectionHeadline>` — Playfair Display
- `<ConditionFilter>` — horizontal pill navigation, filterable
- `<TestimonialCard>` × 3 — condition badge + name + age + excerpt + read-more link
- `<TestimonialGrid>` — the container (3-column desktop, 1-column mobile)
- `<ViewAllLink>` — text link to `/testimonial`
- `<DisclaimerText>` — legal micro-text

### Visual Direction
Testimonial cards use the glassmorphism treatment — frosted panel (`--glass-bg`), 1px border (`--glass-border`), `--shadow-premium`. They float above the section background rather than sitting flush with it.

Each card has a subtle botanical leaf-vein texture behind the quote text at 4% opacity.

The condition badge uses the dot motif — a small sage filled circle to the left of the condition name, as a category locator.

The condition filter pills: default state has light sage border, transparent background. Selected state: sage background, white text. Transition: 0.3s fill.

Section background: `#F2EDE2` — the warmest section so far. This is where the human evidence lives.

### Motion Direction
- Section stat and headline: standard reveal (`opacity + translateY`, 0.9s)
- Condition filter: fades in after headline, 0.6s
- Cards: staggered reveal, 0.15s between each, `opacity 0→1` + `translateY 30px→0`, 0.8s
- Filter interaction: when a condition pill is clicked, current cards fade out (0.3s), new cards fade in (0.4s). No page refresh. No scroll change.
- "Read full story" link hover: the drawn underline appears (wipes left-to-right, 0.25s)

### CTA
Primary within this section (inside each card): `"Read full story →"`  
Section-level: `"Read all 20 featured stories →"` → `/testimonial`

These are secondary CTAs. The primary page CTA (consultation form) is still Section 9.

### Success Criteria
- At least 25% of visitors who reach this section interact with the condition filter
- The `/testimonial` page receives significant referral traffic from this section's "Read all" link
- Visitors who interact with the filter have 3× higher consultation form completion rates than those who don't
- No single testimonial dominates dwell time — all three cards should receive approximately equal attention

---

---

## SECTION 6 — HOW SHE WORKS

### Why This Section Exists
The convinced visitor now has a specific fear: *"I don't know what it would actually be like to work with her."* This section removes that fear by making the process visible, specific, and reassuring. It transforms the abstract relationship between practitioner and client into a clear, manageable sequence.

### Why It Appears Here
After Proof comes Method — the visitor who believes in the outcomes now needs to understand the path to them. This is the commitment threshold: understanding "what happens if I reach out" determines whether the visitor enquires or waits.

---

### Purpose
Reduce the fear of the unknown associated with beginning a new kind of health practice. Make the client journey transparent, specific, and achievable. Establish that Sheeba's process is systematic (not mystical) and personalised (not generic).

### Visitor Question
*"What actually happens if I contact her? What am I agreeing to?"*

### Content

Section label:
```
The process
```

Section headline:
```
Here's how it works.
```
Source: verbatim from existing site (retain)

The 4-step Journey Line — each step with a title and description. Retain existing content exactly:

**Step 01 — Health Assessment**
```
Complete a health assessment to provide Sheeba with an in-depth analysis of your health condition. This can be done anywhere in the world.
```

**Step 02 — Consultation**
```
A one-to-one consultation with Sheeba — virtual or in person. She will walk you through the findings and outline a nutritional plan and supplements protocol tailored to your concerns.
```

**Step 03 — Total Wellness Protocol**
```
A personalised, holistic set of protocols — customised to you, not to a general condition.
```

**Step 04 — Follow Up**
```
Between 4–8 weeks, a follow-up is recommended to assess progress and adjust the protocol. The body changes — the plan changes with it.
```

Below Step 03, a margin annotation (the most important):
```
"No two protocols are ever the same.
Your biochemistry is your fingerprint."
```

Below the journey line:
```
Consultations are available globally — virtually or in person at Southpoint, Singapore.
```
Rendered: Rubik Regular 14px, `--foreground` 60%, centred

### Components
- `<SectionLabel>` — small uppercase
- `<SectionHeadline>` — Playfair Display
- `<JourneyLine>` — horizontal SVG path with 4 nodes + labels (see VISUAL_METAPHOR.md diagram spec)
- `<StepNode>` × 4 — circle marker, step number (sage), step title (Rubik Medium 15px), description (Rubik 14px)
- `<MarginAnnotation>` — the "fingerprint" annotation, offset from Step 03
- `<GlobalNote>` — the small availability note

### Visual Direction
The Journey Line is the primary visual of this section — a horizontal SVG path drawn left-to-right with 4 nodes. 1.5px sage stroke, slightly organic (not mechanical).

Step 03 (Total Wellness Protocol) is visually emphasised: slightly larger node circle (10px vs 8px) and carries the margin annotation. The customisation is the most important step in the process.

Step numbers: small sage text above each node, `01`, `02`, `03`, `04` — Rubik Medium 12px, uppercase.

Section background: `#F5F1E8` — clearing slightly from Section 5.

### Motion Direction
- Section headline: standard reveal
- Journey line draws left-to-right as the section enters the viewport, 2.0s total, continuous draw (not step-by-step)
- Each node appears as the line reaches it: the node circle scales in from 0 to full size (0.3s)
- Step labels (title + description) fade in 0.2s after their node appears
- Margin annotation: last element, fades in after Step 03 label, 0.6s delay

### CTA
Secondary text link below the journey line:
```
Start with a health assessment →
```
Links to anchor `#contact` (the consultation form).

### Success Criteria
- Scroll-through rate: 85%+ (this is a short section — visitors who arrive here should complete it)
- The margin annotation ("No two protocols are ever the same") registers clear dwell time
- Direct click-throughs from this section to the contact form: measurable and positive

---

---

## SECTION 7 — SERVICES OVERVIEW

### Why This Section Exists
The visitor now understands the process. They want to know what specifically falls inside it. Services gives the offering a concrete shape — without this section, the practice feels impressively vague. With it, the visitor can see themselves in the actual menu of what Sheeba provides.

### Why It Appears After Method
Services listed before Method feels like a catalogue — pick what you want and order it. Services after Method feels like: "now that you understand how this works, here is what's available within it." The sequence determines whether the visitor feels like a customer or a patient.

---

### Purpose
Show the breadth and specificity of Sheeba's offering without overwhelming the visitor. Make the services feel like a coherent system, not a random list. Direct interested visitors to the full Services pages.

### Visitor Question
*"What exactly does she offer? Is there something specific for my situation?"*

### Content

Section label:
```
Our Services
```

Section headline:
```
A Naturopathic Approach
```
Source: verbatim from existing site (retain)

Section description:
```
Sheeba's practice operates in two distinct areas: understanding what's happening in your body, and addressing it naturally and specifically.
```

**Column A — Health Assessments**

Sub-label: `Health Assessments`

Brief description:
```
Before any treatment, Sheeba needs to understand your body at a biochemical level. These assessments are the foundation.
```

4 assessment items (name + one-sentence description, from the audit):
1. Functional Blood Chemistry Analysis — "Understanding your biochemistry is the first step."
2. Dutch Test — "For hormone-related challenges — the most informative test of its kind."
3. Hair Tissue Mineral Analysis — "Non-invasive assessment of mineral levels, metabolic and hormonal function."
4. Compatibility Test — "Determines at a cellular level which foods may be creating inflammation."

CTA: `Explore Health Assessments →` → `/health-assessments`

**Column B — Treatments**

Sub-label: `Treatments`

Brief description:
```
Once the assessment is complete, Sheeba draws on a range of evidence-based and energetic modalities to address the root causes.
```

6 treatment items (name + one-sentence description, from the audit):
1. NES (Nutri Energetic System) — "Detects and corrects disruptions in the body's bio-field."
2. Therapeutic Aroma Therapy — "Essential oils with a 5,000-year track record — applied precisely."
3. Dropzone — "Sheeba's signature fat-loss programme, practitioner-guided."
4. Gemmotherapy — "Plant stem cell concentrates for detox and targeted healing."
5. Reconnective Healing — "Non-touch energy healing that works at the blueprint level."
6. Biodynamic Craniosacral Therapy — "Light touch. Central nervous system. Lasting realignment."

CTA: `Explore Treatments →` → `/treatment`

### Components
- `<SectionLabel>` — small uppercase
- `<SectionHeadline>` — Playfair Display
- `<SectionDescription>` — Rubik body
- `<ServicesGrid>` — two-column layout (Assessments / Treatments)
- `<ServiceColumn>` × 2 — sub-label + description + item list + CTA
- `<ServiceItem>` × 10 — name (Rubik Medium 14px) + description (Rubik Regular 13px) + dot-motif marker
- `<ColumnCTA>` × 2 — text links to sub-pages

### Visual Direction
The two columns are separated by a drawn vertical line — 1px sage, drawn top-to-bottom on scroll entry (0.8s).

Service items use the dot motif as their bullet marker — a small sage filled circle (6px).

The two columns have slightly different background tints:
- Assessments column: `--background` (cooler)
- Treatments column: `--accent-beige-light` (warmer)

This tonal distinction reflects the functional distinction between the two service types without explanation.

Column sub-labels: Rubik Medium 12px, uppercase, 2px letter-spacing, sage.

Section background: `#F9F6F0` — returning to base.

### Motion Direction
- Columns reveal together: `opacity 0→1` + `translateY 30px→0`, 0.9s
- Vertical divider line draws top-to-bottom as columns appear, 0.8s
- Service items within each column: staggered `opacity 0→1`, 0.08s between each, starting 0.3s after column reveals
- Dot markers: scale in from 0 to full size, staggered with their parent item

### CTA
Two column-level CTAs (text links, not buttons):
- `Explore Health Assessments →` → `/health-assessments`
- `Explore Treatments →` → `/treatment`

### Success Criteria
- Both CTA links generate measurable click traffic (split roughly 40/60 between Assessments and Treatments)
- Service items are read (scroll depth through the full lists)
- Visitors who engage with this section have higher `/services` sub-page visit rates

---

---

## SECTION 8 — BOOK SECTION

### Why This Section Exists
The book section exists for one purpose: to signal intellectual depth that exceeds what any website can contain. A published book is the strongest possible authority signal for a health practitioner — it means she has thought about this enough to organise it into 200+ pages. It elevates everything above it retrospectively.

### Why It Appears Here
After Services, before Contact. The visitor has seen everything Sheeba offers. The book is the final depth signal before the invitation to begin. It says: "there is more here than what you see." It earns the right for the Contact section to ask for something.

---

### Purpose
Establish intellectual depth and publishing authority. Provide an additional entry point for visitors who are not yet ready to enquire but want to engage with Sheeba's thinking. Function as a trust accelerator for visitors who respond to intellectual credentials.

### Visitor Question
*"Is there a way to understand her approach better before I commit to a consultation?"*

### Content

Section label:
```
Publishing
```

Section headline:
```
Edible to Incredible
```

Book description (from existing site — retain):
```
In her book, Sheeba identifies root causes of health issues and provides a holistic healthcare perspective — addressing blind spots of the medical profession. It galvanizes all readers, from beginners to dedicated health practitioners, into the next level of well-being.
```

Pull quote from the book (one compelling line — to be confirmed from actual book content):
```
"Aging may be inevitable. Diseases are not."
```
Source: paraphrase of Sheeba's stated belief from the About page bio. To be confirmed.

CTA link:
```
Purchase on Amazon.com →
```
External link, opens in new tab.

Visual: Book cover image (existing asset from original site).

### Components
- `<SectionLabel>` — small uppercase
- `<BookSection>` — horizontal layout: book cover image (left 40%) + content (right 60%)
- `<BookCoverImage>` — the actual book cover, no border-radius, slight shadow
- `<SectionHeadline>` — Playfair Display
- `<BookDescription>` — Rubik body
- `<BookPullQuote>` — Playfair Italic, large, `--accent-olive`
- `<ExternalCTA>` — text link with the drawn-arrow icon + external indicator

### Visual Direction
The book cover is the only product photograph on the homepage. It appears with gravitas — clean, warm-lit, at a slight angle (2–3 degrees) as if placed on a desk. A small cast shadow beneath it.

The section is intentionally restrained — no badge wall, no review count, no "bestseller" claim. The book cover and the description carry the authority. The pull quote is the emotional peak.

Section background: `--accent-beige-light`.

A botanical illustration appears in the far left margin — barely visible (opacity 0.12).

### Motion Direction
- Book cover: `opacity 0→1` + slight `rotate(-2deg)` settling into its final position over 1.0s
- Content: standard reveal, 0.3s after book cover starts appearing
- Pull quote: fades in last, 0.8s delay after the description

### CTA
Single external link: `"Purchase on Amazon.com →"`

This is the only external-navigation CTA on the homepage. All other CTAs lead to either page anchors or internal pages.

### Success Criteria
- Amazon link click rate: secondary metric — not the primary goal of this section
- Bounce rate from this section: below 5% (visitors who reach here are highly engaged)
- Scroll completion through this section: 90%+ (it is short and specific)

---

---

## SECTION 9 — CONTACT / CONSULTATION

### Why This Section Exists
This is the culmination. Every preceding section has been building toward this moment — the visitor who has been recognised, convinced, proven to, shown the method, shown the offering, and shown the depth is now ready to begin. The form must honour the journey that preceded it.

### Why It Appears Last
Because the form earned it. This is not a conversion-rate-optimisation principle. It is a respect principle: the visitor has given their attention for the length of this page. The form is the first thing they are asked to give.

---

### Purpose
Convert the convinced visitor into an enquiry. Remove all possible friction from the act of reaching out. Frame the form not as a submission but as the first step of the client journey the visitor has just been shown.

### Visitor Question
*"How do I actually start?"*

### Content

Section label:
```
We're here to listen
```
Source: verbatim from existing site (retain — it is the warmest line on the page)

Section headline:
```
Every journey begins with
one question:

Where are you now?
```
Rendered: Playfair Display. "Where are you now?" in italic, slightly larger.

Section supporting copy:
```
Fill in the form below. Sheeba will be in touch personally.
This is how every client journey begins.
```
Rendered: Rubik Regular 17px

**Form fields** (retain existing field structure from audit, with voice-of-Sheeba labels):

| Original field | V2 label |
|----------------|----------|
| First Name + Last Name | "Your name" (single field or adjacent pair) |
| Phone + country code note | "Phone number" with inline note: "Include your country code" |
| Email | "Email address" |
| Remarks/Message | "Tell me what's been going on" |

Submit button text:
```
Start the conversation →
```

Below the form:

Contact information (for visitors who prefer direct contact):
```
admin@sheebathenutritionist.com
+65 9656 6714
200 Cantonment Road, #06-01A, Southpoint, Singapore 089763
```
Rendered: Rubik Regular 14px, `--foreground` 60%

**Form success state** (replaces the form on successful submission):
```
Sheeba will be in touch.
This is the beginning.
```
Rendered: Playfair Italic, centred, 24px. Fades in to replace the form over 0.6s.

Replace the original generic confirmation message: *"Thank you! Your submission has been received!"* — that is transactional language, not brand language.

### Components
- `<SectionLabel>` — small uppercase
- `<SectionHeadline>` — Playfair Display with italic emphasis
- `<SectionSupportingCopy>` — Rubik body
- `<EnquiryForm>` — the full form with floating labels
  - `<FloatingLabelInput>` × 4 — name, phone, email, message textarea
  - `<CTAButton>` — submit, with drawn arrow + state management
- `<FormSuccessState>` — Playfair Italic confirmation
- `<ContactDetails>` — email, phone, address below the form

### Visual Direction
This section has the warmest background on the entire page: `#EDE8DE`. The light here is the most amber — the innermost, most welcoming space on the page.

The form fields: no box borders at rest. On focus: a single drawn underline animates across the bottom of the field (left-to-right, 0.3s). The floating label lifts above the field and reduces in size on focus (0.25s transition).

The submit button: the primary olive pill — the largest and most prominent CTA on the page. It is here because this is where it belongs.

A coordinate marker (60×60 crosshair, from VISUAL_METAPHOR.md) appears subtly behind the form — faint, watermark-like, in `--accent-sage` at 8% opacity.

The Lottie plant in the lower-right corner is most visible in this section — as the visitor reaches the end of the page, the plant is most alive.

### Motion Direction
- Section headline: reveals staggered by line (each line fades in sequentially, 0.2s stagger)
- Form container: `opacity 0→1` + `translateY 40px→0`, 1.0s, delayed 0.4s after headline
- Coordinate marker: `opacity 0→0.08`, 1.6s — the last element to appear in the section
- Field focus animation: underline draws left-to-right, 0.3s, triggered on focus
- Label float: lifts and scales from 16px to 12px, `translateY 0→-24px`, 0.25s ease-out
- Submit hover: background shifts olive → amber-dark (0.35s), arrow moves 4px right (0.3s), lift 2px
- Success state: form fades out (0.4s), success text fades in (0.6s, delayed 0.3s after form fades out)

### CTA
**Primary page CTA:** `"Start the conversation →"` — the form submit button

This is the only primary CTA on the entire homepage. All preceding CTAs were secondary or section-level. This one is primary.

### Success Criteria
- Form completion rate: primary conversion metric for the page
- Field abandonment rate: which field causes visitors to stop (tracked per field)
- Success state render rate: percentage of submitted forms that receive confirmation (backend health check)
- Time-to-first-field-interaction from section entry: should be under 10 seconds for engaged visitors

---

---

## SECTION SEQUENCE SUMMARY

| # | Section | Stage | Emotional Goal | Content Source |
|---|---------|-------|---------------|----------------|
| 1 | Hero | Recognition | "She sees what others miss" | CONTENT_AUDIT §4 (Home H1, subhead) |
| 2 | Recognition / Problem | Recognition | "She understands my journey" | PERSONALITY §2 (entry states) |
| 3 | What Makes Sheeba Different | Authority | "Her methodology is specific" | VISUAL_METAPHOR (margin notes, observations) |
| 4 | Credentials & Awards | Authority | "External institutions agree" | CONTENT_AUDIT §8 |
| 5 | Outcomes / Testimonials | Proof | "Real people, real results" | CONTENT_AUDIT §7 (all 20 testimonials) |
| 6 | How She Works | Method | "I know what to expect" | CONTENT_AUDIT §10 (4-step process) |
| 7 | Services Overview | Offering | "I see my situation in this" | CONTENT_AUDIT §3.3–3.5 |
| 8 | Book Section | Depth | "There is more here than a website" | CONTENT_AUDIT §3.1 (Book) |
| 9 | Contact / Consultation | Invitation | "I know how to begin" | CONTENT_AUDIT §6 (Form) |

---

## GLOBAL HOMEPAGE RULES

These rules apply to the entire homepage, not to individual sections.

1. **One primary CTA on the page.** All other CTAs are secondary or tertiary. The submit button in Section 9 is the primary. No section should compete with it.

2. **No autoplay.** No carousels that advance without user input. No videos that play without user action. The visitor's pace is their own.

3. **No pop-ups on this page.** The homepage is a trust-building journey. Interrupting it with pop-ups destroys the brand atmosphere entirely.

4. **The Lottie plant is always present.** Fixed, lower-right, always slow, always gently moving. If it is ever turned off, something essential about the brand is gone.

5. **The drawn-line section dividers are not optional.** They are the page's typographic rhythm — the beat between sections. Every major section transition uses one.

6. **Background warmth increases as the page deepens.** The page starts at `#F9F6F0` and ends at `#EDE8DE`. This progression must be maintained. Do not introduce any section with a background cooler than the section above it.

7. **Margins are not wasted space.** Botanical illustrations, margin annotations, and coordinate textures live in the white space. Collapsing margins on mobile collapses the brand.

8. **The page has exactly one H1.** It is in Section 1. All other section headers are H2 or below.

---

*End of HOMEPAGE_SPEC.md*  
*Sources: CONTENT_AUDIT.md · PERSONALITY.md · V2_BRIEF.md · VISUAL_METAPHOR.md*  
*Date: 2026-06-05*  
*This document is the handoff from Creative Direction to Design Team.*
