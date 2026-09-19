import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tokogacor.run";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/t-shirts`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/rtp`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
