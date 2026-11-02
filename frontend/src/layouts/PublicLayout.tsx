import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/features/public/landing/components/Footer";
import { ScrollToTopButton } from "@/features/public/landing/components/ScrollToTopButton";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="sipl-theme flex min-h-screen flex-col bg-[#EDEDED] font-body">
      <Header />
      <main className="flex-1 bg-[#EDEDED]">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
