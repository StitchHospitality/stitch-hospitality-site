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
    ];
  },
  headers: async () => [
    {
      source: "/form/:path*",
      headers: [
        { key: "X-Frame-Options", value: "ALLOWALL" },
        { key: "Content-Security-Policy", value: "frame-ancestors *" },
      ],
    },
  ],
};

export default nextConfig;
