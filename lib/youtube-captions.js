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

// Walk `text` and find the JS assignment `name = {...}` or the JSON property
// `"name": {...}`. Return the parsed object or null. Brace-depth-aware so
// nested objects inside the captured value don't trip up extraction.
function extractEmbeddedJson(text, name) {
  // Try assignment form first: `ytInitialPlayerResponse = {`
  const markers = [
    new RegExp(`${name}\\s*=\\s*`),
    new RegExp(`"${name}"\\s*:\\s*`),
  ]
  for (const marker of markers) {
    let m = marker.exec(text)
    while (m) {
      // Find the opening brace right after the match
      let i = m.index + m[0].length
      // Skip whitespace
      while (i < text.length && /\s/.test(text[i])) i++
      if (text[i] !== '{') {
        // Try the next match for this marker
        marker.lastIndex = m.index + 1
        m = marker.exec(text)
        continue
      }
      const start = i
      let depth = 0
      let inStr = null
      for (; i < text.length; i++) {
        const c = text[i]
        if (inStr) {
          if (c === '\\') { i++; continue }
          if (c === inStr) inStr = null
        } else if (c === '"' || c === "'") {
          inStr = c
        } else if (c === '{') {
          depth++
        } else if (c === '}') {
          depth--
          if (depth === 0) {
            const slice = text.slice(start, i + 1)
            try { return JSON.parse(slice) } catch { /* keep looking */ }
            break
          }
        }
      }
      marker.lastIndex = m.index + 1
      m = marker.exec(text)
    }
  }
  return null
}

// Innertube API (the internal YouTube API yt-dlp uses). When watch-page
// scraping misses captions — common on age-gated or "members-only" videos,
// and sometimes on plain unlisted videos for bot-looking clients — this
// returns the same player response shape but is more reliable for
// non-browser fetches.
const INNERTUBE_API_KEY = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'
async function fetchPlayerViaInnertube(videoId) {
  const res = await fetch(`https://www.youtube.com/youtubei/v1/player?key=${INNERTUBE_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': UA,
      'X-YouTube-Client-Name': '1',
      'X-YouTube-Client-Version': '2.20240726.00.00',
    },
    body: JSON.stringify({
      videoId,
      context: {
        client: {
          clientName: 'WEB',
          clientVersion: '2.20240726.00.00',
          hl: 'en',
        },
      },
    }),
  })
  if (!res.ok) return null
  try {
    return await res.json()
  } catch {
    return null
  }
}

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

  // Step 2: extract the ytInitialPlayerResponse object. Regex won't do here
  // because the JSON has tons of nested `{...}` and a lazy match
  // (`\{.+?\}`) stops at the FIRST closing brace, while a greedy one
  // overshoots into the rest of the page. We walk the string with a brace-
  // depth counter that respects string literals so escaped braces inside
  // strings don't confuse the depth.
  const player = extractEmbeddedJson(html, 'ytInitialPlayerResponse')
  if (!player) {
    const err = new Error('YouTube page format unexpected — captions could not be located.')
    err.code = 'NO_PLAYER_RESPONSE'
    throw err
  }

  // Step 3: locate the caption tracks. If the watch-page response doesn't
  // include them (common for bot-looking fetches, age-gated content, or
  // certain unlisted videos), retry through the Innertube player API which
  // is more permissive.
  let tracks = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks
  let playerForMeta = player
  // Diagnostic trail — surfaced back to the API caller so we can debug "no
  // captions" without server log access. Reset each call.
  const debug = {
    watchPagePlayer: !!player,
    watchPageTracks: tracks?.length || 0,
    watchPagePlayabilityStatus: player?.playabilityStatus?.status || null,
    watchPagePlayabilityReason: player?.playabilityStatus?.reason || null,
    innertubeTried: false,
    innertubePlayer: false,
    innertubeTracks: 0,
    innertubePlayabilityStatus: null,
    innertubeError: null,
  }
  if (!tracks || !tracks.length) {
    debug.innertubeTried = true
    try {
      const fallback = await fetchPlayerViaInnertube(videoId)
      debug.innertubePlayer = !!fallback
      debug.innertubePlayabilityStatus = fallback?.playabilityStatus?.status || null
      const fbTracks = fallback?.captions?.playerCaptionsTracklistRenderer?.captionTracks
      debug.innertubeTracks = fbTracks?.length || 0
      if (fbTracks && fbTracks.length) {
        tracks = fbTracks
        playerForMeta = fallback
      }
    } catch (e) {
      debug.innertubeError = e?.message || String(e)
    }
  }
  if (!tracks || !tracks.length) {
    // Distinguish "video legitimately has no captions" from "YouTube
    // wouldn't show us captions because we look like a bot". The
    // playabilityStatus field is the strongest signal — LOGIN_REQUIRED,
    // AGE_VERIFICATION_REQUIRED, ERROR all mean our request was rejected.
    const blocked =
      debug.watchPagePlayabilityStatus && debug.watchPagePlayabilityStatus !== 'OK' ||
      debug.innertubePlayabilityStatus && debug.innertubePlayabilityStatus !== 'OK'
    const err = new Error(
      blocked
        ? "YouTube blocked our server from reading this video. Use the download guide and upload the file."
        : 'This video has no captions. Try our download guide and upload the file instead.'
    )
    err.code = blocked ? 'BLOCKED' : 'NO_CAPTIONS'
    err.debug = debug
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
    title: playerForMeta?.videoDetails?.title || player?.videoDetails?.title || null,
    author: playerForMeta?.videoDetails?.author || player?.videoDetails?.author || null,
    durationSec: Number(playerForMeta?.videoDetails?.lengthSeconds) || Number(player?.videoDetails?.lengthSeconds) || null,
  }
}
