import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/paths";

const nextConfig: NextConfig = {

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
