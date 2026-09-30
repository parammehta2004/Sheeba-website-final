import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Sheeba Majmudar | Sheeba The Nutritionist",
  description: "Meet Sheeba Majmudar: MSc Human Nutrition (USA), Diploma in Clinical Herbology and author of Edible to Incredible, with 20+ years in functional nutrition.",
  path: "/about",
});

export default function Layout({ children }) {
  return children;
}
