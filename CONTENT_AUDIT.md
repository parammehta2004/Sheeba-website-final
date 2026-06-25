# CONTENT AUDIT — sheebathenutritionist.com

> **Extracted:** 2026-06-05  
> **Source:** Live Webflow site (Last Published: Sat Jan 10 2026)  
> **Scope:** All pages except Blog. No redesign. Raw extraction only.

---

## 1. SITEMAP

### Primary Pages (in navbar)

| URL | Page Title (browser `<title>`) |
|-----|-------------------------------|
| `/` | Functional Medicine \| Singapore Nutritionist \| SheebaTheNutritionist |
| `/about` | Naturopathic Nutritionist \| Holistic Healthcare \| SheebaTheNutritionist |
| `/services` | Health And Wellness Treatments \| Holistic Health \| SheebaTheNutritionist |
| `/treatment` | Medical Treatments \| Functional Medicine \| SheebaTheNutritionist |
| `/health-assessments` | Health Assessments \| Medical Analysis \| SheebaTheNutritionist |
| `/testimonial` | Client Testimonials \| Reviews On Sheeba \| SheebaTheNutritionist |
| `/contact-us` | Contact Us \| Sheeba the nutritionist |
| `/media-gallery` | Gallery (linked in nav — not audited) |
| `/blog` | Blog (excluded from scope) |

### Service Sub-Pages (Webflow CMS collection — `/services/[slug]`)

| URL | Type |
|-----|------|
| `/services/nes-nutri-energetic-system` | Treatment |
| `/services/therapeutic-aroma-therapy` | Treatment |
| `/services/dropzone` | Treatment |
| `/services/gemmotheraphy` | Treatment |
| `/services/reconnective-healing` | Treatment |
| `/services/biodynamic-craniosacral-therapy` | Treatment |
| `/services/compatibility-testing` | Health Assessment |
| `/services/dutch-test` | Health Assessment |
| `/services/functional-blood-chemistry-analysis` | Health Assessment |
| `/services/hair-tissue-mineral-analysis` | Health Assessment |

### Footer-only Pages (not in primary nav)

| URL | Label |
|-----|-------|
| `/t-cs` | T&Cs |
| `/data-privacy-policy` | Data & Privacy Policy |
| `/faq` | FAQ |

---

## 2. NAVIGATION STRUCTURE

### Desktop Nav (left → right)
```
[Sheeba Logo SVG]   Home | ABOUT | services ▾ | BLOG | TESTIMONIAL | Gallery
                                       │
                                       ├── Treatments       → /treatment
                                       └── Health Assessments → /health-assessments
```

### Mobile Nav (burger)
```
[Sheeba Logo SVG]
Home
ABOUT
services ▾
  ├── Health Assessments → /health-assessments
  └── Treatment          → /treatment
TESTIMONIAL
```

> **Key observation:** "Contact Us" is **NOT** in the primary navigation. It lives only in the footer under "Support."

---

## 3. PAGE HIERARCHY & SECTION ORDER

---

### 3.1 HOME — `/`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Page Load Overlay** | Logo + Lottie plant animation. Text: *"Preparing our nutrition haven for you..."* |
| 2 | **Hero** | Badge: `2020` · H1: **"Nutritionist Of The Year — Prestige Award"** · Body: *"Sheeba's expertise, varied and multi-dimensional, addresses all clients' concerns. Connecting the dots using functional medicine, she has improved and empowered thousands of lives globally."* · CTA: **"Let's talk"** → anchor `#CTA-Form__Submission` · Image: Sheeba in green dress outdoors |
| 3 | **As Featured In** | Press logos: Today's Parent · [logo] · Channel News Asia · BBC · [Home magazine] · The Straits Times |
| 4 | **Accolades** | Label: *"Sheeba the nutritionist"* · H2: **"You're being looked after by the best."** · 5 bullet credentials (see §8) |
| 5 | **Book** | Label: *"Publishing"* · H2: **"Edible to Incredible"** · Body: *"In her book, Sheeba identifies root causes of health issues and provides a holistic healthcare perspective—addressing blind spots of the medical profession. It galvanizes all readers from beginners to hardcore health nuts into the next level of well-being."* · CTA: *"Purchase it on Amazon.com"* → external |
| 6 | **Services Overview** | Label: *"Our Services"* · H2: **"A Naturopathic Approach"** · 2 bullet items: **Functional Medicine & Assessments** + **Naturopathy & Energetic Medicine** · Right: background video (Sheeba in clinic) + mobile fallback image |
| 7 | **Best in Singapore** | Label: *"Other recognitions"* · H2: **"One of the best nutritionist in Singapore"** · CTA: *"read more"* → bestinsingapore.co |
| 8 | **Prestige Awards Article** | Label: *"Other recognitions"* · H2: **"Singapore Prestige Awards 2020/2021"** · Quote: *"Sheeba is able to connect the dots for clients, offering them the knowledge they need to move forward"* |
| 9 | **APAC Award** | Label: *"SEA APAC best Business Award"* · H2: **"Outstanding Best International Nutritionist"** · Body: *"chosen as the Best International Nutritionist by the South East Asia Business Awards 2021 hosted by APAC Insider"* |
| 10 | **Testimonials Strip** | Stat: **"Over 1,000 Happy clients"** · Subtext: *"Changing lives, one person at a time.."* · Label: *"Sweet words by our sweetest clients"* · H3: **"Here's what they said about their experience"** · 3 testimonial cards (Sheela Thomas · Serina Baxter · Andre) |
| 11 | **Enquiry Form** | Label: *"We're here to listen"* · H3: **"Make a change today"** · Body: *"Fill in the form below to get in touch with us!"* |

