import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "LifeBack | Evidence-Based Mental Health Assessment",
  description: "A private, evidence-based platform for screening mental health using the clinically-validated PHQ-9 standard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          modalBackdrop: "bg-black/60 backdrop-blur-md z-[100]"
        }
      }}
    >
      <html
        lang="en"
        className="h-full antialiased"
        suppressHydrationWarning
      >
        <body suppressHydrationWarning className="min-h-full flex flex-col font-body bg-background text-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
