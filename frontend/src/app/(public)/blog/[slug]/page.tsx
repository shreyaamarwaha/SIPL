import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { EditorialHero } from "@/components/layout/EditorialSections";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { insightArticles } from "@/features/public/insights/articles";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return { title: "Insight not found | SIPL" };

  return generateSeoMetadata({
    title: `${article.title} | SIPL Insights`,
    description: article.summary,
    path: `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <PublicLayout>
      <div className="bg-[#F7FAF9] text-[#0F2C45]">
        <EditorialHero eyebrow={article.category} title={article.title}>
          <p>{article.summary}</p>
          <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F2C45]/48">
            SIPL perspective · {article.readingTime}
          </p>
        </EditorialHero>

        <section className="pb-28">
          <Container>
            <div className="mx-auto max-w-3xl border-t border-[#0F2C45]/12 pt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#087D78] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78]"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" /> All insights
              </Link>
              <div className="mt-10 grid gap-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 grid gap-4 text-base leading-8 text-[#0F2C45]/75 md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              <div className="mt-12 rounded-[24px] border border-[#087D78]/20 bg-[#E5F3EF] p-6 md:p-8">
                <p className="font-heading text-lg font-semibold">Interested in the research?</p>
                <p className="mt-2 text-sm leading-6 text-[#0F2C45]/70">
                  Talk with SIPL about research, clinical collaboration, or biopharma discovery.
                </p>
                <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#0F2C45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#087D78]">
                  Contact SIPL
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
