import Link from "next/link";
import { EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";

export type InformationSection = {
  id?: string;
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
      <div className="bg-[#EDEDED] text-[#131313]">
        <EditorialHero eyebrow={eyebrow} title={title}>
          <p>{description}</p>
          {updated && (
            <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#131313]/48">
              Last updated · {updated}
            </p>
          )}
        </EditorialHero>

        <div className="pb-8">
          {sections.map((section, index) => (
            <EditorialSection
              key={section.title}
              {...(section.id ? { id: section.id } : {})}
              eyebrow={`0${index + 1} / ${eyebrow}`}
              title={section.title}
            >
              <div className="grid gap-4">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="grid list-disc gap-3 pl-6 marker:text-[#8931C4]">
                    {section.bullets.map((bullet) => <li key={bullet} className="pl-1">{bullet}</li>)}
                  </ul>
                )}
                {section.links && (
                  <ul className="grid list-none gap-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        {link.href.startsWith("http") ? (
                          <a href={link.href} target="_blank" rel="noreferrer" className="font-semibold text-[#8931C4] underline decoration-[#8931C4] underline-offset-4 hover:text-[#131313]">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="font-semibold text-[#8931C4] underline decoration-[#8931C4] underline-offset-4 hover:text-[#131313]">
                            {link.label}
                          </Link>
                        )}
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
            <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-[#8931C4]/20 bg-[#F0EBE1] p-7 md:flex-row md:items-center md:p-9">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8931C4]">Questions?</p>
                <h2 className="mt-2 font-heading text-2xl font-semibold">We’ll point you to the right team.</h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#071D66] px-6 text-sm font-semibold text-white transition hover:bg-[#8931C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8931C4] focus-visible:ring-offset-2">
                Contact SIPL
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
