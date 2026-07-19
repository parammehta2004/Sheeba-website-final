"use client";
import React from 'react';
import Link from 'next/link';
import styles from './RotatingHexagon.module.css';

const ASSESSMENTS = [
  { 
    slug: "metabolic-mapping", 
    title: "Metabolic Mapping", 
    img: "/assets/mmcard.jpg",
    bgPosition: "85% center"
  },

  { 
    slug: "dutch-test", 
    title: "DUTCH Test", 
    img: "/assets/dutch.png",
    bgSize: "85%",
    bgColor: "#3e5548"
  },
  { 
    slug: "hair-tissue-mineral-analysis", 
    title: "Hair Analysis", 
    img: "/assets/htmt.jpg" 
  },
  { 
    slug: "compatibility-testing", 
    title: "Food Compatibility", 
    img: "/assets/fct.jpg",
    bgPosition: "95% center"
  },
  { 
    slug: "e4l-nutri-energetic-system", 
    title: "E4L Bioenergetic", 
    img: "/assets/e4l%20nes.jpg",
    bgPosition: "97% center"
  }
];

export default function RotatingHexagon() {
  const [radius, setRadius] = React.useState(42);
  const nodesCount = ASSESSMENTS.length;
  const [activeNode, setActiveNode] = React.useState(null);

  React.useEffect(() => {
    const handleOutsideClick = () => {
      setActiveNode(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setRadius(27);
      } else if (window.innerWidth <= 768) {
        setRadius(31);
      } else {
        setRadius(35);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {/* Spinner spins clockwise via GPU accelerated CSS */}
      <div className={styles.spinner}>
        
        {/* Organic Green Connecting Lines */}
        <svg className={styles.linesOverlay} viewBox="0 0 100 100">
          <g transform="translate(50, 50)">
            {ASSESSMENTS.map((_, i) => {
              const angle = (i * 360) / nodesCount;
              const rad = (angle - 90) * (Math.PI / 180);
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <line 
                  key={`line-${i}`} 
                  x1="0" 
                  y1="0" 
                  x2={x} 
                  y2={y} 
                  className={styles.line} 
                />
              );
            })}
          </g>
        </svg>

        {/* Nodes positioned absolutely inside spinner, counter-spun to remain upright */}
        {ASSESSMENTS.map((item, i) => {
          const angle = (i * 360) / nodesCount;
          
          return (
            <div 
              key={i} 
              className={styles.nodeWrapper}
              style={{
                left: `${50 + Math.cos((angle - 90) * (Math.PI / 180)) * radius}%`,
                top: `${50 + Math.sin((angle - 90) * (Math.PI / 180)) * radius}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Link 
                href={`/health-assessments/${item.slug}`} 
                className={`${styles.nodeInner} ${activeNode === i ? styles.activeInner : ''}`}
                style={{
                  backgroundImage: `url("${item.img}")`,
                  backgroundSize: item.bgSize || 'cover',
                  backgroundPosition: item.bgPosition || 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: item.bgColor || 'transparent'
                }}
                onClick={(e) => {
                  const isMobileDevice = window.innerWidth <= 768 || window.matchMedia("(hover: none)").matches;
                  if (isMobileDevice && activeNode !== i) {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveNode(i);
                  }
                }}
              >
                <div className={styles.tooltip}>
                  {item.title}
                  <span className={styles.tapIndicator}>Tap to view →</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Center Lotus Visual */}
      <div className={styles.centerCore}>
        <img 
          src="/assets/assescentre_clean.png" 
          alt="Lotus Wellness" 
          className={styles.forestImg}
        />
      </div>
    </div>
  );
}
