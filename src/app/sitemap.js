import { SITE_URL, SERVICE_SLUGS, canonicalServicePath } from "@/lib/seo";

const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/health-assessments",
  "/therapies",
  "/testimonial",
  "/media-gallery",
  "/faq",
  "/contact-us",
  "/t-cs",
  "/data-privacy-policy",
];

// Generated at build time, so lastmod is the date of the last deploy.
export default function sitemap() {
  const lastModified = new Date();
  const paths = [...STATIC_PATHS, ...SERVICE_SLUGS.map(canonicalServicePath)];
  return paths.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
  }));
}
