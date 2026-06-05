#!/usr/bin/env node
//
// Diagnostic — does the Upstash KV at $UPSTASH_REDIS_REST_URL actually
// contain the 12 seed transcripts we expect after bootstrap-yt-cache?
//
// Usage:
//   UPSTASH_REDIS_REST_URL=... UPSTASH_REDIS_REST_TOKEN=... \
//     node scripts/check-yt-cache.mjs
//
// Run it twice — once with .env.local creds, once with Vercel prod creds
// (pull from `vercel env pull` or dashboard) — to confirm they point to
// the SAME Upstash instance. If they differ, bootstrap wrote to one DB
// and prod reads from another. That's the bug.
//

const SEED_VIDEO_IDS = [
  ['qJXKhu5UZwk', 'huberman-master-your-focus-with-dopamine'],
  ['DcWqzZ3I2cY', 'lex-fridman-elon-musk-3'],
  ['UF8uR6Z6KLc', 'steve-jobs-stanford-commencement-2005'],
  ['iG9CE55wbtY', 'ted-do-schools-kill-creativity-ken-robinson'],
  ['H14bBuluwB8', 'ted-grit-power-of-passion-and-perseverance-angela-duckworth'],
  ['u4ZoJKF_VuA', 'ted-how-great-leaders-inspire-action-simon-sinek'],
  ['arj7oStGLkU', 'ted-inside-mind-master-procrastinator-tim-urban'],
  ['iCvmsMzlF7o', 'ted-looks-arent-everything-believe-me-im-a-model-cameron-russell'],
  ['8KkKuTCFvzI', 'ted-power-of-vulnerability-brene-brown'],
  ['RcGyVTAoXEU', 'ted-the-happy-secret-to-better-work-shawn-achor'],
  ['fLJsdqxnZb0', 'ted-the-puzzle-of-motivation-dan-pink'],
  ['Ks-_Mh1QhMc', 'ted-your-body-language-may-shape-who-you-are-amy-cuddy'],
]

async function main() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    console.error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN')
    process.exit(1)
  }
  // Mask URL to make output safe to paste
  const masked = url.replace(/https:\/\/(.{4}).*?(\.upstash\.io)/, 'https://$1***$2')
  console.log(`Upstash URL: ${masked}`)
  console.log('')

  const { Redis } = await import('@upstash/redis')
  const redis = new Redis({ url, token })

  let hits = 0
  let misses = 0
  for (const [videoId, slug] of SEED_VIDEO_IDS) {
    const key = `yt:transcript:${videoId}`
    try {
      const val = await redis.get(key)
      if (val) {
        // Upstash auto-parses JSON values, so val may already be an object.
        const obj = typeof val === 'string' ? JSON.parse(val) : val
        const segCount = obj?.segments?.length ?? 0
        const textLen = (obj?.text || '').length
        console.log(`  HIT  ${key}  (${segCount} seg, ${textLen} chars)  [${slug}]`)
        hits++
      } else {
        console.log(`  MISS ${key}  [${slug}]`)
        misses++
      }
    } catch (e) {
      console.log(`  ERR  ${key}  ${e.message}  [${slug}]`)
      misses++
    }
  }

  console.log('')
  console.log(`Result: ${hits}/${SEED_VIDEO_IDS.length} keys present, ${misses} missing`)
  if (hits === 0) {
    console.log('')
    console.log('=> Cache is empty. Either bootstrap was never run for real,')
    console.log('   or this Upstash instance is not the one bootstrap wrote to.')
  } else if (hits < SEED_VIDEO_IDS.length) {
    console.log('')
    console.log('=> Partial cache. Some keys missing — re-run bootstrap-yt-cache.mjs')
  } else {
    console.log('')
    console.log('=> Cache is fully populated. If prod still misses, the prod')
    console.log('   Upstash env vars point to a DIFFERENT instance.')
  }
}

main().catch(e => {
  console.error('Fatal:', e)
  process.exit(1)
})
