"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import LeafDecoration from "@/components/ui/LeafDecoration";
import { SERVICES_DATA } from "@/data/services";
import { Turnstile } from "@marsidev/react-turnstile";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [formState, setFormState] = useState("idle");
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);

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

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.mainContainer} ref={containerRef}>
      <Navigation />

      {/* ─── HERO SECTION ─── */}
      <section className={`${styles.section} ${styles.heroSection}`} style={{ backgroundColor: "var(--background)", padding: "7rem 0 2rem 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <LeafDecoration variant="a" className="floating-leaf" style={{ top: "15%", left: "5%", width: "400px", height: "400px", transform: "rotate(45deg)", opacity: 0.1, position: 'absolute' }} />
        
        {/* Banner image stretched horizontally across top */}
        <div className="reveal-up" style={{ 
          width: '100%', 
          height: '35vh', 
          minHeight: '250px',
          overflow: 'hidden', 
          position: 'relative',
          backgroundColor: service.bannerColor || service.bgColor || 'rgba(0,0,0,0.02)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '4rem',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
        }}>
          <img 
            src={service.img} 
            alt={service.title} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: (service.bannerSize || service.bgSize) ? "contain" : "cover", 
              objectPosition: service.bgPosition || 'center',
              maxHeight: (service.bannerSize || service.bgSize) ? "95%" : "100%"
            }} 
          />
        </div>

        <div className={styles.content} style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="reveal-up" style={{ textAlign: 'center' }}>
            {slug === "dropzone" ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "1.5rem", marginBottom: "1.5rem" }}>
                <img 
                  src="/assets/dropzone-logo.svg" 
                  alt="Dropzone Logo" 
                  style={{ width: "64px", height: "64px" }} 
                />
                <h1 className={styles.titleHero} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 54px)", lineHeight: "1.1", margin: 0, color: "var(--foreground)" }}>
                  {service.title}
                </h1>
              </div>
            ) : (
              <h1 className={styles.titleHero} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 4vw, 48px)", lineHeight: "1.15", marginBottom: "2rem", color: "var(--foreground)" }}>
                {service.title}
              </h1>
            )}
            <p className={styles.paragraph} style={{ fontSize: "19px", lineHeight: "1.8", color: "rgba(74, 78, 70, 0.85)", marginBottom: "0" }}>
              {service.description}
            </p>
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
                  {/* Cloudflare Turnstile Captcha */}
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADyibchCPA5EBZOT"}
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
