import Link from "next/link";
import { ArrowDown, ArrowRight, AudioLines, Dna, FlaskConical, Network, ShieldCheck, Users, Building2, Microscope } from "lucide-react";
import { ContactForm } from "@/features/public/contact/ContactForm";

const proofPoints = [
  ["Granted", "Indian patent"],
  ["97%", "HAM-D agreement"],
  ["500+", "hospital assessments"],
  ["BIRAC", "grant-backed validation"],
] as const;

const capabilities = [
  { icon: AudioLines, number: "01", title: "Multimodal biomarkers", description: "Bring behavioural, clinical, and biological signals into a clearer research context." },
  { icon: FlaskConical, number: "02", title: "Clinical development", description: "Support study design, patient characterisation, and meaningful outcome measurement." },
  { icon: Dna, number: "03", title: "Genomics & discovery", description: "Connect genomic findings with longitudinal clinical context to investigate biology and response." },
];

const partnerTypes = [
  { icon: Building2, title: "Hospitals & health systems", text: "Explore connected clinical workflows, longitudinal outcomes, and evidence generation." },
  { icon: Users, title: "Researchers & clinicians", text: "Shape clinically relevant questions and evaluate multimodal signals responsibly." },
  { icon: FlaskConical, title: "Biopharma teams", text: "Investigate patient stratification, clinical development, and real-world evidence." },
  { icon: Dna, title: "Genomics partners", text: "Connect genomic findings to phenotypes, clinical context, and outcomes over time." },
];

const investmentThesis = [
  ["A focused starting point", "Brain and mental health is a high-complexity domain where clinical context and biological variation matter."],
  ["A multimodal foundation", "SIPL brings behavioural, clinical, and genomic research into a shared evidence framework."],
  ["A bridge from care to discovery", "The long-term opportunity is to connect real-world clinical context with better research questions and evidence."],
];

