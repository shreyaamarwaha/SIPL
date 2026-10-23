import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function InsideSiplAboutPage() {
  return (
    <PublicRoutePage
      eyebrow="Inside SIPL / About"
      title="About SIPL"
      description="Sequoia Insilico is a New Delhi deep-science BioAI company translating research across bioinformatics, systems biology, neuroscience, and computational psychiatry into clinical-grade intelligence."
      sections={[
        {
          title: "Research translated into useful intelligence",
          paragraphs: [
            "SIPL connects clinical context, behavioural signals, biological information, and longitudinal outcomes to support more meaningful research in brain and mental healthcare.",
            "The company builds an evidence pathway from scientific question to evaluation and responsible implementation, with qualified professionals accountable for interpretation and care.",
          ],
        },
        {
          title: "One scientific foundation, multiple applications",
          bullets: [
            "Bioinformatics and systems biology inform how biological variation is studied.",
            "Computational psychiatry connects phenotype, clinical context, and outcomes.",
            "Multimodal AI helps organise signals for research and professional review.",
            "Genomics and biopharma collaborations extend the questions SIPL can investigate.",
          ],
        },
        {
          title: "People and partnerships",
          paragraphs: ["SIPL works across research, clinical practice, engineering, and company building. The work depends on thoughtful collaboration with hospitals, researchers, biopharma, and genomics partners."],
          links: [
            { label: "Meet the people behind SIPL", href: "/team/" },
            { label: "Explore partnerships", href: "/partners/" },
          ],
        },
      ]}
    />
  );
}
