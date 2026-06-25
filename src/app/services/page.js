"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";
import LeafDecoration from "@/components/ui/LeafDecoration";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HEALTH_ASSESSMENTS = [
  { title: "Functional Blood Chemistry Analysis", body: "To formulate a clear plan for optimal health, basic blood analysis would be necessary to get to the root cause of health issues. It is more patient-centric approach rather than going at the disease itself.", slug: "functional-blood-chemistry-analysis", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" },
  { title: "Dutch Test", body: "Dutch Test is the simplest and informative test for anyone who is considering bioidentical hormone therapy, natural protocols, or suspect they may have a hormone-related challenge", slug: "dutch-test", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" },
  { title: "Hair Tissue Mineral Analysis", body: "This assessment measures the mineral contents of one's hair.", slug: "hair-tissue-mineral-analysis", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
  { title: "Food Compatibility Testing", body: "The compatibility programme is not a \"one-size-fits-all\" solution. Instead, it represents your individual requirements and responses.", slug: "compatibility-testing", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" },
];

const THERAPIES = [
  { title: "Biodynamic Craniosacral Therapy", body: "The therapy is gaining a lot of recognition and popularity because of its profound therapeutic effects. It is a gentle profound non-invasive, hands-on treatment for the whole body.", slug: "biodynamic-craniosacral-therapy", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" },
  { title: "Reconnective Healing", body: "Reconnective Healing® transcends traditional energy healing techniques. It allows us to let go of the concept, approach and even the need for the method itself while including the benefits of all known energy healing methods.", slug: "reconnective-healing", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" },
  { title: "Gemmotherapy", body: "It has concentrated plant stem cells that are highly bioavailable and bioactive compounds yet gentle on the system. Can be used for children and adults to harmonise many health conditions.", slug: "gemmotherapy", img: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80&w=800" },
  { title: "Dropzone", body: "Our signature Dropzone Program, a practitioner guided program has helped thousands to lose fat and engage in healthier lifestyles.", slug: "dropzone", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" },
  { title: "Aroma Therapy", body: "Essential oils have been used for over 5,000 years and continue to be used to fast track in healing all aspects of health, emotions, sleep and mood.", slug: "therapeutic-aroma-therapy", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" },
  { title: "NES (Nutri Energetic System)", body: "The NES system can detect your bio-field (energy), and the miHealth can then raise the electrical potential of those cells, restoring them over time to their normal, optimal functioning as part of the natural healing response.", slug: "nes-nutri-energetic-system", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800" },
];

const STEPS = [
  { num: "01", title: "Health Assessment", body: "Complete a health assessment to provide Sheeba with in-depth analysis of your health condition. Contact us, as this can be done anywhere in the world." },
  { num: "02", title: "Consultation", body: "A one-to-one consultation with Sheeba (virtual or in person), she will brief you on the nutritional plans and supplements protocols that will address all concerns." },
  { num: "03", title: "Total Wellness Protocol", body: "A personalised, holistic set of protocols that clients are recommended, to achieve the desired goals." },
  { num: "04", title: "Follow Up", body: "Between 4-8 weeks, a follow-up is recommended to assess and tweak protocols to continue seeing improvements in the client's health." },
];

export default function Services() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState("idle");

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
        gsap.fromTo(el, { opacity: 0, y: 80 }, {
          opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none reverse" },
        });
      });
      gsap.to(".floating-leaf", {
        y: -30, rotation: 10, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("https://vapor.biohackk.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        }),
      });
      if(res.ok) setFormState("success");
      else setFormState("error");
    } catch (err) {
      setFormState("error");
    }
  };

  return (
    <>
      <Navigation />
      <main className={styles.main} ref={containerRef}>

        {/* ── Hero: Holistic Health ── */}
        <section className={`${styles.sectionWrapper} ${styles.heroSection}`}>
          <div className={styles.splitContent} style={{ alignItems: 'center' }}>
            <div className={`${styles.textCol} reveal-up`}>
              <h1 className={styles.titleHero}>
                <span className={styles.textAccent}>Holistic</span> Health
              </h1>
              <p className={styles.paragraph}>
                As the best nutritionist in singapore and a leading medical nutritionist in singapore, Sheeba&apos;s holistic approach—bridging conventional and alternative methods—extends to her clients&apos; mental, emotional, and spiritual wellbeing, delivering complete health and wellness treatment globally.
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <a href="https://us.fullscript.com/welcome/sheeba" target="_blank" rel="noreferrer" className={styles.ctaButton}>
                  Supplements Catalog →
                </a>
                <p style={{fontSize: '14px', marginTop: '0.8rem', color: 'rgba(45, 90, 90, 0.8)'}}>Purchase high quality supplements globally here.</p>
              </div>
            </div>
            <div className={`${styles.imageCol} reveal-up`}>
              <img
                src="/assets/5f210f5cc99aa49236d05881_Food-img-p-500.png"
                alt="Holistic Health — fresh food"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-cards)" }}
              />
            </div>
          </div>
        </section>

        {/* ── Health Assessments Grid ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: 'var(--accent-teal-dark)', color: 'var(--background)' }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection}>
                Our <span className={styles.textAccent}>Health Assessments</span>
              </h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'rgba(45, 90, 90, 0.8)' }}>
                Comprehensive, root-cause analyses designed to give us an exact picture of your baseline.
              </p>
            </div>
            
            <div className="reveal-up">
              <InteractiveGrid items={HEALTH_ASSESSMENTS} />
            </div>
          </div>
        </section>

        {/* ── Therapies Grid ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: 'transparent' }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '4rem 2rem 8rem' }}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection}>
                Our <span className={styles.textAccent}>Therapies</span>
              </h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'rgba(45, 90, 90, 0.8)' }}>
                Holistic protocols blending clinical nutrition with advanced bioenergetics.
              </p>
            </div>
            
            <div className="reveal-up">
              <InteractiveGrid items={THERAPIES} />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className={`${styles.sectionWrapper} ${styles.stepsSection}`} style={{ backgroundColor: 'var(--accent-teal-dark)', color: 'var(--background)' }}>
          <div className={styles.stepsContent} style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection}>
                Here&apos;s <span className={styles.textAccent}>how it works.</span>
              </h2>
            </div>
            
            <div className={styles.stepsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
              {/* Connecting line (hidden on mobile via css, but fine inline for now) */}
              <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', background: 'rgba(52, 181, 178, 0.3)', zIndex: 0, display: 'block' }}></div>
              
              {STEPS.map((step, idx) => (
                <div key={idx} className="reveal-up" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ffffff', border: '2px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--accent-teal)', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(52, 181, 178, 0.15)' }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '18px', color: 'var(--foreground)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(45, 90, 90, 0.8)", lineHeight: '1.6' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form A: Contact ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: "transparent" }}>
          <div className={styles.splitContent} style={{ alignItems: "center" }}>
            <div className={`${styles.textCol} reveal-up`}>
              <h2 className={styles.titleSection} style={{ color: "var(--foreground)" }}>
                Let&apos;s find the <br /><i style={{color: "var(--accent-teal)"}}>root cause.</i>
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(45, 90, 90, 0.8)", maxWidth: "400px" }}>
                Request a consultation with Sheeba Majmudar. Tell us what you are looking to resolve, and we will guide you on the next steps.
              </p>
            </div>
            
            <div className="reveal-up" style={{ width: "100%", maxWidth: "500px", background: "#ffffff", padding: "3rem", borderRadius: "8px", color: "var(--foreground)" }}>
              {formState === "success" ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "32px", color: "var(--accent-olive)", marginBottom: "1rem" }}>Thank you.</div>
                  <p style={{ color: "rgba(74, 78, 70, 0.8)" }}>Sheeba&apos;s clinic has received your request and will be in touch shortly to schedule your consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Full Name</label>
                    <input type="text" name="name" required style={{ width: "100%", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", outline: "none", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" name="email" required style={{ width: "100%", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", outline: "none", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Phone Number</label>
                    <input type="tel" name="phone" required style={{ width: "100%", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", outline: "none", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>What are you looking to resolve?</label>
                    <input type="text" name="message" required style={{ width: "100%", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", outline: "none", fontFamily: "var(--font-body)" }} />
                  </div>
                  <button type="submit" disabled={formState === "submitting"} className={styles.submitButton}>
                    {formState === "submitting" ? "Sending..." : "Request Consultation"}
                  </button>
                  {formState === "error" && <p style={{color:'red', fontSize:'12px', marginTop:'1rem', textAlign:'center'}}>Error sending request.</p>}
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
