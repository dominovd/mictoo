import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import OpenAI from 'openai'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
export const maxDuration = 60

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Rate limits: identical pattern + identical caps to /api/transcribe. We
// reuse the same anon/auth-hourly/auth-daily structure (Upstash sliding
// window) but with a distinct prefix so transcribe and translate quotas
// don't share a bucket — a user who burned their 5 transcribes for the
// hour can still translate the ones they have, and vice versa.
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
      prefix: 'mictoo:rl:tr:anon:d',
    }),
    authHourly: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      analytics: true,
      prefix: 'mictoo:rl:tr:auth:h',
    }),
    authDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(7, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:tr:auth:d',
    }),
  }
  return rateLimiters
}

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

const LANG_NAMES = {
  en: 'English', fr: 'French', de: 'German', es: 'Spanish', ru: 'Russian',
  uk: 'Ukrainian', pt: 'Portuguese', it: 'Italian', nl: 'Dutch', pl: 'Polish',
  tr: 'Turkish', ja: 'Japanese', ko: 'Korean', zh: 'Chinese', ar: 'Arabic',
  hi: 'Hindi', cs: 'Czech', sv: 'Swedish', fi: 'Finnish', no: 'Norwegian',
  da: 'Danish', he: 'Hebrew', id: 'Indonesian', th: 'Thai', vi: 'Vietnamese',
  el: 'Greek', hu: 'Hungarian', ro: 'Romanian', ms: 'Malay',
}

// Hard cap to keep one request well under the model's context window AND
// under the maxDuration budget. ~32k characters ≈ 5000-8000 tokens of typical
// transcript text, which translates comfortably in under 30s.
const MAX_CHARS = 32_000
// Per-segment text cap — guards against a single absurdly-long segment
// derailing the JSON shape. Segments are typically 5-20 words.
const MAX_SEG_TEXT = 2000

