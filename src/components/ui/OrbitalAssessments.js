"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./OrbitalAssessments.module.css";
import Link from "next/link";

// Premium, hand-crafted 3D-ish vector (SVG) icons matching the Evergreen aesthetic
const PillIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="pill3dGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8eb995" />
        <stop offset="50%" stopColor="#3d6c44" />
        <stop offset="100%" stopColor="#1a3d21" />
      </linearGradient>
      <linearGradient id="pill3dGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffcf0" />
        <stop offset="100%" stopColor="#c5d3b6" />
      </linearGradient>
      <filter id="pill3dShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#112118" floodOpacity="0.32" />
      </filter>
    </defs>
    <g transform="rotate(45 12 12)" filter="url(#pill3dShadow)">
      {/* Left half */}
      <path d="M6 9h6v6H6a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3z" fill="url(#pill3dGrad1)" />
      {/* Right half */}
      <path d="M12 9h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-6z" fill="url(#pill3dGrad2)" />
      {/* Divider */}
      <rect x="11.5" y="8.8" width="1" height="6.4" fill="#5a7a5d" rx="0.5" opacity="0.6" />
      {/* Inner highlight (3D gleam) */}
      <path d="M6.5 10c1.5-0.8 3-0.8 4.5 0" stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" opacity="0.65" />
      <path d="M13 10c1.5-0.8 3-0.8 4.5 0" stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" opacity="0.65" />
    </g>
  </svg>
);

const MoleculeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="molSphereGreen" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#a7cda9" />
        <stop offset="65%" stopColor="#3d6c44" />
        <stop offset="100%" stopColor="#132a18" />
      </radialGradient>
      <radialGradient id="molSphereGold" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffe49e" />
        <stop offset="65%" stopColor="#c58e45" />
        <stop offset="100%" stopColor="#7c4e18" />
      </radialGradient>
      <linearGradient id="molBond" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffff3" />
        <stop offset="100%" stopColor="#a9bda4" />
      </linearGradient>
      <filter id="molShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#112118" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* Bonds */}
    <g stroke="url(#molBond)" strokeWidth="2.5" strokeLinecap="round" filter="url(#molShadow)">
      <line x1="12" y1="5" x2="18" y2="8.5" />
      <line x1="18" y1="8.5" x2="18" y2="15.5" />
      <line x1="18" y1="15.5" x2="12" y2="19" />
      <line x1="12" y1="19" x2="6" y2="15.5" />
      <line x1="6" y1="15.5" x2="6" y2="8.5" />
      <line x1="6" y1="8.5" x2="12" y2="5" />
      {/* Center bonds */}
      <line x1="12" y1="12" x2="12" y2="5" strokeDasharray="1 1" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="6" y2="15.5" strokeDasharray="1 1" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="18" y2="15.5" strokeDasharray="1 1" strokeWidth="1.5" />
    </g>
    {/* Spheres */}
    <g filter="url(#molShadow)">
      <circle cx="12" cy="5" r="3.2" fill="url(#molSphereGreen)" />
      <circle cx="18" cy="8.5" r="2.5" fill="url(#molSphereGold)" />
      <circle cx="18" cy="15.5" r="2.5" fill="url(#molSphereGreen)" />
      <circle cx="12" cy="19" r="3.2" fill="url(#molSphereGold)" />
      <circle cx="6" cy="15.5" r="2.5" fill="url(#molSphereGreen)" />
      <circle cx="6" cy="8.5" r="2.5" fill="url(#molSphereGold)" />
      <circle cx="12" cy="12" r="2.0" fill="url(#molSphereGreen)" />
    </g>
  </svg>
);

const DnaIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="dnaStr1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a9cda4" />
        <stop offset="100%" stopColor="#1e4620" />
      </linearGradient>
      <linearGradient id="dnaStr2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffe3ab" />
        <stop offset="100%" stopColor="#b87b4c" />
      </linearGradient>
      <filter id="dna3dShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="1.5" stdDeviation="1.2" floodColor="#112118" floodOpacity="0.28" />
      </filter>
    </defs>
    {/* Rungs */}
    <g stroke="#757664" strokeWidth="2.5" strokeLinecap="round" opacity="0.45">
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="8.5" y1="8" x2="15.5" y2="16" />
      <line x1="8.5" y1="16" x2="15.5" y2="8" />
    </g>
    {/* Small rung connectors */}
    <circle cx="12" cy="12" r="1" fill="#fffff3" />
    <circle cx="12" cy="8.5" r="1" fill="#fffff3" />
    <circle cx="12" cy="15.5" r="1" fill="#fffff3" />
    
    {/* Helix Curves */}
    {/* Under curve */}
    <path d="M3 12c3-8 5-8 9 0s6 8 9 0" fill="none" stroke="url(#dnaStr2)" strokeWidth="3.2" strokeLinecap="round" />
    {/* Over curve with shadow for 3D overlap */}
    <path d="M3 12c3 8 5 8 9 0s6-8 9 0" fill="none" stroke="url(#dnaStr1)" strokeWidth="3.2" strokeLinecap="round" filter="url(#dna3dShadow)" />
  </svg>
);

const UserCheckIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="usrHead" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#eaf5eb" />
        <stop offset="60%" stopColor="#7fa884" />
        <stop offset="100%" stopColor="#2e5c3c" />
      </radialGradient>
      <linearGradient id="usrBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a9bda4" />
        <stop offset="100%" stopColor="#3d573f" />
      </linearGradient>
      <linearGradient id="usrCheck" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe699" />
        <stop offset="100%" stopColor="#b87b4c" />
      </linearGradient>
      <filter id="usrShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0.8" dy="1.8" stdDeviation="1" floodColor="#112118" floodOpacity="0.28" />
      </filter>
    </defs>
    {/* Torso */}
    <path d="M14 18.5v-1a2.8 2.8 0 0 0-2.8-2.8H4.8A2.8 2.8 0 0 0 2 17.5v1" fill="none" stroke="url(#usrBody)" strokeWidth="2.8" strokeLinecap="round" filter="url(#usrShadow)" />
    {/* Sphere Head */}
    <circle cx="8" cy="7.5" r="3.2" fill="url(#usrHead)" filter="url(#usrShadow)" />
    {/* Checkmark */}
    <polyline points="15 12 17.2 14.5 22 9.5" fill="none" stroke="url(#usrCheck)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#usrShadow)" />
  </svg>
);

const ICON_COMPONENTS = {
  "functional-blood-chemistry-analysis": PillIcon,
  "dutch-test": MoleculeIcon,
  "hair-tissue-mineral-analysis": DnaIcon,
  "compatibility-testing": UserCheckIcon,
};

export default function OrbitalAssessments({ assessments }) {
  const safeAssessments = (assessments || []).map((item, idx) => {
    const id = item.id !== undefined ? item.id : (idx + 1);
    const energy = item.energy !== undefined ? item.energy : 80;
    // Inter-relate nodes: 1 <-> 2, 3 and 4 <-> 2, 3 for active connection pulses
    let defaultRelatedIds = [];
    if (id === 1) defaultRelatedIds = [2, 3];
    else if (id === 2) defaultRelatedIds = [1, 4];
    else if (id === 3) defaultRelatedIds = [1, 4];
    else if (id === 4) defaultRelatedIds = [2, 3];
    
    const relatedIds = item.relatedIds !== undefined ? item.relatedIds : defaultRelatedIds;
    return {
      ...item,
      id,
      energy,
      relatedIds
    };
  });

  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);

  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  // ── Exact match: setInterval at 50ms, +0.3° per tick ──
  useEffect(() => {
    let rotationTimer;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  // Click outside to close expanded node card
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!activeNodeId) return;
      const activeNodeEl = nodeRefs.current[activeNodeId];
      if (activeNodeEl && activeNodeEl.contains(e.target)) {
        return;
      }
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [activeNodeId]);

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedIds = (itemId) => {
    const item = safeAssessments.find((a) => a.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    return getRelatedIds(activeNodeId).includes(itemId);
  };

  const centerViewOnNode = (nodeId) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = safeAssessments.findIndex((item) => item.id === nodeId);
    const totalNodes = safeAssessments.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const related = getRelatedIds(id);
        const newPulse = {};
        related.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 280; // Larger orbit radius (was 220)
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = 1; // Always fully opaque for high visibility

    return { x, y, angle, zIndex, opacity };
  };

  const getStepLabel = (index) => {
    const labels = ["Step 01", "Step 02", "Step 03", "Step 04"];
    return labels[index] || `Step ${index + 1}`;
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className={styles.innerWrapper}>
        <div
          className={styles.orbitArea}
          ref={orbitRef}
          style={{ transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)` }}
        >

          {/* ── Center orb — botanical logo, large ── */}
          <div className={styles.centerOrb}>
            <div className={styles.pingRing1}></div>
            <div className={styles.pingRing2}></div>
            <div className={styles.orbCore}>
              <img
                src="/assets/5f227743112014563c419297_Spring_6.svg"
                alt="Botanical"
                className={styles.orbLogo}
              />
            </div>
          </div>

          {/* ── Orbit ring ── */}
          <div className={styles.orbitRing}></div>

          {/* ── Nodes ── */}
          {safeAssessments.map((item, index) => {
            const position = calculateNodePosition(index, safeAssessments.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className={styles.nodeWrapper}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Radial halo glow */}
                <div
                  className={`${styles.halo} ${isPulsing ? styles.haloPulsing : ""}`}
                  style={{
                    width: `${item.energy * 0.5 + 60}px`,
                    height: `${item.energy * 0.5 + 60}px`,
                    left: `-${(item.energy * 0.5 + 60 - 60) / 2}px`,
                    top: `-${(item.energy * 0.5 + 60 - 60) / 2}px`,
                  }}
                />

                {/* Node circle with assessment image icon */}
                <div
                className={[
                  styles.nodeCircle,
                  isExpanded ? styles.nodeExpanded :
                  isRelated ? styles.nodeRelated :
                  styles.nodeIdle,
                ].join(" ")}
              >
                {(() => {
                  const IconComponent = ICON_COMPONENTS[item.slug];
                  return IconComponent ? (
                    <IconComponent className={styles.nodeIconSvg} />
                  ) : null;
                })()}
              </div>

                {/* Label beneath node */}
                <div className={`${styles.nodeLabel} ${isExpanded ? styles.nodeLabelHidden : ""}`}>
                  {item.title.length > 22 ? item.title.substring(0, 22) + "…" : item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div
                    className={styles.card}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={styles.cardConnector}></div>

                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardBody}>{item.body}</p>

                    <Link href={`/services/${item.slug}`} className={styles.cardLink}>
                      Read More →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className={styles.hint}>Click any node to explore</p>
    </div>
  );
}
