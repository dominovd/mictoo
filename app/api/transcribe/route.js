import { NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { bumpTranscriptionCount } from '@/lib/stats'
import { enqueueJob, isQueueAvailable, QueueFullError, UserQueueFullError } from '@/lib/queue'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'
import { isDeepgramAvailable, transcribeWithDeepgram } from '@/lib/transcribe/deepgram'
import { isReplicateAvailable, transcribeWithReplicate } from '@/lib/transcribe/replicate'
import { WHISPER_PROMPT } from '@/lib/transcribe/prompt'

// Internal signal: Groq is rate-limited (429) and the request should be
// enqueued for the worker to retry, instead of paying for the OpenAI fallback.
// Lives only in this file — the route catches it and returns a 202 with jobId.
class GroqQuotaExhaustedError extends Error {
  constructor(originalErr) {
    super('groq quota exhausted — enqueue for worker')
    this.name = 'GroqQuotaExhaustedError'
    this.originalErr = originalErr
  }
}

export const runtime = 'nodejs'
// 300s is the Pro plan ceiling. We need it because the OpenAI fallback path
// runs whisper-1 at ~1x realtime — a 25 MB file (up to ~26 min audio at low
// bitrate) does not fit in the previous 120s budget if Groq is unavailable.
// Groq itself finishes 25 MB in ~30s, so on the happy path we exit early
// anyway and the higher ceiling only costs compute when fallback actually
// kicks in.
export const maxDuration = 300

// ── Transcription providers ─────────────────────────────────────────────────
// Primary: Groq (whisper-large-v3, ~$0.00185/min vs OpenAI's $0.006/min, and
// free tier covers our current traffic). Schema-compatible with OpenAI Whisper:
// same `verbose_json` response with `segments[]`, `language`, `text` — so the
// rest of the pipeline (.srt / .txt+timestamps / paragraph splitting) keeps
// working unchanged.
//
// Fallback chain when Groq has a real outage (5xx/network — NOT 429 which
// enqueues instead, see GroqQuotaExhaustedError):
//   1. Replicate insanely-fast-whisper (~$0.04/h). Cheapest paid option.
//      Same whisper-large-v3 as Groq, just on different GPU. Cold start
//      10-20s acceptable for sync route (we have a 300s budget anyway).
//   2. Deepgram Nova-3 (~$0.26/h, $200 free credit). Safety net if
//      Replicate is down. No size cap.
//   3. OpenAI Whisper-1 ($0.36/h). Last resort, capped at FALLBACK_MAX_BYTES.
//
// OpenAI key is also kept because /api/summarize still uses gpt-4o-mini.
const groq = process.env.GROQ_API_KEY
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

// 10 MB cap applies to the OpenAI tier only. Deepgram has no cap because it's
// ~28% cheaper than OpenAI and the starter credit covers months at our scale.
// OpenAI Whisper-1 at $0.36/h × ~30 min on a 25 MB file = ~$0.18 per
// transcription, which adds up during a double-outage; the cap keeps the
// worst case bounded for files that can't be retried later.
const FALLBACK_MAX_BYTES = 10 * 1024 * 1024

async function transcribeAudio(file, language, { buffer, fileType, fileName } = {}) {
  const baseParams = {
    file,
    response_format: 'verbose_json',
    prompt: WHISPER_PROMPT,
    ...(language ? { language } : {}),
  }

  // Try Groq with one quick retry on transient errors. Groq's free-tier rate
  // limits include short per-minute windows; many 429s clear in a couple of
  // seconds. A retry before the (more expensive) OpenAI fallback catches the
  // common case where the bucket was momentarily empty rather than truly
  // exhausted. Hard errors (400 bad file, auth) skip the retry.
  if (groq) {
    let lastErr = null
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const result = await groq.audio.transcriptions.create({
          ...baseParams,
          model: 'whisper-large-v3',
        })
        // Tag provider so the route's INSERT can save real source name
        // instead of the hardcoded 'web'. Caller reads `_provider`.
        result._provider = 'groq'
        return result
      } catch (err) {
        lastErr = err
        if (err?.status === 400) throw err
        const isTransient =
          err?.status === 429 ||
          (err?.status >= 500 && err?.status < 600) ||
          !err?.status // network error / fetch failure
        if (attempt === 0 && isTransient) {
          await new Promise((r) => setTimeout(r, 3000))
          continue
        }
        break
      }
    }

    // Groq still failing after retry. Different strategy depending on why:
    //
    //   429 (quota / per-minute spike that didn't clear in 3s) →
    //     signal the caller to enqueue. The cron-driven worker will keep
    //     retrying Groq as capacity returns. Paid fallback is NOT used here
    //     because that's exactly the cost we're trying to avoid — the queue
    //     trades latency for $$$.
    //
    //   5xx / network / unknown →
    //     real Groq outage. Try the paid fallback chain:
    //       Replicate insanely-fast-whisper (cheapest, no size cap)
    //         ↓ on failure
    //       Deepgram Nova-3 (safety net, no size cap)
    //         ↓ on failure
    //       OpenAI Whisper-1 (capped at 10 MB so a long podcast doesn't
    //                         burn ~$0.20 on a single transcription)
    //
    //   Anything else → re-throw.
    if (lastErr?.status === 429) {
      throw new GroqQuotaExhaustedError(lastErr)
    }

    const fallbackErrors = []

    // Tier 2: Replicate (insanely-fast-whisper). Cheapest paid option at
    // ~$0.04/h audio. Passes the audio buffer (not URL) so Replicate hosts
    // a clean copy on their CDN — avoids ffmpeg confusion on iOS Voice Memo
    // URLs that end in ".mp4" despite being AAC-in-MP4.
    if (isReplicateAvailable() && buffer) {
      console.warn(
        `[transcribe] fallback: groq ${lastErr?.status ?? 'error'} → replicate`,
        { code: lastErr?.code, message: lastErr?.message }
      )
      try {
        const result = await transcribeWithReplicate({ buffer, fileType, fileName, language })
        console.warn('[transcribe] fallback: replicate succeeded')
        result._provider = 'replicate'
        return result
      } catch (repErr) {
        console.warn(
          `[transcribe] fallback: replicate failed ${repErr?.status ?? 'error'}`,
          { message: repErr?.message }
        )
        fallbackErrors.push({ provider: 'replicate', err: repErr })
      }
    }

    // Tier 3: Deepgram. Safety net if Replicate is down. Nova-3 handles a
    // 25 MB file in ~$0.06. No size cap.
    if (isDeepgramAvailable() && buffer) {
      console.warn(
        `[transcribe] fallback: → deepgram (replicate unavailable or failed)`,
        { groqStatus: lastErr?.status }
      )
      try {
        const result = await transcribeWithDeepgram(buffer, { fileType, language })
        console.warn('[transcribe] fallback: deepgram succeeded')
        result._provider = 'deepgram'
        return result
      } catch (dgErr) {
        console.warn(
          `[transcribe] fallback: deepgram failed ${dgErr?.status ?? 'error'}`,
          { message: dgErr?.message }
        )
        fallbackErrors.push({ provider: 'deepgram', err: dgErr })
      }
    }

    // Tier 4: OpenAI. Capped at 10 MB to bound worst-case spend during a
    // triple-outage day. If file is too large or OpenAI isn't configured,
    // we re-throw the last error we have.
    if (openai && file.size <= FALLBACK_MAX_BYTES) {
      console.warn(
        `[transcribe] fallback: → openai (replicate+deepgram unavailable or failed)`,
        { groqStatus: lastErr?.status }
      )
      try {
        const result = await openai.audio.transcriptions.create({
          ...baseParams,
          model: 'whisper-1',
        })
        console.warn('[transcribe] fallback: openai succeeded')
        result._provider = 'openai'
        return result
      } catch (oaErr) {
        console.error(
          `[transcribe] fallback: openai also failed ${oaErr?.status ?? 'error'}`,
          { code: oaErr?.code, message: oaErr?.message }
        )
        fallbackErrors.push({ provider: 'openai', err: oaErr })
      }
    } else if (file.size > FALLBACK_MAX_BYTES && !isReplicateAvailable() && !isDeepgramAvailable()) {
      // Log entry: no fallback eligible at all (no Replicate, no Deepgram,
      // file too big for OpenAI). Useful counter for capacity-planning.
      console.warn(
        `[transcribe] fallback: skipped (file ${file.size} bytes > ${FALLBACK_MAX_BYTES}, no replicate/deepgram), groq ${lastErr?.status ?? 'error'}`,
        { code: lastErr?.code, message: lastErr?.message }
      )
    }

    // Surface the most specific error we collected. Prefer the last
    // fallback's error (more recent context); fall back to Groq's.
    const last = fallbackErrors[fallbackErrors.length - 1]
    throw last ? last.err : lastErr
  }

  // No Groq configured — go straight to OpenAI.
  if (!openai) {
    throw new Error('No transcription provider configured (GROQ_API_KEY or OPENAI_API_KEY).')
  }
  const result = await openai.audio.transcriptions.create({
    ...baseParams,
    model: 'whisper-1',
  })
  result._provider = 'openai'
  return result
}

