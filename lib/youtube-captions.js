/**
 * Fetch YouTube captions for a video without transcribing audio.
 *
 * Two-step flow:
 *  1. Fetch the public watch page HTML
 *  2. Parse the embedded `ytInitialPlayerResponse` JSON to find caption tracks
 *  3. Fetch the chosen track's `baseUrl` with &fmt=json3 to get structured
 *     captions with millisecond timestamps
 *
 * This is what consumer "YouTube to transcript" services use (e.g.
 * youtubetotranscript.com). It's an undocumented but stable endpoint that
 * YouTube serves to anyone watching the video for accessibility. Zero
 * transcription cost — YouTube already ran Whisper on every video.
 *
 * Limitations:
 *  - Only works for videos that HAVE captions (most popular videos do, niche
 *    or new videos sometimes don't)
 *  - Quality is YouTube's own ASR, not always as good as Whisper large-v3
 *  - No speaker labels (diarization stays a Pro feature)
 *  - Vercel datacenter IPs may be rate-limited or blocked by YouTube; in that
 *    case we surface a clean error and the user can fall back to the
 *    download guide
 */

const VIDEO_ID_PATTERNS = [
  /[?&]v=([a-zA-Z0-9_-]{11})/,
  /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/,
]

export function extractYouTubeVideoId(url) {
  if (typeof url !== 'string') return null
  // Bare 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim()
  for (const pattern of VIDEO_ID_PATTERNS) {
    const m = url.match(pattern)
    if (m) return m[1]
  }
  return null
}

// Browser-like User-Agent — YouTube serves stripped-down HTML to bot-looking
// requests and the captions track URLs sometimes don't show up there.
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

export async function getYouTubeCaptions(url, { preferLang } = {}) {
  const videoId = extractYouTubeVideoId(url)
  if (!videoId) {
    const err = new Error('Not a valid YouTube URL or video ID.')
    err.code = 'BAD_URL'
    throw err
  }

  // Step 1: fetch the watch page
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}&hl=en`
  let html
  try {
    const res = await fetch(watchUrl, {
      headers: {
        'User-Agent': UA,
        'Accept-Language': 'en-US,en;q=0.9',
      },
      // Don't follow YouTube's mobile redirect into a totally different markup
      redirect: 'follow',
    })
    if (!res.ok) {
      const err = new Error(`YouTube returned ${res.status}.`)
      err.code = 'WATCH_HTTP_ERROR'
      throw err
    }
    html = await res.text()
  } catch (err) {
    if (err.code) throw err
    const wrapped = new Error('Could not reach YouTube. The platform may be rate-limiting our server.')
    wrapped.code = 'FETCH_FAILED'
    throw wrapped
  }

  // Step 2: extract the ytInitialPlayerResponse object
  // YouTube serves it as a JS assignment near the top of the body:
  //   var ytInitialPlayerResponse = { ... };
  // We capture until the closing brace before the next statement.
  const m =
    html.match(/ytInitialPlayerResponse\s*=\s*(\{.+?\})\s*;\s*(?:var|<\/script>)/s) ||
    html.match(/ytInitialPlayerResponse"\s*:\s*(\{.+?\})\s*[,}]/s)
  if (!m) {
    const err = new Error('YouTube page format unexpected — captions could not be located.')
    err.code = 'NO_PLAYER_RESPONSE'
    throw err
  }

  let player
  try {
    player = JSON.parse(m[1])
  } catch {
    const err = new Error('Could not parse YouTube player response.')
    err.code = 'PARSE_FAILED'
    throw err
  }

  // Step 3: locate the caption tracks
  const tracks = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks
  if (!tracks || !tracks.length) {
    const err = new Error('This video has no captions. Try our download guide and upload the file instead.')
    err.code = 'NO_CAPTIONS'
    throw err
  }

  // Step 4: pick a track. Preference order:
  //   1. preferLang if provided and present
  //   2. Manually-uploaded English (no "kind: asr" marker)
  //   3. Auto-generated English
  //   4. Manually-uploaded anything
  //   5. The first track in the list
  const pick = (predicate) => tracks.find(predicate)
  const track =
    (preferLang && pick(t => t.languageCode === preferLang && t.kind !== 'asr')) ||
    (preferLang && pick(t => t.languageCode === preferLang)) ||
    pick(t => t.languageCode === 'en' && t.kind !== 'asr') ||
    pick(t => t.languageCode === 'en') ||
    pick(t => t.kind !== 'asr') ||
    tracks[0]

  if (!track?.baseUrl) {
    const err = new Error('Caption track has no URL.')
    err.code = 'NO_TRACK_URL'
    throw err
  }

  // Step 5: fetch the captions in json3 format (gives us timestamps in ms +
  // text segments). Default format is XML which is awkward to parse.
  const captionsUrl = track.baseUrl + (track.baseUrl.includes('?') ? '&' : '?') + 'fmt=json3'
  let capData
  try {
    const res = await fetch(captionsUrl, { headers: { 'User-Agent': UA } })
    if (!res.ok) {
      const err = new Error(`Captions endpoint returned ${res.status}.`)
      err.code = 'CAPTIONS_HTTP_ERROR'
      throw err
    }
    capData = await res.json()
  } catch (err) {
    if (err.code) throw err
    const wrapped = new Error('Could not download the captions track.')
    wrapped.code = 'CAPTIONS_FETCH_FAILED'
    throw wrapped
  }

  // Step 6: normalize into our segments shape: { start, end, text }
  const events = Array.isArray(capData?.events) ? capData.events : []
  const segments = []
  for (const ev of events) {
    if (!Array.isArray(ev.segs)) continue
    const text = ev.segs.map(s => s.utf8 || '').join('').replace(/\n+/g, ' ').trim()
    if (!text) continue
    const startMs = Number(ev.tStartMs) || 0
    const durMs = Number(ev.dDurationMs) || 0
    segments.push({
      start: startMs / 1000,
      end: (startMs + durMs) / 1000,
      text,
    })
  }
  if (!segments.length) {
    const err = new Error('Caption track was empty.')
    err.code = 'EMPTY_TRACK'
    throw err
  }

  return {
    videoId,
    segments,
    languageCode: track.languageCode || null,
    languageName: track.name?.simpleText || track.name?.runs?.[0]?.text || null,
    isAutoGenerated: track.kind === 'asr',
    title: player?.videoDetails?.title || null,
    author: player?.videoDetails?.author || null,
    durationSec: Number(player?.videoDetails?.lengthSeconds) || null,
  }
}
