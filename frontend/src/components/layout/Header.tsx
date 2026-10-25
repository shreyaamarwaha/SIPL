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
  { label: "LifeBack®", href: "/lifeback/" },
];

const aboutLinks = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team/" },
  { label: "Partners & collaborators", href: "/sipl/partners/" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[rgba(184,216,211,0.72)] bg-[rgba(247,250,249,0.78)] font-body shadow-[0_8px_28px_rgba(15,44,69,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[80px] max-w-[1240px] items-center justify-between gap-4 px-8 max-[1279px]:min-h-[72px] max-[1279px]:gap-4 max-[520px]:px-5">
        <BrandLockup onClick={closeMenu} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          <div className="group relative after:absolute after:left-0 after:right-0 after:top-full after:h-[14px]">
            <Link
              href="/#about"
              className="inline-flex items-center gap-1 rounded-full border border-transparent px-[11px] py-[9px] text-[13px] font-semibold text-[#0F2C45] transition-colors hover:border-[#B8D8D3] hover:bg-[#E8F4F1] hover:text-[#087D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78]"
            >
              About
            </Link>
            <div className="invisible absolute left-1/2 top-[calc(100%+14px)] z-10 flex min-w-[210px] -translate-x-1/2 -translate-y-2 flex-col gap-0.5 rounded-[10px] border border-[#D8E5E2] bg-[rgba(250,252,253,0.98)] p-1.5 opacity-0 shadow-[0_20px_44px_rgba(16,36,59,0.14)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {aboutLinks.slice(1).map((link) => (
                <Link key={link.label} href={link.href} className="block rounded-md px-3 py-2 text-center text-[13px] text-[#0F2C45] hover:bg-[#E8F4F1] hover:text-[#087D78]">
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
                className={`rounded-full border px-[11px] py-[9px] text-[13px] font-semibold transition-colors hover:border-[#B8D8D3] hover:bg-[#E8F4F1] hover:text-[#087D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78] ${active ? "border-[#B8D8D3] bg-[#E8F4F1] text-[#087D78]" : "border-transparent text-[#0F2C45]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-[#D8E5E2] bg-white/70 text-[#0F2C45] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="https://www.sequoiainsilico.com/lifeback"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0D9A8D] to-[#087D78] px-[18px] py-3 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(8,125,120,0.18)] transition hover:brightness-110 max-[1279px]:px-[13px] max-[1279px]:py-2.5 max-[1279px]:text-xs max-[520px]:hidden"
        >
          Access platform
        </Link>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="absolute left-[14px] right-[14px] top-[calc(100%+10px)] max-h-[calc(100dvh-92px)] overflow-y-auto rounded-[18px] border border-[#B8D8D3] bg-white p-3 shadow-[0_22px_50px_rgba(15,44,69,0.16)] xl:hidden">
          <div className="grid gap-0.5">
            {aboutLinks.map((link, index) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className={`rounded-[10px] px-3 py-2.5 text-sm font-medium text-[#0F2C45] hover:bg-[#E8F4F1] hover:text-[#087D78] ${index > 0 ? "pl-7 text-[13px]" : ""}`}>
                {link.label}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className="rounded-[10px] px-3 py-2.5 text-sm font-medium text-[#0F2C45] hover:bg-[#E8F4F1] hover:text-[#087D78]">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
