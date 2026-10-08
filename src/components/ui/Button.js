"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Button.module.css";

const MotionLink = motion.create(Link);

// Next's <Link> ignores clicks to the hash already in the URL, so in-page
// anchors scroll explicitly and work on every click. Pages running Lenis expose
// it as window.lenis; native smooth scrolling would be cancelled by its loop.
function scrollToHash(event, href, onClick) {
  onClick?.(event);
  if (event.defaultPrevented) return;
  const target = document.getElementById(decodeURIComponent(href.slice(1)));
  if (!target) return;
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.lenis) {
    // Refresh Lenis' cached scroll limit; content below may have grown since it measured.
    window.lenis.resize();
    window.lenis.scrollTo(target, { immediate: reduceMotion });
  } else {
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }
  if (window.location.hash !== href) window.history.pushState(null, "", href);
}

export default function Button({ href, children, variant = "primary", className = "", onClick, ...props }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;
  const inner = <span>{children}</span>;

  if (href?.startsWith("#")) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => scrollToHash(e, href, onClick)}
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  if (href) {
    return (
      <MotionLink href={href} className={classes} whileTap={{ scale: 0.97 }} onClick={onClick} {...props}>
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.button className={classes} whileTap={{ scale: 0.97 }} onClick={onClick} {...props}>
      {inner}
    </motion.button>
  );
}
