import { CareersContent } from "@/components/layout/CareersContent";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Careers | SIPL",
    description:
      "Express interest in joining SIPL’s research, engineering, and clinical intelligence team.",
    path: "/careers",
  }),
  title: "Careers | SIPL",
};

export default function CareersPage() {
  return <CareersContent />;
}
