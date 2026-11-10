import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { RESUME } from "@/lib/content";

// Required by `output: "export"` (static hosting on S3).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    // the resume PDF is indexable on its own (useful for recruiter search and ATS crawlers)
    { url: `${SITE_URL}${RESUME}`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
