import "server-only";

import { NextResponse } from "next/server";
import {
  CONTACT_LIMITS,
  hasContactErrors,
  validateContactFields,
  type ContactFields,
} from "@/features/public/contact/contactValidation";
import { escapeEmailHtml, sendWebsiteEmail } from "@/shared/lib/server/websiteMail";

export const runtime = "nodejs";

const MAX_PAYLOAD_BYTES = 12_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const MIN_SUBMISSION_INTERVAL_MS = 3_000;
const allowedFields = new Set(["name", "email", "message", "website"]);

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

function parseFields(value: unknown): ContactFields | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedFields.has(key))) {
    return null;
  }

  if (
    typeof record.name !== "string" ||
    typeof record.email !== "string" ||
    typeof record.message !== "string" ||
    typeof record.website !== "string"
  ) {
    return null;
  }

  return {
    name: record.name.trim(),
    email: record.email.trim(),
    message: record.message.trim(),
    website: record.website.trim(),
  };
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse("Invalid request.", 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_PAYLOAD_BYTES) {
    return jsonResponse("Request is too large.", 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse("Invalid request.", 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_PAYLOAD_BYTES) {
    return jsonResponse("Request is too large.", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse("Invalid request.", 400);
  }

  const fields = parseFields(payload);
  if (!fields) {
    return jsonResponse("Invalid request.", 400);
  }

  if (fields.website) {
    return jsonResponse("Thank you. Your message has been received.", 200);
  }

  const errors = validateContactFields(fields);
  if (hasContactErrors(errors)) {
    return NextResponse.json({ message: "Please check the submitted fields.", errors }, { status: 422 });
  }

  if (
    fields.name.length > CONTACT_LIMITS.name ||
    fields.email.includes("\r") ||
    fields.email.includes("\n")
  ) {
    return jsonResponse("Invalid request.", 400);
  }

  if (isRateLimited(getClientKey(request))) {
    return jsonResponse("Please wait before sending another message.", 429);
  }

  const providedName = fields.name || "Not provided";
  const plainText = `Name: ${providedName}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`;
  const html = `
    <p><strong>Name:</strong> ${escapeEmailHtml(providedName)}</p>
    <p><strong>Email:</strong> ${escapeEmailHtml(fields.email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeEmailHtml(fields.message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await sendWebsiteEmail({
      replyTo: fields.email,
      subject: "New SIPL website enquiry",
      text: plainText,
      html,
    });

    return jsonResponse("Thank you. Your message has been sent to the SIPL team.", 200);
  } catch {
    return jsonResponse("We could not send your message. Please try again shortly.", 500);
  }
}