---

### 3.2 ABOUT — `/about`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Page Load Overlay** | H1: *"All about me"* · Lottie door-open animation · Text: *"Opening our doors to you 🥰"* |
| 2 | **Hero** | H1: **"Sheeba Majmudar"** · Body: *"Sheeba, Nutritionist of the year 2020 by Prestige Awards, integrates a naturopathic approach to her treatment. She is also the author of the book, 'Edible to Incredible'."* |
| 3 | **Awards & Accolades** | Label: *"Awards & Accolades"* · H2: **"Lifetime of Achievements"** · 4 icon-cards: CozyCot Award · Asia's Greatest Brands · Recommended by industry professionals · Prestige Awards 2020 |
| 4 | **Bio** | H2: **"Get To Know More About Me"** · Full paragraph: *"Canadian born, having lived in US, India, Hong Kong, Singapore and now living in Tokyo, Japan, Sheeba's east and west exposure fused into a passion to discover health naturally, but realistically. According to her, 'just the way we spend on good education and make informed financial investments, similarly, we need to invest wisely in our health.' She believes while aging may be inevitable, diseases are not; our beliefs and how we treat our body can create healing processes that are little understood by medical science. She is one of the few nutritionists and naturopath here who is recommended by a number of Doctors – Obstetricians, Gynaecologists, Cardiologists and even GP Doctors."* |
| 5 | **Credentials** | H4: **"Credentials"** · 10-item bullet list (see §8) |
| 6 | **Special Ingredients Grid** | H4: **"Her blend of special ingredients"** · 11 icon-tiles (see §9) · Centre: flying avocado Lottie |
| 7 | **Ingredient Slider** | 11 slides — icon + 5★ + title + paragraph each (see §9) |

---

### 3.3 SERVICES — `/services`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Hero** | H1: **"Holistic Health"** (*"Holistic"* in green/olive, *"Health"* in black) · Body: *"Sheeba's holistic approach—bridging conventional and alternative methods—extends to her clients' mental, emotional, and spiritual wellbeing. She provides a complete health and wellness treatment to clients globally."* · Image: food/nutrition illustration |
| 2 | **Health Assessments** | H2: **"Our Health Assessments"** · Image right: Health Assessments diagram · 4 bullet items (name + description each) · CTA button: **"Learn More"** → `/health-assessments` |
| 3 | **Treatment** | H2: **"Our Treatment"** · Image right: avocado treatment diagram · 6 bullet items (name + description each) · CTA button: **"Learn More"** → `/treatment` |
| 4 | *[HIDDEN section]* | Supplement List — has class `hide`, not visible on page |
| 5 | **How It Works** | H2: **"Here's how it works."** · 4-step grid (see §10) |
| 6 | **Enquiry Form** | Same as homepage form |

---

### 3.4 TREATMENT — `/treatment`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Hero** | H1: **"Treatments"** · Image: avocado treatment diagram · Body: *"Sheeba's homoeopathic medical treatment is a perfect fusion of high-grade supplements, guided nutrition programmes and essential oils that serve to heal and improve the overall well-being of her clients."* |
| 2 | **Treatment Cards** | 6 cards — each: photo · tag `Treatment` · H4 title · description · **"Learn more"** link → `/services/[slug]` |

**Treatment cards (display order):**

| # | H4 Title | Full Description | Slug |
|---|----------|-----------------|------|
| 1 | **NES (Nutri Energetic System)** | *"The NES system can detect your bio-field (energy), and the miHealth can then raise the electrical potential of those cells, restoring them over time to their normal, optimal functioning as part of the natural healing response. The mihealth device is used as needless accupuncture which can be a very effective treatment for physical pain, injury and even balancing the body for emotional wellbeing."* | `nes-nutri-energetic-system` |
| 2 | **Therapeutic Aroma Therapy** | *"Essential oils have been used for over 5,000 years and continue to be used to fast track in healing all aspects of health, emotions, sleep and mood."* | `therapeutic-aroma-therapy` |
| 3 | **Dropzone** | *"Our signature Dropzone program, a practitioner guided program has helped thousands to lose fat and engage in healthier lifestyles."* | `dropzone` |
| 4 | **Gemmotheraphy** | *"Nothing to do with gems, but more valuable in terms of a health. Used by Sheeba in detox, weight loss and administering natural remedies from concentrated plant stem cells that are instantly absorbed, making them the most effective remedies to improve all types of health conditions."* | `gemmotheraphy` |
| 5 | **Reconnective Healing** | *"Reconnective healing is a non touch energy healing that encompasses all healing techniques which works at your blueprint level to promote a healing response that is permanent. This is using Dr Eric Pearl's technique which is now a world famous and scientifically proven, recognized mode of healing."* | `reconnective-healing` |
| 6 | **Biodynamic Craniosacral Therapy** | *"Biodynamic Craniosacral can benefit anyone with physical or emotional, mental issues as it uses light touch to communicate with the central nervous system and allows the body to naturally align, removing disruptive patterns, allowing the body to finally get into a natural rhythm and balance, improving cellular and organ functions, better breathing and more."* | `biodynamic-craniosacral-therapy` |

---

### 3.5 HEALTH ASSESSMENTS — `/health-assessments`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Hero** | H1: **"Health Assessments"** · Image: health assessments diagram · Body: *"Sheeba requires her clients to go through a health assessment so she can fully understand their underlying conditions. The results act as the blueprint for Sheeba to formulate a customized protocol that best addresses the client's total well being."* |
| 2 | **Assessment Cards** | 4 cards — each: photo · tag `Health Assessment` · H4 title · description · **"Learn more"** link → `/services/[slug]` |

