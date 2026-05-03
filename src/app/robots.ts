import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/form/"],
      },
    ],
    sitemap: "https://www.stitchhospitality.com/sitemap.xml",
    host: "https://www.stitchhospitality.com",
  };
}
