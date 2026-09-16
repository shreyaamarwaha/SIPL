"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { requestDemoLinkStyles } from "@/shared/ui/Button";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links";

const solutionsLinks = [
  { label: "LifeBack™", href: "/solutions" },
  { label: "LifeBack™ Voice", href: "/solutions/lifeback-voice" },
  { label: "LifeBack™ Video", href: "/solutions/lifeback-video" },
  { label: "LifeBack™ Genomics", href: "/solutions/life-genomics" },
];

const insideLinks = [
  { label: "Company", href: "/about" },
  { label: "Capabilities", href: "/#solutions" },
  { label: "Research", href: "/research" },
  { label: "Past Projects", href: "/inside-sipl/past-projects" },
  { label: "Career", href: "/inside-sipl/career" },
];

const staticLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

function Dropdown({
  label,
  href,
  links,
  pathname,
}: {
  label: string;
  href: string;
  links: Array<{ label: string; href: string }>;
  pathname: string;
}) {
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="group relative">
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1.5 py-2 font-heading text-[15px] font-semibold text-[#001B65] transition-colors hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:decoration-2 hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]",
          isActive && "underline decoration-[#D4AF37] decoration-2 underline-offset-8"
        )}
        aria-haspopup="true"
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          strokeWidth={1.8}
        />
      </Link>

      <div className="invisible absolute left-0 top-full min-w-60 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="rounded-[4px] border border-[#001B65]/10 bg-[#F5F8FC]/95 p-2 shadow-[0_18px_44px_rgba(0,27,101,0.14)] backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group/link flex items-center gap-3 rounded-[4px] px-4 py-3 font-heading text-[14px] font-semibold text-[#001B65] transition-colors hover:bg-[#001B65]/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]",
                pathname === link.href && "bg-[#001B65]/[0.04] underline decoration-[#D4AF37] decoration-2 underline-offset-4"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span className="h-7 w-px bg-[#D4AF37]/60 transition-colors group-hover/link:bg-[#D4AF37]" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-[#001B65]/10 bg-[#F5F8FC]/82 shadow-[0_12px_34px_rgba(0,27,101,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="flex h-20 w-full items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]"
          aria-label="SIPL home"
          onClick={closeMenu}
        >
          <span className="relative block h-11 w-11 shrink-0">
            <Image
              src={SIPLLogo}
              alt="SIPL logo"
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </span>
          <span className="font-heading text-[22px] font-bold tracking-[0.12em] text-[#001B65]">
            SIPL
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          <Dropdown label="Solutions" href="/solutions" links={solutionsLinks} pathname={pathname} />
          <Dropdown label="Inside SIPL" href="/inside-sipl" links={insideLinks} pathname={pathname} />
          {staticLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 font-heading text-[15px] font-semibold text-[#001B65] transition-colors hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:decoration-2 hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]",
                  isActive && "underline decoration-[#D4AF37] decoration-2 underline-offset-8"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href={EXTERNAL_LINKS.LIFEBACK_PLATFORM}
            target="_blank"
            rel="noreferrer"
            className={requestDemoLinkStyles}
          >
            Access Platform
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#001B65]/15 text-[#001B65] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-[#001B65]/10 bg-[#F5F8FC]/95 px-6 pb-8 pt-5 shadow-[0_18px_44px_rgba(0,27,101,0.12)] backdrop-blur-xl"
        >
          <div className="grid gap-6">
            <MobileLinkGroup
              title="Solutions"
              href="/solutions"
              links={solutionsLinks}
              pathname={pathname}
              onSelect={closeMenu}
            />
            <MobileLinkGroup
              title="Inside SIPL"
              href="/inside-sipl"
              links={insideLinks}
              pathname={pathname}
              onSelect={closeMenu}
            />

            <div className="grid gap-1">
              {staticLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "rounded-[4px] py-3 font-heading text-[18px] font-semibold text-[#001B65] hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:underline-offset-4",
                      isActive && "underline decoration-[#D4AF37] decoration-2 underline-offset-4"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href={EXTERNAL_LINKS.LIFEBACK_PLATFORM}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className={cn(requestDemoLinkStyles, "mt-2 w-full px-6")}
            >
              Access Platform
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileLinkGroup({
  title,
  href,
  links,
  pathname,
  onSelect,
}: {
  title: string;
  href: string;
  links: Array<{ label: string; href: string }>;
  pathname: string;
  onSelect: () => void;
}) {
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div>
      <Link
        href={href}
        onClick={onSelect}
        className={cn(
          "mb-2 inline-flex font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#001B65]/60 transition-colors hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]",
          isActive && "text-[#001B65] underline decoration-[#D4AF37] decoration-2 underline-offset-4"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {title}
      </Link>
      <div className="grid gap-1 border-l border-[#D4AF37]/70 pl-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onSelect}
            className={cn(
              "rounded-[4px] py-2 font-heading text-[17px] font-semibold text-[#001B65] hover:text-[#001B65] hover:underline hover:decoration-[#D4AF37] hover:underline-offset-4",
              pathname === link.href && "underline decoration-[#D4AF37] decoration-2 underline-offset-4"
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
