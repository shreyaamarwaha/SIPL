"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 160);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-[4px] border border-[#C49327]/70 bg-[#0F2C45] px-4 text-white shadow-[0_16px_40px_rgba(0,27,101,0.18)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49327] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAF9] md:bottom-8 md:right-8 md:h-13",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
      <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.12em] sm:inline">
        Top
      </span>
    </button>
  );
}
