import Link from "next/link";
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
];

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
    <div className="overflow-hidden bg-[#F5F8FC] text-[#10243B] selection:bg-[#DFF1EC]">
      <section className="light-hero relative flex min-h-[min(900px,calc(100svh-80px))] flex-col justify-center px-6 pb-10 pt-32 md:px-10 lg:px-16">
        <HeroStoryline />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_84%_16%,rgba(20,124,121,.09),transparent_34%),radial-gradient(ellipse_at_15%_86%,rgba(212,175,55,.07),transparent_32%)]" />
        <div className="relative mx-auto w-full max-w-[1120px] text-center">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#147C79]">Sequoia Insilico Pvt. Ltd. · BioAI for brain &amp; mental health</p>
          <h1 className="mx-auto max-w-5xl text-[44px] font-medium leading-[1.06] tracking-[-0.045em] md:text-[64px] lg:text-[78px]">Connected intelligence for <span className="text-[#147C79]">brain and mental healthcare.</span></h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#53687A] md:text-lg md:leading-8">SIPL brings clinical care, behavioural signals, neuroscience, genomics, and discovery into a responsible research framework for brain and mental health.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#science" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#102F49] px-6 text-sm font-semibold text-white transition hover:bg-[#147C79]">Explore the science <ArrowDown className="h-4 w-4" /></Link>
            <Link href="#investors" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#102F49]/20 bg-white/75 px-6 text-sm font-semibold text-[#102F49] transition hover:border-[#147C79]">Investor overview <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="relative mx-auto mt-14 grid w-full max-w-[1120px] grid-cols-2 border-y border-[#102F49]/10 py-4 sm:grid-cols-4 sm:py-5">
          {proofPoints.map(([value, label]) => <div key={label} className="px-2 py-2 text-center sm:border-r sm:border-[#102F49]/10 sm:px-5 sm:last:border-r-0"><p className="text-lg font-semibold tracking-tight text-[#10243B] md:text-2xl">{value}</p><p className="mt-1 text-[10px] leading-4 text-[#647889] md:text-xs">{label}</p></div>)}
        </div>
        <p className="relative mx-auto mt-3 max-w-[1120px] text-center text-[10px] leading-4 text-[#7A8B98]">Company-reported milestones. Assessment agreement is not a claim of diagnostic accuracy; supporting methods and records should be reviewed during diligence.</p>
      </section>

      <section id="about" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">About SIPL</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Deep research, translated into clinical intelligence.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[#53687A]">Sequoia Insilico is a deep-science BioAI company based in New Delhi. Our work draws on bioinformatics, systems biology, neuroscience, and computational psychiatry.</p><p className="mt-4 max-w-xl text-base leading-7 text-[#53687A]">We are building toward a richer understanding of brain health by connecting phenotype, biology, clinical context, and outcomes over time.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/inside-sipl/meet-the-team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#147C79]">Meet the people behind SIPL <ArrowRight className="h-4 w-4" /></Link><Link href="#partners" className="inline-flex items-center gap-2 text-sm font-semibold text-[#147C79]">Partners &amp; collaborators <ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="grid gap-3 sm:grid-cols-2">{[["Purpose", "Turn complex information into useful, explainable intelligence."], ["Curiosity", "Treat every model and pathway as open to testing and revision."], ["Responsibility", "Keep privacy, clinical context, and human oversight central."], ["Integrity", "Communicate evidence and limitations with discipline."]].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#DCE4EA] bg-white p-5"><span className="mb-5 block h-1 w-8 rounded-full bg-[#147C79]"/><h3 className="text-sm font-bold text-[#10243B]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647889]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="architecture" className="border-y border-[#DCE4EA] bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">The SIPL architecture</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">One connected loop across care, integration, and discovery.</h2><p className="mt-4 text-base leading-7 text-[#647889]">Clinical work informs research. New evidence creates better questions for care and study.</p></div>
          <div className="grid gap-3 md:grid-cols-3">{architecture.map(({ icon: Icon, title, text }) => <article key={title} className="flex flex-col rounded-2xl border border-[#DCE4EA] bg-[#F7FAFB] p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#102F49] text-[#8ED5C6]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647889]">{text}</p></article>)}</div>
          <div className="mt-5 rounded-2xl bg-[#EFF7F5] p-6 md:p-8"><div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8"><div className="md:w-44 md:shrink-0"><h3 className="text-base font-semibold">A learning loop</h3><p className="mt-1 text-xs leading-5 text-[#647889]">Each stage informs the next.</p></div><div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{researchSteps.map(([number, title, text]) => <div key={number} className="relative border-t border-[#C8D8D8] pt-3"><span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-[#147C79]"/><p className="text-[10px] font-bold tracking-widest text-[#147C79]">{number}</p><h4 className="mt-2 text-sm font-semibold">{title}</h4><p className="mt-1 text-xs leading-5 text-[#647889]">{text}</p></div>)}</div></div></div>
        </div>
      </section>

      <section id="science" className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1120px]"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">Science &amp; evidence</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Every model earns its place in care.</h2></div><p className="max-w-2xl text-base leading-7 text-[#53687A]">We treat each model and biomarker as a hypothesis to test. Evidence is examined alongside the intended use, the study context, and the limitations.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-2xl bg-[#102F49] p-7 text-white md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ED5C6]">Reported clinical evaluation</p><div className="mt-5 flex items-baseline gap-3"><span className="text-5xl font-semibold tracking-tight">91%</span><span className="text-sm text-white/65">agreement with clinician-rated HAM-D</span></div><p className="mt-4 text-sm leading-6 text-white/65">Reported across 500+ assessments in a clinical validation collaboration with ABVIMS and Dr. RML Hospital, New Delhi. Agreement is not equivalent to diagnostic accuracy.</p></article>
            <article className="rounded-2xl border border-[#DCE4EA] bg-white p-7 md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#147C79]">How we validate</p><h3 className="mt-3 text-xl font-semibold">Clinically grounded. Multimodal by design.</h3><div className="mt-6 flex flex-wrap gap-2">{["Literature grounding", "Ethics review", "Data quality", "Model evaluation", "External validation"].map((step) => <span key={step} className="rounded-full border border-[#DCE4EA] bg-[#F7FAFB] px-3 py-2 text-xs font-medium text-[#53687A]">{step}</span>)}</div><p className="mt-5 text-sm leading-6 text-[#647889]">We aim to report performance with appropriate context, uncertainty, and limitations.</p></article>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3"><article className="rounded-xl border border-[#DCE4EA] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#147C79]">Intellectual property</p><p className="mt-2 text-sm font-semibold">Indian Patent No. 202511025669</p><p className="mt-1 text-xs leading-5 text-[#647889]">WIPO PCT application in process, as reported by SIPL.</p></article><article className="rounded-xl border border-[#DCE4EA] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#147C79]">Research support</p><p className="mt-2 text-sm font-semibold">Grand Challenges India · GCE-III</p><p className="mt-1 text-xs leading-5 text-[#647889]">₹50L+ equity-free support reported through BIRAC, DBT, and BMGF.</p></article><article className="rounded-xl border border-[#DCE4EA] bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#147C79]">Recognition</p><p className="mt-2 text-sm font-semibold">Deep-tech startup</p><p className="mt-1 text-xs leading-5 text-[#647889]">DPIIT recognition and a 2018 DBT–MoST award, as reported by SIPL.</p></article></div>
          <p className="mt-4 text-xs leading-5 text-[#7A8B98]">Milestones are company-reported. Detailed methods, underlying records, and current IP status should be confirmed during diligence.</p>
          <Link href="/inside-sipl/publications" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147C79]">Evidence &amp; IP details <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section id="bioai" className="border-y border-[#DCE4EA] bg-[#DFF1EC] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">BioAI for biopharma</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Brain-health intelligence for drug development.</h2></div><div><p className="text-base leading-7 text-[#53687A]">We apply multimodal research and phenotypes to help biopharma teams ask better questions about psychiatric trials and treatment response.</p><Link href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#147C79]">Discuss a research objective <ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{biopharmaAreas.map(({ icon: Icon, title, text, badge }) => <article key={title} className="rounded-2xl border border-[#102F49]/10 bg-white p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF7F5] text-[#147C79]"><Icon className="h-5 w-5" /></span>{badge && <span className="rounded-full bg-[#F7FAFB] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#647889]">{badge}</span>}</div><h3 className="mt-5 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#647889]">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">Our precision framework</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Precision care must be multidimensional.</h2><p className="mt-4 text-base leading-7 text-[#647889]">Individual care depends on sound clinical interpretation and evidence that reflects the population it serves.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-[#DCE4EA] bg-white p-7 md:p-8"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#147C79]">01 · Diagnostic precision</span><h3 className="mt-4 text-xl font-semibold">Understand the clinical picture.</h3><p className="mt-3 text-sm leading-6 text-[#647889]">Consider overlapping disorders, comorbidities, differential diagnoses, and disease trajectories rather than treating conditions as isolated labels.</p></article><article className="rounded-2xl border border-[#DCE4EA] bg-white p-7 md:p-8"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#147C79]">02 · Population precision</span><h3 className="mt-4 text-xl font-semibold">Build for the people represented.</h3><p className="mt-3 text-sm leading-6 text-[#647889]">Evaluate relevance across demographic, genetic, linguistic, cultural, and socioeconomic diversity.</p></article></div>
        </div>
      </section>

      <section id="partners" className="border-y border-[#DCE4EA] bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">Who we work with</p><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">A collaboration platform for brain health.</h2></div><p className="max-w-lg text-sm leading-6 text-[#647889]">Partnerships start with a clearly defined objective and an evidence pathway suited to the question.</p></div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{partnerTypes.map(([title, text]) => <article key={title} className="rounded-xl border border-[#DCE4EA] bg-[#F7FAFB] p-5 transition hover:border-[#147C79]/40"><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#647889]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="trust" className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1120px]"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">Responsible by design</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Technology should help professionals see more clearly.</h2></div><p className="max-w-2xl text-base leading-7 text-[#647889]">Clinical AI must be developed with clear purpose, careful handling of sensitive information, and accountability for how results are used.</p></div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">{trustPrinciples.map(([title, text], index) => <article key={title} className="rounded-xl border border-[#DCE4EA] bg-white p-5"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#EFF7F5] text-[#147C79]">{index === 0 ? <FlaskConical className="h-4 w-4" /> : index === 1 ? <ShieldCheck className="h-4 w-4" /> : <Users className="h-4 w-4" />}</span><h3 className="mt-4 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#647889]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="investors" className="bg-[#102F49] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ED5C6]">Investors &amp; strategic partners</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">A specialised BioAI platform connecting care and discovery.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/65">SIPL is building at the intersection of brain health, multimodal research, genomics, clinical workflows, and biopharma.</p><Link href="#contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#8ED5C6] px-6 text-sm font-bold text-[#102F49] transition hover:bg-white">Request an investor conversation <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 md:p-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ED5C6]">What to include</p><h3 className="mt-3 text-xl font-semibold">Tell us what you are exploring.</h3><ul className="mt-5 grid gap-3 text-sm text-white/70"><li className="flex gap-3"><span className="text-[#8ED5C6]">01</span> Your organisation and area of interest</li><li className="flex gap-3"><span className="text-[#8ED5C6]">02</span> The research or investment question</li><li className="flex gap-3"><span className="text-[#8ED5C6]">03</span> What information would help a first conversation</li></ul><p className="mt-5 border-t border-white/15 pt-4 text-xs leading-5 text-white/50">Supporting documentation is shared directly where appropriate. Please do not submit personal medical information through the contact form.</p></div>
        </div>
      </section>

      <section id="team" className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147C79]">The people behind SIPL</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">Research, clinical perspective, and engineering.</h2><Link href="/inside-sipl/meet-the-team" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147C79]">Meet the team <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-3 sm:grid-cols-3">{teamHighlights.map((member) => <article key={member.id} className="rounded-xl border border-[#DCE4EA] bg-white p-5"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#102F49] text-sm font-semibold text-[#8ED5C6]">{member.initials}</span><h3 className="mt-4 text-sm font-semibold">{member.name}</h3><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#147C79]">{member.position}</p><p className="mt-3 text-xs leading-5 text-[#647889]">{member.shortBio}</p></article>)}</div></div>
        <div id="advisory-board" className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-4 rounded-2xl border border-[#DCE4EA] bg-[#EFF7F5] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#147C79]">Coming soon</p><h3 className="mt-2 text-xl font-semibold">Advisory Board</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#647889]">We are bringing together experienced voices across clinical care, neuroscience, genomics, and biopharma. More details will follow.</p></div><span className="w-fit shrink-0 rounded-full border border-[#147C79]/20 bg-white px-4 py-2 text-xs font-semibold text-[#147C79]">In formation</span></div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#123454] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ED5C6]">Let&apos;s talk</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">Shape the future of brain and mental healthcare with us.</h2><p className="mt-5 max-w-lg text-base leading-7 text-white/65">For clinical, research, genomics, biopharma, or investment discussions, tell us your objective and we will route it to the right team.</p><div className="mt-8 flex items-center gap-3 text-sm text-white/70"><Building2 className="h-4 w-4 text-[#8ED5C6]" /> New Delhi, India</div></div><div className="rounded-2xl bg-[#F5F8FC] p-6 text-[#10243B] sm:p-8"><h3 className="text-xl font-semibold">Start a conversation</h3><p className="mt-2 text-sm text-[#647889]">Share a few details. Please do not include personal medical information.</p><div className="mt-6"><ContactForm /></div></div></div>
      </section>
    </div>
  );
}
