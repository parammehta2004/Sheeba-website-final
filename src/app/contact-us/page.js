import ContactPageClient from "./ContactPageClient";
import ContactGuide from "./ContactGuide";

// Server component: the interactive form lives in ContactPageClient, while the
// static guide copy is rendered on the server and slotted in as children.
export default function ContactUs() {
  return (
    <ContactPageClient>
      <ContactGuide />
    </ContactPageClient>
  );
}
