"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BotanicalVinesConnector() {
  const vineRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const path = vineRef.current.querySelector(".vine-path");
    const leaves = vineRef.current.querySelectorAll(".vine-leaf");
    const length = path.getTotalLength();

    // Set initial dasharray for drawing animation
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(leaves, { scale: 0, opacity: 0, transformOrigin: "center" });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: vineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        }
      });

      tl.to(path, {
        strokeDashoffset: 0,
        ease: "none"
      }).to(leaves, {
        scale: 1,
        opacity: 0.65,
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(2)"
      }, "-=0.8");
    }, vineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={vineRef} style={{ position: "absolute", left: "-30px", top: "40px", bottom: "40px", width: "120px", pointerEvents: "none", zIndex: 0, opacity: 0.25 }}>
      <svg width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        {/* Main vine */}
        <path 
          className="vine-path"
          d="M 50 0 C 20 100, 80 200, 30 300 C -10 400, 100 500, 40 600 C -10 700, 90 750, 50 800" 
          fill="none" 
          stroke="var(--accent-sage)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        {/* Leaf details along the vine path */}
        <path className="vine-leaf" d="M 45 150 Q 30 140 25 155 Q 40 160 45 150 Z" fill="var(--accent-sage)" />
        <path className="vine-leaf" d="M 65 240 Q 80 230 85 245 Q 70 250 65 240 Z" fill="var(--accent-sage)" />
        <path className="vine-leaf" d="M 12 380 Q 0 370 -5 385 Q 10 390 12 380 Z" fill="var(--accent-sage)" />
        <path className="vine-leaf" d="M 75 480 Q 90 470 95 485 Q 80 490 75 480 Z" fill="var(--accent-sage)" />
        <path className="vine-leaf" d="M 32 620 Q 15 610 10 625 Q 30 630 32 620 Z" fill="var(--accent-sage)" />
        <path className="vine-leaf" d="M 70 710 Q 85 700 90 715 Q 75 720 70 710 Z" fill="var(--accent-sage)" />
      </svg>
    </div>
  );
}
