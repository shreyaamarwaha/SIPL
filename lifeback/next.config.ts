import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/lifeback",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
