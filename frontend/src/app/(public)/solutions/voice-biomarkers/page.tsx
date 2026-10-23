import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function VoiceBiomarkersPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Voice Biomarkers"
      title="Voice Biomarkers"
      description="Speech carries measurable acoustic and linguistic features. Studied carefully, these features may help researchers understand behavioural change alongside clinical context."
      sections={[
        {
          title: "Signals need context",
          paragraphs: ["Research may examine features such as rhythm, pauses, pitch, intensity, and language patterns. No single feature is a clinical conclusion; interpretation depends on study design, population, language, recording conditions, and other relevant information."],
          bullets: ["Prosody and cadence across repeated samples.", "Acoustic features with quality checks and clear provenance.", "Language and context considered in evaluation.", "Professional interpretation with uncertainty and limitations visible."],
        },
        {
          title: "Responsible collection and evaluation",
          paragraphs: ["Voice data is sensitive. Collection requires a clear purpose, appropriate consent, and suitable safeguards. Evaluation should consider differences in language, accent, age, and recording environment."],
          links: [{ label: "Learn about SIPL's responsible AI approach", href: "/ethical-ai/" }],
        },
      ]}
    />
  );
}