**Assessment cards (display order):**

| # | H4 Title | Full Description | Slug |
|---|----------|-----------------|------|
| 1 | **Compatibility Test** | *"In the Compatibility Test, it is a non-invasive procedure (great for kids) that uses your hair sample. It helps determine at a cell level which foods and household products may be creating inflammation. It is different from a regular food allergy blood test. Find out why this is better!"* | `compatibility-testing` |
| 2 | **Dutch Test** | *"Dutch Test is the simplest and informative test for anyone who is considering bioidentical hormone therapy, natural protocols, or suspect they may have a hormone-related challenge"* | `dutch-test` |
| 3 | **Functional Blood Chemistry Analysis** | *"To understand the underlying biochemistry is the first step in your health journey with Sheeba. Based on this in depth, one of a kind analysis, she will customize a protocol to optimize health with your goals."* | `functional-blood-chemistry-analysis` |
| 4 | **Hair Tissue Mineral Analysis** | *"This assessment uses your hair (non-invasive) to assess mineral and vitamin levels, determine any metabolic, hormonal or toxicity issues. It is great for children or adults who need more information than their current assessment."* | `hair-tissue-mineral-analysis` |

---

### 3.6 TESTIMONIAL — `/testimonial`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Hero** | Image: testimonials illustration · Label: `Testimonial` · H1: **"Client's Reviews"** · Body: *"Our clients come from all walks of life, but they all had the same common purpose, that is to improve their life and overall well-being. We are incredibly proud of the fantastic effort that our clients have put in during their journey with us. It brings us happiness and great satisfaction to see how their lives have changed, read up on their stories and hope it inspires you to do the same."* |
| 2 | **Testimonial Groups** | 12 condition-based groups, each: condition H3 header · disclaimer · slider of 1–2 testimonials (see §7) |

---

### 3.7 CONTACT US — `/contact-us`

| # | Section | Verbatim Content |
|---|---------|-----------------|
| 1 | **Contact Info** | H1: **"Contact Us"** · Email: admin@sheebathenutritionist.com · Address: 200 Cantonment Road, #06-01A, Southpoint, Singapore 089763 · Phone: +65 9656 6714 |
| 2 | **Enquiry Form** | Same fields as homepage form (Message field is **required** here) |

---

## 4. ALL HEADLINES (verbatim, by page)

### Home `/`
- H1: **"Nutritionist Of The Year — Prestige Award"**
- H2: **"You're being looked after by the best."**
- H2: **"Edible to Incredible"**
- H2: **"A Naturopathic Approach"**
- H2: **"One of the best nutritionist in Singapore"**
- H2: **"Singapore Prestige Awards 2020/2021"**
- H2: **"Outstanding Best International Nutritionist"**
- H3: **"Over 1,000 Happy clients"**
- H3: **"Here's what they said about their experience"**
- H3: **"Make a change today"**

### About `/about`
- H1: **"Sheeba Majmudar"**
- H2: **"Lifetime of Achievements"**
- H2: **"Get To Know More About Me"**
- H4: **"Credentials"**
- H4: **"Her blend of special ingredients"**

### Services `/services`
- H1: **"Holistic Health"**
- H2: **"Our Health Assessments"**
- H2: **"Our Treatment"**
- H2: **"Here's how it works."**
- H3: **"Make a change today"**

### Treatment `/treatment`
- H1: **"Treatments"**
- H4 (×6): NES · Therapeutic Aroma Therapy · Dropzone · Gemmotheraphy · Reconnective Healing · Biodynamic Craniosacral Therapy

### Health Assessments `/health-assessments`
- H1: **"Health Assessments"**
- H4 (×4): Compatibility Test · Dutch Test · Functional Blood Chemistry Analysis · Hair Tissue Mineral Analysis

### Testimonial `/testimonial`
- H1: **"Client's Reviews"**
- H3 per group (×12): Diabetes · High Blood Pressure · Weight loss · Weight Gain · Autoimmune conditions · Liver Conditions · Metabolic Syndrome · Infections · Anemia/Chronic Fatigue · Hormonal Conditions · Digestive Issues · Skin

### Contact Us `/contact-us`
- H1: **"Contact Us"**

---

## 5. ALL CTAs

| Page | CTA Text | Element Type | Destination |
|------|----------|-------------|-------------|
| Home Hero | **"Let's talk"** | Inline link + Lottie arrow | `#CTA-Form__Submission` (same page) |
| Home Book | **"Amazon.com"** | Inline link | amazon.com (external) |
| Home Best-in-SG | **"read more"** | Inline link | bestinsingapore.co (external) |
| Home Form | **"Submit"** | Form button | POST → vapor.biohackk.com/api/leads |
| Services — HA | **"Learn More"** | Button | `/health-assessments` |
| Services — Treatment | **"Learn More"** | Button | `/treatment` |
| Services — Supplements *(hidden)* | **"Learn More"** | Button | airtable.com (external) |
| Services Form | **"Submit"** | Form button | POST → vapor.biohackk.com/api/leads |
| Treatment × 6 | **"Learn more"** | Text link | `/services/[slug]` |
| Health Assessments × 4 | **"Learn more"** | Text link | `/services/[slug]` |
| Contact Us Form | **"Submit"** | Form button | POST → vapor.biohackk.com/api/leads |

---

## 6. FORMS

