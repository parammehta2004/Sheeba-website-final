"use client";
import React from "react";

export default function LeafCorner({ position = "top-right" }) {
  const isTopRight = position === "top-right";
  
  const styles = isTopRight ? {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    opacity: 0.18,
    pointerEvents: "none",
    zIndex: 1,
    transform: "rotate(0deg)"
  } : {
    position: "absolute",
    bottom: "-5px",
    left: "-5px",
    opacity: 0.18,
    pointerEvents: "none",
    zIndex: 1,
    transform: "rotate(180deg)"
  };

  return (
    <div style={styles}>
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none">
        {/* Organic leaf cluster */}
        <path d="M100,0 C80,20 60,10 50,30 C40,50 45,70 30,80 C20,90 0,100 0,100" stroke="var(--accent-sage)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50,30 C60,20 75,25 70,10 C65,0 55,10 50,30 Z" fill="var(--accent-sage)" opacity="0.6" />
        <path d="M30,80 C40,70 55,75 50,60 C45,50 35,60 30,80 Z" fill="var(--accent-sage)" opacity="0.6" />
        <path d="M70,45 C80,35 90,40 85,25 C80,15 70,25 70,45 Z" fill="var(--accent-sage)" opacity="0.5" />
      </svg>
    </div>
  );
}
