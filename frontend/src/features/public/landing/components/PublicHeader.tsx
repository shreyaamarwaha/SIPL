"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@/shared/hooks/useScrollPosition";
import { MAIN_NAV } from "@/features/public/landing/constants/navigation";
import { Button } from "@/shared/ui/Button";
import { MobileMenu } from "@/features/public/landing/components/MobileMenu";
import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";

export function PublicHeader() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center w-full",
        isScrolled ? "pt-4 px-4" : "pt-4 md:pt-6 lg:pt-8 px-0"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full transition-all duration-500 relative mx-auto",
          isScrolled
            ? "max-w-6xl bg-[#F5F8FC]/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 md:px-8 py-3 border border-[#001B65]/10"
            : "max-w-full bg-transparent px-6 md:px-12 lg:px-16 py-2"
        )}
      >
        {/* Logo Area */}
        <div className="flex items-center gap-3 z-50 shrink-0">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 transition-transform group-hover:scale-105 shrink-0">
              <Image
                src={SIPLLogo}
                alt="Sequoia Insilico Private Limited (SIPL) Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 44px"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[15px] md:text-base lg:text-lg font-semibold text-[#0A0C10] leading-none tracking-tight">LifeBack™</span>
              <span className="text-[10px] md:text-xs text-[#4A5568] mt-0.5 md:mt-1 font-medium leading-none">by Sequoia In Silico Pvt. Ltd.</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-[#0A0C10]/80 hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden lg:flex items-center z-50 shrink-0">
          <Link href="https://lifeback-sipl.vercel.app" passHref>
            <Button variant={isScrolled ? "primary" : "outline"} size="sm">
              Access Platform
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden shrink-0 z-50">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
