"use client";
import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import { FAQS as faqs } from "@/data/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
    <Navigation />
    <main id="main" style={{ backgroundColor: "#f8f1de", minHeight: "100vh", paddingBottom: "6rem" }}>
      <section style={{ padding: "10rem 2rem 4rem", maxWidth: "800px", margin: "0 auto", textAlign: "left", color: "var(--foreground)" }}>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "48px", marginBottom: "3rem", textAlign: "center" }}>
          Frequently Asked Questions
        </h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.6)", 
                  border: "1px solid rgba(52, 181, 178, 0.2)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <button 
                  id={`faq-question-${index}`}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  style={{ 
                    width: "100%", 
                    padding: "1.5rem", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    color: isActive ? "var(--accent-teal-dark)" : "var(--foreground)",
                    textAlign: "left"
                  }}
                >
                  {faq.question}
                  <span aria-hidden="true" style={{ 
                    fontSize: "24px", 
                    transform: isActive ? "rotate(45deg)" : "rotate(0)", 
                    transition: "transform 0.3s ease",
                    color: "var(--accent-teal)"
                  }}>
                    +
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{ 
                  maxHeight: isActive ? "500px" : "0", 
                  opacity: isActive ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.4s ease-in-out",
                  padding: isActive ? "0 1.5rem 1.5rem" : "0 1.5rem",
                  fontSize: "16px",
                  lineHeight: "1.6"
                }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
    </>
  );
}
