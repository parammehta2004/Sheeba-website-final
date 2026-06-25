"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const content = (
    <motion.button
      className={`${styles.btn} ${styles[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span>{children}</span>
    </motion.button>
  );

  if (href) {
    return <Link href={href} legacyBehavior={false}>{content}</Link>;
  }

  return content;
}
