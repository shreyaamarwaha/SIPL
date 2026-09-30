"use client";

import { useEffect, useState } from "react";

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

const STEP_MS = 1350;
const FINAL_STEP_MS = 2400;

export function HeroStoryline() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || window.sessionStorage.getItem("sipl-hero-story-seen")) {
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
  }, []);

  function skip() {
    window.sessionStorage.setItem("sipl-hero-story-seen", "1");
    setFinished(true);
  }

  if (finished) return null;

  return (
    <div
      aria-label="SIPL's research story"
      className="absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-[#F5F8FC]/95 px-6 py-16 text-center backdrop-blur-[2px] md:px-12"
      role="region"
    >
      <button
        className="absolute right-5 top-5 rounded-full border border-[#10243B]/15 bg-white/70 px-4 py-2 text-xs font-semibold text-[#53687A] transition hover:border-[#147C79] hover:text-[#147C79] md:right-10 md:top-8"
        onClick={skip}
        type="button"
      >
        Skip intro
      </button>

      <div className="relative flex min-h-56 w-full max-w-4xl items-center justify-center md:min-h-64">
        {pinned && (
          <p className="absolute left-0 right-0 top-0 text-xs font-semibold tracking-wide text-[#147C79] transition-all duration-700 md:text-sm">
            Brain health is complex
          </p>
        )}
        <p
          aria-live="polite"
          className={`max-w-3xl text-balance font-medium leading-snug text-[#10243B] transition-all duration-700 ease-out ${
            step === 0 && !pinned
              ? "translate-y-0 scale-100 text-3xl opacity-100 md:text-5xl"
              : "translate-y-0 scale-100 text-2xl opacity-100 md:text-4xl"
          }`}
          key={step}
        >
          {story[step]}
        </p>
      </div>

      <div aria-label={`Story ${step + 1} of ${story.length}`} className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2" role="status">
        {story.map((_, index) => (
          <span
            aria-hidden="true"
            className={`h-1.5 rounded-full transition-all duration-300 ${index === step ? "w-5 bg-[#147C79]" : "w-1.5 bg-[#10243B]/20"}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
