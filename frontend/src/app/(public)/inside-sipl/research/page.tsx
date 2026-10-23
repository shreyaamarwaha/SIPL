import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function InsideSiplResearchPage() {
  return (
    <PublicRoutePage
      eyebrow="Inside SIPL / Research"
      title="Research Culture"
      description="SIPL treats research as part of the full system: defining clinically meaningful questions, evaluating methods carefully, and carrying evidence forward into discovery."
      sections={[
        {
          title: "Questions grounded in biology and care",
          paragraphs: [
            "Research begins with the clinical or scientific question. Bioinformatics, systems biology, computational psychiatry, and multimodal analysis help connect observed phenotypes with biological context and outcomes.",
            "SIPL's approach is designed to study patterns across populations and over time, rather than treating a single signal as a complete explanation.",
          ],
        },
        {
          title: "How we evaluate",
          bullets: [
            "Set the intended use and success measures before model evaluation.",
            "Review data quality, representativeness, and relevant sources of uncertainty.",
            "Compare results with appropriate clinical and scientific reference points.",
            "Report evidence with its study context, limitations, and validation status.",
          ],
        },
        {
          title: "A learning loop",
          paragraphs: ["Clinical experience informs research questions. Research findings create new hypotheses for study. Each step needs independent evaluation before it can support a different use."],
          links: [{ label: "Read evidence and publications", href: "/inside-sipl/publications/" }],
        },
      ]}
    />
  );
}