export function InvestorLandingPage() {
  return (
    <div className="bg-[#f4f8fb] text-[#10243b] selection:bg-[#c7eee5]">
      <section className="relative flex min-h-[calc(100svh-80px)] flex-col justify-center overflow-hidden px-6 pb-8 pt-28 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(83,190,171,0.14),transparent_38%),linear-gradient(rgba(14,74,96,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(14,74,96,0.035)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px]" />
        <div className="relative mx-auto grid w-full max-w-[1360px] items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#147c79]">Sequoia Insilico Pvt. Ltd. · BioAI for brain &amp; mental health</p>
            <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10243b] md:text-[64px] lg:text-[76px]">Connected intelligence for <span className="text-[#147c79]">brain and mental healthcare.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#53687a] md:text-lg">SIPL connects clinical care, behavioural signals, neuroscience, genomics, and discovery through responsible AI infrastructure.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#102f49] px-6 text-sm font-semibold text-white transition hover:bg-[#147c79]">Partner with SIPL <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#science" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#102f49]/20 bg-white/70 px-6 text-sm font-semibold text-[#102f49] transition hover:border-[#147c79]">Explore our science <ArrowDown className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]" aria-label="Clinical, behavioural, and genomic research signals connected into one evidence layer">
            <div className="absolute inset-8 rounded-full bg-[#8ed5c6]/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-[#147c79]/15 bg-white/80 p-5 shadow-[0_32px_90px_rgba(16,47,73,0.12)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-[#102f49]/10 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#147c79]">SIPL · Research framework</p><h2 className="mt-1 text-lg font-semibold">A connected view of biology</h2></div><Network className="h-5 w-5 text-[#147c79]" /></div>
              <div className="relative my-5 grid min-h-[220px] place-items-center overflow-hidden rounded-2xl bg-[#eff7f5]">
                <div className="absolute h-48 w-48 rounded-full border border-dashed border-[#147c79]/30" />
                <div className="absolute h-32 w-32 rounded-full border border-[#147c79]/25" />
                <div className="absolute h-2 w-2 rounded-full bg-[#cfaa59] shadow-[0_0_0_8px_rgba(207,170,89,.14)]" />
                <div className="absolute left-[13%] top-[23%] rounded-full border border-white bg-white px-3 py-2 text-xs font-semibold shadow-sm">Clinical</div>
                <div className="absolute right-[11%] top-[26%] rounded-full border border-white bg-white px-3 py-2 text-xs font-semibold shadow-sm">Behavioural</div>
                <div className="absolute bottom-[18%] left-[22%] rounded-full border border-white bg-white px-3 py-2 text-xs font-semibold shadow-sm">Genomic</div>
                <div className="absolute bottom-[17%] right-[18%] rounded-full border border-white bg-white px-3 py-2 text-xs font-semibold shadow-sm">Outcomes</div>
                <div className="absolute h-20 w-20 rounded-full bg-[#147c79] text-white grid place-items-center text-center text-[10px] font-bold uppercase leading-4 tracking-widest shadow-xl">Evidence<br/>layer</div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-[#102f49] px-4 py-3 text-white"><ShieldCheck className="h-5 w-5 shrink-0 text-[#8ed5c6]" /><p className="text-xs leading-5 text-white/80">Research-led · Human-supervised · Evidence-linked</p></div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-9 grid w-full max-w-[1360px] grid-cols-2 border-y border-[#102f49]/10 py-4 sm:grid-cols-4">
          {proofPoints.map(([value, label]) => <div key={label} className="py-2 sm:px-5 sm:first:pl-0"><p className="text-lg font-bold tracking-tight text-[#102f49] md:text-xl">{value}</p><p className="mt-1 text-[11px] text-[#647889] md:text-xs">{label}</p></div>)}
        </div>
      </section>

      <section id="evidence" className="border-y border-[#102f49]/10 bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147c79]">Evidence &amp; milestones</p><h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Early proof, clearly framed.</h2></div><Link href="/inside-sipl/publications" className="inline-flex items-center gap-2 text-sm font-semibold text-[#147c79]">View evidence and IP <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#102f49]/10 bg-[#f7fafb] p-6"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#147c79]">Clinical evaluation</p><p className="mt-4 text-3xl font-semibold tracking-tight text-[#102f49]">97%</p><h3 className="mt-1 text-sm font-bold">Reported agreement with HAM-D</h3><p className="mt-3 text-sm leading-6 text-[#647889]">Reported across 500+ hospital assessments at Dr. Ram Manohar Lohia (RML) Hospital. Agreement is a validation metric; it is not a claim of diagnostic accuracy.</p></article>
            <article className="rounded-2xl border border-[#102f49]/10 bg-[#f7fafb] p-6"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#147c79]">Intellectual property</p><p className="mt-4 text-2xl font-semibold tracking-tight text-[#102f49]">Indian patent</p><h3 className="mt-1 text-sm font-bold">PCT filing reported</h3><p className="mt-3 text-sm leading-6 text-[#647889]">Patent No. 202511025669, with an active WIPO PCT filing, as reported by SIPL.</p></article>
            <article className="rounded-2xl border border-[#102f49]/10 bg-[#f7fafb] p-6"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#147c79]">Research support</p><p className="mt-4 text-2xl font-semibold tracking-tight text-[#102f49]">BIRAC GCE-III</p><h3 className="mt-1 text-sm font-bold">Grant-backed development</h3><p className="mt-3 text-sm leading-6 text-[#647889]">Non-dilutive support for product development and validation, as reported by SIPL.</p></article>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#7a8b98]">These milestones describe reported validation, IP, and grant support. They do not imply regulatory clearance, clinical utility beyond the reported evaluation, or commercial adoption. Supporting details can be requested from SIPL.</p>
        </div>
      </section>

      <section id="science" className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147c79]">BioAI for biopharma</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">Connect patient biology, clinical outcomes, and discovery.</h2></div>
          <div><p className="max-w-2xl text-base leading-7 text-[#53687a] md:text-lg">We build research infrastructure for complex brain and mental health questions. Multimodal data and computational methods help partners explore biomarkers, stratify populations, and understand response across development and real-world settings.</p><Link href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147c79]">Discuss a research objective <ArrowRight className="h-4 w-4" /></Link>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">{capabilities.map(({ icon: Icon, number, title, description }) => <article key={title} className="rounded-2xl border border-[#102f49]/10 bg-white p-5"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-[#147c79]" /><span className="text-[10px] font-bold tracking-widest text-[#8a9aa6]">{number}</span></div><h3 className="mt-7 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#647889]">{description}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="investors" className="overflow-hidden bg-[#102f49] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ed5c6]">Investor &amp; strategic partners</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">A specialised BioAI platform connecting care and discovery.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/65">SIPL is building at the convergence of brain health, multimodal biomarkers, genomics, clinical workflows, and biopharma research.</p><Link href="/contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#8ed5c6] px-6 text-sm font-bold text-[#102f49] transition hover:bg-white">Start an investor conversation <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-3">{investmentThesis.map(([title, text], index) => <article key={title} className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"><span className="text-xs font-bold tracking-[0.18em] text-[#8ed5c6]">0{index + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/60">{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="partners" className="border-y border-[#102f49]/[0.08] bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end md:gap-12">
            <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147c79]">Who we work with</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">One scientific foundation. Different partner questions.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-[#53687a]">We work with teams close to the science and the people it serves. Partnerships begin with a clearly defined question, intended use, and evidence pathway.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{partnerTypes.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-[#102f49]/10 bg-[#f7fafb] p-6 transition hover:-translate-y-1 hover:border-[#147c79]/35"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dff1ec] text-[#147c79]"><Icon className="h-5 w-5" /></span><h3 className="mt-6 text-base font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#647889]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="approach" className="bg-[#e8f2ef] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147c79]">Our approach</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">Scientific depth, responsible AI, practical collaboration.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#53687a]">Every research question starts with clinical relevance, clear data governance, and transparent evaluation. Qualified professionals remain responsible for interpretation and care.</p><Link href="/inside-sipl/meet-the-team" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#147c79]">Meet the team <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="grid gap-3 sm:grid-cols-2">{[["01", "Purpose & consent", "Use information with clear purpose and appropriate permissions."], ["02", "Privacy & governance", "Protect sensitive data with defined access and accountable processes."], ["03", "Evidence & validation", "Evaluate performance, uncertainty, and limitations with scientific discipline."], ["04", "Human oversight", "Keep qualified professionals accountable for interpretation and care."]].map(([number, title, text]) => <article key={number} className="rounded-2xl border border-[#147c79]/10 bg-white/75 p-5"><p className="text-[10px] font-bold tracking-[0.18em] text-[#147c79]">{number}</p><h3 className="mt-4 text-sm font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647889]">{text}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="advisory-board" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 rounded-[1.75rem] border border-[#147c79]/15 bg-white p-7 shadow-[0_18px_55px_rgba(16,47,73,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e8f2ef] text-[#147c79]"><Microscope className="h-5 w-5" /></span><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#147c79]">Coming soon</p><h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Advisory Board</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#647889]">We are bringing together experienced voices across clinical care, neuroscience, genomics, research, and biopharma. More to come.</p></div></div>
          <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#147c79]/20 bg-[#f4f8fb] px-4 py-2 text-xs font-semibold text-[#147c79]">In formation</span>
        </div>
      </section>

      <section id="contact" className="bg-[#102f49] px-6 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ed5c6]">Partner with SIPL</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">Let’s build better evidence together.</h2><p className="mt-5 max-w-lg text-base leading-7 text-white/65">For biopharma, clinical, research, and genomics collaborations, tell us what you are working on.</p></div><div className="rounded-2xl bg-white p-6 text-[#10243b] sm:p-8"><h3 className="text-xl font-semibold">Start a conversation</h3><p className="mt-2 text-sm text-[#647889]">Share a few details and our team will follow up.</p><div className="mt-6"><ContactForm /></div></div></div>
      </section>
    </div>
  );
}
