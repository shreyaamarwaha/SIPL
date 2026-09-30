import type { Metadata } from "next";
import { ReferenceDesignFrame } from "@/components/layout/ReferenceDesignFrame";

export const metadata: Metadata = {
  title: "LifeBack | Precision that follows the patient",
  description:
    "A clinician-led, multimodal mental-health assessment platform designed for responsible care and longitudinal understanding.",
};

export default function Home() {
  return (
    <ReferenceDesignFrame
      src="/lifeback/reference-html/lifeback/index.html"
      title="LifeBack — Precision that follows the patient"
    />
  );
}
