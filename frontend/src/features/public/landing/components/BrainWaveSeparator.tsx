"use client";

import { useMemo, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const SEGMENT_WIDTH = 1440;
const WAVE_HEIGHT = 170;
const MIDLINE = 86;
const SAMPLE_STEP = 8;

function waveAmplitude(x: number) {
  const normalized = x / SEGMENT_WIDTH;
  const activityCluster =
    30 * Math.exp(-Math.pow((normalized - 0.13) / 0.07, 2)) +
    24 * Math.exp(-Math.pow((normalized - 0.28) / 0.09, 2)) +
    7 * Math.exp(-Math.pow((normalized - 0.76) / 0.18, 2));

  return 3.5 + activityCluster;
}

function generateWavePath(time: number) {
  const phase = time / 740;
  const points: string[] = [];

  for (let x = 0; x <= SEGMENT_WIDTH; x += SAMPLE_STEP) {
    const amplitude = waveAmplitude(x);
    const periodicX = (Math.PI * 2 * x) / SEGMENT_WIDTH;
    const y =
      MIDLINE +
      amplitude * Math.sin(periodicX * 13 + phase * 1.15) +
      amplitude * 0.52 * Math.sin(periodicX * 29 - phase * 0.78) +
      amplitude * 0.34 * Math.sin(periodicX * 47 + phase * 1.42) +
      5 * Math.sin(periodicX * 5 - phase * 0.36);

    points.push(`${x === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(2)}`);
  }

  return points.join(" ");
}

export function BrainWaveSeparator() {
  const firstPathRef = useRef<SVGPathElement | null>(null);
  const secondPathRef = useRef<SVGPathElement | null>(null);
  const initialPath = useMemo(() => generateWavePath(0), []);

  useAnimationFrame((time) => {
    const path = generateWavePath(time);
    firstPathRef.current?.setAttribute("d", path);
    secondPathRef.current?.setAttribute("d", path);
  });

  return (
    <div className="relative h-44 w-full overflow-hidden bg-[#F7FAF9]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${SEGMENT_WIDTH} ${WAVE_HEIGHT}`}
      >
        <motion.g
          animate={{ x: [0, -SEGMENT_WIDTH] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <motion.path
            ref={firstPathRef}
            d={initialPath}
            fill="none"
            stroke="#0F2C45"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            ref={secondPathRef}
            d={initialPath}
            fill="none"
            stroke="#0F2C45"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform={`translate(${SEGMENT_WIDTH} 0)`}
            vectorEffect="non-scaling-stroke"
          />
        </motion.g>
      </svg>
    </div>
  );
}
