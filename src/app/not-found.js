"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#E6F0EE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "var(--font-body-main, 'Outfit', sans-serif)",
        textAlign: "center",
      }}
    >
      {/* Decorative leaf SVG */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18, marginBottom: "1.5rem" }}
      >
        <path
          d="M60 10 C30 10, 10 40, 20 80 C30 110, 60 110, 60 110 C60 110, 90 110, 100 80 C110 40, 90 10, 60 10Z"
          fill="#2d5a5a"
        />
        <path
          d="M60 110 C60 110, 55 70, 35 45"
          stroke="#E6F0EE"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* 404 number */}
      <p
        style={{
          fontSize: "clamp(5rem, 15vw, 10rem)",
          fontFamily: "var(--font-heading-main, 'Marcellus', Georgia, serif)",
          color: "#2d5a5a",
          lineHeight: 1,
          margin: "0 0 0.5rem 0",
          opacity: 0.15,
          fontWeight: 400,
          letterSpacing: "-0.02em",
        }}
      >
        404
      </p>

      <h1
        style={{
          fontFamily: "var(--font-heading-main, 'Marcellus', Georgia, serif)",
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          color: "#2C4646",
          margin: "0 0 1rem 0",
          fontWeight: 400,
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          color: "#4A6D6D",
          maxWidth: "440px",
          lineHeight: 1.7,
          margin: "0 0 2.5rem 0",
        }}
      >
        The page you are looking for may have been moved or no longer exists.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.85rem 2.5rem",
          background: "#2d5a5a",
          color: "#E6F0EE",
          borderRadius: "40px",
          textDecoration: "none",
          fontSize: "1rem",
          fontFamily: "var(--font-body-main, 'Outfit', sans-serif)",
          letterSpacing: "0.04em",
          transition: "background 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#34b5b2";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#2d5a5a";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
