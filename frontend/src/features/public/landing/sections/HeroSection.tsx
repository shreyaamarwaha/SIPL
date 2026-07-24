"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroImage1 from "@/shared/assets/Hero.jpg";
import HeroImage2 from "@/shared/assets/Hero2.jpg";
import HeroImage3 from "@/shared/assets/Hero3.jpg";

const HERO_IMAGES = [
  { src: HeroImage1, alt: "LifeBack™ Multimodal Screening Platform" },
  { src: HeroImage2, alt: "Clinician Analyzing LifeBack™ Reports" },
  { src: HeroImage3, alt: "Patient and Professional Consultation" }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000); // 7-second rotation

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90dvh] lg:min-h-[85dvh] pt-28 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-[#F5F8FC]">
      <div className="max-w-[1440px] mx-auto w-full">

        <div className="bg-[#F9F8F3] rounded-[40px] shadow-sm overflow-hidden flex flex-col lg:flex-row h-full w-full p-4 lg:p-6 gap-6">

          {/* Content Area */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8 lg:px-12 lg:py-12 lg:w-[45%] shrink-0 order-2 lg:order-1">
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h1 className="font-serif text-[44px] leading-[1.1] md:text-[56px] lg:text-[72px] tracking-tight text-[#0A0C10] mb-6">
                Clinical-grade AI<br />
                for mental and nervous<br />
                system healthcare.
              </h1>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-[#4A5568] mb-10 max-w-xl leading-relaxed">
                Sequoia Insilico builds clinical-grade AI infrastructure for mental and nervous
                system healthcare. LifeBack™ is SIPL&apos;s multimodal neurobiomarker platform
                for objective, actionable clinical intelligence.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.35}>
              <p className="mb-10 font-heading text-base font-semibold uppercase tracking-[0.14em] text-[#001B65]">
                Voice. Video. Genomics. Clinical intelligence.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Link href="https://lifeback-sipl.vercel.app" passHref className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Explore LifeBack™
                </Button>
              </Link>
              <Link href="/research" passHref className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">
                  View Research
                </Button>
              </Link>
            </MotionWrapper>
          </div>

          {/* Video / Editorial Canvas Area */}
          <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-[500px] bg-[#001B65] rounded-[32px] overflow-hidden order-1 lg:order-2">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 1.5,
                  ease: [0.65, 0, 0.35, 1]
                }}
                className="absolute inset-0 w-full h-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.03] }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={HERO_IMAGES[currentIndex]!.src}
                    alt={HERO_IMAGES[currentIndex]!.alt}
                    fill
                    priority={currentIndex === 0}
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Subtle Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001B65]/10 to-transparent pointer-events-none mix-blend-multiply z-10"></div>
            
            {/* Image Position Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-8 z-20 flex items-center gap-2.5">
              {HERO_IMAGES.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
