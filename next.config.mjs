/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://challenges.cloudflare.com https://www.googletagmanager.com https://analytics.ahrefs.com https://*.posthog.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://cdn.prod.website-files.com https://www.googletagmanager.com https://*.google-analytics.com https://www.google.com https://stats.g.doubleclick.net",
      "media-src 'self' https://cdn.prod.website-files.com",
      `connect-src 'self' https://vapor.biohackk.com https://challenges.cloudflare.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://stats.g.doubleclick.net https://analytics.ahrefs.com https://*.posthog.com${isDev ? " ws: wss:" : ""}`,
      "worker-src 'self' blob:",
      "frame-src 'self' https://www.youtube.com https://w.soundcloud.com https://player.vimeo.com https://challenges.cloudflare.com",
      "frame-ancestors 'none'",
    ];

    if (!isDev) {
      cspDirectives.push("upgrade-insecure-requests");
    }

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
            value: cspDirectives.join('; '),
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
  // Allow mobile devices on local network to connect to HMR in dev mode
  allowedDevOrigins: ['192.168.29.236'],
  async redirects() {
    return [
      // Canonical host is www: send the bare domain there (trailing slashes are
      // already stripped by Next's default trailingSlash: false).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sheebathenutritionist.com' }],
        destination: 'https://www.sheebathenutritionist.com/:path*',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/testimonial',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/media-gallery',
        permanent: true,
      },
      {
        source: '/:path*\\.html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/services/biohackk',
        destination: '/therapies/dropzone',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bookings/biohackk-booking-success',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/homeopathy-the-recommended-approach',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/treatment',
        destination: '/therapies',
        permanent: true,
      },
      {
        source: '/services/nes-nutri-energetic-system',
        destination: '/therapies/e4l-nutri-energetic-system',
        permanent: true,
      },
      {
        source: '/services/functional-blood-chemistry-analysis',
        destination: '/health-assessments/metabolic-mapping',
        permanent: true,
      },
      {
        source: '/services/gemmotheraphy',
        destination: '/services/gemmotherapy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
