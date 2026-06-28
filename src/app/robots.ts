import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/write", "/login"],
    },
    sitemap: "https://koi-dev.vercel.app/sitemap.xml",
  };
}
