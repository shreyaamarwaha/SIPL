import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { HOW_IT_WORKS_STEPS } from "@/features/public/landing/content/how-it-works.content";

export function HowItWorksSection() {
  return (
    <section id="detection" className="py-24 md:py-32 lg:py-40 bg-[#F5F8FC]">
      <Container>
        <SectionHeading 
          title="From data to intelligence" 
          subtitle="SIPL turns complex biological, behavioral, and clinical signals into structured intelligence that supports research, screening, and decision-making across healthcare pathways."
          className="mb-20"
        />

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-[#D6D6D6]" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <MotionWrapper 
                key={step.number}
                variant="slideUp" 
                delay={0.1 * index}
                className="relative"
              >
                {/* Mobile Timeline Line */}
                {index !== HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="block lg:hidden absolute top-12 left-6 bottom-[-3rem] w-[2px] bg-[#D6D6D6]" />
                )}
                
                <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8">
                  <div className="relative z-10 flex w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-white border border-[#001B65]/12 items-center justify-center font-serif text-xl lg:text-3xl shrink-0 text-[#001B65] shadow-sm">
                    {step.number}
                  </div>
                  <div className="pt-2 lg:pt-0 lg:text-center">
                    <h3 className="text-xl font-semibold mb-3 text-[#0A0C10]">{step.title}</h3>
                    <p className="text-[#4A5568] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
