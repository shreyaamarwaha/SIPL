import { InvestorLandingPage } from "@/features/public/landing/InvestorLandingPage";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata, organizationSchema, medicalSchema } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "SIPL | Connected Intelligence for Brain and Mental Healthcare",
  description: "SIPL builds connected intelligence infrastructure for brain and mental healthcare across clinical care, research, genomics, and biopharma.",
  path: "/"
});

export default function Home() {
  return (
    <PublicLayout>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, medicalSchema]) }} 
      />
      <InvestorLandingPage />
    </PublicLayout>
  );
}
