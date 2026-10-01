import { InformationPage } from "@/components/layout/InformationPage";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Privacy Policy | SIPL",
  description: "What information SIPL collects through this public website, how enquiries are handled, and how to contact us about your data.",
  path: "/privacy",
});

const sections = [
  {
    title: "What this notice covers",
    paragraphs: [
      "This notice applies to sequoiainsilico.com and the public enquiry, meeting-request, and careers forms on this website. It describes website-level handling only. A future LifeBack service or a research or clinical collaboration may have separate notices and agreements.",
      "The public LifeBack Access screen is a preview. It does not create an account, authenticate a person, or collect clinical assessment data.",
    ],
  },
  {
    title: "Information you choose to send",
    bullets: [
      "Contact and LifeBack engagement requests: name, email address, organisation, and message.",
      "Meeting requests: name, email address, organisation if provided, topic, preferred date and time, time zone, and optional notes.",
      "Career applications: name, email address, phone number, career area, message, and an uploaded PDF CV or resume.",
      "Basic website usage metrics: page visits and related usage information collected through Vercel Analytics.",
    ],
  },
  {
    title: "How we use it",
    paragraphs: [
      "We use enquiry details to respond, route a request to the relevant SIPL team, arrange a requested conversation, or consider an application. We use basic usage metrics to understand how the public website is used.",
      "Please do not submit patient records, genetic data, passwords, or other sensitive health information through public website forms.",
    ],
  },
  {
    title: "Who processes the information",
    paragraphs: [
      "The website is hosted on Vercel. Form submissions are sent to SIPL through the website’s configured email service. The website application does not create a separate database record of form submissions; SIPL’s email systems and service providers may retain copies as part of delivering and managing the message.",
      "We do not sell information submitted through these forms. We may disclose information where needed to operate the site, respond to a request, protect the service, or meet a legal obligation.",
    ],
  },
  {
    title: "Retention and your choices",
    paragraphs: [
      "Enquiry and application messages are retained in email systems for as long as needed to respond, manage a potential collaboration or application, and meet applicable obligations. Vercel Analytics retains usage data according to its service settings and policies.",
      "You may ask us to access, correct, or delete information you submitted, or raise a privacy concern, through the Contact page. Please identify the form and email address used so we can locate the request. We may need to verify your request before acting on it.",
    ],
  },
  {
    title: "Security and changes",
    paragraphs: [
      "We use technical safeguards in the website and its form handling, but no internet transmission or email service can be guaranteed completely secure. Avoid sending sensitive health information through this site.",
      "We may update this notice when our website or data practices change. The date at the top of this page shows the latest revision.",
    ],
  },
  {
    title: "Further information",
    paragraphs: ["For the official text of India’s data-protection framework, consult the Government of India sources below. This policy is a plain-language description of this website’s current data flows, not legal advice."],
    links: [
      { label: "Digital Personal Data Protection Act, 2023 — India Code", href: "https://www.indiacode.nic.in/handle/123456789/22037?view_type=browse" },
      { label: "Digital Personal Data Protection Rules, 2025 — MeitY", href: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025" },
    ],
  },
];

export default function PrivacyPage() {
  return <InformationPage eyebrow="Privacy" title="Your information deserves clarity and care." description="This notice explains what the public SIPL website collects when you contact us, request a meeting, or apply for a role." sections={sections} updated="1 October 2026" />;
}