### Form A — General Enquiry Form
**Appears on:** Home, Services  
**Form ID:** `wf-form-General-Enquiry-Form`  
**Backend:** JS POST to `https://vapor.biohackk.com/api/leads`

| Field ID | Label | Type | Required |
|----------|-------|------|----------|
| `First-Name` | First Name | text | ✅ |
| `Last-Name` | Last Name | text | ✅ |
| `Phone-2` | Phone *(note: "Please input your country code")* | tel | ✅ |
| `Email` | Email | email | ✅ |
| `Remarks_Section` | Tell us how we can help you get better | text (min-height 150) | ❌ |
| — | Submit | submit button | — |

Success: *"Thank you! Your submission has been received!"*  
Error: *"Oops! Something went wrong while submitting the form."*

---

### Form B — Contact Us Form
**Appears on:** Contact Us only  
**Form ID:** `email-form`  
**Backend:** JS POST to `https://vapor.biohackk.com/api/leads`  
**Difference from Form A:** `Remarks_Section` is **required** here.

| Field ID | Label | Type | Required |
|----------|-------|------|----------|
| `First-Name` | First Name | text | ✅ |
| `Last-Name` | Last Name | text | ✅ |
| `Phone-2` | Phone | tel | ✅ |
| `Email` | Email | email | ✅ |
| `Remarks_Section` | Tell us how we can help you get better | text (min-height 150) | ✅ |
| — | Submit | submit button | — |

---

## 7. TESTIMONIALS — ALL 20 (verbatim)

> *All groups include: "* Disclaimer: Individual results may vary from person to person"*

---

### Diabetes
**1. Ruby Atkins, 71** ♀  
*"I have been diabetic for 15 years and have been on insulin for the last two years. Despite good eating habits and a healthy lifestyle, my sugar levels were increasing. Sheeba checked my blood test and medical records and made a detox plan and put me on supplements for six weeks. Within three weeks, my insulin dosage had to be reduced by 6 units. After 2 months, my sugar levels were lower, my tummy fat decreased, and the pigmentation on my cheeks disappeared! All my aches and pain have vanished, and I feel twenty years younger! Thank you, Sheeba!"*

**2. Kenneth Chen, 34** ♂  
*"I was diagnosed with type 2 diabetes Nov 2017 and had to start medication. For someone who only trusted and believed in conventional western treatment, I never believed in naturopathy or alternative therapy. Things changed when I came to understand more on naturopathy treatment and Biohackk Prime programme. I knew weight loss would help my condition, and started on a fantastic journey of transformation. I lost a total weight of 15.6 kgs!"*

---

### High Blood Pressure
**3. Karina I., 32** ♀  
*"Since the birth of my first child, I became overweight and diagnosed with high blood pressure. I had to consume medications every day for the last six years by my cardiologist in Singapore. My health deteriorated; my blood pressure started to fluctuate, and my blood reports showed high levels of blood sugar, cholesterol, and triglycerides. That's when my cardiologist recommended me to go to Sheeba. Sheeba's diet and the supplements she prescribed, helped me lose 10 kilos in 3 months. Grateful to Sheeba for helping me to adopt a healthy lifestyle."*

**4. Sam Monroe, 37** ♂  
*"I was also having high blood pressure and was in the preliminary stage of diabetics. An emotional eater and doesn't have much control, especially on special occasions. Sheeba helped me understand my body which I believe is the greatest gift in the new year 2015. Over the next 4 months, my weight dropped to 93 kgs. Now my blood pressure and sugar level have normalised, and my uric acid numbers have reduced along with my fatty liver."*

---

### Weight Loss
**5. Valerie M, 42** ♀  
*"I've had Polycystic Ovarian Syndrome since I was a teenager and as a result, was diagnosed with Insulin Resistance after my first pregnancy 16 years ago. Over the years, managing my weight has become a daily struggle, even with regular exercise and watching my diet. Over the last 2 years, I've put on 10 kgs. This was when I decided to consult Sheeba who recommended I start on the Homeopathic diet program. I started with 3 weeks and decided to extend for another 3 as I saw and felt the amazing results I was getting in my body. I was losing weight at the right places (belly fat, and thighs), my body fat was going down, but my muscle mass was also building. Besides that, I was feeling good and energised, contrary to the numerous diets I'd tried in the past. My weekly visit to Sheeba was so motivating as I could see the weight and measurements improving every time. The diet is strict but still was not difficult to follow as I was not hungry at all. I am now on maintenance and feel that the food I eat suits me. I continue to maintain and even lose weight. I feel in control again. I finally feel confident about my body, but mostly I feel good and when I eat with no bloating or digestion difficulties. I was on Metformin (diabetes control medication) before starting the program, and I am off now. I feel my sugar level is under control, and I have no cravings or energy fluctuation. I am very grateful for Sheeba to have guided me through this journey of transforming my health and my body!"*

**6. Andre, 37** ♂  
*"For 30 years, I was told by various doctors, cardiologists and other health specialists that 'Oh, you should lose some weight'… yet none, not one of them ever gave me a precise road map or method on precisely what to do to «Lose weight»…!!! Not until I met Sheeba! A very good friend of mine who had been a patient of Sheeba lost 8 kg in 23 days. I was so impressed that I made immediate contact. It was one of the smartest things I did in my life. Sheeba is exceptionally knowledgeable and professional. After the first round of 23 days on the Biohackk Prime programme, 7 kg of my weight had disappeared by magic, like is had just melted away! Most of the weight loss was around the waist and the neck. But that was not the most satisfying result: my blood pressure went down from 'hypertension to pre-hypertension levels' of 145/160 over 80 to 'normal' levels of 125-130 over 70. It was so good that I managed to get off some medication. And the bonus: the weight has kept off me, and it did not come back! So six months later, I decided to sign up for the second round of the Biohackk Prime programme and promptly lost another 6 kg. And even my eyesight has improved from –1.75 to –1.25! Overall, with Sheeba's guidance and sound advice, I have adopted a much healthier life-style regarding nutrition and food. I want to thank Sheeba for her fantastic program, her dedication and professionalism. I have nothing but praise and no hesitation whatsoever to recommend Sheeba to anyone in need of a new approach to life-style, nutrition and wishing to off-load a few extra pounds! Thank you, Sheeba."*

