"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";

const navigationLinks = [
  { label: "About", href: "/#about" },
  { label: "Science", href: "/#science" },
  { label: "BioAI", href: "/#bioai" },
  { label: "Partners", href: "/#partners" },
  { label: "Investors", href: "/#investors" },
];

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
          ? "border-b border-[#102F49]/10 bg-[#F5F8FC]/90 shadow-[0_12px_34px_rgba(16,47,73,0.07)] backdrop-blur-xl"
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
          <span className="font-heading text-[22px] font-bold tracking-[0.12em] text-[#102F49]">
            SIPL
          </span>
        </Link>

        <nav className="hidden max-w-[46rem] flex-wrap items-center justify-end gap-x-7 gap-y-1 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 font-heading text-[14px] font-medium text-[#102F49] transition-colors hover:text-[#147C79] hover:underline hover:decoration-[#147C79] hover:decoration-2 hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147C79] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]",
                  isActive && "underline decoration-[#147C79] decoration-2 underline-offset-8"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/#contact" className="hidden min-h-11 items-center rounded-full bg-[#102F49] px-5 text-sm font-semibold text-white transition hover:bg-[#147C79] lg:inline-flex">
          Contact
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#102F49]/15 text-[#102F49] lg:hidden"
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
          className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-[#102F49]/10 bg-[#F5F8FC]/95 px-6 pb-8 pt-5 shadow-[0_18px_44px_rgba(16,47,73,0.12)] backdrop-blur-xl"
        >
          <div className="grid gap-1">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-md py-3 font-heading text-[18px] font-semibold text-[#102F49] hover:text-[#147C79] hover:underline hover:decoration-[#147C79] hover:underline-offset-4",
                    isActive && "underline decoration-[#147C79] decoration-2 underline-offset-4"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/#contact" onClick={closeMenu} className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#102F49] px-6 text-sm font-bold text-white">
              Contact SIPL
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
