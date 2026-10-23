import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export function EducationSection() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-[#F7FAF9]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <MotionWrapper variant="slideUp">
            <h2 className="font-serif text-4xl md:text-6xl text-[#0A0C10] mb-12 lg:mb-20 leading-tight">
              &quot;Depression is often invisible until it becomes impossible to ignore.&quot;
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <MotionWrapper variant="slideUp" delay={0.1}>
              <h3 className="text-xl font-semibold mb-4">What depression is</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Far beyond temporary sadness, clinical depression is a systemic condition that affects cognitive function, behavioral patterns, and physical health. It alters how a person processes the world, often masking itself as fatigue or apathy.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.2}>
              <h3 className="text-xl font-semibold mb-4">Why symptoms stay hidden</h3>
              <p className="text-[#4A5568] leading-relaxed">
                The human mind is incredibly adept at compensating for distress. Many individuals unknowingly develop masking behaviors, making it difficult for even close family members or standard questionnaires to detect the underlying severity.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <h3 className="text-xl font-semibold mb-4">Why early detection matters</h3>
              <p className="text-[#4A5568] leading-relaxed">
                When identified in its early stages, intervention can significantly alter the trajectory of the condition. Early detection reduces the risk of chronic episodes, shortens recovery time, and preserves cognitive resilience.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.4}>
              <h3 className="text-xl font-semibold mb-4">Why objective screening matters</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Subjective self-reporting is often flawed by the very nature of depression itself. By introducing objective vocal and behavioral biomarkers, we add a critical layer of scientific observation to the screening process.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
