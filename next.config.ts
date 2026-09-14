import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.robinhood.com" },
      { protocol: "https", hostname: "cdn.dexscreener.com" },
      { protocol: "https", hostname: "assets.geckoterminal.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
