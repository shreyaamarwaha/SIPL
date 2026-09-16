"use client";

import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] lg:min-h-[82dvh] pt-28 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-[#F5F8FC]">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="relative overflow-hidden rounded-[32px] border border-[#001B65]/10 bg-[radial-gradient(circle_at_top_left,rgba(0,27,101,0.08),transparent_28%),linear-gradient(135deg,#f9fbff_0%,#eef5ff_40%,#f7f5ef_100%)] shadow-[0_30px_80px_rgba(10,24,60,0.08)] p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,27,101,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,27,101,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-[680px] py-6 md:py-8 lg:py-12">
              <MotionWrapper variant="slideUp" delay={0.2}>
                <p className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#001B65]/70">
                  AI-powered healthcare and biopharma intelligence company
                </p>
                <h1 className="font-serif text-[42px] leading-[0.98] md:text-[58px] lg:text-[72px] tracking-[-0.04em] text-[#0A0C10] mb-6">
                  Intelligence infrastructure
                  <span className="block text-[#001B65]">for healthcare and biopharma.</span>
                </h1>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.3}>
                <p className="text-lg md:text-xl text-[#4A5568] mb-8 max-w-xl leading-relaxed">
                  SIPL builds AI-powered systems for digital biomarkers, clinical intelligence,
                  and evidence generation across healthcare delivery and biopharma innovation.
                </p>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.35} className="flex flex-col sm:flex-row gap-4">
                <Link href="/solutions" passHref className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Explore Solutions
                  </Button>
                </Link>
                <Link href="/about" passHref className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full">
                    About SIPL
                  </Button>
                </Link>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.4}>
                <div className="mt-10 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]">
                  <span className="rounded-full border border-[#001B65]/15 bg-white/80 px-3 py-2">Biomarkers</span>
                  <span className="rounded-full border border-[#001B65]/15 bg-white/80 px-3 py-2">Clinical AI</span>
                  <span className="rounded-full border border-[#001B65]/15 bg-white/80 px-3 py-2">Digital Evidence</span>
                  <span className="rounded-full border border-[#001B65]/15 bg-white/80 px-3 py-2">Healthcare Systems</span>
                </div>
              </MotionWrapper>
            </div>

            <div className="relative ml-auto w-full max-w-[560px]">
              <div className="rounded-[28px] border border-[#001B65]/10 bg-[#001B65] p-4 shadow-[0_28px_70px_rgba(0,27,101,0.14)]">
                <div className="rounded-[22px] bg-white p-4 md:p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#001B65]/60">Platform overview</p>
                      <h2 className="mt-2 font-serif text-2xl md:text-3xl text-[#001B65]">LifeBack™</h2>
                    </div>
                    <span className="rounded-full border border-[#D4AF37]/40 bg-[#fff6d5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#001B65]">
                      flagship product
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[20px] bg-[#F3F7FB] p-4">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#001B65]/60">Signal streams</p>
                      <p className="mt-3 text-3xl font-serif text-[#001B65]">12+</p>
                    </div>
                    <div className="rounded-[20px] bg-[#F3F7FB] p-4">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#001B65]/60">Clinical coverage</p>
                      <p className="mt-3 text-3xl font-serif text-[#001B65]">91%</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[20px] bg-[#F3F7FB] p-4">
                    <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#001B65]/60">
                      <span>Workflow</span>
                      <span>Evidence layered</span>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      {[18, 28, 36, 54, 62, 78].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-xl bg-gradient-to-t from-[#001B65] via-[#3c67cb] to-[#8ec5ff]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Multimodal', 'Evidence-based', 'Clinician-led', 'Research-grade'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#001B65]/10 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#001B65]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
