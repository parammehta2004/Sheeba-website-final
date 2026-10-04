import { Marcellus, Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { pageMetadata, HOME_PAGE, SITE_URL, SITE_JSON_LD, jsonLdHtml } from "@/lib/seo";

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-heading-main",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-body-main",
  subsets: ["latin"],
});

// Site-wide defaults. Every route sets its own title, description, canonical
// and Open Graph via pageMetadata(); the canonical is left out here so no
// page can inherit the homepage's.
const siteDefaults = pageMetadata(HOME_PAGE);
delete siteDefaults.alternates;

export const metadata = {
  ...siteDefaults,
  // ── SEO & Indexing ──────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "PDXwA2usy_ahAD3AXTODzICwsqC0QsPb1PY4klSeLOA",
  },
  metadataBase: new URL(SITE_URL),
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
    <html lang="en-SG" className={`${marcellus.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(SITE_JSON_LD)} />
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
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <Footer />
        <Analytics />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KD3DDTCREF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KD3DDTCREF');
          `}
        </Script>
        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="EW9Ccc0C7+EH7tdhovW5kQ"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
