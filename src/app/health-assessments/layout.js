import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Functional Health Assessments | Sheeba The Nutritionist",
  description: "Metabolic Mapping blood chemistry, Food Compatibility Test, DUTCH hormone test, Hair Tissue Mineral Analysis and E4L scans with Sheeba in Singapore.",
  path: "/health-assessments",
});

export default function Layout({ children }) {
  return children;
}
