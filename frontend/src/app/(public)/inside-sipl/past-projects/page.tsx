import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Past Projects | SIPL",
  description: "Archived SIPL research and applied AI projects: PrAIGMA-CP, Thal-AIM, and Auto-ROP.",
  path: "/inside-sipl/past-projects",
});

const projects = [
  {
    title: "PrAIGMA-CP",
    subtitle: "Samarth",
    statement:
      "A dedicated platform developed under PrAIGMA-CP is aimed at the early prediction of Cerebral palsy in high-risk children.",
    body: [
      "Cerebral palsy (CP) is a group of disorders that affect a person's ability to move and maintain balance and posture. Cerebral Palsy is generally attributed to non-progressive insults to the developing foetal or infant brain.",
      "A dedicated platform developed under PrAIGMA-CP is aimed at the early prediction of Cerebral palsy in high-risk children. Around 9% of Indian children are diagnosed with a neurodevelopmental disorder before the age of six years; this translates into nearly 15-20% of physically disabled children being affected by CP. Cerebral Palsy (CP) is defined as a group of permanent disorders of the development of movement and posture, that cause activity limitation and diverse disability.",
      "The AI system would help clinicians and parents to monitor the high-risk new-born to detect very early signs of CP with an accuracy of 95-97 per cent, the scope of early intervention and reducing the disability up to 80 per cent when making the child more independent in future and reducing disability burden. The platform is about empowering parents, neonatal units, and clinicians for the early detection of CP.",
    ],
  },
  {
    title: "Thal-AIM",
    statement: "Thal-AIM is AI prediction for early signs of mortality in thalassemia major patients.",
    body: [
      "At the inception stage, the twin goals of the Thal-AIM project are to develop an assessment tool to rule out Thalassemia Major incidence in young kids at an early stage and to develop a module to evaluate and track the risk of mortality for adult patients under other clinical management via AI-based system implementation in cloud-based SAS. The product is intended for use in diagnostic clinics, by patients, and in hospitals.",
      "Every year, approximately 10 000-15 000 babies are born with Thalassemia Major (TM). Early bone marrow transplantation (BMT) is the most appropriate treatment. Another important aspect of management is regular blood transfusion, which is expensive and carries a mortality risk due to iron deposits in organs and associated complications. The product is intended for use in diagnostic clinics, by patients, and in hospitals.",
      "It also connects the dots to enable a seamless care service in India to meet the patient's needs and can be integrated with the GOI's RBSK programme.",
    ],
  },
  {
    title: "Auto-ROP",
    statement: "Automatic detection of ROP Deep learning.",
    body: [
      "Retinopathy of prematurity (ROP) is an eye disease that can occur in premature (early) babies weighing less than 3 pounds at birth.",
      "ROP occurs when abnormal blood vessels develop in the retina (the light-sensitive layer of tissue in the back of your eye). Retinopathy of prematurity (ROP) is the leading cause of childhood blindness worldwide. Some babies with ROP have mild cases that improve without treatment. Some babies, however, require treatment to protect their vision and prevent blindness.",
      "ROP is divided into five stages. These stages are used by doctors to determine the severity of ROP. The stages range from mild (stage 1) to severe (stage 5). (severe)",
      "The outcome of treatment is largely dependent on early detection and intervention, including surgery.",
      "Automated image analysis and deep learning (DL) systems for ROP have the potential to improve ROP care by (1) increasing the efficiency, accuracy, and objectivity of diagnosis and (2) facilitating quantitative disease monitoring and risk prediction.8 AI, machine learning, and DL tools have the potential to improve ROP diagnosis and management.",
    ],
  },
];

export default function PastProjectsPage() {
  return (
    <PublicLayout>
      <main className="bg-[#F7FAF9] text-[#0F2C45]">
        <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 xl:px-20">
          <div className="grid w-full gap-12 border-t border-[#0F2C45]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/60">
                Past Projects
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#0F2C45] md:text-7xl">
                Past work that shaped SIPL’s clinical AI foundation.
              </h1>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#0F2C45]/72 md:text-xl">
              SIPL’s archived projects reflect the company’s long-term commitment to applying AI, data science, and clinical intelligence to serious healthcare problems.
            </p>
          </div>
        </section>

        <section className="pb-28">
          <Container>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="grid gap-8 rounded-[30px] border border-[#0F2C45]/10 bg-[#FFFFFF] p-7 shadow-[0_18px_54px_rgba(0,27,101,0.07)] md:p-10 lg:grid-cols-[0.36fr_0.64fr]"
                >
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F2C45]/58">
                      Archive 0{index + 1}
                    </p>
                    <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#0F2C45] md:text-4xl">
                      {project.title}
                    </h2>
                    {project.subtitle && (
                      <p className="mt-3 font-heading text-lg font-semibold text-[#0F2C45]/66">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="mt-7 border-l border-[#C49327] pl-5 text-lg leading-8 text-[#0F2C45]/78">
                      {project.statement}
                    </p>
                  </div>

                  <div className="grid gap-5">
                    {project.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#0F2C45]/72">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </PublicLayout>
  );
}
