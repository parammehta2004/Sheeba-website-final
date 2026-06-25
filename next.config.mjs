/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent browsers from MIME-sniffing the content type
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent the site from being embedded in iframes (clickjacking protection)
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Force HTTPS for 2 years, include subdomains
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Control referrer information sent with requests
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Disable access to browser features not needed by this site
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()',
          },
          // Enable XSS protection in older browsers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Content Security Policy — allow self + trusted external sources only
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: self + GSAP CDN + Lenis + Google Tag Manager (if needed in future)
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net",
              // Styles: self + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + Unsplash + data URIs
              "img-src 'self' data: blob: https://images.unsplash.com https://cdn.prod.website-files.com",
              // Media (video): self + the Sheeba video CDN
              "media-src 'self' https://cdn.prod.website-files.com",
              // API calls: self + the leads API
              "connect-src 'self' https://vapor.biohackk.com",
              // Prevent embedding in frames from unknown origins
              "frame-ancestors 'none'",
              // Only load resources over HTTPS
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Control DNS prefetching
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },

  // Disable the X-Powered-By header to avoid exposing the tech stack
  poweredByHeader: false,

  // Only allow images from trusted domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
};

export default nextConfig;
