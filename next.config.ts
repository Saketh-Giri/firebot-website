import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/paths";

const nextConfig: NextConfig = {
  /**
   * Next.js 16 blocks cross-origin requests to /_next/* dev assets. Opening the
   * site at http://192.168.x.x:3000 (instead of localhost) breaks hydration unless
   * those LAN hosts are allowlisted here.
   */
  allowedDevOrigins: [
    "127.0.0.1",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
  ],
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      source: redirect.source,
      destination: redirect.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
