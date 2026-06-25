"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const THERAPIES = [
  { title: "Biodynamic Craniosacral Therapy", body: "The therapy is gaining a lot of recognition and popularity because of its profound therapeutic effects. It is a gentle profound non-invasive, hands-on treatment for the whole body.", slug: "biodynamic-craniosacral-therapy", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" },
  { title: "Reconnective Healing", body: "Reconnective Healing® transcends traditional energy healing techniques. It allows us to let go of the concept, approach and even the need for the method itself while including the benefits of all known energy healing methods.", slug: "reconnective-healing", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" },
  { title: "Gemmotherapy", body: "It has concentrated plant stem cells that are highly bioavailable and bioactive compounds yet gentle on the system. Can be used for children and adults to harmonise many health conditions.", slug: "gemmotherapy", img: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80&w=800" },
  { title: "Dropzone", body: "Our signature Dropzone Program, a practitioner guided program has helped thousands to lose fat and engage in healthier lifestyles.", slug: "dropzone", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" },
  { title: "Aroma Therapy", body: "Essential oils have been used for over 5,000 years and continue to be used to fast track in healing all aspects of health, emotions, sleep and mood.", slug: "therapeutic-aroma-therapy", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" },
  { title: "NES (Nutri Energetic System)", body: "The NES system can detect your bio-field (energy), and the miHealth can then raise the electrical potential of those cells, restoring them over time to their normal, optimal functioning as part of the natural healing response.", slug: "nes-nutri-energetic-system", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800" },
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
      <main className={styles.main} ref={containerRef}>

        {/* ── Hero ── */}
        <section className={`${styles.sectionWrapper} ${styles.heroSection} bg-theme-teal-dark`}>
          <div className={styles.splitContent}>
            <div className={styles.textCol}>
              <div className="reveal-up">

                <h1 className={styles.titleHero}>
                  Our <span className={styles.textAccent}>Therapies</span>
                </h1>
              </div>
              <div className={`${styles.heroDescription} reveal-up`}>
                <p className={styles.paragraph} style={{ margin: '2rem 0' }}>
                  Sheeba&apos;s therapy approach goes beyond nutrition — drawing from the very best
                  of alternative medicine to nurture the whole body: emotional, mental, and
                  electromagnetic, achieving lasting wellbeing at any age.
                </p>
              </div>
            </div>
            <div className={`${styles.visualCol} reveal-up`}>
              <img src="/assets/695efc3939941c2ace881a9a_Main-illustration--Sheeba.png" alt="Therapy Diagram" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* ── Therapies Grid ── */}
        <section className={styles.sectionWrapper} style={{ backgroundColor: 'transparent' }}>
          <div className={styles.stepsContent}>
            <InteractiveGrid items={THERAPIES} basePath="/therapies" />
          </div>
        </section>

      </main>
    </>
  );
}
