"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, UserRound, X } from "lucide-react";
import { teamMembers, type TeamMember } from "./teamData";

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function TeamGrid() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeDialog = () => setActiveMember(null);

  useEffect(() => {
    if (!activeMember) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [activeMember]);

  const openDialog = (member: TeamMember, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveMember(member);
  };

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.id}
            className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-[#DCE4EA] bg-white shadow-[0_14px_36px_rgba(16,36,59,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,36,59,0.12)]"
          >
            {member.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECEFED]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full items-center justify-center bg-[#ECEFED] text-[#147C79]"
              >
                <UserRound className="h-16 w-16" strokeWidth={1.2} />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[#001B65]">
                {member.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#001B65]/62">
                {member.position}
              </p>

              <p className="mt-4 line-clamp-4 flex-1 text-[15px] leading-7 text-[#001B65]/72">
                {member.shortBio}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-[#147C79] underline decoration-[#8ED5C6] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147C79] focus-visible:ring-offset-4"
                aria-haspopup="dialog"
                aria-expanded={activeMember?.id === member.id}
                onClick={(event) => openDialog(member, event.currentTarget)}
              >
                Read full bio
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeMember && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#001B65]/55 p-0 backdrop-blur-[3px] sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDialog();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${activeMember.id}-dialog-title`}
            aria-describedby={`${activeMember.id}-dialog-position`}
            className="relative max-h-[100dvh] w-full overflow-y-auto bg-[#F9F8F3] px-5 pb-10 pt-20 text-[#001B65] shadow-[0_28px_90px_rgba(0,27,101,0.28)] sm:max-h-[88dvh] sm:max-w-3xl sm:border sm:border-[#001B65]/12 sm:p-12"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeDialog}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-[#001B65]/18 bg-[#F5F8FC] text-[#001B65] transition-colors hover:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F3] sm:right-7 sm:top-7"
              aria-label={`Close ${activeMember.name} biography`}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
              Team biography
            </p>
            <h2
              id={`${activeMember.id}-dialog-title`}
              className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl"
            >
              {activeMember.name}
            </h2>
            <p
              id={`${activeMember.id}-dialog-position`}
              className="mt-3 font-heading text-base font-semibold text-[#001B65]/68"
            >
              {activeMember.position}
            </p>

            <div className="mt-8 space-y-5 border-t border-[#001B65]/12 pt-8">
              {activeMember.fullBio.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-7 text-[#001B65]/78 sm:text-base sm:leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
