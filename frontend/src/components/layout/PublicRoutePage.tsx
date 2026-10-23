import { InformationPage, type InformationSection } from "@/components/layout/InformationPage";

type PublicRoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  sections?: InformationSection[];
};

export function PublicRoutePage({ eyebrow, title, description, points = [], sections }: PublicRoutePageProps) {
  const pageSections = sections ?? (points.length ? [{ title: "How this fits the SIPL framework", bullets: points }] : []);

  return (
    <InformationPage
      eyebrow={eyebrow}
      title={title}
      description={description}
      sections={pageSections}
    />
  );
}
