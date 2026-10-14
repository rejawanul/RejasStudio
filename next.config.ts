import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/#portfolio", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/services", destination: "/#workflow", permanent: false },
      { source: "/agencies", destination: "/#experience", permanent: false },
      { source: "/content-creators", destination: "/#experience", permanent: false },
      { source: "/athlete-player-recruitment", destination: "/#experience", permanent: false },
    ];
  },
};

export default nextConfig;
