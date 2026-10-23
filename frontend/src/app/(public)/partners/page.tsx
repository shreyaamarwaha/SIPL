import { InformationPage } from "@/components/layout/InformationPage";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Partners & Collaborators | SIPL",
    description: "Explore research and implementation partnerships with Sequoia Insilico across clinical care, genomics, and biopharma.",
    path: "/partners",
  }),
  title: "Partners & Collaborators | SIPL",
};

const sections = [
  {
    title: "Who we work with",
    paragraphs: [
      "SIPL works with teams close to the science and the people it serves. Every collaboration starts with a clear question, intended use, appropriate permissions, and an evidence pathway suited to the work.",
    ],
    bullets: [
      "Hospitals and health systems: clinical workflows, longitudinal outcomes, and evidence generation.",
      "Clinicians and researchers: clinically relevant questions and evaluation of multimodal signals.",
      "Biopharma and CRO teams: patient characterisation, development questions, and real-world evidence.",
      "Genomics and diagnostics partners: connect biological findings with phenotype and outcomes over time.",
      "Technology and implementation partners: translate research into practical, governed settings.",
    ],
  },
  {
    title: "How we collaborate",
    paragraphs: [
      "Partnerships are scoped around the decision or research question, the data required, and how success will be evaluated. SIPL brings together bioinformatics, systems biology, computational psychiatry, and responsible AI methods to support that work.",
    ],
    bullets: [
      "Define the purpose, intended users, and measurable outcomes.",
      "Agree on consent, privacy, data access, and governance responsibilities.",
      "Evaluate methods with clinical context, uncertainty, and limitations made explicit.",
      "Plan for responsible implementation with appropriate professional oversight.",
    ],
  },
  {
    title: "Collaboration pathways",
    bullets: [
      "Hospitals and health systems: standardised assessment and outcome tracking within existing workflows; engagement may begin with a scoped pilot or platform discussion.",
      "Clinicians and clinics: structured assessment and longitudinal review to support professional judgement.",
      "Research institutions: governed multimodal study infrastructure and validation collaborations.",
      "Biopharma and CRO teams: patient characterisation, trial design questions, and treatment-response research.",
      "Genomics and diagnostics partners: pharmacogenomics and biological signals linked to clinical context.",
      "Channel and implementation partners: delivery models suited to local workflows and operational requirements.",
    ],
  },
  {
    title: "Relationships named in the earlier SIPL website",
    paragraphs: ["The previous website listed the following institutional relationships. Their present status and scope should be confirmed directly with SIPL before relying on them for a new engagement."],
    bullets: [
      "ABVIMS and Dr. Ram Manohar Lohia Hospital, New Delhi — clinical research and validation collaboration.",
      "Jahangir Hospital — implementation relationship listed for LifeBack deployment.",
      "St. John's Medical College, Bengaluru — research collaboration and BIRAC grant co-application listed.",
    ],
  },
  {
    title: "Start a conversation",
    paragraphs: [
      "Tell us about your organisation, the question you are working on, and the expertise or evidence you need. The SIPL team will route your enquiry to the right person.",
    ],
    links: [{ label: "Discuss a partnership with SIPL", href: "/contact/?from=bioai" }],
  },
];

export default function PartnersPage() {
  return (
    <InformationPage
      eyebrow="Partners & collaborators"
      title="One scientific foundation. Different partner questions."
      description="We bring clinical, behavioural, and biological research into context for teams working across brain health, precision medicine, and biopharma."
      sections={sections}
    />
  );
}