---

### Weight Gain
**7. Rene Aguilera, 42** ♀  
*"After having complete confidence in Sheeba, I took my 10-year-old daughter to her in April 2017. She was beginning to get conscious about her appearance etc. My daughter loved meeting her as Sheeba gave all her attention to her & asked her about her concerns. She figured where the problem was and provided a straightforward, doable solution to us, which included some supplements and dietary improvements. 5 weeks of following it, my daughter tells me that she can feel her skin has improved, her hair feels softer and has gained 2kgs since then. She's delighted and motivated. Thanks Sheeba, couldn't have done it without you!"*

---

### Autoimmune Conditions
**8. Gayathri N, 27** ♀  
*"Biohackk Prime Programme – Since being diagnosed with Hidradenitis Suppurativa 8 years ago, I have seen numerous doctors, dermatologists, plastic surgeons and even a gynaecologist. Nothing worked for me, and my flare-ups were worse than ever. I had just about given up and committed myself to live a life of pain and humiliation when I read about Sheeba. She indeed was God sent. She recommended something so simple but overlooked by the other doctors I'd seen – a blood test! Through that, she knew precisely what was missing in my body and what was going wrong and prescribed me the right supplements. I also embarked on the signature diet as I was overweight and I lost around 8 kg in 6 weeks! My HS wound in my inner thigh has completely healed, and my injuries in the underarms are in the process of complete healing. Having suffered 8 years with open wounds and bleeding lesions, I am overwhelmed with how pain-free I am now. Thank you, Sheeba for everything and always being professional yet caring and sympathetic — qualities many professional doctors lack. Thank you for also being just a phone call or text away when I needed clarification or advice."*

---

### Liver Conditions
**9. Joy C, 38** ♀  
*"I was told by my medical doctors that nothing could be done about my fatty liver, definitely not reverse it and that I should always avoid fatty foods due to that. I went to Sheeba for weight loss, and instead, to my amazement, she rightly said that if we give the body what it needs, it can repair itself – and after the program with her, I felt much better, but my blood test results reflected that in black and white – My liver enzymes were within normal range! That was the gift of health for me, and I am very grateful to Sheeba for transforming my weight and health."*

---

### Metabolic Syndrome
**10. Rena, 43** ♀  
*"For the last 4 years, I was struggling with iron and vitamin B12 deficiency and switching between supplements and injections. That could only marginally increase the levels and had to struggle with a lack of stamina and energy along with weight gain. My blood test reports were also alarming, with high triglycerides, glucose and cholesterol. My doctor threatened to put me on medications unless I showed some improvement. So I started my exercise routine only to find that it made me more tired and the weight loss was too less. So I decided to work with Sheeba. From Day 1, I had weight loss, and over the next 8 weeks, it only got better. During this time Sheeba had extended her full support 24*7 on any queries I had. I lost almost 9 kgs out of which I had lost 5.5 kg visceral fat, with an increase in muscle mass. I could feel the energy back in my body, and it all proved right when I went for my blood test with my general physician. The first time my iron and vitamin b12 levels were high and my blood sugar and triglycerides were low and not even a single parameter was away from the mark. My doctor said she had not seen a healthier weight loss. The whole credit goes to Sheeba. The Best part about the entire program is that it's more than 2 months since I have completed it, but I am still losing despite my regular diet, and my metabolism has become very good. From Day one till today, I have lost 13.6 kgs, and This weight loss has not made me look sick but has made me look and feel younger. I strongly recommend Sheeba for anyone who needs a healthy weight loss. The weight loss is a winning side on, but the most important part is the reset of body nutrients, increased metabolism and a healthy lifestyle."*

---

### Infections
**11. Neha G, 27** ♀  
*"My 14-year-old son had been dealing with asthma, has a very weak immune system and digestive issues since childhood. He was tired of taking medicines and inhalers as he was sick most of the time, more so after moving to Singapore. We sought opinions from different Doctor's, tried various medications but without any improvement in his health. That's when we contacted Sheeba as our last hope. She took the time to look into his medical history and customised a food plan and gave him all-natural medicines. And since the last few months, he has not taken his inhalers, and he has not fallen sick. He also has an improved appetite and has grown healthier and bigger! God bless you Sheeba, and I thank you from the bottom of my heart!!"*

**12. Iris, 63** ♀  
*"I have had a neurogenic bladder for decades. After surgery, I was required to use a catheter 2-3 times a day, which brought on repeated urinary tract infections from time to time, especially when I travelled. This is the first time (ever) that my urine culture report had come clear, thanks to Sheeba's recommendations. Also, this was the first time I did not have to take antibiotics when I had an infection. For me, it was beyond my expectations. What doctors could not help me with, was solved in one session with Sheeba. I strongly recommend her to anyone who is looking for answers when there seem none."*

---

