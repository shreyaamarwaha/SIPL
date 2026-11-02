import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  Building2,
  Dna,
  FlaskConical,
  HeartPulse,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ContactForm } from "@/features/public/contact/ContactForm";
import { teamMembers } from "@/features/public/team/teamData";
import { HeroStoryline } from "@/features/public/landing/components/HeroStoryline";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";
import { PrincipleFlipCard } from "@/features/public/landing/components/PrincipleFlipCard";
import { LearningLoop } from "@/features/public/landing/components/LearningLoop";

const proofPoints = [
  ["91%", "HAM-D agreement, reported"],
  ["500+", "hospital assessments"],
  ["₹50L+", "GCE-III grant support, reported"],
  ["Granted", "Indian patent · PCT filed"],
] as const;

const architecture = [
  { icon: HeartPulse, title: "Care", text: "Clinical assessment, structured information, and meaningful change over time." },
  { icon: Network, title: "Integration", text: "Research and clinical information organised around real care and study workflows." },
  { icon: FlaskConical, title: "Discovery", text: "Evidence from clinical practice and research informs the next set of questions." },
];

const researchSteps = [
  ["01", "Integrate", "Bring permitted information into context."],
  ["02", "Assess", "Examine clinically relevant patterns."],
  ["03", "Stratify", "Explore meaningful patient groups."],
  ["04", "Guide", "Return useful context to professionals."],
  ["05", "Monitor", "Understand change over time."],
  ["06", "Discover", "Inform the next research question."],
] as const;

const biopharmaAreas = [
  { icon: Network, title: "Patient stratification", text: "Explore clinically meaningful subgroups using behavioural, clinical, and biological context." },
  { icon: AudioLines, title: "Digital biomarkers", text: "Investigate repeatable behavioural measures and their relationship to clinical change." },
  { icon: Dna, title: "Pharmacogenomics", text: "Research treatment response and tolerability in the context of individual biology.", badge: "Research direction" },
  { icon: FlaskConical, title: "Real-world evidence", text: "Study longitudinal outcomes using appropriately governed clinical information." },
];

const partnerTypes = [
  ["Hospitals & health systems", "Clinical workflows, research partnerships, and outcome measurement."],
  ["Clinicians & clinics", "Evidence-informed tools that respect professional judgement."],
  ["Research institutions", "Multimodal studies, validation, and scientific collaboration."],
  ["Biopharma & CROs", "Patient stratification, trial design questions, and response research."],
  ["Genomics & diagnostics", "Connect biological findings with phenotype and clinical context."],
  ["Implementation partners", "Build practical pathways from research into real settings."],
];

const trustPrinciples = [
  ["Research ethos", "Treat models as hypotheses. Evaluate evidence, uncertainty, and limitations."],
  ["Responsible data use", "Use sensitive information with purpose, consent, and appropriate governance."],
  ["Human oversight", "Keep qualified professionals responsible for interpretation and care."],
];

