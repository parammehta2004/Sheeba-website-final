import styles from "./LeafDecoration.module.css";

// We provide multiple variants of hand-drawn leaves.
// They use currentColor so we can tint them via CSS, or we can hardcode the Sage fill.

export default function LeafDecoration({ variant = "a", className = "" }) {
  
  // A beautiful, hand-drawn style Monstera / tropical leaf
  const leafA = (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <path 
        d="M50 95C50 95 20 80 15 50C10 20 35 5 50 5C65 5 90 20 85 50C80 80 50 95 50 95Z" 
        fill="var(--accent-sage)" 
        opacity="0.15"
      />
      <path 
        d="M50 95C50 95 25 80 20 50C15 30 35 15 50 10C65 15 85 30 80 50C75 80 50 95 50 95Z" 
        stroke="var(--accent-sage)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M50 95V10" 
        stroke="var(--accent-sage)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      {/* Hand-drawn veins */}
      <path d="M50 70C40 60 30 65 30 65" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 50C40 40 32 45 32 45" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 30C42 22 36 25 36 25" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      
      <path d="M50 75C60 65 70 70 70 70" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 55C60 45 68 50 68 50" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 35C58 27 64 30 64 30" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  // A slender, elegant willow/eucalyptus style leaf
  const leafB = (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <path 
        d="M50 95C50 95 35 70 35 40C35 10 50 5 50 5C50 5 65 10 65 40C65 70 50 95 50 95Z" 
        fill="var(--accent-sage)" 
        opacity="0.15"
      />
      <path 
        d="M50 95C50 95 35 70 35 40C35 10 50 5 50 5C50 5 65 10 65 40C65 70 50 95 50 95Z" 
        stroke="var(--accent-sage)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M50 95V5" 
        stroke="var(--accent-sage)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path d="M50 60L42 50" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 40L44 32" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 70L58 60" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 50L56 42" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {variant === "a" ? leafA : leafB}
    </div>
  );
}
