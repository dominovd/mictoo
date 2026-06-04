// Chat with transcript — RAG over the user's current transcript.
//
// Auth-only feature. Anonymous users see a locked teaser in the UI and
// never hit this endpoint. Sign-in is the friction we picked instead of
// per-IP quotas because chat is the cheapest thing on the OpenAI bill
// but the easiest thing to abuse — bots could pump infinite questions
// at us if we let them.
//
// Architecture: RAG with in-request embedding (no cache yet).
//   1. Receive segments + question + optional history from the client.
//   2. Chunk the transcript into ~500-token windows with 100-token
//      overlap to preserve cross-chunk context.
//   3. Embed the question + every chunk via text-embedding-3-small.
//   4. Cosine-similarity rank, take top-5 chunks.
//   5. Build a system+context+history+question message and call
//      gpt-4o-mini with a strict "answer from this transcript only,
//      cite timestamps as [HH:MM:SS]" prompt.
//   6. Return the answer string; the UI parses the [HH:MM:SS] tokens
//      and turns them into clickable seek links into the audio player.
//
// Cost notes (text-embedding-3-small @ $0.02/1M, gpt-4o-mini in/out):
//   - One question on a 30-min transcript ≈ $0.001 all-in.
//   - 20 questions/day cap × 30 days = ~$0.60/month per heaviest user.
//   - Re-embedding on every request is dumb but trivially cheap until
//     we have thousands of daily Chat users — then add a cache.

import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
export const maxDuration = 60

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Distinct prefix so chat usage doesn't share a quota with transcribe /
// translate / summarize buckets. A heavy chat session shouldn't drain
// the user's translate budget and vice versa.
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
    hourly: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, '1 h'),
      analytics: true,
      prefix: 'mictoo:rl:chat:auth:h',
    }),
    daily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:chat:auth:d',
    }),
  }
  return rateLimiters
}

