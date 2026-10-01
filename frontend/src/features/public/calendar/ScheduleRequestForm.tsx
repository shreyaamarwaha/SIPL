"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/shared/ui/Button";

type FormState = "idle" | "sending" | "success" | "error";

export function ScheduleRequestForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || state === "sending") return;

    const values = new FormData(form);
    const topic = String(values.get("topic") || "General introduction");
    const message = [
      "SIPL meeting request",
      `Organization: ${String(values.get("organization") || "Not provided")}`,
      `Topic: ${topic}`,
      `Preferred date: ${String(values.get("date"))}`,
      `Preferred time: ${String(values.get("time"))}`,
      `Time zone: ${String(values.get("timezone"))}`,
      `Additional context: ${String(values.get("notes") || "Not provided")}`,
    ].join("\n");

    setState("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(values.get("name") || "").trim(),
          email: String(values.get("email") || "").trim(),
          message,
          website: String(values.get("website") || ""),
        }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your request.");
      form.reset();
      setState("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "We could not send your request. Please try again.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-busy={state === "sending"}>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="schedule-website">Website</label>
        <input id="schedule-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="schedule-name" name="name" label="Your name" autoComplete="name" required />
        <Field id="schedule-email" name="email" label="Work email" type="email" autoComplete="email" required />
        <Field id="schedule-organization" name="organization" label="Organization" autoComplete="organization" />
        <div>
          <label htmlFor="schedule-topic" className={labelClass}>Conversation about</label>
          <select id="schedule-topic" name="topic" className={fieldClass} defaultValue="">
            <option value="">Choose a topic</option>
            <option>Research collaboration</option>
            <option>Clinical partnership</option>
            <option>Biopharma discovery</option>
            <option>Investor introduction</option>
            <option>General introduction</option>
          </select>
        </div>
        <Field id="schedule-date" name="date" label="Preferred date" type="date" required />
        <Field id="schedule-time" name="time" label="Preferred time" type="time" required />
        <div>
          <label htmlFor="schedule-timezone" className={labelClass}>Time zone</label>
          <select id="schedule-timezone" name="timezone" className={fieldClass} defaultValue="Asia/Kolkata">
            <option value="Asia/Kolkata">India Standard Time (IST)</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">US Eastern Time</option>
            <option value="Europe/London">UK time</option>
            <option value="Other">Other (please mention in notes)</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="schedule-notes" className={labelClass}>Anything we should prepare?</label>
          <textarea id="schedule-notes" name="notes" rows={4} maxLength={2000} className={fieldClass} placeholder="A sentence or two about your goals for the conversation." />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={state === "sending"} className="min-w-56 gap-3">
          {state === "sending" ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending request</> : <>Request a time <ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
        </Button>
        <p className="max-w-sm text-xs leading-5 text-[#001B65]/56">
          This sends a meeting request. SIPL will confirm availability by email; a time is not booked until confirmed.
        </p>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {state === "success" && <p className="border-l-2 border-[#147C79] pl-4 text-sm font-semibold leading-6 text-[#001B65]">Request received. The SIPL team will confirm a time by email.</p>}
        {state === "error" && <p role="alert" className="border-l-2 border-[#A63838] pl-4 text-sm font-semibold leading-6 text-[#7C2020]">{errorMessage || "We could not send your request. Please try again shortly."}</p>}
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <input id={id} name={name} type={type} autoComplete={autoComplete} required={required} className={fieldClass} />
    </div>
  );
}

const labelClass = "font-heading text-sm font-semibold text-[#001B65]";
const fieldClass = "mt-2 min-h-13 w-full border border-[#001B65]/22 bg-transparent px-4 py-3 text-sm text-[#001B65] outline-none transition-colors placeholder:text-[#001B65]/40 hover:border-[#001B65]/40 focus:border-[#147C79] focus:ring-2 focus:ring-[#147C79]/20";
