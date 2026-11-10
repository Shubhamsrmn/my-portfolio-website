import { EMAIL, GITHUB, LINKEDIN } from "@/lib/content";

/**
 * Canonical site origin. Set NEXT_PUBLIC_SITE_URL in the hosting provider (e.g. https://yourdomain.com)
 * BEFORE going live: canonical, Open Graph, sitemap and structured data are all built from it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/+$/, "");

if (
  process.env.NODE_ENV === "production" &&
  !process.env.NEXT_PUBLIC_SITE_URL &&
  !process.env.VERCEL_PROJECT_PRODUCTION_URL
) {
  console.warn(
    "\n[SEO] NEXT_PUBLIC_SITE_URL is not set. Canonical URL, sitemap, robots and Open Graph URLs will point to http://localhost:3000. Set it before deploying.\n",
  );
}

export const PERSON = {
  name: "Shubham Nanaware",
  jobTitle: "Full-Stack Software Engineer",
  city: "Pune",
  country: "IN",
};

export const SITE_TITLE = "Shubham Nanaware | Full-Stack Software Engineer in Pune";

export const SITE_DESCRIPTION =
  "Full-stack software engineer in Pune, India. Nearly 4 years building production web and mobile apps with React, Next.js, React Native, Node.js and AWS.";

export const KEYWORDS = [
  "Shubham Nanaware",
  "full-stack developer Pune",
  "full-stack software engineer",
  "React developer",
  "Next.js developer",
  "React Native developer",
  "Expo developer",
  "Node.js developer",
  "TypeScript",
  "AWS",
  "PostgreSQL",
  "DynamoDB",
  "Redis",
  "mobile app developer India",
  "software engineer portfolio",
];

/** schema.org graph: Person + WebSite + ProfilePage, for rich results and knowledge-graph matching. */
export function buildJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const siteId = `${SITE_URL}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: PERSON.name,
        givenName: "Shubham",
        familyName: "Nanaware",
        jobTitle: PERSON.jobTitle,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/avatar.webp`,
        email: `mailto:${EMAIL}`,
        address: { "@type": "PostalAddress", addressLocality: PERSON.city, addressCountry: PERSON.country },
        worksFor: { "@type": "Organization", name: "CentraLogic" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Modern Education Society's Wadia College of Engineering, Pune University",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "React Native",
          "Expo",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "DynamoDB",
          "Redis",
          "AWS",
          "Docker",
          "Jenkins",
          "REST APIs",
          "OAuth 2.0",
          "Okta SSO",
          "Web accessibility",
          "Internationalization",
        ],
        sameAs: [LINKEDIN, GITHUB],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: `${PERSON.name} — Portfolio`,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: SITE_TITLE,
        isPartOf: { "@id": siteId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };
}
