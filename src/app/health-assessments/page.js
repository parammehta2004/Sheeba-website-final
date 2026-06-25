"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import OrbitalAssessments from "@/components/ui/OrbitalAssessments";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ASSESSMENTS = [
  { title: "Functional Blood Chemistry Analysis", body: "To formulate a clear plan for optimal health, basic blood analysis would be necessary to get to the root cause of health issues. It is more patient-centric approach rather than going at the disease itself.", slug: "functional-blood-chemistry-analysis", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" },
  { title: "Dutch Test", body: "Dutch Test is the simplest and informative test for anyone who is considering bioidentical hormone therapy, natural protocols, or suspect they may have a hormone-related challenge", slug: "dutch-test", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" },
  { title: "Hair Tissue Mineral Analysis", body: "This assessment measures the mineral contents of one's hair.", slug: "hair-tissue-mineral-analysis", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
  { title: "Food Compatibility Testing", body: "The compatibility programme is not a \"one-size-fits-all\" solution. Instead, it represents your individual requirements and responses.", slug: "compatibility-testing", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" },
];

export default function HealthAssessments() {
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
        <section className={`${styles.sectionWrapper} ${styles.heroSection}`}>
          <div className={styles.splitContent}>
            <div className={styles.textCol}>
              <div className="reveal-up">

                <h1 className={styles.titleHero}>
                  Our Health <span className={styles.textAccent}>Assessments</span>
                </h1>
              </div>
              <div className={`${styles.heroDescription} reveal-up`}>
                <p className={styles.paragraph} style={{ margin: '1.25rem 0' }}>
                  To formulate a clear plan for optimal health, we begin with a thorough assessment.
                  Understanding the root cause allows us to create a precise, personalised protocol
                  to restore your wellbeing.
                </p>
              </div>
            </div>
            <div className={`${styles.visualCol} reveal-up`}>
              <OrbitalAssessments assessments={ASSESSMENTS} />
            </div>
          </div>
        </section>

        {/* ── Assessments Grid ── */}
        <section className={styles.sectionWrapper}>
          <div className={styles.stepsContent}>
            <InteractiveGrid items={ASSESSMENTS} basePath="/health-assessments" />
          </div>
        </section>

      </main>
    </>
  );
}
