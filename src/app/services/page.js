"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";
import LeafDecoration from "@/components/ui/LeafDecoration";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import ContactQuickLinks from "@/components/ui/ContactQuickLinks";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";
import posthog from "posthog-js";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HEALTH_ASSESSMENTS = [
  { title: "Metabolic Mapping", body: "Our clinical North Star. By performing a functional analysis of 42+ metabolic markers in your blood test, we decode your body's unique biochemistry and design a highly customized blueprint for your health.", slug: "metabolic-mapping", img: "/assets/mmcard.jpg", bgPosition: "35% center" },
  { title: "Dutch Test", body: "Dutch Test is the simplest and informative test for anyone who is considering bioidentical hormone therapy, natural protocols, or suspect they may have a hormone-related challenge", slug: "dutch-test", img: "/assets/dutch.png", bgSize: "85%", bgColor: "#3e5548" },
  { title: "Hair Tissue Mineral Analysis", body: "This assessment measures the mineral contents of one's hair.", slug: "hair-tissue-mineral-analysis", img: "/assets/htmt.jpg" },
  { title: "Food Compatibility Testing", body: "The compatibility programme is not a \"one-size-fits-all\" solution. Instead, it represents your individual requirements and responses.", slug: "compatibility-testing", img: "/assets/fct.jpg", bgPosition: "85% center" },
  { title: "E4L (Nutri Energetic System)", body: "The E4L system can detect your bio-field (energy) to scan for imbalances, restoring cells over time to their normal, optimal functioning as part of the natural healing response.", slug: "e4l-nutri-energetic-system", img: "/assets/e4l%20nes.jpg", bgPosition: "85% center" },
];

