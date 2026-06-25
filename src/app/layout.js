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
  // ── Canonical URL ───────────────────────────────────────────────────────────
  metadataBase: new URL('https://sheeba-the-nutritionist.vercel.app'),
  alternates: {
    canonical: '/',
  },
  // ── Open Graph (controls link previews — prevents social phishing spoofs) ──
  openGraph: {
    title: "Sheeba The Nutritionist | Best Nutritionist in Singapore",
    description: "Highly recognized as the best nutritionist in singapore and a leading medical nutritionist in singapore. Expert in Functional Medicine & Naturopathy.",
    url: 'https://sheeba-the-nutritionist.vercel.app',
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
              if (typeof window !== 'undefined' && window.sessionStorage.getItem('hasSeenPreloader')) {
                document.documentElement.classList.add('skip-preloader');
              }
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
