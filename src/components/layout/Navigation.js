"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
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
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.name} <span className={styles.chevron}>▾</span>
                </Link>
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      className={styles.dropdownMenu}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.dropdown.map(drop => (
                        <Link key={drop.name} href={drop.href} className={styles.dropdownItem}>
                          {drop.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            )
          ))}
        </div>

        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <div className={styles.hamburger}>
            <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.mobileMenu}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