// ── Rate limiter (optional — only activates if Upstash env vars are set) ────
// Two-tier policy (2026-05-19 — tightened from previous 3/h IP-only anon):
//
//   Anonymous (fingerprint) — 3 transcriptions / 24h, duration ≤ 30 min
//   Authenticated user_id   — 5 / h + 7 / day,        duration ≤ 60 min
//
// Daily anon cap matches TurboScribe's free-tier pattern and turns the limit
// into a reason to register rather than a reason to leave the site (the user
// gets 24h to come back vs. a quick refresh). The duration caps protect
// against accidental cost blow-ups on long-form recordings — a 25 MB file at
// ~32 kbps mono speech can fit ~108 min of audio, so the byte cap alone
// doesn't bound spend per request.
//
// Anonymous key is a hash of IP + User-Agent + country, not raw IP. Reasons:
//   - Reduces collateral throttling behind shared NATs / corporate proxies:
//     two users on the same office IP get separate buckets if their browsers
//     differ at all (which they almost always do).
//   - Same UA across different IPs (e.g. mobile-hopping between WiFi and
//     cellular) still gets separate buckets — the IP component dominates,
//     which is the desired behaviour for a daily cap.
//   - md5 is fine here — not a security boundary, just a stable key.
//
// Both limiters share the same Redis; prefixes (`anon:d`, `auth:h`, `auth:d`)
// keep them in separate slidingWindow buckets. The `anon:d` prefix is NEW
// vs. the previous `anon` so old hourly tokens don't leak into the new
// daily bucket on first deploy — fresh start for all anonymous users.
let rateLimiters = null

