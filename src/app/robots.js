import { SITE_URL } from "@/lib/seo";

// Everything is crawlable, AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended) included.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
