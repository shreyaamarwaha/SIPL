import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { TeamGrid } from "@/features/public/team/TeamGrid";

export const metadata = {
  ...generateSeoMetadata({
    title: "Meet the Team | SIPL",
    description:
      "Meet the researchers, engineers, and collaborators building Sequoia Insilico’s clinical intelligence infrastructure.",
    path: "/inside-sipl/meet-the-team",
  }),
  title: "Meet the Team | SIPL",
};

const teamPrinciples = ["Research leadership", "Clinical collaboration", "Engineering discipline"];

export default function MeetTheTeamPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC] text-[#001B65]">
        <section className="pb-20 pt-40">
          <Container>
            <div className="grid gap-12 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.72fr_1.28fr]">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                Inside SIPL
              </p>

              <div className="max-w-4xl">
                <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-7xl">
                  Meet the Team
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#001B65]/72 md:text-xl">
                  Meet the researchers, engineers, and collaborators building SIPL’s clinical
                  intelligence infrastructure.
                </p>
                <div className="mt-12 grid gap-3 border-l border-[#D4AF37] pl-6">
                  {teamPrinciples.map((principle) => (
                    <p key={principle} className="font-heading text-base font-semibold">
                      {principle}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section aria-labelledby="team-grid-heading" className="pb-28">
          <Container>
            <div className="mb-10 grid gap-8 border-t border-[#001B65]/12 pt-12 lg:grid-cols-[0.72fr_1.28fr]">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                Our people
              </p>
              <div>
                <h2
                  id="team-grid-heading"
                  className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl"
                >
                  Research depth. Engineering discipline. Clinical purpose.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#001B65]/72">
                  A multidisciplinary team translating careful research into dependable clinical
                  intelligence systems.
                </p>
              </div>
            </div>
            <TeamGrid />
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
