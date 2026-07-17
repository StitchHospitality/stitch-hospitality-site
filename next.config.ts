import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/post-2", destination: "/", permanent: true },
      { source: "/post-2/", destination: "/", permanent: true },
      // Retired RFP-automation service — all paths 301 to the new homepage.
      { source: "/hotel-rfp-automation", destination: "/", permanent: true },
      { source: "/hotel-proposal-automation", destination: "/", permanent: true },
      { source: "/event-inquiry-parsing-for-hotels", destination: "/", permanent: true },
      { source: "/what-to-expect", destination: "/", permanent: true },
      { source: "/form/:path*", destination: "/", permanent: true },
      // The prior standalone OS page is now the homepage.
      { source: "/ownership-report", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
