import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a3d3d', color: 'rgba(199, 220, 217, 0.9)', padding: '6rem 2rem 2rem', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Logo Column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/assets/5f2247f763009cda43de03a7_Logo--Sheeba.svg" alt="Sheeba The Nutritionist" style={{ height: '40px', filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(199, 220, 217, 0.7)', lineHeight: '1.6' }}>
            Empowering your health through functional medicine and holistic naturopathy.
          </p>
        </div>

        {/* Company Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#34b5b2', marginBottom: '0.5rem' }}>Company</h4>
          <Link href="/about" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
          <Link href="/services" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>Services</Link>
          <Link href="/media-gallery" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>Media Gallery</Link>
          <Link href="/testimonial" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>Testimonials</Link>
        </div>

        {/* Legal & Support Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#34b5b2', marginBottom: '0.5rem' }}>Support</h4>
          <Link href="/contact-us" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>Contact Us</Link>
          <Link href="/faq" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>FAQ</Link>
          
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#34b5b2', margin: '1rem 0 0.5rem' }}>Legal</h4>
          <Link href="/t-cs" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>T&Cs</Link>
          <Link href="/data-privacy-policy" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', transition: 'color 0.3s' }}>Data & Privacy Policy</Link>
        </div>

        {/* Contact Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#34b5b2', marginBottom: '0.5rem' }}>Contact</h4>
          <a href="mailto:admin@sheebathenutritionist.com" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none' }}>admin@sheebathenutritionist.com</a>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="tel:+6596566714" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none' }}>+65 9656 6714</a>
            <span style={{ color: 'rgba(199, 220, 217, 0.3)' }}>|</span>
            <a href="https://wa.me/6596566714" target="_blank" rel="noreferrer" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none' }}>WhatsApp</a>
          </div>
          <p style={{ color: 'rgba(199, 220, 217, 0.7)', lineHeight: '1.6', marginTop: '0.5rem' }}>
            200 Cantonment Road, #06-01A, Southpoint, Singapore 089763
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(237, 232, 223, 0.2)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: 'rgba(199, 220, 217, 0.5)', fontSize: '12px' }}>
          Copyright 2026 Sheeba The Nutritionist Pte Ltd. All rights reserved. Built with finesse by the Admiral systems team.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://facebook.com/pg/sheebanutritionist/" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none' }}>Facebook</a>
          <a href="https://youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none' }}>YouTube</a>
        </div>
      </div>
    </footer>
  );
}
