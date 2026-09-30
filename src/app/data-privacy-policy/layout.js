import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Data & Privacy Policy | Sheeba The Nutritionist",
  description: "How Sheeba The Nutritionist Pte Ltd collects, uses, stores and protects the personal data you share with the clinic.",
  path: "/data-privacy-policy",
});

export default function Layout({ children }) {
  return children;
}
