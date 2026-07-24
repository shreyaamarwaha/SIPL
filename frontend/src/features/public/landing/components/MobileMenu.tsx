"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/features/public/landing/constants/navigation";
import { Button } from "@/shared/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden z-50 flex items-center">
      <button
        onClick={toggleMenu}
        className="p-2 -mr-2 text-[#0A0C10] focus:outline-none"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-dvh bg-[#F5F8FC] z-40 flex flex-col pt-24 pb-8 px-6"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {MAIN_NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-4xl font-serif text-[#0A0C10] hover:text-[#D4AF37] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mt-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="https://lifeback-sipl.vercel.app" passHref className="w-full block">
                <Button className="w-full" size="lg" onClick={closeMenu}>
                  Access Platform
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
