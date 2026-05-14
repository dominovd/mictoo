# mictoo.com — Quick Start

## 1. Install dependencies

```bash
cd mictoo
npm install
```

## 2. Set up environment

```bash
cp .env.local.example .env.local
```

Open `.env.local` and paste your OpenAI API key:
```
OPENAI_API_KEY=sk-...
```

## 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 4. Deploy to Vercel

```bash
npx vercel
```

Add `OPENAI_API_KEY` in Vercel → Project → Settings → Environment Variables.

> ⚠️ Vercel Hobby plan has a 10s function timeout. Whisper on long files may timeout.
> Upgrade to Vercel Pro ($20/mo) for 60s timeout, or self-host on Railway/Fly.io.

## 5. AdSense

1. Get approved at https://adsense.google.com
2. Add your publisher ID to `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_ID=pub-XXXXXXXXXXXXXXXX
   ```
3. Replace the `<ins>` placeholder in `components/UploadZone.js` with your real ad unit.

## Affiliate links

Update URLs in `components/UploadZone.js` (the "Need more?" block) with your
referral links from:
- https://otter.ai/affiliate
- https://sonix.ai/affiliates  
- https://www.happyscribe.com/affiliate-program

## Cost estimate

| Usage | Whisper cost |
|---|---|
| 1,000 min/month | $6 |
| 5,000 min/month | $30 |
| 10,000 min/month | $60 |

Average user uploads ~3–5 min → break-even around 3K–5K users/month with AdSense.
