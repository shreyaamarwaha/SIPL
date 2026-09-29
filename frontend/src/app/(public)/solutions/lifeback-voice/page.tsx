import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "SIPL Voice | SIPL",
  description: "Voice analysis as a behavioural signal stream within SIPL multimodal assessment.",
  path: "/solutions/lifeback-voice",
});

const voiceCards = [
  {
    title: "Acoustic Signals",
    body: "Patterns in tone, rhythm, pause structure, and speech dynamics can contribute to behavioural and physiological interpretation.",
  },
  {
    title: "Linguistic Signals",
    body: "Language structure, coherence, content patterns, and expressive variation can provide clinically meaningful context.",
  },
  {
    title: "Longitudinal Change",
    body: "Repeated voice-based assessments can help surface changes over time that may not be visible in a single clinical encounter.",
  },
];

export default function SIPLVoicePage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="SIPL Voice" title="Voice as a behavioural signal stream.">
          <p>
            Voice analysis contributes acoustic, linguistic, behavioural, and longitudinal signal streams that can help surface clinically relevant patterns within a broader multimodal assessment.
          </p>
        </EditorialHero>
        <EditorialSection title="Why voice matters.">
          <p>
            Speech carries more than words. Acoustic patterns, linguistic structure, timing, affect, and longitudinal variation can all contribute to a richer understanding of mental and nervous system health.
          </p>
        </EditorialSection>
        <EditorialSection title="What voice contributes to SIPL.">
          <CardGrid cards={voiceCards} />
        </EditorialSection>
        <EditorialSection title="Voice is one part of the multimodal system.">
          <p>
            No single biomarker — genetic, acoustic, linguistic, or behavioural — is sufficient to characterise the complexity of serious mental illness or nervous system disorders. Voice becomes more powerful when interpreted alongside video, genomics, pharmacogenomics, and clinical data.
          </p>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