export function InvestorLandingPage() {
  const teamHighlights = teamMembers.slice(0, 3);

  return (
    <div className="overflow-hidden bg-[#EDEDED] text-[#131313] selection:bg-[#F0EBE1]">
      <section className="light-hero relative flex min-h-[min(900px,calc(100svh-80px))] flex-col justify-center px-6 pb-10 pt-32 md:px-10 lg:px-16">
        <HeroStoryline />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_84%_16%,rgba(137,49,196,.07),transparent_34%),radial-gradient(ellipse_at_15%_86%,rgba(137,49,196,.04),transparent_32%)]" />
        <ScrollReveal className="light-hero-content relative mx-auto w-full max-w-[1120px] text-center">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">Sequoia Insilico Pvt. Ltd. · BioAI for brain &amp; mental health</p>
          <h1 className="mx-auto max-w-5xl text-[44px] font-medium leading-[1.06] tracking-[-0.045em] md:text-[64px] lg:text-[78px]">Connected intelligence for <span className="text-[#8931C4]">brain and mental healthcare.</span></h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#4A5568] md:text-lg md:leading-8">SIPL brings clinical care, behavioural signals, neuroscience, genomics, and discovery into a responsible research framework for brain and mental health.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#science" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#071D66] px-6 text-sm font-semibold text-white transition hover:bg-[#8931C4]">Explore the science <ArrowDown className="h-4 w-4" /></Link>
            <Link href="#investors" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#131313]/20 bg-white/75 px-6 text-sm font-semibold text-[#131313] transition hover:border-[#8931C4]">Investor overview <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.12} className="relative mx-auto mt-14 grid w-full max-w-[1120px] grid-cols-2 border-y border-[#131313]/10 py-4 sm:grid-cols-4 sm:py-5">
          {proofPoints.map(([value, label]) => <div key={label} className="px-2 py-2 text-center sm:border-r sm:border-[#131313]/10 sm:px-5 sm:last:border-r-0"><p className="text-lg font-semibold tracking-tight text-[#131313] md:text-2xl">{value}</p><p className="mt-1 text-[10px] leading-4 text-[#4A5568] md:text-xs">{label}</p></div>)}
        </ScrollReveal>
        <p className="relative mx-auto mt-3 max-w-[1120px] text-center text-[10px] leading-4 text-[#4A5568]">Company-reported milestones. Assessment agreement is not a claim of diagnostic accuracy; supporting methods and records should be reviewed during diligence.</p>
      </section>

      <section id="about" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <ScrollReveal className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">About SIPL</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Deep research, translated into clinical intelligence.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4A5568]">Sequoia Insilico is a deep-science BioAI company based in New Delhi. Our work draws on bioinformatics, systems biology, neuroscience, and computational psychiatry.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#4A5568]">We are building toward a richer understanding of brain health by connecting phenotype, biology, clinical context, and outcomes over time.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/team" className="group inline-flex min-h-[58px] items-center justify-between gap-3 rounded-xl border border-[#D6D6D6] bg-white px-4 py-3 text-sm font-semibold text-[#131313] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8931C4] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8931C4]">
                <span>Meet the people behind SIPL</span><ArrowRight className="h-4 w-4 shrink-0 text-[#8931C4] transition group-hover:translate-x-1" />
              </Link>
              <Link href="#partners" className="group inline-flex min-h-[58px] items-center justify-between gap-3 rounded-xl border border-[#D6D6D6] bg-white px-4 py-3 text-sm font-semibold text-[#131313] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8931C4] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8931C4]">
                <span>Partners &amp; collaborators</span><ArrowRight className="h-4 w-4 shrink-0 text-[#8931C4] transition group-hover:translate-x-1" />
              </Link>
              <Link href="#investors" className="group inline-flex min-h-[58px] items-center justify-between gap-3 rounded-xl border border-[#D6D6D6] bg-white px-4 py-3 text-sm font-semibold text-[#131313] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8931C4] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8931C4] sm:col-span-2">
                <span>For investors</span><ArrowRight className="h-4 w-4 shrink-0 text-[#8931C4] transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">{([["Purpose", "Turn complex information into useful, explainable intelligence."], ["Curiosity", "Treat every model and pathway as open to testing and revision."], ["Responsibility", "Keep privacy, clinical context, and human oversight central."], ["Integrity", "Communicate evidence and limitations with discipline."]] as const).map(([title, text]) => <PrincipleFlipCard key={title} title={title} text={text} />)}</div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
