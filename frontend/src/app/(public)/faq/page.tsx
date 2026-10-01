import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { EditorialHero } from "@/components/layout/EditorialSections";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Frequently Asked Questions | SIPL",
  description: "Answers about SIPL’s BioAI research, clinical role, data practices, and collaboration pathways.",
  path: "/faq",
});

const questions = [
  {
    group: "About SIPL",
    items: [
      ["What does Sequoia Insilico do?", "SIPL is a New Delhi-based BioAI company working across brain and mental healthcare, clinical research, and biopharma discovery. Our research connects behavioural, clinical, biological, and computational approaches."],
      ["What do you mean by BioAI?", "We use computational methods and AI to study biological and clinical data. The goal is to produce evidence that researchers and qualified professionals can evaluate, not to replace scientific or clinical judgement."],
    ],
  },
  {
    group: "Clinical use and LifeBack",
    items: [
      ["Does SIPL provide diagnosis or treatment through this website?", "No. This website provides company and research information. It does not diagnose, treat, or provide personal medical advice. For health concerns, speak with a qualified healthcare professional."],
      ["Can I create a LifeBack account or complete an assessment?", "Not through the public website at this time. The LifeBack Access screens are previews; they do not create accounts, authenticate users, or run assessments."],
      ["How can an organisation discuss a LifeBack engagement?", "Use the Start an Engagement form on the LifeBack page or request a meeting. The team will follow up by email to discuss fit and next steps."],
    ],
  },
  {
    group: "Research and collaboration",
    items: [
      ["How can we explore a research or clinical partnership?", "Send an enquiry through the contact page or request a meeting. Please describe the organisation, research question, and the type of collaboration you have in mind. Do not include patient-identifiable information."],
      ["Does SIPL accept investment or biopharma partnership enquiries?", "Yes. Use the contact form and select or describe the relevant context. We’ll route the message to the appropriate team."],
    ],
  },
  {
    group: "Privacy and support",
    items: [
      ["What information should I avoid sharing?", "Please do not send health records, genetic data, patient identifiers, passwords, or other sensitive personal information through the public contact or meeting forms."],
      ["How do I apply for a role?", "Visit Careers to review the expression-of-interest form and submit a PDF CV. Applications are sent to the SIPL team for review."],
    ],
  },
];

export default function FaqPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC] text-[#001B65]">
        <EditorialHero eyebrow="Answers" title="A clearer view of how we work.">
          <p>Short answers about SIPL, our research direction, and how to start a conversation.</p>
        </EditorialHero>
        <section className="pb-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#147C79]">Quick guide</p>
                <p className="mt-4 max-w-sm text-base leading-7 text-[#001B65]/68">Find the right route for questions about research, partnerships, LifeBack, and privacy.</p>
                <Link href="/contact" className="mt-6 inline-flex text-sm font-bold text-[#001B65] underline decoration-[#D4AF37] decoration-2 underline-offset-4">Ask SIPL a question</Link>
              </aside>
              <div className="grid gap-10">
                {questions.map((group) => (
                  <section key={group.group}>
                    <h2 className="mb-4 border-b border-[#001B65]/12 pb-4 font-heading text-xl font-semibold md:text-2xl">{group.group}</h2>
                    <div className="grid gap-3">
                      {group.items.map(([question, answer]) => (
                        <details key={question} className="group rounded-[20px] border border-[#001B65]/10 bg-[#F9F8F3] px-5 py-4 open:border-[#147C79]/30 open:bg-white md:px-6">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-semibold leading-6 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147C79] md:text-lg">
                            {question}
                            <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#147C79] transition-transform group-open:rotate-180" />
                          </summary>
                          <p className="max-w-3xl pb-2 pt-4 text-sm leading-7 text-[#001B65]/70 md:text-base">{answer}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
