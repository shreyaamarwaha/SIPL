import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { ContactForm } from "@/features/public/contact/ContactForm";

export const metadata = {
  ...generateSeoMetadata({
    title: "Contact SIPL",
    description:
      "Contact Sequoia Insilico regarding LifeBack™, research partnerships, clinical collaborations, careers, and general enquiries.",
    path: "/contact",
  }),
  title: "Contact SIPL",
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="bg-[#F5F8FC] pb-28 pt-40 text-[#001B65]">
        <Container>
          <div className="grid gap-14 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                Contact SIPL
              </p>
              <h1 className="mt-6 max-w-2xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.03em] md:text-6xl xl:text-7xl">
                Let’s start a meaningful conversation.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B65]/72">
                Whether you are interested in LifeBack™, research partnerships, clinical
                collaboration, careers, or a general enquiry, send us a message and the SIPL team
                will get back to you.
              </p>
              <p className="mt-8 max-w-lg border-l border-[#D4AF37] pl-5 text-sm leading-6 text-[#001B65]/68">
                Please do not submit personal medical information through this form.
              </p>
            </div>

            <section
              aria-labelledby="contact-form-heading"
              className="border border-[#001B65]/12 bg-[#F9F8F3] p-6 shadow-[0_18px_54px_rgba(0,27,101,0.07)] sm:p-8 md:p-10 lg:p-12"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                Send an enquiry
              </p>
              <h2
                id="contact-form-heading"
                className="mt-4 font-heading text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
              >
                How can we help?
              </h2>
              <p className="mb-9 mt-4 max-w-xl text-sm leading-6 text-[#001B65]/66">
                Share a few details below. Email and message are required.
              </p>
              <ContactForm />
            </section>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
