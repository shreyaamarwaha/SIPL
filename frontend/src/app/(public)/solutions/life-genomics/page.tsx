import { PublicLayout } from "@/layouts/PublicLayout";
import { EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "SIPL Genomics | SIPL",
  description: "Genomics and pharmacogenomics for precision psychiatry within SIPL.",
  path: "/solutions/life-genomics",
});

export default function LifeGenomicsPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="SIPL Genomics" title="Genomics and pharmacogenomics for precision psychiatry.">
          <p>
            Genomics and pharmacogenomics support precision psychiatry by helping clinicians understand biological variation, treatment response, and medication safety.
          </p>
        </EditorialHero>
        <EditorialSection title="From trial-and-error to precision-informed care.">
          <p>
            Replacing trial-and-error prescribing with genomics-guided precision — fewer adverse events, faster remission, and better long-term outcomes for every patient.
          </p>
        </EditorialSection>
        <EditorialSection title="India-specific genomic evidence.">
          <p>
            The genetic architecture, disease phenotypes, socioeconomic determinants, and healthcare contexts of Indian psychiatric populations are meaningfully distinct from Western cohorts. We do not import findings and assume transferability. Our research is anchored in Indian genomic references — IndiGen, South Asia AXIOM arrays — and validated in Indian clinical settings. We build the evidence base our patients deserve, not the one that was convenient to borrow.
          </p>
        </EditorialSection>
        <EditorialSection title="Indian populations demand Indian evidence.">
          <p>
            The majority of psychiatric research underpinning global EBM guidelines has been conducted on Western, predominantly Caucasian populations. SIPL actively generates and integrates Indian-specific clinical and genomic evidence — because applying foreign population norms to Indian patients is not evidence-based medicine; it is epidemiological mismatch.
          </p>
        </EditorialSection>
        <EditorialSection title="Part of the SIPL intelligence layer.">
          <p>
            Genomics becomes clinically useful when interpreted alongside behavioural signals, pharmacogenomics, clinical context, patient values, and clinician judgement. SIPL is designed to bring these streams together into objective, actionable intelligence.
          </p>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
