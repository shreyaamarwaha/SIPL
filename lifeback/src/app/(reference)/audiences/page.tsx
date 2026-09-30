import type { Metadata } from "next";
import { ReferenceDesignFrame } from "@/components/layout/ReferenceDesignFrame";

export const metadata: Metadata = {
  title: "Who It's For | LifeBack",
  description:
    "Explore LifeBack pathways for people, healthcare settings, corporations, and institutions.",
};

export default function AudiencesPage() {
  return (
    <ReferenceDesignFrame
      src="/lifeback/reference-html/lifeback/audiences.html"
      title="Who it's for — LifeBack"
    />
  );
}
