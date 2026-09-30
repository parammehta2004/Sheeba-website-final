import { notFound } from "next/navigation";
import { serviceMetadata, SERVICE_SLUGS } from "@/lib/seo";

// Only known services render; any other slug is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = serviceMetadata(slug);
  if (!metadata) notFound();
  return metadata;
}

export default function Layout({ children }) {
  return children;
}
