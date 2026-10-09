"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { canonicalServicePath } from "@/lib/seo";
import styles from "./InteractiveGrid.module.css";

// Cards always link to the internal detail page (its canonical path when known,
// otherwise basePath/slug). An item's externalLink is shown as a CTA on that
// detail page, never used as the card href, so every detail page stays crawlable.
// titleLevel sets the card title heading (default h3, under a section h2); pass 2
// when the grid sits directly under the page h1 so heading levels don't skip.
//
// balanced: spreads the cards over as few rows as the breakpoint allows and lets
// the cards in shorter rows widen to fill them, so there is never a lone orphan
// card (e.g. 7 cards -> 4+3 on desktop, 3+2+2 on tablet, 2+2+2+1 on phones).
// Spans are computed from items.length at render time, so the server HTML already
// has the final layout (no client-side reflow / CLS).
const BALANCED_MAX_COLUMNS = { sm: 2, md: 3, lg: 4 };

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

function balancedLayout(count, maxCols) {
  if (!count) return { cols: 1, spans: [] };
  const rows = Math.ceil(count / Math.min(maxCols, count));
  const base = Math.floor(count / rows);
  const extra = count % rows; // the first `extra` rows hold one more card
  const rowSizes = Array.from({ length: rows }, (_, r) => base + (r < extra ? 1 : 0));
  const cols = [...new Set(rowSizes)].reduce((acc, n) => (acc * n) / gcd(acc, n), 1);
  const spans = rowSizes.flatMap((size) => Array(size).fill(cols / size));
  return { cols, spans };
}

export default function InteractiveGrid({ items, basePath = "/services", hideTags = false, columns = null, titleLevel = 3, balanced = false }) {
  const TitleTag = `h${titleLevel}`;
  const [activeCard, setActiveCard] = useState(null);

  const layouts = balanced
    ? Object.fromEntries(Object.entries(BALANCED_MAX_COLUMNS).map(([bp, max]) => [bp, balancedLayout(items.length, max)]))
    : null;

  let containerStyle;
  if (layouts) {
    containerStyle = { "--cols-sm": layouts.sm.cols, "--cols-md": layouts.md.cols, "--cols-lg": layouts.lg.cols };
  } else if (columns) {
    containerStyle = { gridTemplateColumns: `repeat(${columns}, 1fr)` };
  }

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveCard(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={`${styles.gridContainer} ${balanced ? styles.balanced : ""}`} style={containerStyle}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={canonicalServicePath(item.slug) || `${basePath}/${item.slug}`}
          className={`${styles.gridCard} ${activeCard === index ? styles.activeCard : ""} ${layouts && layouts.sm.spans[index] === layouts.sm.cols ? styles.fullRowSm : ""}`}
          style={layouts ? { "--span-sm": layouts.sm.spans[index], "--span-md": layouts.md.spans[index], "--span-lg": layouts.lg.spans[index] } : undefined}
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
            <TitleTag className={styles.cardTitle}>{item.title}</TitleTag>
          </div>

          {/* Hover reveal: deeper overlay with CTA. Its title repeats the card
              title visually, so it is not a heading and is hidden from AT. */}
          <div className={styles.hoverOverlay}>
            <div className={styles.hoverInner}>
              <p className={styles.hoverTitle} aria-hidden="true">{item.title}</p>
              <p className={styles.hoverBody}>{item.body}</p>
              <span className={styles.exploreButton}>
                Explore{" "}
                {/* The noun is dropped visually on narrow balanced cards so the pill fits. */}
                <span className={styles.exploreNoun}>
                  {(() => {
                    const type = (item.type || "").toLowerCase();
                    const path = (basePath || "").toLowerCase();
                    if (type.includes("assessment") || path.includes("assessment")) return "Assessment ";
                    if (type.includes("therapy") || path.includes("therapy")) return "Therapy ";
                    return "Protocol ";
                  })()}
                </span>
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
