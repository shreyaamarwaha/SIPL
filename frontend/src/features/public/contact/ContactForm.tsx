"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  CONTACT_LIMITS,
  hasContactErrors,
  validateContactFields,
  type ContactFieldErrors,
  type ContactFields,
} from "./contactValidation";

const initialFields: ContactFields = {
  name: "",
  email: "",
  message: "",
  website: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const lastSubmissionRef = useRef(0);

  const updateField = (field: keyof ContactFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    if (field !== "website" && errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting" || Date.now() - lastSubmissionRef.current < 3000) {
      return;
    }

    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);

    if (hasContactErrors(nextErrors)) {
      const firstInvalidField = Object.keys(nextErrors)[0] as keyof ContactFieldErrors | undefined;
      if (firstInvalidField) {
        document.getElementById(`contact-${firstInvalidField}`)?.focus();
      }
      return;
    }

    lastSubmissionRef.current = Date.now();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setFields(initialFields);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-6" aria-busy={isSubmitting}>
      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <Field
        id="contact-name"
        label="Name"
        note="Optional"
        error={errors.name}
      >
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={CONTACT_LIMITS.name}
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldStyles}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={CONTACT_LIMITS.email}
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldStyles}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={7}
          minLength={CONTACT_LIMITS.messageMin}
          maxLength={CONTACT_LIMITS.messageMax}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-count"}
          className={`${fieldStyles} min-h-44 resize-y py-4`}
        />
        <p id="contact-message-count" className="mt-2 text-right text-xs text-[#001B65]/54">
          {fields.message.length} / {CONTACT_LIMITS.messageMax}
        </p>
      </Field>

      <div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="min-w-48 gap-3 uppercase tracking-[0.1em]"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin motion-reduce:animate-none" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>

      <div className="min-h-7" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="border-l-2 border-[#D4AF37] pl-4 text-sm font-semibold leading-6 text-[#001B65]">
            Thank you. Your message has been sent to the SIPL team.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="border-l-2 border-[#A63838] pl-4 text-sm font-semibold leading-6 text-[#7C2020]">
            We could not send your message. Please try again shortly.
          </p>
        )}
      </div>
    </form>
  );
}

const fieldStyles =
  "mt-2 min-h-13 w-full border border-[#001B65]/22 bg-transparent px-4 text-base text-[#001B65] outline-none transition-colors placeholder:text-[#001B65]/40 hover:border-[#001B65]/40 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/28 aria-[invalid=true]:border-[#A63838] aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-[#A63838]/20";

function Field({
  id,
  label,
  note,
  error,
  children,
}: {
  id: string;
  label: string;
  note?: string | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-heading text-sm font-semibold text-[#001B65]">
          {label}
        </label>
        {note && <span className="text-xs text-[#001B65]/54">{note}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-[#7C2020]">
          {error}
        </p>
      )}
    </div>
  );
}
