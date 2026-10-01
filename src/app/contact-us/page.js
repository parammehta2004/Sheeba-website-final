"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";
import LeafDecoration from "@/components/ui/LeafDecoration";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";
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
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the security check (checkbox) before submitting, or refresh the page if it is not visible.");
      return;
    }
    setFormState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.firstName.value + ' ' + e.target.lastName.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
          "cf-turnstile-response": token,
        }),
      });
      if (res.ok) {
        setFormState('success');
        setToken(null);
        turnstileRef.current?.reset();
      } else {
        setFormState('error');
        turnstileRef.current?.reset();
      }
    } catch (err) {
      setFormState('error');
      turnstileRef.current?.reset();
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
      <main id="main" className={styles.main} ref={containerRef}>

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
                    {/* Decorative: the label is shown as text beside it */}
                    <img src={info.icon} alt="" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                  </div>
                  <div>
                    <strong>{info.label}</strong>
                    {info.label === "Phone" ? (
                      <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+6596566714" style={{ color: 'inherit', textDecoration: 'none' }}>+65 9656 6714</a>
                        <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                        <a href="https://wa.me/6596566714" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.292 1.48 4.968 1.48 5.438 0 9.861-4.42 9.864-9.858.002-2.636-1.023-5.113-2.887-6.978C16.726 1.936 14.25 1.01 11.616 1.01c-5.442 0-9.867 4.42-9.87 9.86-.001 1.774.475 3.503 1.378 5.068l-.997 3.642 3.73-.978zM17.65 14.5c-.32-.16-1.89-.93-2.185-1.04-.3-.11-.515-.16-.73.16-.215.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.15-.14.32-.38.49-.57.16-.19.22-.32.32-.54.1-.21.05-.41-.02-.57-.08-.16-.73-1.76-1-2.42-.26-.63-.53-.55-.73-.56-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.41-.3.32-1.15 1.12-1.15 2.73s1.17 3.16 1.33 3.38c.16.22 2.3 3.52 5.58 4.94.78.34 1.39.54 1.87.7.79.25 1.5.22 2.07.13.63-.09 1.89-.77 2.15-1.48.27-.71.27-1.32.19-1.45-.08-.13-.3-.21-.62-.37z"/></svg>
                          WhatsApp
                        </a>
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
                      <label htmlFor="contact-first-name">First Name</label>
                      <input type="text" id="contact-first-name" name="firstName" autoComplete="given-name" required aria-required="true" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-last-name">Last Name</label>
                      <input type="text" id="contact-last-name" name="lastName" autoComplete="family-name" required aria-required="true" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-phone">Phone</label>
                    <input type="tel" id="contact-phone" name="phone" autoComplete="tel" required aria-required="true" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="email" autoComplete="email" required aria-required="true" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message">Tell us how we can help you get better</label>
                    <textarea id="contact-message" name="message" rows={5}></textarea>
                  </div>
                  {formState === 'error' && (
                    <p id="contact-form-error" role="alert" style={{ color: '#e05555', fontSize: '13px', marginBottom: '0.5rem', textAlign: 'center' }}>
                      There was an error sending your enquiry. Please try again.
                    </p>
                  )}
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
                  <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }} disabled={formState === 'submitting'} aria-describedby={formState === 'error' ? 'contact-form-error' : undefined}>
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
