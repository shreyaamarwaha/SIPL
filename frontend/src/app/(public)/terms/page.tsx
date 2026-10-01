import { InformationPage } from "@/components/layout/InformationPage";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Terms of Use | SIPL",
  description: "Terms for using the public Sequoia Insilico website and its informational content.",
  path: "/terms",
});

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "This website is provided by Sequoia Insilico Pvt. Ltd. (SIPL) for general information about the company, its research direction, and ways to contact the team. By using the website, you agree to use it lawfully and not to disrupt, damage, or attempt to gain unauthorised access to it.",
    ],
  },
  {
    title: "Information is not professional advice",
    paragraphs: [
      "Website content is educational and informational. It is not medical advice, a diagnosis, treatment recommendation, investment advice, or a substitute for consultation with a qualified professional.",
      "The public LifeBack page is informational. Its Access flow is a preview, and this website does not provide a clinical assessment or account-based service through that flow.",
    ],
  },
  {
    title: "Research and product statements",
    paragraphs: [
      "Descriptions of research, products, capabilities, or potential applications are provided in context and may change as work develops. They do not guarantee a particular result, level of performance, availability, regulatory status, or suitability for a specific purpose.",
      "Do not use information from this website to make decisions about a person’s care. Clinical decisions belong to the patient and their qualified care team.",
    ],
  },
  {
    title: "Intellectual property and links",
    paragraphs: [
      "Unless otherwise identified, the website’s text, visual design, and SIPL marks belong to SIPL or its licensors. You may link to public pages and quote brief excerpts with clear attribution. Other reuse requires prior permission.",
      "Links to third-party websites are provided for convenience. SIPL does not control those sites or endorse all content found there.",
    ],
  },
  {
    title: "Availability and responsibility",
    paragraphs: [
      "We work to keep the website accurate and available, but it may change, be interrupted, or contain errors. To the extent permitted by applicable law, the website is provided without warranties and SIPL is not responsible for losses arising from reliance on general website information or temporary unavailability.",
      "Separate written terms will apply to any future LifeBack service, research project, or commercial engagement. Nothing on this site creates a clinical, commercial, or advisory relationship.",
    ],
  },
  {
    title: "Updates and questions",
    paragraphs: [
      "SIPL may update these terms as the website changes. The revision date above identifies the current version. If you have a question about these terms, contact us through the Contact page.",
    ],
  },
];

export default function TermsPage() {
  return <InformationPage eyebrow="Terms" title="Clear terms for a public information site." description="These terms cover your use of the public SIPL website. A separate agreement will govern any future platform or collaboration services." sections={sections} updated="1 October 2026" />;
}
