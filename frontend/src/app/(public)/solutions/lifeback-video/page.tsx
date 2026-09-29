import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "SIPL Video | SIPL",
  description: "Video-based behavioural intelligence for SIPL multimodal assessment.",
  path: "/solutions/lifeback-video",
});

const videoCards = [
  {
    title: "Affective Signals",
    body: "Facial expression and visible affect can provide additional context for clinical assessment.",
  },
  {
    title: "Motor and Behavioural Signals",
    body: "Movement, posture, response patterns, and interaction dynamics can contribute to a richer behavioural profile.",
  },
  {
    title: "Longitudinal Observation",
    body: "Repeated video-based assessments can help reveal change over time and support more context-sensitive review.",
  },
];

export default function SIPLVideoPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="SIPL Video" title="Video-based behavioural intelligence.">
          <p>
            Video-based behavioural intelligence helps capture visual, motor, affective, and interaction-level signals as part of a broader clinical picture.
          </p>
        </EditorialHero>
        <EditorialSection title="Visual behaviour as clinical context.">
          <p>
            Mental and nervous system disorders often appear through patterns of behaviour, expression, movement, interaction, and change over time. Video analysis helps structure these observations as part of multimodal clinical intelligence.
          </p>
        </EditorialSection>
        <EditorialSection title="What video contributes to SIPL.">
          <CardGrid cards={videoCards} />
        </EditorialSection>
        <EditorialSection title="Integrated, not isolated.">
          <p>
            Video is not interpreted as a standalone answer. SIPL integrates video-based signals with voice, genomics, pharmacogenomics, and clinical data to support structured clinical review.
          </p>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
