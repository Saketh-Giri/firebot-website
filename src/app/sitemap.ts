import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/content/paths";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPaths.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
