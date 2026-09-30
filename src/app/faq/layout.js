import { pageMetadata, jsonLdHtml } from "@/lib/seo";
import { FAQS } from "@/data/faqs";

export const metadata = pageMetadata({
  title: "FAQ: Working With a Nutritionist | Sheeba The Nutritionist",
  description: "How a nutritionist can help, what a consultation with Sheeba involves, whether you need blood tests or supplements, and how to know your programme works.",
  path: "/faq",
});

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(FAQ_JSON_LD)} />
      {children}
    </>
  );
}
