export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "mental-health-needs-multimodal-research",
    category: "Research perspective",
    title: "Mental health needs a multimodal view",
    summary:
      "A more complete research picture can emerge when behavioural, clinical, and biological signals are considered together.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "One observation rarely tells the whole story",
        paragraphs: [
          "Mental and nervous system conditions are shaped by many interacting processes. A questionnaire, a clinical conversation, a voice sample, or a laboratory measure can each provide useful evidence, but each captures only part of a person’s experience.",
          "Multimodal research asks how these different observations relate to one another. The aim is not to replace clinical judgement with a larger pile of data. It is to make the evidence easier to interpret and test.",
        ],
      },
      {
        heading: "Integration has to earn its place",
        paragraphs: [
          "Adding more inputs does not automatically improve a model. Researchers need to show that each signal contributes reliable information, works across relevant populations, and can be collected with appropriate consent and safeguards.",
          "That means defining the intended use, validating against suitable clinical outcomes, and reporting where the model is uncertain. A useful system should help a clinician ask better questions, not obscure how a result was reached.",
        ],
      },
      {
        heading: "From signals to useful evidence",
        paragraphs: [
          "SIPL’s research direction connects clinical assessment, behavioural signals, neuroscience, and genomics. The work is designed to build evidence that can be evaluated in real settings before any result is used to support care.",
        ],
      },
    ],
  },
  {
    slug: "where-genomics-fits-in-precision-psychiatry",
    category: "Genomics",
    title: "Where genomics fits in precision psychiatry",
    summary:
      "Genomic data can add biological context to research, while careful interpretation keeps it in proportion.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Context, not a shortcut",
        paragraphs: [
          "Genetic variation can inform questions about biology and population-level patterns. It does not, by itself, explain an individual’s mental health or determine what care they need.",
          "For complex conditions, genomic findings must be interpreted alongside clinical history, environment, behaviour, and other relevant evidence. The goal is to understand relationships that can be tested, not to reduce a person to a sequence.",
        ],
      },
      {
        heading: "Population representation matters",
        paragraphs: [
          "A model or finding developed from a narrow set of populations may not transfer reliably to others. Research therefore needs representative cohorts, transparent limits, and validation in the populations where a tool may eventually be used.",
          "This is especially important in genomics, where differences in ancestry representation can affect how well an association applies beyond the original study group.",
        ],
      },
      {
        heading: "A responsible translational path",
        paragraphs: [
          "SIPL explores genomics as one strand in a broader BioAI research framework. Any future clinical application would require evidence, appropriate consent, governance, and review by qualified professionals.",
        ],
      },
    ],
  },
  {
    slug: "what-explainable-clinical-ai-should-show",
    category: "Responsible AI",
    title: "What explainable clinical AI should make visible",
    summary:
      "Useful explanations show the evidence, limits, and uncertainty behind a result in language a care team can evaluate.",
    readingTime: "5 min read",
    sections: [
      {
        heading: "An explanation should support a decision",
        paragraphs: [
          "A confidence score alone is rarely enough. Clinicians need to understand what information was considered, what the output is intended to mean, and what it cannot establish.",
          "Explanations should be shaped around the people using the system and the decisions they are responsible for. A technical feature ranking may help a researcher, while a clinician may need a clear summary of relevant observations and uncertainty.",
        ],
      },
      {
        heading: "Show limitations as part of the result",
        paragraphs: [
          "Performance can change across settings, populations, and collection conditions. Reporting those limits is part of making a model understandable. Systems should also identify missing or poor-quality inputs instead of presenting false precision.",
        ],
      },
      {
        heading: "Keep accountability with people",
        paragraphs: [
          "Clinical AI can support structured assessment and research. It should not be presented as a diagnosis or as a substitute for a qualified professional. Accountability requires human oversight, validation, and a clear route to question or correct an output.",
        ],
      },
    ],
  },
];
