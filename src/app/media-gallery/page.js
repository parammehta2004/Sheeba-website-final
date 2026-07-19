"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MEDIA_ITEMS = [
  {
    type: "video",
    title: "Interview with BBC World Channel",
    embedUrl: "https://www.youtube.com/embed/RXh6Zl27URQ",
    description: "BBC World News interviewed Sheeba to share her views on the rise of \"Obesity In Asia\". Find out how our daily food habits have affected our overall health."
  },
  {
    type: "video",
    title: "Unlocking the Mysteries of Hydration with Nutritionist Sheeba Majmudar",
    embedUrl: "https://www.youtube.com/embed/OCeu-fp_q0g",
    description: "Join us in this transformative episode of H2Know as we sit down with the award-winning nutritionist, Sheeba Majmudar, to delve deep into the intricacies of hydration. Discover the less-known facts about water consumption and its profound impact on your body's functionality."
  },
  {
    type: "video",
    title: "Facts About Food Vending Machine in Singapore",
    embedUrl: "https://www.youtube.com/embed/4bTcwffTM8U",
    description: "Have you ever wondered about the impact of consuming food from the vending machine? Find out why are people still attracted to it despite the harm it brings to our health."
  },
  {
    type: "video",
    title: "Sheeba's Tips & Tricks #1",
    embedUrl: "https://www.youtube.com/embed/fd3Ve2njpFo",
    description: "Welcome to another episode of tips & tricks by SheebaTheNutritionist, find out what she will be sharing with us this time round. Here's a clue, it's from Korea! Sheeba is an award-winning nutritionist and also the author of the book, \"Edible to Incredible\"."
  },
  {
    type: "video",
    title: "If Everything You've Tried Hasn't Worked...",
    embedUrl: "https://www.youtube.com/embed/87_DxoxfQSU",
    description: "There comes a point where trying harder stops creating change. Not because you lack discipline, but because the approach isn't aligned with how your body is functioning. Discover how to move from trial-and-error to precision wellness."
  },
  {
    type: "video",
    title: "Dropzone: About Us",
    videoUrl: "/assets/Dropzone About Us Video.mp4",
    description: "An introduction to the Dropzone program, Singapore's award-winning, practitioner-guided fat loss protocol. Learn how the program targets stubborn fat cells specifically while sparing 100% of muscle mass by activating autophagy."
  },
  {
    type: "audio",
    title: "91.3 Fm Radio Interview on Liver Tonic",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sheeba-majmudar-207514863/913-fm-radio-interview-on-liver-tonic-sheeba-the-nutritionist&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    link: "https://soundcloud.com/sheeba-majmudar-207514863/913-fm-radio-interview-on-liver-tonic-sheeba-the-nutritionist",
    description: "In this interview with Singapore radio DJs from 91.3FM, Sheeba discusses the definitions and symptoms of Liver Tonic. Play the audio file to find out more."
  },
  {
    type: "article",
    title: "4 Nutrition Experts Provide Tips To Lose Weight Fast",
    link: "https://shopee.sg/blog/how-to-lose-weight-fast/?utm_source=sheebamajmudar&utm_medium=webowner&utm_campaign=flab-to-fab",
    description: "Article written by Iris Tan - Shopee."
  },
  {
    type: "article",
    title: "5 Easy Diet-Friendly Recipes For Weight Loss",
    link: "https://shopee.sg/blog/healthy-recipe-for-weight-loss/?utm_source=sheebamajmudar&utm_medium=webowner&utm_campaign=flab-to-fab",
    description: "Article written by Iris Tan - Shopee."
  },
  {
    type: "article",
    title: "Dropzone Instagram Page",
    link: "https://www.instagram.com/dropzonefit",
    description: "Follow Dropzone on Instagram for weight loss tips, success stories, and regular wellness updates."
  }
];

export default function MediaGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    const rafCallback = (time) => { lenis.raf(time * 1000); };
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Fade in hero items
      gsap.fromTo(".hero-animate-item", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out" }
      );

      // Reveal-up on scroll for elements
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 95%" } }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.mainContainer} ref={containerRef}>
      <Navigation />
      
      {/* ─── HERO SECTION ─── */}
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.heroGrid}>
            <div className="hero-animate-item">
              <span className={styles.heroLabel}>Media & Resources</span>
              <h1 className={styles.heroTitle}>
                Media <span className={styles.heroTitleItalic}>Gallery</span>
              </h1>
              <p className={styles.heroDesc}>
                Over the span of Sheeba&apos;s career, she has been interviewed on multiple media platforms to share her expert insights on the latest clinical health topics.
              </p>
            </div>
            
            <div className={`${styles.heroImagePanel} hero-animate-item`}>
              <img 
                src="/assets/5f588d8fcfe4745b4c62b6e0_19.8-3.png" 
                alt="Sheeba Majmudar holding her book Edible to Incredible" 
                className={styles.heroImage} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEOS ─── */}
      <section className={styles.videosSection}>
        <div className={styles.content}>
          <h2 className={`${styles.sectionTitle} reveal-up`}>Video Interviews</h2>
          
          <div className={styles.videosGrid}>
            {MEDIA_ITEMS.filter(m => m.type === "video").map((item, idx) => (
              <div key={idx} className={`${styles.videoCard} reveal-up`}>
                <div className={styles.videoWrapper}>
                  {item.videoUrl ? (
                    <video 
                      src={item.videoUrl} 
                      className={styles.videoIframe}
                      controls
                      playsInline
                      title={item.title}
                    />
                  ) : (
                    <iframe 
                      src={item.embedUrl} 
                      className={styles.videoIframe}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen 
                      title={item.title}
                    />
                  )}
                </div>
                <div>
                  <h3 className={styles.videoTitle}>{item.title}</h3>
                  <p className={styles.videoDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUDIO & ARTICLES ─── */}
      <section className={styles.splitSection}>
        <div className={styles.content}>
          <div className={styles.splitGrid}>
            
            {/* Audio Block */}
            <div className="reveal-up">
              <h2 className={styles.sectionTitle}>Audio Interviews</h2>
              <div className={styles.audioBlock}>
                {MEDIA_ITEMS.filter(m => m.type === "audio").map((item, idx) => (
                  <div key={idx} className={styles.audioCard}>
                    <h3 className={styles.audioTitle}>{item.title}</h3>
                    <p className={styles.audioDesc}>{item.description}</p>
                    
                    <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                      <iframe 
                        width="100%" 
                        height="166" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src={item.embedUrl} 
                      />
                    </div>

                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.audioButton}
                    >
                      Listen on SoundCloud →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles Block */}
            <div className="reveal-up">
              <h2 className={styles.sectionTitle}>Featured Articles</h2>
              <div className={styles.articlesBlock}>
                {MEDIA_ITEMS.filter(m => m.type === "article").map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={styles.articleCard}
                  >
                    <h3 className={styles.articleTitle}>{item.title}</h3>
                    <p className={styles.articleDesc}>{item.description}</p>
                    <span className={styles.articleLinkText}>Read Full Article →</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
