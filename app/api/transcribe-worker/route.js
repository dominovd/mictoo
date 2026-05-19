import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { claimNextJob, setJobResult, setJobError, requeueJob, releaseUserSlot } from '@/lib/queue'
import { bumpTranscriptionCount } from '@/lib/stats'
import { createServiceClient } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email/send'
import { transcriptReadyEmail } from '@/lib/email/templates/transcript-ready'
import { isDeepgramAvailable, transcribeWithDeepgram } from '@/lib/transcribe/deepgram'
import { isReplicateAvailable, transcribeWithReplicate } from '@/lib/transcribe/replicate'
import { WHISPER_PROMPT } from '@/lib/transcribe/prompt'

export const runtime = 'nodejs'
// Same ceiling as /api/transcribe — a 25 MB file may take up to ~5 min on the
// OpenAI fallback path. The worker only processes one job per cron tick anyway,
// so the long maxDuration is "cap" not "expected".
export const maxDuration = 300

// One worker tick processes a single job pulled from the queue. The Vercel
// Cron schedule (every minute) drains the queue over time. Jobs that hit a
// Groq 429 inside the worker get requeued (up to MAX_ATTEMPTS), so a Groq
// daily-cap exhaustion just means the queue takes longer to clear, not that
// we pay for fallback providers.
//
// Fallback chain when Groq finally fails (after MAX_ATTEMPTS or on 5xx):
//   1. Replicate insanely-fast-whisper (~$0.04/h)   — cheapest, NEW Tier 2
//   2. Deepgram Nova-3 (~$0.26/h, $200 free credit) — safety net
//   3. OpenAI Whisper-1 ($0.36/h)                    — last resort, ≤10MB
//
// Replicate goes first because it's ~7x cheaper than Deepgram while using
// the same underlying model (whisper-large-v3). Deepgram stays as the safety
// net so the $200 starter credit becomes a real long-term buffer.

// After 7 retries (~7 minutes user wait) we conclude Groq's quota is
// genuinely exhausted, not a per-minute or per-hour spike. At that point we
// fall through to the Deepgram → OpenAI chain.
//
// Tuned up from 3 → 7 on 2026-05-18 after Deepgram billing showed the chain
// was firing ~10×/hour during peak hours, burning the $200 starter credit at
// ~$3.60/day (~$108/mo). Groq has multiple quota windows (per-minute, per-hour,
// per-day) and the per-hour bucket refills in 5–10 min in many cases — extra
// retries let us catch those refills instead of paying for fallback.
// Cron tick is 1 min so MAX_ATTEMPTS=7 ≈ up to 7 min user wait in worst case.
const MAX_ATTEMPTS = 7
// Only files ≤ 10 MB are allowed to use the OpenAI fallback. Larger files
// rely on Deepgram (no size cap) or fail cleanly. The cap exists because a
// 30-min podcast (~58 MB) on OpenAI Whisper-1 burns ~$0.20 per transcription
// during a Groq cap-out day, which adds up fast.
const FALLBACK_MAX_BYTES = 10 * 1024 * 1024

const groq = process.env.GROQ_API_KEY
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

