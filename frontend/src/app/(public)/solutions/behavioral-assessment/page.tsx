import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function BehavioralAssessmentPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Behavioral Assessment"
      title="Behavioral Assessment"
      description="Structured behavioural information can add context to clinical research when it is collected consistently and interpreted by qualified professionals."
      sections={[
        {
          title: "A structured conversation",
          paragraphs: ["Assessment workflows organise relevant questions and responses into a consistent format. The goal is to make information easier to review alongside clinical history and other permitted signals."],
          bullets: ["Guided prompts support consistent information capture.", "Response patterns are considered in context, not as standalone diagnoses.", "Qualified professionals retain responsibility for interpretation and care."],
        },
        {
          title: "Designed for evidence and review",
          paragraphs: ["Research evaluation considers usability, missing information, language and population differences, and the relationship between captured responses and appropriate reference measures."],
          links: [{ label: "Explore SIPL's research approach", href: "/research/" }],
        },
      ]}
    />
  );
}
