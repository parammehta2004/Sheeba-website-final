import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Testimonials | Sheeba The Nutritionist",
  description: "Reviews from clients who worked with Sheeba Majmudar on fatigue, gut health, skin conditions, weight loss and hormones through functional nutrition.",
  path: "/testimonial",
});

export default function Layout({ children }) {
  return children;
}
