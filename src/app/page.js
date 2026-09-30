import HomePage from "./HomePage";
import { pageMetadata, HOME_PAGE } from "@/lib/seo";

export const metadata = pageMetadata(HOME_PAGE);

export default function Page() {
  return <HomePage />;
}
