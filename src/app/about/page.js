"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import BotanicalLeaf from "@/components/ui/BotanicalLeaf";
import BotanicalPhilosophyTimeline from "@/components/ui/BotanicalPhilosophyTimeline";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AWARDS = [
  { title: "CozyCot 2014", body: '"100 Most Inspiring Women of 2014" in Singapore' },
  { title: "Asia's Greatest Brands", body: "The only nutritionist in her field to receive this prestigious award." },
  { title: "Recommended by Industry Professionals", body: "Recommended by local GP Doctors, Gynaecologists, Cardiologists and Physiotherapists." },
  { title: "Nutritionist of the Year", body: "Prestige Awards 2020/2021" },
  { title: "Best Naturopathic Nutritionist", body: "APAC Business Awards 2021" },
  { title: "Outstanding Best International Nutritionist", body: "South East Asia Business Awards (APAC Insider) 2021" },
  { title: "Best Nutritionist in Singapore", body: "Featured as a leading medical nutritionist in singapore by bestinsingapore.co." },
];

const CREDENTIALS = [
  "Master of Science in Human Nutrition (USA)",
  "Bachelor of Arts (Psychology)",
  "Diploma Clinical Herbology (USA)",
  "Reconnective Healing (by Dr Eric Pearl) (USA)",
  "Biodynamic Craniosacral Therapy (Certified Lev 4)",
  "Aromatherapist (USA)",
  "Gemmotherapy (Plant stem cell concentrates)",
  "Advanced Blood Chemistry Analysis (Functional Medicine, USA)",
  "Star Flower Essences Practitioner (USA)",
  "NES Total Wellness Practitioner",
];