<section id="architecture" className="border-y border-[#D6D6D6] bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">The SIPL architecture</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">One connected loop across care, integration, and discovery.</h2><p className="mt-4 text-base leading-7 text-[#4A5568]">Clinical work informs research. New evidence creates better questions for care and study.</p></div>
          <div className="grid gap-3 md:grid-cols-3">{architecture.map(({ icon: Icon, title, text }) => <article key={title} className="flex flex-col rounded-2xl border border-[#D6D6D6] bg-[#EDEDED] p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#071D66] text-[#F0EBE1]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#4A5568]">{text}</p></article>)}</div>
          <div className="mt-5 rounded-2xl bg-[#EDEDED] p-6 md:p-8"><LearningLoop steps={researchSteps} /></div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="science" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1120px]"><div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="flex min-w-0 flex-col items-start text-left"><p className="mb-4 block w-full !ml-0 !pl-0 text-left text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">Science &amp; evidence</p><h2 className="m-0 w-full text-left text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Every model earns its place in care.</h2></div><p className="max-w-2xl text-base leading-7 text-[#4A5568]">We treat each model and biomarker as a hypothesis to test. Evidence is examined alongside the intended use, the study context, and the limitations.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-2xl bg-[#071D66] p-7 text-white md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F0EBE1]">Reported clinical evaluation</p><div className="mt-5 flex items-baseline gap-3"><span className="text-5xl font-semibold tracking-tight">91%</span><span className="text-sm text-white/65">agreement with clinician-rated HAM-D</span></div><p className="mt-4 text-sm leading-6 text-white/65">Reported across 500+ assessments in a clinical validation collaboration with ABVIMS and Dr. RML Hospital, New Delhi. Agreement is not equivalent to diagnostic accuracy.</p></article>
            <article className="rounded-2xl border border-[#D6D6D6] bg-white p-7 md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8931C4]">How we validate</p><h3 className="mt-3 text-xl font-semibold">Clinically grounded. Multimodal by design.</h3><div className="mt-6 flex flex-wrap gap-2">{["Literature grounding", "Ethics review", "Data quality", "Model evaluation", "External validation"].map((step) => <span key={step} className="rounded-full border border-[#D6D6D6] bg-[#EDEDED] px-3 py-2 text-xs font-medium text-[#4A5568]">{step}</span>)}</div><p className="mt-5 text-sm leading-6 text-[#4A5568]">We aim to report performance with appropriate context, uncertainty, and limitations.</p></article>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3"><article className="rounded-xl border border-[#D6D6D6] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#8931C4]">Intellectual property</p><p className="mt-2 text-sm font-semibold">Indian Patent No. 202511025669</p><p className="mt-1 text-xs leading-5 text-[#4A5568]">WIPO PCT application in process, as reported by SIPL.</p></article><article className="rounded-xl border border-[#D6D6D6] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#8931C4]">Research support</p><p className="mt-2 text-sm font-semibold">Grand Challenges India · GCE-III</p><p className="mt-1 text-xs leading-5 text-[#4A5568]">₹50L+ equity-free support reported through BIRAC, DBT, and BMGF.</p></article><article className="rounded-xl border border-[#D6D6D6] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#8931C4]">Recognition</p><p className="mt-2 text-sm font-semibold">Deep-tech startup</p><p className="mt-1 text-xs leading-5 text-[#4A5568]">DPIIT recognition and a 2018 DBT–MoST award, as reported by SIPL.</p></article></div>
          <p className="mt-4 text-xs leading-5 text-[#4A5568]">Milestones are company-reported. Detailed methods, underlying records, and current IP status should be confirmed during diligence.</p>
          <Link href="/inside-sipl/publications" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8931C4]">Evidence &amp; IP details <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="bioai" className="border-y border-[#D6D6D6] bg-[#F0EBE1] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:grid-rows-[auto_auto] lg:items-start lg:gap-y-0"><div className="contents"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4] lg:col-start-1 lg:row-start-1">BioAI for biopharma · Our horizon</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl lg:col-start-1 lg:row-start-2">The BioAI cornerstone for brain-health discovery.</h2></div><div className="lg:col-start-2 lg:row-start-2"><p className="text-base leading-7 text-[#4A5568]">The clinical intelligence we build for care today is laying the foundation for tomorrow&apos;s psychiatric research. These are the areas where SIPL and LifeBack® can help biopharma move faster — and where we&apos;re opening the conversation.</p><Link href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8931C4]">Discuss a research objective <ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{biopharmaAreas.map(({ icon: Icon, title, text, badge }) => <article key={title} className="rounded-2xl border border-[#131313]/10 bg-white p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EDEDED] text-[#8931C4]"><Icon className="h-5 w-5" /></span>{badge && <span className="rounded-full bg-[#EDEDED] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#4A5568]">{badge}</span>}</div><h3 className="mt-5 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#4A5568]">{text}</p></article>)}</div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">Our precision framework</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Precision care must be multidimensional.</h2><p className="mt-4 text-base leading-7 text-[#4A5568]">Individual care depends on sound clinical interpretation and evidence that reflects the population it serves.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-[#D6D6D6] bg-white p-7 md:p-8"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8931C4]">01 · Diagnostic precision</span><h3 className="mt-4 text-xl font-semibold">Understand the clinical picture.</h3><p className="mt-3 text-sm leading-6 text-[#4A5568]">Consider overlapping disorders, comorbidities, differential diagnoses, and disease trajectories rather than treating conditions as isolated labels.</p></article><article className="rounded-2xl border border-[#D6D6D6] bg-white p-7 md:p-8"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8931C4]">02 · Population precision</span><h3 className="mt-4 text-xl font-semibold">Build for the people represented.</h3><p className="mt-3 text-sm leading-6 text-[#4A5568]">Evaluate relevance across demographic, genetic, linguistic, cultural, and socioeconomic diversity.</p></article></div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="partners" className="border-y border-[#D6D6D6] bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">Who we work with</p><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">A collaboration platform for brain health.</h2></div><p className="max-w-lg text-sm leading-6 text-[#4A5568]">Partnerships start with a clearly defined objective and an evidence pathway suited to the question.</p></div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{partnerTypes.map(([title, text]) => <article key={title} className="rounded-xl border border-[#D6D6D6] bg-[#EDEDED] p-5 transition hover:border-[#8931C4]/40"><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#4A5568]">{text}</p></article>)}</div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="trust" className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">Responsible by design</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Technology should help professionals see more clearly.</h2></div><p className="max-w-2xl text-base leading-7 text-[#4A5568]">Clinical AI must be developed with clear purpose, careful handling of sensitive information, and accountability for how results are used.</p></div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">{trustPrinciples.map(([title, text], index) => <article key={title} className="rounded-xl border border-[#D6D6D6] bg-white p-5"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#EDEDED] text-[#8931C4]">{index === 0 ? <FlaskConical className="h-4 w-4" /> : index === 1 ? <ShieldCheck className="h-4 w-4" /> : <Users className="h-4 w-4" />}</span><h3 className="mt-4 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#4A5568]">{text}</p></article>)}</div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="investors" className="bg-[#071D66] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0EBE1]">Investors &amp; strategic partners</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">A specialised BioAI platform connecting care and discovery.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/65">SIPL is building at the intersection of brain health, multimodal research, genomics, clinical workflows, and biopharma.</p><Link href="#contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F0EBE1] px-6 text-sm font-bold text-[#131313] transition hover:bg-white">Request an investor conversation <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="sipl-investor-info-card rounded-2xl border border-white/15 bg-white/[0.06] p-6 md:p-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F0EBE1]">What to include</p><h3 className="mt-3 text-xl font-semibold">Tell us what you are exploring.</h3><ul className="mt-5 grid gap-3 text-sm text-white/70"><li className="flex gap-3"><span className="text-[#F0EBE1]">01</span> Your organisation and area of interest</li><li className="flex gap-3"><span className="text-[#F0EBE1]">02</span> The research or investment question</li><li className="flex gap-3"><span className="text-[#F0EBE1]">03</span> What information would help a first conversation</li></ul><p className="mt-5 border-t border-white/15 pt-4 text-xs leading-5 text-white/50">Supporting documentation is shared directly where appropriate. Please do not submit personal medical information through the contact form.</p></div>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="team" className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8931C4]">The people behind SIPL</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Research, clinical perspective, and engineering.</h2><Link href="/team" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#8931C4] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#071D66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8931C4]">Meet the whole team <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-3 sm:grid-cols-3">{teamHighlights.map((member) => <article key={member.id} className="rounded-xl border border-[#D6D6D6] bg-white p-5">{member.image ? <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D6D6D6]"><Image src={member.image} alt={member.name} fill sizes="56px" className="object-cover" /></div> : <span aria-hidden="true" className="grid h-14 w-14 place-items-center rounded-full bg-[#F7F9FC] text-[#8931C4]"><Users className="h-6 w-6" /></span>}<h3 className="mt-4 text-sm font-semibold">{member.name}</h3><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8931C4]">{member.position}</p><p className="mt-3 text-xs leading-5 text-[#4A5568]">{member.shortBio}</p></article>)}</div></div>
        <div id="advisory-board" className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-4 rounded-2xl border border-[#D6D6D6] bg-[#EDEDED] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8931C4]">Coming soon</p><h3 className="mt-2 text-xl font-semibold">Advisory Board</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#4A5568]">We are bringing together experienced voices across clinical care, neuroscience, genomics, and biopharma. More details will follow.</p></div><span className="w-fit shrink-0 rounded-full border border-[#8931C4]/20 bg-white px-4 py-2 text-xs font-semibold text-[#8931C4]">In formation</span></div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section id="contact" className="border-t border-white/10 bg-[#071D66] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0EBE1]">Let&apos;s talk</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Shape the future of brain and mental healthcare with us.</h2><p className="mt-5 max-w-lg text-base leading-7 text-white/65">For clinical, research, genomics, biopharma, or investment discussions, tell us your objective and we will route it to the right team.</p><div className="mt-8 flex items-center gap-3 text-sm text-white/70"><Building2 className="h-4 w-4 text-[#F0EBE1]" /> New Delhi, India</div></div><div className="rounded-2xl bg-[#EDEDED] p-6 text-[#131313] sm:p-8"><h3 className="text-xl font-semibold">Start a conversation</h3><p className="mt-2 text-sm text-[#4A5568]">Share a few details. Please do not include personal medical information.</p><div className="mt-6"><ContactForm /></div></div></div>
      </section>
</ScrollReveal>
    </div>
  );
}
