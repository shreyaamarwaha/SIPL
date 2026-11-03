"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function SendEnvelopeAnimation({
  show,
  onComplete,
}: {
  show: boolean;
  onComplete: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="contact-envelope-flight"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
        >
          <motion.div
            className="relative h-[100px] w-[136px]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -42, y: 18, rotate: -8, scale: 0.88 }}
            animate={
              reduceMotion
                ? { opacity: [0, 1, 0] }
                : {
                    opacity: [0, 1, 1, 0],
                    x: [-42, 0, 0, "112vw"],
                    y: [18, 0, 0, -18],
                    rotate: [-8, 0, 0, 10],
                    scale: [0.88, 1, 1, 0.72],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 1.35, times: [0, 0.2, 1], ease: "easeOut" }
                : { duration: 1.85, times: [0, 0.16, 0.48, 1], ease: [0.22, 1, 0.36, 1] }
            }
            onAnimationComplete={onComplete}
          >
            <motion.div
              className="absolute left-4 top-0 z-0 h-[54px] w-[104px] rounded-t-md border border-[#D7E6E8] bg-white px-3 pt-2 shadow-sm"
              initial={{ opacity: 1, rotateX: 0, scaleY: 1 }}
              animate={reduceMotion ? { opacity: 0 } : { opacity: [1, 1, 0, 0], rotateX: [0, 0, 82, 88], scaleY: [1, 1, 0.68, 0.55] }}
              transition={{ duration: reduceMotion ? 0.1 : 0.9, times: [0, 0.3, 0.76, 1], ease: "easeInOut" }}
              style={{ transformOrigin: "bottom center", transformPerspective: 700 }}
            >
              <span className="block h-1.5 w-12 rounded-full bg-[#34B7C3]/55" />
              <span className="mt-2 block h-1.5 w-16 rounded-full bg-[#071D66]/15" />
              <span className="mt-1.5 block h-1.5 w-10 rounded-full bg-[#071D66]/15" />
            </motion.div>

            <motion.svg
              viewBox="0 0 120 84"
              role="presentation"
              className="absolute bottom-0 left-0 z-10 h-[84px] w-[120px] drop-shadow-[0_12px_22px_rgba(7,29,102,.2)]"
              initial={{ opacity: 0, scale: 0.78 }}
              animate={reduceMotion ? { opacity: [0, 1, 0] } : { opacity: [0, 0, 1, 1, 1], scale: [0.78, 0.78, 1, 1, 0.9] }}
              transition={{ duration: reduceMotion ? 1.35 : 1.85, times: reduceMotion ? [0, 0.2, 1] : [0, 0.16, 0.42, 0.75, 1], ease: "easeInOut" }}
            >
              <rect x="2" y="9" width="116" height="72" rx="8" fill="#F7FCFC" stroke="#0B8793" strokeWidth="2" />
              <path d="M4 76 43 44M116 76 77 44" fill="none" stroke="#0B8793" strokeWidth="2" />
              <motion.path
                d="M4 12 60 53 116 12"
                fill="#DDF4F2"
                stroke="#0B8793"
                strokeWidth="2"
                initial={{ rotateX: 180 }}
                animate={reduceMotion ? { rotateX: 0 } : { rotateX: [180, 180, 0, 0] }}
                transition={{ duration: reduceMotion ? 0.1 : 0.8, times: [0, 0.25, 0.88, 1], ease: "easeInOut" }}
                style={{ transformOrigin: "60px 12px", transformPerspective: 500 }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
