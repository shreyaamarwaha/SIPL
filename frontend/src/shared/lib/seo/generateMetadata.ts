import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
}

const PRODUCTION_SITE_URL = "https://www.sequoiainsilico.com";

export function getPublicSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();

  if (!configuredUrl) return PRODUCTION_SITE_URL;

  try {
    const parsedUrl = new URL(configuredUrl);
    const isLocalHost = ["localhost", "127.0.0.1", "0.0.0.0"].includes(parsedUrl.hostname);
    if (process.env.NODE_ENV === "production" && isLocalHost) return PRODUCTION_SITE_URL;
    return parsedUrl.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export function generateSeoMetadata({ title, description, path }: GenerateMetadataProps): Metadata {
  const baseUrl = getPublicSiteUrl();
  const url = new URL(path, `${baseUrl}/`).toString();

  return {
    title,
    applicationName: "SIPL",
    description,
    icons: {
      icon: [
        { url: "/sipl-s-mark.png?v=sipl-mark", type: "image/png", sizes: "72x104" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
      shortcut: [{ url: "/sipl-s-mark.png?v=sipl-mark", type: "image/png", sizes: "72x104" }],
      apple: [{ url: "/sipl-s-mark.png", sizes: "72x104", type: "image/png" }],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sequoia Insilico",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}
