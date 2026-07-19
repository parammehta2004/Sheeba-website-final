"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeafDecoration from "./LeafDecoration";
import styles from "./BotanicalPhilosophyTimeline.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BotanicalPhilosophyTimeline({ items }) {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const gsapCtxRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // rowHeights[i] = pixel height of row i after layout
  const [rowHeights, setRowHeights] = useState(() => items.map(() => 0));

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure actual rendered row heights
  const measureHeights = useCallback(() => {
    const measured = rowRefs.current.map((el) => el?.offsetHeight || 300);
    setRowHeights(measured);
  }, []);

  // Measure heights after render + on resize
  useEffect(() => {
    if (!mounted) return;
    // Small delay to let CSS settle
    const t = setTimeout(measureHeights, 80);
    window.addEventListener("resize", measureHeights);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measureHeights);
    };
  }, [measureHeights, isMobile, mounted]);



  // GSAP — only run when heights are populated
  useEffect(() => {
    const anyZero = rowHeights.some((h) => h === 0);
    if (anyZero || !containerRef.current) return;

    // Kill previous ctx before re-creating
    if (gsapCtxRef.current) {
      gsapCtxRef.current.revert();
      gsapCtxRef.current = null;
    }

    const timeoutId = setTimeout(() => {
      const stemPathEl = containerRef.current?.querySelector(".timeline-stem-path");
      if (!stemPathEl) return;
      const pathLength = stemPathEl.getTotalLength();

      const ctx = gsap.context(() => {
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

        const rows = gsap.utils.toArray(".timeline-row");
        const leaves = gsap.utils.toArray(".timeline-leaf");

        rows.forEach((row, i) => {
          const card = row.querySelector(".timeline-card");
          const leaf = leaves[i];
          const isLeft = i % 2 === 0;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 55%",
              scrub: isMobile ? 1 : true,
            },
          });

          if (leaf) {
            tl.from(leaf, { scale: 0, ease: "back.out(1.5)" }, 0);
            const leafInner = leaf.querySelector(".timeline-leaf-inner");
            if (leafInner) {
              ScrollTrigger.create({
                trigger: row,
                start: "top 55%",
                onEnter: () => {
                  gsap.to(leafInner, {
                    rotation: isLeft ? 15 : -15,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                    overwrite: "auto",
                  });
                },
                onLeaveBack: () => {
                  gsap.killTweensOf(leafInner);
                  gsap.set(leafInner, { rotation: 0 });
                },
              });
            }
          }

          const wrapper = row.querySelector(".timeline-line-wrapper");
          if (wrapper) {
            tl.fromTo(wrapper, { width: 0 }, { width: isMobile ? 25 : 152, ease: "power1.inOut" }, 0);
          }

          if (card) {
            // Trigger card reveal ONCE when entering viewport; remains visible on reverse scroll
            gsap.fromTo(
              card,
              { opacity: 0, y: isMobile ? 25 : (isLeft ? 15 : -15) },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        });
      }, containerRef);

      gsapCtxRef.current = ctx;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
        gsapCtxRef.current = null;
      }
    };
  }, [rowHeights, isMobile]);

  // ── Derived geometry from measured heights ──
  const stemWidth = isMobile ? 30 : 140;
  const amplitude = isMobile ? 0 : 45;
  const centerX = isMobile ? 15 : 70;
  const leafSize = isMobile ? 70 : 140;

  // Cumulative offsets: rowOffsets[i] = y-start of row i
  const rowOffsets = rowHeights.reduce((acc, h, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + rowHeights[i - 1]);
    return acc;
  }, []);
  const totalHeight = rowOffsets.length
    ? rowOffsets[rowOffsets.length - 1] + rowHeights[rowHeights.length - 1] + 40
    : 100;

  // Build SVG sine-wave path — one half-sine per row so path is always continuous
  let stemPath = `M ${centerX} 0 `;
  for (let i = 0; i < items.length; i++) {
    const rowH = rowHeights[i] || 300;
    const yStart = rowOffsets[i] || 0;
    const dir = i % 2 === 0 ? -1 : 1; // Even rows wind left (-1), odd rows wind right (+1)
    for (let step = 5; step <= rowH; step += 5) {
      const y = yStart + step;
      const x = centerX + Math.sin((step * Math.PI) / rowH) * amplitude * dir;
      stemPath += `L ${x} ${y} `;
    }
  }

  if (!mounted) {
    return <div className={styles.container} ref={containerRef} style={{ minHeight: "400px" }} />;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Central Stem SVG */}
      <svg
        className={styles.stemSvg}
        viewBox={`0 0 ${stemWidth} ${totalHeight}`}
        preserveAspectRatio="none"
        style={{ height: `${totalHeight}px`, width: `${stemWidth}px` }}
      >
        <defs>
          <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b89a6c" />
            <stop offset="100%" stopColor="#a9bda4" />
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
      </svg>

      {/* HTML Leaf Overlays — precisely at the midpoint of each row on the vine */}
      {items.map((_, i) => {
        const rowH = rowHeights[i] || 300;
        const yMid = (rowOffsets[i] || 0) + rowH / 2;
        const isLeftCard = i % 2 === 0;
        const dir = isLeftCard ? -1 : 1;
        // On mobile: vine is straight/gentle at centerX (no amplitude offset needed)
        // On desktop: vine alternates at centerX + amplitude * dir
        const xOnVine = isMobile ? centerX : centerX + amplitude * dir;
        const leftPos = isMobile 
          ? `calc(${xOnVine}px + 0.25rem)` 
          : `calc(50% - ${stemWidth / 2}px + ${xOnVine}px)`;

        return (
          <div
            key={`leaf-${i}`}
            className="timeline-leaf"
            style={{
              position: "absolute",
              top: `${yMid}px`,
              left: leftPos,
              width: `${leafSize}px`,
              height: `${leafSize}px`,
              transform: `translate(-50%, -95%) rotate(${isMobile ? -90 : (isLeftCard ? 110 : -110)}deg)`,
              transformOrigin: "50% 95%",
              zIndex: 3,
            }}
          >
            <div
              className="timeline-leaf-inner"
              style={{ width: "100%", height: "100%", transformOrigin: "50% 95%" }}
            >
              <LeafDecoration variant={isLeftCard ? "a" : "b"} />
            </div>
          </div>
        );
      })}

      {/* Row Content */}
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            ref={(el) => { rowRefs.current[index] = el; }}
            className={`${styles.row} timeline-row`}
          >
            {/* Left card slot */}
            <div className={`${styles.cardContainer} ${styles.leftCard}`}>
              {!isMobile && isLeft && (
                <div className={`${styles.timelineCard} timeline-card`}>
                  {item.logoSrc && (
                    item.logoLink ? (
                      <a href={item.logoLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: "0.8rem" }} className={styles.logoLinkWrapper}>
                        <img 
                          src={item.logoSrc} 
                          alt={item.logoAlt || "Logo"} 
                          style={{ height: "35px", width: "auto", display: "block" }} 
                        />
                      </a>
                    ) : (
                      <img 
                        src={item.logoSrc} 
                        alt={item.logoAlt || "Logo"} 
                        style={{ height: "35px", width: "auto", marginBottom: "0.8rem", display: "block" }} 
                      />
                    )
                  )}
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.text}</p>
                </div>
              )}
            </div>

            {/* Centre vine column */}
            <div className={styles.connectionContainer}>
              <div
                className={`timeline-line-wrapper ${isLeft ? styles.leftConnection : styles.rightConnection}`}
                style={{
                  overflow: "hidden",
                  height: "40px",
                  top: "50%",
                  transform: isLeft ? "translate(-100%, -50%)" : "translateY(-50%)",
                }}
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

            {/* Right card slot */}
            <div className={`${styles.cardContainer} ${styles.rightCard}`}>
              {(isMobile || !isLeft) && (
                <div className={`${styles.timelineCard} timeline-card`}>
                  {item.logoSrc && (
                    item.logoLink ? (
                      <a href={item.logoLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: "0.8rem" }} className={styles.logoLinkWrapper}>
                        <img 
                          src={item.logoSrc} 
                          alt={item.logoAlt || "Logo"} 
                          style={{ height: "35px", width: "auto", display: "block" }} 
                        />
                      </a>
                    ) : (
                      <img 
                        src={item.logoSrc} 
                        alt={item.logoAlt || "Logo"} 
                        style={{ height: "35px", width: "auto", marginBottom: "0.8rem", display: "block" }} 
                      />
                    )
                  )}
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
