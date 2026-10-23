import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { Shield, Lock, Users, Stethoscope } from "lucide-react";

export function TrustSection() {
  const cards = [
    {
      title: "Research First",
      description: "Our algorithms are trained on peer-reviewed clinical datasets, ensuring objective and scientifically valid markers are prioritized over generalized assumptions.",
      icon: Shield
    },
    {
      title: "Privacy First",
      description: "Voice and behavioral data are processed securely, anonymized at the source, and never used for unauthorized advertising or third-party tracking.",
      icon: Lock
    },
    {
      title: "Human-in-the-Loop AI",
      description: "AI does not diagnose. Our system surfaces insights to empower human clinicians, ensuring professional oversight remains central to the care pathway.",
      icon: Users
    },
    {
      title: "Clinically Responsible Design",
      description: "Built in consultation with mental health professionals to ensure the screening experience is safe, non-triggering, and clinically sound.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="trust" className="relative py-24 md:py-32 bg-[#F7FAF9] overflow-hidden">
      
      {/* Premium Structured Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated ambient glow shifts */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[120px] mix-blend-overlay animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0F2C45]/[0.02] rounded-full blur-[100px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_2s]"></div>

        {/* Square Mesh Grid (Thin, subtle, neutral) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F2C451A_1px,transparent_1px),linear-gradient(to_bottom,#0F2C451A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Depth / Fades (embedding the grid into the surface) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#F7FAF9_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAF9] via-transparent to-[#F7FAF9] opacity-40"></div>
      </div>

      <Container className="relative z-10">
        <SectionHeading 
          title="Built on Trust and Responsibility" 
          subtitle="Technology in healthcare must be held to a higher standard. LifeBack™ is designed with rigorous ethical boundaries."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {cards.map((card, i) => (
            <MotionWrapper key={card.title} variant="slideUp" delay={0.1 * i}>
              <Card className="h-full bg-[#FFFFFF]/90 backdrop-blur-md border border-white/60 hover:bg-[#FFFFFF] hover:shadow-[0_15px_40px_rgba(0,27,101,0.04)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col h-full relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F2C45] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-105 transition-transform duration-500">
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-[#0A0C10] group-hover:text-[#0F2C45] transition-colors duration-300">{card.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed text-[15px] md:text-base font-body">{card.description}</p>
                </div>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper variant="fadeIn" delay={0.4}>
          <div className="bg-[#0F2C45] rounded-[24px] p-6 md:p-8 text-white flex flex-col sm:flex-row items-center gap-6 justify-between shadow-[0_20px_40px_rgba(0,27,101,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                <Stethoscope size={24} className="text-[#C49327]" strokeWidth={1.5} />
              </div>
              <p className="text-white/90 text-sm md:text-base font-body font-light leading-relaxed max-w-3xl">
                <strong className="text-white font-medium tracking-wide block sm:inline mb-1 sm:mb-0 mr-2">Important Clinical Disclaimer:</strong> 
                LifeBack™ is an AI-assisted behavioral screening system and is not a diagnostic tool. It is designed to support, not replace, professional clinical evaluation.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
