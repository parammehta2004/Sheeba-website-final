"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import TherapyDiagram from "@/components/ui/TherapyDiagram";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const THERAPIES = [
  { title: "Biodynamic Craniosacral Therapy", body: "The therapy is gaining a lot of recognition and popularity because of its profound therapeutic effects. It is a gentle profound non-invasive, hands-on treatment for the whole body.", slug: "biodynamic-craniosacral-therapy", img: "/assets/bct.jpg", bgPosition: "35% center" },
  { title: "Reconnective Healing", body: "Reconnective Healing® transcends traditional energy healing techniques. It allows us to let go of the concept, approach and even the need for the method itself while including the benefits of all known energy healing methods.", slug: "reconnective-healing", img: "/assets/reconh.jpg", bgPosition: "center" },
  { title: "Gemmotherapy", body: "It has concentrated plant stem cells that are highly bioavailable and bioactive compounds yet gentle on the system. Can be used for children and adults to harmonise many health conditions.", slug: "gemmotherapy", img: "/assets/gemmo.jpg", bgPosition: "65% center" },
  { title: "Weight (Fat loss) programs", body: "Our signature Dropzone Program, a practitioner guided program has helped thousands to lose fat and engage in healthier lifestyles.", slug: "dropzone", img: "/assets/falos.jpeg" },
  { title: "Practitioner Supplements", body: "Access premium, practitioner-grade supplements curated specifically to support your customized health protocols and total wellness journey.", slug: "practitioner-supplements", img: "/assets/prasup.jpeg", bgPosition: "85% center", externalLink: "https://www.practitionergraded.com" },
  { title: "Aroma Therapy", body: "Essential oils have been used for over 5,000 years and continue to be used to fast track in healing all aspects of health, emotions, sleep and mood.", slug: "therapeutic-aroma-therapy", img: "/assets/aromather.jpeg" },
  { title: "E4L (Nutri Energetic System)", body: "The E4L system can detect your bio-field (energy) to scan for imbalances, restoring cells over time to their normal, optimal functioning as part of the natural healing response.", slug: "e4l-nutri-energetic-system", img: "/assets/e4l%20nes.jpg", bgPosition: "85% center" },
];

export default function Therapies() {
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

  return (
    <>
      <Navigation />
      <main id="main" className={styles.main} ref={containerRef}>

        {/* ── Hero ── */}
        <section className={styles.heroSection} style={{ width: '100%', minHeight: '65vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8rem 2rem' }}>
          {/* Background Image Banner */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src="/assets/therapiesleaf.png"
              alt="Therapies Background Banner"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Dark overlay for contrast */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(26, 61, 61, 0.45)' }} />
          </div>

          {/* Text Content Overlay */}
          <div className={styles.heroContent} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
            <div className="reveal-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <h1 className={styles.titleHero} style={{ color: '#ffffff', textAlign: 'center', margin: '0 auto 2rem auto' }}>
                Our <span className={styles.textAccent} style={{ color: 'var(--accent-peach)' }}>Therapies</span>
              </h1>
              <p className={styles.paragraph} style={{ color: '#ffffff', maxWidth: '800px', margin: '0 auto', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Sheeba&apos;s therapy approach goes beyond nutrition — drawing from the very best
                of alternative medicine to nurture the whole body: emotional, mental, and
                electromagnetic, achieving lasting wellbeing at any age.
              </p>
            </div>
          </div>
        </section>

        {/* ── Therapies Grid ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: 'transparent' }}>
          <div className={styles.stepsContent}>
            <InteractiveGrid items={THERAPIES} basePath="/therapies" hideTags={true} />
          </div>
        </section>

      </main>
    </>
  );
}
