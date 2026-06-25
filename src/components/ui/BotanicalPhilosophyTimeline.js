"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeafDecoration from "./LeafDecoration";
import styles from "./BotanicalPhilosophyTimeline.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BotanicalPhilosophyTimeline({ items }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const timeoutId = setTimeout(() => {
      const stemPathEl = document.querySelector(".timeline-stem-path");
      if (!stemPathEl) return;
      const pathLength = stemPathEl.getTotalLength();

      const ctx = gsap.context(() => {
        // 1. Draw the central vine downwards precisely synced with scroll
        gsap.set(".timeline-stem-path", { strokeDasharray: pathLength });
        gsap.from(".timeline-stem-path", {
          strokeDashoffset: pathLength,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 85%",
            scrub: true,
          },
        });

        // 2. Animate elements per row (Leaf pop, line extend, card fade)
        const rows = gsap.utils.toArray(".timeline-row");
        const leaves = gsap.utils.toArray(".timeline-leaf");
        
        rows.forEach((row, i) => {
          const card = row.querySelector(".timeline-card");
          const leaf = leaves[i];
          const lineSvg = row.querySelector(".timeline-line");

          const isLeft = i % 2 === 0;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 85%", // Syncs exactly with container start
              end: "top 55%",
              scrub: true,
            },
          });

          if (leaf) {
            // Scale the wrapper
            tl.from(leaf, { scale: 0, ease: "back.out(1.5)" }, 0);
            
            // Oscillate the inner content AFTER it has scaled in
            const leafInner = leaf.querySelector(".timeline-leaf-inner");
            if (leafInner) {
              ScrollTrigger.create({
                trigger: row,
                start: "top 55%", // Exact moment the scrub timeline finishes
                onEnter: () => {
                  gsap.to(leafInner, {
                    rotation: isLeft ? 15 : -15, // Significantly increased amplitude
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                    overwrite: "auto"
                  });
                },
                onLeaveBack: () => {
                  gsap.killTweensOf(leafInner);
                  gsap.set(leafInner, { rotation: 0 });
                }
              });
            }
          }
          if (lineSvg) {
            // Unmask the wrapper div by animating its width
            const wrapper = row.querySelector(".timeline-line-wrapper");
            if (wrapper) {
              tl.fromTo(wrapper, { width: 0 }, { width: 152, ease: "power1.inOut" }, 0);
            }
          }
          if (card) {
            tl.fromTo(
              card,
              { opacity: 0, x: isLeft ? 30 : -30 },
              { opacity: 1, x: 0, ease: "power2.out" },
              0.1
            );
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [items]);

  const height = items.length * 350 + 100;

  // Generative Math: Calculate smooth sine wave stem perfectly synced with 350px rows
  let stemPath = `M 70 0 `;
  for (let y = 0; y <= height; y += 5) {
    const x = 70 + Math.sin((y * Math.PI) / 350) * 50;
    stemPath += `L ${x} ${y} `;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Central Stem & Leaves SVG layer */}
      <svg
        className={styles.stemSvg}
        viewBox={`0 0 140 ${height}`}
        preserveAspectRatio="none"
        style={{ height: `${height}px` }}
      >
        <defs>
          <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b89a6c" />
            <stop offset="100%" stopColor="#a9bda4" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8da499" />
            <stop offset="100%" stopColor="#dcebe9" />
          </linearGradient>
        </defs>

        <path
          className="timeline-stem-path"
          d={stemPath}
          fill="none"
          stroke="url(#vineGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Leaves are rendered as HTML overlays to use the existing LeafDecoration component */}
      </svg>

      {/* HTML Leaves Overlay */}
      {items.map((_, i) => {
        const yOffset = i * 350 + 175; // Apex exactly matches row center
        const isLeftCard = i % 2 === 0;
        // Apex x is at 120 (right) or 20 (left) inside the 140px SVG centered on page.
        // So global left is 50% - 70px + xOffset
        const leftPos = isLeftCard ? "calc(50% + 50px)" : "calc(50% - 50px)";
        
        return (
          <div
            key={`html-leaf-${i}`}
            className="timeline-leaf"
            style={{
              position: "absolute",
              top: `${yOffset}px`,
              left: leftPos,
              width: "140px", // Much bigger
              height: "140px",
              // Tilt down-outward (110 degrees)
              transform: `translate(-50%, -95%) rotate(${isLeftCard ? 110 : -110}deg)`,
              transformOrigin: "50% 95%",
              zIndex: 3
            }}
          >
            <div className="timeline-leaf-inner" style={{ width: "100%", height: "100%", transformOrigin: "50% 95%" }}>
              <LeafDecoration variant={isLeftCard ? "a" : "b"} />
            </div>
          </div>
        );
      })}

      {/* HTML Content Overlay */}
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div key={index} className={`${styles.row} timeline-row`}>
            {/* Left Column */}
            <div className={`${styles.cardContainer} ${styles.leftCard}`}>
              {isLeft && (
                <div className={`${styles.timelineCard} timeline-card`}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.text}</p>
                </div>
              )}
            </div>

            {/* Connection Lines Node */}
            <div className={styles.connectionContainer}>
              <div
                className={`timeline-line-wrapper ${isLeft ? styles.leftConnection : styles.rightConnection}`}
                style={{ overflow: "hidden", height: "40px", top: "50%", transform: isLeft ? "translate(-100%, -50%)" : "translateY(-50%)" }}
              >
                <svg
                  className={`timeline-line ${isLeft ? styles.svgLeft : styles.svgRight}`}
                  viewBox="0 0 152 40"
                  preserveAspectRatio="none"
                  style={{ position: "absolute", top: 0, width: "152px", height: "40px" }}
                >
                  <path
                    d={isLeft ? "M 152 20 Q 76 40 0 20" : "M 0 20 Q 76 40 152 20"}
                    fill="none"
                    stroke="#b89a6c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>
            </div>

            {/* Right Column */}
            <div className={`${styles.cardContainer} ${styles.rightCard}`}>
              {!isLeft && (
                <div className={`${styles.timelineCard} timeline-card`}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.text}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