function friendlyReset(resetMs) {
  const ms = Math.max(0, resetMs - Date.now())
  const minutes = Math.ceil(ms / 60000)
  if (minutes < 60) return `~${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m ? `~${h}h ${m}m` : `~${h}h`
}

// Approximate token count from character count. Good enough for chunk
// sizing — embeddings care about the actual tokenizer but we just need
// to keep each chunk under ~1000 tokens so retrieval stays focused.
const TOKENS_PER_CHAR = 0.25
const CHUNK_TARGET_TOKENS = 500
const CHUNK_OVERLAP_TOKENS = 100

// Hard cap on segments accepted. A 6-hour podcast might have 8000
// segments. We cap at 4000 — covers ~4 hours which is the realistic
// upper bound for our user base.
const MAX_SEGMENTS = 4000
// Hard cap on a single question to keep abuse cheap.
const MAX_QUESTION_CHARS = 1000
// Conversation history kept short — last 4 turns. Longer history bloats
// the prompt without improving answer quality on transcript-grounded
// questions.
const MAX_HISTORY_TURNS = 4

// Chunk segments into windows whose total character count approximates
// CHUNK_TARGET_TOKENS. Each chunk knows its first and last timestamps
// so the model can cite them. Overlap helps when a relevant fact spans
// the boundary between two chunks.
function buildChunks(segments) {
  const chunks = []
  const targetChars = CHUNK_TARGET_TOKENS / TOKENS_PER_CHAR
  const overlapChars = CHUNK_OVERLAP_TOKENS / TOKENS_PER_CHAR

  let current = { segments: [], chars: 0 }
  for (const seg of segments) {
    const segChars = (seg.text || '').length
    if (current.chars + segChars > targetChars && current.segments.length > 0) {
      chunks.push(current)
      // Build the next chunk starting with overlap from the end of the
      // previous one — preserves narrative continuity for the model.
      let backChars = 0
      const overlap = []
      for (let i = current.segments.length - 1; i >= 0 && backChars < overlapChars; i--) {
        overlap.unshift(current.segments[i])
        backChars += (current.segments[i].text || '').length
      }
      current = { segments: [...overlap], chars: backChars }
    }
    current.segments.push(seg)
    current.chars += segChars
  }
  if (current.segments.length > 0) chunks.push(current)
  return chunks.map(c => ({
    text: c.segments.map(s => s.text).join(' ').replace(/\s+/g, ' ').trim(),
    startSec: c.segments[0]?.start ?? 0,
    endSec: c.segments[c.segments.length - 1]?.start ?? 0,
  }))
}

function formatTimestamp(seconds) {
  const s = Math.floor(seconds || 0)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const ss = String(s % 60).padStart(2, '0')
  const mm = String(m % 60).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

// Standard cosine similarity on two equally-sized embedding vectors.
// Embeddings from text-embedding-3-small are already L2-normalized so
// a dot product would give the same answer, but cosine sim is robust
// to future model swaps.
function cosineSim(a, b) {
  let dot = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    na += a[i] * a[i]
    nb += b[i] * b[i]
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb))
}

export async function POST(request) {
  try {
    // ── Auth: this feature is paid-tier-style (sign-in required) even
    // though it's free. Anonymous → 401, UI shows locked state.
    let authUser = null
    try {
      const supabase = createSupabaseServerClient()
      const { data } = await supabase.auth.getUser()
      authUser = data?.user ?? null
    } catch { /* treat as anonymous */ }

    if (!authUser) {
      return NextResponse.json(
        { error: 'Sign in to chat with this transcript.', signInRequired: true },
        { status: 401 }
      )
    }

    // ── Rate limit (per user, two windows)
    const limiters = await getRateLimiters()
    if (limiters) {
      const d = await limiters.daily.limit(authUser.id)
      if (!d.success) {
        return NextResponse.json(
          { error: `Daily chat limit reached (${d.limit} questions). Resets in ${friendlyReset(d.reset)}.` },
          { status: 429 }
        )
      }
      const h = await limiters.hourly.limit(authUser.id)
      if (!h.success) {
        return NextResponse.json(
          { error: `Hourly chat limit reached (${h.limit} questions). Try again in ${friendlyReset(h.reset)}.` },
          { status: 429 }
        )
      }
    }

    // ── Parse body
    let body
    try { body = await request.json() } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const segments = Array.isArray(body?.segments) ? body.segments : null
    const question = typeof body?.question === 'string' ? body.question.trim() : ''
    const history = Array.isArray(body?.history) ? body.history : []

    if (!segments || segments.length === 0) {
      return NextResponse.json({ error: 'No transcript provided.' }, { status: 400 })
    }
    if (segments.length > MAX_SEGMENTS) {
      return NextResponse.json(
        { error: `Transcript too long (${segments.length} segments). Max ${MAX_SEGMENTS}.` },
        { status: 413 }
      )
    }
    if (!question) {
      return NextResponse.json({ error: 'Empty question.' }, { status: 400 })
    }
    if (question.length > MAX_QUESTION_CHARS) {
      return NextResponse.json({ error: `Question too long (max ${MAX_QUESTION_CHARS} chars).` }, { status: 413 })
    }

    // ── Chunk + embed
    const chunks = buildChunks(segments)
    if (chunks.length === 0) {
      return NextResponse.json({ error: 'Transcript is empty.' }, { status: 400 })
    }

    let embedResp
    try {
      embedResp = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: [question, ...chunks.map(c => c.text)],
      })
    } catch (err) {
      console.error('chat:embeddings failed', err?.message)
      return NextResponse.json({ error: 'Failed to process transcript.' }, { status: 502 })
    }

    const qEmb = embedResp.data[0].embedding
    const chunkEmbs = embedResp.data.slice(1).map(d => d.embedding)

    // ── Rank, take top 5
    const ranked = chunks.map((c, i) => ({ ...c, score: cosineSim(qEmb, chunkEmbs[i]) }))
    ranked.sort((a, b) => b.score - a.score)
    const top = ranked.slice(0, 5)

    // ── Build prompt
    const contextBlock = top
      .map(c => `[${formatTimestamp(c.startSec)} – ${formatTimestamp(c.endSec)}]\n${c.text}`)
      .join('\n\n---\n\n')

    const systemPrompt = `You are answering questions about a single video or audio transcript. Use ONLY the information in the provided excerpts below — never invent details or rely on outside knowledge. If the answer is not in the excerpts, say so directly.

When you cite something specific from the transcript, include the timestamp in [HH:MM:SS] or [MM:SS] format inline so the reader can jump to that moment. Be concise — 2-4 sentences for most questions. Use bullet points only when listing multiple distinct items.

Voice: conversational, like a knowledgeable colleague summarizing a podcast they just listened to. No corporate buzzwords. No em dashes in prose.`

    const historyMessages = history
      .slice(-MAX_HISTORY_TURNS * 2)
      .filter(t => t && typeof t.content === 'string' && t.content.trim())
      .map(t => ({
        role: t.role === 'assistant' ? 'assistant' : 'user',
        content: t.content,
      }))

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: `Transcript excerpts (most relevant first):\n\n${contextBlock}` },
      ...historyMessages,
      { role: 'user', content: question },
    ]

    let completion
    try {
      completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: 0.3,
        max_tokens: 600,
        messages,
      })
    } catch (err) {
      console.error('chat:completion failed', err?.message)
      return NextResponse.json({ error: 'Chat model temporarily unavailable.' }, { status: 502 })
    }

    const answer = completion?.choices?.[0]?.message?.content?.trim() || ''
    if (!answer) {
      return NextResponse.json({ error: 'Empty answer from model.' }, { status: 502 })
    }

    return NextResponse.json({
      answer,
      sourcesUsed: top.map(c => ({
        startSec: c.startSec,
        endSec: c.endSec,
        timestamp: formatTimestamp(c.startSec),
        score: Number(c.score.toFixed(3)),
      })),
    })
  } catch (err) {
    console.error('chat route error:', err?.message || err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}

const methodNotAllowed = () =>
  NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } })

export const GET = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
