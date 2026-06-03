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

// Innertube API (the internal YouTube API yt-dlp uses). YouTube actively
// blocks the WEB client from datacenter IPs (LOGIN_REQUIRED / "Sign in to
// confirm you're not a bot"), so we cycle through several non-web clients
// — ANDROID, IOS, TVHTML5_EMBED — which have different bot-detection
// profiles. This is exactly how yt-dlp survives YouTube's IP blocks.
const INNERTUBE_KEYS = {
  WEB: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
  ANDROID: 'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w',
  IOS: 'AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc',
  TVHTML5: 'AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8',
}

const CLIENTS = {
  ANDROID: {
    headers: {
      'X-YouTube-Client-Name': '3',
      'X-YouTube-Client-Version': '19.09.37',
      'User-Agent': 'com.google.android.youtube/19.09.37 (Linux; U; Android 14) gzip',
    },
    context: {
      clientName: 'ANDROID',
      clientVersion: '19.09.37',
      androidSdkVersion: 34,
      osName: 'Android',
      osVersion: '14',
      hl: 'en',
      gl: 'US',
    },
    key: INNERTUBE_KEYS.ANDROID,
  },
  IOS: {
    headers: {
      'X-YouTube-Client-Name': '5',
      'X-YouTube-Client-Version': '19.09.3',
      'User-Agent': 'com.google.ios.youtube/19.09.3 (iPhone15,2; U; CPU iOS 17_4 like Mac OS X)',
    },
    context: {
      clientName: 'IOS',
      clientVersion: '19.09.3',
      deviceModel: 'iPhone15,2',
      osName: 'iOS',
      osVersion: '17.4.0.21E219',
      hl: 'en',
      gl: 'US',
    },
    key: INNERTUBE_KEYS.IOS,
  },
  TVHTML5_EMBED: {
    headers: {
      'X-YouTube-Client-Name': '85',
      'X-YouTube-Client-Version': '2.0',
      'User-Agent': 'Mozilla/5.0 (PlayStation; PlayStation 4/12.00) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15',
    },
    context: {
      clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
      clientVersion: '2.0',
      hl: 'en',
      gl: 'US',
    },
    key: INNERTUBE_KEYS.WEB,
  },
  WEB: {
    headers: {
      'X-YouTube-Client-Name': '1',
      'X-YouTube-Client-Version': '2.20240726.00.00',
      'User-Agent': UA,
    },
    context: {
      clientName: 'WEB',
      clientVersion: '2.20240726.00.00',
      hl: 'en',
    },
    key: INNERTUBE_KEYS.WEB,
  },
}

async function fetchPlayerViaInnertube(videoId, clientName = 'WEB') {
  const client = CLIENTS[clientName] || CLIENTS.WEB
  const res = await fetch(`https://www.youtube.com/youtubei/v1/player?key=${client.key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...client.headers,
    },
    body: JSON.stringify({
      videoId,
      context: { client: client.context },
    }),
  })
  if (!res.ok) return null
  try {
    return await res.json()
  } catch {
    return null
  }
}

// Try a sequence of Innertube clients until one returns captions. Returns
// {player, clientUsed} on success, or {player: null, attempts: [...]} on
// failure where attempts records what each client said.
async function fetchPlayerViaInnertubeChain(videoId, order = ['ANDROID', 'IOS', 'TVHTML5_EMBED', 'WEB']) {
  const attempts = []
  for (const client of order) {
    try {
      const player = await fetchPlayerViaInnertube(videoId, client)
      const status = player?.playabilityStatus?.status || null
      const tracks = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks
      attempts.push({ client, status, tracks: tracks?.length || 0 })
      if (tracks && tracks.length) {
        return { player, clientUsed: client, attempts }
      }
    } catch (e) {
      attempts.push({ client, error: e?.message || String(e) })
    }
  }
  return { player: null, clientUsed: null, attempts }
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
    innertubeAttempts: [],
    clientUsed: null,
    chainError: null,
  }
  // YouTube actively blocks WEB-fingerprint requests from datacenter IPs
  // with "Sign in to confirm you're not a bot" / LOGIN_REQUIRED. The
  // non-web clients (ANDROID, IOS, TVHTML5_EMBED) have different
  // bot-detection profiles and often slip through where WEB doesn't —
  // this is exactly the dance yt-dlp does. Try them in order until one
  // returns captions.
  if (!tracks || !tracks.length) {
    try {
      const chain = await fetchPlayerViaInnertubeChain(videoId)
      debug.innertubeAttempts = chain.attempts
      debug.clientUsed = chain.clientUsed
      if (chain.player) {
        const fbTracks = chain.player?.captions?.playerCaptionsTracklistRenderer?.captionTracks
        if (fbTracks && fbTracks.length) {
          tracks = fbTracks
          playerForMeta = chain.player
        }
      }
    } catch (e) {
      debug.chainError = e?.message || String(e)
    }
  }
  if (!tracks || !tracks.length) {
    // Distinguish "video legitimately has no captions" from "YouTube
    // wouldn't show us captions because we look like a bot". The
    // playabilityStatus field is the strongest signal — LOGIN_REQUIRED,
    // AGE_VERIFICATION_REQUIRED, ERROR all mean our request was rejected.
    // If even one client got status === 'OK' but no tracks, it's a real
    // no-captions situation. Otherwise treat as IP-blocked.
    const someClientOk =
      debug.watchPagePlayabilityStatus === 'OK' ||
      debug.innertubeAttempts.some(a => a.status === 'OK')
    const blocked = !someClientOk
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