### Anemia / Chronic Fatigue
**13. Laura Westchester, 25** ♀  
*"When I first arrived in Sheeba's office, I was exhausted and entirely drained from seeing so many different medical practitioners. I was suffering from chronic fatigue that made everything seem like a chore. In addition to this, I was also dealing with excessive thirst, damaged vocal cords, constant headaches, sore muscles and joints and terrible blood work. As a 25-year-old Primary School teacher who hates being sick, I'd spent years convincing myself that it was reasonable to return home from work too tired and drained to consider doing anything. I was sleeping for as many hours as possible, never felt rested and would frequently cry from sheer exhaustion. As the months passed and I failed to improve, I eventually took myself to see the GP. After 27 doctors appointments, numerous tests and scans and a spiralling list of diagnoses, none of which seemed related, I felt overwhelmed by everything I was being told and the fact that no one was able to connect them all. That was, until, my appointment with Sheeba. Fast forward a few months, and with Sheeba's guidance, I now feel better than ever. I have a clarity of thought that I have never experienced before and endless amounts of energy. I wake up in the morning and no longer feel like crying because I'll have to make it through the entire day without going back to bed. Most importantly, for me, I have the energy to want to do things. I want to do well at my job, and I want to spend time with my friends and visit my family. All those around me have noticed a difference, and many have commented on how much better I look, most notably the 'sparkle in my eyes'. Sheeba has given me a new sense of life, and for that, I can't thank her enough. At 25 I finally feel like I'm living and I'm so excited about what life will bring."*

**14. Sheela Thomas, 39** ♀  
*"I am 39 yrs and had been suffering from chronic low iron levels. I was on various doctor prescribed supplements and diet to improve this but to no avail as the results did not improve and I felt fatigued, and it slowed down my metabolism and made me prone to frequent illness. In May 2016 Sheeba saw my blood test and recommended non-iron supplements, and in precisely 3 months, my iron levels peaked from anaemic levels to optimal levels! I also felt a huge difference in my energy, drastic improvement in my immunity and much-improved lifestyle and a healthier me! I can't thank Sheeba enough for this turnaround."*

---

### Hormonal Conditions
**15. Rachel, 32** ♀  
*"Having battled with infertility for many years and have gone through countless fertility treatments, I came to Sheeba at my heaviest in May 2014. Sheeba did an extensive analysis of my state of health and suggested many 'doable' lifestyle changes with the weight loss program. All supplements I was recommended were natural, and I did not get any side effects which was amazing considering how sensitive and toxic a system I had. In 3 months, I lost 12 kilos and kept it off. My complexion and energy levels were fantastic. My monthly periods returned 1 month into the diet, and my cycle was back to normal after 5 years of being unpredictable. In September this year, we found out I was 4 weeks pregnant!! Naturally, without fertility drugs! Sheeba helped me achieve something so close to my heart, and I'm forever thankful! Thank you, Sheeba!"*

**16. Sweety, 29** ♀  
*"Whatever problems you have at the start and whatever doubts you have on yourself all that and a lot more is what Sheeba cures you from. Sheeba not only diagnoses any ailments that you suffer from but how you can get rid of it at the earliest. I wanted to lose 10kgs in 2 months and was very sceptical as I had PCOS. But Sheeba gave me a good understanding of how this could be done effectively and in a way that the weight does not come back unless dealt with negligence. Her quoted words were that I'd guide you 40%, but the remaining 60% is your hard work. Her guidance, follow-ups and encouragement helped me to burn 9kgs in a little less than two months. Her introduction to natural alternatives was just splendid as it works wonders with no side effects. She not only prepared me for the symptoms I would experience but would happen if I don't follow the dosage correctly. Diet & supplements keep me healthy. Now that I have achieved my goal, I feel great but couldn't have done it without her."*

---

### Digestive Issues
**17. Joanna S, 17** ♀  
*"After arriving in Japan (Aug 2019) I soon discovered that my body was responding negatively to something in Tokyo; I didn't know if it was caused by something I was consuming, stress or some unknown allergen(s) I was exposed to. I had skin rashes, acne and weight gain, which was a devastating experience. I visited Sheeba in the hope of finding a solution to my health issues. After reviewing my blood work, we met for an extended period to develop a plan specifically for me. With my personal profile, she developed an extended dietary program that addressed my health issues. I thought the program was going to be difficult, but it was not. I found my programme to be easy, never feeling hungry or tired. After 21 days on my new regime, I lost 8 kilos! Now that I have completed the programme, my metabolism has stayed in check, and I feel good. One of the great benefits to Sheeba's plan required me to cook and prep my food in a way that was easy and healthy. I feel more confident in my cooking skills, which has prepared me to eat healthfully in college next year. These skills, along with all the valuable nutritional information I've learned along the way, will be so helpful when I head off to college. I'm so grateful for Sheeba, her expertise and her guidance every step of the way. This has been one of the best things I have ever done for myself."*

**18. Rissa, 29** ♀  
*"I came to Sheeba on a friend's recommendation, as I had been beset with digestive problems and recurring infections for more than a year. I was tired of taking medication that addressed only symptoms, but not the root of my questions, so I decided to give a more holistic approach a try. Sheeba took the time to go through the results of various health reports with me in detail, which helped me to understand the systemic issues behind the symptoms I was experiencing. She customised a detox plan that cleared up my digestive problems within a month, and a diet plan that rooted out my recurring infection in a matter of three weeks. What surprised me was her advice to remove my metal tooth fillings, which proved to be a transformation point not only for my digestive system but also in terms of my energy levels. I now have a much better quality of rest and am in the second phase of our plan to continue building up the strength of my digestive system. As Sheeba is trained in a variety of therapy techniques, I also benefitted from a craniosacral therapy session with her to release tension in my spine. Working with Sheeba has helped me to address my health issues in a comprehensive manner, which I believe will have sustained, long-term benefits. Thank you, Sheeba!"*

