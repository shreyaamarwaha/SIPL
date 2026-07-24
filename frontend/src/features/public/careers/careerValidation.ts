export const CAREER_PATHS = [
  "Business Development",
  "Data Science",
  "Development",
  "Sales & Marketing",
  "Project Management",
] as const;

export type CareerPath = (typeof CAREER_PATHS)[number];

export const CAREER_LIMITS = {
  name: 80,
  email: 254,
  phone: 30,
  messageMin: 20,
  messageMax: 5000,
  resumeBytes: 5 * 1024 * 1024,
} as const;

export type CareerFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  careerPath: string;
  message: string;
  website: string;
};

export type CareerFieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "phone" | "careerPath" | "message" | "resume", string>
>;

const emailPattern = /^[^\s@<>(),;:"\\[\]\r\n]+@[^\s@<>(),;:"\\[\]\r\n]+\.[^\s@<>(),;:"\\[\]\r\n]+$/;
const phonePattern = /^\+?[0-9\s()-]+$/;

export function validateCareerFields(fields: CareerFields): CareerFieldErrors {
  const errors: CareerFieldErrors = {};
  const firstName = fields.firstName.trim();
  const lastName = fields.lastName.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  const message = fields.message.trim();

  if (!firstName) {
    errors.firstName = "Enter your first name.";
  } else if (firstName.length > CAREER_LIMITS.name) {
    errors.firstName = `First name must be ${CAREER_LIMITS.name} characters or fewer.`;
  }

  if (!lastName) {
    errors.lastName = "Enter your last name.";
  } else if (lastName.length > CAREER_LIMITS.name) {
    errors.lastName = `Last name must be ${CAREER_LIMITS.name} characters or fewer.`;
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (email.length > CAREER_LIMITS.email || !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.phone = "Enter your phone number.";
  } else if (
    phone.length > CAREER_LIMITS.phone ||
    !phonePattern.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phone = "Enter a valid phone number, including the country code where applicable.";
  }

  if (!CAREER_PATHS.some((path) => path === fields.careerPath)) {
    errors.careerPath = "Select a career path.";
  }

  if (!message) {
    errors.message = "Enter a message.";
  } else if (message.length < CAREER_LIMITS.messageMin) {
    errors.message = `Message must be at least ${CAREER_LIMITS.messageMin} characters.`;
  } else if (message.length > CAREER_LIMITS.messageMax) {
    errors.message = `Message must be ${CAREER_LIMITS.messageMax} characters or fewer.`;
  }

  return errors;
}

export function validateResume(file: File | null): string | undefined {
  if (!file) {
    return "Please upload your resume or CV as a PDF.";
  }

  if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
    return "Please upload your resume or CV as a PDF.";
  }

  if (file.size > CAREER_LIMITS.resumeBytes) {
    return "The uploaded PDF must be 5 MB or smaller.";
  }

  if (file.size === 0) {
    return "Please upload your resume or CV as a PDF.";
  }

  return undefined;
}

export function hasCareerErrors(errors: CareerFieldErrors) {
  return Object.keys(errors).length > 0;
}
