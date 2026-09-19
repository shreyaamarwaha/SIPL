import Link from "next/link";
import { ArrowUpRight, Activity, FileText, Microscope, ShieldCheck } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

const solutions = [
  {
    number: "01",
    title: "LifeBack™ Voice",
    description:
      "Acoustic and speech-derived signals help surface behavioral patterns that may otherwise be missed in standard clinical review.",
    icon: Activity,
    href: "/solutions/lifeback-voice",
    list: ["Speech phenotyping", "Behavioral signal variation", "Clinical context mapping"],
  },
  {
    number: "02",
    title: "LifeBack™ Video",
    description:
      "Visual behavioral cues are organized into structured, interpretable evidence to support objective assessment workflows.",
    icon: FileText,
    href: "/solutions/lifeback-video",
    list: ["Facial expression analysis", "Behavioral observation", "Longitudinal monitoring"],
  },
  {
    number: "03",
    title: "LifeBack™ Genomics",
    description:
      "Genomic and pharmacogenomic context complements patient history and symptom data to refine evidence-informed decision support.",
    icon: Microscope,
    href: "/solutions/life-genomics",
    list: ["Precision psychiatry", "Treatment response context", "Biological stratification"],
  },
  {
    number: "04",
    title: "Clinical Intelligence",
    description:
      "Integrated reporting brings multimodal findings together in a clinician-friendly format designed for responsible review.",
    icon: ShieldCheck,
    href: "/solutions",
    list: ["Structured reporting", "Safety-first design", "Human oversight"],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[#F5F8FC] py-24 md:py-28 lg:py-36">
      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-heading text-[12px] font-bold uppercase tracking-[0.18em] text-[#001B65]/70">
            Platform solutions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0A0C10]">
            Purpose-built tools for discovery, screening, and therapeutic decision support.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <MotionWrapper key={solution.title} variant="slideUp" delay={0.08 * index}>
                <Card className="group h-full border border-[#001B65]/10 bg-[#F9F8F3] transition-all duration-500 hover:-translate-y-1 hover:border-[#001B65]/20 hover:shadow-[0_18px_40px_rgba(0,27,101,0.08)]">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#001B65] text-white shadow-sm">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="mb-4 font-serif text-2xl text-[#0A0C10]">{solution.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-[#4A5568]">{solution.description}</p>

                  <ul className="space-y-3 pb-6 text-sm text-[#001B65]/80">
                    {solution.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 font-heading text-[12px] font-bold uppercase tracking-[0.14em] text-[#001B65] transition-colors group-hover:text-[#001B65]/80"
                  >
                    Learn more
                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </Link>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