---

### Skin
**19. Nicole S, 44** ♀  
*"I came to see Sheeba because my periods were going a little haywire. The results I got from working with her were more than expected, a pleasant surprise! I have had melasma (dark skin patches on the face) for over a decade, for which I tried expensive pico laser, hydroquinone creams and more, spending well over thousands of dollars but nothing improved it. It would lighten, then darken again. So I had already given up on that issue when I went to see Sheeba. She was very thorough with my assessment, and I was amazed by how accurate and detailed her blood test reading was. I started as per her recommendations, and within a month, I already saw improvement with my periods. Still, in the following months, I began to notice my melasma was fading. By month three, it was almost invisible – and I had done nothing specifically for it! It was then that I truly believed what Sheeba was saying all along. That the body is connected and when one thing improves, other things will follow. This direct experience made me feel so grateful, and I insisted on writing a testimonial for her in the hope that more people can benefit from her. It has not only helped me physically but has also boosted my self-confidence. I am genuinely grateful, Thank you Sheeba!"*

**20. Serina Baxter, 41** ♀  
*"When I came to see Sheeba 2 years ago, I had spondylosis, childhood psoriasis, food sensitivities with candida overgrowth and was also experiencing hormonal swings all by age 38. The doctors did not have a cure for any of these conditions, which turned out to be a blessing. The reason why I took two years to write this testimonial is that it has been a fantastic journey of healing with Sheeba, culminating in ALL my issues in effect being cured. My childhood psoriasis was clear! I also was told by a medical intuitive that my body was much better than it has ever been. What a splendid gift! Thank you, Sheeba from the bottom of my heart. I will continue to recommend you to all I know because what you do – doctors simply can't. I recommend everyone to follow her advice on all aspects with an open mind as she has a wealth of knowledge that gets to the roots of the issues. Bless you, Sheeba please do continue this work and help others."*

---

### Home page — Testimonials strip (3 short cards)
| Name | Age | Short quote |
|------|-----|-------------|
| Sheela Thomas | 39 | *"Suffered chronic low iron levels, and in 2016, I consulted with Sheeba. From the results of my blood test, she recommended me non-iron supplements. Three months later, my iron levels peaked to optimal levels! I can't thank Sheeba enough for this turnaround."* |
| Serina Baxter | 41 | *"It has been a fantastic journey of healing with Sheeba. My childhood psoriasis was clear! My body was much better than it has ever been. What a splendid gift! Thank you, Sheeba from the bottom of my heart."* |
| Andre | 17 *(sic — 37 on testimonials page)* | *"Seeing that my friend had lost a lot of weight with Sheeba's help. I was so impressed that I made immediate contact. Sheeba is exceptionally knowledgeable and professional. I lost 7kgs in 23 days. Strongly recommend Sheeba to everyone!"* |

---

## 8. AWARDS & CREDENTIALS

### Awards
| Award | Organisation | Year |
|-------|-------------|------|
| "Best Naturopathic Nutritionist" | APAC Business Awards | 2021 |
| "Nutritionist of the Year" | Prestige Awards | 2020 |
| "100 Most Inspiring Women" | CozyCot International Women's Day | 2014 |
| "Asia's Greatest Brands" | Asia's Greatest Brands | — |
| "Outstanding Best International Nutritionist" | South East Asia Business Awards (APAC Insider) | 2021 |
| Top nutritionist listing | bestinsingapore.co | — |
| Recommended by GPs, Gynaecologists, Cardiologists, Physiotherapists | — | Ongoing |

### Credentials (About page)
1. Master of Science in Human Nutrition (USA)
2. Bachelor of Arts (Psychology)
3. Diploma Clinical Herbology (USA)
4. Reconnective Healing — by Dr Eric Pearl (USA)
5. Biodynamic Craniosacral Therapy — Certified Level 4
6. Aromatherapist (USA)
7. Gemmotherapy — Plant stem cell concentrates
8. Advanced Blood Chemistry Analysis — Functional Medicine (USA)
9. Star Flower Essences Practitioner (USA)
10. NES Total Wellness Practitioner

---

## 9. "SPECIAL INGREDIENTS" — About page slider (11 slides)

