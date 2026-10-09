"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navigation from "@/components/layout/Navigation";
import reviewsData from "@/data/reviews.json";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Runtime classification function
function getReviewCategory(text) {
  const lower = text.toLowerCase();
  if (lower.includes("blood test") || lower.includes("bloodworks") || lower.includes("blood chemistry") || lower.includes("blood report")) {
    return "Blood Chemistry";
  }
  if (lower.includes("detox") || lower.includes("clean-diet") || lower.includes("dietary") || lower.includes("diet plan") || lower.includes("food plan") || lower.includes("nutrition plan")) {
    return "Detox & Diet";
  }
  if (lower.includes("pregnancy") || lower.includes("pregnant") || lower.includes("fertility") || lower.includes("menopause") || lower.includes("hormon") || lower.includes("pcos") || lower.includes("period")) {
    return "Hormonal & Fertility";
  }
  if (lower.includes("skin") || lower.includes("psoriasis") || lower.includes("eczema") || lower.includes("hair") || lower.includes("rosacea") || lower.includes("rash") || lower.includes("acne")) {
    return "Skin & Hair";
  }
  if (lower.includes("weight") || lower.includes("fat") || lower.includes("kilo") || lower.includes("kg") || lower.includes("sugar") || lower.includes("blood pressure") || lower.includes("bp") || lower.includes("cholesterol") || lower.includes("liver") || lower.includes("diabetic") || lower.includes("diabetes")) {
    return "Metabolic & Weight";
  }
  return "General Wellness";
}

const CATEGORIES = [
  "All Outcomes",
  "Blood Chemistry",
  "Detox & Diet",
  "Hormonal & Fertility",
  "Skin & Hair",
  "Metabolic & Weight",
  "General Wellness"
];

function ReviewCard({ review, onExpand }) {
  const textLimit = 120;
  const shouldTruncate = review.text.length > textLimit;
  const displayedText = shouldTruncate
    ? `${review.text.substring(0, textLimit)}...`
    : review.text;

  // Generate an avatar initial
  const initial = review.name ? review.name.charAt(0).toUpperCase() : "C";

  // Dynamic category pill helper
  const category = getReviewCategory(review.text);

  return (
    <div 
      className={`${styles.reviewCard} reveal-card`} 
      onClick={() => onExpand(review)}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.avatarCircle}>
          {initial}
        </div>
        <div className={styles.authorMeta}>
          <strong className={styles.cardAuthorName}>{review.name}</strong>
          <div className={styles.ratingStars}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={i < review.rating ? styles.starFilled : styles.starEmpty}
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        {category && (
          <span className={styles.categoryPillTag}>{category}</span>
        )}
      </div>
      
      <div className={styles.cardBody}>
        <p className={styles.cardQuote}>&ldquo;{displayedText}&rdquo;</p>
        {shouldTruncate && (
          <span className={styles.readMoreBtn}>Read more</span>
        )}
      </div>
    </div>
  );
}

export default function Testimonial() {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Outcomes");
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeReview, setActiveReview] = useState(null); // holds review object

  const closeModal = () => {
    setActiveReview(null);
  };

  // Background Scroll Lock (including Lenis pause) when Modal is open
  useEffect(() => {
    if (activeReview) {
      lenisRef.current?.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [activeReview]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", gestureDirection: "vertical",
      smooth: true, mouseMultiplier: 1,
    });
    lenis.on("scroll", ScrollTrigger.update);
    lenisRef.current = lenis;
    const rafCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0, 0);
    return () => { 
      lenis.destroy(); 
      gsap.ticker.remove(rafCallback); 
      lenisRef.current = null;
    };
  }, []);

  // Filter and Search logic
  const filteredReviews = useMemo(() => {
    return reviewsData.filter((review) => {
      const category = getReviewCategory(review.text);
      const matchesCategory =
        selectedCategory === "All Outcomes" || category === selectedCategory;
      const matchesSearch =
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
    setHasLoadedMore(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // GSAP animation for initial load (runs once on mount)
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reveal header sections
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // GSAP animation for cards (runs only on category changes or loading more)
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Animate card entries
      gsap.fromTo(".reveal-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [selectedCategory, visibleCount]);

  return (
    <>
      <Navigation />
      <main id="main" className={styles.main} ref={containerRef}>
        
        {/* ── Hero ── */}
        <section 
          className={`${styles.sectionWrapper} ${styles.heroSection}`}
        >
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.titleHero}>
                Stories of <span className={styles.textAccent}>Transformation.</span>
              </h1>
              <p className={styles.paragraph}>
                With over a decade of clinical success, Sheeba has guided hundreds of clients globally to identify root causes and build sustainable wellness. Explore their stories of transformation.
              </p>
            </div>

            <div className={styles.statsSummary}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>83</span>
                <span className={styles.statLabel}>Verified Stories</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>5.0 ★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100%</span>
                <span className={styles.statLabel}>Tailored Care</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filter & Search Control Panel ── */}
        <section className={styles.controlsSection}>
          <div className={styles.controlsContainer}>
            
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input
                type="text"
                aria-label="Search reviews"
                placeholder="Search reviews by keyword or name..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(9); // Reset visibility on search
                }}
                className={styles.searchInput}
              />
            </div>

            {/* Filter Pills */}
            <div className={styles.filterContainer}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(9); // Reset visibility on category change
                  }}
                  className={`${styles.filterPill} ${selectedCategory === cat ? styles.filterPillActive : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ── Testimonial Grid ── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsContent}>
            {displayedReviews.length > 0 ? (
              displayedReviews.map((review, idx) => (
                <ReviewCard 
                  key={idx} 
                  review={review} 
                  onExpand={setActiveReview}
                />
              ))
            ) : (
              <div className={styles.noResults}>
                <h2>No reviews found</h2>
                <p>Try resetting the category filter or searching for another keyword.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredReviews.length > visibleCount && (
            <div className={styles.loadMoreContainer}>
              <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
                Load More Reviews ({filteredReviews.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </section>

        {hasLoadedMore && (
          <button 
            onClick={scrollToTop} 
            className={styles.backToTopBtn} 
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </button>
        )}

        {/* ── Glassmorphic Modal Popup (Inline) ── */}
        {activeReview && (
          <div 
            className={styles.modalOverlay} 
            onClick={closeModal}
            onTouchMove={(e) => e.preventDefault()}
          >
            <div 
              className={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              <button className={styles.modalCloseBtn} onClick={closeModal} aria-label="Close">
                &times;
              </button>
              
              <div className={styles.modalHeader}>
                <div className={styles.avatarCircle}>
                  {activeReview.name ? activeReview.name.charAt(0).toUpperCase() : "C"}
                </div>
                <div className={styles.authorMeta}>
                  <strong className={styles.cardAuthorName}>{activeReview.name}</strong>
                  <div className={styles.ratingStars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={i < activeReview.rating ? styles.starFilled : styles.starEmpty}
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {getReviewCategory(activeReview.text) && (
                  <span className={styles.categoryPillTag}>
                    {getReviewCategory(activeReview.text)}
                  </span>
                )}
              </div>

              <div className={styles.modalBody}>
                <p className={styles.modalQuote}>&ldquo;{activeReview.text}&rdquo;</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
