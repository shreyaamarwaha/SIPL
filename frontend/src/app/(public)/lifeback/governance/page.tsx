import type { Metadata } from "next";
import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "Safety & Governance | LifeBack",
  description:
    "How LifeBack approaches privacy, clinical oversight, safety, and responsible AI governance.",
};

export default function LifeBackGovernancePage() {
  return (
    <StaticHtmlFrame
      src="/lifeback-site/lifeback/governance.html"
      title="Safety and governance — LifeBack"
    />
  );
}
