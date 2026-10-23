"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/layout/BrandLockup";

const links = [
  { label: "Science", href: "/#science" },
  { label: "BioAI", href: "/#bioai" },
  { label: "Trust", href: "/#trust" },
  { label: "Investors", href: "/investors/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Contact", href: "/contact/" },
  { label: "Publications", href: "/publications/" },
  { label: "LifeBack®", href: "/#lifeback" },
];

const aboutLinks = [
  { label: "About SIPL", href: "/#about" },
  { label: "Team", href: "/team/" },
  { label: "Partners & collaborators", href: "/partners/" },
];

function isCurrentPath(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  const target = href.replace(/\/$/, "") || "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D8E5E2] bg-[#F7FAF9]/95 shadow-[0_8px_28px_rgba(15,44,69,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[78px] max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <BrandLockup onClick={closeMenu} />

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6" aria-label="Primary navigation">
          <div className="group relative">
            <Link
              href="/#about"
              className="inline-flex items-center gap-1 py-3 text-[13px] font-medium text-[#3C5162] transition-colors hover:text-[#087D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78]"
            >
              About <span aria-hidden="true" className="text-[10px]">⌄</span>
            </Link>
            <div className="invisible absolute left-0 top-full z-10 min-w-56 translate-y-2 border border-[#D8E5E2] bg-white p-2 opacity-0 shadow-[0_18px_44px_rgba(15,44,69,0.12)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {aboutLinks.slice(1).map((link) => (
                <Link key={link.label} href={link.href} className="block px-3 py-2.5 text-sm text-[#3C5162] hover:bg-[#EEF7F4] hover:text-[#087D78]">
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
                className={`py-3 text-[13px] font-medium transition-colors hover:text-[#087D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78] ${active ? "text-[#087D78]" : "text-[#3C5162]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8E5E2] bg-white text-[#0F2C45] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-[#D8E5E2] bg-[#F7FAF9] px-5 pb-7 pt-4 sm:px-8 xl:hidden">
          <div className="grid gap-1">
            {aboutLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className="px-2 py-2.5 text-base font-medium text-[#3C5162] hover:text-[#087D78]">
                {link.label}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className="px-2 py-2.5 text-base font-medium text-[#3C5162] hover:text-[#087D78]">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
