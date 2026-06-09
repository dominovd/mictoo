// YouTube transcript provider — thin abstraction over external APIs.
//
// Why an abstraction layer:
//   - Our previous in-house fetcher (lib/youtube-captions.js) is dead in
//     prod: YouTube blocks Vercel datacenter IPs for all Innertube clients.
//     See project_mictoo_youtube_downloader_strategy.md memory file for the
//     full retreat write-up.
//   - We now buy this capability instead of building it. transcriptapi.com
//     is the primary provider ($4.50/mo annual at 1000 transcripts/mo).
//     supadata.ai is an optional failover ($0/mo with their Free 100/mo
//     recurring tier — enough for the rare retry).
//   - This module exposes a single fetchTranscript(url) entrypoint that
//     normalizes both providers' response shapes into one shared schema.
//   - When YouTube transcript-API economics change (new player, price hike,
//     legal kerfuffle), only this file needs to move.
//
// Output shape (consumed by Wave 8 pages and the parked URL-input flow):
//   {
//     videoId: 'abc...',
//     title: 'Do schools kill creativity?',
//     author: 'TED',
//     durationSec: 1164,
//     language: 'en',
//     segments: [{ start: 0.0, text: 'Good morning.' }, ...],
//     text: 'Good morning. How are you? ...',          // flattened
//     provider: 'transcriptapi' | 'supadata',
//   }
//
// Env vars:
//   TRANSCRIPTAPI_KEY  — required for any fetch (primary provider)
//   SUPADATA_KEY       — optional, enables failover on transcriptapi 5xx
//
// Errors carry a `code`:
//   BAD_URL              — couldn't extract a video ID from the input
//   NO_API_KEY           — TRANSCRIPTAPI_KEY missing (both providers down)
//   NO_CAPTIONS          — video has no captions / removed / private
//   PROVIDER_DOWN        — all providers returned 5xx or threw
//   RATE_LIMITED         — provider returned 429
//   UPSTREAM_ERROR       — anything else from the wire

// Lifted from lib/youtube-captions.js — same regex, same coverage. Handles
// watch?v=, youtu.be/, /embed/, /shorts/, /v/, and bare 11-char IDs.
export function extractYouTubeVideoId(input) {
  if (!input || typeof input !== 'string') return null
  const trimmed = input.trim()
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed
  try {
    const u = new URL(trimmed.includes('://') ? trimmed : `https://${trimmed}`)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0]
      return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null
    }
    if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
      const v = u.searchParams.get('v')
      if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v
      const parts = u.pathname.split('/').filter(Boolean)
      const idx = parts.findIndex(p => ['embed', 'shorts', 'v', 'live'].includes(p))
      if (idx >= 0 && parts[idx + 1] && /^[A-Za-z0-9_-]{11}$/.test(parts[idx + 1])) {
        return parts[idx + 1]
      }
    }
  } catch { /* fall through */ }
  return null
}

// ---------- transcriptapi.com (primary) ----------

