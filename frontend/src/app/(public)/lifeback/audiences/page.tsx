import type { Metadata } from "next";
import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "Who It's For | LifeBack",
  description:
    "Explore LifeBack pathways for people, healthcare settings, corporations, and institutions.",
};

export default function LifeBackAudiencesPage() {
  return (
    <StaticHtmlFrame
      src="/lifeback-site/lifeback/audiences.html"
      title="Who it's for — LifeBack"
    />
  );
}
