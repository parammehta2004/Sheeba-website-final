import Link from "next/link";
import { canonicalServicePath } from "@/lib/seo";
import styles from "./page.module.css";

// Static, server-rendered guide shown below the enquiry form.
// Every statement here is drawn from copy elsewhere on the site
// (FAQ, Services "how it works" steps, About, services data, T&Cs).

const STEPS = [
  {
    title: "Get in touch",
    body: "Email or SMS Sheeba to fix an appointment, message the clinic on WhatsApp, or send the form above. Tell us what you are looking to resolve and we will guide you on the next steps.",
  },
  {
    title: "Bring a recent blood test",
    body: "You will need a recent blood test report (3–4 months old) for the consult. If you don't have one, you may need to get one done, so please ask Sheeba about this when you book. A blood test shows which nutrients are missing and what is in excess, including toxins, which helps customise your plan.",
  },
  {
    title: "Your one-to-one consultation",
    body: "Consultations are one-to-one with Sheeba, virtual or in person. She analyses your blood test using functional blood chemistry and, based on your medical history, goals and lifestyle, recommends a diet, supplements and lifestyle changes.",
  },
  {
    title: "Follow up",
    body: "A follow-up is recommended to assess your progress and tweak your protocol, so you keep seeing improvements in your health.",
  },
];

const ENQUIRIES = [
  {
    slug: "metabolic-mapping",
    title: "Metabolic Mapping",
    body: "Our clinical North Star: a functional analysis of 42+ metabolic markers in your blood test.",
  },
  {
    slug: "dutch-test",
    title: "Dutch Test",
    body: "For anyone considering bioidentical hormone therapy or natural protocols, or who suspects a hormone-related challenge.",
  },
  {
    slug: "compatibility-testing",
    title: "Food Compatibility Test",
    body: "A non-invasive hair-sample test, great for kids, showing which foods and household products may be creating inflammation.",
  },
  {
    slug: "hair-tissue-mineral-analysis",
    title: "Hair Tissue Mineral Analysis",
    body: "A non-invasive hair test of mineral and vitamin levels that can point to metabolic, hormonal or toxicity issues.",
  },
  {
    slug: "dropzone",
    title: "Weight (Fat loss) programs",
    body: "Our signature Dropzone program: practitioner-guided fat loss tailored to your biochemistry while sparing muscle mass.",
  },
  {
    slug: "e4l-nutri-energetic-system",
    title: "E4L (Energy4Life)",
    body: "A bioenergetic system that maps the body-field to assess and support the body's communication networks.",
  },
]
  .map((item) => ({ ...item, href: canonicalServicePath(item.slug) }))
  .filter((item) => item.href);

export default function ContactGuide() {
  return (
    <>
      {/* ── First consultation ── */}
      <section className={`${styles.guideSection} bg-theme-peach`} aria-labelledby="contact-steps-heading">
        <div className={styles.guideInner}>
          <div className={`${styles.guideHeader} reveal-up`}>
            <h2 id="contact-steps-heading" className={styles.guideTitle}>
              Your first consultation, <span className={styles.textAccent}>step by step.</span>
            </h2>
            <p className={styles.guideIntro}>
              Every programme starts with understanding your biochemistry. Here is what to expect once you reach out to Sheeba Majmudar&apos;s clinic at Southpoint, Singapore.
            </p>
          </div>

          <ol className={styles.stepsList}>
            {STEPS.map((step, idx) => (
              <li key={step.title} className={`${styles.stepCard} reveal-up`}>
                <span className={styles.stepNum} aria-hidden="true">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Common enquiries ── */}
      <section className={styles.guideSection} aria-labelledby="contact-enquiries-heading">
        <div className={styles.guideInner}>
          <div className={`${styles.guideHeader} reveal-up`}>
            <h2 id="contact-enquiries-heading" className={styles.guideTitle}>
              What people <span className={styles.textAccent}>enquire about.</span>
            </h2>
            <p className={styles.guideIntro}>
              Sheeba assists with health issues such as obesity, eczema, IBS, food allergies, constipation, low immunity, fatigue, fatty liver, insomnia and hormonal issues, and helps with sports training and detoxification. Many enquiries begin with one of these:
            </p>
          </div>

          <ul className={styles.enquiryGrid}>
            {ENQUIRIES.map((item) => (
              <li key={item.slug} className={`${styles.enquiryCard} reveal-up`}>
                <h3 className={styles.cardTitle}>
                  <Link href={item.href} className={styles.cardLink}>{item.title}</Link>
                </h3>
                <p className={styles.cardBody}>{item.body}</p>
              </li>
            ))}
          </ul>

          <p className={`${styles.guideLinks} reveal-up`}>
            Browse all <Link href="/health-assessments">health assessments</Link> and{" "}
            <Link href="/therapies">therapies</Link>, or see <Link href="/services">how our services work</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ excerpt ── */}
      <section className={`${styles.guideSection} bg-theme-peach`} aria-labelledby="contact-faq-heading">
        <div className={`${styles.guideInner} ${styles.guideNarrow}`}>
          <div className={`${styles.guideHeader} reveal-up`}>
            <h2 id="contact-faq-heading" className={styles.guideTitle}>
              Quick answers <span className={styles.textAccent}>before you book.</span>
            </h2>
          </div>

          <div className={styles.faqList}>
            <div className={`${styles.faqItem} reveal-up`}>
              <h3 className={styles.cardTitle}>Can I work with Sheeba from overseas?</h3>
              <p className={styles.cardBody}>
                Yes. Health assessments can be done anywhere in the world, and consultations can be virtual or in person. Contact us to arrange yours.
              </p>
            </div>
            <div className={`${styles.faqItem} reveal-up`}>
              <h3 className={styles.cardTitle}>Do I have to buy all the supplements from you?</h3>
              <p className={styles.cardBody}>
                No. Sheeba does not think it is ethically correct to sell a specific brand. She recommends what supplements to buy and where, and you can ask her about the quality of the supplements you already use.
              </p>
            </div>
            <div className={`${styles.faqItem} reveal-up`}>
              <h3 className={styles.cardTitle}>Will Sheeba work alongside my doctor?</h3>
              <p className={styles.cardBody}>
                She can work with your GP or other holistic health practitioners, or where relevant refer you to one, such as an acupuncturist. Our services support your personal health and wellbeing efforts and are not a substitute for consultation, evaluation or treatment by your doctor or specialist.
              </p>
            </div>
          </div>

          <p className={`${styles.guideLinks} reveal-up`}>
            Have another question? Read the full <Link href="/faq">frequently asked questions</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
