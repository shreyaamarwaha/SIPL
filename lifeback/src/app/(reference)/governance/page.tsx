import type { Metadata } from "next";
import { ReferenceDesignFrame } from "@/components/layout/ReferenceDesignFrame";

export const metadata: Metadata = {
  title: "Safety & Governance | LifeBack",
  description:
    "How LifeBack approaches privacy, clinical oversight, safety, and responsible AI governance.",
};

export default function GovernancePage() {
  return (
    <ReferenceDesignFrame
      src="/lifeback/reference-html/lifeback/governance.html"
      title="Safety and governance — LifeBack"
    />
  );
}
