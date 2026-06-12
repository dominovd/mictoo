/**
 * Sanitize a filename to ASCII-safe characters and ensure it has a usable
 * extension before passing to Vercel Blob `upload()`.
 *
 * Why this exists:
 *
 * 1. @vercel/blob's client `upload()` mis-handles non-ASCII filenames. The
 *    resulting blob URL contains double-UTF-8-encoded bytes (UTF-8 bytes
 *    interpreted as Latin-1 then re-encoded as UTF-8), so the later
 *    server-side GET on that URL returns 400. Observed in prod 2026-06-09
 *    with a Chinese-named file (健康教育考试重点解析.m4a → blob URL with
 *    %C3%A5%C2%81%C2%A5… mojibake → /api/transcribe blob fetch 400 →
 *    user-facing 500).
 *
 * 2. Whisper / Groq determine the audio codec from the FILENAME EXTENSION,
 *    not the Content-Type header. Files with no extension ("karine 2",
 *    "interview bagagerie damien" — observed 9× in the 2026-06-11 log)
 *    get rejected with "file must be one of [flac mp3 mp4 mpeg mpga m4a
 *    ogg opus wav webm]" even when their Content-Type is correct. We
 *    derive a sensible extension from the MIME type so these still work.
 *
 * We sanitize at the client boundary so the URL slug is ASCII-only and the
 * GET always works. The original `f.name` stays in component state for the
 * UI and for download filenames after transcription.
 *
 * Rules:
 *   - NFKD-normalise and strip combining marks (é → e, ī → i)
 *   - Replace whitespace runs with single hyphen
 *   - Drop anything outside [A-Za-z0-9._-]
 *   - Collapse repeated hyphens and trim leading/trailing
 *   - Cap basename at 80 chars, extension at 8 chars
 *   - Empty basename → "audio"
 *   - If extension is missing AFTER sanitization, derive from MIME type
 *
 * Examples:
 *   "健康教育考试重点解析.m4a"             → "audio.m4a"
 *   "Rīga lekcija.m4a"                       → "Riga-lekcija.m4a"
 *   "voice memo (1).mp3"                     → "voice-memo-1.mp3"
 *   "test.MP3"                               → "test.mp3"
 *   ""                                       → "audio"
 *   "karine 2"          + "audio/mpeg"       → "karine-2.mp3"
 *   "interview bagagerie damien" + "audio/mp4" → "interview-bagagerie-damien.m4a"
 *   "recording" without MIME                 → "recording.mp3" (safe default)
 */

// MIME type → Whisper-accepted extension. Whisper's accepted list:
//   [flac mp3 mp4 mpeg mpga m4a ogg opus wav webm]
// We map to the most idiomatic one per MIME.
const MIME_TO_EXT = {
  'audio/mpeg': 'mp3',
  'audio/mp3': 'mp3',
  'audio/mpga': 'mp3',
  'audio/wav': 'wav',
  'audio/x-wav': 'wav',
  'audio/wave': 'wav',
  'audio/m4a': 'm4a',
  'audio/x-m4a': 'm4a',
  'audio/mp4': 'm4a',          // raw AAC in MP4 container = m4a per Whisper
  'audio/aac': 'm4a',          // Whisper rejects bare .aac; m4a wraps it
  'audio/x-aac': 'm4a',
  'audio/vnd.dlna.adts': 'm4a',
  'audio/ogg': 'ogg',
  'audio/opus': 'opus',
  'audio/flac': 'flac',
  'audio/x-flac': 'flac',
  'audio/webm': 'webm',
  'video/mp4': 'mp4',
  'video/quicktime': 'mp4',    // .mov → mp4 (same container, Whisper accepts mp4)
  'video/webm': 'webm',
  'video/x-matroska': 'webm',  // mkv falls back to webm container handling
}

function extensionFromMime(mime) {
  if (!mime || typeof mime !== 'string') return 'mp3' // safe default
  const lower = mime.toLowerCase().split(';')[0].trim()
  return MIME_TO_EXT[lower] || 'mp3'
}

export function sanitizeBlobFilename(name, mimeType = '') {
  // Bail early for total garbage input but still try to give a usable name.
  if (!name || typeof name !== 'string') {
    return `audio.${extensionFromMime(mimeType)}`
  }

  const lastDot = name.lastIndexOf('.')
  let base = lastDot > 0 ? name.slice(0, lastDot) : name
  let ext = lastDot > 0 ? name.slice(lastDot + 1).toLowerCase() : ''

  base = base
    .normalize('NFKD')                    // é → e + combining acute
    .replace(/[̀-ͯ]/g, '')      // strip combining marks
    .replace(/\s+/g, '-')                 // any whitespace → single hyphen
    .replace(/[^A-Za-z0-9._-]/g, '')      // drop anything still non-ASCII
    .replace(/-+/g, '-')                  // collapse hyphen runs
    .replace(/^[-_.]+|[-_.]+$/g, '')      // trim leading/trailing separators

  if (base.length > 80) base = base.slice(0, 80)
  if (!base) base = 'audio'

  // Extension: ASCII letters and digits only, capped at 8 chars.
  ext = ext.replace(/[^A-Za-z0-9]/g, '').slice(0, 8)

  // Three "not a real audio ext" cases where we restore the parsed extension
  // back into the base and derive from MIME instead:
  //
  //   1. Purely numeric (timestamp fragment like "WhatsApp 14.39.55")
  //   2. Not in the known audio/video extension allowlist (e.g. ".v2",
  //      ".bak", ".tmp" — Whisper would reject these anyway)
  //   3. Empty
  //
  // The allowlist covers Whisper's accepted formats plus aliases we transcode
  // on our side (aac, wma, mov, mkv, avi). Anything else triggers the MIME
  // fallback so the URL ends with a recognized codec extension.
  const KNOWN_AV_EXTS = new Set([
    'mp3', 'm4a', 'wav', 'flac', 'ogg', 'opus', 'webm', 'mp4', 'mpeg', 'mpga',
    'aac', 'wma', 'mov', 'mkv', 'avi', 'aiff', 'au',
  ])
  const extIsNumericOnly = ext && /^\d+$/.test(ext)
  const extIsUnknown = ext && !KNOWN_AV_EXTS.has(ext)
  if (extIsNumericOnly || extIsUnknown) {
    base = `${base}.${ext}`        // restore the bogus "extension" into base
    if (base.length > 80) base = base.slice(0, 80)
    ext = ''
  }

  // If the source filename had no extension (or it was non-ASCII garbage
  // that got stripped, or was purely numeric, or unknown), derive one from
  // the MIME type. Whisper needs a known extension to identify the codec.
  if (!ext) ext = extensionFromMime(mimeType)

  return `${base}.${ext}`
}
