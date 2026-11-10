#!/usr/bin/env bash
# Deploy the static site to S3 + CloudFront.
#
#   scripts/deploy.sh             build, back up the live bucket, upload, invalidate the CDN
#   DRY_RUN=1 scripts/deploy.sh   show exactly what would change; uploads/deletes/invalidates nothing
#
# Configuration lives in a git-ignored file so no infrastructure identifiers are committed:
#   cp .deploy.env.example .deploy.env   and fill it in.
# Needs an active AWS session first (e.g. `aws login` or `aws sso login`).
set -euo pipefail

cd "$(dirname "$0")/.."

CONFIG="${DEPLOY_CONFIG:-.deploy.env}"
# shellcheck disable=SC1090
[ -f "$CONFIG" ] && . "$CONFIG"

: "${BUCKET:?Set BUCKET (S3 bucket name) in $CONFIG, see .deploy.env.example}"
: "${REGION:?Set REGION (bucket region) in $CONFIG}"
: "${DISTRIBUTION_ID:?Set DISTRIBUTION_ID (CloudFront distribution) in $CONFIG}"
: "${SITE_URL:?Set SITE_URL (public https origin, no trailing slash) in $CONFIG}"
export NEXT_PUBLIC_SITE_URL="$SITE_URL"

DRY=""
[ "${DRY_RUN:-}" = "1" ] && DRY="--dryrun" && echo ">> DRY RUN: nothing will be changed in AWS"

echo ">> Checking AWS session"
aws sts get-caller-identity --query Arn --output text

echo ">> Building static export for $NEXT_PUBLIC_SITE_URL"
npm run build >/dev/null
[ -f out/index.html ] || { echo "build produced no out/index.html"; exit 1; }
# Optional: keep a legacy resume URL alive (e.g. linked from older profiles/CVs).
if [ -n "${LEGACY_RESUME_KEY:-}" ]; then
  cp out/Shubham_Nanaware_Resume.pdf "out/$LEGACY_RESUME_KEY"
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP="${BACKUP_DIR:-$HOME/portfolio-s3-backups}/$STAMP"
echo ">> Backing up the live bucket to $BACKUP"
mkdir -p "$BACKUP"
aws s3 sync "s3://$BUCKET" "$BACKUP" --region "$REGION" --only-show-errors
echo "   $(find "$BACKUP" -type f | wc -l | tr -d ' ') files backed up"

SYNC="aws s3 sync out s3://$BUCKET --region $REGION $DRY --only-show-errors"

echo ">> 1/4 Hashed build assets (cache for a year)"
$SYNC --exclude "*" --include "_next/static/*" --cache-control "public,max-age=31536000,immutable"

echo ">> 2/4 Images, icons, PDF (cache for a day)"
$SYNC --exclude "_next/static/*" --exclude "*.html" --exclude "*.txt" --exclude "*.xml" \
      --cache-control "public,max-age=86400"

echo ">> 3/4 HTML, robots, sitemap, RSC payloads (always revalidate), uploaded last"
$SYNC --exclude "*" --include "*.html" --include "*.txt" --include "*.xml" \
      --exclude "_next/static/*" --cache-control "public,max-age=0,must-revalidate"

echo ">> 4/4 Removing files left over from a previous deployment"
aws s3 sync out "s3://$BUCKET" --region "$REGION" $DRY --delete --size-only

if [ -n "$DRY" ]; then echo ">> Dry run finished."; exit 0; fi

echo ">> Invalidating CloudFront"
INV=$(aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" --query Invalidation.Id --output text)
aws cloudfront wait invalidation-completed --distribution-id "$DISTRIBUTION_ID" --id "$INV"
echo ">> Done. Live at $SITE_URL   (backup of the previous version: $BACKUP)"
