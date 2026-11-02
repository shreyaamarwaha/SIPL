import type { Metadata } from "next";
import { PublicationsListing } from "@/features/public/publications/PublicationsListing";
import { PublicLayout } from "@/layouts/PublicLayout";

export const metadata: Metadata = {
  title: "Publications & Talks | SIPL",
  description: "SIPL publications, science reviews, conference talks and events.",
};

export default function PublicationsPage() {
  return (
    <PublicLayout>
      <PublicationsListing />
    </PublicLayout>
  );
}
