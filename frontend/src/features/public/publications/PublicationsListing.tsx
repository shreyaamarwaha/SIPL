"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, FileText, Mic } from "lucide-react";

type PublicationType = "publication" | "review" | "conference" | "event";
type Filter = "all" | PublicationType;

type Publication = {
  type: PublicationType;
  label: string;
  year: string;
  title: string;
  description: string;
  meta: string;
  unavailable?: string;
  linkedin?: boolean;
};

const linkedinUrl = "https://www.linkedin.com/company/sequoia-insilico-private-ltd/";
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "publication", label: "Publication" },
  { id: "review", label: "Science review" },
  { id: "conference", label: "Conference" },
  { id: "event", label: "Event" },
];

const items: Publication[] = [
  {
    type: "publication",
    label: "Publication",
    year: "2026",
    title: "Validating an AI-assisted HAM-D assessment against clinician ratings",
    description: "91% agreement across 500+ assessments with ABVIMS and Dr. RML Hospital, New Delhi.",
    meta: "SIPL clinical validation report",
    unavailable: "Report link coming soon",
  },
  {
    type: "publication",
    label: "Publication",
    year: "2025",
    title: "Indian Patent No. 202511025669",
    description: "A published SIPL invention supporting the company’s work in responsible, explainable brain-health intelligence.",
    meta: "Published patent · WIPO PCT application in process",
    unavailable: "Record link coming soon",
  },
  {
    type: "review",
    label: "Science review",
    year: "2026",
    title: "What voice and facial behaviour can tell us about depression",
    description: "A plain-language review of digital biomarkers and where they help — and fall short — in psychiatric care.",
    meta: "Sequoia Insilico science review",
    unavailable: "Review link coming soon",
    linkedin: true,
  },
  {
    type: "review",
    label: "Science review",
    year: "2026",
    title: "Why multimodal signals matter in mental-health assessment",
    description: "How clinical, behavioural, neuroscience, and genomic signals come together to make assessment more precise and adaptive.",
    meta: "Sequoia Insilico science review",
    unavailable: "Review link coming soon",
  },
  {
    type: "conference",
    label: "Conference",
    year: "2026",
    title: "Connected intelligence for brain and mental healthcare",
    description: "SIPL’s research presentation on bringing clinical care, behavioural signals, neuroscience, genomics, and discovery into one responsible AI infrastructure.",
    meta: "SIPL research presentation",
    unavailable: "Presentation link coming soon",
    linkedin: true,
  },
  {
    type: "event",
    label: "Event",
    year: "Upcoming",
    title: "LifeBack clinical intelligence briefing",
    description: "An upcoming conversation on clinical validation, responsible AI, and the path from evidence to care.",
    meta: "SIPL · New Delhi / online",
    linkedin: true,
  },
];

function ItemIcon({ type }: { type: PublicationType }) {
  const Icon = type === "conference" ? Mic : type === "event" ? CalendarDays : FileText;
  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />;
}

export function PublicationsListing() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleItems = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.type === filter)),
    [filter],
  );

  return (
    <main className="min-h-screen bg-[#EDEDED] pb-24 pt-32 text-[#131313] md:pt-40">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 lg:px-10">
        <Link href="/" className="mb-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#4A5568] transition hover:text-[#131313] md:mb-16">
          <span aria-hidden="true">←</span> Back to SIPL home
        </Link>

        <header className="mb-12 grid gap-6 border-t border-[#131313]/10 pt-10 md:mb-16 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-12 md:pt-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8931C4]">Publications &amp; talks</p>
            <h1 className="max-w-[10ch] text-5xl font-medium leading-[.98] tracking-[-0.055em] md:text-7xl">From the lab to the world.</h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#4A5568] md:pb-1 md:text-lg md:leading-8">Our latest work, one click away. Agree, disagree, or want in? Write to us.</p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter publications and talks">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8931C4] focus-visible:ring-offset-2 ${filter === item.id ? "border-[#131313] bg-[#071D66] text-white" : "border-[#D6D6D6] bg-white text-[#4A5568] hover:border-[#8931C4] hover:text-[#8931C4]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mb-3 text-xs text-[#4A5568]" aria-live="polite">
          Showing {filter === "all" ? "all" : filter === "review" ? "science review" : filter} {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}
        </p>

        <section aria-label="Publications, reviews, conferences and events" className="border-t border-[#D6D6D6]">
          {visibleItems.map((item) => (
            <article key={item.title} className="grid gap-5 border-b border-[#D6D6D6] py-7 md:grid-cols-[150px_minmax(0,1fr)_180px] md:items-center md:gap-8 md:py-9">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl shadow-sm ${item.type === "publication" ? "bg-[#071D66] text-[#F0EBE1]" : item.type === "review" ? "bg-[#071D66] text-[#F0EBE1]" : item.type === "conference" ? "bg-[#8931C4] text-[#F0EBE1]" : "bg-[#071D66] text-[#F0EBE1]"}`}>
                  <ItemIcon type={item.type} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#131313]">{item.label}</span>
                  <span className="mt-1 block text-xs text-[#4A5568]">{item.year}</span>
                </span>
              </div>
              <div>
                <h2 className="max-w-3xl text-xl font-medium leading-tight tracking-[-0.025em] md:text-2xl">{item.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4A5568] md:text-base">{item.description}</p>
                <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4A5568]">{item.meta}</span>
              </div>
              <div className="flex flex-wrap gap-2 md:flex-col md:items-stretch">
                {item.unavailable && <span className="rounded-lg border border-[#D6D6D6] bg-white px-3 py-2.5 text-xs text-[#4A5568]">{item.unavailable}</span>}
                {item.linkedin && <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-2 rounded-lg border border-[#D6D6D6] bg-white px-3 py-2.5 text-xs font-semibold text-[#131313] transition hover:border-[#8931C4] hover:text-[#8931C4]">Discuss with SIPL <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
              </div>
            </article>
          ))}
        </section>
        {visibleItems.length === 0 && <p className="py-12 text-center text-sm text-[#4A5568]">No items in this category yet.</p>}
      </div>
    </main>
  );
}
