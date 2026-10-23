"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

const inputClass = "mt-2 w-full border border-[#D8E5E2] bg-white px-4 py-3 text-sm text-[#0F2C45] outline-none transition placeholder:text-[#6F8190]/70 focus:border-[#087D78] focus:ring-2 focus:ring-[#087D78]/15";
const investorTypes = ["Angel investor", "Venture capital fund", "Family office", "Corporate / strategic investor", "Institutional investor", "Other"];
const stages = ["Pre-seed", "Seed", "Series A", "Growth / strategic"];
const areas = ["Clinical AI", "Brain and mental health", "Genomics / biopharma", "LifeBack®"];
const timelines = ["Immediately", "Within 3 months", "3–6 months", "6–12 months", "Exploring"];

type SubmitState = "idle" | "sending" | "sent" | "error";

export function InvestorEnquiryForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const requiredGroups = [
      { name: "stages", label: "Select at least one investment stage." },
      { name: "areas", label: "Select at least one area of interest." },
    ];
    const missingGroup = requiredGroups.find(({ name }) => data.getAll(name).length === 0);
    if (missingGroup) {
      setError(missingGroup.label);
      setState("error");
      form.querySelector<HTMLInputElement>(`input[name="${missingGroup.name}"]`)?.focus();
      return;
    }
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const message = [
      "Investor enquiry",
      `Organisation: ${organisation}`,
      `Role: ${String(data.get("role") ?? "").trim() || "Not provided"}`,
      `Investor type: ${String(data.get("investorType") ?? "")}`,
      `Investment stages: ${data.getAll("stages").map(String).join(", ")}`,
      `Areas of interest: ${data.getAll("areas").map(String).join(", ")}`,
      `Typical investment range: ${String(data.get("ticket") ?? "")}`,
      `Focus sectors: ${String(data.get("sectors") ?? "").trim()}`,
      `Portfolio: ${String(data.get("portfolio") ?? "").trim() || "Not provided"}`,
      `Investment timeline: ${String(data.get("timeline") ?? "")}`,
      `Referral source: ${String(data.get("source") ?? "").trim() || "Not provided"}`,
      "",
      "Why SIPL:",
      String(data.get("reason") ?? "").trim(),
    ].join("\n");

      setState("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: String(data.get("website") ?? "") }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "We could not send your enquiry. Please try again.");
      form.reset();
      setState("sent");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your enquiry. Please try again shortly.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7" aria-busy={state === "sending"}>
      <label className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        Website<input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name"><input className={inputClass} name="name" autoComplete="name" maxLength={100} required /></Field>
        <Field label="Work email"><input className={inputClass} name="email" type="email" autoComplete="email" maxLength={254} required /></Field>
        <Field label="Organisation or fund"><input className={inputClass} name="organisation" autoComplete="organization" maxLength={150} required /></Field>
        <Field label="Role"><input className={inputClass} name="role" maxLength={120} /></Field>
        <Field label="Investor type"><select className={inputClass} name="investorType" required defaultValue=""><option value="" disabled>Select one</option>{investorTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
        <Field label="Typical investment range"><select className={inputClass} name="ticket" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $100K</option><option>$100K–$500K</option><option>$500K–$2M</option><option>$2M–$5M</option><option>$5M+</option></select></Field>
        <Field label="Investment timeline"><select className={inputClass} name="timeline" required defaultValue=""><option value="" disabled>Select one</option>{timelines.map((item) => <option key={item}>{item}</option>)}</select></Field>
        <Field label="How did you hear about SIPL?"><input className={inputClass} name="source" maxLength={150} /></Field>
      </div>

      <ChoiceGroup name="stages" title="Investment stage" options={stages} />
      <ChoiceGroup name="areas" title="Areas of interest" options={areas} />

      <Field label="Focus sectors"><input className={inputClass} name="sectors" maxLength={200} required placeholder="For example: clinical AI, genomics, biopharma" /></Field>
      <Field label="Relevant portfolio companies (optional)"><input className={inputClass} name="portfolio" maxLength={300} /></Field>
      <Field label="Why does SIPL interest you?"><textarea className={`${inputClass} min-h-32 resize-y`} name="reason" minLength={10} maxLength={1500} required /></Field>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#3C5162]">
        <input className="mt-1 accent-[#087D78]" name="consent" type="checkbox" required />
        <span>I agree that SIPL may use these details to respond to this enquiry. Please do not include personal medical information.</span>
      </label>

      <div>
        <button type="submit" disabled={state === "sending"} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0F2C45] px-6 text-sm font-semibold text-white transition hover:bg-[#087D78] disabled:cursor-wait disabled:opacity-70">
          {state === "sending" ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending</> : <>Send investor enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
        </button>
      </div>
      <p aria-live="polite" role="status" className="min-h-6 text-sm">
        {state === "sent" && <span className="font-semibold text-[#087D78]">Thank you. Your investor enquiry has been sent to the SIPL team.</span>}
        {state === "error" && <span className="font-semibold text-red-700">{error}</span>}
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-[#0F2C45]">{label}{children}</label>;
}

function ChoiceGroup({ name, title, options }: { name: string; title: string; options: string[] }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-[#0F2C45]">{title}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 border border-[#D8E5E2] bg-white px-4 py-3 text-sm text-[#3C5162]">
            <input type="checkbox" name={name} value={option} className="accent-[#087D78]" />{option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
