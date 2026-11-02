import { TeamGrid } from "@/features/public/team/TeamGrid";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";
import Link from "next/link";

export const metadata = {
  ...generateSeoMetadata({
    title: "Founders and Team | SIPL",
    description:
      "Meet the researchers, engineers, and collaborators building Sequoia Insilico.",
    path: "/team",
  }),
  title: "Founders and Team | SIPL",
};

export default function TeamPage() {
  return (
    <PublicLayout>
      <main className="bg-[#EDEDED] pb-20 pt-32 text-[#131313] md:pt-40">
        <section className="pb-14 md:pb-20">
          <Container>
            <div className="grid gap-8 border-t border-[#131313]/12 pt-10 md:grid-cols-[1fr_1fr] md:items-start md:pt-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8931C4]">
                  The people behind SIPL
                </p>
                <h1 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[1.04] tracking-[-0.04em] md:text-6xl">
                  Founders and team
                </h1>
              </div>
              <div className="max-w-2xl text-base leading-7 text-[#4A5568] md:pt-8 md:text-lg md:leading-8">
                <p>
                  Meet the scientists, engineers, and company builders behind
                  SIPL&apos;s research and clinical intelligence work.
                </p>
                <nav aria-label="Team sections" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#8931C4]">
                  <Link href="#founders" className="underline decoration-[#F0EBE1] underline-offset-4">Founders and team</Link>
                  <Link href="#advisors" className="underline decoration-[#F0EBE1] underline-offset-4">Advisory board</Link>
                </nav>
              </div>
            </div>
          </Container>
        </section>

        <section id="founders" aria-label="Founders and team">
          <Container>
            <TeamGrid />
          </Container>
        </section>

        <section id="advisors" className="scroll-mt-28 pt-16">
          <Container>
            <div className="flex flex-col gap-5 border-y border-[#131313]/12 py-8 md:flex-row md:items-center md:justify-between md:py-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8931C4]">Coming soon</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Advisory board</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4A5568]">
                  We are bringing together experienced voices across clinical care,
                  neuroscience, genomics, and biopharma.
                </p>
              </div>
              <span className="w-fit rounded-full border border-[#8931C4]/20 bg-white px-4 py-2 text-xs font-semibold text-[#8931C4]">In formation</span>
            </div>
          </Container>
        </section>
      </main>
    </PublicLayout>
  );
}
