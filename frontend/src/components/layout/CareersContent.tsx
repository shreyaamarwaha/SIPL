import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { CareerApplicationForm } from "@/features/public/careers/CareerApplicationForm";

export function CareersContent() {
  return (
    <PublicLayout>
      <section className="bg-[#F5F8FC] pb-28 pt-40 text-[#001B65]">
        <Container>
          <div className="grid gap-14 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                Careers at SIPL
              </p>
              <h1 className="mt-6 max-w-2xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.03em] md:text-6xl xl:text-7xl">
                Build technology with meaningful impact.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#001B65]/72">
                SIPL brings together researchers, engineers, and healthcare collaborators working
                on responsible clinical intelligence. Submit your details to express interest in
                joining the team.
              </p>
              <p className="mt-8 max-w-lg border-l border-[#D4AF37] pl-5 text-sm leading-6 text-[#001B65]/68">
                Applications are reviewed according to current project and hiring requirements.
              </p>
            </div>

            <section
              aria-labelledby="career-form-heading"
              className="border border-[#001B65]/12 bg-[#F9F8F3] p-6 shadow-[0_18px_54px_rgba(0,27,101,0.07)] sm:p-8 md:p-10 lg:p-12"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                Expression of interest
              </p>
              <h2
                id="career-form-heading"
                className="mt-4 font-heading text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
              >
                Tell us about yourself.
              </h2>
              <p className="mb-9 mt-4 max-w-xl text-sm leading-6 text-[#001B65]/66">
                Complete the form and attach your resume or CV. All fields are required.
              </p>
              <CareerApplicationForm />
            </section>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
