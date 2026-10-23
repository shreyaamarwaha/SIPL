import Link from "next/link";
import { BrandLockup } from "@/components/layout/BrandLockup";

const navigationLinks = [
  { label: "About SIPL", href: "/#about" },
  { label: "Team", href: "/team/" },
  { label: "Science", href: "/#science" },
  { label: "BioAI", href: "/#bioai" },
  { label: "Partners & collaborators", href: "/partners/" },
  { label: "Investors", href: "/investors/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Contact", href: "/contact/" },
  { label: "Publications", href: "/publications/" },
];

const trustLinks = [
  { label: "Evidence & IP", href: "/inside-sipl/publications/" },
  { label: "Security & trust", href: "/security/" },
  { label: "Ethical AI", href: "/ethical-ai/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
];

const socialLinks = [{ label: "LinkedIn", href: "https://www.linkedin.com/company/sequoia-insilico-private-ltd/" }];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#D8E5E2] bg-[#EEF7F4] text-[#3C5162]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10 lg:px-16 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.7fr] lg:gap-12">
          <div>
            <BrandLockup />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#6F8190]">Sequoia Insilico builds responsible BioAI for brain health, clinical research, and biopharma discovery.</p>
            <p className="mt-4 text-xs text-[#6F8190]">New Delhi, India</p>
          </div>
          <FooterColumn title="Explore" links={navigationLinks} />
          <FooterColumn title="Trust & governance" links={trustLinks} />
          <FooterColumn title="Connect" links={socialLinks} />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#0F2C45]/10 pt-6 text-xs text-[#6F8190] sm:flex-row sm:items-center">
          <span>© 2026 Sequoia Insilico Pvt. Ltd.</span>
          <Link href="/#advisory-board" className="transition-colors hover:text-[#087D78]">Advisory Board · Coming soon</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F2C45]">{title}</h2>
      <ul className="grid gap-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <Link href={link.href} className="text-sm text-[#6F8190] transition-colors hover:text-[#087D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78]" target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
