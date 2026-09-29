import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection, PullQuote, Timeline } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Solutions | SIPL",
  description: "SIPL combines behavioural, physiological, genomic, pharmacogenomic, and clinical data streams to support structured clinical review.",
  path: "/solutions",
});

const workflow = [
  {
    title: "Screening",
    body: "SIPL captures structured inputs across behavioural, physiological, genomic, pharmacogenomic, and clinical data streams.",
  },
  {
    title: "Analysis",
    body: "AI-assisted systems synthesise multimodal signals into structured clinical intelligence.",
  },
  {
    title: "Insights",
    body: "SIPL surfaces longitudinal patterns, pharmacogenomic interactions, contraindications, probabilistic risk scores, and evidence-linked outputs.",
  },
  {
    title: "Clinical Review",
    body: "Clinicians interpret findings within the full human story of the patient, exercise judgement, and make final diagnostic and treatment decisions.",
  },
];

export default function SolutionsPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Solutions" title="Multimodal intelligence for clinical assessment.">
          <p>
            SIPL’s solutions combine behavioural, physiological, genomic, pharmacogenomic, and clinical data streams to support structured clinical review.
          </p>
        </EditorialHero>

        <EditorialSection title="Why single-modality assessment is not enough.">
          <div className="grid gap-6">
            <p>
              Mental and nervous system disorders are among the most complex phenomena in biology. Single-modality systems miss information. SIPL combines multiple biological and behavioral signal streams to generate richer clinical evidence.
            </p>
            <p>
              No single biomarker — genetic, acoustic, linguistic, or behavioural — is sufficient to characterise the complexity of serious mental illness or nervous system disorders. SIPL&apos;s research philosophy is fundamentally integrative. We pursue signal across modalities because that is where the biological truth lies — in the convergence of evidence, not the loudness of any single channel.
            </p>
          </div>
        </EditorialSection>

        <EditorialSection title="SIPL: clinical intelligence across modalities.">
          <div className="grid gap-6">
            <p>
              SIPL is SIPL’s multimodal neurobiomarker platform, designed to transform how mental and nervous system disorders are assessed, diagnosed, treated, and prevented through objective, actionable intelligence.
            </p>
            <p>
              Through SIPL, SIPL fuses genomics, behavioural signals, pharmacogenomics, and clinical data into objective, actionable intelligence — validated in live hospital conditions under ICMR-compliant ethical oversight, and built to work within the real constraints of the Indian healthcare system.
            </p>
            <CardGrid
              cards={[
                { title: "Behavioural signals", body: "Structured inputs and observed patterns that support clearer clinical review." },
                { title: "Genomic context", body: "Biological variation and pharmacogenomic information interpreted alongside the whole patient story." },
                { title: "Clinical data streams", body: "Patient history, longitudinal context, and evidence-linked outputs organized for professional judgement." },
              ]}
            />
          </div>
        </EditorialSection>

        <EditorialSection title="From screening to clinical review.">
          <div className="grid gap-8">
            <Timeline items={workflow} />
            <PullQuote>
              The clinician is not a user interface between the AI and the patient. The clinician is the clinician. The AI is the instrument.
            </PullQuote>
          </div>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
