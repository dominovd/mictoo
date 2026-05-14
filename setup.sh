#!/bin/bash
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

echo ""
echo "═══════════════════════════════════════"
echo "  mictoo.com — Git + Vercel setup"
echo "═══════════════════════════════════════"
echo ""

# ── 1. Git ───────────────────────────────────────────────────────────────────
echo "▶ Initializing git..."
rm -rf .git
git init
git branch -m main
git config user.email "dominov.denis@gmail.com"
git config user.name "Denis"
git add .
git commit -m "feat: initial mictoo.com — free AI transcription tool

- Next.js 14 App Router + OpenAI Whisper integration
- Drag & drop upload, progress bar, AdSense slot
- Affiliate links (Otter, Sonix, HappyScribe) on result
- SEO: meta tags, FAQ, supported formats section"

echo "✓ Git repo initialized, first commit done."
echo ""

# ── 2. GitHub ────────────────────────────────────────────────────────────────
echo "▶ Creating GitHub repository..."

if ! command -v gh &>/dev/null; then
  echo ""
  echo "  ⚠️  GitHub CLI (gh) is not installed."
  echo "  Install it with: brew install gh"
  echo "  Then authenticate: gh auth login"
  echo "  Then re-run this script."
  echo ""
  echo "  Alternatively, create the repo manually at https://github.com/new"
  echo "  Name it 'mictoo' (private), then run:"
  echo "    git remote add origin git@github.com:$(git config user.name)/mictoo.git"
  echo "    git push -u origin main"
  echo ""
else
  # Check if already authenticated
  if ! gh auth status &>/dev/null; then
    echo "  You need to log in to GitHub first:"
    gh auth login
  fi

  gh repo create mictoo \
    --private \
    --source=. \
    --remote=origin \
    --push \
    --description "Free AI audio & video transcription tool — mictoo.com"

  echo "✓ GitHub repo created and code pushed."
  echo ""
fi

# ── 3. npm install ───────────────────────────────────────────────────────────
echo "▶ Installing dependencies..."
npm install
echo "✓ Dependencies installed."
echo ""

# ── 4. Vercel ────────────────────────────────────────────────────────────────
echo "▶ Deploying to Vercel..."

if ! command -v vercel &>/dev/null; then
  echo "  Installing Vercel CLI..."
  npm install -g vercel
fi

echo ""
echo "  Vercel will ask a few questions:"
echo "  - Set up and deploy? → Y"
echo "  - Which scope? → your account"
echo "  - Link to existing project? → N"
echo "  - Project name? → mictoo"
echo "  - Directory? → ./ (just press Enter)"
echo ""

vercel --yes

echo ""
echo "═══════════════════════════════════════"
echo "  ✅ Done! Your site is live on Vercel."
echo ""
echo "  Next steps:"
echo "  1. Go to vercel.com → your project → Settings → Environment Variables"
echo "  2. Add: OPENAI_API_KEY = sk-..."
echo "  3. Redeploy (vercel --prod)"
echo "═══════════════════════════════════════"
echo ""
