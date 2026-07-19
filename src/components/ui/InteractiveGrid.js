"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./InteractiveGrid.module.css";

// basePath lets each page define its own route prefix (e.g. /services, /treatment, /health-assessments)
export default function InteractiveGrid({ items, basePath = "/services", hideTags = false, columns = null }) {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveCard(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.gridContainer} style={columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : undefined}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.externalLink || `${basePath}/${item.slug}`}
          target={item.externalLink ? "_blank" : undefined}
          className={`${styles.gridCard} ${activeCard === index ? styles.activeCard : ""}`}
          onClick={(e) => {
            const isTouch = window.matchMedia("(hover: none)").matches;
            if (isTouch && activeCard !== index) {
              e.preventDefault();
              e.stopPropagation();
              setActiveCard(index);
            }
          }}
        >
          {/* Background Image */}
          <div
            className={styles.imageBackground}
            style={{ 
              backgroundImage: `url(${item.img})`,
              backgroundPosition: item.bgPosition || 'center',
              backgroundSize: item.bgSize || 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundColor: item.bgColor || 'transparent'
            }}
          />

          <div className={styles.defaultOverlay}>
            {!hideTags && (
              <span className={styles.categoryTag}>
                {item.type || "Protocol"}
              </span>
            )}
            <h3 className={styles.cardTitle}>{item.title}</h3>
          </div>

          {/* Hover reveal: deeper overlay with CTA */}
          <div className={styles.hoverOverlay}>
            <div className={styles.hoverInner}>
              <h3 className={styles.hoverTitle}>{item.title}</h3>
              <p className={styles.hoverBody}>{item.body}</p>
              <span className={styles.exploreButton}>
                {(() => {
                  const type = (item.type || "").toLowerCase();
                  const path = (basePath || "").toLowerCase();
                  if (type.includes("assessment") || path.includes("assessment")) {
                    return "Explore Assessment →";
                  }
                  if (type.includes("therapy") || path.includes("therapy")) {
                    return "Explore Therapy →";
                  }
                  return "Explore Protocol →";
                })()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
