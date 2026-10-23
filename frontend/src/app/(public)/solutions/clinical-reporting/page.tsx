import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function ClinicalReportingPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Clinical Reporting"
      title="Clinical Reporting"
      description="Clear reporting can help professionals review structured findings, study context, and uncertainty together. SIPL's reporting direction is designed around human interpretation."
      sections={[
        {
          title: "Make evidence easier to review",
          paragraphs: ["A useful report should make its source information and context visible. Structured summaries can help organise findings for professional review without presenting an automated conclusion as a diagnosis."],
          bullets: ["Present relevant findings with their context.", "Make limitations and uncertainty clear.", "Support review by qualified professionals.", "Keep the final interpretation with the responsible clinician or research team."],
        },
        {
          title: "Evaluation before use",
          paragraphs: ["Reporting methods need to be evaluated for clarity, consistency, and suitability for their intended setting. Their value depends on the quality of the underlying evidence and the workflow in which they are used."],
          links: [{ label: "Read about evaluation and validation", href: "/research/" }],
        },
      ]}
    />
  );
}
