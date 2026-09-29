import Link from "next/link";
import Image from "next/image";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";

const navigationLinks = [
  { label: "Science", href: "/#science" },
  { label: "Partners", href: "/#partners" },
  { label: "Evidence & IP", href: "/inside-sipl/publications" },
  { label: "Investors", href: "/#investors" },
  { label: "Our approach", href: "/#approach" },
  { label: "Advisory Board", href: "/#advisory-board" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#F5F8FC] text-[#001B65]">
      <div className="border-t border-[#001B65]/15 px-6 py-12 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="SIPL home">
              <span className="relative block h-10 w-10"><Image src={SIPLLogo} alt="SIPL logo" fill sizes="40px" className="object-contain" /></span>
              <span className="font-heading text-xl font-bold tracking-[0.12em]">SIPL</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#001B65]/70">Sequoia Insilico builds responsible BioAI for brain health, clinical research, and biopharma discovery.</p>
          </div>
          <FooterColumn title="Navigate" links={navigationLinks} />
          <FooterColumn title="Connect" links={socialLinks} />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#001B65]/15 pt-6 text-sm text-[#001B65]/70 md:flex-row">
          <span>© 2026 Sequoia Insilico Pvt. Ltd.</span>
          <div className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link></div>
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
      <h2 className="mb-7 font-heading text-[15px] font-bold uppercase tracking-[0.14em] text-[#001B65]">
        {title}
      </h2>
      <ul className="grid gap-4">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-base leading-none text-[#001B65]/78 transition-colors hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]"
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
