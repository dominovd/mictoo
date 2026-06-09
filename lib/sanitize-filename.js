/**
 * Sanitize a filename to ASCII-safe characters before passing to Vercel
 * Blob `upload()`.
 *
 * Why this exists: @vercel/blob's client `upload()` mis-handles non-ASCII
 * filenames. The resulting blob URL contains double-UTF-8-encoded bytes
 * (UTF-8 bytes interpreted as Latin-1 then re-encoded as UTF-8), so the
 * later server-side GET on that URL returns 400. Observed in prod
 * 2026-06-09 with a Chinese-named file (健康教育考试重点解析.m4a → blob URL
 * with %C3%A5%C2%81%C2%A5… mojibake → /api/transcribe blob fetch 400 →
 * user-facing 500).
 *
 * We sanitize at the client boundary so the URL slug is ASCII-only and
 * the GET always works. The original `f.name` stays in component state for
 * the UI and for download filenames after transcription.
 *
 * Rules:
 *   - NFKD-normalise and strip combining marks (é → e, ī → i)
 *   - Replace whitespace runs with single hyphen
 *   - Drop anything outside [A-Za-z0-9._-]
 *   - Collapse repeated hyphens and trim leading/trailing
 *   - Cap basename at 80 chars, extension at 8 chars
 *   - Empty result → "audio"
 *
 * Examples:
 *   "健康教育考试重点解析.m4a"        → "audio.m4a"
 *   "Rīga lekcija.m4a"                  → "Riga-lekcija.m4a"
 *   "voice memo (1).mp3"                → "voice-memo-1.mp3"
 *   "客户访谈 2026-06-09.webm"          → "2026-06-09.webm"
 *   "test.MP3"                          → "test.mp3"
 *   ""                                  → "audio"
 */
export function sanitizeBlobFilename(name) {
  if (!name || typeof name !== 'string') return 'audio'

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

  return ext ? `${base}.${ext}` : base
}
