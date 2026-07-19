import { Marcellus, Outfit } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-heading-main",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-body-main",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sheeba The Nutritionist | Best Nutritionist in Singapore",
  description: "Highly recognized as the best nutritionist in singapore and a leading medical nutritionist in singapore. Expert in Functional Medicine & Naturopathy.",
  // ── SEO & Indexing ──────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "PDXwA2usy_ahAD3AXTODzICwsqC0QsPb1PY4klSeLOA",
  },
  // ── Canonical URL ───────────────────────────────────────────────────────────
  metadataBase: new URL('https://sheebathenutritionist.com'),
  // ── Open Graph (controls link previews — prevents social phishing spoofs) ──
  openGraph: {
    title: "Sheeba The Nutritionist | Best Nutritionist in Singapore",
    description: "Highly recognized as the best nutritionist in singapore and a leading medical nutritionist in singapore. Expert in Functional Medicine & Naturopathy.",
    url: 'https://sheebathenutritionist.com',
    siteName: "Sheeba The Nutritionist",
    locale: 'en_SG',
    type: 'website',
  },
};

// ── Viewport config (separated per Next.js 16 API) ────────────────────────────
export const viewport = {
  themeColor: '#2d5a5a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.sessionStorage) {
                try {
                  if (window.sessionStorage.getItem('hasSeenPreloader')) {
                    document.documentElement.classList.add('skip-preloader');
                  }
                } catch(e) {}
              }
              // Absolute DOM fallback: force-hide preloader after 5s no matter what
              setTimeout(function() {
                var el = document.querySelector('.preloader-overlay');
                if (el) el.style.display = 'none';
              }, 8000);
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
