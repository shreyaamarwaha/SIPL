export type TeamMember = {
  id: string;
  name: string;
  position: string;
  shortBio: string;
  fullBio: string[];
  initials: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "harsh-bhasin",
    name: "Dr. Harsh Bhasin",
    position: "Co-PI (ML Engineer)",
    shortBio:
      "Researcher and academic specializing in deep learning, algorithms, medical imaging, and computational mental health.",
    initials: "HB",
    fullBio: [
      "Dr. Harsh Bhasin is a researcher and academic specializing in deep learning, algorithms, and medical imaging, with over a decade of experience in computational mental health. He is currently associated with Bennett University, India, and previously served as a deep learning consultant and faculty member at institutions including Jamia Hamdard and Delhi Technological University.",
      "He earned his Ph.D. from Jawaharlal Nehru University, New Delhi, under the prestigious Visvesvaraya Fellowship of the Ministry of Electronics and Information Technology, Government of India. His doctoral work focused on machine learning-based diagnosis and conversion prediction of Mild Cognitive Impairment. He has also contributed to a government-funded collaborative project on depression diagnosis involving SIPL and Ram Manohar Lohia Hospital, advancing data-driven neuropsychiatric assessment.",
      "Dr. Bhasin has authored books published by Oxford University Press and Apress, and his research has appeared in leading international journals and conferences, including Alzheimer’s & Dementia, Soft Computing, and BMC Medical Informatics and Decision Making. His current research focuses on EEG-based diagnostics, cognitive impairment conversion prediction, and translational machine learning for depression diagnosis.",
    ],
  },
  {
    id: "tejwant-singh",
    name: "Tejwant Singh",
    position: "Junior Data Scientist",
    shortBio:
      "Researcher and data scientist working across machine learning, affective computing, multimodal learning, and computational psychiatry.",
    initials: "TS",
    fullBio: [
      "Tejwant Singh is a researcher and data scientist specializing in machine learning, affective computing, and computational psychiatry. He is currently associated with Sequoia Insilico Pvt. Ltd., New Delhi, where he contributes to data-driven neuropsychiatric assessment. He completed his B.Tech. in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning from Manav Rachna University in 2025.",
      "His research spans a broad frontier at the intersection of multimodal learning and psychiatric diagnostics, encompassing EEG-based disorder modelling, audio-acoustic and linguistic feature fusion, cross-modal representation learning, and genomic transferability across psychiatric conditions. A central theme of his work is the construction of modality-bridged latent spaces—shared representations learned across heterogeneous clinical signals—enabling robust diagnosis and transfer across disorders such as Major Depressive Disorder and PTSD.",
      "His broader research vision centres on building theoretically grounded, clinically deployable frameworks for psychiatric screening, bridging the gap between representation-learning methodology and real-world affective-computing applications.",
    ],
  },
  {
    id: "ankit-singh",
    name: "Ankit Singh",
    position: "Administration",
    shortBio:
      "Computer science student and AI researcher with experience in medical informatics, full-stack development, and responsible AI.",
    initials: "AS",
    fullBio: [
      "Ankit Singh is a final-year B.Tech. student in Computer Science and Engineering at Echelon Institute of Technology, Haryana, with over eight months of research experience in medical informatics and AI. His interests include machine learning, deep learning, model interpretability, scalable oversight, responsible AI deployment, and full-stack development.",
      "He previously served as a Data Scientist and ML Research Intern at Sequoia Insilico Pvt. Ltd., where he worked under Dr. Harsh Bhasin on medical informatics and neurodegenerative-disease analytics. There, he built an end-to-end tuberculosis detection pipeline from chest X-rays achieving 92% recall and developed Alzheimer’s progression models reaching approximately 85% AUC using PCA-based feature reduction and ensemble methods. He also contributed code, model implementations, and notebooks to four nationally published AI and computer-science textbooks from Atlantic Publishers, Apress, BPB, and New Age International.",
      "He currently works as a Full Stack Developer at the All India Council for Technical Education, where he is building the Project Implementation Portal, a governance platform managing the Smart India Hackathon project lifecycle across ministries, universities, and student teams. His contributions include a Super Admin dashboard, role-based access control across eight governance roles, and real-time national monitoring analytics.",
      "In addition to his technical work, he authored a paper on NLP-based mental-health diagnosis using sentence embeddings, accepted at SmartCom 2026. His broader research interests include diagnostic imaging, biomedical time-series analysis, and AI safety, with a particular focus on applying empirical machine-learning research toward responsible, real-world healthcare impact.",
    ],
  },
  {
    id: "saurabh-singh",
    name: "Saurabh Singh",
    position: "Frontend Developer Intern",
    shortBio:
      "Full-stack developer and AWS Certified Solutions Architect contributing to SIPL’s user-facing healthcare applications.",
    initials: "SS",
    fullBio: [
      "Saurabh Singh is an undergraduate student pursuing a B.Tech. in Computer Science and Engineering at Bennett University, India. He is an AWS Certified Solutions Architect – Associate and a full-stack developer with interests in software engineering, artificial intelligence, cloud computing, and digital healthcare technologies.",
      "He currently serves as a Frontend Developer Intern at Sequoia Insilico Pvt. Ltd., where he contributes to LifeBack, an AI-powered mental-health platform for depression assessment and monitoring. His work focuses on building scalable, user-centric web applications and supporting the translation of research into practical healthcare solutions.",
      "In addition to software development, he is involved in computational mental-health research and is co-authoring a Systematic Literature Review on video-based depression detection and monitoring using computer vision, deep learning, multimodal learning, and foundation models.",
      "Beyond his technical contributions, he serves as President of Dean Career Cloud at Bennett University, previously served as Head of Technology for the GeeksforGeeks Student Chapter at Bennett University, and mentors contributors in the AI Agents Track of GirlScript Summer of Code 2026. His broader interests include AI for healthcare, scalable software systems, and the development of technology-driven solutions with meaningful real-world impact.",
    ],
  },
  {
    id: "aryan-jha",
    name: "Aryan Jha",
    position: "Frontend Developer Intern",
    shortBio:
      "Computer science student, frontend developer, and researcher interested in dependable AI and thoughtful, human-centred software systems.",
    initials: "AJ",
    fullBio: [
      "Aryan Jha is an undergraduate student pursuing a B.Tech. in Computer Science and Engineering with a specialization in Artificial Intelligence at Manipal Institute of Technology, Bengaluru. His interests lie in building thoughtful software systems, exploring responsible applications of artificial intelligence, and understanding how technology can support better decision-making in complex, high-stakes environments.",
      "He currently serves as a Frontend Developer Intern at Sequoia Insilico Pvt. Ltd., where he contributes to developing user-focused interfaces guided by principles of human-centric design. He is steadily building his foundation as a full-stack developer, with experience across frontend development, application design, backend integration, and database-driven systems.",
      "Aryan has worked with technologies such as Flutter, React, FastAPI, Supabase, PostgreSQL, and Python, and is continuously expanding his technical skill set through hands-on projects and research-driven learning. He is particularly interested in the application of intelligent systems in areas such as AI reliability, decision-support pipelines, content authenticity, and remote sensing. He believes that meaningful engineering begins not with knowing everything, but with the willingness to learn quickly, build carefully, and improve consistently.",
      "In addition to software development, Aryan is actively involved in academic research. His paper, “Epistemic Failure Modes of Large Language Models in Autonomous Decision-Making Under Uncertainty,” has been accepted at an IEEE conference. He also has two research papers currently under review, focusing on Hyperspectral Image Change Detection and the Generalization of AI Content Detection. These works reflect his broader interest in understanding how intelligent systems behave under uncertainty, how they generalize beyond controlled conditions, and how they can be made more reliable in real-world contexts.",
      "Beyond his technical and research pursuits, Aryan has served as a Graphic Designer for the IEEE SMC Student Chapter, where he contributed to visual communication and student-led technical initiatives. His journey continues to be shaped by curiosity, collaboration, and a belief that good technology is built at the intersection of clarity, discipline, and purpose.",
    ],
  },
  {
    id: "rakshita-makkar",
    name: "Rakshita Makkar",
    position: "Backend Developer Intern",
    shortBio:
      "Computer Science graduate interested in machine learning, healthcare informatics, predictive analytics, and full-stack AI applications.",
    initials: "RM",
    fullBio: [
      "Rakshita Makkar is a Computer Science and Engineering graduate with a strong interest in machine learning, artificial intelligence, deep learning, and healthcare informatics. She is passionate about building intelligent, data-driven solutions for real-world challenges, particularly in healthcare, environmental monitoring, and education.",
      "She completed a Research Internship at the Centre for Health Innovations, Manav Rachna International Institute of Research and Studies, where she worked on developing a speech-based Parkinson’s disease detection system using acoustic-feature analysis and ensemble machine-learning techniques. Her research focuses on improving the early detection of Parkinson’s disease through accurate, explainable, and reliable AI models, and her work has been published in IEEE conference proceedings.",
      "Her technical skills include Python, Java, machine learning, deep learning, natural language processing, and full-stack AI application development. She has developed several projects, including an AI-powered study companion, an Air Quality Index prediction system, and secure data-management platforms.",
      "Her current research interests include artificial intelligence for healthcare, predictive analytics, intelligent decision-support systems, and the development of practical AI solutions that address real-world problems.",
    ],
  },
  {
    id: "shreya-marwaha",
    name: "Shreya Marwaha",
    position: "Backend Developer Intern",
    shortBio:
      "Backend developer experienced in enterprise APIs, scalable services, AI-powered integrations, and cloud-based applications.",
    initials: "SM",
    fullBio: [
      "Shreya Marwaha is an undergraduate student pursuing a B.Tech. in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Manav Rachna University, India. She is a backend developer with experience in Java, Spring Boot, REST APIs, PostgreSQL, and system integration, with interests spanning software engineering, enterprise technologies, artificial intelligence, and cloud-based applications.",
      "She currently works as an IT Executive – Digital & Innovation CoE at PNB MetLife, where she contributes to enterprise digital-transformation initiatives by developing and enhancing scalable backend services, integrating AI-powered solutions, and building APIs for internal business applications. Her work includes implementing secure, production-grade features, optimizing system performance, and collaborating across cross-functional teams to deliver business-critical solutions.",
      "Beyond her professional experience, she has developed projects involving AI-assisted automation, intelligent workflow systems, and full-stack web applications. She is particularly interested in enterprise software, AI-driven automation, and building technology that solves real-world business problems at scale.",
      "Alongside her technical pursuits, she is also a content creator, sharing food, lifestyle, and travel experiences through her social-media platform while continuously exploring the intersection of technology, creativity, and user experience.",
    ],
  },
  {
    id: "vishal-deshwal",
    name: "Vishal Deshwal",
    position: "MLOps",
    shortBio:
      "Machine-learning researcher and senior data scientist experienced in production AI, MLOps, predictive modelling, and large-scale data systems.",
    initials: "VD",
    fullBio: [
      "Vishal Deshwal is a machine-learning researcher and Senior Data Scientist with strong experience in AI, deep learning, MLOps, predictive modelling, generative AI, and large-scale data systems. He has completed a Ph.D. in Machine Learning, with research focused on deep learning, neural architectures, activation functions, and practical machine-learning systems.",
      "He currently works as a Senior Data Scientist at Western Sydney University, where he has led and contributed to several production-level AI and machine-learning initiatives. His work includes developing a large-scale wildfire-prediction system that processed over 17 billion pixels, an AI-based email-triage system handling around 50,000 emails per quarter in production, and a student job-matching solution serving around 10,000 students every month.",
      "Vishal has experience taking machine-learning projects from research and experimentation through deployment, monitoring, and production-ready MLOps workflows. His technical experience includes Python, SQL, PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, Azure OpenAI, Microsoft Fabric, Snowflake, Docker, MLflow, CI/CD pipelines, and Power BI.",
      "His work combines strong research depth with practical engineering, with a focus on building reliable, scalable, and explainable AI systems. He has also contributed to academic research, AI publications, and textbook authorship in artificial intelligence, with broader interests in deep learning, generative-AI applications, machine-learning operations, and translating advanced AI research into real-world systems.",
    ],
  },
];
