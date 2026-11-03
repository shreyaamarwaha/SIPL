import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BrainCircuit, Dna, Landmark } from "lucide-react";
import { TeamGrid } from "@/features/public/team/TeamGrid";
import { advisors, clinicalCollaborators } from "@/features/public/team/teamData";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = {
  ...generateSeoMetadata({
    title: "Founders, Team and Advisors | SIPL",
    description:
      "Meet the founders, researchers, engineers, advisors, and clinical collaborators behind Sequoia Insilico.",
    path: "/team",
  }),
  title: "Founders, Team and Advisors | SIPL",
};

export default function TeamPage() {
  return (
    <PublicLayout>
      <main className="overflow-hidden bg-white pb-20 pt-28 text-[#102B49] md:pt-36">
        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <Container>
            <div className="relative isolate overflow-hidden rounded-[30px] bg-[#071D66] px-6 py-10 text-white shadow-[0_24px_80px_rgba(7,29,102,.16)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 -z-10 h-[440px] w-[440px] rounded-full bg-[#0B8793]/35 blur-[90px]" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 left-[42%] -z-10 h-72 w-72 rounded-full bg-[#34B7C3]/20 blur-[75px]" />
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE0E2]">The people behind SIPL</p>
                  <h1 className="mt-5 max-w-[12ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-7xl">
                    Founders and team.
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                    Scientists, engineers, and company builders bringing clinical research and computational intelligence together for brain and mental health.
                  </p>
                  <nav aria-label="Team page sections" className="mt-8 flex flex-wrap gap-3">
                    <Link href="#founders" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#071D66] transition hover:-translate-y-0.5 hover:bg-[#DDF8F5] hover:shadow-[0_0_24px_rgba(125,224,226,.35)]">
                      Meet the team <ArrowDown aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <Link href="#advisors" className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-5 text-sm font-semibold text-white transition hover:border-[#7DE0E2] hover:bg-white/10 hover:text-[#7DE0E2]">
                      Advisors and collaborators
                    </Link>
                  </nav>
                </div>
                <div className="relative mx-auto grid aspect-square w-full max-w-[330px] place-items-center rounded-full border border-white/15 bg-white/[0.055] shadow-[inset_0_0_70px_rgba(125,224,226,.07),0_0_70px_rgba(52,183,195,.12)]">
                  <div aria-hidden="true" className="absolute inset-5 rounded-full border border-dashed border-[#7DE0E2]/25" />
                  <div aria-hidden="true" className="absolute inset-12 rounded-full border border-white/10" />
                  <BrainCircuit aria-hidden="true" className="h-36 w-36 text-[#9BF2E8] drop-shadow-[0_0_18px_rgba(125,224,226,.38)] sm:h-44 sm:w-44" strokeWidth={1} />
                  <span className="absolute bottom-9 rounded-full border border-white/15 bg-[#071D66]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">Research · care · intelligence</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="founders" aria-labelledby="founders-title" className="scroll-mt-28 px-5 py-14 md:px-8 md:py-20">
          <Container>
            <ScrollReveal className="mb-9 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8793]">01 / Founders and team</p>
                <h2 id="founders-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">The people building SIPL.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#50657A] md:text-base">
                From clinical research and machine learning to product engineering, the team works across disciplines to translate research into useful tools.
              </p>
            </ScrollReveal>
            <TeamGrid />
          </Container>
        </section>

        <section id="advisors" aria-labelledby="advisors-title" className="scroll-mt-28 bg-[#EFF7F7] px-5 py-16 md:px-8 md:py-20">
          <Container>
            <ScrollReveal className="mb-9 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8793]">02 / Advisory board</p>
                <h2 id="advisors-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Experienced guidance, grounded in practice.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#50657A] md:text-base">
                Advisors bring legal, infrastructure, and strategic perspectives to SIPL’s work. The profiles below reflect the earlier SIPL website.
              </p>
            </ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {advisors.map((advisor) => (
                <ScrollReveal key={advisor.name}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-[#34B7C3]/20 bg-[#071D66] p-6 text-white shadow-[0_16px_42px_rgba(7,29,102,.14)] transition duration-300 hover:-translate-y-1 hover:border-[#7DE0E2]/80 hover:shadow-[0_0_0_1px_rgba(125,224,226,.2),0_22px_56px_rgba(7,29,102,.2),0_0_36px_rgba(52,183,195,.14)] sm:p-8">
                    <div className="flex items-start gap-5">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:h-24 sm:w-24">
                        <Image src={advisor.image} alt={advisor.name} fill sizes="96px" className="object-cover" />
                      </div>
                      <div className="pt-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7DE0E2]">{advisor.role}</p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{advisor.name}</h3>
                      </div>
                    </div>
                    <p className="mt-6 max-w-xl text-sm leading-6 text-white/75">{advisor.bio}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {advisor.focus.map((item) => <li key={item} className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1.5 text-xs text-white/85">{item}</li>)}
                    </ul>
                    <Link href={advisor.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9BF2E8] transition hover:text-white">
                      View professional profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="collaborators-title" className="px-5 py-16 md:px-8 md:py-20">
          <Container>
            <ScrollReveal className="mb-8 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8793]">03 / Clinical collaborators</p>
                <h2 id="collaborators-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Research shaped with clinical expertise.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#50657A] md:text-base">
                The earlier SIPL site named these clinical and genomics collaborations. Their current scope should be confirmed directly with SIPL.
              </p>
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-2">
              {clinicalCollaborators.map((person) => (
                <ScrollReveal key={person.name}>
                  <article className="group flex h-full gap-5 rounded-2xl border border-[#34B7C3]/20 bg-[#071D66] p-6 text-white shadow-[0_14px_38px_rgba(7,29,102,.13)] transition duration-300 hover:-translate-y-1 hover:border-[#34B7C3]/80 hover:shadow-[0_0_0_1px_rgba(52,183,195,.18),0_20px_48px_rgba(7,29,102,.19),0_0_32px_rgba(52,183,195,.13)] sm:p-8">
                    <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#7DE0E2]/30 bg-[#0B8793]/30 text-sm font-bold text-[#9BF2E8]">{person.initials}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{person.name}</h3>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#9BF2E8]">{person.affiliation}</p>
                      <p className="mt-3 text-sm leading-6 text-white/75">{person.contribution}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="birac-title" className="px-5 pb-16 md:px-8 md:pb-20">
          <Container>
            <ScrollReveal>
              <article className="relative isolate overflow-hidden rounded-[28px] bg-[#071D66] p-7 text-white shadow-[0_22px_64px_rgba(7,29,102,.18)] sm:p-10 lg:p-12">
                <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 -z-10 h-72 w-72 rounded-full bg-[#0B8793]/30 blur-[75px]" />
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7DE0E2]">Research support</p>
                    <h2 id="birac-title" className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Supported through Grand Challenges India.</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
                      SIPL’s earlier website reports a ₹50L+ equity-free GCE-III award supported by BIRAC, the Department of Biotechnology (DBT), and the Bill &amp; Melinda Gates Foundation. This support helped advance the company’s research and development work.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 shadow-[0_0_30px_rgba(52,183,195,.1)]">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0B8793] text-white"><Landmark aria-hidden="true" className="h-6 w-6" /></span>
                    <div><p className="text-2xl font-bold tracking-tight">₹50L+</p><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9BF2E8]">GCE-III support*</p></div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/15 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
                  <Dna aria-hidden="true" className="mr-1 h-4 w-4 text-[#7DE0E2]" />
                  <span>BIRAC</span><span aria-hidden="true" className="text-[#7DE0E2]">·</span><span>DBT</span><span aria-hidden="true" className="text-[#7DE0E2]">·</span><span>Bill &amp; Melinda Gates Foundation</span>
                  <span className="basis-full pt-2 text-[10px] font-normal normal-case tracking-normal text-white/50">*Funding details are company-reported and reflect the earlier SIPL website.</span>
                </div>
              </article>
            </ScrollReveal>
          </Container>
        </section>

        <section className="px-5 md:px-8">
          <Container>
            <div className="flex flex-col gap-5 rounded-2xl border border-[#D6E5E7] bg-[#EFF7F7] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B8793]">Work with SIPL</p><h2 className="mt-2 text-2xl font-semibold">Research, clinical, and engineering collaborations.</h2></div>
              <Link href="/contact/" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#071D66] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0B8793] hover:shadow-[0_0_25px_rgba(11,135,147,.3)]">Get in touch <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </Container>
        </section>
      </main>
    </PublicLayout>
  );
}
