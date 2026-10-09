"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";
import posthog from "posthog-js";

import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";
import BotanicalLeaf from "@/components/ui/BotanicalLeaf";
import BotanicalGrow from "@/components/ui/BotanicalGrow";
import LeafCorner from "@/components/ui/LeafCorner";
import LeafBox from "@/components/ui/LeafBox";
import BotanicalVinesConnector from "@/components/ui/BotanicalVinesConnector";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import ContactQuickLinks from "@/components/ui/ContactQuickLinks";
import Preloader from "@/components/ui/Preloader";
import { SERVICES_DATA } from "@/data/services";
import styles from "./page.module.css";

const PRESS_LOGOS = [
  { src: "/assets/5f21102e6e72ac21f2268c25_BBC-Logo 1.png", name: "BBC" },
  { src: "/assets/5f20f8b969a12bb761d279ff_1554165536_channel-news-asia 1.png", name: "CNA" },
  { src: "/assets/5f21103b71ac9bc277d48611_the-straits-times-logo 1.png", name: "The Straits Times" },
  { src: "/assets/5f2110409c34140ebcfebe9a_home-logo_3c9d35b8 1.png", name: "Augustman" },
  { src: "/assets/5f20f8b96e72ac64c6267398_todays-parent-logo-1 1.png", name: "Today's Parent" },
  { src: "/assets/5f20f8b961c788fb9ad9f113_Group 661.png", name: "The Japan Times" },
  { src: "/assets/press/vogue singapore.svg", name: "Vogue Singapore" },
  { src: "/assets/press/harpers bazaar.png", name: "Harper's Bazaar" },
  { src: "/assets/press/her world.svg", name: "Her World" },
  { src: "/assets/press/elle singapore.svg", name: "ELLE Singapore" },
  { src: "/assets/press/expat living.png", name: "Expat Living" },
  { src: "/assets/press/mens health.png", name: "Men's Health" },
  { src: "/assets/press/sunday times.svg", name: "The Sunday Times" },
];