export async function POST(request) {
  try {
    // ── Auth ──────────────────────────────────────────────────────────────
    let authUser = null
    try {
      const supabase = createSupabaseServerClient()
      const { data } = await supabase.auth.getUser()
      authUser = data?.user ?? null
    } catch {
      // Treat as anonymous on lookup failure.
    }

    // ── Rate limit ────────────────────────────────────────────────────────
    const limiters = await getRateLimiters()
    if (limiters) {
      const friendlyReset = (resetMs) => {
        const ms = Math.max(0, resetMs - Date.now())
        const minutes = Math.ceil(ms / 60000)
        if (minutes < 60) return `~${minutes} min`
        const h = Math.floor(minutes / 60)
        const m = minutes % 60
        return m ? `~${h}h ${m}m` : `~${h}h`
      }
      if (authUser) {
        const d = await limiters.authDaily.limit(authUser.id)
        if (!d.success) {
          return NextResponse.json(
            {
              error: `Daily translation limit reached. You've used your ${d.limit} translations for today. Resets in ${friendlyReset(d.reset)}.`,
              signInHelps: false,
            },
            { status: 429 }
          )
        }
        const h = await limiters.authHourly.limit(authUser.id)
        if (!h.success) {
          return NextResponse.json(
            {
              error: `Too many translations this hour. You've used ${h.limit}. Try again in ${friendlyReset(h.reset)}.`,
              signInHelps: false,
            },
            { status: 429 }
          )
        }
      } else {
        const a = await limiters.anon.limit(getAnonKey(request))
        if (!a.success) {
          return NextResponse.json(
            {
              error: `You've used ${a.limit} free translations today. Sign up to keep going free.`,
              signInHelps: true,
            },
            { status: 429 }
          )
        }
      }
    }

    // ── Parse body ────────────────────────────────────────────────────────
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const segments = Array.isArray(body?.segments) ? body.segments : null
    const targetLangCode = typeof body?.targetLang === 'string' ? body.targetLang.toLowerCase() : null
    const sourceLangRaw = typeof body?.sourceLang === 'string' ? body.sourceLang.toLowerCase() : null

    if (!segments || !segments.length) {
      return NextResponse.json({ error: 'No segments to translate.' }, { status: 400 })
    }
    if (!targetLangCode || !LANG_NAMES[targetLangCode]) {
      return NextResponse.json({ error: 'Unknown or missing target language.' }, { status: 400 })
    }

    // Sanitize segments and enforce the per-request character cap. We trim
    // each text, truncate absurdly-long ones, and abort if the total exceeds
    // MAX_CHARS so we don't time out / blow the token budget mid-translation.
    const cleaned = []
    let totalChars = 0
    for (const seg of segments) {
      const text = typeof seg?.text === 'string' ? seg.text.trim() : ''
      if (!text) continue
      const truncated = text.length > MAX_SEG_TEXT ? text.slice(0, MAX_SEG_TEXT) : text
      totalChars += truncated.length
      if (totalChars > MAX_CHARS) {
        return NextResponse.json(
          { error: `Transcript is too long to translate in one pass (${totalChars} chars, max ${MAX_CHARS}). Split the file into shorter parts and translate each.` },
          { status: 413 }
        )
      }
      cleaned.push({
        i: cleaned.length,
        start: Number(seg.start) || 0,
        end: Number(seg.end) || 0,
        text: truncated,
      })
    }
    if (!cleaned.length) {
      return NextResponse.json({ error: 'No translatable text in segments.' }, { status: 400 })
    }

    const targetName = LANG_NAMES[targetLangCode]
    const sourceName = sourceLangRaw && LANG_NAMES[sourceLangRaw]
      ? LANG_NAMES[sourceLangRaw]
      : 'the source language'

    // Build a single JSON-mode prompt. We pass segments as an indexed array
    // and require the model to return them in the same order with `i` and
    // translated `text`. Timing fields (start/end) are reassembled from the
    // original on our side — no need to ask the model to echo them.
    const payload = cleaned.map(s => ({ i: s.i, text: s.text }))
    const prompt = `Translate the following transcript segments from ${sourceName} to ${targetName}.

Rules:
- Translate the text content faithfully but naturally; do not paraphrase or summarize.
- Preserve the segmentation: return exactly one translated entry per input entry, keyed by the same "i" index.
- Do not merge or split segments. Do not add commentary, prefixes, or quotation marks.
- For proper nouns (names, brands, product names, place names), keep the original spelling.
- If a segment is too short to translate meaningfully (e.g. a single filler word), return the closest equivalent in ${targetName}.

Return strictly valid JSON of shape:
{ "segments": [ { "i": 0, "text": "..." }, { "i": 1, "text": "..." }, ... ] }

Input segments:
${JSON.stringify(payload)}`

    let completion
    try {
      completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: `You are a precise translator that outputs only valid JSON. You translate transcript segments into ${targetName} while preserving structure and timing.` },
          { role: 'user', content: prompt },
        ],
        temperature: 0.2,
      })
    } catch (err) {
      console.error('translate openai error:', err?.message || err)
      return NextResponse.json({ error: 'Translation failed. Please retry.' }, { status: 502 })
    }

    const raw = completion.choices?.[0]?.message?.content ?? '{}'
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Translation response was not valid JSON.' }, { status: 502 })
    }
    const translated = Array.isArray(parsed?.segments) ? parsed.segments : null
    if (!translated || !translated.length) {
      return NextResponse.json({ error: 'Empty translation response.' }, { status: 502 })
    }

    // Reassemble segments with the original timings, indexed by `i`. If the
    // model dropped or reordered any entries, we keep what we got and fill
    // the rest with the original source text so the result is never blank.
    const byIdx = new Map()
    for (const t of translated) {
      if (typeof t?.i === 'number' && typeof t?.text === 'string') {
        byIdx.set(t.i, t.text.trim())
      }
    }
    const out = cleaned.map(s => ({
      start: s.start,
      end: s.end,
      text: byIdx.get(s.i) || s.text,
    }))

    return NextResponse.json({
      segments: out,
      targetLang: targetLangCode,
      targetLanguageName: targetName,
    })
  } catch (err) {
    console.error('translate route error:', err?.message || err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
