import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { Mic, Video, Activity, Network, CheckCircle2, ShieldCheck, Microscope } from "lucide-react";

export function GenomicsPreviewSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F9FAFB] overflow-hidden border-y border-[#0F2C45]/5">
      {/* Premium Structured Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated ambient glow shifts */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[120px] mix-blend-overlay animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0F2C45]/[0.02] rounded-full blur-[100px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_2s]"></div>

        {/* Square Mesh Grid (Thin, subtle, neutral) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F2C451A_1px,transparent_1px),linear-gradient(to_bottom,#0F2C451A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Depth / Fades (embedding the grid into the surface) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#F9FAFB_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB] via-transparent to-[#F9FAFB] opacity-40"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Narrative Content */}
          <div className="flex flex-col items-start text-left max-w-2xl relative z-20">
            <MotionWrapper variant="slideUp" delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white border border-[#0F2C45]/[0.06] rounded-full shadow-[0_2px_15px_rgba(0,27,101,0.03)]">
                <div className="w-5 h-5 rounded-full bg-[#F9FAFB] border border-[#0F2C45]/10 flex items-center justify-center">
                  <Microscope className="w-2.5 h-2.5 text-[#0F2C45]" strokeWidth={2} />
                </div>
                <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#0F2C45] pr-2">
                  Future of Detection
                </span>
              </div>
            </MotionWrapper>
            
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif text-[#0F2C45] mb-8 leading-[1.1] tracking-tight">
                Voice, Video, and Genomics Together
              </h2>
            </MotionWrapper>
            
            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-[#4A5568] mb-14 leading-relaxed font-body font-light">
                LifeBack™ is SIPL’s multimodal neurobiomarker platform, designed to transform how mental and nervous system disorders are assessed, diagnosed, treated, and prevented through objective, actionable intelligence.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.4} className="w-full">
              <div className="p-8 md:p-10 rounded-[20px] bg-white border border-[#0F2C45]/[0.06] shadow-[0_10px_40px_rgba(0,27,101,0.02)] mb-10 relative overflow-hidden group hover:shadow-[0_15px_50px_rgba(0,27,101,0.04)] transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0F2C45]/80"></div>
                <h3 className="text-xl md:text-2xl font-serif text-[#0F2C45] mb-4">
                  Complementary Modalities, One Clinical Lens
                </h3>
                <p className="text-[15px] md:text-base text-[#64748B] leading-relaxed font-body">
                  Voice and video can reveal behavioral expression; genomics-informed research can add biological context. LifeBack™ keeps these signals organized for screening and assessment support, while clinical professionals remain responsible for care decisions.
                </p>
              </div>
            </MotionWrapper>

            {/* Premium Trust Signals */}
            <MotionWrapper variant="slideUp" delay={0.45} className="flex flex-wrap items-center gap-6 md:gap-8 mb-14 px-2">
              <div className="flex items-center gap-2.5 text-[#64748B] group cursor-default">
                <Microscope className="w-4 h-4 text-[#C49327] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-semibold text-[#0F2C45]/60 group-hover:text-[#0F2C45]/80 transition-colors">Research-Led</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#64748B] group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#C49327] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-semibold text-[#0F2C45]/60 group-hover:text-[#0F2C45]/80 transition-colors">Clinician Guided</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#64748B] group cursor-default">
                <ShieldCheck className="w-4 h-4 text-[#C49327] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-semibold text-[#0F2C45]/60 group-hover:text-[#0F2C45]/80 transition-colors">Privacy First</span>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.5}>
              <Link href="/research" passHref>
                <Button size="lg" className="group relative overflow-hidden bg-[#0F2C45] text-white hover:bg-[#0F2C45]/90 transition-all duration-500 font-heading tracking-wide px-10 py-6 rounded-xl shadow-[0_8px_20px_rgba(0,27,101,0.08)] hover:shadow-[0_15px_30px_rgba(0,27,101,0.15)] hover:-translate-y-0.5">
                  <span className="flex items-center gap-3 text-sm font-medium">
                    Learn About Our Research
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </MotionWrapper>
          </div>

          {/* Right Side: The Research Canvas */}
          <div className="relative w-full h-[680px] lg:h-[780px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
            {/* Canvas Base Layer */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[32px] border border-white/60 shadow-[0_10px_60px_rgba(0,27,101,0.03)] overflow-hidden">
               {/* Ambient research grid inside canvas */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F2C4504_1px,transparent_1px),linear-gradient(to_bottom,#0F2C4504_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-80"></div>
               {/* Canvas internal glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-[#0F2C45]/5 to-[#C49327]/5 rounded-full blur-[100px] mix-blend-multiply"></div>
            </div>

            {/* Subtle Curved Signal Paths (Replacing dotted lines) */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              <defs>
                <linearGradient id="flow-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F2C45" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#0F2C45" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="flow-gradient-right" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C49327" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#0F2C45" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="flow-gradient-center" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#0F2C45" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#0F2C45" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Converging gentle curves */}
              <path d="M 20,16 C 35,16 50,25 50,40" fill="none" stroke="url(#flow-gradient-left)" strokeWidth="0.3" className="animate-[pulse_5s_ease-in-out_infinite]" />
              <path d="M 50,12 L 50,40" fill="none" stroke="url(#flow-gradient-center)" strokeWidth="0.3" className="animate-[pulse_5s_ease-in-out_infinite_1s]" />
              <path d="M 80,16 C 65,16 50,25 50,40" fill="none" stroke="url(#flow-gradient-right)" strokeWidth="0.3" className="animate-[pulse_5s_ease-in-out_infinite_2s]" />
              
              {/* Output path to clinical evidence */}
              <path d="M 50,40 L 50,70" fill="none" stroke="#0F2C45" strokeOpacity="0.1" strokeWidth="0.4" strokeDasharray="1 3" />
            </svg>

            {/* Modality Node 1: Voice */}
            <MotionWrapper variant="fadeIn" delay={0.4} className="absolute top-[16%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] bg-white/90 backdrop-blur-md border border-[#0F2C45]/[0.08] shadow-[0_8px_25px_rgba(0,27,101,0.04)] flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                  <div className="w-0.5 h-3 bg-[#0F2C45] rounded-full mx-0.5 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 h-5 bg-[#0F2C45] rounded-full mx-0.5 animate-[pulse_1.2s_ease-in-out_infinite_0.3s]"></div>
                  <div className="w-0.5 h-4 bg-[#0F2C45] rounded-full mx-0.5 animate-[pulse_1.8s_ease-in-out_infinite_0.6s]"></div>
                </div>
                <Mic size={18} className="text-[#0F2C45]/80 relative z-10 group-hover:text-[#0F2C45] group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-heading text-[#0F2C45]/70 text-[10px] font-semibold tracking-[0.15em] uppercase">Voice</span>
            </MotionWrapper>

            {/* Modality Node 2: Video */}
            <MotionWrapper variant="fadeIn" delay={0.5} className="absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] bg-white/90 backdrop-blur-md border border-[#0F2C45]/[0.08] shadow-[0_8px_25px_rgba(0,27,101,0.04)] flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-3 border border-[#0F2C45]/10 rounded opacity-50 group-hover:scale-90 transition-transform duration-700 pointer-events-none"></div>
                <Video size={18} className="text-[#0F2C45]/80 relative z-10 group-hover:text-[#0F2C45] group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-heading text-[#0F2C45]/70 text-[10px] font-semibold tracking-[0.15em] uppercase">Video</span>
            </MotionWrapper>

            {/* Modality Node 3: Genomics */}
            <MotionWrapper variant="fadeIn" delay={0.6} className="absolute top-[16%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] bg-white/90 backdrop-blur-md border border-[#C49327]/20 shadow-[0_8px_25px_rgba(212,175,55,0.05)] flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-[spin_8s_linear_infinite]">
                    <path d="M4 4C9 9 15 15 20 20M20 4C15 9 9 15 4 20" stroke="#C49327" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <Activity size={18} className="text-[#C49327]/90 relative z-10 group-hover:text-[#C49327] group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-heading text-[#C49327]/80 text-[10px] font-semibold tracking-[0.15em] uppercase">Genomics</span>
            </MotionWrapper>

            {/* Processing Core: Multimodal Intelligence Engine */}
            <MotionWrapper variant="scale" delay={0.3} className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="relative w-56 h-56 md:w-[260px] md:h-[260px] flex items-center justify-center">
                
                {/* Outer Ring: Signal Collection */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: 'rotateX(60deg) rotateY(15deg)' }}>
                  <div className="w-full h-full rounded-full border border-[#0F2C45]/[0.05] animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#0F2C45]/20 rounded-full blur-[1px]"></div>
                  <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-[#C49327]/20 rounded-full blur-[1px]"></div>
                </div>

                {/* Middle Ring: Signal Fusion */}
                <div className="absolute inset-4 md:inset-6 z-0 pointer-events-none" style={{ transform: 'rotateX(60deg) rotateY(-25deg)' }}>
                  <div className="w-full h-full rounded-full border border-[#C49327]/[0.06] animate-[spin_30s_linear_infinite_reverse]"></div>
                </div>
                
                {/* Inner Fusion Core Structure */}
                <div className="absolute inset-10 md:inset-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_50px_rgba(0,27,101,0.05)] z-10"></div>
                
                {/* Inner Ring: Clinical Intelligence */}
                <div className="absolute inset-12 md:inset-14 rounded-full border border-[#0F2C45]/[0.03] shadow-inner animate-[pulse_4s_ease-in-out_infinite] z-20 bg-gradient-to-br from-[#0F2C45]/[0.01] to-transparent"></div>

                {/* Central Processor */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#0F2C45] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,27,101,0.2)] overflow-hidden z-30 group cursor-default">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C49327_0%,transparent_65%)] opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-[pulse_5s_ease-in-out_infinite]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ffffff_0%,transparent_60%)] opacity-20"></div>
                  <Network className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" strokeWidth={1.5} />
                </div>
              </div>
            </MotionWrapper>

            {/* Clinical Evidence Card (Premium Report Extract) */}
            <MotionWrapper variant="slideUp" delay={0.7} className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 w-[95%] md:w-[85%] max-w-[420px]">
              <div className="bg-white rounded-[20px] shadow-[0_30px_80px_rgba(0,27,101,0.06)] border border-[#0F2C45]/[0.04] relative overflow-hidden flex flex-col group backdrop-blur-2xl transition-transform duration-700 hover:-translate-y-1">
                
                {/* Physical report styling: spine */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#0F2C45]/90 to-[#C49327]/80"></div>
                
                <div className="p-7 md:p-9">
                  {/* Report Header */}
                  <div className="flex items-start justify-between border-b border-[#0F2C45]/[0.06] pb-5 mb-6">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C49327] mb-2 block font-semibold">Output 1.0</span>
                      <h4 className="font-serif text-[#0F2C45] text-xl md:text-2xl leading-tight">Clinical Evidence Extract</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-[#0F2C45]/[0.04] flex items-center justify-center shadow-sm">
                      <Microscope className="w-4 h-4 text-[#0F2C45]/40" />
                    </div>
                  </div>
                  
                  {/* Report Data Points */}
                  <div className="flex flex-col gap-4 mb-2">
                    <div className="flex items-center justify-between group/item">
                      <span className="text-[13px] md:text-sm font-body text-[#4A5568] font-medium tracking-wide">Behavioral Expression</span>
                      <div className="flex-grow mx-4 border-b border-dotted border-[#0F2C45]/10 group-hover/item:border-[#0F2C45]/30 transition-colors"></div>
                      <span className="text-[10px] md:text-[11px] font-mono text-[#0F2C45]/50 uppercase tracking-wider">Detected</span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-[13px] md:text-sm font-body text-[#4A5568] font-medium tracking-wide">Acoustic Biomarkers</span>
                      <div className="flex-grow mx-4 border-b border-dotted border-[#0F2C45]/10 group-hover/item:border-[#0F2C45]/30 transition-colors"></div>
                      <span className="text-[10px] md:text-[11px] font-mono text-[#0F2C45]/50 uppercase tracking-wider">Verified</span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-[13px] md:text-sm font-body text-[#4A5568] font-medium tracking-wide">Biological Context</span>
                      <div className="flex-grow mx-4 border-b border-dotted border-[#0F2C45]/10 group-hover/item:border-[#0F2C45]/30 transition-colors"></div>
                      <span className="text-[10px] md:text-[11px] font-mono text-[#C49327]/80 uppercase tracking-wider font-semibold">Mapped</span>
                    </div>
                  </div>
                </div>

                {/* Footer Signature */}
                <div className="bg-[#F9FAFB]/80 border-t border-[#0F2C45]/[0.04] px-7 py-4 md:px-9 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#64748B]">
                    <ShieldCheck className="w-3.5 h-3.5 opacity-60" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.15em] font-semibold text-[#64748B]/80">Integrated Assessment Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#0F2C45]/20"></div>
                    <div className="w-1 h-1 rounded-full bg-[#0F2C45]/20"></div>
                    <div className="w-1 h-1 rounded-full bg-[#C49327] opacity-80"></div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </Container>
    </section>
  );
}
