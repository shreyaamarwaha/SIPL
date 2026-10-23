import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function DevToolsPage() {
  return (
    <PublicRoutePage
      eyebrow="Technical collaboration"
      title="Integration starts with a shared use case."
      description="SIPL works with clinical, research, and technology teams to scope governed integrations around a defined workflow and intended use."
      sections={[
        {
          title: "Plan the workflow first",
          paragraphs: ["Technical conversations begin by defining the users, information flows, operational environment, and outcome to be supported. Access, interoperability, and data handling are then considered within the partnership's governance requirements."],
          bullets: ["Intended users and responsibilities.", "Data sources, permissions, and retention.", "Security and interoperability needs.", "Evaluation and monitoring requirements."],
        },
        {
          title: "Request technical information",
          paragraphs: ["Public SDK or API documentation is not currently provided on this page. For a research or implementation discussion, share your organisation and integration question with the SIPL team."],
          links: [{ label: "Contact SIPL about a technical collaboration", href: "/contact/" }],
        },
      ]}
    />
  );
}
