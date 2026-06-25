"use client";
import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";

const faqs = [
  {
    question: "How can a nutritionist help me?",
    answer: "Sheeba Majmudar assists with many health issues such as obesity, eczema, IBS, food allergies, constipation, low immunity, fatigue, fatty liver, insomnia, hormonal issues, and helps with sports training, detoxification, and healthy cooking and shopping. The internet usually misinforms the public, so professional advice can not only save you money, but it can be critical to prevent complications."
  },
  {
    question: "What does the process involve if I decide to see Sheeba?",
    answer: "First, please email her or SMS her to fix an appointment. You will need a recent (3–4 months old) blood test report for the consult. If you don't have one, you may need to get one done. Please ask her about this. During the consult, Sheeba analyses the client's blood test using functional chemistry, and then, based on the client's medical history, goals, and lifestyle limitations, she recommends a diet, supplements, and lifestyle modifications. A follow up is recommended within a month's time."
  },
  {
    question: "Do I need to get tests done to achieve my goals?",
    answer: "To determine core issues, a blood test can determine what nutrients are missing and what is in excess (including toxins), which can help customize a plan. This is more effective compared to a general consultation based on medical history. A blood test can also be used as a reference if you are using nutrition to address your health challenges, and help reduce medication as determined by a doctor."
  },
  {
    question: "Do I have to buy all the supplements from you?",
    answer: "Sheeba does not think it is ethically correct to sell a specific brand. All brands have different strengths and weaknesses with regard to herbs, vitamins, or food supplements. She recommends what supplements to buy and where. You can ask her about the quality of the supplements you are currently using."
  },
  {
    question: "How do I know the program is working?",
    answer: "The client becomes an active partner in the journey towards optimum wellness. The end result will depend upon the amount of commitment you have put into the program and when you start feeling good, you start looking good! But getting another blood test or assessment done can reveal undeniable results."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main style={{ backgroundColor: "#f8f1de", minHeight: "100vh", paddingBottom: "6rem" }}>
      <Navigation />
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
                  <span style={{ 
                    fontSize: "24px", 
                    transform: isActive ? "rotate(45deg)" : "rotate(0)", 
                    transition: "transform 0.3s ease",
                    color: "var(--accent-teal)"
                  }}>
                    +
                  </span>
                </button>
                
                <div style={{ 
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
  );
}
