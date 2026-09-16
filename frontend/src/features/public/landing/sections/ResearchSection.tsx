import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { Card } from "@/shared/ui/Card";
import { Badge } from "@/shared/ui/Badge";
import { BookOpen } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32 bg-[#F5F8FC]">
      <Container>
        <SectionHeading 
          title="From research questions to measurable intelligence" 
          subtitle="SIPL builds translational systems that connect research, data, modeling, and clinical application in a single evidence-driven pipeline."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <MotionWrapper variant="slideUp">
            <Card className="h-full border border-[#D6D6D6] hover:border-[#0A0C10] transition-colors duration-300">
              <Badge variant="muted" className="mb-6">Methodology</Badge>
              <h3 className="text-2xl font-semibold mb-4 text-[#0A0C10]">Voice Biomarkers in Psychiatry</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Research indicates that psychomotor retardation, a core symptom of depression, manifests acoustically. LifeBack™ analyzes vocal prosody, formants, and articulation rates to identify these subtle physiological changes without requiring specialized hardware.
              </p>
              <div className="flex items-center text-[#D4AF37] font-medium text-sm group cursor-pointer">
                <BookOpen size={16} className="mr-2" />
                <span>Read foundational research</span>
              </div>
            </Card>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" delay={0.1}>
            <Card className="h-full border border-[#D6D6D6] hover:border-[#0A0C10] transition-colors duration-300">
              <Badge variant="muted" className="mb-6">Validation</Badge>
              <h3 className="text-2xl font-semibold mb-4 text-[#0A0C10]">Behavioral Screening Accuracy</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                By combining established psychometric frameworks (like PHQ-9 and BDI) with dynamic, multi-turn AI interactions, our screening process reduces the self-reporting bias inherent in static questionnaires.
              </p>
              <div className="flex items-center text-[#D4AF37] font-medium text-sm group cursor-pointer">
                <BookOpen size={16} className="mr-2" />
                <span>View clinical benchmarks</span>
              </div>
            </Card>
          </MotionWrapper>
        </div>

        {/* Roadmap */}
        <div className="max-w-4xl mx-auto">
          <MotionWrapper variant="slideUp" className="text-center mb-12">
            <h3 className="font-serif text-3xl text-[#0A0C10]">Research Roadmap</h3>
            <p className="text-[#4A5568] mt-4">Expanding our multi-modal detection capabilities.</p>
          </MotionWrapper>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D6D6D6] -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              <MotionWrapper variant="slideUp" delay={0.2} className="bg-white px-6 py-4 md:text-center">
                <div className="w-4 h-4 rounded-full bg-[#001B65] md:mx-auto mb-4 border-4 border-white shadow-sm relative md:-mt-[26px]"></div>
                <div className="font-semibold text-lg text-[#0A0C10] mb-2">Phase 1: Voice</div>
                <p className="text-sm text-[#4A5568]">Acoustic and linguistic analysis integration.</p>
                <Badge variant="muted" className="mt-4">Current</Badge>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.3} className="bg-white px-6 py-4 md:text-center">
                <div className="w-4 h-4 rounded-full bg-[#D6D6D6] md:mx-auto mb-4 border-4 border-white shadow-sm relative md:-mt-[26px]"></div>
                <div className="font-semibold text-lg text-[#0A0C10] mb-2">Phase 2: Video</div>
                <p className="text-sm text-[#4A5568]">Facial micro-expression and motor analysis.</p>
                <Badge variant="muted" className="mt-4">In Development</Badge>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.4} className="bg-white px-6 py-4 md:text-center">
                <div className="w-4 h-4 rounded-full bg-[#D6D6D6] md:mx-auto mb-4 border-4 border-white shadow-sm relative md:-mt-[26px]"></div>
                <div className="font-semibold text-lg text-[#0A0C10] mb-2">Phase 3: Genomics</div>
                <p className="text-sm text-[#4A5568]">Biomarker correlation studies.</p>
                <Badge variant="muted" className="mt-4">Research</Badge>
              </MotionWrapper>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