async function getRateLimiters() {
  if (rateLimiters) return rateLimiters
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

  rateLimiters = {
    anon: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:anon:d',
    }),
    // Authenticated users get TWO limiters checked in series. Hourly catches
    // burst usage (e.g. a podcaster batching files); daily is the actual
    // cost guardrail. Daily 7/user × 26 min audio × $0.111/h Groq = ~$0.34
    // worst case per user per day.
    authHourly: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      analytics: true,
      prefix: 'mictoo:rl:auth:h',
    }),
    authDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(7, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:auth:d',
    }),
  }
  return rateLimiters
}

// Anonymous fingerprint = md5(IP | User-Agent | country). See the rate-limiter
// comment above for the rationale. Falls back gracefully if any header is
// missing — '127.0.0.1' for local dev is fine because the limiter only
// activates when Upstash env is configured (i.e. not locally).
function getAnonKey(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  const ua = request.headers.get('user-agent') || ''
  const region =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('x-vercel-ip-region') ||
    ''
  return createHash('md5').update(`${ip}|${ua}|${region}`).digest('hex')
}

// Only accept blob URLs from our own Vercel Blob storage — prevents the
// route from being abused as an SSRF/proxy to fetch arbitrary URLs.
function isOurBlobUrl(url) {
  try {
    const parsed = new URL(url)
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname.endsWith('.public.blob.vercel-storage.com')
    )
  } catch {
    return false
  }
}

const MAX_BYTES = 25 * 1024 * 1024 // OpenAI Whisper hard cap

