"use client";

import { motion, useReducedMotion } from "framer-motion";

const connections = [
  "M105 104 C129 86 145 88 164 112",
  "M104 173 C127 155 145 153 167 165",
  "M130 221 C147 199 164 194 183 198",
  "M295 103 C271 86 253 91 237 111",
  "M296 171 C272 153 254 155 234 165",
  "M270 220 C253 199 237 195 217 198",
  "M164 112 C178 128 181 145 167 165",
  "M237 111 C222 127 220 147 234 165",
  "M167 165 C185 173 193 187 183 198",
  "M234 165 C216 173 209 187 217 198",
];

const nodes = [
  [105, 104], [104, 173], [130, 221], [164, 112], [167, 165], [183, 198],
  [295, 103], [296, 171], [270, 220], [237, 111], [234, 165], [217, 198], [200, 145],
] as const;

export function HeroBrainBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-1/2 z-0 hidden h-[460px] w-[570px] -translate-y-1/2 opacity-80 md:block lg:-right-16"
      {...(!reduceMotion ? { animate: { y: [0, -9, 0], rotate: [0, 1, 0] } } : {})}
      transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
    >
      <svg viewBox="0 0 400 300" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <radialGradient id="hero-brain-halo">
            <stop offset="0" stopColor="#52D0D1" stopOpacity=".18" />
            <stop offset="1" stopColor="#52D0D1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-brain-fill" x1="70" y1="40" x2="330" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DFF7F4" stopOpacity=".78" />
            <stop offset="1" stopColor="#A9D8E5" stopOpacity=".22" />
          </linearGradient>
          <filter id="hero-brain-glow" x="35" y="15" width="330" height="275" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <circle cx="200" cy="150" r="145" fill="url(#hero-brain-halo)" />
        <ellipse cx="200" cy="151" rx="156" ry="118" stroke="#0B8793" strokeOpacity=".12" strokeDasharray="2 8" />

        <motion.path
          d="M198 45c-17-22-48-25-68-8-12 10-17 24-16 38-19-9-43-1-51 19-7 17-1 35 12 46-15 14-17 37-3 54 6 7 13 12 22 14-5 17 4 36 20 43 14 7 31 5 42-5 11 15 31 22 49 15 8-3 14-8 19-15 5 7 11 12 19 15 18 7 38 0 49-15 11 10 28 12 42 5 16-7 25-26 20-43 9-2 16-7 22-14 14-17 12-40-3-54 13-11 19-29 12-46-8-20-32-28-51-19 1-14-4-28-16-38-20-17-51-14-68 8-5 6-10 14-12 23-2-9-7-17-12-23Z"
          fill="url(#hero-brain-fill)"
          stroke="#0B8793"
          strokeOpacity=".45"
          strokeWidth="1.5"
          filter="url(#hero-brain-glow)"
          {...(!reduceMotion ? { animate: { strokeOpacity: [0.32, 0.62, 0.32] } } : {})}
          transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
        />

        <path d="M200 67v163M200 80c-12-21-30-29-48-27m48 40c13-18 29-24 47-23M200 123c-17-13-35-14-53-7m53 9c17-13 35-14 53-7M200 164c-15-8-31-7-45 1m45-1c15-8 31-7 45 1M200 202c-7-10-16-16-28-19m28 19c7-10 16-16 28-19" stroke="#0B8793" strokeOpacity=".28" strokeWidth="1.2" />

        {connections.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="#0B8793"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="3 7"
            {...(!reduceMotion ? { animate: { strokeDashoffset: [20, 0], opacity: [0.16, 0.6, 0.16] } } : {})}
            transition={{ duration: 3.5 + (index % 4) * 0.45, ease: "linear", repeat: Infinity, delay: index * 0.12 }}
          />
        ))}

        {nodes.map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index === 12 ? 4.5 : 3}
            fill={index === 12 ? "#0B8793" : "#45BFC5"}
            {...(!reduceMotion ? { animate: { opacity: [0.38, 1, 0.38], scale: [0.86, 1.25, 0.86] } } : {})}
            transition={{ duration: 2.6 + (index % 3) * 0.35, ease: "easeInOut", repeat: Infinity, delay: index * 0.16 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
