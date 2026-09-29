import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection, PullQuote } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "About SIPL | Sequoia Insilico",
  description: "Sequoia Insilico Private Limited builds clinical-grade AI infrastructure for mental and nervous system healthcare.",
  path: "/about"
});

const pillars = [
  {
    title: "Clinical-grade infrastructure",
    body: "Sequoia Insilico Private Limited builds clinical-grade AI infrastructure for mental and nervous system healthcare.",
  },
  {
    title: "Multimodal intelligence",
    body: "SIPL builds multimodal clinical intelligence systems that support clinicians with objective evidence across behavioural, physiological, genomic, pharmacogenomic, and clinical data streams.",
  },
  {
    title: "Clinician-led care",
    body: "Technology should help clinicians see more clearly, not replace the people responsible for care.",
  },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="About SIPL" title="Clinical-grade AI infrastructure for mental and nervous system healthcare.">
          <p>
            SIPL builds multimodal clinical intelligence systems for psychiatry and neurology, with SIPL as its flagship neurobiomarker platform for objective, actionable clinical intelligence.
          </p>
        </EditorialHero>

        <EditorialSection title="Built for clinicians, institutions, and researchers.">
          <div className="grid gap-8">
            <CardGrid cards={pillars} />
            <PullQuote>
              We build tools that augment clinicians, never replace them.
            </PullQuote>
          </div>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
