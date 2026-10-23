import { EditorialHero } from "@/components/layout/EditorialSections";
import { InvestorEnquiryForm } from "@/features/public/investors/InvestorEnquiryForm";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Investor Enquiry | SIPL",
    description: "Share your investment focus and request a conversation with Sequoia Insilico.",
    path: "/investor-enquiry",
  }),
  title: "Investor Enquiry | SIPL",
};

export default function InvestorEnquiryPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F7FAF9] text-[#0F2C45]">
        <EditorialHero eyebrow="Investor enquiry" title="Start a focused conversation with SIPL.">
          <p>Share a little about your investment focus and the questions you would like to explore. The SIPL team will route your enquiry and follow up with appropriate information.</p>
          <p className="mt-5 text-sm text-[#6F8190]">Investor materials may include the company overview, financial model, validation summary, intellectual property and grant records, and diligence documents where appropriate.</p>
        </EditorialHero>
        <section className="pb-24">
          <Container>
            <div className="grid gap-10 border-t border-[#D8E5E2] pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <aside>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#087D78]">For investors & strategic partners</p>
                <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight md:text-3xl">What to include</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#3C5162]">
                  <li className="border-l-2 border-[#C49327] pl-4">Your organisation and role.</li>
                  <li className="border-l-2 border-[#C49327] pl-4">Investment stage and typical range.</li>
                  <li className="border-l-2 border-[#C49327] pl-4">Areas of interest and focus sectors.</li>
                  <li className="border-l-2 border-[#C49327] pl-4">Your timeline and how you heard about SIPL.</li>
                </ul>
                <p className="mt-8 text-xs leading-5 text-[#6F8190]">Confidential diligence materials may be shared after an initial conversation and an NDA where appropriate. Do not submit personal medical information.</p>
              </aside>
              <div className="border border-[#D8E5E2] bg-white p-6 shadow-[0_18px_54px_rgba(15,44,69,0.06)] sm:p-8 md:p-10">
                <InvestorEnquiryForm />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
