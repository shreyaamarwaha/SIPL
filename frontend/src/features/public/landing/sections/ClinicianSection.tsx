import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { CheckCircle2, Activity, FileText, BarChart3 } from "lucide-react";

export function ClinicianSection() {
  const benefits = [
    "Support clinical review with structured multimodal evidence.",
    "Keep screening outputs separate from diagnosis and treatment decisions.",
    "Track longitudinal change without replacing professional evaluation."
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-[#0F2C45] text-white overflow-hidden">
      {/* Premium Dimensional Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Darker depth at top left */}
        <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.4)_0%,transparent_70%)]"></div>
        {/* Rich primary blue center bloom */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)]"></div>
        
        {/* Subtle research mesh (3% opacity) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        {/* Mesh radial mask to ensure it fades smoothly toward edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0F2C45_95%)] opacity-80"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <MotionWrapper variant="slideUp">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white/90 leading-tight">
                Designed for Clinical Excellence
              </h2>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.1}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                LifeBack™ translates multimodal screening observations into clear, structured reports. We build tools that augment clinicians, never replace them.
              </p>
            </MotionWrapper>

            <div className="flex flex-col gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <MotionWrapper key={i} variant="slideUp" delay={0.2 + (i * 0.1)}>
                  <div className="flex items-start gap-4 group">
                    <CheckCircle2 className="text-[#C49327] mt-1 shrink-0" size={24} />
                    <p className="text-lg text-white/[0.85]">{benefit}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper variant="slideUp" delay={0.5}>
              <Button size="lg" className="bg-white text-[#0F2C45] hover:bg-white/90">
                For Clinicians
              </Button>
            </MotionWrapper>
          </div>

          {/* Dashboard Mockup */}
          <div className="lg:w-1/2 w-full relative">
            <MotionWrapper variant="fadeIn" delay={0.3} className="relative z-10">
              <div className="bg-[#FFFFFF] border border-white/60 rounded-[32px] p-6 shadow-2xl text-[#0F2C45]">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#0F2C45]/10">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Patient Assessment Report</h4>
                    <p className="text-sm text-[#0F2C45]/50">Generated: Oct 24, 2026 • Ref: LB-8842</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/70 flex items-center justify-center">
                    <FileText size={20} className="text-[#C49327]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/62 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[#0F2C45]/50">Acoustic Biomarkers</span>
                      <Activity size={18} className="text-[#C49327]" />
                    </div>
                    <div className="text-3xl font-serif">High</div>
                    <p className="text-xs text-[#0F2C45]/50 mt-2">Correlation detected</p>
                  </div>
                  <div className="bg-white/62 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[#0F2C45]/50">Sentiment Analysis</span>
                      <BarChart3 size={18} className="text-[#C49327]" />
                    </div>
                    <div className="text-3xl font-serif">Low</div>
                    <p className="text-xs text-[#0F2C45]/50 mt-2">Valence levels</p>
                  </div>
                </div>

                <div className="bg-white/62 rounded-2xl p-5">
                  <h5 className="text-sm text-[#0F2C45]/70 font-medium mb-3">Clinical Summary</h5>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-[#0F2C45]/10 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-[#0F2C45]/10 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-[#0F2C45]/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-white/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          </div>

        </div>
      </Container>
    </section>
  );
}