export async function POST(request) {
  let blobUrl = null
  // When we enqueue a job for the worker, the worker needs the blob to still
  // exist later — so suppress the finally-block deletion in that branch.
  // The hourly cleanup-blobs cron is the safety net if the worker never picks
  // the job up.
  let shouldDeleteBlob = true

  try {
    // ── Rate limit ──────────────────────────────────────────────────────────
    // ── Auth check ──────────────────────────────────────────────────────────
    // We look up the session here purely to decide which rate-limit bucket
    // to apply (anon by IP vs registered by user_id). The user object is
    // also useful later when we save transcripts to history (Phase B).
    let authUser = null
    try {
      const supabase = createSupabaseServerClient()
      const { data } = await supabase.auth.getUser()
      authUser = data?.user ?? null
    } catch {
      // Auth lookup failed — treat as anonymous. We don't want a Supabase
      // hiccup to break the transcription flow.
    }

    // ── Rate limit (different bucket for anon vs authed) ────────────────────
    const limiters = await getRateLimiters()
    if (limiters) {
      // Helper: convert ms-to-reset into a human-friendly "~Xh Ym" or "~N min".
      const friendlyReset = (resetMs) => {
        const ms = Math.max(0, resetMs - Date.now())
        const minutes = Math.ceil(ms / 60000)
        if (minutes < 60) return `~${minutes} min`
        const h = Math.floor(minutes / 60)
        const m = minutes % 60
        return m ? `~${h}h ${m}m` : `~${h}h`
      }

      if (authUser) {
        // Daily cap first — when it's hit, no point also charging the hourly
        // bucket. (Cheap double-check; the order also avoids an awkward case
        // where a user hits hourly while already over daily.)
        const d = await limiters.authDaily.limit(authUser.id)
        if (!d.success) {
          return NextResponse.json(
            {
              error: `Daily limit reached. You've used your ${d.limit} transcriptions for today. Resets in ${friendlyReset(d.reset)}.`,
              signInHelps: false,
            },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': String(d.limit),
                'X-RateLimit-Remaining': String(d.remaining),
                'X-RateLimit-Reset': String(d.reset),
                'X-RateLimit-Scope': 'day',
              },
            }
          )
        }
        const h = await limiters.authHourly.limit(authUser.id)
        if (!h.success) {
          return NextResponse.json(
            {
              error: `Too many requests this hour. You've used ${h.limit} transcriptions. Try again in ${friendlyReset(h.reset)}.`,
              signInHelps: false,
            },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': String(h.limit),
                'X-RateLimit-Remaining': String(h.remaining),
                'X-RateLimit-Reset': String(h.reset),
                'X-RateLimit-Scope': 'hour',
              },
            }
          )
        }
      } else {
        const a = await limiters.anon.limit(getAnonKey(request))
        if (!a.success) {
          // Daily cap message stays short and growth-oriented — the previous
          // "Sign in for higher limits, or try again in N hours" was too
          // negotiable. "Sign up to keep going free" is the action we want.
          return NextResponse.json(
            {
              error: `You've used ${a.limit} free transcripts today. Sign up to keep going free.`,
              signInHelps: true,
            },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': String(a.limit),
                'X-RateLimit-Remaining': String(a.remaining),
                'X-RateLimit-Reset': String(a.reset),
                'X-RateLimit-Scope': 'day',
              },
            }
          )
        }
      }
    }

    // ── Parse JSON body ─────────────────────────────────────────────────────
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    blobUrl = body?.blobUrl
    const language = body?.language || undefined // 'en'/'es'/...; undefined = auto-detect
    const fileName = body?.fileName || 'audio.mp3'
    const fileType = body?.fileType || 'audio/mpeg'
    const fileSize = Number(body?.fileSize) || 0

    if (!blobUrl || typeof blobUrl !== 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }

    if (!isOurBlobUrl(blobUrl)) {
      // Don't echo the URL back — keep error generic to avoid signaling
      // what would be a valid host pattern to a fuzzer.
      return NextResponse.json({ error: 'Invalid file reference.' }, { status: 400 })
    }

    if (fileSize > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }

    // ── Fetch blob ──────────────────────────────────────────────────────────
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      console.error('[transcribe] blob fetch failed', blobRes.status, blobUrl)
      return NextResponse.json(
        { error: 'Could not retrieve the uploaded file. Please try again.' },
        { status: 500 }
      )
    }

    const arrayBuffer = await blobRes.arrayBuffer()
    if (arrayBuffer.byteLength > MAX_BYTES) {
      // Defense in depth — Vercel Blob already enforces this at upload time,
      // but a manual upload via a hand-issued token could in theory dodge it.
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }
    const buffer = Buffer.from(arrayBuffer)

    // ── Duration probe (safety net for direct API calls) ───────────────────
    // The 25 MB byte cap doesn't bound spend per request: 25 MB at low-bitrate
    // speech (~32 kbps mono) is ~108 min of audio, which on the OpenAI
    // fallback path costs ~$0.65 for one transcription. The client also
    // probes duration before upload (see UploadZone.processFile) so users
    // see a friendly message early — this server-side check is the safety
    // net for direct API calls and clients with disabled JS.
    //
    // Anon: 30 min cap. Auth: 60 min cap (the "register for more" payoff).
    // If music-metadata can't read the file (corrupt container, exotic
    // codec) we let it through — the transcription will surface a clearer
    // error than "could not determine duration" would.
    const ANON_MAX_DURATION_SEC = 30 * 60
    const AUTH_MAX_DURATION_SEC = 60 * 60
    const maxDurationSec = authUser ? AUTH_MAX_DURATION_SEC : ANON_MAX_DURATION_SEC
    let probedDurationSec = null
    // Container + codec also captured for success-path logging. Pattern we
    // want to track over time: raw ADTS-AAC files (container='ADTS') making
    // it past Groq into Replicate where ffmpeg trips on the .m4a-extension
    // workaround. If the share of ADTS via fallback grows, the cost-benefit
    // of an upfront ADTS reject changes — but right now Deepgram covers
    // those silently so no preemptive reject (see 2026-05-19 logs analysis).
    let probedContainer = null
    let probedCodec = null
    try {
      const mm = await import('music-metadata')
      // music-metadata v10 uses an options object: { mimeType, size, duration }
      // — the older (buf, mimeType) positional form was removed.
      const meta = await mm.parseBuffer(buffer, {
        mimeType: fileType,
        size: buffer.length,
        duration: true,
      })
      probedDurationSec = meta?.format?.duration ?? null
      probedContainer = meta?.format?.container ?? null
      probedCodec = meta?.format?.codec ?? null
    } catch (probeErr) {
      console.warn(
        `[transcribe] duration probe failed mime=${fileType} bytes=${fileSize}`,
        { message: probeErr?.message }
      )
    }
    if (probedDurationSec != null && probedDurationSec > maxDurationSec) {
      const fileMin = Math.round(probedDurationSec / 60)
      const maxMin = Math.floor(maxDurationSec / 60)
      console.log(
        `[transcribe] reject duration=${probedDurationSec.toFixed(1)}s max=${maxDurationSec}s auth=${authUser ? 'y' : 'n'} bytes=${fileSize}`
      )
      return NextResponse.json(
        {
          error: authUser
            ? `This file is ${fileMin} min long. The limit is ${maxMin} min — please split the recording into shorter pieces and upload them separately.`
            : `This file is ${fileMin} min long. Anonymous limit is ${maxMin} min. Sign up to transcribe files up to 60 min, or trim the recording first.`,
          signInHelps: !authUser,
          // Hint to the client which guide link to surface. The client also
          // sets this directly for its preflight check; the server echo
          // covers direct-API callers that bypassed the browser preflight.
          helpType: 'split',
        },
        { status: 413 }
      )
    }

    // Whisper APIs (both Groq and OpenAI) detect the file format from the
    // filename extension and compare it case-sensitively to a lowercase
    // allowlist (mp3, mp4, m4a, …). iPhone exports often use uppercase
    // extensions like "0516.MP3" which get rejected as "Invalid file format"
    // even though the MIME type and bytes are perfectly valid. Lowercase the
    // extension defensively so the format check sees what it expects.
    //
    // Some clients also strip the extension entirely — Android share-sheets
    // and some iOS share targets hand the file across as just "Dogs 6" or
    // "0516" with no dot. Whisper then rejects with "file must be one of
    // the following types: [flac mp3 mp4 mpeg mpg a m4a ogg opus wav webm]"
    // even though the MIME type is correct. If we recognise the MIME, append
    // the appropriate extension so the format check passes — the bytes are
    // what they always were, only the filename was misleading.
    const MIME_TO_EXT = {
      'audio/mpeg':     '.mp3',
      'audio/mp3':      '.mp3',
      'audio/mp4':      '.m4a',
      'audio/m4a':      '.m4a',
      'audio/x-m4a':    '.m4a',
      'audio/aac':      '.aac',
      'audio/x-aac':    '.aac',
      'audio/wav':      '.wav',
      'audio/wave':     '.wav',
      'audio/x-wav':    '.wav',
      'audio/ogg':      '.ogg',
      'audio/opus':     '.opus',
      'audio/webm':     '.webm',
      'audio/flac':     '.flac',
      'audio/x-flac':   '.flac',
      'video/mp4':      '.mp4',
      'video/webm':     '.webm',
      'video/quicktime':'.mov',
      'video/3gpp':     '.3gp',
    }
    const hasExt = /\.[A-Za-z0-9]{2,5}$/.test(fileName)
    const mimeExt = MIME_TO_EXT[(fileType || '').toLowerCase()] || ''
    const fileNameWithExt = !hasExt && mimeExt ? `${fileName}${mimeExt}` : fileName
    const safeName = fileNameWithExt.replace(/\.([A-Za-z0-9]+)$/, (_, ext) => `.${ext.toLowerCase()}`)

    // Whisper doesn't list "aac" in its supported extensions, but most files
    // that arrive with .aac (Android recorders, iOS share-sheets) are actually
    // MP4-AAC streams — same codec as .m4a, different filename. Renaming the
    // upload to .m4a is enough to clear Whisper's extension check, and the
    // decoder happily reads the bytes. Pure ADTS-AAC (raw stream) will still
    // fail at decode; we surface an AAC-specific friendly error for that case
    // below.
    //
    // Similar story for .opus: Groq accepts the extension, but OpenAI (our
    // fallback provider) doesn't list "opus" — so a Groq 429/5xx that pushes
    // us to OpenAI would otherwise return "format not supported" for a perfectly
    // good WhatsApp/Telegram voice note. The .opus files those apps produce
    // are Ogg-Opus (Ogg container + Opus codec, MIME audio/ogg), so renaming
    // to .ogg makes both providers happy and the decoder reads the bytes
    // unchanged.
    //
    // .mov / .3gp / .qt — iPhone "video" containers and old mobile video.
    // These are almost always MP4-compatible bytes (MOV is literally MP4 with
    // QuickTime-flavoured metadata, .3gp is a 3GPP profile of MP4). Whisper's
    // extension allowlist has mp4 but not these, so a one-character rename
    // unlocks them without re-encoding. Pure-QuickTime containers with codecs
    // Whisper can't decode will still fail at decode and surface the generic
    // unsupported-format error.
    // `audio/vnd.dlna.adts` is the explicit "this is raw ADTS AAC" MIME
    // type used by some Android voice recorders and DLNA streamers. It's a
    // strong signal that no amount of extension renaming will help — the
    // bytes are not in an MP4 container, so Whisper's decoder will reject
    // them after passing the file-extension check. The client should reject
    // these uploads upfront (see UploadZone.processFile), but we surface a
    // specific error here too in case someone hits the API directly.
    const isAdtsAac = /^audio\/vnd\.dlna\.adts$/i.test(fileType || '')
    const isAac = safeName.endsWith('.aac') || /^audio\/(x-)?aac$/i.test(fileType || '')
    const isOpus = safeName.endsWith('.opus') || /^audio\/opus$/i.test(fileType || '')
    // .oga = Ogg-audio extension used by Telegram Desktop voice memo exports
    // ("Audio de Ara.oga", "Zuzik posiela zvuk.oga"). MIME is correct
    // (audio/ogg) and the bytes ARE valid Ogg-Opus, but Whisper's filename-
    // extension allowlist only has "ogg", not "oga". A one-char rename clears
    // the extension check; the decoder reads the bytes unchanged.
    const isOga = safeName.endsWith('.oga')
    const isMov =
      safeName.endsWith('.mov') ||
      safeName.endsWith('.qt') ||
      safeName.endsWith('.3gp') ||
      /^video\/(quicktime|3gpp)$/i.test(fileType || '')
    let whisperName = safeName
    if (isAac) whisperName = whisperName.replace(/\.aac$/, '.m4a')
    else if (isOpus) whisperName = whisperName.replace(/\.opus$/, '.ogg')
    else if (isOga) whisperName = whisperName.replace(/\.oga$/, '.ogg')
    else if (isMov) whisperName = whisperName.replace(/\.(mov|qt|3gp)$/, '.mp4')
    const whisperFile = new File([buffer], whisperName, { type: fileType })

    // ── Transcribe (Groq → Replicate → Deepgram → OpenAI fallback chain) ──
    try {
      const transcription = await transcribeAudio(whisperFile, language, { buffer, fileType, fileName })

      // Pull common shape pieces once so they're available to both the
      // success-path log line and the history INSERT below.
      const segs = transcription.segments ?? []
      const durationSec = segs.length ? segs[segs.length - 1]?.end ?? null : null

      // Success-path structured log. Emits one parseable line per successful
      // transcription so Vercel logs can be sliced by provider/format/duration
      // for cost-vs-input analysis (e.g. "which mime types are dominating
      // Deepgram fallback spend?"). Grep with `[transcribe] ok` to count.
      // Stays as console.log (not warn/error) so it doesn't pollute the
      // error feed — it's a normal-success signal.
      const extMatch = whisperName.match(/\.([A-Za-z0-9]+)$/)
      const ext = extMatch ? extMatch[1] : ''
      // lang_raw vs lang: we want to distinguish "Whisper returned the string
      // 'null' or empty" from "we lowercased a real value". The 2026-05-22 log
      // analysis flagged 25.7% null-lang share — without the raw value we can't
      // tell if Whisper is returning literal null, an empty string, "und", or
      // a value that's getting mangled by lowercase. Quote the raw value so
      // empty-string vs missing is unambiguous in the log line.
      const langRaw = transcription.language
      const langRawStr =
        langRaw === undefined ? 'undef'
        : langRaw === null      ? 'null'
        : typeof langRaw === 'string' ? `"${langRaw}"`
        : String(langRaw)
      console.log(
        `[transcribe] ok provider=${transcription._provider || 'unknown'} container=${probedContainer || '?'} codec=${probedCodec || '?'} ext=${ext} mime=${fileType} bytes=${fileSize} duration_sec=${durationSec ?? 'null'} lang=${transcription.language?.toLowerCase() ?? 'null'} lang_raw=${langRawStr} auth=${authUser ? 'y' : 'n'}`
      )

      // Fire-and-forget counter bump. Doesn't block response. Safe if Upstash absent.
      bumpTranscriptionCount()

      // Save to history for authenticated users (anonymous transcripts are
      // never persisted — preserves the "files immediately discarded" promise).
      // We need the inserted row's id so the client can later attach an AI
      // summary to the same row when /api/summarize completes, so we DO await
      // this insert (in contrast to the fire-and-forget pattern used elsewhere).
      // A DB error logs but does NOT fail the user's transcription response.
      let transcriptId = null
      if (authUser) {
        try {
          const supabase = createSupabaseServerClient()
          const { data, error } = await supabase
            .from('transcripts')
            .insert({
              user_id: authUser.id,
              file_name: fileName,
              file_size: fileSize,
              file_type: fileType,
              // Lowercase to avoid 'indonesian' vs 'Indonesian' dupes in DB —
              // Whisper sometimes returns Title Case, sometimes lowercase.
              language: transcription.language?.toLowerCase() ?? null,
              text: transcription.text ?? '',
              segments: segs,
              duration_seconds: durationSec,
              // Real provider name (groq/replicate/deepgram/openai) tagged
              // on the transcription object by transcribeAudio() — see _provider
              // assignments there. Falls back to 'web' for safety if missing.
              source: transcription._provider || 'web',
            })
            .select('id')
            .single()
          if (error) {
            console.error('[transcribe] save to history failed', error.message)
          } else if (data) {
            transcriptId = data.id
          }
        } catch (err) {
          console.error('[transcribe] save to history threw', err?.message)
        }
      }

      return NextResponse.json({
        text: transcription.text,
        segments: transcription.segments ?? [],
        // Spoken language as detected by Whisper (e.g. "ukrainian", "english").
        // Used downstream by /api/summarize so the summary is written in the
        // same language as the recording, not the UI locale. Lowercased to
        // match the worker's setJobResult and the DB column — keeps the
        // contract uniform whether transcription ran sync or queued.
        language: transcription.language?.toLowerCase() ?? null,
        // ID of the row in `public.transcripts` for authed users; null for
        // anonymous. Client uses it to attach the AI summary back to the
        // same row when /api/summarize completes.
        transcriptId,
      })
    } catch (err) {
      // Groq is rate-limited / quota-exhausted (after our inline retry didn't
      // clear it). Enqueue the job and return a 202 with a jobId so the client
      // can poll for the result. The cron-driven worker will keep retrying
      // Groq as capacity returns — much cheaper than the OpenAI fallback.
      if (err instanceof GroqQuotaExhaustedError) {
        if (!(await isQueueAvailable())) {
          // Without Upstash we have nowhere to queue — surface 503 so the user
          // can retry rather than silently failing.
          console.error('[transcribe] groq 429 and queue unavailable')
          return NextResponse.json(
            { error: 'Service is unusually busy right now. Please try again in a few minutes.' },
            { status: 503 }
          )
        }
        try {
          const jobId = await enqueueJob({
            blobUrl,
            language: language || '',
            fileName,
            fileType,
            fileSize,
            // Captured so the worker can save the finished transcript to
            // this user's history (Phase B). Anonymous jobs leave it empty.
            userId: authUser?.id || '',
          })
          shouldDeleteBlob = false // worker needs it later
          console.warn(`[transcribe] enqueued jobId=${jobId} (groq 429)`)
          return NextResponse.json(
            { jobId, status: 'queued' },
            { status: 202 }
          )
        } catch (queueErr) {
          if (queueErr instanceof UserQueueFullError) {
            console.warn(`[transcribe] user ${authUser?.id} at queue depth ${queueErr.currentDepth}/${queueErr.limit}`)
            return NextResponse.json(
              {
                error: `You already have ${queueErr.currentDepth} transcripts being processed. Wait for one to finish before uploading more.`,
                code: 'user_queue_full',
              },
              { status: 429 }
            )
          }
          if (queueErr instanceof QueueFullError) {
            console.warn(`[transcribe] queue full (${queueErr.currentLength} jobs), rejecting`)
            return NextResponse.json(
              { error: 'Service is at capacity right now. Please try again in 10–15 minutes.' },
              { status: 503 }
            )
          }
          console.error('[transcribe] enqueue failed', queueErr?.message)
          return NextResponse.json(
            { error: 'Service is unusually busy right now. Please try again in a few minutes.' },
            { status: 503 }
          )
        }
      }

      // Inner catch — file metadata is available for richer logs.
      // Helps us see which formats/codecs actually fail in production.
      const fileMeta = { name: fileName, type: fileType, size: fileSize }
      console.error('[transcribe]', { ...fileMeta, status: err?.status, message: err?.message })

      // OpenAI returns 400 for unsupported codecs, empty audio, broken containers,
      // or audio-less video. Surface a friendly message instead of a 500. AAC
      // files that survived our extension-rename trick but still failed are
      // typically raw ADTS streams — point users to a conversion instead of
      // the generic "format unsupported" message.
      if (err?.status === 400) {
        // Three buckets of user-facing message:
        //   1. ADTS raw stream (most often from Android recorders)
        //      → explicit "convert via VLC" message
        //   2. AAC that survived rename but still failed
        //      → general AAC conversion advice
        //   3. Anything else
        //      → generic format-not-supported
        const errorMessage = isAdtsAac
          ? "This file is in raw ADTS AAC format (common from Android voice recorders) which Whisper can't read directly. Open it in VLC and use Media → Convert / Save → MP3, then upload the converted file."
          : isAac
            ? "This AAC recording uses a codec Whisper can't read directly. Convert it to MP3 or M4A first — QuickTime, Audacity, or any online audio converter can do this in seconds."
            : "This file format or codec is not supported. Try exporting as MP3 or M4A, or extract the audio track if the file is video-only."
        return NextResponse.json(
          { error: errorMessage },
          { status: 400 }
        )
      }

      throw err  // re-throw for the outer catch to handle 401/429/etc.
    }
  } catch (err) {
    console.error('[transcribe]', err)

    if (err?.status === 401) {
      return NextResponse.json({ error: 'Invalid API key.' }, { status: 500 })
    }
    if (err?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: err.message || 'Transcription failed. Please try again.' },
      { status: 500 }
    )
  } finally {
    // Clean up the uploaded blob in every case — success, OpenAI error,
    // rate limit, even unexpected crashes — so we never leak storage.
    // Exception: if the request was enqueued for the worker, the worker needs
    // the blob to still exist; it deletes after processing. The hourly
    // cleanup-blobs cron is the safety net for blobs whose worker never runs.
    if (blobUrl && shouldDeleteBlob) {
      del(blobUrl).catch((err) => {
        console.error('[transcribe] blob delete failed', err?.message)
      })
    }
  }
}

// ── Reject non-POST methods cleanly with 405 ─────────────────────────────────
// Bots and crawlers regularly hit /api/transcribe with GET/HEAD; without these
// explicit handlers Vercel sometimes rejects them at the edge with 413, which
// pollutes the logs. Returning 405 is the correct HTTP semantic and is cheap.

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use POST with JSON { blobUrl, language }.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
