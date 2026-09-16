import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPL | Biopharma-grade Clinical Intelligence",
  applicationName: "SIPL",
  description:
    "SIPL builds biopharma-grade clinical intelligence for mental and nervous system healthcare, combining multimodal signals for precision screening and translational research.",
  icons: {
    icon: [
      {
        url: "/SIPL_Logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/SIPL_Logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/SIPL_Logo.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased font-body" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
