"use client";

import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { useEffect, useRef } from "react";
import HeroImage from "@/shared/assets/Hero.jpg";

export function VisionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="py-32 md:py-48 lg:py-64 bg-[#0F2C45] text-white overflow-hidden relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HeroImage.src}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4"
      />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      <Container>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper variant="slideUp" delay={0.2}>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.1] mb-8">
              A world where<br />
              no one goes<br />
              undetected.
            </h2>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
