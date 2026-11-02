import type { ReactNode } from "react";
import { Container } from "@/shared/ui/Container";
import { cn } from "@/shared/lib/utils";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

export type EditorialCard = {
  title: string;
  body: string;
  eyebrow?: string;
};

export function EditorialHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="px-6 pb-20 pt-40 text-[#131313] md:px-10 lg:px-16 xl:px-20">
      <ScrollReveal className="grid w-full gap-12 border-t border-[#131313]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_auto] lg:gap-y-0">
        <div className="contents">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#131313]/60 lg:col-start-1 lg:row-start-1">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#131313] md:text-7xl lg:col-start-1 lg:row-start-2 lg:mt-0">
            {title}
          </h1>
        </div>

        <div className="max-w-4xl text-lg leading-8 text-[#131313]/72 md:text-xl lg:col-start-2 lg:row-start-2">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function EditorialSection({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 pb-24 text-[#131313]", className)}>
      <Container>
        <ScrollReveal className="grid gap-8 border-t border-[#131313]/12 pt-12 md:gap-10 md:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_auto] lg:gap-y-0">
          <div className="contents">
            {eyebrow && (
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#131313]/58 lg:col-start-1 lg:row-start-1">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-5 max-w-[22ch] font-heading text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-[#131313] md:text-[clamp(2.25rem,3.1vw,2.75rem)] lg:col-start-1 lg:row-start-2 lg:mt-0">
              {title}
            </h2>
          </div>

          <div className="text-base leading-8 text-[#131313]/74 md:text-lg lg:col-start-2 lg:row-start-2">
            {children}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function CardGrid({
  cards,
  columns = "three",
}: {
  cards: EditorialCard[];
  columns?: "two" | "three";
}) {
  return (
    <div className={cn("grid gap-5", columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
      {cards.map((card) => (
        <article
          key={`${card.eyebrow ?? ""}${card.title}`}
          className="group rounded-[28px] border border-[#131313]/10 bg-[#FFFFFF] p-6 shadow-[0_16px_44px_rgba(16,43,73,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0B8793]/35 hover:shadow-[0_24px_52px_rgba(16,43,73,0.12)] md:p-7"
        >
          {card.eyebrow && (
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#131313]/52">
              {card.eyebrow}
            </p>
          )}
          <h3 className="font-heading text-xl font-semibold leading-tight text-[#131313]">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#131313]/70 md:text-base">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-[26px] border border-[#8931C4]/55 bg-white/64 p-6 font-heading text-xl font-semibold leading-8 text-[#131313] md:p-8 md:text-2xl md:leading-10">
      {children}
    </blockquote>
  );
}

export function Timeline({ items }: { items: EditorialCard[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <article key={item.title} className="grid gap-5 rounded-[26px] border border-[#131313]/10 bg-[#FFFFFF] p-6 md:grid-cols-[5rem_1fr] md:p-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8931C4]">
            {item.eyebrow ?? `Step ${index + 1}`}
          </p>
          <div>
            <h3 className="font-heading text-xl font-semibold text-[#131313]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[#131313]/72">
              {item.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
