#!/usr/bin/env node
//
// Wave 8 batch builder — fetches a transcript + AI summary for each video
// in seed-videos.json and writes data/transcripts/{slug}.json.
//
// Usage:
//   TRANSCRIPTAPI_KEY=sk_... OPENAI_API_KEY=sk-... \
//     node scripts/build-transcript-pages.mjs                # all videos
//   node scripts/build-transcript-pages.mjs --slug ted-foo   # one video
//   node scripts/build-transcript-pages.mjs --force          # re-fetch all
//   node scripts/build-transcript-pages.mjs --no-summary     # skip GPT call
//
// Idempotent by default: skips videos whose JSON already exists. Pass
// --force to refresh everything (e.g. after improving the summary prompt).
//
// Costs per run:
//   - transcriptapi: 1 credit per new video (no charge on skip)
//   - OpenAI gpt-4o-mini: ~$0.0002 per summary (negligible)
//
// Why .mjs not .js: this script is Node-only (uses ESM imports + fetch
// + process.env), and isolating the extension from our Next bundle keeps
// it out of any client/server bundling decisions.
//

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fetchTranscript } from '../lib/yt-transcript-provider.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, '..')
const SEED_PATH = path.join(__dirname, 'seed-videos.json')
const OUT_DIR = path.join(REPO_ROOT, 'data', 'transcripts')

const args = process.argv.slice(2)
const FORCE = args.includes('--force')
const SKIP_SUMMARY = args.includes('--no-summary')
const ONLY_SLUG = (() => {
  const i = args.indexOf('--slug')
  return i >= 0 && args[i + 1] ? args[i + 1] : null
})()

// ---------- summarize ----------

async function summarize(text, title) {
  if (SKIP_SUMMARY || !process.env.OPENAI_API_KEY) return null
  // Trim very long transcripts down to first ~20k chars so we don't blow
  // the model's context for free. Most TED talks fit in well under that;
  // long-form podcasts get the leading section which still captures the
  // setup + best quotes.
  const trimmed = text.length > 20000 ? text.slice(0, 20000) + ' [...]' : text
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.4,
      max_tokens: 600,
      messages: [
        {
          role: 'system',
          content:
            'You write concise, scannable summaries of long video transcripts for a transcription tool. Output strictly: a one-sentence summary (italics-worthy), then a "Key insights" bulleted list with 4-6 items, then a "Memorable quote" line if one stands out. No preamble, no emoji, no markdown headings. Match the speaker\'s register without quoting whole sentences verbatim.',
        },
        {
          role: 'user',
          content: `Title: ${title}\n\nTranscript:\n${trimmed}`,
        },
      ],
    }),
  })
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(`OpenAI ${res.status}: ${t.slice(0, 200)}`)
  }
  const body = await res.json()
  return body?.choices?.[0]?.message?.content?.trim() || null
}

// ---------- main ----------

async function main() {
  const seedRaw = await fs.readFile(SEED_PATH, 'utf-8')
  const seed = JSON.parse(seedRaw)
  const videos = Array.isArray(seed.videos) ? seed.videos : []
  if (!videos.length) {
    console.error('seed-videos.json contains no videos.')
    process.exit(1)
  }

  await fs.mkdir(OUT_DIR, { recursive: true })

  const filtered = ONLY_SLUG ? videos.filter(v => v.slug === ONLY_SLUG) : videos
  if (!filtered.length) {
    console.error(`No video matching slug=${ONLY_SLUG}`)
    process.exit(1)
  }

  console.log(`Processing ${filtered.length} videos (force=${FORCE}, summary=${!SKIP_SUMMARY})`)

  let ok = 0
  let skipped = 0
  let failed = 0

  for (const v of filtered) {
    const outFile = path.join(OUT_DIR, `${v.slug}.json`)
    if (!FORCE) {
      try {
        await fs.access(outFile)
        skipped++
        console.log(`  - skip ${v.slug} (already exists)`)
        continue
      } catch { /* doesn't exist, proceed */ }
    }

    process.stdout.write(`  - fetch ${v.slug} ... `)
    try {
      const t = await fetchTranscript(v.videoId)
      let summary = null
      if (!SKIP_SUMMARY) {
        try {
          summary = await summarize(t.text, v.title || t.title)
        } catch (e) {
          console.log(`(summary failed: ${e.message})`)
        }
      }
      const payload = {
        // Schema is what app/transcripts/[slug]/page.js consumes. Keep
        // backwards compatible if you change it.
        slug: v.slug,
        category: v.category,
        videoId: t.videoId,
        videoUrl: `https://www.youtube.com/watch?v=${t.videoId}`,
        title: v.title || t.title,
        author: t.author,
        durationSec: t.durationSec,
        language: t.language,
        notes: v.notes || '',
        segments: t.segments,
        text: t.text,
        summary: summary || null,
        provider: t.provider,
        builtAt: new Date().toISOString(),
      }
      await fs.writeFile(outFile, JSON.stringify(payload, null, 2) + '\n')
      ok++
      console.log(`ok (${t.segments.length} segments, ${t.text.length} chars, provider=${t.provider})`)
    } catch (e) {
      failed++
      console.log(`FAILED (${e.code || 'ERR'}: ${e.message?.slice(0, 100)})`)
    }
  }

  console.log(`\nDone. ok=${ok}, skipped=${skipped}, failed=${failed}`)
  if (failed) process.exit(2)
}

main().catch(e => {
  console.error('Fatal:', e)
  process.exit(1)
})
