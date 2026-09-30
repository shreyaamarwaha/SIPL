import { ReferenceDesignFrame } from "@/components/layout/ReferenceDesignFrame";
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
      <ReferenceDesignFrame src="/design-reference/sipl/index.html" title="Sequoia Insilico — connected intelligence for brain and mental healthcare" />
    </>
  );
}
