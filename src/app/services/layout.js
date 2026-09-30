import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nutrition Services in Singapore | Sheeba The Nutritionist",
  description: "Functional health assessments and holistic therapies with Sheeba Majmudar in Singapore, from Metabolic Mapping blood analysis to E4L and aromatherapy.",
  path: "/services",
});

export default function Layout({ children }) {
  return children;
}
