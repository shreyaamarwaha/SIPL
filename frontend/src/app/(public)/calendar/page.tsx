import { CalendarDays, Clock3, Video } from "lucide-react";
import { PublicLayout } from "@/layouts/PublicLayout";
import { EditorialHero } from "@/components/layout/EditorialSections";
import { ScheduleRequestForm } from "@/features/public/calendar/ScheduleRequestForm";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Request a Meeting | SIPL",
  description: "Request a conversation with SIPL about research, clinical partnerships, and biopharma discovery.",
  path: "/calendar",
});

const meetingNotes = [
  { icon: Clock3, title: "30 minutes", text: "A focused first conversation." },
  { icon: Video, title: "Online or in person", text: "We’ll confirm the format with you." },
  { icon: CalendarDays, title: "Request, then confirm", text: "Your preferred time is not booked until SIPL confirms it." },
];

export default function CalendarPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC] text-[#001B65]">
        <EditorialHero eyebrow="Talk with SIPL" title="A good collaboration starts with a conversation.">
          <p>
            Tell us what you’re exploring and suggest a time. We’ll review your request and
            confirm a meeting by email.
          </p>
        </EditorialHero>

        <section className="pb-28">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
              <aside>
                <div className="grid gap-3">
                  {meetingNotes.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-4 rounded-[22px] border border-[#001B65]/10 bg-[#EAF4F2] p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#147C79]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-heading text-sm font-bold">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-[#001B65]/66">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-l-2 border-[#D4AF37] pl-4 text-sm leading-6 text-[#001B65]/66">
                  Please don’t include patient-identifiable or other sensitive health information in this request.
                </p>
              </aside>

              <section aria-labelledby="meeting-request-title" className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-6 shadow-[0_18px_54px_rgba(0,27,101,0.07)] sm:p-8 md:p-10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#147C79]">Meeting request</p>
                <h2 id="meeting-request-title" className="mt-3 font-heading text-3xl font-semibold md:text-4xl">Suggest a time that works for you.</h2>
                <p className="mb-8 mt-3 text-sm leading-6 text-[#001B65]/65">Required fields are marked with an asterisk.</p>
                <ScheduleRequestForm />
              </section>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
