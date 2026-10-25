import type { Metadata } from "next";
import { StaticHtmlFrame } from "@/components/layout/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "Publications & Talks | SIPL",
  description: "SIPL publications, science reviews, conference talks and events.",
};

export default function PublicationsPage() {
  return (
    <StaticHtmlFrame
      src="/publications/index.html"
      title="Publications and talks — SIPL"
    />
  );
}
