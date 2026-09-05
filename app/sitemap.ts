import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/client-content";
import { routes, siteUrl } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [{ url: siteUrl(), lastModified, changeFrequency: "monthly", priority: 1 }, ...caseStudies.map(study => ({ url: siteUrl(routes.studio.work(study.slug)), lastModified, changeFrequency: "monthly" as const, priority: .8 }))];
}
