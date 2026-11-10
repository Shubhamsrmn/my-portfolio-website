import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { KEYWORDS, PERSON, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | Shubham Nanaware" },
  description: SITE_DESCRIPTION,
  applicationName: `${PERSON.name} — Portfolio`,
  keywords: KEYWORDS,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${PERSON.name} — Portfolio`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E9E2D0",
  colorScheme: "light",
};

/**
 * Runs before first paint: decides html[data-motion] = "full" | "reduced".
 * Priority: visitor's saved choice > the device's "Reduce Motion" setting > full.
 */
const MOTION_INIT = `(function(){try{var s=localStorage.getItem("motion");var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.dataset.motion=(s==="full"||(s!=="reduced"&&!r))?"full":"reduced"}catch(e){document.documentElement.dataset.motion="full"}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT }} />
      </head>
      <body className="min-h-full flex flex-col font-editorial bg-paper-canvas text-ink-primary selection:bg-ink-primary selection:text-paper-canvas">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