const THERAPIES = [
  { title: "Biodynamic Craniosacral Therapy", body: "The therapy is gaining a lot of recognition and popularity because of its profound therapeutic effects. It is a gentle profound non-invasive, hands-on treatment for the whole body.", slug: "biodynamic-craniosacral-therapy", img: "/assets/bct.jpg", bgPosition: "35% center" },
  { title: "Reconnective Healing", body: "Reconnective Healing® transcends traditional energy healing techniques. It allows us to let go of the concept, approach and even the need for the method itself while including the benefits of all known energy healing methods.", slug: "reconnective-healing", img: "/assets/reconh.jpg", bgPosition: "center" },
  { title: "Gemmotherapy", body: "It has concentrated plant stem cells that are highly bioavailable and bioactive compounds yet gentle on the system. Can be used for children and adults to harmonise many health conditions.", slug: "gemmotherapy", img: "/assets/gemmo.jpg", bgPosition: "65% center" },
  { title: "Weight (Fat loss) programs", body: "Our signature Dropzone Program, a practitioner guided program has helped thousands to lose fat and engage in healthier lifestyles.", slug: "dropzone", img: "/assets/falos.jpeg" },
  { title: "Practitioner Supplements", body: "Access premium, practitioner-grade supplements curated specifically to support your customized health protocols and total wellness journey.", slug: "practitioner-supplements", img: "/assets/prasup.jpeg", bgPosition: "85% center" },
  { title: "Aroma Therapy", body: "Essential oils have been used for over 5,000 years and continue to be used to fast track in healing all aspects of health, emotions, sleep and mood.", slug: "therapeutic-aroma-therapy", img: "/assets/aromather.jpeg" },
  { title: "E4L (Nutri Energetic System)", body: "The E4L system can detect your bio-field (energy) to scan for imbalances, restoring cells over time to their normal, optimal functioning as part of the natural healing response.", slug: "e4l-nutri-energetic-system", img: "/assets/e4l%20nes.jpg", bgPosition: "85% center" },
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
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);

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
        posthog.capture("contact_form_submitted", { form_location: "services_page" });
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
      <Navigation />
      <main id="main" className={styles.main} ref={containerRef}>

        {/* ── Hero: Holistic Health ── */}
        <section className={styles.heroSection} style={{ width: '100%', padding: '10rem 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className={styles.heroContent} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
            <div className="reveal-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <h1 className={styles.titleHero} style={{ textAlign: 'center', margin: '0 auto 2rem auto' }}>
                <span className={styles.textAccent}>Holistic</span> Health
              </h1>
              <p className={styles.paragraph} style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
                As the best nutritionist in singapore and a leading medical nutritionist in singapore, Sheeba&apos;s holistic approach—bridging conventional and alternative methods—extends to her clients&apos; mental, emotional, and spiritual wellbeing, delivering complete health and wellness treatment globally.
              </p>
            </div>
          </div>
          <div className="reveal-up" style={{ width: '100vw', height: '60vh', overflow: 'hidden', marginTop: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative' }}>
            <img
              src="/assets/holistic-health-hero.png"
              alt="Holistic Health — organic flat-lay"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </section>

        {/* ── Health Assessments Grid ── */}
        <section className={`${styles.sectionWrapper} ${styles.darkSection}`} style={{ backgroundColor: 'var(--accent-teal-dark)', color: 'var(--background)' }}>
          <div className={styles.gridShell}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection}>
                Our <span className={styles.textAccent}>Health Assessments</span>
              </h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'rgba(255, 255, 255, 0.8)' }}>
                Comprehensive, root-cause analyses designed to give us an exact picture of your baseline.
              </p>
            </div>
            
            <div className="reveal-up">
              <InteractiveGrid items={HEALTH_ASSESSMENTS} basePath="/health-assessments" hideTags={true} balanced={true} />
            </div>
          </div>
        </section>

        {/* ── Therapies Grid ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: 'transparent' }}>
          <div className={styles.gridShell} style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection}>
                Our <span className={styles.textAccent}>Therapies</span>
              </h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'rgba(45, 90, 90, 0.8)' }}>
                Holistic protocols blending clinical nutrition with advanced bioenergetics.
              </p>
            </div>
            
            <div className="reveal-up">
              <InteractiveGrid items={THERAPIES} basePath="/therapies" hideTags={true} balanced={true} />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className={`${styles.sectionWrapper} ${styles.stepsSection} ${styles.darkSection}`} style={{ backgroundColor: 'var(--accent-teal-dark)', color: 'var(--background)' }}>
          <div className={styles.stepsContent} style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
            <div className={`${styles.sectionHeader} reveal-up`} style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
              <h2 className={styles.titleSection} style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>
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
                  <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", lineHeight: '1.6' }}>{step.body}</p>
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
              <ContactQuickLinks tone="light" />
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
                    <label htmlFor="services-name" style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Full Name</label>
                    <input type="text" id="services-name" name="name" autoComplete="name" required aria-required="true" style={{ width: "100%", minHeight: "48px", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label htmlFor="services-email" style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" id="services-email" name="email" autoComplete="email" required aria-required="true" style={{ width: "100%", minHeight: "48px", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label htmlFor="services-phone" style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>Phone Number</label>
                    <input type="tel" id="services-phone" name="phone" autoComplete="tel" required aria-required="true" style={{ width: "100%", minHeight: "48px", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", fontFamily: "var(--font-body)" }} />
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <label htmlFor="services-message" style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>What are you looking to resolve?</label>
                    <input type="text" id="services-message" name="message" required aria-required="true" style={{ width: "100%", minHeight: "48px", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", fontFamily: "var(--font-body)" }} />
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
                          theme: 'light'
                        }}
                      />
                    </div>
                  )}
                  <button type="submit" disabled={formState === "submitting"} aria-describedby={formState === "error" ? "services-form-error" : undefined} className={styles.submitButton}>
                    {formState === "submitting" ? "Sending..." : "Request Consultation"}
                  </button>
                  {formState === "error" && <p id="services-form-error" role="alert" style={{color:'red', fontSize:'12px', marginTop:'1rem', textAlign:'center'}}>Error sending request.</p>}
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
