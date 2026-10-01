import Link from "next/link";
import { EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";

export type InformationSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export function InformationPage({
  eyebrow,
  title,
  description,
  sections,
  updated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: InformationSection[];
  updated?: string;
}) {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC] text-[#001B65]">
        <EditorialHero eyebrow={eyebrow} title={title}>
          <p>{description}</p>
          {updated && (
            <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#001B65]/48">
              Last updated · {updated}
            </p>
          )}
        </EditorialHero>

        <div className="pb-8">
          {sections.map((section, index) => (
            <EditorialSection
              key={section.title}
              eyebrow={`0${index + 1} / ${eyebrow}`}
              title={section.title}
            >
              <div className="grid gap-4">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="grid gap-3 pl-5 marker:text-[#147C79]">
                    {section.bullets.map((bullet) => <li key={bullet} className="pl-1">{bullet}</li>)}
                  </ul>
                )}
                {section.links && (
                  <ul className="grid gap-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer" className="font-semibold text-[#147C79] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#102F49]">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </EditorialSection>
          ))}
        </div>

        <section className="pb-24">
          <Container>
            <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-[#147C79]/20 bg-[#EAF4F2] p-7 md:flex-row md:items-center md:p-9">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#147C79]">Questions?</p>
                <h2 className="mt-2 font-heading text-2xl font-semibold">We’ll point you to the right team.</h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#102F49] px-6 text-sm font-semibold text-white transition hover:bg-[#147C79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147C79] focus-visible:ring-offset-2">
                Contact SIPL
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
