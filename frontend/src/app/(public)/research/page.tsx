import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection, PullQuote, Timeline } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Research | SIPL",
  description: "SIPL research philosophy, validation, human-in-the-loop AI, evidence-based medicine, and patient safety.",
  path: "/research"
});

const researchPhilosophy = [
  {
    title: "Science is not a phase — it is a permanent state",
    body: "At SIPL, research is not something we did before we built a product. It is the continuous substrate of everything we build. Every model, every biomarker, every clinical decision pathway in SIPL is a living scientific hypothesis — subject to revision, replication, and challenge as new evidence emerges. We do not graduate from research mode; we deepen it.",
  },
  {
    title: "India-first, India-specific science as first step",
    body: "The genetic architecture, disease phenotypes, socioeconomic determinants, and healthcare contexts of Indian psychiatric populations are meaningfully distinct from Western cohorts. We do not import findings and assume transferability. Our research is anchored in Indian genomic references — IndiGen, South Asia AXIOM arrays — and validated in Indian clinical settings. We build the evidence base our patients deserve, not the one that was convenient to borrow.",
  },
  {
    title: "Multimodal or nothing",
    body: "No single biomarker — genetic, acoustic, linguistic, or behavioural — is sufficient to characterise the complexity of serious mental illness or nervous system disorders. SIPL's research philosophy is fundamentally integrative. We pursue signal across modalities because that is where the biological truth lies — in the convergence of evidence, not the loudness of any single channel.",
  },
  {
    title: "Publish, share, contribute and train",
    body: "We believe science advances faster when it is open. SIPL is committed to peer-reviewed publication of our methods, findings, and limitations. We share datasets where ethically and legally permissible. We contribute to ICMR, global psychiatric genomics consortia, and open science initiatives — because the mission of ending diagnostic failure in psychiatry is larger than any single organisation.",
  },
];

const validationSteps = [
  {
    eyebrow: "S1",
    title: "Literature grounding before model development",
    body: "Every SIPL feature begins with a systematic review of peer-reviewed evidence. We establish biological plausibility and prior clinical validity before a single line of model code is written. Opinion and intuition are inputs to discussion — not to architecture.",
  },
  {
    eyebrow: "S2",
    title: "Ethics approval and ICMR-compliant protocol design",
    body: "All human-subject research at SIPL is conducted under Institutional Ethics Committee approval, following strict ICMR guidelines for AI-based clinical research. Informed consent, data minimisation, and participant safety are non-negotiable preconditions — not afterthoughts.",
  },
  {
    eyebrow: "S3",
    title: "Live hospital validation — not controlled simulations",
    body: "SIPL has been validated in real clinical conditions across multiple hospital sites — with real patients, real clinicians, real time constraints, and real noise. We reject lab-only validation as insufficient for clinical AI. The real world is the only valid test environment.",
  },
  {
    eyebrow: "S4",
    title: "Replication and independent verification",
    body: "Internal validation is necessary but not sufficient. We actively seek external replication of our findings — through academic partnerships, multi-site studies, and independent clinical review. A result we cannot reproduce is not a result we will ship.",
  },
  {
    eyebrow: "S5",
    title: "Continuous post-deployment monitoring",
    body: "Validation does not end at deployment. SIPL includes systematic performance monitoring, bias auditing, and clinical outcome tracking across all live deployments. When real-world performance diverges from validation results, we investigate and act — not explain it away.",
  },
];

const aiDoes = [
  "Synthesises multimodal signals into structured clinical intelligence",
  "Surfaces patterns across longitudinal patient data that are beyond human perceptual capacity",
  "Flags pharmacogenomic interactions and contraindications",
  "Generates probabilistic risk scores for relapse and non-response",
  "Presents evidence with confidence intervals, not categorical verdicts",
];

const clinicianDoes = [
  "Exercises clinical judgement informed — never replaced — by AI outputs",
  "Contextualises findings within the full human story of the patient",
  "Makes and owns every diagnostic and treatment decision",
  "Overrides AI recommendations when clinical context demands it",
  "Bears full professional and ethical responsibility for patient care",
];

const ebmCards = [
  {
    title: "Best available evidence, continuously updated",
    body: "SIPL's clinical decision pathways are anchored in the highest available tier of evidence — systematic reviews, meta-analyses, and randomised controlled trial data where it exists in psychiatry. Where RCT evidence is absent or insufficient, we are explicit about that gap and calibrate confidence accordingly. We do not dress observational evidence in the language of causation.",
  },
  {
    title: "Clinical expertise is irreplaceable evidence",
    body: "EBM is not the subordination of clinical experience to statistical aggregates. The clinician's pattern recognition, contextual knowledge, and patient relationship are forms of evidence that no model fully captures. SIPL is designed to amplify clinical expertise, not override it with population-level averages applied to individual patients.",
  },
  {
    title: "Patient values and context as clinical data",
    body: "Evidence-based medicine integrates patient preferences, lived experience, cultural context, and individual circumstances into clinical decision-making. SIPL captures structured patient-reported outcomes and contextual data — because the best treatment is not just the most statistically effective one, but the one this patient will adhere to and benefit from.",
  },
  {
    title: "Uncertainty is clinical information",
    body: "Where the evidence is weak, conflicting, or absent, SIPL communicates that explicitly. Calibrated uncertainty — presented transparently to the clinician — is more valuable than false confidence. A system that hedges its ignorance behind confident outputs is not evidence-based; it is evidence-washing.",
  },
  {
    title: "Indian populations demand Indian evidence",
    body: "The majority of psychiatric research underpinning global EBM guidelines has been conducted on Western, predominantly Caucasian populations. SIPL actively generates and integrates Indian-specific clinical and genomic evidence — because applying foreign population norms to Indian patients is not evidence-based medicine; it is epidemiological mismatch.",
  },
];

