"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, FileText, LoaderCircle, Upload } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  CAREER_LIMITS,
  CAREER_PATHS,
  hasCareerErrors,
  validateCareerFields,
  validateResume,
  type CareerFieldErrors,
  type CareerFields,
} from "./careerValidation";

const initialFields: CareerFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  careerPath: "",
  message: "",
  website: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function CareerApplicationForm() {
  const [fields, setFields] = useState(initialFields);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<CareerFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const lastSubmissionRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof CareerFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    if (field !== "website" && errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const updateResume = (file: File | null) => {
    setResume(file);
    setErrors((current) => {
      const next = { ...current };
      delete next.resume;
      return next;
    });
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting" || Date.now() - lastSubmissionRef.current < 3000) {
      return;
    }

    const nextErrors = validateCareerFields(fields);
    const resumeError = validateResume(resume);
    if (resumeError) {
      nextErrors.resume = resumeError;
    }
    setErrors(nextErrors);

    if (hasCareerErrors(nextErrors)) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      if (firstInvalidField) {
        document.getElementById(`career-${firstInvalidField}`)?.focus();
      }
      return;
    }

    if (!resume) {
      return;
    }

    lastSubmissionRef.current = Date.now();
    setStatus("submitting");

    const formData = new FormData();
    formData.set("firstName", fields.firstName);
    formData.set("lastName", fields.lastName);
    formData.set("email", fields.email);
    formData.set("phone", fields.phone);
    formData.set("careerPath", fields.careerPath);
    formData.set("message", fields.message);
    formData.set("website", fields.website);
    formData.set("resume", resume);

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 422) {
          const result = (await response.json()) as { errors?: CareerFieldErrors };
          if (result.errors) {
            setErrors(result.errors);
          }
        }
        throw new Error("Career application request failed");
      }

      setFields(initialFields);
      setResume(null);
      setErrors({});
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
        <label htmlFor="career-website">Website</label>
        <input
          id="career-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="career-firstName" label="First name" error={errors.firstName}>
          <input
            id="career-firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            maxLength={CAREER_LIMITS.name}
            value={fields.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "career-firstName-error" : undefined}
            className={fieldStyles}
          />
        </Field>

        <Field id="career-lastName" label="Last name" error={errors.lastName}>
          <input
            id="career-lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            maxLength={CAREER_LIMITS.name}
            value={fields.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "career-lastName-error" : undefined}
            className={fieldStyles}
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="career-email" label="Email" error={errors.email}>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            maxLength={CAREER_LIMITS.email}
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "career-email-error" : undefined}
            className={fieldStyles}
          />
        </Field>

        <Field id="career-phone" label="Phone number" error={errors.phone}>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            maxLength={CAREER_LIMITS.phone}
            value={fields.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "career-phone-error" : undefined}
            className={fieldStyles}
          />
        </Field>
      </div>

      <Field id="career-careerPath" label="Career path" error={errors.careerPath}>
        <select
          id="career-careerPath"
          name="careerPath"
          required
          value={fields.careerPath}
          onChange={(event) => updateField("careerPath", event.target.value)}
          aria-invalid={Boolean(errors.careerPath)}
          aria-describedby={errors.careerPath ? "career-careerPath-error" : undefined}
          className={`${fieldStyles} appearance-none bg-[linear-gradient(45deg,transparent_50%,#001B65_50%),linear-gradient(135deg,#001B65_50%,transparent_50%)] bg-[position:calc(100%-20px)_22px,calc(100%-15px)_22px] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-12`}
        >
          <option value="" disabled>
            Select a career path
          </option>
          {CAREER_PATHS.map((path) => (
            <option key={path} value={path}>
              {path}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="career-message"
        label="Message"
        error={errors.message}
        description="Tell us briefly about your interests, experience, and the type of opportunity you are seeking."
      >
        <textarea
          id="career-message"
          name="message"
          required
          rows={7}
          minLength={CAREER_LIMITS.messageMin}
          maxLength={CAREER_LIMITS.messageMax}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message
              ? "career-message-description career-message-error"
              : "career-message-description career-message-count"
          }
          className={`${fieldStyles} min-h-44 resize-y py-4`}
        />
        <p id="career-message-count" className="mt-2 text-right text-xs text-[#001B65]/54">
          {fields.message.length} / {CAREER_LIMITS.messageMax}
        </p>
      </Field>

      <div>
        <label htmlFor="career-resume" className="font-heading text-sm font-semibold text-[#001B65]">
          Resume / CV — PDF only, maximum 5 MB
        </label>
        <label
          htmlFor="career-resume"
          className="mt-2 flex min-h-28 cursor-pointer items-center gap-4 border border-dashed border-[#001B65]/30 bg-[#F5F8FC]/55 px-5 py-5 text-[#001B65] transition-colors hover:border-[#D4AF37] focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/28"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#001B65]/14 bg-[#F9F8F3]">
            {resume ? (
              <FileText aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Upload aria-hidden="true" className="h-5 w-5" />
            )}
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-sm font-semibold">
              {resume ? resume.name : "Choose a PDF file"}
            </span>
            <span className="mt-1 block text-xs text-[#001B65]/60">
              {resume ? `${(resume.size / 1024 / 1024).toFixed(2)} MB` : "PDF, up to 5 MB"}
            </span>
          </span>
          <input
            ref={fileInputRef}
            id="career-resume"
            name="resume"
            type="file"
            required
            accept="application/pdf,.pdf"
            onChange={(event) => updateResume(event.target.files?.[0] ?? null)}
            aria-invalid={Boolean(errors.resume)}
            aria-describedby={errors.resume ? "career-resume-error" : undefined}
            className="sr-only"
          />
        </label>
        {errors.resume && (
          <p id="career-resume-error" className="mt-2 text-sm font-medium text-[#7C2020]">
            {errors.resume}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full gap-3 uppercase tracking-[0.1em]"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin motion-reduce:animate-none" />
            Submitting…
          </>
        ) : (
          <>
            Submit application
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </>
        )}
      </Button>

      <div className="min-h-7" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="border-l-2 border-[#D4AF37] pl-4 text-sm font-semibold leading-6 text-[#001B65]">
            Thank you. Your application has been submitted to the SIPL team.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="border-l-2 border-[#A63838] pl-4 text-sm font-semibold leading-6 text-[#7C2020]">
            We could not submit your application. Please review the form and try again.
          </p>
        )}
      </div>
    </form>
  );
}

const fieldStyles =
  "mt-2 min-h-13 w-full border border-[#001B65]/22 bg-transparent px-4 text-base text-[#001B65] outline-none transition-colors hover:border-[#001B65]/40 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/28 aria-[invalid=true]:border-[#A63838] aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-[#A63838]/20";

function Field({
  id,
  label,
  description,
  error,
  children,
}: {
  id: string;
  label: string;
  description?: string | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-heading text-sm font-semibold text-[#001B65]">
        {label}
      </label>
      {description && (
        <p id={`${id}-description`} className="mt-1 text-xs leading-5 text-[#001B65]/60">
          {description}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-[#7C2020]">
          {error}
        </p>
      )}
    </div>
  );
}
