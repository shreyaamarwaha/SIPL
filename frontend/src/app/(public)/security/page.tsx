import { InformationPage } from "@/components/layout/InformationPage";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Security and Trust | SIPL",
  description: "A clear overview of the safeguards used for the public SIPL website and how to report a security concern.",
  path: "/security",
});

const sections = [
  {
    title: "A limited public data surface",
    paragraphs: [
      "The public website is for company information and enquiries. It does not currently provide LifeBack clinical accounts or collect clinical assessment data through the Access preview.",
      "Please do not send patient-identifiable information, medical records, genetic data, passwords, or confidential research data through public forms.",
    ],
  },
  {
    title: "Safeguards in the form flows",
    bullets: [
      "Contact and meeting forms validate required fields and send submissions to SIPL through the configured mail service.",
      "The contact endpoint validates message fields, limits request size, escapes content in email, and applies basic rate limiting.",
      "Career submissions accept PDF resumes with file-size and file-type checks before sending them to SIPL by email.",
      "The website is hosted by Vercel, which provides the site’s hosting and HTTPS delivery.",
    ],
  },
  {
    title: "Report a concern",
    paragraphs: [
      "If you believe you have found a security issue in this public website, contact SIPL through the Contact page. Include the affected page, a clear description, and steps to reproduce it. Do not include personal data or attempt to access data belonging to another person.",
      "We will review a good-faith report and follow up where contact details are provided. Please avoid public disclosure while a report is being reviewed.",
    ],
  },
  {
    title: "What this page does not claim",
    paragraphs: [
      "This page describes safeguards visible in the current website implementation. It is not a claim of independent certification, regulatory approval, or a security audit. Product-specific security and data-processing terms would be provided separately before any future service deployment.",
    ],
  },
];

export default function SecurityPage() {
  return <InformationPage eyebrow="Security & trust" title="Trust starts with clear boundaries." description="How the public SIPL website handles enquiries today, the safeguards built into its form flows, and how to report a concern." sections={sections} updated="1 October 2026" />;
}
