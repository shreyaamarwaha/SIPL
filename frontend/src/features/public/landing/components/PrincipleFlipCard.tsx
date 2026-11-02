"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function PrincipleFlipCard({ title, text }: { title: string; text: string }) {
  const [flipped, setFlipped] = useState(false);
  const pointerType = useRef<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="sipl-flip-card">
      <motion.button
        type="button"
        className="sipl-flip-card__button"
        aria-label={flipped ? `${title}: ${text}` : `Show the ${title} principle`}
        aria-expanded={flipped}
        onPointerEnter={(event) => {
          pointerType.current = event.pointerType;
          if (event.pointerType === "mouse") setFlipped(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setFlipped(false);
          pointerType.current = null;
        }}
        onPointerDown={(event) => { pointerType.current = event.pointerType; }}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onClick={(event) => {
          if (event.detail === 0) return;
          setFlipped((current) => pointerType.current === "touch" ? !current : true);
          pointerType.current = null;
        }}
      >
        <motion.span
          className="sipl-flip-card__inner"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={reduceMotion ? { duration: 0.12 } : { type: "spring", stiffness: 90, damping: 19, mass: 0.8 }}
        >
          <span className="sipl-flip-card__face sipl-flip-card__front" aria-hidden={flipped}>
            <span className="sipl-flip-card__accent" />
            <span className="sipl-flip-card__title">{title}</span>
            <span className="sipl-flip-card__hint">Explore principle <ArrowUpRight aria-hidden="true" size={16} /></span>
          </span>
          <span className="sipl-flip-card__face sipl-flip-card__back" aria-hidden={!flipped}>
            <span className="sipl-flip-card__back-label">{title}</span>
            <span className="sipl-flip-card__description">{text}</span>
            <span className="sipl-flip-card__back-rule" />
          </span>
        </motion.span>
      </motion.button>
    </div>
  );
}
