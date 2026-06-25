"use client";
import React from "react";
import Link from "next/link";
import styles from "./InteractiveGrid.module.css";

// basePath lets each page define its own route prefix (e.g. /services, /treatment, /health-assessments)
export default function InteractiveGrid({ items, basePath = "/services" }) {
  return (
    <div className={styles.gridContainer}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={`${basePath}/${item.slug}`}
          className={styles.gridCard}
        >
          {/* Background Image */}
          <div
            className={styles.imageBackground}
            style={{ backgroundImage: `url(${item.img})` }}
          />

          {/* Always-visible overlay: category tag + title + body */}
          <div className={styles.defaultOverlay}>
            <span className={styles.categoryTag}>
              {item.type || "Protocol"}
            </span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.body}</p>
          </div>

          {/* Hover reveal: deeper overlay with CTA */}
          <div className={styles.hoverOverlay}>
            <div className={styles.hoverInner}>
              <h3 className={styles.hoverTitle}>{item.title}</h3>
              <p className={styles.hoverBody}>{item.body}</p>
              <span className={styles.exploreButton}>Explore Protocol →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
