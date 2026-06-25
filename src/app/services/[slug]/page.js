"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import { SERVICES_DATA } from "@/data/services";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [formState, setFormState] = useState("idle");

  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const primaryAccent = slug === "dropzone" ? "var(--accent-teal)" : "var(--accent-sage)";
  const buttonBg = slug === "dropzone" ? "var(--accent-teal)" : "var(--accent-deep)";

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
    if (!containerRef.current || !service) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 95%" } }
        );
      });
      gsap.to(".floating-leaf", {
        y: -20, rotation: 10, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, [service]);

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

  if (!service) {
    return (
      <main className={styles.mainContainer} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Navigation />
        <h1 style={{fontFamily: 'var(--font-heading)', fontSize: '32px'}}>Service not found</h1>
      </main>
    );
  }

  return (
    <main className={styles.mainContainer} ref={containerRef}>
      <Navigation />

      {/* ─── HERO SECTION ─── */}
      <section className={`${styles.section} ${styles.heroSection}`} style={{ backgroundColor: "var(--background)", padding: "7rem 0 2rem 0", display: "flex", alignItems: "center" }}>
        <LeafDecoration variant="a" className="floating-leaf" style={{ top: "15%", left: "5%", width: "400px", height: "400px", transform: "rotate(45deg)", opacity: 0.1, position: 'absolute' }} />
        <div className={styles.content}>
          <div className={styles.heroGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 30%', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal-up">

              <h1 className={styles.titleHero} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 40px)", lineHeight: "1.1", marginBottom: "1.5rem", color: "var(--foreground)" }}>
                {service.title}
              </h1>
              <p className={styles.paragraph} style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(74, 78, 70, 0.8)", marginBottom: "2rem" }}>
                {service.description}
              </p>
            </div>
            
            <div className="reveal-up" style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-15px", right: "-15px", width: "100%", height: "100%", border: `1px solid ${primaryAccent}`, borderRadius: "8px", zIndex: 0 }}></div>
              <img src={service.img} alt={service.title} style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px", position: "relative", zIndex: 1, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED CONTENT SECTION ─── */}
      {service.longContent && (
        <section className={`${styles.section} ${styles.detailSection}`}>
          <div className={styles.content} style={{ maxWidth: "800px" }}>
            <div 
              className={styles.richText} 
              dangerouslySetInnerHTML={{ __html: service.longContent }} 
            />
            
            {/* Book Consultation button moved here from hero */}
            {service.type !== "Health Assessment" && (
              <div style={{ marginTop: "4rem", textAlign: "center" }}>
                <a href="#book" style={{ display: "inline-block", backgroundColor: buttonBg, color: "var(--background)", padding: "18px 40px", borderRadius: "40px", textDecoration: "none", fontSize: "16px", fontWeight: "500", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.02)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"}>
                  Book Consultation
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── CONTACT SECTION ─── */}
      <section id="book" className={`${styles.section} ${styles.contactSection}`} style={{ backgroundColor: "var(--foreground)", padding: "8rem 2rem" }}>
        <div className={styles.content}>
          <div className={styles.contactGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div className="reveal-up">
              <h2 className={styles.contactTitle} style={{ fontFamily: "var(--font-heading)", fontSize: "48px", color: "#f8f1de", marginBottom: "2rem" }}>
                Take the <i style={{color: "var(--accent-amber)"}}>next step.</i>
              </h2>
              <p className={styles.contactDesc} style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(248, 241, 222, 0.8)", maxWidth: "450px" }}>
                Request a consultation with Sheeba Majmudar regarding {service.title}. Let&apos;s find the root cause and guide you on the next steps.
              </p>
            </div>
            
            <div className="reveal-up" style={{ background: "#ffffff", padding: "4rem", borderRadius: "8px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              {service.type === "Health Assessment" ? (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "28px", color: buttonBg, marginBottom: "1.5rem" }}>Ready to begin?</div>
                  <p style={{ color: "rgba(74, 78, 70, 0.8)", fontSize: "16px", marginBottom: "2rem", lineHeight: "1.6" }}>
                    Let&apos;s find the root cause of your health concerns. Fill out our complete consultation request form.
                  </p>
                  <a href="/contact-us" style={{ display: "inline-block", backgroundColor: buttonBg, color: "#fff", padding: "16px 36px", borderRadius: "40px", textDecoration: "none", fontSize: "16px", fontWeight: "500", transition: "all 0.3s" }}>
                    Go to Contact Form →
                  </a>
                </div>
              ) : formState === "success" ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "32px", color: "var(--accent-olive)", marginBottom: "1rem" }}>Thank you.</div>
                  <p style={{ color: "rgba(74, 78, 70, 0.8)", fontSize: "16px" }}>Sheeba&apos;s clinic has received your request and will be in touch shortly to schedule your consultation.</p>
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
                  <div style={{ marginBottom: "2.5rem" }}>
                    <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-olive)", marginBottom: "0.5rem" }}>What are you looking to resolve?</label>
                    <input type="text" name="message" required style={{ width: "100%", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(74, 78, 70, 0.2)", fontSize: "16px", outline: "none", fontFamily: "var(--font-body)" }} />
                  </div>
                  <button type="submit" disabled={formState === "submitting"} style={{ width: "100%", background: "var(--background)", color: "var(--foreground)", padding: "18px", border: "none", borderRadius: "40px", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "all 0.3s" }}>
                    {formState === "submitting" ? "Sending..." : "Request Consultation"}
                  </button>
                  {formState === "error" && <p style={{color:'red', fontSize:'12px', marginTop:'1rem', textAlign:'center'}}>There was an error sending your request.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
