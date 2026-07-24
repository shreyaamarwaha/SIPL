import "server-only";

import { NextResponse } from "next/server";
import {
  CAREER_LIMITS,
  hasCareerErrors,
  validateCareerFields,
  validateResume,
  type CareerFields,
} from "@/features/public/careers/careerValidation";
import { escapeEmailHtml, sendWebsiteEmail } from "@/shared/lib/server/websiteMail";

export const runtime = "nodejs";

const MAX_MULTIPART_BYTES = CAREER_LIMITS.resumeBytes + 100_000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 3;
const MIN_SUBMISSION_INTERVAL_MS = 5_000;
const expectedFields = new Set([
  "firstName",
  "lastName",
  "email",
  "phone",
  "careerPath",
  "message",
  "website",
  "resume",
]);

type RateEntry = {
  count: number;
  windowStartedAt: number;
  lastSubmittedAt: number;
};

const rateStore = new Map<string, RateEntry>();

function jsonResponse(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = rateStore.get(clientKey);

  if (!current || now - current.windowStartedAt >= RATE_WINDOW_MS) {
    rateStore.set(clientKey, { count: 1, windowStartedAt: now, lastSubmittedAt: now });
    return false;
  }

  if (
    now - current.lastSubmittedAt < MIN_SUBMISSION_INTERVAL_MS ||
    current.count >= RATE_MAX_REQUESTS
  ) {
    return true;
  }

  current.count += 1;
  current.lastSubmittedAt = now;
  return false;
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : null;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("multipart/form-data")) {
    return jsonResponse("Invalid request.", 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_MULTIPART_BYTES) {
    return jsonResponse("The uploaded PDF must be 5 MB or smaller.", 413);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse("Invalid request.", 400);
  }

  const keys = Array.from(formData.keys());
  if (
    keys.some((key) => !expectedFields.has(key)) ||
    Array.from(expectedFields).some((key) => formData.getAll(key).length > 1)
  ) {
    return jsonResponse("Invalid request.", 400);
  }

  const fields: CareerFields = {
    firstName: getString(formData, "firstName") ?? "",
    lastName: getString(formData, "lastName") ?? "",
    email: getString(formData, "email") ?? "",
    phone: getString(formData, "phone") ?? "",
    careerPath: getString(formData, "careerPath") ?? "",
    message: getString(formData, "message") ?? "",
    website: getString(formData, "website") ?? "",
  };

  if (fields.website) {
    return jsonResponse("Thank you. Your application has been received.", 200);
  }

  const resumeValue = formData.get("resume");
  const resume = resumeValue instanceof File ? resumeValue : null;
  const errors = validateCareerFields(fields);
  const resumeError = validateResume(resume);
  if (resumeError) {
    errors.resume = resumeError;
  }

  if (hasCareerErrors(errors)) {
    return NextResponse.json(
      { message: "Please review the submitted fields.", errors },
      { status: 422 }
    );
  }

  if (!resume) {
    return jsonResponse("Invalid request.", 400);
  }

  if (/[\r\n]/.test(fields.firstName) || /[\r\n]/.test(fields.lastName) || /[\r\n]/.test(fields.email)) {
    return jsonResponse("Invalid request.", 400);
  }

  const signature = new Uint8Array(await resume.slice(0, 5).arrayBuffer());
  if (new TextDecoder().decode(signature) !== "%PDF-") {
    return NextResponse.json(
      {
        message: "Please review the submitted fields.",
        errors: { resume: "Please upload your resume or CV as a PDF." },
      },
      { status: 422 }
    );
  }

  if (isRateLimited(getClientKey(request))) {
    return jsonResponse("Please wait before submitting another application.", 429);
  }

  const applicantName = `${fields.firstName} ${fields.lastName}`;
  const submittedAt = new Date().toISOString();
  const subject = `New SIPL Career Application — ${fields.careerPath} — ${applicantName}`;
  const plainText = `A new career application was submitted through the SIPL website.

APPLICANT DETAILS

Name: ${applicantName}
Email: ${fields.email}
Phone: ${fields.phone}
Career Path: ${fields.careerPath}

MESSAGE

${fields.message}

ATTACHMENT

The applicant’s resume or CV is attached as a PDF.

Submitted through: SIPL Career Page
Submitted at: ${submittedAt}`;
  const html = `
    <p>A new career application was submitted through the SIPL website.</p>
    <h2>Applicant details</h2>
    <p><strong>Name:</strong> ${escapeEmailHtml(applicantName)}</p>
    <p><strong>Email:</strong> ${escapeEmailHtml(fields.email)}</p>
    <p><strong>Phone:</strong> ${escapeEmailHtml(fields.phone)}</p>
    <p><strong>Career Path:</strong> ${escapeEmailHtml(fields.careerPath)}</p>
    <h2>Message</h2>
    <p>${escapeEmailHtml(fields.message).replace(/\n/g, "<br>")}</p>
    <h2>Attachment</h2>
    <p>The applicant’s resume or CV is attached as a PDF.</p>
    <p><strong>Submitted through:</strong> SIPL Career Page<br>
    <strong>Submitted at:</strong> ${escapeEmailHtml(submittedAt)}</p>
  `;

  try {
    await sendWebsiteEmail({
      replyTo: fields.email,
      subject,
      text: plainText,
      html,
      attachments: [
        {
          filename: "resume.pdf",
          content: Buffer.from(await resume.arrayBuffer()),
          contentType: "application/pdf",
        },
      ],
    });

    return jsonResponse("Thank you. Your application has been submitted to the SIPL team.", 200);
  } catch {
    return jsonResponse(
      "We could not submit your application. Please review the form and try again.",
      500
    );
  }
}
