import { InformationPage } from "@/components/layout/InformationPage";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Investors & Strategic Partners | SIPL",
    description: "Review SIPL's BioAI thesis, reported validation, research pipeline, and investor engagement pathway.",
    path: "/investors",
  }),
  title: "Investors & Strategic Partners | SIPL",
};

const sections = [
  {
    title: "Why SIPL",
    paragraphs: [
      "Sequoia Insilico is building research infrastructure for brain and mental healthcare, where clinical context, behavioural signals, and biological variation need to be understood together.",
      "The company combines domain depth in computational psychiatry and systems biology with a multimodal BioAI approach designed for clinical research, biopharma, and precision medicine partnerships.",
    ],
    bullets: [
      "A focused starting point in brain and mental health.",
      "Clinical, behavioural, and biological context in one research framework.",
      "A path from clinical evaluation toward stratification and discovery.",
      "Human oversight, governance, and evidence remain central to deployment.",
    ],
  },
  {
    id: "evidence",
    title: "Reported evidence and milestones",
    paragraphs: [
      "The following milestones are reported by SIPL. They describe early validation, intellectual property, and research support; they are not regulatory clearance or a claim of diagnostic accuracy.",
    ],
    bullets: [
      "91% agreement with clinician-rated HAM-D across 500+ hospital assessments, as reported by SIPL.",
      "Indian Patent No. 202511025669 granted; a WIPO PCT application is in process, as reported by SIPL.",
      "₹50L+ equity-free support through Grand Challenges India GCE-III, as reported by SIPL.",
      "DPIIT recognition and a DBT–MoST innovation award, as reported by SIPL.",
    ],
    links: [{ label: "Read SIPL evidence, publications, and IP context", href: "/inside-sipl/publications/" }],
  },
  {
    title: "Research pipeline",
    paragraphs: [
      "SIPL's pipeline explores how multimodal information can support better research questions and more meaningful evaluation across the care and discovery continuum.",
    ],
    bullets: [
      "The LifeBack® brain-health assessment platform and longitudinal monitoring research.",
      "Digital biomarkers studied alongside behavioural and clinical context.",
      "Patient stratification and treatment-response research.",
      "Genomics and pharmacogenomics linked to clinical context.",
      "Real-world evidence to inform future studies and development.",
    ],
    links: [{ label: "Explore the research framework", href: "/research/" }],
  },
  {
    title: "Investor engagement",
    paragraphs: [
      "Investor conversations begin with a direct discussion about fit, stage, and the information needed for a useful first review. SIPL can share appropriate materials after establishing context.",
      "Please include your organisation, investment focus, and the questions you would like to explore. Do not submit personal medical information through the website.",
    ],
    links: [{ label: "Request an investor conversation", href: "/investor-enquiry/" }],
  },
  {
    title: "Materials for investor discussions",
    paragraphs: ["The previous SIPL website described an investor pack intended to provide context behind the public overview. Materials can be shared directly where appropriate and subject to confidentiality needs."],
    bullets: [
      "Investor deck covering the problem, platform, market, business model, team, and use of funds.",
      "Financial model with revenue assumptions, cost structure, and funding requirements.",
      "Validation summary with study design, metrics, and results from the reported clinical collaboration.",
      "Patent, PCT, and grant documentation.",
      "Company, legal, and compliance records for diligence; a non-disclosure agreement may be needed for confidential documents.",
      "A founder conversation to discuss fit, questions, and next steps.",
    ],
  },
  {
    title: "What to include in your enquiry",
    bullets: [
      "Your name, organisation, and role.",
      "Investor type and usual investment stage and range.",
      "Areas of interest, such as clinical AI, genomics, or biopharma.",
      "Your decision timeline and how you heard about SIPL.",
    ],
    paragraphs: ["SIPL's earlier website outlined a typical response path: acknowledge the request, share suitable public materials, arrange an NDA where needed, provide confidential diligence documents when appropriate, and schedule a founder call."],
    links: [{ label: "Send an investor enquiry", href: "/investor-enquiry/" }],
  },
];

export default function InvestorsPage() {
  return (
    <InformationPage
      eyebrow="Investors & strategic partners"
      title="A BioAI platform connecting care and discovery."
      description="SIPL brings clinical research, multimodal biomarkers, genomics, and biopharma questions into one evidence-led framework."
      sections={sections}
    />
  );
}