function buildWhisperFile(buffer, fileName, fileType) {
  // Match the normalization logic in /api/transcribe — keeps the two paths
  // identical so a job that gets queued behaves the same as one that runs
  // inline. See the comments in that file for the why.
  const safeName = fileName.replace(/\.([A-Za-z0-9]+)$/, (_, ext) => `.${ext.toLowerCase()}`)
  const isAac = safeName.endsWith('.aac') || /^audio\/(x-)?aac$/i.test(fileType || '')
  const isOpus = safeName.endsWith('.opus') || /^audio\/opus$/i.test(fileType || '')
  const isMov =
    safeName.endsWith('.mov') ||
    safeName.endsWith('.qt') ||
    safeName.endsWith('.3gp') ||
    /^video\/(quicktime|3gpp)$/i.test(fileType || '')
  let whisperName = safeName
  if (isAac) whisperName = whisperName.replace(/\.aac$/, '.m4a')
  else if (isOpus) whisperName = whisperName.replace(/\.opus$/, '.ogg')
  else if (isMov) whisperName = whisperName.replace(/\.(mov|qt|3gp)$/, '.mp4')
  return { file: new File([buffer], whisperName, { type: fileType }), isAac }
}

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  if (!groq) {
    return NextResponse.json(
      { error: 'No transcription provider configured.' },
      { status: 500 }
    )
  }

  const job = await claimNextJob()
  if (!job) {
    return NextResponse.json({ status: 'idle' })
  }

  const { jobId, blobUrl, language, fileName, fileType, fileSize, attemptCount, userId } = job
  let shouldDeleteBlob = true

  try {
    // ── Fetch the blob the user uploaded earlier ─────────────────────────
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      throw new Error(`Could not retrieve uploaded file (HTTP ${blobRes.status}).`)
    }
    const buffer = Buffer.from(await blobRes.arrayBuffer())
    const { file: whisperFile, isAac } = buildWhisperFile(buffer, fileName, fileType || 'audio/mpeg')

    // ── Try Groq ─────────────────────────────────────────────────────────
    let transcription
    // Track which provider actually produced the transcription so we can
    // save it in `transcripts.source` instead of the hardcoded 'web'.
    // Set in each success branch below.
    let usedProvider = null
    try {
      transcription = await groq.audio.transcriptions.create({
        file: whisperFile,
        response_format: 'verbose_json',
        prompt: WHISPER_PROMPT,
        ...(language ? { language } : {}),
        model: 'whisper-large-v3',
      })
      usedProvider = 'groq'
    } catch (err) {
      // 400 = bad file/codec. No retry, no fallback will help.
      if (err?.status === 400) {
        const friendly = isAac
          ? "This AAC recording uses a codec Whisper can't read directly. Convert it to MP3 or M4A first — QuickTime, Audacity, or any online audio converter can do this in seconds."
          : 'This file format or codec is not supported. Try exporting as MP3 or M4A, or extract the audio track if the file is video-only.'
        throw new Error(friendly)
      }

      // 429 = Groq quota / rate limit. The queue is designed to wait out
      // short per-minute spikes — retry a few times before paying for OpenAI.
      // BUT: if we keep getting 429 after MAX_ATTEMPTS, we've hit Groq's
      // *daily* cap (which won't refill for hours), not a momentary spike.
      // In that case fall through to the OpenAI fallback path below — the
      // user already waited ~5 min and we shouldn't fail their job to save
      // a few cents.
      if (err?.status === 429) {
        const nextAttempt = Number(attemptCount || 0) + 1
        if (nextAttempt < MAX_ATTEMPTS) {
          console.warn(
            `[transcribe-worker] groq 429, requeue jobId=${jobId} (attempt ${nextAttempt}/${MAX_ATTEMPTS})`
          )
          await requeueJob(jobId)
          shouldDeleteBlob = false
          return NextResponse.json({ status: 'requeued', jobId, attempt: nextAttempt })
        }
        // Retries exhausted — log and fall through to the fallback section
        // below. We don't throw here; the next block handles "should we try
        // OpenAI given the file size?"
        console.warn(
          `[transcribe-worker] groq 429 attempts exhausted (${MAX_ATTEMPTS}), jobId=${jobId} — attempting deepgram → openai fallback chain`
        )
      }

      // ── Fallback chain: Replicate → Deepgram → OpenAI (≤10MB) ──────────
      // Both 429-after-exhaustion and 5xx/network reach here. We try each
      // available provider in order; the first success wins. Each tier is
      // logged with `fallback:` prefix so Vercel logs can be filtered to
      // measure how often each tier fires and what success rate is.
      const fallbackErrors = []

      // Tier 2: Replicate (insanely-fast-whisper on A40). Cheapest of the
      // paid options at ~$0.04/h audio. Uses the same whisper-large-v3 as
      // Groq, just running on someone else's GPU. Cold start ~10-20s is
      // acceptable in our async-queue context.
      // Pass the buffer (not blobUrl) so Replicate hosts a copy on their
      // CDN with a clean filename — avoids ffmpeg confusion on iOS Voice
      // Memo URLs that end in ".mp4" despite being AAC-in-MP4.
      if (isReplicateAvailable() && buffer) {
        console.warn(
          `[transcribe-worker] fallback: groq ${err?.status ?? 'error'} → replicate for jobId=${jobId}`,
          { code: err?.code, message: err?.message }
        )
        try {
          transcription = await transcribeWithReplicate({ buffer, fileType, fileName, language })
          console.warn(`[transcribe-worker] fallback: replicate succeeded jobId=${jobId}`)
          usedProvider = 'replicate'
        } catch (repErr) {
          console.warn(
            `[transcribe-worker] fallback: replicate failed ${repErr?.status ?? 'error'} jobId=${jobId}`,
            { message: repErr?.message }
          )
          fallbackErrors.push({ provider: 'replicate', err: repErr })
        }
      }

      // Tier 3: Deepgram. Safety net if Replicate is down or rejects the file.
      // ~7x more expensive per minute than Replicate but instant (no cold start)
      // and has no size cap. $200 starter credit acts as long-term buffer.
      if (!transcription && isDeepgramAvailable()) {
        console.warn(
          `[transcribe-worker] fallback: → deepgram for jobId=${jobId} (replicate unavailable or failed)`
        )
        try {
          transcription = await transcribeWithDeepgram(buffer, { fileType, language })
          console.warn(`[transcribe-worker] fallback: deepgram succeeded jobId=${jobId}`)
          usedProvider = 'deepgram'
        } catch (dgErr) {
          console.warn(
            `[transcribe-worker] fallback: deepgram failed ${dgErr?.status ?? 'error'} jobId=${jobId}`,
            { message: dgErr?.message }
          )
          fallbackErrors.push({ provider: 'deepgram', err: dgErr })
        }
      }

      // Tier 4: OpenAI. Last-resort, only for small files because expensive.
      if (!transcription && openai && fileSize <= FALLBACK_MAX_BYTES) {
        console.warn(
          `[transcribe-worker] fallback: → openai for jobId=${jobId} (deepgram unavailable or failed)`
        )
        try {
          transcription = await openai.audio.transcriptions.create({
            file: whisperFile,
            response_format: 'verbose_json',
            prompt: WHISPER_PROMPT,
            ...(language ? { language } : {}),
            model: 'whisper-1',
          })
          console.warn(`[transcribe-worker] fallback: openai succeeded jobId=${jobId}`)
          usedProvider = 'openai'
        } catch (oaErr) {
          console.error(
            `[transcribe-worker] fallback: openai also failed ${oaErr?.status ?? 'error'}`,
            { code: oaErr?.code, message: oaErr?.message }
          )
          fallbackErrors.push({ provider: 'openai', err: oaErr })
        }
      }

      // Still nothing? Surface the most user-friendly message we can.
      if (!transcription) {
        // Specific case: Groq daily cap + no other fallback eligible for
        // this file. Replicate and Deepgram both either unavailable or also
        // failed, AND file too big for OpenAI. Tell the user what to do.
        const noFallbackAvailable =
          err?.status === 429 &&
          fileSize > FALLBACK_MAX_BYTES &&
          !isReplicateAvailable() &&
          !isDeepgramAvailable()
        if (noFallbackAvailable) {
          throw new Error(
            'Service is at its daily limit and your file is too large for backup processing. Please try again tomorrow or upload a shorter file.'
          )
        }
        // Otherwise re-throw the LAST fallback error (more specific than the
        // original Groq error in the common case), or the Groq error if no
        // fallback even ran.
        const last = fallbackErrors[fallbackErrors.length - 1]
        throw last ? last.err : err
      }
    }

    // ── Success ──────────────────────────────────────────────────────────
    // We insert the transcript row first (below) and then echo the id back
    // via setJobResult so the client polling /api/transcribe-status can pick
    // it up. Order matters: insert → setJobResult.

    // Pull common shape pieces once so they're available to the log,
    // the history INSERT, and the client-facing result.
    const segs = transcription.segments ?? []
    const durationSec = segs.length ? segs[segs.length - 1]?.end ?? null : null

    // Probe container + codec via music-metadata purely for the success log.
    // The sync route already probed for duration enforcement before enqueueing,
    // but that result wasn't persisted in the job hash — re-probing here costs
    // ~20-50ms on a 5-25 MB buffer (negligible vs. transcription time) and
    // keeps the two log streams shape-compatible. ADTS-AAC files surfacing as
    // container='ADTS' in worker logs would tell us the queue path is hitting
    // the same Replicate-fallback issue as the sync path (see 2026-05-19
    // analysis); right now Deepgram covers those so no upfront reject.
    let probedContainer = null
    let probedCodec = null
    try {
      const mm = await import('music-metadata')
      const meta = await mm.parseBuffer(buffer, {
        mimeType: fileType || 'audio/mpeg',
        size: buffer.length,
      })
      probedContainer = meta?.format?.container ?? null
      probedCodec = meta?.format?.codec ?? null
    } catch {
      // Probe failures are non-fatal here — the transcription already
      // succeeded, we just lose the format diagnostic for this row.
    }

    // Success-path structured log. Same shape as /api/transcribe so both
    // paths can be analysed with one grep. Adds queued=y to distinguish
    // worker-processed jobs (Groq cap-out path) from sync transcriptions
    // — useful for measuring how often the queue is actually saving money.
    const extMatch = (fileName || '').match(/\.([A-Za-z0-9]+)$/)
    const ext = extMatch ? extMatch[1].toLowerCase() : ''
    console.log(
      `[transcribe] ok provider=${usedProvider || 'unknown'} container=${probedContainer || '?'} codec=${probedCodec || '?'} ext=${ext} mime=${fileType} bytes=${fileSize} duration_sec=${durationSec ?? 'null'} lang=${transcription.language?.toLowerCase() ?? 'null'} auth=${userId ? 'y' : 'n'} queued=y jobId=${jobId}`
    )

    bumpTranscriptionCount()

    // Save to history for authenticated users. Worker uses the service-role
    // Supabase client because there's no user-cookie context here (cron-only
    // endpoint). We explicitly write user_id from the job so RLS would still
    // protect it on subsequent reads via the anon key.
    //
    // The inserted row's id is also tucked back into the job hash so the
    // client (which polls /api/transcribe-status) can find out which row to
    // attach the AI summary to when /api/summarize completes.
    let transcriptId = null
    if (userId) {
      try {
        const supabase = createServiceClient()
        const { data, error: dbErr } = await supabase
          .from('transcripts')
          .insert({
            user_id: userId,
            file_name: fileName,
            file_size: fileSize,
            file_type: fileType,
            // Lowercase to avoid 'indonesian' vs 'Indonesian' dupes in DB —
            // Whisper sometimes returns Title Case, sometimes lowercase.
            language: transcription.language?.toLowerCase() ?? null,
            text: transcription.text ?? '',
            segments: segs,
            duration_seconds: durationSec,
            // Real provider name (groq/replicate/deepgram/openai) tracked
            // in usedProvider above. Falls back to 'web' if somehow unset.
            source: usedProvider || 'web',
          })
          .select('id')
          .single()
        if (dbErr) {
          console.error('[transcribe-worker] save to history failed', dbErr.message)
        } else if (data) {
          transcriptId = data.id
        }
      } catch (err) {
        console.error('[transcribe-worker] save to history threw', err?.message)
      }
    }

    await setJobResult(jobId, {
      text: transcription.text,
      segments: transcription.segments ?? [],
      // Lowercase for consistency with what's stored in DB above.
      language: transcription.language?.toLowerCase() ?? null,
      transcriptId,
    })

    // ── Email notification ──────────────────────────────────────────────
    // Fire-and-forget. The job is already marked completed and the client
    // will see it via polling regardless — email is just a nice-to-have.
    // Default behaviour: opted in (notify_on_transcript_ready defaults to
    // true at the schema level; the row is created lazily here if missing).
    // The summary may not have been generated yet (it runs client-side
    // after the user sees the transcript), so we omit it from the email
    // for queued jobs — fine, the user can read it in /history.
    if (userId) {
      notifyUser({
        userId,
        fileName,
        text: transcription.text || '',
      }).catch((err) => {
        console.error('[transcribe-worker] notify failed', err?.message)
      })
    }

    // Free this user's queue slot — they can submit another file now.
    if (userId) await releaseUserSlot(userId, jobId)

    return NextResponse.json({ status: 'completed', jobId, transcriptId })
  } catch (err) {
    console.error('[transcribe-worker] job failed', {
      jobId,
      attempt: attemptCount,
      message: err?.message,
    })
    await setJobError(jobId, err?.message || 'Transcription failed.')
    if (userId) await releaseUserSlot(userId, jobId)
    return NextResponse.json(
      { status: 'failed', jobId, error: err?.message },
      { status: 500 }
    )
  } finally {
    if (shouldDeleteBlob && blobUrl) {
      del(blobUrl).catch((err) => {
        console.error('[transcribe-worker] blob delete failed', err?.message)
      })
    }
  }
}