async function fetchFromTranscriptAPI(videoId) {
  const key = process.env.TRANSCRIPTAPI_KEY
  if (!key) {
    const e = new Error('TRANSCRIPTAPI_KEY not configured.')
    e.code = 'NO_API_KEY'
    throw e
  }
  // Their /v2/youtube/transcript endpoint accepts the bare 11-char video ID
  // as `video_url` and returns JSON segments when we pass format=json. We
  // also ask for metadata so we get title + author + duration in the same
  // response — saves a second API call for video-details (which would cost
  // another credit per page).
  const url = `https://transcriptapi.com/api/v2/youtube/transcript?video_url=${encodeURIComponent(videoId)}&format=json&send_metadata=true&include_timestamp=true`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${key}` },
    // Server-side fetch; no need for credentials or CORS dance.
  })
  const status = res.status
  let body = null
  try { body = await res.json() } catch { /* possibly text */ }

  if (status === 200 && body) {
    // Their response shape (per docs):
    //   { transcript: [{text, start, duration}, ...],
    //     metadata: { title, author_name, length_seconds, ... } }
    // OR the older flat shape:
    //   { title, segments: [{text, start}, ...] }
    // Normalize both.
    const segs = (body.transcript || body.segments || []).map(s => ({
      start: typeof s.start === 'number' ? s.start : parseFloat(s.start) || 0,
      text: (s.text || '').trim(),
    })).filter(s => s.text)
    if (!segs.length) {
      const e = new Error('Provider returned no segments.')
      e.code = 'NO_CAPTIONS'
      throw e
    }
    const meta = body.metadata || {}
    const text = segs.map(s => s.text).join(' ').replace(/\s+/g, ' ').trim()
    return {
      videoId,
      title: meta.title || body.title || `YouTube ${videoId}`,
      author: meta.author_name || body.author || '',
      durationSec: parseInt(meta.length_seconds || body.duration || 0, 10) || null,
      language: meta.language || body.language || 'en',
      segments: segs,
      text,
      provider: 'transcriptapi',
    }
  }

  // 404 / 422 / explicit error code = "no captions available for this video".
  // transcriptapi has used all three shapes:
  //   - 422 with body.error.code === 'no_captions' (older docs)
  //   - 404 with body.detail === 'No transcript available for video XXX'
  //     (observed in prod 2026-06-09 log, 3 fails surfaced as generic 502)
  //   - 200 with empty segments (handled by the !segs.length branch above)
  // All three are soft fails — surface as NO_CAPTIONS so the UI can show the
  // 'this video has no captions, try uploading the audio' fallback instead
  // of a scary 502.
  const detailSaysNoTranscript = typeof body?.detail === 'string' &&
    /no transcript available|no captions|not available/i.test(body.detail)
  if (status === 404 || status === 422 || body?.error?.code === 'no_captions' || detailSaysNoTranscript) {
    const msg = body?.error?.message || body?.detail || 'This YouTube video has no captions available.'
    const e = new Error(msg)
    e.code = 'NO_CAPTIONS'
    throw e
  }
  if (status === 429) {
    const e = new Error('Rate limited by transcriptapi.')
    e.code = 'RATE_LIMITED'
    throw e
  }
  if (status >= 500) {
    const e = new Error(`transcriptapi 5xx: ${status}`)
    e.code = 'PROVIDER_DOWN'
    throw e
  }
  const e = new Error(`transcriptapi ${status}: ${JSON.stringify(body)?.slice(0, 200)}`)
  e.code = 'UPSTREAM_ERROR'
  throw e
}

// ---------- supadata.ai (optional failover) ----------

async function fetchFromSupadata(videoId) {
  const key = process.env.SUPADATA_KEY
  if (!key) return null  // not configured, silently skip
  // Their endpoint: GET /v1/youtube/transcript?url=...&text=false
  // (text=false → return segments; text=true → return flat text only)
  const url = `https://api.supadata.ai/v1/youtube/transcript?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&text=false`
  const res = await fetch(url, {
    headers: { 'x-api-key': key },
  })
  const status = res.status
  let body = null
  try { body = await res.json() } catch { /* */ }

  if (status === 200 && body?.content) {
    // supadata shape (per docs): { content: [{lang, text, offset, duration}, ...],
    //                              lang: 'en', availableLangs: [...] }
    // offset is in milliseconds, not seconds.
    const segs = body.content.map(s => ({
      start: typeof s.offset === 'number' ? s.offset / 1000 : 0,
      text: (s.text || '').trim(),
    })).filter(s => s.text)
    if (!segs.length) {
      const e = new Error('Supadata returned no segments.')
      e.code = 'NO_CAPTIONS'
      throw e
    }
    const text = segs.map(s => s.text).join(' ').replace(/\s+/g, ' ').trim()
    return {
      videoId,
      title: body.title || `YouTube ${videoId}`,
      author: body.author || '',
      durationSec: body.durationSec || null,
      language: body.lang || 'en',
      segments: segs,
      text,
      provider: 'supadata',
    }
  }
  if (status === 404) {
    const e = new Error('Supadata: video has no captions.')
    e.code = 'NO_CAPTIONS'
    throw e
  }
  if (status >= 500) {
    const e = new Error(`Supadata 5xx: ${status}`)
    e.code = 'PROVIDER_DOWN'
    throw e
  }
  const e = new Error(`Supadata ${status}`)
  e.code = 'UPSTREAM_ERROR'
  throw e
}

// ---------- public API ----------

// Main entry. Tries transcriptapi first; on PROVIDER_DOWN / RATE_LIMITED /
// UPSTREAM_ERROR (transient classes), tries supadata if configured.
// Re-throws NO_CAPTIONS / NO_API_KEY / BAD_URL without failover (no point
// asking another provider — the answer won't change).
export async function fetchTranscript(urlOrId) {
  const videoId = extractYouTubeVideoId(urlOrId)
  if (!videoId) {
    const e = new Error('Not a recognizable YouTube URL or 11-char video ID.')
    e.code = 'BAD_URL'
    throw e
  }

  let primaryError
  try {
    return await fetchFromTranscriptAPI(videoId)
  } catch (err) {
    primaryError = err
    if (['BAD_URL', 'NO_API_KEY', 'NO_CAPTIONS'].includes(err.code)) {
      throw err  // not worth a failover attempt
    }
    // fall through to supadata
  }

  try {
    const result = await fetchFromSupadata(videoId)
    if (result) return result
  } catch (err) {
    if (err.code === 'NO_CAPTIONS') throw err
    // swallow other failover errors — primaryError is more diagnostic
  }

  throw primaryError
}

// Smaller helper for cases where the caller only wants the flat text
// (saves them touching the segment shape).
export async function fetchTranscriptText(urlOrId) {
  const t = await fetchTranscript(urlOrId)
  return t.text
}
