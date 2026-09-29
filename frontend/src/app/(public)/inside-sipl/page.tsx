import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Inside SIPL | Sequoia Insilico",
  description: "Inside SIPL's philosophy, culture, long-term thinking, and clinical responsibility.",
  path: "/inside-sipl",
});

const principles = [
  {
    title: "Science before speed",
    body: "We never ship before the evidence is ready. Rigorous validation — clinical, computational, and ethical — precedes every release. The pressure to move fast will always exist; the commitment to move right is non-negotiable.",
  },
  {
    title: "Patient dignity above all",
    body: "Every algorithm we build, every dataset we curate, and every product decision we make is filtered through one question: does this serve the patient with dignity? We are building for people at their most vulnerable — we do not forget that.",
  },
  {
    title: "Radical intellectual honesty",
    body: "We say what the data shows, not what we wish it showed. We acknowledge limitations in our models, gaps in our evidence, and uncertainty in our conclusions — because clinical AI that overstates confidence causes harm.",
  },
  {
    title: "Depth over breadth",
    body: "We solve hard problems fully rather than many problems superficially. Precision psychiatry demands genuine depth — in science, in clinical understanding, in engineering. We resist the temptation to spread thin.",
  },
  {
    title: "Openness as a principle",
    body: "We share knowledge — through publication, collaboration, and education — because the field advances faster when we do. Proprietary advantage comes from execution, not from hoarding science.",
  },
  {
    title: "Self-disruption, self-competition, self-renewal",
    body: "We do not wait for the world to make us obsolete — we do it ourselves. Every individual at SIPL is expected to continuously evaluate their own work, challenge their own assumptions, and compete against their own previous best. Excellence is not a destination; it is a discipline of perpetual internal churn.",
  },
];

const cultureCards = [
  {
    title: "We engage for curiosity, not just credentials",
    body: "We value people who are genuinely curious across domains — who read outside their field, ask uncomfortable questions, and treat knowledge as a lifelong pursuit.",
  },
  {
    title: "Flat by design, deep by discipline",
    body: "SIPL is a flat team — there is no hierarchy of importance, only clarity of role. Every person on the team is expected to think, challenge, and contribute beyond their job description.",
  },
  {
    title: "Disagreement is a feature, not a failure",
    body: "The best decisions at SIPL emerge from honest, rigorous debate. We expect team members to challenge assumptions — including those of leadership — with evidence and reasoning.",
  },
  {
    title: "Growth is structured, not accidental",
    body: "We invest in the development of every team member — through research exposure, clinical immersion, conference participation, and mentorship.",
  },
  {
    title: "Mental health starts here, at home",
    body: "We cannot build the future of mental healthcare from a team that is burned out, overlooked, or unsupported. SIPL takes the wellbeing of its people seriously — because we mean what we say about mental health being foundational to a productive and fulfilling life.",
  },
];

const longTermCards = [
  {
    title: "Build for 2035, not next quarter",
    body: "The problems we are solving — diagnostic heterogeneity in psychiatry, pharmacogenomic stratification, early relapse detection — are decade-scale challenges. We make architectural decisions, research investments, and partnerships based on where the field will be, not just where it is.",
  },
  {
    title: "First principles over borrowed frameworks",
    body: "Precision psychiatry in India has no established playbook. The population genetics are different. The healthcare infrastructure is different. The disease presentation is different. We do not copy Western models — we reason from first principles about what Indian patients, clinicians, and systems actually need, and we build accordingly.",
  },
  {
    title: "Validation is part of innovation",
    body: "In clinical AI, the most innovative thing you can do is prove that something works — rigorously, reproducibly, and in the real world. We treat clinical validation not as a regulatory hurdle to clear but as a core expression of our scientific identity.",
  },
  {
    title: "Embrace uncomfortable complexity",
    body: "Mental and nervous system disorders are among the most complex phenomena in biology. We do not simplify them for convenience. We build systems that hold that complexity — multimodal, longitudinal, context-sensitive — because oversimplification in clinical AI is not just intellectually lazy, it is dangerous.",
  },
  {
    title: "Interoperability as a strategic asset",
    body: "We build on open standards — FHIR R4, HL7, ABDM, SNOMED — because the future of healthcare is connected, not siloed. SIPL is designed to integrate, extend, and federate — not to lock hospitals into a proprietary ecosystem.",
  },
  {
    title: "The best ideas come from the bedside",
    body: "Our most important collaborators are the psychiatrists, neurologists, nurses, and patients who live with these problems every day. Innovation at SIPL flows from clinical observation as much as from computation.",
  },
];

const dailyCommitments = [
  "We do hard science on hard problems, without cutting corners.",
  "We treat every patient in our data as a person, not a data point.",
  "We compete hardest against ourselves — always raising our own bar.",
  "We are horizontal — every person here is equally vital to the mission.",
  "We build for India, with India, and because of India.",
  "We believe mental health is not a niche — it is the centre of human life.",
  "And we will not stop until the tools exist to honour that belief.",
];

export default function InsideSiplPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Inside SIPL" title="Built like a Sequoia: patient, deep, enduring.">
          <p>
            The Sequoia name reflects the belief that enduring systems can begin from small seeds. For SIPL, that means building patiently: a strong team, long-term clinical infrastructure, and a platform where science, clinicians, and technology grow together toward better mental health care.
          </p>
        </EditorialHero>

        <EditorialSection title="Technology in service of clinical clarity.">
          <div className="grid gap-6">
            <p className="font-heading text-2xl font-semibold leading-9 text-[#001B65]">
              Technology should help clinicians see more clearly, not replace the people responsible for care.
            </p>
            <p>
              Mental and nervous system disorders remain partially understood through both science and clinical models. Clinical psychology remains both science and practice. Many phenomena are still imperfectly understood. Therefore SIPL emphasizes evidence-based medicine, clinical oversight, scientific humility, and objective measurement.
            </p>
          </div>
        </EditorialSection>

        <EditorialSection title="How we think, build, and grow together.">
          <div className="grid gap-8">
            <p>
              These principles are not aspirations written for a wall — they are the operating system of SIPL. They govern how we make decisions, how we treat each other, and how we think about the long arc of what we are building.
            </p>
            <CardGrid cards={principles} />
          </div>
        </EditorialSection>

        <EditorialSection title="Horizontal. Curious. Rigorous.">
          <div className="grid gap-8">
            <p>
              The problems we are solving sit at the intersection of genomics, neuroscience, machine learning, clinical medicine, and public health. No single discipline contains the answer.
            </p>
            <CardGrid cards={cultureCards} columns="two" />
          </div>
        </EditorialSection>

        <EditorialSection title="Built for the long arc.">
          <CardGrid cards={longTermCards} />
        </EditorialSection>

        <EditorialSection title="How we show up, every day.">
          <div className="grid gap-4">
            {dailyCommitments.map((commitment) => (
              <p key={commitment} className="border-l border-[#D4AF37] pl-5 font-heading text-base font-semibold leading-7 text-[#001B65]">
                {commitment}
              </p>
            ))}
          </div>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