const safetyCards = [
  {
    title: "Explainability as a safety requirement",
    body: "A clinical AI system whose reasoning cannot be explained to the treating clinician is a safety risk — not a feature. Every SIPL output is accompanied by the evidence chain that produced it. Black-box outputs have no place in clinical decision support.",
  },
  {
    title: "Mandatory override and escalation pathways",
    body: "Clinicians can always override any SIPL recommendation. Override events are logged, reviewed, and used to improve the system — they are treated as signal, not as noise. Clear escalation pathways exist for edge cases, emergencies, and safety-critical situations.",
  },
  {
    title: "Consent, privacy, and data dignity",
    body: "Every patient whose data informs SIPL has given informed, explicit consent. Data is handled under the strictest applicable standards — ABDM, DPDP Act, ICMR guidelines. Patient data is never used for any purpose beyond what was explicitly consented to. Privacy is not a compliance checkbox — it is a patient right we take personally.",
  },
  {
    title: "Bias monitoring as ongoing clinical safety",
    body: "Algorithmic bias in clinical AI produces disparate harm — underserving women, lower-income patients, linguistic minorities, and rural populations. SIPL conducts systematic bias audits across demographic subgroups at every validation stage and post-deployment. Differential performance is treated as a patient safety issue, not a statistical footnote.",
  },
  {
    title: "Regulatory compliance as a floor, not a ceiling",
    body: "CDSCO SaMD pathways, ICMR guidelines, and NMC standards define the minimum bar. SIPL holds itself to standards beyond regulatory compliance — because the goal is not to satisfy a regulator, but to be genuinely safe for the patients and clinicians who depend on us.",
  },
  {
    title: "Our commitment to every patient in our system",
    body: "We will never allow the ambition of the science to outrun the safety of the person. Every model we build, every feature we ship, and every partnership we enter is governed by a single non-negotiable obligation: the patient in front of the clinician is not a test case — they are a human being whose life may depend on the quality of what we have built.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="border-l border-[#D4AF37] pl-4 text-base leading-7 text-[#001B65]/74">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResearchPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Research" title="Research is not a phase. It is the system.">
          <p>
            SIPL treats every model, biomarker, and clinical decision pathway as a living scientific hypothesis — subject to revision, replication, and challenge as new evidence emerges.
          </p>
        </EditorialHero>

        <EditorialSection title="How we do science, and why it matters.">
          <div className="grid gap-8">
            <p>
              SIPL operates at the intersection of deep science and live clinical care. These principles define how we approach research, validate evidence, position AI within the clinical relationship, and hold ourselves to the highest standard of patient safety — without exception.
            </p>
            <CardGrid cards={researchPhilosophy} columns="two" />
          </div>
        </EditorialSection>

        <EditorialSection title="Validation is part of innovation.">
          <div className="grid gap-8">
            <p>
              In clinical AI, the most innovative thing you can do is prove that something works — rigorously, reproducibly, and in the real world.
            </p>
            <Timeline items={validationSteps} />
          </div>
        </EditorialSection>

        <EditorialSection title="Decision support, not decision replacement.">
          <div className="grid gap-8">
            <p>
              SIPL is a decision support system — not a decision system. The clinician is not a user interface between the AI and the patient. The clinician is the clinician. The AI is the instrument.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-6 md:p-8">
                <h3 className="mb-5 font-heading text-2xl font-semibold text-[#001B65]">What the AI does</h3>
                <BulletList items={aiDoes} />
              </div>
              <div className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-6 md:p-8">
                <h3 className="mb-5 font-heading text-2xl font-semibold text-[#001B65]">What the clinician does</h3>
                <BulletList items={clinicianDoes} />
              </div>
            </div>
            <PullQuote>
              An AI system that makes clinicians feel redundant has failed — regardless of its accuracy metrics. Our measure of success is a clinician who feels more informed, more confident, and more capable because SIPL is in the room.
            </PullQuote>
          </div>
        </EditorialSection>

        <EditorialSection title="Evidence-based medicine, continuously updated.">
          <CardGrid cards={ebmCards} columns="two" />
        </EditorialSection>

        <EditorialSection title="Do no harm — built into the architecture.">
          <div className="grid gap-8">
            <p>
              Patient safety is not a feature layer added on top of SIPL — it is a structural constraint that shapes every design decision from the ground up. Safety reviews precede every release. No output that could directly precipitate patient harm ships without clinical sign-off.
            </p>
            <CardGrid cards={safetyCards} />
          </div>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
