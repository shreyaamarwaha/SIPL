import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { CareerApplicationForm } from "@/features/public/careers/CareerApplicationForm";

export function CareersContent() {
  return (
    <PublicLayout>
      <section className="bg-[#F7FAF9] pb-28 pt-40 text-[#0F2C45]">
        <Container>
          <div className="grid gap-14 border-t border-[#0F2C45]/12 pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/60">
                Careers at SIPL
              </p>
              <h1 className="mt-6 max-w-2xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.03em] md:text-6xl xl:text-7xl">
                Build technology with meaningful impact.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#0F2C45]/72">
                SIPL brings together researchers, engineers, and healthcare collaborators working
                on responsible clinical intelligence. Submit your details to express interest in
                joining the team.
              </p>
              <p className="mt-8 max-w-lg border-l border-[#C49327] pl-5 text-sm leading-6 text-[#0F2C45]/68">
                Applications are reviewed according to current project and hiring requirements.
              </p>
            </div>

            <section
              aria-labelledby="career-form-heading"
              className="border border-[#0F2C45]/12 bg-[#FFFFFF] p-6 shadow-[0_18px_54px_rgba(0,27,101,0.07)] sm:p-8 md:p-10 lg:p-12"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/58">
                Expression of interest
              </p>
              <h2
                id="career-form-heading"
                className="mt-4 font-heading text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
              >
                Tell us about yourself.
              </h2>
              <p className="mb-9 mt-4 max-w-xl text-sm leading-6 text-[#0F2C45]/66">
                Complete the form and attach your resume or CV. All fields are required.
              </p>
              <CareerApplicationForm />
            </section>
          </div>
        </Container>
      </section>
      <section className="border-t border-[#D8E5E2] bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#087D78]">Work with us</p>
              <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold leading-tight text-[#0F2C45] md:text-5xl">What we are searching for.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#3C5162]">We bring together different disciplines to work on complex questions in brain health and clinical research.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Research and biology", "Bioinformatics, systems biology, genomics, neuroscience, and computational psychiatry."],
                ["AI and engineering", "Machine learning, data science, software engineering, and secure product infrastructure."],
                ["Clinical research", "Psychiatry, psychology, clinical operations, study design, and evidence evaluation."],
                ["Product and partnerships", "Product design, implementation, programme management, and research collaboration."],
              ].map(([title, description]) => (
                <article key={title} className="border border-[#D8E5E2] bg-[#F7FAF9] p-6">
                  <h3 className="font-heading text-lg font-semibold text-[#0F2C45]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6F8190]">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-5 border-l-4 border-[#087D78] bg-[#EEF7F4] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#087D78]">Clinical collaboration</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-[#0F2C45]">Medical and referral board</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#3C5162]">SIPL welcomes conversations with clinicians and institutions interested in advising on research priorities, clinical governance, validation, and responsible collaboration. This is a professional advisory pathway, not a patient referral or care service.</p>
            </div>
            <a href="/contact/?from=clinical" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#0F2C45] px-5 text-sm font-semibold text-white transition hover:bg-[#087D78]">Discuss collaboration</a>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
