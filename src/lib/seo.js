// Shared SEO config: canonical host, per-page metadata builder and JSON-LD.
import { SERVICES_DATA } from "@/data/services";

export const SITE_URL = "https://www.sheebathenutritionist.com";
export const SITE_NAME = "Sheeba The Nutritionist";

export const HOME_PAGE = {
  title: "Sheeba The Nutritionist | Best Nutritionist in Singapore",
  description: "Highly recognised as the best nutritionist in Singapore and a leading medical nutritionist in Singapore. Expert in Functional Medicine & Naturopathy.",
  path: "/",
};

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Sheeba The Nutritionist — Functional Nutritionist in Singapore",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/sheebanutritionist/",
  youtube: "https://www.youtube.com/channel/UCtdmZ4VQGFdAvICrAZ7En3g",
};

// The LinkedIn / Instagram / TikTok accounts in the footer belong to Dropzone,
// Sheeba's fat loss programme, so they are attached to that entity, not the clinic.
export const DROPZONE_SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/dropzone-fit/",
  instagram: "https://www.instagram.com/dropzonefit",
  tiktok: "https://www.tiktok.com/@dropzone_fit",
};

// Builds page metadata. Child segments replace (not merge) the parent's
// openGraph/twitter objects, so every field is set here.
export function pageMetadata({ title, description, path }) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_SG",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Service detail pages render under /services, /therapies and /health-assessments.
// Therapies win when a slug is listed under both (E4L), matching the existing redirect.
export function canonicalServicePath(slug) {
  const entries = SERVICES_DATA.filter((s) => s.slug === slug);
  if (entries.length === 0) return null;
  const isTherapy = entries.some((s) => s.type === "Therapy");
  return `${isTherapy ? "/therapies" : "/health-assessments"}/${slug}`;
}

// Every service slug, for generateStaticParams on the three detail routes.
export const SERVICE_SLUGS = [...new Set(SERVICES_DATA.map((s) => s.slug))];

export function serviceMetadata(slug) {
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return null;
  return pageMetadata({
    title: `${service.seoTitle || service.title} | ${SITE_NAME}`,
    description: truncate(service.description),
    path: canonicalServicePath(slug),
  });
}

export function truncate(text, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-—]+$/, "")}…`;
}

const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#sheeba`;

export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/5f2247f763009cda43de03a7_Logo--Sheeba.svg`,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      telephone: "+65 9656 6714",
      email: "admin@sheebathenutritionist.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "200 Cantonment Road, #06-01A, Southpoint",
        addressLocality: "Singapore",
        postalCode: "089763",
        addressCountry: "SG",
      },
      areaServed: "Singapore",
      founder: { "@id": PERSON_ID },
      sameAs: Object.values(SOCIAL_LINKS),
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Sheeba Majmudar",
      jobTitle: "Nutritionist",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/assets/sheebapic.png`,
      worksFor: { "@id": BUSINESS_ID },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Master of Science in Human Nutrition (USA)" },
        { "@type": "EducationalOccupationalCredential", name: "Bachelor of Arts (Psychology)" },
        { "@type": "EducationalOccupationalCredential", name: "Diploma in Clinical Herbology (USA)" },
      ],
      knowsAbout: ["Functional medicine", "Naturopathy", "Clinical nutrition", "Blood chemistry analysis"],
    },
    {
      "@type": "Book",
      name: "Edible to Incredible",
      author: { "@id": PERSON_ID },
      url: "https://www.amazon.com/Edible-Incredible-Sheeba-Majmudar/dp/1482831818",
    },
    {
      "@type": "Organization",
      name: "Dropzone",
      url: "https://www.dropzone.fit",
      founder: { "@id": PERSON_ID },
      sameAs: Object.values(DROPZONE_SOCIAL_LINKS),
    },
  ],
};

// Serialises JSON-LD safely for inline <script> tags.
export function jsonLdHtml(data) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
