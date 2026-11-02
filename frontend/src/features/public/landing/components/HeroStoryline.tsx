"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const story = [
  <>Brain and mental health are <strong>complex.</strong></>,
  <>Symptoms can overlap across conditions.</>,
  <>Biology, behaviour, and lived context all matter.</>,
  <>Genomics can reveal meaningful differences.</>,
  <>Clinical measures show how health changes over time.</>,
  <>Research needs to bring these perspectives together.</>,
  <>Evidence should stay transparent, governed, and human-led.</>,
  <>SIPL connects the signals to advance brain-health research.</>,
];

const STEP_MS = 2500;
const FINAL_STEP_MS = 3200;

export function HeroStoryline() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pinned, setPinned] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || window.sessionStorage.getItem("sipl-hero-story-seen")) {
      setFinished(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPinned(true), STEP_MS));
    story.slice(1).forEach((_, index) => {
      const nextStep = index + 1;
      const delay = STEP_MS * nextStep;
      timers.push(setTimeout(() => setStep(nextStep), delay));
    });
    timers.push(setTimeout(() => {
      window.sessionStorage.setItem("sipl-hero-story-seen", "1");
      setFinished(true);
    }, STEP_MS * (story.length - 1) + FINAL_STEP_MS));

    return () => timers.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  function skip() {
    window.sessionStorage.setItem("sipl-hero-story-seen", "1");
    setFinished(true);
  }

  if (finished) return null;

  return (
    <div
      aria-label="SIPL's research story"
      className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[inherit] px-6 pb-24 pt-36 text-center md:px-12 md:pb-24 md:pt-40"
      role="region"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_34%,rgba(53,113,191,0.16),transparent_45%),radial-gradient(ellipse_at_22%_78%,rgba(96,174,189,0.12),transparent_42%),linear-gradient(135deg,#F7FAFA_0%,#EDF5F6_52%,#F5F8F8_100%)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[12%] opacity-60"
        {...(prefersReducedMotion ? {} : { animate: { x: [0, -12, 0], y: [0, 8, 0] } })}
        transition={{ duration: 34, ease: "easeInOut", repeat: Infinity }}
      >
        <svg className="hero-story-honeycomb h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sipl-hero-hexagons" width="64" height="56" patternUnits="userSpaceOnUse">
              <path d="M16 1 32 10v18L16 37 0 28V10L16 1Z M48 29l16 9v18l-16 9-16-9V38l16-9Z" fill="none" stroke="#123B70" strokeOpacity=".28" strokeWidth=".8" />
            </pattern>
            <linearGradient id="sipl-hex-fade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="white" stopOpacity=".12" />
              <stop offset=".5" stopColor="white" stopOpacity=".8" />
              <stop offset="1" stopColor="white" stopOpacity=".18" />
            </linearGradient>
            <mask id="sipl-hex-mask">
              <rect width="1200" height="700" fill="url(#sipl-hex-fade)" />
            </mask>
          </defs>
          <rect width="1200" height="700" fill="url(#sipl-hero-hexagons)" mask="url(#sipl-hex-mask)" />
          <path d="M-30 455C170 390 215 540 405 474s232-137 422-77 238 148 430 80" fill="none" stroke="#174B82" strokeOpacity=".15" strokeWidth="1.2" />
          <path d="M-20 488C164 430 238 570 420 507s236-139 416-83 250 143 390 93" fill="none" stroke="#287E96" strokeOpacity=".12" strokeWidth=".8" />
        </svg>
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/[0.18] backdrop-blur-[1px]" />

      <button
        className="absolute right-5 top-[calc(86px+env(safe-area-inset-top))] z-20 rounded-full border border-[#071D66]/15 bg-white/85 px-4 py-2 text-xs font-semibold text-[#071D66] shadow-[0_8px_24px_rgba(7,29,102,.08)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#0B8793]/50 hover:shadow-[0_12px_28px_rgba(7,29,102,.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B8793] md:right-10 md:top-[calc(108px+env(safe-area-inset-top))]"
        onClick={skip}
        type="button"
      >
        Skip intro
      </button>

      <div className="relative z-10 flex min-h-64 w-full max-w-4xl items-center justify-center md:min-h-80">
        <AnimatePresence>
          {pinned && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-0 text-xs font-bold tracking-[0.08em] text-[#087D89] md:text-sm"
          >
            Brain health is complex
          </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
        <motion.p
          aria-live="polite"
          initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-[min(90vw,56rem)] text-balance font-medium leading-snug tracking-[-0.035em] text-[#102B49] drop-shadow-[0_1px_0_rgba(255,255,255,.7)] ${
            step === 0 && !pinned ? "text-[clamp(2rem,4.2vw,3.5rem)]" : "text-[clamp(1.75rem,3.4vw,2.75rem)]"
          }`}
          key={step}
        >
          {story[step]}
        </motion.p>
        </AnimatePresence>
      </div>

      <div aria-label={`Story ${step + 1} of ${story.length}`} className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="status">
        {story.map((_, index) => (
          <motion.span
            aria-hidden="true"
            animate={{ width: index === step ? 20 : 6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
            className={`h-1.5 rounded-full ${index === step ? "bg-[#0B8793]" : "bg-[#071D66]/20"}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