// Send a "transcript is ready" email if the user is opted in.
// `text` is the full transcript; we trim a preview from it inside the
// template so the user has something to glance at without opening the page.
//
// Resolves silently on any error — email is non-critical, must NOT fail
// the job or the worker's HTTP response.
async function notifyUser({ userId, fileName, text }) {
  const supabase = createServiceClient()

  // Read preferences. Missing row means "use defaults", which is opted-in.
  const { data: prefs } = await supabase
    .from('notification_preferences')
    .select('notify_on_transcript_ready')
    .eq('user_id', userId)
    .maybeSingle()
  const wantsEmail = prefs?.notify_on_transcript_ready ?? true
  if (!wantsEmail) return

  // Need the user's email + name. Service-role client can read from
  // auth.users via admin API.
  const { data: userRes, error: userErr } = await supabase.auth.admin.getUserById(userId)
  if (userErr || !userRes?.user?.email) {
    console.error('[transcribe-worker] notify: could not resolve user email', userErr?.message)
    return
  }

  const to = userRes.user.email
  const meta = userRes.user.user_metadata || {}
  const name = meta.full_name || meta.name || null

  const preview = (text || '').trim().slice(0, 220).replace(/\s+\S*$/, '')

  const { subject, html, text: plain } = transcriptReadyEmail({
    name,
    fileName: fileName || 'audio',
    preview,
    summary: null, // summary runs client-side after polling; not available here yet
  })

  const result = await sendEmail({ to, subject, html, text: plain })
  if (!result.ok) {
    console.error('[transcribe-worker] notify: send failed', result.error)
  } else {
    console.log(`[transcribe-worker] notify: sent to ${to} (id=${result.id})`)
  }
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Cron-only endpoint.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
