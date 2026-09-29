export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Sequoia Insilico",
  "url": "https://sequoiainsilico.com",
  "logo": "https://sequoiainsilico.com/logo.png",
  "description": "AI-assisted behavioral screening platform focused on early depression detection.",
};

export const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Sequoia Insilico - BioAI for brain and mental health",
  "description": "Research-backed AI platform for behavioral screening.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Depression"
  }
};
