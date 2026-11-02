"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type LearningStep = readonly [number: string, title: string, description: string];

export function LearningLoop({ steps }: { steps: readonly LearningStep[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setActiveStep(steps.length - 1);
      return;
    }

    let stopped = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const advance = (index: number) => {
      if (stopped) return;
      const isReset = index >= steps.length;
      setActiveStep(isReset ? -1 : index);
      const nextIndex = isReset ? 0 : index + 1;
      const pause = isReset ? 420 : index === steps.length - 1 ? 1050 : 840;
      timers.push(setTimeout(() => advance(nextIndex), pause));
    };

    advance(0);
    return () => {
      stopped = true;
      timers.forEach(clearTimeout);
    };
  }, [isInView, reduceMotion, steps]);

  const progress = activeStep < 1 ? 0 : ((activeStep / (steps.length - 1)) * 100);

  return (
    <div className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-8">
      <div>
        <h3 className="text-base font-semibold text-[#102B49]">A learning loop</h3>
        <p className="mt-1 text-xs leading-5 text-[#4A5568]">Each stage informs the next.</p>
      </div>

      <div ref={timelineRef} className="relative grid gap-0 md:grid-cols-6" aria-label="SIPL research learning loop" role="region">
        <div aria-hidden="true" className="learning-loop-track pointer-events-none absolute left-0 right-[16.6667%] top-[5px] z-0 hidden h-px bg-[#102B49]/10 md:block">
          <motion.span
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#071D66] via-[#0B8793] to-[#34B7C3] shadow-[0_0_8px_rgba(11,135,147,.28)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        </div>

        {steps.map(([number, title, description], index) => {
          const isLit = index <= activeStep;
          const isCurrent = index === activeStep;
          return (
            <motion.article
              key={number}
              className="relative z-10 grid grid-cols-[12px_1fr] gap-x-3 border-b border-[#102B49]/[0.08] py-3 last:border-0 md:block md:border-0 md:py-0 md:pr-3"
              initial={false}
              animate={{ opacity: isLit ? 1 : 0.64, y: isLit ? 0 : 3 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            >
              <motion.span
                aria-hidden="true"
                className={`learning-loop-dot relative z-20 mt-1 inline-flex h-[11px] w-[11px] rounded-full transition-colors md:absolute md:left-0 md:top-0 md:mt-0 ${isLit ? "bg-[#0B8793]" : "bg-[#9AAAB8]"}`}
                animate={{ scale: isCurrent ? 1.22 : 1, boxShadow: isCurrent ? "0 0 0 5px rgba(11,135,147,.13)" : "0 0 0 0 rgba(11,135,147,0)" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              />
              <div className="min-w-0">
                <p className={`text-[10px] font-bold tracking-[0.16em] transition-colors ${isLit ? "text-[#087D89]" : "text-[#738395]"}`}>{number}</p>
                <h4 className={`mt-2 text-sm font-semibold transition-colors ${isLit ? "text-[#102B49]" : "text-[#53697D]"}`}>{title}</h4>
                <p className={`mt-1 text-xs leading-5 transition-colors ${isLit ? "text-[#40566B]" : "text-[#718092]"}`}>{description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
