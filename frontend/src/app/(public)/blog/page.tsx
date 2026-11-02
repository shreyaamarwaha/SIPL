import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { Container } from "@/shared/ui/Container";
import { PublicLayout } from "@/layouts/PublicLayout";
import { EditorialHero } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { insightArticles } from "@/features/public/insights/articles";

export const metadata = generateSeoMetadata({
  title: "Insights | SIPL",
  description:
    "Research perspectives on clinical AI, multimodal biomarkers, genomics, and responsible brain-health innovation.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PublicLayout>
      <div className="bg-[#EDEDED] text-[#131313]">
        <EditorialHero eyebrow="SIPL Insights" title="Ideas at the intersection of biology and intelligence.">
          <p>
            Clear perspectives on brain health, multimodal research, genomics, and the choices
            that make clinical AI useful and responsible.
          </p>
        </EditorialHero>

        <section className="pb-28">
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#131313]/12 pb-5">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8931C4]">
                  Research notes
                </p>
                <h2 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">
                  Perspectives from SIPL
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#131313]/65">
                These articles are educational perspectives, not medical advice or reports of
                clinical performance.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {insightArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className="flex min-h-[330px] flex-col rounded-[28px] border border-[#131313]/10 bg-[#FFFFFF] p-7 shadow-[0_16px_44px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#8931C4]/20 bg-[#8931C4]/8 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#8931C4]">
                      {article.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#131313]/38">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-semibold leading-tight text-[#131313]">
                    {article.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#131313]/70">
                    {article.summary}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-[#131313]/10 pt-5">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#131313]/55">
                      <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
                      {article.readingTime}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#131313] underline decoration-[#8931C4] decoration-2 underline-offset-4 transition hover:text-[#8931C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8931C4]"
                    >
                      Read article <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
