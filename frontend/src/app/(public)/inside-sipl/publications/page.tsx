import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "Evidence & IP | SIPL",
  description: "Reported clinical evaluation, intellectual property, and grant milestones from Sequoia Insilico.",
  path: "/inside-sipl/publications",
});

const evidenceRecords = [
  {
    title: "Hospital evaluation",
    body: "SIPL reports 91% agreement with clinician-rated HAM-D across 500+ assessments in a clinical validation collaboration with ABVIMS and Dr. RML Hospital, New Delhi. Agreement is a reported validation metric, not a claim of diagnostic accuracy. Study design, cohort details, and limitations should be reviewed alongside the headline figure.",
  },
  {
    title: "Patent and IP",
    body: "SIPL reports published Indian Patent No. 202511025669 and a WIPO PCT application in process. Patent scope, ownership, jurisdiction, and current status should be confirmed through the relevant patent records during diligence.",
  },
  {
    title: "Grant-backed development",
    body: "SIPL reports a ₹50L+ equity-free award through Grand Challenges India GCE-III, supported by BIRAC, DBT, and the Bill & Melinda Gates Foundation. Grant support is not itself evidence of clinical performance or commercial adoption.",
  },
];

export default function InsideSiplPublicationsPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Evidence & IP" title="Milestones with the context to assess them.">
          <p>
            We share reported validation, intellectual property, and grant milestones with clear limits. Investors and research partners should consider the underlying methods and records alongside each headline claim.
          </p>
        </EditorialHero>
        <EditorialSection title="Reported evidence and milestones.">
          <CardGrid cards={evidenceRecords} />
          <p className="mt-10 max-w-3xl leading-7 text-[#001B65]/70">
            A public bibliography and detailed validation protocol are not listed on this page. For supporting records, methodology, and current IP documentation, please contact SIPL.
          </p>
          <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#001B65] px-6 text-sm font-bold text-white transition hover:bg-[#147c79]">
            Request supporting information
          </Link>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