export default function HomePage() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState("idle");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);

  const TESTIMONIALS = [
    {
      quote: "Suffered chronic low iron levels, and in 2016, I consulted with Sheeba. From the results of my blood test, she recommended non-iron supplements. Three months later, my iron levels peaked to optimal levels! I can't thank Sheeba enough for this turnaround.",
      name: "Sheela Thomas, 39",
      condition: "— Resolved Chronic Fatigue"
    },
    {
      quote: "It has been a fantastic journey of healing with Sheeba. My childhood psoriasis was clear! My body was much better than it has ever been. What a splendid gift! Thank you, Sheeba from the bottom of my heart.",
      name: "Serina Baxter, 41",
      condition: ""
    },
    {
      quote: "Seeing that my friend had lost a lot of weight with Sheeba's help. I was so impressed that I made immediate contact. Sheeba is exceptionally knowledgeable and professional. I lost 7kgs in 23 days. Strongly recommend Sheeba to everyone!",
      name: "Andre, 37",
      condition: ""
    },
    {
      quote: "I had suffered from severe gut issues for 10 years, and nothing worked. Sheeba correctly diagnosed my gut permeability and gave me a protocol that gave me my life back in just 6 months. A true healer.",
      name: "Jane D, 45",
      condition: "— Reversing Autoimmunity"
    },
    {
      quote: "My autoimmune flare-ups are gone, my energy is back, and I feel better than I did in my 20s. Truly life changing and worth every penny. Sheeba is brilliant.",
      name: "Sarah W, 32",
      condition: "— Foundational Health"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [TESTIMONIALS.length]);

  useEffect(() => {
    let lenis;
    let rafCallback;
    let gsapModule;
    let ScrollTriggerModule;

    async function initScroll() {
      const [gsapImport, { ScrollTrigger }, { default: LenisModule }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      gsapModule = gsapImport.default;
      ScrollTriggerModule = ScrollTrigger;
      gsapModule.registerPlugin(ScrollTrigger);

      lenis = new LenisModule({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        smooth: true,
      });

      // Exposed so in-page anchor buttons can scroll through Lenis instead of fighting it.
      window.lenis = lenis;

      rafCallback = (time) => { lenis.raf(time * 1000); };
      lenis.on("scroll", ScrollTrigger.update);
      gsapModule.ticker.add(rafCallback);
      gsapModule.ticker.lagSmoothing(0, 0);
    }

    initScroll();

    return () => {
      if (lenis) {
        if (window.lenis === lenis) delete window.lenis;
        lenis.destroy();
      }
      if (gsapModule && rafCallback) gsapModule.ticker.remove(rafCallback);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx;

    async function initAnimations() {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Moment 1: Hero Entrance
        let hasSeenPreloader;
        try { hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader"); } catch { hasSeenPreloader = null; }
        const heroDelay = hasSeenPreloader ? 0.2 : 1.6;

        const heroTl = gsap.timeline();
        heroTl.fromTo(".hero-motion-item",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 1.5, ease: "power3.out", delay: heroDelay }
        );

        // Universal Reveal-Up for elements as user scrolls
        gsap.utils.toArray(".reveal-up").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 95%" } }
          );
        });

        // Moment 2: Signature Moment
        gsap.fromTo(".signature-moment",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 1.8, ease: "power2.out",
            scrollTrigger: { trigger: ".signature-moment", start: "top 90%" }
          }
        );

        // Hero Image Parallax
        gsap.to(".hero-parallax", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: `.${styles.heroSection}`, start: "top top", end: "bottom top", scrub: true }
        });
      }, containerRef);
    }

    initAnimations();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the security check (checkbox) before submitting, or refresh the page if it is not visible.");
      return;
    }
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
          "cf-turnstile-response": token,
        }),
      });
      if(res.ok) {
        posthog.capture("contact_form_submitted", { form_location: "homepage" });
        setFormState("success");
        setToken(null);
        turnstileRef.current?.reset();
      } else {
        setFormState("error");
        turnstileRef.current?.reset();
      }
    } catch (err) {
      setFormState("error");
      turnstileRef.current?.reset();
    }
  };

  return (
    <>
    <Preloader />
    <Navigation />
    <main id="main" className={styles.mainContainer} ref={containerRef}>

      {/* ─── SECTION 1: HERO (Luxury Gradient) ─── */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <BotanicalLeaf positionStyles={{ top: '15%', left: '-8%', width: '600px', height: '600px', transform: 'rotate(45deg)' }} speed={0.8} />
        <BotanicalLeaf positionStyles={{ top: '65%', right: '-5%', width: '400px', height: '400px', transform: 'rotate(-45deg)' }} speed={1.2} />
        
        <div className={styles.content}>
          <div className={styles.heroGrid}>
            <div className={styles.heroTextPanel}>
              <div className={`${styles.heroBadge} hero-motion-item`}>Multiple Award Winner</div>
              <h1 className={`${styles.heroTitle} hero-motion-item`}>
                Your blood test<br/>
                told a story.<br/>
                Everyone else<br/>
                <i className={styles.heroTitleItalic}>missed it.</i>
              </h1>
              <p className={`${styles.heroSub} hero-motion-item`}>
                Recognized as the best Nutritionist and the only leading medical Nutritionist in Singapore, Sheeba Majmudar connects the dots that conventional medicine leaves unread - using functional medicine, naturopathy and two decades of evidence from over 20,000+ clients globally.
              </p>
              <div className={`${styles.heroActions} hero-motion-item`}>
                <Button href="#contact" variant="primary" style={{backgroundColor: "var(--accent-deep)", color: "#fff"}}>Begin your assessment →</Button>
                <span className={styles.socialProof}>Recommended by GPs, Cardiologists, and Gynaecologists</span>
              </div>
            </div>

            <div className={`${styles.heroImagePanel} hero-motion-item`}>
              <img src="/assets/sheebapic.png" alt="Sheeba Majmudar" className={`${styles.heroPortrait} hero-parallax`} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRESS LOGOS (Full Color Marquee) ─── */}
      <section className={styles.pressMarquee}>
        <h2 className={styles.pressHeader}>As Featured In</h2>
        <div className={styles.marqueeTrack}>
          {/* Double up to create infinite loop effect seamlessly */}
          {[...Array(2)].map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              {PRESS_LOGOS.map(({ src, name }, i) => (
                // The second copy only exists for the seamless loop, so hide it from screen readers.
                <img
                  key={`${loopIdx}-${i}`}
                  src={src}
                  className={styles.pressLogo}
                  alt={loopIdx === 0 ? name : ""}
                  aria-hidden={loopIdx === 0 ? undefined : "true"}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ─── SECTION 2: RECOGNITION (White) ─── */}
      <section className={`${styles.section} ${styles.sectionWhite} ${styles.recognitionSection}`}>
        <div className={styles.content}>
          <div className="reveal-up">
            <p className={styles.recognitionStatement}>
              Most clients come to me after spending years managing symptoms instead of fixing the source. They have been told their lab results are normal, their fatigue is just age, and their weight is a lack of discipline.
            </p>
            
            <div className={styles.resolutionWrapper}>
              <h2 className={`${styles.resolutionLine} signature-moment`}>It isn&apos;t.</h2>
            </div>
            
            <p className={styles.recognitionSupporting}>
              Your body is a highly ordered system. When it fails, it leaves coordinates. The process of healing is simply the process of reading those coordinates correctly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: DIFFERENTIATION (Deep) ─── */}
      <section className={`${styles.section} ${styles.sectionDeep}`} style={{ padding: '6rem 2rem' }}>
        <BotanicalLeaf positionStyles={{ top: '5%', left: '-10%', width: '400px', height: '400px', transform: 'rotate(30deg)' }} speed={0.7} />
        <BotanicalLeaf positionStyles={{ bottom: '-10%', right: '-5%', width: '450px', height: '450px', transform: 'rotate(-45deg)' }} speed={1.5} />
        <div className={styles.content}>
          <div className={`${styles.diffHeader} reveal-up`}>

            <h2 className={styles.diffTitle}>The difference between<br/><i>treating</i> and <i>resolving.</i></h2>
          </div>
          
          <div className={styles.observationCards}>
            <BotanicalVinesConnector />
            
            <div className={`${styles.obsCard} reveal-up`}>
              <LeafBox />
              <LeafCorner position="top-right" />
              <LeafCorner position="bottom-left" />
              <BotanicalGrow number="01" delay={0.1} />
              <div className={styles.obsText}>
                <div style={{fontWeight: 600, fontSize: '34px', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)', color: 'rgba(199,220,217,0.95)'}}>Cellular Energy Deficits</div>
                <div style={{color: 'rgba(199, 220, 217, 0.6)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.8rem'}}>Mitochondrial Cofactor Depletion</div>
                <span style={{color: 'rgba(199,220,217,0.8)', fontSize: '22px', lineHeight: '1.6'}}>Fatigue is rarely just age. By identifying missing cofactors in ATP production, exhaustion can be resolved at the cellular level rather than being masked by stimulants.</span>
              </div>
            </div>
            
            <div className={`${styles.obsCard} reveal-up`}>
              <LeafBox />
              <LeafCorner position="top-right" />
              <LeafCorner position="bottom-left" />
              <BotanicalGrow number="02" delay={0.3} />
              <div className={styles.obsText}>
                <div style={{fontWeight: 600, fontSize: '34px', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)', color: 'rgba(199,220,217,0.95)'}}>Hormonal Weight Resistance</div>
                <div style={{color: 'rgba(199, 220, 217, 0.6)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.8rem'}}>Elevated Cortisol Storage Lock</div>
                <span style={{color: 'rgba(199,220,217,0.8)', fontSize: '22px', lineHeight: '1.6'}}>Caloric deficits fail when stress hormones lock cells into storage mode. Only by signalling safety to the nervous system will the body release stubborn weight.</span>
              </div>
            </div>
            
            <div className={`${styles.obsCard} reveal-up`}>
              <LeafBox />
              <LeafCorner position="top-right" />
              <LeafCorner position="bottom-left" />
              <BotanicalGrow number="03" delay={0.5} />
              <div className={styles.obsText}>
                <div style={{fontWeight: 600, fontSize: '34px', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)', color: 'rgba(199,220,217,0.95)'}}>Autoimmune Triggers</div>
                <div style={{color: 'rgba(199, 220, 217, 0.6)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.8rem'}}>Gut Permeability Correlation</div>
                <span style={{color: 'rgba(199,220,217,0.8)', fontSize: '22px', lineHeight: '1.6'}}>Autoimmune flare-ups track precisely with the integrity of the intestinal lining. By repairing the territory, the systemic inflammatory response naturally stands down.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: SOCIAL PROOF & RECOGNITION (Merged) ─── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.content}>
          {/* STATS */}
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 6vw, 4rem)', color: 'var(--accent-teal)', lineHeight: 1, marginBottom: '0.5rem' }}>20,000+</div>
            <div style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.75rem' }}>Happy Clients Worldwide</div>
            <div style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.6, letterSpacing: '0.05em', fontStyle: 'italic' }}>Changing lives, one person at a time.</div>
          </div>

          <div className="reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '6rem' }}>
            {[
              { number: '20,000+', label: 'Clients' },
              { number: '20+',   label: 'Years Experience' },
              { number: '5★',    label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem 2.5rem', borderRadius: '16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-premium)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--accent-teal)', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.number}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--foreground)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AWARDS */}
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.credTitle} style={{color: 'var(--foreground)'}}>Industry Recognition.</h2>
          </div>
          <div className={`${styles.qualificationsGrid} reveal-up`}>
            {[
              { title: "Best Naturopathic Nutritionist 2021", sub: "APAC Business Awards" },
              { title: "Nutritionist of the Year 2020", sub: "Prestige Awards" },
              { title: "Recommended by GPs", sub: "Gynaecologists, Cardiologists and Physiotherapists" },
              { title: "100 Most Inspiring Women", sub: "Cozycot 2014 International Women's day Award" },
              { title: "Asia’s Greatest Brands", sub: "The only nutritionist in her field to receive this award" },
            ].map((qual, i) => (
              <div key={i} className={styles.qualItem}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="var(--accent-teal)" 
                  className={styles.qualIcon}
                >
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96 2.47-.31 4.39-2.39 4.39-4.94V7c0-1.1-.9-2-2-2zM5 8V7h2v3H5V8zm14 2h-2V7h2v3z"/>
                </svg>
                <div className={styles.qualText}>
                  <div className={styles.qualTitle}>{qual.title}</div>
                  <div className={styles.qualSub}>{qual.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SERVICES (Vibrant Glassmorphism Cards) ─── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.content}>
          <div className="reveal-up">
            <div className={styles.svcGrid}>
              {/* Assessments */}
              <div>
                <div className={styles.svcHeader}>
                  <h2 className={styles.svcColTitle}>Assessments</h2>
                  <Link href="/health-assessments" className={styles.svcViewAll}>View all assessments <span aria-hidden="true">→</span></Link>
                </div>
                <p className={styles.svcColDesc}>The foundational data required to stop guessing.</p>
                <InteractiveGrid
                  items={SERVICES_DATA
                    .filter(s => s.type === "Health Assessment")
                    .map(s => ({...s, body: s.description}))}
                  basePath="/health-assessments"
                  hideTags={true}
                  balanced={true}
                />
              </div>

              {/* Therapies */}
              <div>
                <div className={styles.svcHeader}>
                  <h2 className={styles.svcColTitle}>Therapies</h2>
                  <Link href="/therapies" className={styles.svcViewAll}>View all therapies <span aria-hidden="true">→</span></Link>
                </div>
                <p className={styles.svcColDesc}>Specific protocols to shift the body back into a healing state.</p>
                <InteractiveGrid
                  items={SERVICES_DATA
                    .filter(s => s.type === "Therapy")
                    .map(s => ({...s, body: s.description}))}
                  basePath="/therapies"
                  hideTags={true}
                  balanced={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDIA RECOGNITIONS SECTION ─── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.content}>
          <div className="reveal-up" style={{ marginBottom: "5rem" }}>

            <h2 className={styles.credTitle} style={{ color: "var(--foreground)" }}>Featured In &<br/><i>Recognised By.</i></h2>
          </div>

          <div className={styles.mediaGrid}>
            {/* Item 1: Best in Singapore */}
            <div className={`${styles.mediaCard} reveal-up`}>
              <div className={styles.mediaCardImageWrapper}>
                <img src="/assets/6020ea774b0f966c65a618dc_Best in sg.png" alt="Best in Singapore Badge" className={styles.mediaCardImage} />
              </div>
              <div className={styles.mediaCardContent}>
                <span className={styles.mediaCardTag}>Other Recognitions</span>
                <h3 className={styles.mediaCardTitle}>One of the Best Nutritionists in Singapore</h3>
                <p className={styles.mediaCardDesc}>
                  We have been featured as one of the top nutritionists in Singapore! Read what they have to say about our evidence-based clinical approach.
                </p>
                <a href="https://www.bestinsingapore.co/best-nutritionists-singapore/?ref=sheebathenutritionist" target="_blank" rel="noreferrer" className={styles.mediaCardLink}>
                  Read Article →
                </a>
              </div>
            </div>

            {/* Item 2: Prestige Awards */}
            <div className={`${styles.mediaCard} reveal-up`}>
              <div className={styles.mediaCardImageWrapper}>
                <img src="/assets/603d9fdd7784ff06a73fa16c_Sheeba - article-1.jpg" alt="Singapore Prestige Awards Article" className={styles.mediaCardImage} />
              </div>
              <div className={styles.mediaCardContent}>
                <span className={styles.mediaCardTag}>Other Recognitions</span>
                <h3 className={styles.mediaCardTitle}>Singapore Prestige Awards 2020/2021</h3>
                <p className={styles.mediaCardDesc}>
                  &ldquo;Sheeba is able to connect the dots for clients, offering them the knowledge they need to move forward.&rdquo; &mdash; Singapore Prestige Awards
                </p>
              </div>
            </div>

            {/* Item 3: APAC Insider */}
            <div className={`${styles.mediaCard} reveal-up`}>
              <div className={styles.mediaCardImageWrapper}>
                <img src="/assets/6086564c790e476b4d3f2bb5_APAC-1-uai-258x126.png" alt="APAC Insider Logo" className={styles.mediaCardImage} />
              </div>
              <div className={styles.mediaCardContent}>
                <span className={styles.mediaCardTag}>SEA APAC Business Award</span>
                <h3 className={styles.mediaCardTitle}>Outstanding Best International Nutritionist</h3>
                <p className={styles.mediaCardDesc}>
                  Chosen as the Best International Nutritionist by the South East Asia Business Awards hosted by APAC Insider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: TESTIMONIALS (Cream) ─── */}
      <section className={`${styles.section} ${styles.sectionLight}`} style={{paddingTop: '2rem'}}>
        <div className={styles.content}>
          <div className={`${styles.testHeader} reveal-up`} style={{ textAlign: 'center' }}>

            <h2 className={styles.testTitle} style={{ color: 'var(--foreground)' }}>The shift from<br/>chronic to capable.</h2>
          </div>
          
          <div className="reveal-up" style={{ position: 'relative', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', height: '300px', display: 'flex', justifyContent: 'center' }}>
              {TESTIMONIALS.map((test, idx) => (
                <div key={idx} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: idx === activeTestimonial ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: idx === activeTestimonial ? 'auto' : 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featuredQuote} style={{ fontSize: 'clamp(1.5rem, 3vw, 36px)', marginBottom: '2rem', color: 'var(--foreground)', lineHeight: '1.4', maxWidth: '900px' }}>
                    &ldquo;{test.quote}&rdquo;
                  </div>
                  <div className={styles.testMeta} style={{ justifyContent: 'center' }}>
                    <div className={styles.testName} style={{ color: 'var(--foreground)' }}>{test.name}</div>
                    {test.condition && <div className={styles.testCondition}>{test.condition}</div>}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '0.8rem' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveTestimonial(idx)}
                  style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', background: idx === activeTestimonial ? 'var(--accent-teal)' : 'rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'background 0.3s' }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BOOK (White) ─── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.content}>
          <div className={styles.bookGrid}>
            <div className="reveal-up">

              <div className={styles.bookQuote}>&ldquo;Aging may be inevitable. Diseases are not.&rdquo;</div>
              <h2 className={styles.bookTitle}>Edible to Incredible</h2>
              <p className={styles.bookDesc}>In her book, Sheeba identifies root causes of health issues and provides a holistic healthcare perspective — addressing blind spots of the medical profession. It galvanizes all readers from beginners to hardcore health nuts into the next level of well-being.</p>
              <Button href="https://www.amazon.com/Edible-Incredible-Sheeba-Majmudar/dp/1482831818" variant="primary">Purchase on Amazon</Button>
            </div>
            <div className={`${styles.bookCoverWrapper} reveal-up`}>
              <img src="/assets/5f117a2f148600175d40e459_Book--image.png" className={styles.bookCover} alt="Edible to Incredible Book Cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── NATUROPATHIC APPROACH: Redesigned Background Image Section ─── */}
      <section className={styles.naturopathicSection}>
        <div className={styles.naturopathicContainer}>
          <div className={`reveal-up ${styles.naturopathicCard}`}>

            <h2 className={styles.credTitle} style={{ color: 'var(--foreground)', marginBottom: '2.5rem', textAlign: 'left' }}>A Naturopathic Approach</h2>

            <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--accent-teal)', fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>✦</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>Functional Medicine &amp; Assessments</div>
                  <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.95, lineHeight: 1.75, margin: 0 }}>Using basic clinical assessments, Sheeba is able to connect the dots using a functional medicine approach. This helps determine the underlying nutrient gaps, which can then be targeted using a food and supplement protocol to optimize and address health goals.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-teal)', fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>✦</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>Naturopathy &amp; Energetic Medicine</div>
                  <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.95, lineHeight: 1.75, margin: 0 }}>From customized plans for wellbeing, Sheeba recommends from her expert knowledge in multiple and varied fields, taking from the best in alternative medicine that support and nurture the whole body&#39;s emotional, mental, electromagnetic aspects.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CONTACT (Deep Luxury) ─── */}
      <section id="contact" className={`${styles.section} ${styles.sectionDeep}`}>
        <BotanicalLeaf positionStyles={{ bottom: '0%', right: '-10%', width: '600px', height: '600px', transform: 'rotate(-45deg)', opacity: 0.1 }} speed={0.5} />
        <BotanicalLeaf positionStyles={{ top: '-5%', left: '-5%', width: '400px', height: '400px', transform: 'rotate(35deg)', opacity: 0.1 }} speed={1.2} />
        
        <div className={styles.content}>
          <div className={styles.contactGrid}>
            <div className="reveal-up">

              <h2 className={styles.contactTitle}>Let&apos;s find the<br/><i>root cause.</i></h2>
              <p className={styles.contactDesc}>Request a consultation with Sheeba Majmudar. Tell us what you are looking to resolve, and we will guide you on the next steps.</p>
              <ContactQuickLinks tone="dark" />
            </div>
            
            <div className={`${styles.formWrapper} reveal-up`}>
              {formState === "success" ? (
                <div className={styles.successState}>
                  <div className={styles.successTitle}>Thank you.</div>
                  <p style={{color: 'rgba(248, 241, 222, 0.8)'}}>Sheeba&apos;s clinic has received your request and will be in touch shortly to schedule your consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className={styles.formGroup}>
                    <input type="text" id="home-name" name="name" autoComplete="name" className={styles.inputField} placeholder=" " required aria-required="true" />
                    <label htmlFor="home-name" className={styles.inputLabel}>Full Name</label>
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" id="home-email" name="email" autoComplete="email" className={styles.inputField} placeholder=" " required aria-required="true" />
                    <label htmlFor="home-email" className={styles.inputLabel}>Email Address</label>
                  </div>
                  <div className={styles.formGroup}>
                    <input type="tel" id="home-phone" name="phone" autoComplete="tel" className={styles.inputField} placeholder=" " required aria-required="true" />
                    <label htmlFor="home-phone" className={styles.inputLabel}>Phone Number</label>
                  </div>
                  <div className={styles.formGroup}>
                    <input type="text" id="home-message" name="message" className={styles.inputField} placeholder=" " required aria-required="true" />
                    <label htmlFor="home-message" className={styles.inputLabel}>What are you looking to resolve?</label>
                  </div>
                  {TURNSTILE_SITE_KEY && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={TURNSTILE_SITE_KEY}
                        onSuccess={(tok) => setToken(tok)}
                        onExpire={() => setToken(null)}
                        onError={() => {
                          setToken(null);
                          alert("Turnstile error. Please refresh the page.");
                        }}
                        options={{
                          theme: 'dark'
                        }}
                      />
                    </div>
                  )}
                  <button type="submit" className={styles.submitBtn} disabled={formState === "submitting"} aria-describedby={formState === "error" ? "home-form-error" : undefined}>
                    {formState === "submitting" ? "Sending..." : "Request Consultation"}
                  </button>
                  {formState === "error" && <p id="home-form-error" role="alert" style={{color:'#ff9999', fontSize:'13px', marginTop:'1rem', textAlign:'center'}}>There was an error sending your request. Please try again.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
