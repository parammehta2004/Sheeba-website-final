import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media, Press & Interviews | Sheeba The Nutritionist",
  description: "Sheeba Majmudar in the media: press features, awards, video interviews and podcast appearances from Singapore's award-winning functional nutritionist.",
  path: "/media-gallery",
});

export default function Layout({ children }) {
  return children;
}
