import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    const lifeBackOrigin = process.env.LIFEBACK_ORIGIN?.replace(/\/+$/, "");

    if (!lifeBackOrigin) {
      return [];
    }

    let destinationOrigin: URL;
    try {
      destinationOrigin = new URL(lifeBackOrigin);
    } catch {
      throw new Error("LIFEBACK_ORIGIN must be a valid absolute URL.");
    }

    if (destinationOrigin.protocol !== "https:" && destinationOrigin.protocol !== "http:") {
      throw new Error("LIFEBACK_ORIGIN must use http or https.");
    }

    const origin = destinationOrigin.origin;

    // LifeBack is served by its own Vercel project, while these rewrites keep
    // its public URL under the SIPL domain. `beforeFiles` lets it replace the
    // current static LifeBack pages once LIFEBACK_ORIGIN is configured.
    return {
      beforeFiles: [
        { source: "/lifeback", destination: `${origin}/lifeback/` },
        { source: "/lifeback/:path*", destination: `${origin}/lifeback/:path*` },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/solutions", destination: "/#science", permanent: true },
      { source: "/solutions/:path*", destination: "/#science", permanent: true },
      { source: "/login", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
