import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/features/public/landing/components/Footer";
import { ScrollToTopButton } from "@/features/public/landing/components/ScrollToTopButton";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAF9] font-body">
      <Header />
      <main className="flex-1 bg-[#F7FAF9]">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
