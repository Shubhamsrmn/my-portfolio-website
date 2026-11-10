# Shubham Nanaware — Portfolio

Next.js (App Router) + Tailwind CSS v4. A vintage-newspaper portfolio with scroll-driven story scenes.

## Develop

```bash
npm run dev
```

## Production URL (required)

Set the public origin when building. Canonical URL, `sitemap.xml`, `robots.txt`, Open Graph/Twitter image URLs and
JSON-LD all derive from it:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # no trailing slash
```

Optional: `GOOGLE_SITE_VERIFICATION` (Search Console "HTML tag" token). See `.env.example`.

## Deploying (static export to S3 + CloudFront)

The site is a fully static export (`output: "export"`, output in `out/`), so it can be hosted on any static host.
`scripts/deploy.sh` publishes it to S3 behind CloudFront:

1. `cp .deploy.env.example .deploy.env` and fill in your bucket, region, CloudFront distribution ID and site URL.
   `.deploy.env` is git-ignored, so no infrastructure identifiers are committed.
2. Sign in to AWS (`aws login` or `aws sso login`).
3. Preview, then deploy:

   ```bash
   DRY_RUN=1 scripts/deploy.sh   # shows what would change, touches nothing
   scripts/deploy.sh             # build, back up the live bucket, upload, prune, invalidate the CDN
   ```

The script backs up the live bucket locally first, uploads hashed assets before HTML (no broken in-between state),
sets cache headers (immutable for `_next/static`, revalidate for HTML) and invalidates CloudFront.

After the first deploy: submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and re-check the
share preview with the LinkedIn Post Inspector (previews are cached per URL).

## Where things live

| What | Where |
| --- | --- |
| All copy (experience, projects, skills, links) | `lib/content.ts` |
| SEO constants + JSON-LD (Person / WebSite / ProfilePage) | `lib/site.ts` |
| Metadata, viewport | `app/layout.tsx` |
| Sitemap / robots | `app/sitemap.ts`, `app/robots.ts` |
| Share image, icons | `app/opengraph-image.png`, `app/twitter-image.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` |
| Resume PDF (linked from the page, listed in the sitemap) | `public/Shubham_Nanaware_Resume.pdf` |
| Scroll scenes | `components/HorizontalStories.tsx`, `components/CareerStory.tsx`, `components/ScrollMarquee.tsx` |

When the resume changes, update `lib/content.ts` **and** replace the PDF in `public/` (keep the filename so the link and sitemap stay valid).