| # | Title | Body Copy |
|---|-------|-----------|
| 1 | **Connecting the Dots** | *"Sheeba's combinations of skills give her a unique background. Her biggest asset is connecting the dots and reading between the lines from blood tests and other assessments which are very often overlooked by healthcare practitioners. This makes all the difference in being able to 'hit the nail on the head' and not miss the elephant in the room! She is extremely sensitive to personality types and personal limitations, so Sheeba is able to micro-customize protocols to suit the individual."* |
| 2 | **Functional Medicine** | *"She has worked with big industry names in natural healthcare in the USA, giving her an edge in understanding client's medical conditions and blood tests by functional medicine blood chemistry analysis. This makes patients and doctors comfortable in recommending her or working with her to improve client's medical blood tests and concerns through functional medicine analysis."* |
| 3 | **Customise Protocols** | *"We all know that one size does not fit all. So how can one diet or exercise regime fit all? To make it work, the program needs to be customized for the individual. Your assessment works like your biochemistry fingerprint that can help formulate the best customized protocol, with your goals in mind. She can work with your GP, other holistic health practitioners or where relevant, refer you to one (eg: an acupuncturist)."* |
| 4 | **Always a Student** | *"In this field, one is always a student. Nutrition information is in a state of constant flux, and the way she looks at it, we have just reached the tip of the iceberg. So she keeps herself abreast with all the latest research in the field and beyond — because 'being well' also means 'looking well' and 'feeling well'."* |
| 5 | **Mind Body Whole Treatment** | *"Sheeba understands that if true healing has to happen, it needs to incorporate the body, mind and spirit. In her own journey for health, she found Biodynamic Craniosacral Therapy to be transformational. A true seeker, she learned this modality from one of the most renowned teachers in this field, Leonid Soboleff."* |
| 6 | **Holistic** | *"Sheeba used to work as a full time naturopath consultant for Verita Advanced Wellness Naturopath Pte Ltd for over 3 years, which offers all the latest possible modalities in alternate care, with complete health assessment, consultation with naturopath, nutrition, pilates, yoga, sonic gym, massages, gourmet vegan cafe, all under one 17,000sq ft roof, with state of the art equipment and the best that technology and natural healing has to offer."* |
| 7 | **Corporate** | *"She is an engaging speaker, giving talks and presentations, conducting workshops to corporate employees all over Singapore, including Singapore General Hospital, Mount Elizabeth Hospital, Gleneagles, East shore Hospital, DSTA (Defense Science and Technology Agency), Republic Polytechnic, WINGS, various schools, etc."* |
| 8 | **Research** | *"She is the consulting nutritionist for Men's Health Magazine (Singapore) for their Nutritionist's column and contributes researched nutrition related articles regularly in the magazine, and to other media as well."* |
| 9 | **Passion** | *"She has a steady private clientele where she does one to one sessions if the client can't come to her, she goes to them. She believes in remaining a student and continuing the journey of inquiry and study in all fields that holistically support health."* |
| 10 | **Touch** | *"In search of a complete holistic approach, Sheeba experienced Biodynamic craniosacral therapy and decided to learn it from a renowned teacher, Leonid Soboleff. It is a beautiful and very gentle touch that helps the body heal and align, which needs to be experienced, whose mechanics are based on quantum physics."* |
| 11 | **Evolution** | *"Personally in search of the highest, Sheeba read Dr Eric Pearl's book, The Reconnection – Heal Others Heal Yourself. She took the seminar with him and is now a Reconnective Healing Practitioner. This to her is the highest form of healing a person can receive, that completely transcends energy healing and its complex rituals and techniques."* |

---

## 10. HOW IT WORKS — 4-Step Process (Services page)

| Step | Title | Body |
|------|-------|------|
| 01 | **Health Assessment** | *"Complete a health assessment to provide Sheeba with in-depth analysis of your health condition. Contact us, as this can be done anywhere in the world."* |
| 02 | **Consultation** | *"A one-to-one consultation with Sheeba (virtual or in person), she will brief you on the nutritional plans and supplements protocols that will address all concerns."* |
| 03 | **Total Wellness Protocol** | *"A personalised, holistic set of protocols that clients are recommended, to achieve the desired goals."* |
| 04 | **Follow Up** | *"Between 4-8 weeks, a follow-up is recommended to assess and tweak protocols to continue seeing improvements in the client's health."* |

---

## 11. FOOTER (consistent across all pages)

| Column | Links |
|--------|-------|
| **Logo** | Sheeba SVG |
| **Company** | About · Services · Media Gallery · Testimonials |
| **Legal** | T&Cs · Data & Privacy Policy |
| **Support** | Contact Us · FAQ |
| **Contact** | admin@sheebathenutritionist.com · 200 Cantonment Road, #06-01A, Southpoint, Singapore 089763 · +65 9656 6714 |
| **Social** | Facebook (sheebanutritionist) · YouTube |
| **Copyright** | "Copyright 2026 Sheeba The Nutrionist Pte Ltd. All rights reserved." |
| **Attribution** | "built with finesse by the Admiral systems team" → admiralsystems.io |

---

## 12. CONTACT DETAILS (site-wide)

| Type | Value |
|------|-------|
| Email | admin@sheebathenutritionist.com |
| Phone | +65 9656 6714 |
| Address | 200 Cantonment Road, #06-01A, Southpoint, Singapore 089763 |
| Facebook | facebook.com/pg/sheebanutritionist/ |
| YouTube | youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g |

---

## 13. TECHNICAL NOTES

| Item | Detail |
|------|--------|
| CMS Platform | Webflow (Last published: Sat Jan 10 2026) |
| Analytics | Google Tag Manager — ID: GTM-NJLF87J |
| Lead API | https://vapor.biohackk.com/api/leads |
| Fonts | Inconsolata (Google Fonts — 400, 700) |
| Animations | Lottie: page load overlay, CTA arrow, fixed plant, flying avocado (About) |
| Video | Background video on Home `/services` section (Sheeba in clinic). `.mp4` + `.webm` |
| Service CMS | `/services/[slug]` — 10 CMS items (6 treatments + 4 assessments) |
| Hidden section | Supplement List on `/services` — `class="container hide"` — not visible |
| Page load screens | Home: plant Lottie + "Preparing our nutrition haven for you..." / About: door Lottie + "Opening our doors to you 🥰" |
| Age discrepancy | Andre is listed as "17 Years Old" on the home testimonial card but "37 Years old" on the `/testimonial` page. Likely a data entry error on the home page. |

---

*End of Content Audit — sheebathenutritionist.com*  
*Generated: 2026-06-05 | By: Antigravity IDE*
