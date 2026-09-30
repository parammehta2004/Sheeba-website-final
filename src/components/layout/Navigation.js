"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Navigation.module.css";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Therapies", href: "/therapies" },
      { name: "Health Assessments", href: "/health-assessments" }
    ]
  },
  { name: "Testimonials", href: "/testimonial" },
  { name: "Media", href: "/media-gallery" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
    <nav aria-label="Main" className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Sheeba The Nutritionist – Home">
          <img 
            src="/assets/5f2247f763009cda43de03a7_Logo--Sheeba.svg" 
            alt="Sheeba The Nutritionist" 
            className={styles.logoImage} 
          />
        </Link>
        
        <div className={styles.desktopLinks}>
          {links.map((link) => (
            link.dropdown ? (
              <div 
                key={link.name} 
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                onFocus={() => setActiveDropdown(link.name)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null);
                }}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.name} <span className={styles.chevron} aria-hidden="true">▾</span>
                </Link>
                {activeDropdown === link.name && (
                  <div className={styles.dropdownMenu}>
                    {link.dropdown.map(drop => (
                      <Link key={drop.name} href={drop.href} className={styles.dropdownItem}>
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            )
          ))}
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className={styles.hamburger} aria-hidden="true">
            <span className={isOpen ? styles.barOpen1 : ""} />
            <span className={isOpen ? styles.barOpen2 : ""} />
            <span className={isOpen ? styles.barOpen3 : ""} />
          </div>
        </button>
      </div>

      {/* inert while closed so the hidden links stay out of the tab order */}
      <div id="mobile-menu" className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`} inert={!isOpen}>
            <div className={styles.mobileNavContent}>
              {links.map((link, i) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className={styles.mobileDropdownGroup}>
                      <Link href={link.href} className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>{link.name}</Link>
                      <div className={styles.mobileDropdownItems}>
                        {link.dropdown.map(drop => (
                          <Link key={drop.name} href={drop.href} className={styles.mobileDropdownItem} onClick={() => setIsOpen(false)}>
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
    </nav>
    </header>
  );
}
