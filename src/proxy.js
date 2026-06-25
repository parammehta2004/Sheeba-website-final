import { NextResponse } from 'next/server';

// ─── In-memory rate limiter (resets on cold start / serverless re-spin) ───────
// For a persistent solution, swap this Map for Upstash Redis.
const rateLimitStore = new Map();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 5;       // max 5 form submissions per IP per minute

function getRateLimitResult(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.windowStart + RATE_LIMIT_WINDOW_MS) {
    // Fresh window
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  record.count += 1;
  rateLimitStore.set(ip, record);
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

// ─── Basic input length guard ─────────────────────────────────────────────────
function isRequestSuspicious(req) {
  const url = req.nextUrl;
  // Block suspiciously long URLs (potential path traversal or injection)
  if (url.pathname.length > 200) return true;
  // Block common injection probes in query strings
  const qs = url.search.toLowerCase();
  const suspiciousPatterns = ['<script', 'javascript:', 'onload=', 'onerror=', '../', '%2e%2e'];
  if (suspiciousPatterns.some((p) => qs.includes(p))) return true;
  return false;
}

export function proxy(req) {
  const { pathname } = req.nextUrl;

  // ── 1. Block suspicious requests globally ──────────────────────────────────
  if (isRequestSuspicious(req)) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // ── 2. Rate-limit only form-submission endpoints ───────────────────────────
  const isFormEndpoint =
    pathname === '/contact-us' && req.method === 'POST';

  if (isFormEndpoint) {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      '127.0.0.1';

    const { allowed, remaining, retryAfter } = getRateLimitResult(ip);

    if (!allowed) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please wait before submitting again.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    const res = NextResponse.next();
    res.headers.set('X-RateLimit-Limit', String(MAX_REQUESTS_PER_WINDOW));
    res.headers.set('X-RateLimit-Remaining', String(remaining));
    return res;
  }

  // ── 3. Block access to sensitive internal paths ────────────────────────────
  const blockedPaths = ['/.env', '/.git', '/node_modules', '/src'];
  if (blockedPaths.some((p) => pathname.startsWith(p))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except static files and Next.js internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
