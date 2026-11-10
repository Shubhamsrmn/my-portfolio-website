import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, served from S3 + CloudFront (see scripts/deploy.sh).
  output: "export",
  // The image optimizer needs a server. Images are pre-optimized instead (public/avatar.webp, 800w).
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents / partialPrefetching are intentionally off: they conflict with `output: "export"`
  // (static hosting) and this site uses none of their features.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
