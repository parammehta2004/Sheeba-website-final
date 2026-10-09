"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import RotatingHexagon from "@/components/ui/RotatingHexagon";

import InteractiveGrid from "@/components/ui/InteractiveGrid";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ASSESSMENTS = [
  { title: "Metabolic Mapping", body: "Our clinical North Star. By performing a functional analysis of 42+ metabolic markers in your blood test, we decode your body's unique biochemistry and design a highly customized blueprint for your health.", slug: "metabolic-mapping", img: "/assets/mmcard.jpg", bgPosition: "35% center" },
  { title: "Dutch Test", body: "Dutch Test is the simplest and informative test for anyone who is considering bioidentical hormone therapy, natural protocols, or suspect they may have a hormone-related challenge", slug: "dutch-test", img: "/assets/dutch.png", bgSize: "85%", bgColor: "#3e5548" },
  { title: "Hair Tissue Mineral Analysis", body: "This assessment measures the mineral contents of one's hair.", slug: "hair-tissue-mineral-analysis", img: "/assets/htmt.jpg" },
  { title: "Food Compatibility Testing", body: "The compatibility programme is not a \"one-size-fits-all\" solution. Instead, it represents your individual requirements and responses.", slug: "compatibility-testing", img: "/assets/fct.jpg", bgPosition: "85% center" },
  { title: "E4L (Nutri Energetic System)", body: "The E4L system can detect your bio-field (energy) to scan for imbalances, restoring cells over time to their normal, optimal functioning as part of the natural healing response.", slug: "e4l-nutri-energetic-system", img: "/assets/e4l%20nes.jpg", bgPosition: "85% center" },
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
      <main id="main" className={styles.main} ref={containerRef}>

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
                <p className={styles.paragraph}>
                  To formulate a clear plan for optimal health, we begin with a thorough assessment.
                  Understanding the root cause allows us to create a precise, personalised protocol
                  to restore your wellbeing.
                </p>
              </div>
            </div>
            <div className={`${styles.visualCol} reveal-up`}>
              <RotatingHexagon />
            </div>
          </div>
        </section>

        {/* ── Assessments Grid ── */}
        <section className={styles.sectionWrapper}>
          <div className={styles.stepsContent}>
            <InteractiveGrid items={ASSESSMENTS} basePath="/health-assessments" hideTags={true} titleLevel={2} balanced={true} />
          </div>
        </section>

      </main>
    </>
  );
}
