import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/riesenia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ako-pracujeme", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kalkulacka", priority: 0.7, changeFrequency: "monthly" },
  { path: "/o-nas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
  { path: "/ochrana-osobnych-udajov", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${site.url}${p.path === "/" ? "/" : p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
