"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BotanicalGrow({ number, delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const paths = containerRef.current.querySelectorAll("path");
    
    // Set initial state for drawing animation
    gsap.set(paths, { strokeDasharray: 300, strokeDashoffset: 300, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.15,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: "1rem" }}>
      {/* Number in center */}
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "26px",
        color: "#FFE0DC",
        fontStyle: "italic",
        position: "relative",
        zIndex: 2,
        paddingTop: "5px"
      }}>
        {number}
      </div>
      
      {/* SVG Vine wrapping around */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1, overflow: "visible" }}
      >
        {/* Main curved vine */}
        <path 
          d="M 15 85 Q 50 110 85 50 T 60 10" 
          fill="none" 
          stroke="rgba(169, 189, 164, 0.6)" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        {/* Leaf 1 (Bottom Right) */}
        <path 
          d="M 50 87 Q 75 90 80 70 Q 60 70 50 87" 
          fill="rgba(169, 189, 164, 0.2)" 
          stroke="rgba(169, 189, 164, 0.8)" 
          strokeWidth="1" 
        />
        {/* Leaf 2 (Mid Right) */}
        <path 
          d="M 83 55 Q 100 40 110 45 Q 95 65 83 55" 
          fill="rgba(169, 189, 164, 0.2)" 
          stroke="rgba(169, 189, 164, 0.8)" 
          strokeWidth="1" 
        />
        {/* Leaf 3 (Top Left) */}
        <path 
          d="M 66 23 Q 40 5 35 15 Q 50 35 66 23" 
          fill="rgba(169, 189, 164, 0.2)" 
          stroke="rgba(169, 189, 164, 0.8)" 
          strokeWidth="1" 
        />
      </svg>
    </div>
  );
}
