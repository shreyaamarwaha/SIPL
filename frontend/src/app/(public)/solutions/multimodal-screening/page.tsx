import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function MultimodalScreeningPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Multimodal Screening"
      title="Multimodal Screening"
      description="Brain and mental health research can benefit from studying behavioural, clinical, and biological information together, while keeping each signal's limits in view."
      sections={[
        {
          title: "Context across modalities",
          paragraphs: ["A multimodal framework can organise structured assessments, behavioural observations, and relevant biological information around a defined research question. Combining modalities does not remove uncertainty; it makes careful evaluation more important."],
          bullets: ["Structured clinical and behavioural information.", "Repeated observations and longitudinal change.", "Biological and genomic context where appropriate permissions and evidence support its use."],
        },
        {
          title: "From intake to professional review",
          paragraphs: ["The workflow should make the intended use, inputs, and limitations transparent. Outputs are organised for research or professional review and are not a substitute for diagnosis or treatment."],
          links: [{ label: "See SIPL's research framework", href: "/research/" }],
        },
      ]}
    />
  );
}
