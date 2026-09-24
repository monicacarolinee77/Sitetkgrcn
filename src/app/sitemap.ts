import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://athena168.run";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/rtp`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/t-shirts`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
