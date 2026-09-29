import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
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
