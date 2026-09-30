import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a3d3d', color: 'rgba(199, 220, 217, 0.9)', padding: '6rem 2rem 2rem', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Logo Column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/assets/5f2247f763009cda43de03a7_Logo--Sheeba.svg" alt="Sheeba The Nutritionist" style={{ height: '40px', marginBottom: '1.5rem' }} />
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
            <a href="https://wa.me/6596566714" target="_blank" rel="noreferrer" style={{ color: 'rgba(199, 220, 217, 0.9)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.292 1.48 4.968 1.48 5.438 0 9.861-4.42 9.864-9.858.002-2.636-1.023-5.113-2.887-6.978C16.726 1.936 14.25 1.01 11.616 1.01c-5.442 0-9.867 4.42-9.87 9.86-.001 1.774.475 3.503 1.378 5.068l-.997 3.642 3.73-.978zM17.65 14.5c-.32-.16-1.89-.93-2.185-1.04-.3-.11-.515-.16-.73.16-.215.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.15-.14.32-.38.49-.57.16-.19.22-.32.32-.54.1-.21.05-.41-.02-.57-.08-.16-.73-1.76-1-2.42-.26-.63-.53-.55-.73-.56-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.41-.3.32-1.15 1.12-1.15 2.73s1.17 3.16 1.33 3.38c.16.22 2.3 3.52 5.58 4.94.78.34 1.39.54 1.87.7.79.25 1.5.22 2.07.13.63-.09 1.89-.77 2.15-1.48.27-.71.27-1.32.19-1.45-.08-.13-.3-.21-.62-.37z"/></svg>
              WhatsApp
            </a>
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
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://www.facebook.com/sheebanutritionist/" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            Facebook
          </a>
          <a href="https://www.youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.03 0 12 0 12s0 3.97-.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
          <span style={{ color: 'rgba(199, 220, 217, 0.2)' }}>|</span>
          <a href="https://www.linkedin.com/company/dropzone-fit/" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Dropzone LinkedIn
          </a>
          <a href="https://www.instagram.com/dropzonefit?igsh=bHJpNm1rdnQxZ2pw&utm_source=qr" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            Dropzone Instagram
          </a>
          <a href="https://www.tiktok.com/@dropzone_fit?_r=1&_t=ZS-94Gc2TxDKVQ" target="_blank" rel="noreferrer" style={{ color: '#34b5b2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.07.1 2.18-.04 3.25-.17v3.57c-1.39.37-2.83.3-4.2-.1-1.07-.32-2-.98-2.68-1.89-.01 2.37-.01 4.74-.01 7.11-.08 2.03-.78 4.09-2.25 5.51-1.42 1.42-3.41 2.21-5.43 2.23-2.31-.05-4.63-1.08-5.92-3.01-1.49-2.18-1.63-5.22-.38-7.53 1.07-2.02 3.19-3.49 5.48-3.73v3.74c-1.01.14-2.02.77-2.52 1.67-.65 1.13-.57 2.73.23 3.75.83.99 2.17 1.47 3.44 1.25 1.34-.17 2.49-1.25 2.78-2.57.17-1.12.11-2.26.12-3.39 0-3.83 0-7.66-.01-11.49z"/></svg>
            Dropzone TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
