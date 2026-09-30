import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Book a Consultation | Sheeba The Nutritionist",
  description: "Book a consultation with Sheeba Majmudar at Southpoint, 200 Cantonment Road, Singapore. Call or WhatsApp +65 9656 6714 or email the clinic.",
  path: "/contact-us",
});

export default function Layout({ children }) {
  return children;
}
