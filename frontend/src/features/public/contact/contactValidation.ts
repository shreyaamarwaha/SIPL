export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  messageMin: 10,
  messageMax: 5000,
} as const;

export type ContactFields = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export type ContactFieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const emailPattern = /^[^\s@<>(),;:"\\[\]\r\n]+@[^\s@<>(),;:"\\[\]\r\n]+\.[^\s@<>(),;:"\\[\]\r\n]+$/;

export function validateContactFields(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (name.length > CONTACT_LIMITS.name) {
    errors.name = `Name must be ${CONTACT_LIMITS.name} characters or fewer.`;
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (email.length > CONTACT_LIMITS.email || !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!message) {
    errors.message = "Enter a message.";
  } else if (message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Message must be at least ${CONTACT_LIMITS.messageMin} characters.`;
  } else if (message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Message must be ${CONTACT_LIMITS.messageMax} characters or fewer.`;
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}
