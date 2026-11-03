"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/layout/BrandLockup";

const links = [
  { label: "Science", href: "/#science" },
  { label: "Team", href: "/team/" },
  { label: "BioAI", href: "/#bioai" },
  { label: "Trust", href: "/#trust" },
  { label: "Investors", href: "/investors/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Contact", href: "/contact/" },
  { label: "Publications", href: "/publications/" },
  { label: "LifeBack®", href: "/lifeback/" },
];

const aboutLinks = [
  { label: "About", href: "/#about" },
  { label: "Partners & collaborators", href: "/sipl/partners/" },
];

function isCurrentPath(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  const target = href.replace(/\/$/, "") || "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 50);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopNavigation = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktopNavigation.matches) setIsMenuOpen(false);
    };
    desktopNavigation.addEventListener("change", closeOnDesktop);
    return () => desktopNavigation.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 font-body transition-all duration-500 md:pt-4">
      <div className={`mx-auto flex min-h-[64px] items-center justify-between gap-4 border transition-all duration-500 max-[1279px]:gap-3 max-[520px]:min-h-[58px] max-[520px]:px-4 ${isScrolled ? "max-w-[1360px] rounded-full border-[#102B49]/[0.08] bg-white/90 px-5 py-2 shadow-[0_12px_36px_rgba(16,43,73,0.09)] backdrop-blur-xl md:px-8" : "max-w-[1440px] rounded-[22px] border-white/70 bg-white/80 px-6 py-2 shadow-[0_8px_28px_rgba(16,43,73,0.055)] backdrop-blur-xl md:px-12 lg:px-16"}`}>
        <BrandLockup onClick={closeMenu} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          <div className="group relative after:absolute after:left-0 after:right-0 after:top-full after:h-[14px]">
            <Link
              href="/#about"
              className="inline-flex items-center gap-1 rounded-full border border-transparent px-[11px] py-[9px] text-[13px] font-semibold text-[#131313] transition-all hover:border-[#34B7C3] hover:bg-[#071D66] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34B7C3]"
            >
              About
            </Link>
            <div className="invisible absolute left-1/2 top-[calc(100%+14px)] z-10 flex min-w-[210px] -translate-x-1/2 -translate-y-2 flex-col gap-0.5 rounded-[10px] border border-[#D6D6D6] bg-[rgba(250,252,253,0.98)] p-1.5 opacity-0 shadow-[0_20px_44px_rgba(16,36,59,0.14)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {aboutLinks.slice(1).map((link) => (
                <Link key={link.label} href={link.href} className="block rounded-md border border-transparent px-3 py-2 text-center text-[13px] text-[#131313] transition-colors hover:border-[#34B7C3] hover:bg-[#071D66] hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((link) => {
            const active = isCurrentPath(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border px-[11px] py-[9px] text-[13px] font-semibold transition-all hover:border-[#34B7C3] hover:bg-[#071D66] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34B7C3] ${active ? "border-[#34B7C3] bg-[#071D66] text-white shadow-[0_5px_14px_rgba(7,29,102,.14)]" : "border-transparent text-[#131313]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-[#071D66] bg-[#071D66] text-white transition-all hover:border-[#34B7C3] hover:bg-[#071D66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34B7C3] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="https://www.sequoiainsilico.com/lifeback"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-[#071D66] px-[18px] py-3 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all hover:border-[#34B7C3] hover:bg-[#071D66] hover:shadow-[0_10px_22px_rgba(7,29,102,.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34B7C3] max-[1279px]:px-[13px] max-[1279px]:py-2.5 max-[1279px]:text-xs max-[520px]:hidden"
        >
          Access platform
        </Link>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="absolute left-[14px] right-[14px] top-[calc(100%+10px)] max-h-[calc(100dvh-92px)] overflow-y-auto rounded-[18px] border border-[#D6D6D6] bg-white p-3 shadow-[0_22px_50px_rgba(0,0,0,0.16)] xl:hidden">
          <div className="grid gap-0.5">
            {aboutLinks.map((link, index) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className={`rounded-[10px] border border-transparent px-3 py-2.5 text-sm font-medium text-[#131313] transition-colors hover:border-[#34B7C3] hover:bg-[#071D66] hover:text-white ${index > 0 ? "pl-7 text-[13px]" : ""}`}>
                {link.label}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className="rounded-[10px] border border-transparent px-3 py-2.5 text-sm font-medium text-[#131313] transition-colors hover:border-[#34B7C3] hover:bg-[#071D66] hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
