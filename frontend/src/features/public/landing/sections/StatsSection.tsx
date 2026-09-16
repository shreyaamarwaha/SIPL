import { Marquee } from "@/shared/animations/Marquee";

const COMPANY_STATS = [
  { value: "4+", label: "Clinical modalities" },
  { value: "12+", label: "Signal streams" },
  { value: "100%", label: "Evidence-led design" },
  { value: "AI", label: "Human-in-the-loop systems" },
  { value: "1", label: "Unified research platform" },
];

export function StatsSection() {
  return (
    <section className="bg-[#001B65] border-b border-white/[0.06] py-12 md:py-16 overflow-hidden">
      <Marquee speed="slow" className="py-2">
        {COMPANY_STATS.map((stat, i) => (
          <div key={i} className="flex items-center mx-8 shrink-0">
            <span className="text-3xl md:text-5xl font-serif text-white whitespace-nowrap tabular-nums">
              {stat.value}
            </span>
            <span className="ml-4 text-sm md:text-base text-white/70 max-w-[150px] leading-tight">
              {stat.label}
            </span>
            {i !== COMPANY_STATS.length - 1 && (
              <div className="w-px h-12 bg-white/20 mx-12"></div>
            )}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
