import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const lastModified = new Date("2026-11-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
    ["/", "monthly", 1],
    ["/about", "yearly", 0.8],
    ["/capabilities", "monthly", 0.9],
    ["/industries", "monthly", 0.8],
    ["/approach", "yearly", 0.7],
    ["/contact", "yearly", 0.7],
    ["/privacy", "yearly", 0.2],
  ];
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
