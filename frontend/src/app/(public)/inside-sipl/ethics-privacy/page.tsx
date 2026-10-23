import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function InsideSiplEthicsPrivacyPage() {
  return (
    <PublicRoutePage
      eyebrow="Inside SIPL / Ethics & Privacy"
      title="Ethics & Privacy"
      description="Responsible research depends on clear purpose, careful handling of sensitive information, honest evidence, and qualified human oversight."
      sections={[
        {
          title: "Purpose, consent, and data governance",
          paragraphs: ["Information should be collected and used for a clearly defined purpose, with appropriate permissions and access controls. Data handling and retention should reflect the sensitivity of health-related information and the requirements of each collaboration."],
          links: [{ label: "Read the website privacy notice", href: "/privacy/" }],
        },
        {
          title: "Human accountability",
          bullets: [
            "AI outputs are support for research or professional review, not a replacement for clinical judgement.",
            "Qualified professionals remain responsible for interpretation and care decisions.",
            "Evaluation should consider uncertainty, failure modes, and population differences.",
            "Intended use and limitations should be clear to the people using a system.",
          ],
        },
        {
          title: "Raise a concern",
          paragraphs: ["Questions about privacy, security, or responsible AI can be sent to SIPL through the contact page. Please do not include personal medical information in a website enquiry."],
          links: [{ label: "Contact SIPL", href: "/contact/" }],
        },
      ]}
    />
  );
}
