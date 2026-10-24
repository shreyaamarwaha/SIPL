import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";
import { generateSeoMetadata, organizationSchema, medicalSchema } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "BioAI for Brain Health & Biopharma Research | SIPL",
  description: "Sequoia Insilico builds responsible BioAI connecting brain and mental healthcare, multimodal research, genomics, and biopharma discovery.",
  path: "/"
});

export default function Home() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, medicalSchema]) }} 
      />
      <StaticHtmlFrame src="/sipl-site/index.html" title="Sequoia Insilico — connected intelligence for brain and mental healthcare" />
    </>
  );
}
