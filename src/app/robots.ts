import type { MetadataRoute } from "next";

const AI_CRAWLERS = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/studio/", "/form/", "/category/", "/post-2/", "/*?amp=*"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Explicit allow for AI/answer-engine crawlers — a blanket disallow added
      // later for "*" won't silently cut these off from citing the site.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: "https://www.stitchhospitality.com/sitemap.xml",
    host: "https://www.stitchhospitality.com",
  };
}
