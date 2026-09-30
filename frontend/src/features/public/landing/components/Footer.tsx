import Link from "next/link";
import Image from "next/image";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";

const navigationLinks = [
  { label: "About SIPL", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Science", href: "/#science" },
  { label: "BioAI for biopharma", href: "/#bioai" },
  { label: "Partners", href: "/#partners" },
  { label: "Investors", href: "/#investors" },
  { label: "Contact", href: "/#contact" },
];

const trustLinks = [
  { label: "Evidence & IP", href: "/inside-sipl/publications" },
  { label: "Security & trust", href: "/security" },
  { label: "Ethical AI", href: "/ethical-ai" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#DCE4EA] bg-[#EFF7F5] text-[#33465C]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10 lg:px-16 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.7fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="SIPL home">
              <span className="relative block h-10 w-10 shrink-0"><Image src={SIPLLogo} alt="" fill sizes="40px" className="object-contain" /></span>
              <span className="font-heading text-xl font-semibold tracking-[0.1em] text-[#102F49]">SIPL</span>
            </Link>
            <p className="mt-4 text-sm font-semibold tracking-wide text-[#147C79]">Measure. Monitor. Discover.</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#647889]">Sequoia Insilico builds responsible BioAI for brain health, clinical research, and biopharma discovery.</p>
            <p className="mt-4 text-xs text-[#647889]">New Delhi, India</p>
          </div>
          <FooterColumn title="Explore" links={navigationLinks} />
          <FooterColumn title="Trust & governance" links={trustLinks} />
          <FooterColumn title="Connect" links={socialLinks} />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#102F49]/10 pt-6 text-xs text-[#647889] sm:flex-row sm:items-center">
          <span>© 2026 Sequoia Insilico Pvt. Ltd.</span>
          <Link href="/#advisory-board" className="transition-colors hover:text-[#147C79]">Advisory Board · Coming soon</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102F49]">{title}</h2>
      <ul className="grid gap-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-[#647889] transition-colors hover:text-[#147C79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147C79]"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
