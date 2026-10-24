import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { getPublicSiteUrl } from "@/shared/lib/seo/generateMetadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getPublicSiteUrl()),
  title: "SIPL | Biopharma-grade Clinical Intelligence",
  applicationName: "SIPL",
  description:
    "SIPL builds biopharma-grade clinical intelligence for mental and nervous system healthcare, combining multimodal signals for precision screening and translational research.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
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
    <html lang="en">
      <body className="antialiased font-body" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
