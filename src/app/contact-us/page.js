"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";
import LeafDecoration from "@/components/ui/LeafDecoration";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CONTACT_INFO = [
  {
    icon: "/assets/5f46df9f47a44976f6538d2d_Icon--Mail.png",
    label: "Email",
    value: "admin@sheebathenutritionist.com",
  },
  {
    icon: "/assets/5f46dfa03790d29262cac7ed_Icon--Map_Pin.png",
    label: "Address",
    value: "200 Cantonment Road, #06-01A, Southpoint, Singapore 089763",
  },
  {
    icon: "/assets/5f46df9f3924ba6c0834711c_Icon--Phone.png",
    label: "Phone",
    value: "+65 9656 6714",
  },
];

export default function ContactUs() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState('idle');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('https://vapor.biohackk.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.firstName.value + ' ' + e.target.lastName.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        }),
      });
      if (res.ok) setFormState('success');
      else setFormState('error');
    } catch (err) {
      setFormState('error');
    }
  };

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

        <section className={`${styles.sectionWrapper} ${styles.contactSection}`}>
          <div className={styles.contactContent}>

            {/* Left Col — Info */}
            <div className={styles.infoCol}>
              <div className="reveal-up">

                <h1 className={styles.titleHero}>
                  Let&apos;s <span className={styles.textAccent}>Connect.</span>
                </h1>
              </div>

              {CONTACT_INFO.map((info, idx) => (
                <div key={idx} className={`${styles.infoBlock} reveal-up`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className={styles.infoIcon}>
                    <img src={info.icon} alt={info.label} style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                  </div>
                  <div>
                    <strong>{info.label}</strong>
                    {info.label === "Phone" ? (
                      <p>
                        <a href="tel:+6596566714" style={{ color: 'inherit', textDecoration: 'none' }}>+65 9656 6714</a>
                        <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                        <a href="https://wa.me/6596566714" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
                      </p>
                    ) : info.label === "Email" ? (
                      <p>
                        <a href="mailto:admin@sheebathenutritionist.com" style={{ color: 'inherit', textDecoration: 'none' }}>{info.value}</a>
                      </p>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Col — Form */}
            <div className={`${styles.formCol} reveal-up`}>
              <LeafDecoration variant="b" className={`${styles.contactLeaf} floating-leaf`} />
              {formState === 'success' ? (
                <div className={styles.form} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>✅</div>
                  <h2 style={{ margin: 0 }}>Thank you!</h2>
                  <p style={{ opacity: 0.7 }}>Your enquiry has been received. Sheeba&apos;s clinic will be in touch with you shortly.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleFormSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>First Name</label>
                      <input type="text" name="firstName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Last Name</label>
                      <input type="text" name="lastName" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone</label>
                    <input type="tel" name="phone" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Tell us how we can help you get better</label>
                    <textarea name="message" rows={5}></textarea>
                  </div>
                  {formState === 'error' && (
                    <p style={{ color: '#e05555', fontSize: '13px', marginBottom: '0.5rem', textAlign: 'center' }}>
                      There was an error sending your enquiry. Please try again.
                    </p>
                  )}
                  <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }} disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ── FormSubmit Confirmation Visual ── */}
        <section className={styles.sectionWrapper} style={{ minHeight: "auto", padding: "4rem 2rem" }}>
          <div className={styles.formSubmitSection}>
            <img
              src="/assets/5f1fe30721fb97bd95f03956_FormSubmit.svg"
              alt="Form Submitted"
              className={styles.formSubmitIllustration}
            />
            <div className="reveal-up" style={{ textAlign: "center" }}>

              <h2 className={styles.titleSection} style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                We will get back to you <span className={styles.textAccent}>within 24hrs.</span>
              </h2>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