const INGREDIENTS = [
  { title: "Connecting the Dots", text: "Sheeba's combinations of skills give her a unique background. Her biggest asset is connecting the dots and reading between the lines from blood tests and other assessments which are very often overlooked by healthcare practitioners. This makes all the difference in being able to 'hit the nail on the head' and not miss the elephant in the room! She is extremely sensitive to personality types and personal limitations, so Sheeba is able to micro-customize protocols to suit the individual." },
  { title: "Functional Medicine", text: "She has worked with big industry names in natural healthcare in the USA, giving her an edge in understanding client's medical conditions and blood tests by functional medicine blood chemistry analysis. This makes patients and doctors comfortable in recommending her or working with her to improve client's medical blood tests and concerns through functional medicine analysis." },
  { title: "Customise Protocols", text: "We all know that one size does not fit all. So how can one diet or exercise regime fit all? To make it work, the program needs to be customized for the individual. Your assessment works like your biochemistry fingerprint that can help formulate the best customized protocol, with your goals in mind. She can work with your GP, other holistic health practitioners or where relevant, refer you to one (eg: an acupuncturist)." },
  { title: "Always a Student", text: "In this field, one is always a student. Nutrition information is in a state of constant flux, and the way she looks at it, we have just reached the tip of the iceberg. So she keeps herself abreast with all the latest research in the field and beyond — because 'being well' also means 'looking well' and 'feeling well'." },
  { title: "Mind Body Whole Treatment", text: "Sheeba understands that if true healing has to happen, it needs to incorporate the body, mind and spirit. In her own journey for health, she found Biodynamic Craniosacral Therapy to be transformational. A true seeker, she learned this modality from one of the most renowned teachers in this field, Leonid Soboleff." },
  { title: "Holistic", text: "Sheeba used to work as a full time naturopath consultant for Verita Advanced Wellness Naturopath Pte Ltd for over 3 years, which offers all the latest possible modalities in alternate care, with complete health assessment, consultation with naturopath, nutrition, pilates, yoga, sonic gym, massages, gourmet vegan cafe, all under one 17,000sq ft roof, with state of the art equipment and the best that technology and natural healing has to offer." },
  { title: "Corporate", text: "She is an engaging speaker, giving talks and presentations, conducting workshops to corporate employees all over Singapore, including Singapore General Hospital, Mount Elizabeth Hospital, Gleneagles, East shore Hospital, DSTA (Defense Science and Technology Agency), Republic Polytechnic, WINGS, various schools, etc." },
  { title: "Research", text: "She is the consulting nutritionist for Men's Health Magazine (Singapore) for their Nutritionist's column and contributes researched nutrition related articles regularly in the magazine, and to other media as well." },
  { title: "Passion", text: "She has a steady private clientele where she does one to one sessions if the client can't come to her, she goes to them. She believes in remaining a student and continuing the journey of inquiry and study in all fields that holistically support health." },
  { title: "Touch", text: "In search of a complete holistic approach, Sheeba experienced Biodynamic craniosacral therapy and decided to learn it from a renowned teacher, Leonid Soboleff. It is a beautiful and very gentle touch that helps the body heal and align, which needs to be experienced, whose mechanics are based on quantum physics." },
  { title: "Evolution", text: "Personally in search of the highest, Sheeba read Dr Eric Pearl's book, The Reconnection – Heal Others Heal Yourself. She took the seminar with him and is now a Reconnective Healing Practitioner. This to her is the highest form of healing a person can receive, that completely transcends energy healing and its complex rituals and techniques." }
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", gestureDirection: "vertical",
      smooth: true, mouseMultiplier: 1,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const rafCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0, 0);
    return () => { lenis.destroy(); gsap.ticker.remove(rafCallback); };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1.0, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none reverse" },
        });
      });
      
      // Separate smoother animation for awards grid
      gsap.fromTo(".award-card-motion", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: `.${styles.awardsGrid}`, start: "top 95%" }
        }
      );
      gsap.to(".floating-leaf", {
        y: -30, rotation: 10, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />
      <main className={styles.main} ref={containerRef}>

        {/* ── Hero ── */}
        <section className={`${styles.sectionWrapper} ${styles.heroSection}`} style={{ paddingBottom: '0' }}>
          <div className={styles.heroContent}>
            <div className="reveal-up">

              <h1 className={styles.titleHero}>
                Opening our doors<br />
                <span className={styles.textAccent}>to you.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* ── Intro Portrait ── */}
        <section className={styles.sectionWrapper} style={{ paddingTop: '2rem' }}>
          <div className={styles.introContent}>
            <div className="reveal-up" style={{ position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '450px', height: '450px' }}>
                <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', border: '2px solid var(--accent-teal)', top: '20px', left: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52, 181, 178, 0.15)', zIndex: 2, boxShadow: '0 10px 30px rgba(52, 181, 178, 0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontWeight: 600, fontSize: '18px', textAlign: 'center', position: 'relative', left: '-12px' }}>Functional<br/>Medicine</span>
                </div>
                <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', border: '2px solid var(--accent-amber)', top: '20px', right: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(184, 123, 76, 0.15)', zIndex: 1, boxShadow: '0 10px 30px rgba(184, 123, 76, 0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontWeight: 600, fontSize: '18px', textAlign: 'center', position: 'relative', left: '12px' }}>Holistic<br/>Wellness</span>
                </div>
                <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', border: '2px solid var(--accent-sage)', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(169, 189, 164, 0.15)', zIndex: 3, boxShadow: '0 10px 30px rgba(169, 189, 164, 0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontWeight: 600, fontSize: '18px', textAlign: 'center', position: 'relative', top: '12px' }}>Corporate<br/>Health</span>
                </div>
                <svg width="100%" height="100%" viewBox="0 0 450 450" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 5 }}>
                  <defs>
                    <clipPath id="leftClip">
                      <circle cx="140" cy="150" r="130" />
                    </clipPath>
                    <clipPath id="rightClip">
                      <circle cx="310" cy="150" r="130" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#leftClip)">
                    <g clipPath="url(#rightClip)">
                      <circle cx="225" cy="290" r="130" fill="#2d5a5a" opacity="0.75" />
                    </g>
                  </g>
                </svg>
                <div style={{ position: 'absolute', left: '50%', top: '193px', transform: 'translate(-50%, -50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/assets/leaf-logo.svg" alt="Sheeba Leaf Logo" style={{ width: '60px', height: '44px' }} />
                </div>
              </div>
            </div>
            <div className={`${styles.glassCard} reveal-up`}>
              <h2 className={styles.titleSmall}>Sheeba Majmudar</h2>
              <p className={styles.paragraph}>
                Canadian born, having lived in US, India, Singapore, Japan and now based in
                Hong Kong, Sheeba&apos;s east and west exposure fused into a passion to
                discover health naturally, but realistically.
              </p>
              <p className={styles.paragraph}>
                &ldquo;Just the way we spend on good education and make informed financial investments,
                similarly, we need to invest wisely in our health.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── Sheeba Article Image / Functional Medicine Visual ── */}
        <section className={`${styles.sectionWrapper} bg-theme-peach`} style={{ minHeight: "60vh" }}>
          <div className={styles.introContent} style={{ flexDirection: "row-reverse" }}>
            <div className={`${styles.imageWrapper} reveal-up`}>
              <LeafDecoration variant="b" className={`${styles.introLeaf} floating-leaf`} style={{ left: "-80px", right: "auto", transform: "rotate(-20deg)" }} />
              <img
                src="/assets/603d9fdd7784ff06a73fa16c_Sheeba - article-1.jpg"
                alt="Sheeba Majmudar Article"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              />
            </div>
            <div className={`${styles.glassCard} reveal-up`}>
              <h2 className={styles.titleSmall}>The Intersect</h2>
              <p className={styles.paragraph}>
                She believes while aging may be inevitable, diseases are not; our beliefs and
                how we treat our body can create healing processes that are little understood
                by medical science.
              </p>
              <p className={styles.paragraph}>
                She is one of the few nutritionists and naturopaths recommended by Obstetricians,
                Gynaecologists, Cardiologists and even GP Doctors.
              </p>
            </div>
          </div>
        </section>

        {/* ── Awards ── */}
        <section className={`${styles.sectionWrapper} ${styles.awardsSection}`}>
          <div className={styles.awardsContent}>
            <div className={`${styles.sectionHeader} reveal-up`}>

              <h2 className={styles.titleSection}>
                Lifetime of <span className={styles.textAccent}>Achievements</span>
              </h2>
            </div>
            <div className={styles.awardsGrid}>
              {AWARDS.map((award, idx) => (
                <div key={idx} className={`${styles.awardCard} award-card-motion`}>
                  <h3>{award.title}</h3>
                  <p>{award.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lifestyle Image ── */}
        <section style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", height: "60vh", overflow: "hidden" }}>
          <img
            src="/assets/wellness_medicine.png"
            alt="Luxury Wellness"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </section>

        {/* ── Credentials ── */}
        <section className={`${styles.sectionWrapper} ${styles.credentialsSection} bg-theme-peach`}>
          <div className={styles.credentialsContent}>
            <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>

              <h2 className={styles.titleSection}>Credentials</h2>
            </div>
            <ul className="reveal-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', background: 'var(--glass-bg)', padding: '3.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)', listStyle: 'none', margin: '0', width: '100%', boxShadow: 'var(--shadow-premium)' }}>
              {CREDENTIALS.map((cred, idx) => (
                <li key={idx} style={{ paddingLeft: '2rem', position: 'relative', fontSize: '16px', lineHeight: '1.5', color: 'var(--foreground)', textAlign: 'left' }}>
                  <span style={{ position: 'absolute', left: 0, top: '-2px', color: 'var(--accent-teal)', fontSize: '20px' }}>✓</span>
                  {cred}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Special Ingredients (Philosophy) ── */}
        <section className={styles.sectionWrapper} style={{ position: "relative", minHeight: "auto", padding: "6rem 0", backgroundColor: "transparent", overflow: "hidden" }}>
          
          {/* ── Floating Background Leaves ── */}
          <BotanicalLeaf positionStyles={{ top: '5%', left: '-5%', width: '300px', height: '300px', transform: 'rotate(20deg)' }} speed={0.9} />
          <BotanicalLeaf positionStyles={{ top: '35%', right: '-8%', width: '350px', height: '350px', transform: 'rotate(-45deg)' }} speed={1.3} />
          <BotanicalLeaf positionStyles={{ top: '65%', left: '-10%', width: '400px', height: '400px', transform: 'rotate(60deg)' }} speed={0.7} />
          <BotanicalLeaf positionStyles={{ bottom: '2%', right: '-2%', width: '250px', height: '250px', transform: 'rotate(-20deg)' }} speed={1.1} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="reveal-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 className={styles.titleSection} style={{ fontSize: "3rem", color: "var(--foreground)" }}>
                Her blend of <span className={styles.textAccent} style={{ color: "var(--accent-teal)" }}>special ingredients</span>
              </h2>
            </div>
            
            {/* ── Botanical Timeline ── */}
            <BotanicalPhilosophyTimeline items={INGREDIENTS} />
          </div>
        </section>

      </main>
    </>
  );
}
