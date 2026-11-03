"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroBrainBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-44vw] top-[48%] z-0 aspect-[2.254/1] w-[142vw] -translate-y-1/2 opacity-[.2] sm:right-[-30vw] sm:w-[112vw] sm:opacity-30 md:right-[-14vw] md:top-[47%] md:w-[83vw] md:opacity-[.78] lg:right-[-9vw] lg:w-[78vw] xl:right-[-6vw] xl:w-[74vw]"
    >
      <motion.div
        className="relative h-full w-full"
        {...(!reduceMotion ? { animate: { scale: [1, 1.012, 1] } } : {})}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src="/sipl-brain-hero.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 142vw, 78vw"
          className="object-contain drop-shadow-[0_20px_48px_rgba(83,111,96,.13)]"
        />
      </motion.div>
    </div>
  );
}
