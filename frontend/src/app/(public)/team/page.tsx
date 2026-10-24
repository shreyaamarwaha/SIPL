import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Founders and Team | SIPL",
    description:
      "Meet the researchers, engineers, and collaborators building Sequoia Insilico.",
    path: "/team",
  }),
  title: "Founders and Team | SIPL",
};

export default function TeamPage() {
  return (
    <StaticHtmlFrame
      src="/sipl-site/index.html#team"
      title="Founders and team | Sequoia Insilico"
    />
  );
}
