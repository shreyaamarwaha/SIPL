import { InvestorLandingPage } from "@/features/public/landing/InvestorLandingPage";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata, organizationSchema, medicalSchema } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "BioAI for Brain Health & Biopharma Research | SIPL",
  description: "Sequoia Insilico builds responsible BioAI connecting brain and mental healthcare, multimodal research, genomics, and biopharma discovery.",
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
