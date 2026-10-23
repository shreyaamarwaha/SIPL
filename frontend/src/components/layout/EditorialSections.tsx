import type { ReactNode } from "react";
import { Container } from "@/shared/ui/Container";
import { cn } from "@/shared/lib/utils";

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
    <section className="px-6 pb-20 pt-40 text-[#0F2C45] md:px-10 lg:px-16 xl:px-20">
      <div className="grid w-full gap-12 border-t border-[#0F2C45]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/60">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#0F2C45] md:text-7xl">
            {title}
          </h1>
        </div>

        <div className="max-w-4xl text-lg leading-8 text-[#0F2C45]/72 md:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

export function EditorialSection({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pb-24 text-[#0F2C45]", className)}>
      <Container>
        <div className="grid gap-10 border-t border-[#0F2C45]/12 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            {eyebrow && (
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/58">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#0F2C45] md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="text-base leading-8 text-[#0F2C45]/74 md:text-lg">
            {children}
          </div>
        </div>
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
          className="rounded-[28px] border border-[#0F2C45]/10 bg-[#FFFFFF] p-6 shadow-[0_16px_44px_rgba(0,27,101,0.06)] md:p-7"
        >
          {card.eyebrow && (
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/52">
              {card.eyebrow}
            </p>
          )}
          <h3 className="font-heading text-xl font-semibold leading-tight text-[#0F2C45]">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#0F2C45]/70 md:text-base">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-[26px] border border-[#C49327]/55 bg-white/64 p-6 font-heading text-xl font-semibold leading-8 text-[#0F2C45] md:p-8 md:text-2xl md:leading-10">
      {children}
    </blockquote>
  );
}

export function Timeline({ items }: { items: EditorialCard[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <article key={item.title} className="grid gap-5 rounded-[26px] border border-[#0F2C45]/10 bg-[#FFFFFF] p-6 md:grid-cols-[5rem_1fr] md:p-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#C49327]">
            {item.eyebrow ?? `Step ${index + 1}`}
          </p>
          <div>
            <h3 className="font-heading text-xl font-semibold text-[#0F2C45]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[#0F2C45]/72">
              {item.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
