import type { Metadata } from "next";
import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "LifeBack | Precision that follows the patient",
  description:
    "A clinician-led, multimodal mental-health assessment platform designed for responsible care and longitudinal understanding.",
};

export default function LifeBackPage() {
  return (
    <StaticHtmlFrame
      src="/lifeback-site/lifeback/index.html"
      title="LifeBack — Precision that follows the patient"
    />
  );
}
