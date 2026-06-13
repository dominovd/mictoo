'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { upload } from '@vercel/blob/client'
import { detectLocaleFromPath, localized, t, DICT } from '@/lib/i18n'
import { sanitizeBlobFilename } from '@/lib/sanitize-filename'
import { createClient } from '@/lib/supabase/client'
import { toVTT } from '@/lib/exports/vtt'
import { toJSON } from '@/lib/exports/json'
import SummaryCard from './SummaryCard'
import YouTubeFetchCounter from './YouTubeFetchCounter'
import ChatPanel from './ChatPanel'

// YouTube URL input is now gated per-page via the `enableYouTubeUrl`
// prop instead of a global flag (was YOUTUBE_URL_INPUT_ENABLED = false).
//
// History (2026-06-03 → 2026-06-04):
//   - Built direct Innertube fetcher (Option F). YouTube IP-blocks all
//     Vercel datacenter IPs across every client signature. Hid behind
//     global flag.
//   - 2026-06-04: switched backend to transcriptapi.com (paid 3rd party
//     that runs residential proxies). Backend now works. lib/yt-
//     transcript-provider.js is the new abstraction; /api/youtube-
//     captions/route.js uses it.
//   - Decision: enable URL input only on the pages where it makes UX
//     sense (/youtube-to-text, /transcribe-video-to-text), not on the
//     main homepage (which stays "drop a file"-focused). Per-page prop
//     instead of a global toggle lets us iterate.
// See project_mictoo_youtube_downloader_strategy.md for context.

const ACCEPTED_TYPES = ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/m4a', 'audio/ogg',
  'audio/webm', 'video/mp4', 'video/webm', 'video/mpeg', 'audio/x-m4a',
  'audio/flac', 'application/octet-stream']
// 25 MB is the OpenAI Whisper hard cap and our real ceiling. We bypass
// Vercel's 4.5 MB function body limit by uploading directly to Vercel Blob
// from the browser (see processFile below), then passing the blob URL to
// /api/transcribe. The function never has to ingest the file body itself.
// All MB caps use DECIMAL megabytes (1,000,000 bytes) instead of binary
// mebibytes (1,048,576) so the threshold matches what macOS Finder,
// Windows Explorer, and iOS Files show users. Without this, a file
// labelled "61.8 MB" in Finder was 58.95 MiB in our binary count and
// fell under the 60 MiB threshold — confusing the user who thought it
// should trigger the big-file modal. Server-side caps in upload-token,
// transcribe, and transcribe-multi all share the same definition.
const ANON_MAX_SIZE_MB = 25
const ANON_MAX_SIZE_BYTES = ANON_MAX_SIZE_MB * 1000 * 1000
const AUTH_MAX_SIZE_MB = 180
const AUTH_MAX_SIZE_BYTES = AUTH_MAX_SIZE_MB * 1000 * 1000
const BIG_FILE_THRESHOLD_BYTES = 60 * 1000 * 1000

// Duration caps mirror the server's safety net in /api/transcribe and
// /api/transcribe-multi. Probing client-side gives the user instant feedback
// ("this file is 45 min long") before a 23 MB upload they can't use anyway.
// Server still re-checks via music-metadata after blob fetch.
// Authed cap is large enough to cover 3-chunk auto-split content
// (~3 hours at typical podcast bitrates).
const ANON_MAX_DURATION_SEC = 30 * 60
const AUTH_MAX_DURATION_SEC = 180 * 60

// Read audio duration from a File using <audio>'s metadata-loaded event.
// Returns seconds or null if the browser can't determine it (e.g. exotic
// codec, broken container) — null lets the upload proceed so the server's
// transcription error gives the user a real diagnostic instead of a
// "could not determine duration" dead-end. 5-second timeout handles the
// edge case where neither loadedmetadata nor error ever fires.
function getAudioDurationSec(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file)
    const audio = new Audio()
    audio.preload = 'metadata'
    let resolved = false
    const finish = (value) => {
      if (resolved) return
      resolved = true
      URL.revokeObjectURL(url)
      resolve(value)
    }
    audio.onloadedmetadata = () => {
      finish(isFinite(audio.duration) ? audio.duration : null)
    }
    audio.onerror = () => finish(null)
    setTimeout(() => finish(null), 5000)
    audio.src = url
  })
}

// Whisper language codes shown in the picker.
// Labels (with flag) come from the i18n dictionary per UI locale.
// Speech-language picker codes. All supported by Whisper large-v3.
// Sorted alphabetically by ISO code for predictable scanning. The user-
// visible labels come from DICT[locale].languages[code]; names exist in
// EN/FR/DE/ES/RU and the rest fall back to EN automatically.
// Added 2026-06-13 after a user uploaded mixed Russian/Ukrainian audio
// and Whisper auto-detect chose Russian, producing phonetic gibberish.
// Letting users pick Ukrainian (uk) — and a wider set generally — gives
// a clean escape hatch when auto-detect misfires on mixed speech.
const PICKER_LANG_CODES = [
  'ar', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'en', 'es', 'fa',
  'fi', 'fr', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'ko',
  'ms', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sv', 'ta',
  'th', 'tr', 'uk', 'ur', 'vi', 'zh',
]

// Group Whisper segments into paragraphs based on pauses between segments
// If gap between consecutive segments > PAUSE_THRESHOLD seconds → new paragraph
function toParagraphs(segments) {
  if (!segments?.length) return ''
  const PAUSE_THRESHOLD = 1.5 // seconds
  let result = ''
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const text = seg.text.trim()
    if (!text) continue
    if (i === 0) {
      result += text
    } else {
      const prev = segments[i - 1]
      const gap = seg.start - prev.end
      result += gap > PAUSE_THRESHOLD ? '\n\n' + text : ' ' + text
    }
  }
  return result
}

// Convert Whisper segments → SRT string
function toSRT(segments) {
  if (!segments?.length) return ''
  const fmt = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = Math.floor(s % 60)
    const ms = Math.round((s % 1) * 1000)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(ms).padStart(3, '0')}`
  }
  return segments
    .map((seg, i) => `${i + 1}\n${fmt(seg.start)} --> ${fmt(seg.end)}\n${seg.text.trim()}`)
    .join('\n\n') + '\n'
}

// MM:SS or H:MM:SS clock format for the Reader view's timestamp column.
// Skip the hour digit when the audio is under an hour so a 90-second voice memo
// shows "0:00" / "0:42" instead of the visually cluttered "00:00" / "00:00:42".
function fmtClockShort(sec) {
  const s = Math.max(0, Math.floor(sec || 0))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const r = s % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
  return `${m}:${String(r).padStart(2, '0')}`
}

// Reader view: render Whisper segments as a two-column list — left timestamp,
// right text. Far easier to scan than a wall of paragraphs. Used in the "done"
// state when segments are available (Editor view is the textarea fallback).
//
// When an `onSeek` handler is passed (audio player available), the timestamp
// becomes a clickable button that jumps the player. The `currentTime` prop
// (seconds) drives row highlighting for the currently-playing segment.
//
// `query` (non-empty string) turns on inline highlight + match navigation.
// `activeMatchIdx` decides which <mark> gets the "focused" stronger highlight
// (auto-scrolled into view when it changes). `onMatchCountChange(n)` reports
// the total match count back up to the search bar, used to drive the counter
// and enable/disable prev/next arrows.
function TranscriptReader({ segments, currentTime = 0, onSeek, query = '', activeMatchIdx = 0, onMatchCountChange }) {
  // Index of the segment that contains `currentTime`. -1 when nothing matches
  // (player paused at the very start or past the end). Hooks must be called
  // unconditionally, so this and the auto-scroll effect run even on empty
  // segments; the early-return below short-circuits the render itself.
  const containerRef = useRef(null)
  const activeIdx = segments?.length
    ? segments.findIndex(
        (s) => currentTime >= (s.start || 0) && currentTime < (s.end || 0)
      )
    : -1

  // Collect every match position across all segments in one flat counter so
  // the parent can drive prev/next navigation. We assign each match a
  // globally-unique index (matchOrdinal) which the renderer uses to set the
  // data attribute the auto-scroll effect targets.
  const q = (query || '').trim()
  const qLower = q.toLowerCase()
  let matchCounter = 0
  const matchesPerSegment = []
  if (q && segments?.length) {
    for (const seg of segments) {
      const txt = (seg.text || '').trim()
      const lower = txt.toLowerCase()
      const positions = []
      if (qLower) {
        let from = 0
        let idx
        while ((idx = lower.indexOf(qLower, from)) !== -1) {
          positions.push({ start: idx, end: idx + qLower.length, ordinal: matchCounter++ })
          from = idx + qLower.length
        }
      }
      matchesPerSegment.push(positions)
    }
  }
  const totalMatches = matchCounter

  // Report match count up to the search bar. Effect dep on totalMatches +
  // the live query so a query change with the same count still re-syncs.
  useEffect(() => {
    if (onMatchCountChange) onMatchCountChange(totalMatches)
  }, [totalMatches, q, onMatchCountChange])

  // Auto-scroll target switches based on what's "live":
  //   - if there's a search query with matches → scroll to the active match
  //   - otherwise → scroll to the currently-playing segment (existing behavior)
  useEffect(() => {
    if (!containerRef.current) return
    if (q && totalMatches > 0) {
      const safeIdx = Math.max(0, Math.min(activeMatchIdx, totalMatches - 1))
      const el = containerRef.current.querySelector(`[data-match-ordinal="${safeIdx}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    if (activeIdx < 0) return
    const row = containerRef.current.querySelector(`[data-seg-idx="${activeIdx}"]`)
    if (row) row.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [activeIdx, q, activeMatchIdx, totalMatches])

  if (!segments?.length) return null

  // Helper: render text with <mark> spans at the given positions.
  const renderHighlighted = (text, positions) => {
    if (!positions.length) return text
    const out = []
    let cursor = 0
    positions.forEach((p, i) => {
      if (p.start > cursor) out.push(<span key={`t${i}`}>{text.slice(cursor, p.start)}</span>)
      const isActive = p.ordinal === activeMatchIdx
      out.push(
        <mark
          key={`m${i}`}
          data-match-ordinal={p.ordinal}
          className={`rounded px-0.5 ${isActive ? 'bg-amber-300 text-slate-900' : 'bg-yellow-200 text-slate-800'}`}
        >
          {text.slice(p.start, p.end)}
        </mark>
      )
      cursor = p.end
    })
    if (cursor < text.length) out.push(<span key="tail">{text.slice(cursor)}</span>)
    return out
  }

  return (
    <div ref={containerRef} className="border border-slate-200 rounded-xl bg-white max-h-[28rem] overflow-y-auto divide-y divide-slate-100">
      {segments.map((seg, i) => {
        const text = (seg.text || '').trim()
        if (!text) return null
        const isActive = i === activeIdx
        const Tag = onSeek ? 'button' : 'span'
        const positions = matchesPerSegment[i] || []
        return (
          <div
            key={i}
            data-seg-idx={i}
            className={`grid grid-cols-[3.25rem_1fr] gap-3 px-4 py-2.5 transition-colors ${
              isActive ? 'bg-brand-50' : 'hover:bg-slate-50'
            }`}
          >
            <Tag
              {...(onSeek
                ? {
                    type: 'button',
                    onClick: () => onSeek(seg.start || 0),
                    className: `font-mono text-xs text-brand-600 pt-0.5 select-none tabular-nums text-left hover:text-brand-700 hover:underline cursor-pointer ${
                      isActive ? 'font-semibold' : ''
                    }`,
                    title: 'Jump to this moment',
                  }
                : {
                    className: 'font-mono text-xs text-brand-600 pt-0.5 select-none tabular-nums',
                  })}
            >
              {fmtClockShort(seg.start)}
            </Tag>
            <span className="text-sm text-slate-700 leading-relaxed">
              {q ? renderHighlighted(text, positions) : text}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// Plain text with [HH:MM:SS] timestamp prefix per paragraph.
// Mirrors the paragraph-splitting logic from toParagraphs() — a new timestamp
// is emitted whenever there's a gap longer than PAUSE_THRESHOLD between segments.
function toTimestampedTxt(segments) {
  if (!segments?.length) return ''
  const PAUSE_THRESHOLD = 1.5
  const fmtClock = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = Math.floor(s % 60)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }

  const paragraphs = []
  let buffer = []
  let paragraphStart = segments[0].start

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const text = seg.text.trim()
    if (!text) continue

    if (i === 0) {
      buffer.push(text)
    } else {
      const prev = segments[i - 1]
      const gap = seg.start - prev.end
      if (gap > PAUSE_THRESHOLD) {
        paragraphs.push(`[${fmtClock(paragraphStart)}] ${buffer.join(' ')}`)
        buffer = [text]
        paragraphStart = seg.start
      } else {
        buffer.push(text)
      }
    }
  }
  if (buffer.length) {
    paragraphs.push(`[${fmtClock(paragraphStart)}] ${buffer.join(' ')}`)
  }
  return paragraphs.join('\n\n') + '\n'
}

export default function UploadZone({ defaultLanguage = '', locale: localeProp, enableYouTubeUrl = false }) {
  // UI locale: explicit prop (from /fr, /de, /es, /ru pages via LandingLayout)
  // wins, otherwise infer from URL (covers EN homepage and all format/use-case
  // pages, which currently share the EN dictionary).
  const pathname = usePathname() || '/'
  const locale = localeProp || detectLocaleFromPath(pathname)

  const [state, setState] = useState('idle') // idle | dragging | uploading | queued | done | error
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [segments, setSegments] = useState([])
  // Big-file confirm modal — non-null shows the modal. Set by processFile
  // when an authed user picks a file >60 MB; cleared on Continue/Cancel.
  // Shape: { file: File, chunkCount: number, isVideo: boolean }
  const [bigFileConfirm, setBigFileConfirm] = useState(null)
  // failedChunks comes back from /api/transcribe-multi when one or more
  // chunks failed during processing. Non-empty array triggers an amber
  // banner above the transcript explaining the gap.
  const [failedChunks, setFailedChunks] = useState([])
  // Snapshot of credits at upload time so the modal can show
  // "{n} of your {remaining}" without an extra round-trip.
  const [creditsRemaining, setCreditsRemaining] = useState(null)
  // 'reader' = per-line timestamps + text (TranscriptReader, default when we
  // have segments). 'editor' = textarea — fallback when no segments, or when
  // the user wants to fix a typo before exporting.
  const [viewMode, setViewMode] = useState('reader')
  // Search-in-transcript (Reader mode only). Lives at this level so the
  // counter / prev-next bar above the Reader can drive activeMatchIdx,
  // and TranscriptReader reports total match count back here on every
  // query change.
  const [searchQuery, setSearchQuery] = useState('')
  const [searchActiveIdx, setSearchActiveIdx] = useState(0)
  const [searchTotal, setSearchTotal] = useState(0)
  // Reset focus to first match whenever the query itself changes; without
  // this the user types a new query but the activeIdx stays at e.g. 5
  // and the highlight feels stuck.
  useEffect(() => { setSearchActiveIdx(0) }, [searchQuery])
  // Local object URL for the uploaded File, so we can offer in-browser audio
  // playback alongside the transcript. Stays alive only on the device — the
  // server-side blob has typically been deleted by the time we render. Null
  // when the source isn't available (e.g. restored-from-snapshot flow has
  // the transcript but no File).
  const [audioUrl, setAudioUrl] = useState(null)
  const audioRef = useRef(null)
  // Current playback time in seconds, updated via the audio element's
  // timeupdate event. Drives row-highlighting in the Reader view.
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)

  // Translation state. translatedSegments holds the translated copy of
  // `segments` when present; the Reader renders it instead of the original.
  // translatedTranscript is the same content flat-joined into paragraphs so
  // the Editor textarea has something editable. status: idle | loading |
  // error. translateLang is the code currently showing ('' = original).
  // Exports still use the ORIGINAL transcript by default; localized exports
  // would be a separate feature.
  const [translatedSegments, setTranslatedSegments] = useState(null)
  const [translatedTranscript, setTranslatedTranscript] = useState('')
  const [translateLang, setTranslateLang] = useState('')
  const [translateTarget, setTranslateTarget] = useState('es')
  const [translateStatus, setTranslateStatus] = useState('idle')
  const [translateError, setTranslateError] = useState('')
  const [language, setLanguage] = useState(defaultLanguage)
  const [error, setError] = useState('')
  // YouTube URL flow (Option F in project_mictoo_youtube_downloader_strategy):
  // user pastes a YouTube URL → we fetch the auto-captions YouTube already
  // generates → render them in the same Reader as a normal transcription.
  // Zero Whisper cost on our side. Fallback when the video has no captions
  // is a link to /how-to-download-youtube-video.
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [youtubeStatus, setYoutubeStatus] = useState('idle') // idle | loading | error | noCaptions
  const [youtubeError, setYoutubeError] = useState('')
  // Debug payload returned by /api/youtube-captions when something doesn't
  // work. Rendered in a tiny <details> below the error message so the user
  // can screenshot it without opening DevTools.
  const [youtubeDebug, setYoutubeDebug] = useState(null)
  // True when the server signalled `signInHelps: true` in a 429 response,
  // i.e. an anonymous user hit the IP rate limit and signing in would give
  // them a fresh user-keyed budget. Drives the "Sign in to keep going" CTA
  // shown in the error state.
  const [errorOffersSignIn, setErrorOffersSignIn] = useState(false)
  // Which "how to fix this" guide to surface from the error screen. 'compress'
  // for >25 MB files (legacy default), 'split' for files past the duration
  // cap. null hides the link entirely (e.g. rate-limit errors where the only
  // useful action is signing in or waiting).
  const [errorHelpType, setErrorHelpType] = useState('compress')
  const [copied, setCopied] = useState(false)

  // When Groq is rate-limited the server returns 202 + jobId; the client
  // polls /api/transcribe-status/[jobId] until it transitions to completed
  // or failed. queueInfo holds { position, queueLength } for the UI label.
  const [queueInfo, setQueueInfo] = useState({ position: null, queueLength: null, jobStatus: 'queued' })

  // Auth state. Drives the export buttons (DOCX/PDF/VTT/JSON) — anonymous
  // users see them but a click bounces to /sign-in instead of generating.
  const [authUser, setAuthUser] = useState(null)
  const [authLoaded, setAuthLoaded] = useState(false)

  // Set true when we restored a transcript from the localStorage snapshot
  // after a sign-in round-trip. Drives a small "restored from your browser"
  // banner above the result so users understand where the data came from
  // and that it never went to our servers.
  const [restoredFromSnapshot, setRestoredFromSnapshot] = useState(false)

  // What goes into DOCX / PDF / JSON exports. Three-state toggle:
  //   'both'       — AI summary + transcript (default; most useful for sharing)
  //   'summary'    — summary only (compact, good for meeting recaps)
  //   'transcript' — transcript only (no AI section, like the original behaviour)
  // The toggle is only shown when summaryData exists. VTT ignores this — it's
  // always just subtitles from segments.
  // 'all' = transcript + summary (renamed from 'both' now that translation
  // exists as a separate mode), 'summary' = summary only, 'transcript' =
  // original transcript only, 'translation' = translated transcript only.
  // 'translation' is only selectable when translatedSegments is non-null.
  const [exportContent, setExportContent] = useState('all')
  useEffect(() => {
    const supabase = createClient()
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      setAuthUser(data?.user ?? null)
      setAuthLoaded(true)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      setAuthUser(session?.user ?? null)
      setAuthLoaded(true)
    })
    return () => { mounted = false; subscription?.unsubscribe() }
  }, [])

  // Separate state for the AI summary so it can stream in independently of
  // the transcript. status: idle | loading | done | error
  const [summaryStatus, setSummaryStatus] = useState('idle')
  const [summaryData, setSummaryData] = useState(null)
  const [summaryError, setSummaryError] = useState('')

  // Spoken language as detected by Whisper (e.g. "ukrainian", "english").
  // Used by the summarize call so the AI summary matches the recording's
  // language rather than the UI locale.
  const [spokenLanguage, setSpokenLanguage] = useState(null)

  // Row id in `public.transcripts` for authed users. Non-null after the
  // server-side insert in /api/transcribe (sync) or /api/transcribe-worker
  // (queued). Passed to /api/summarize so the AI summary is written onto
  // the same row and surfaces in /history.
  const [transcriptId, setTranscriptId] = useState(null)

  // Multi-file batch state. Authenticated users can pick up to 3 files at
  // once; we process the first immediately and queue the rest here. When a
  // file reaches state='done', we auto-start the next after a brief pause
  // so the user gets a glance at the result. Anonymous users never see this
  // — their picker is single-file (matches their 3/hour budget).
  const [batchQueue, setBatchQueue] = useState([])
  const [batchTotal, setBatchTotal] = useState(0) // total files in this batch
  const [batchDoneCount, setBatchDoneCount] = useState(0) // 0-based index of currently-processing file

  const fileRef = useRef(null)

  // ── Result persistence across sign-in round-trip ────────────────────────
  // When an anonymous user clicks an auth-gated export button (.docx, .pdf,
  // .vtt, .json), we redirect to /sign-in. Without this, after the auth flow
  // brings them back the page re-mounts and the transcript is gone — they'd
  // have to re-upload and pay for another Whisper call. Solution: snapshot
  // the result state to localStorage right before the redirect, restore
  // it on the next mount, then clear the snapshot so it doesn't leak across
  // unrelated visits.
  //
  // localStorage (not sessionStorage) because magic-link emails frequently
  // open in a NEW tab — sessionStorage there would be empty. The 30-min TTL
  // below guards against stale snapshots from past sessions.
  const RESULT_SNAPSHOT_KEY = 'mictoo:upload:pending'
  const RESULT_SNAPSHOT_TTL_MS = 30 * 60 * 1000 // 30 minutes — anti-stale

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = localStorage.getItem(RESULT_SNAPSHOT_KEY)
      if (!raw) return
      localStorage.removeItem(RESULT_SNAPSHOT_KEY)
      const snap = JSON.parse(raw)
      if (!snap?.ts || Date.now() - snap.ts > RESULT_SNAPSHOT_TTL_MS) return

      // Restore everything that's needed to re-render the 'done' state.
      // `file` is restored as a plain `{ name, size, type }` object — the
      // component only reads those fields, never the raw bytes, so a plain
      // object works the same as a File instance for our render code.
      if (snap.transcript) setTranscript(snap.transcript)
      if (snap.segments) setSegments(snap.segments)
      if (snap.spokenLanguage !== undefined) setSpokenLanguage(snap.spokenLanguage)
      if (snap.file) setFile(snap.file)
      if (snap.summaryData) setSummaryData(snap.summaryData)
      if (snap.summaryStatus) setSummaryStatus(snap.summaryStatus)
      if (snap.summaryError) setSummaryError(snap.summaryError)
      if (snap.transcriptId) setTranscriptId(snap.transcriptId)
      setState('done')
      setRestoredFromSnapshot(true)
    } catch {
      // Ignore: corrupted snapshot just means user starts fresh.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveResultSnapshot = () => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(
        RESULT_SNAPSHOT_KEY,
        JSON.stringify({
          ts: Date.now(),
          transcript,
          segments,
          spokenLanguage,
          file: file ? { name: file.name, size: file.size, type: file.type } : null,
          summaryData,
          summaryStatus,
          summaryError,
          transcriptId,
        })
      )
    } catch {
      // Quota exceeded on very long transcripts — degrade silently. The
      // worst case is the user has to re-upload, which is what was already
      // happening before this snapshot existed.
    }
  }

  const reset = () => {
    setState('idle')
    setProgress(0)
    setFile(null)
    setTranscript('')
    setSegments([])
    setError('')
    setCopied(false)
    setSummaryStatus('idle')
    setSummaryData(null)
    setSummaryError('')
    setSpokenLanguage(null)
    setQueueInfo({ position: null, queueLength: null, jobStatus: 'queued' })
    setRestoredFromSnapshot(false)
    setTranscriptId(null)
    setErrorOffersSignIn(false)
    setErrorHelpType('compress')
    setAudioCurrentTime(0)
    setTranslatedSegments(null)
    setTranslatedTranscript('')
    setTranslateLang('')
    setTranslateStatus('idle')
    setTranslateError('')
    setYoutubeUrl('')
    setYoutubeStatus('idle')
    setYoutubeError('')
    // Manual reset (e.g. "New file" button) wipes any pending batch too —
    // user signalled they want a clean slate.
    setBatchQueue([])
    setBatchTotal(0)
    setBatchDoneCount(0)
  }

  // Translate the current transcript into `targetCode`. Stores the result so
  // the Reader can render it instead of the original. Exports are unaffected
  // by design — the SRT/VTT timings must match the audio, and translated
  // text is a viewing aid, not the canonical transcript.
  const translateTo = useCallback(async (targetCode) => {
    if (!segments.length) return
    setTranslateStatus('loading')
    setTranslateError('')
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segments: segments.map(s => ({ start: s.start, end: s.end, text: s.text })),
          targetLang: targetCode,
          sourceLang: spokenLanguage || undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `Translation failed (${res.status})`)
      }
      const segs = data.segments || []
      setTranslatedSegments(segs)
      // Flat-join the translated segments into paragraphs so the Editor
      // textarea has something editable. Same pause-threshold logic as the
      // original transcript so the layout feels familiar.
      setTranslatedTranscript(toParagraphs(segs))
      setTranslateLang(targetCode)
      setTranslateStatus('done')
    } catch (err) {
      setTranslateError(err?.message || 'Translation failed.')
      setTranslateStatus('error')
    }
  }, [segments, spokenLanguage])

  // Fetch YouTube captions for the URL the user pasted. On success populate
  // the same transcript + segments state as a normal upload, then flip to
  // the 'done' state so the Reader renders. On "no captions" we surface a
  // pointer to /how-to-download-youtube-video as the fallback.
  const fetchYouTubeCaptions = useCallback(async () => {
    const url = (youtubeUrl || '').trim()
    if (!url) return
    setYoutubeStatus('loading')
    setYoutubeError('')
    setYoutubeDebug(null)
    try {
      const res = await fetch('/api/youtube-captions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, lang: language || undefined }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        if (data?.debug) setYoutubeDebug(data.debug)
        throw new Error(data?.error || `Request failed (${res.status})`)
      }
      if (data?.noCaptions) {
        if (data?.debug) setYoutubeDebug(data.debug)
        setYoutubeStatus('noCaptions')
        setYoutubeError(data.error || 'This video has no captions.')
        return
      }
      if (!Array.isArray(data?.segments) || !data.segments.length) {
        throw new Error('No captions returned.')
      }

      // Pump into the same state as a normal transcription so the result
      // screen renders without any code changes.
      setTranscript(data.text || data.segments.map(s => s.text).join(' '))
      setSegments(data.segments)
      setSpokenLanguage(data.languageCode || null)
      setTranscriptId(null)
      // Synthesize a pseudo-File so result-header stats and exports use the
      // YouTube video title as the filename. The Reader doesn't actually need
      // a File — only the audio player does, and we already gate that on
      // audioUrl which stays null for the YouTube path.
      const safeTitle = (data.title || `youtube-${data.videoId}`).replace(/[\\/:*?"<>|]/g, '').slice(0, 80)
      const fakeFile = new File([''], `${safeTitle}.txt`, { type: 'text/plain' })
      setFile(fakeFile)
      setYoutubeStatus('idle')
      setState('done')

      // Kick off the AI summary as we do after a normal transcribe.
      generateSummary(data.text || '', data.languageCode || null, null)
    } catch (err) {
      setYoutubeError(err?.message || 'Could not fetch YouTube captions.')
      setYoutubeStatus('error')
    }
  // generateSummary is a useCallback whose identity is stable enough; we
  // intentionally narrow deps to avoid stale-closure traps when language
  // changes mid-flow.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtubeUrl, language])

  // Auto-trigger fetch when the page is opened with a ?url= query param.
  // Used by the "Get the full transcript" CTAs on /transcripts/{slug}
  // summary pages — the user already gave consent by clicking the CTA,
  // so the second click on "Get transcript" here is redundant. We pre-
  // fill the input and fire the request once on mount. Guarded by a ref
  // so React 18 strict-mode double-mounts don't trigger two fetches.
  const autoFetchedRef = useRef(false)
  useEffect(() => {
    if (!enableYouTubeUrl || autoFetchedRef.current) return
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const urlParam = params.get('url')
    if (!urlParam) return
    autoFetchedRef.current = true
    setYoutubeUrl(urlParam)
    // Defer to next tick so setYoutubeUrl is committed before the
    // fetch reads `youtubeUrl` from its closure on the next call.
    setTimeout(() => {
      // Read youtubeUrl from state — but our callback captured the old
      // value. Bypass by passing the URL through state and waiting one
      // more tick before invoking the callback.
      setTimeout(() => fetchYouTubeCaptions(), 0)
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableYouTubeUrl])

  // Whenever a fresh File lands in state, mint a local object URL so the
  // result view can offer in-browser playback. We revoke the previous URL
  // (and on unmount) to avoid memory leaks. Anonymous/restored-from-snapshot
  // sessions don't have a File — audioUrl stays null and the player is
  // simply not rendered.
  useEffect(() => {
    if (!file) {
      setAudioUrl(null)
      return
    }
    const url = URL.createObjectURL(file)
    setAudioUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  // Poll /api/transcribe-status/[jobId] every 3s while a job is queued or
  // processing. Resolves with the final transcription payload, or throws on
  // failure / 404. Pulled out as its own function so processFile reads top-down.
  const pollJob = useCallback(async (jobId) => {
    const POLL_INTERVAL_MS = 3000
    const MAX_WAIT_MS = 15 * 60 * 1000 // 15 minutes — well over a reasonable queue
    const startedAt = Date.now()

    while (Date.now() - startedAt < MAX_WAIT_MS) {
      await new Promise(r => setTimeout(r, POLL_INTERVAL_MS))
      const res = await fetch(`/api/transcribe-status/${jobId}`, { cache: 'no-store' })
      if (res.status === 404) {
        throw new Error('Job not found or expired.')
      }
      if (!res.ok) {
        // Transient — keep trying for a few more cycles before giving up.
        continue
      }
      const data = await res.json()
      if (data.status === 'queued') {
        setQueueInfo({
          position: data.position ?? null,
          queueLength: data.queueLength ?? null,
          jobStatus: 'queued',
        })
        continue
      }
      if (data.status === 'processing') {
        setQueueInfo(prev => ({ ...prev, jobStatus: 'processing' }))
        continue
      }
      if (data.status === 'completed') {
        return data
      }
      if (data.status === 'failed') {
        throw new Error(data.error || 'Transcription failed.')
      }
    }
    throw new Error('Transcription is taking longer than expected. Please try again later.')
  }, [])

  // Kicks off the /api/summarize call. Pulled out so the Retry button in
  // SummaryCard can re-trigger without re-running the whole transcription.
  // spokenLanguage comes from Whisper's detected language (e.g. "ukrainian"),
  // so the summary is written in the recording's language by default rather
  // than the UI locale — that's almost always what the user wants.
  const generateSummary = useCallback(async (transcriptText, spokenLanguage, tId) => {
    if (!transcriptText || transcriptText.length < 30) return
    setSummaryStatus('loading')
    setSummaryError('')
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: transcriptText,
          spokenLanguage,
          locale,
          // Lets the server attach the summary back to /history. Null for
          // anonymous users — no row was inserted, nothing to update.
          transcriptId: tId || null,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Summary failed.')
      }
      const data = await res.json()
      // If model returned nothing meaningful, treat as error so user can retry.
      if (!data.summary && (!data.keyPoints || data.keyPoints.length === 0)) {
        throw new Error('Empty summary returned.')
      }
      setSummaryData(data)
      setSummaryStatus('done')
    } catch (err) {
      setSummaryError(err.message)
      setSummaryStatus('error')
    }
  }, [locale])

  const processFile = useCallback(async (f) => {
    // Auth-aware size cap.
    //   Anon stays at the legacy 25 MB.
    //   Authed users get up to AUTH_MAX_SIZE_BYTES (180 MB) and anything
    //     between ANON_MAX and BIG_FILE_THRESHOLD just routes to
    //     /api/transcribe-multi.
    //   Auth-state-not-loaded-yet (a moment after page load while
    //     supabase.auth.getUser() is in flight): optimistically use the
    //     AUTH cap. The server is the safety net — if the user is
    //     actually anon, upload-token will 413 with the same message.
    //     This avoids rejecting an authed user's file just because the
    //     client hadn't finished hydrating.
    const sizeCapBytes = !authLoaded
      ? AUTH_MAX_SIZE_BYTES
      : (authUser ? AUTH_MAX_SIZE_BYTES : ANON_MAX_SIZE_BYTES)
    if (f.size > sizeCapBytes) {
      const sizeStr = `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      setError(t(locale, 'status.fileTooLargeDetailed', { size: sizeStr }))
      setErrorHelpType('compress')
      setState('error')
      return
    }

    // Big file path (authed users only — anon was rejected by sizeCap above).
    // Show a confirm modal so the user knows ahead of time how many of their
    // daily credits the file will use. The modal calls processFileConfirmed
    // (declared as a ref-stable function below) when the user clicks
    // Continue, or just cancels otherwise.
    //
    // If auth isn't loaded yet, skip the modal — the file may belong to an
    // anon user that the server will reject. Better than showing a credits
    // modal that turns out to be wrong.
    if (authLoaded && authUser && f.size > BIG_FILE_THRESHOLD_BYTES) {
      const isVideo = (f.type || '').startsWith('video/')
      // chunkCount is a client-side estimate by size — server may differ if
      // the file is a big MP4 with small audio (server extracts audio first
      // and counts by audio size). We show the estimate honestly.
      const chunkCount = Math.min(3, Math.ceil(f.size / BIG_FILE_THRESHOLD_BYTES))
      // Pre-fetch remaining credits so the modal can show
      // "{n} of your {remaining}" without showing a loading state. If the
      // fetch fails (Redis missing, network blip), show "—" — better than
      // making the user wait or showing a fake number.
      try {
        const r = await fetch('/api/credits', { cache: 'no-store' })
        if (r.ok) {
          const j = await r.json()
          setCreditsRemaining(
            j?.available && Number.isFinite(j?.remaining) ? j.remaining : null
          )
        } else {
          setCreditsRemaining(null)
        }
      } catch {
        setCreditsRemaining(null)
      }
      setBigFileConfirm({ file: f, chunkCount, isVideo })
      return
    }
    // Normal-size file: run the original processFile body inline below.
    return processFileCore(f)
  }, [locale, authUser, authLoaded])

  // Run a credits-check + start the upload flow once the user has confirmed
  // a big file. Lives separately from processFile so processFile stays a
  // simple branch + the confirm-modal layer is uniform across sources
  // (drag-drop, file picker, restore-from-storage).
  const processFileConfirmed = useCallback(async () => {
    const pending = bigFileConfirm
    setBigFileConfirm(null)
    if (!pending) return
    return processFileCore(pending.file)
  }, [bigFileConfirm])

  const processFileCore = useCallback(async (f) => {
    // Re-check sizes here too in case processFileCore is invoked outside
    // processFile (defensive). Same optimistic-when-not-loaded rule as
    // processFile, to handle a file restored from snapshot that runs
    // before supabase.auth.getUser() returns.
    const sizeCapBytes = !authLoaded
      ? AUTH_MAX_SIZE_BYTES
      : (authUser ? AUTH_MAX_SIZE_BYTES : ANON_MAX_SIZE_BYTES)
    if (f.size > sizeCapBytes) {
      const sizeStr = `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      setError(t(locale, 'status.fileTooLargeDetailed', { size: sizeStr }))
      setErrorHelpType('compress')
      setState('error')
      return
    }

    // Reject raw ADTS-AAC streams upfront — these arrive with MIME
    // `audio/vnd.dlna.adts` from certain Android voice recorders and DLNA
    // streamers. Whisper cannot decode raw ADTS (no MP4 container around
    // the bytes), and our .aac → .m4a rename trick fools the extension
    // check but the decoder still fails. Better to tell the user now than
    // let them wait through a 19 MB upload that will 400-out at the API.
    if (f.type === 'audio/vnd.dlna.adts') {
      setError(t(locale, 'status.aacAdtsNotSupported'))
      // No "how to fix" guide for ADTS — the error itself names the tool.
      setErrorHelpType(null)
      setState('error')
      return
    }

    // Duration pre-check. Run before upload starts so a too-long file is
    // caught instantly instead of wasting a 23 MB upload. Server re-checks
    // via music-metadata; null from getAudioDurationSec (exotic codec /
    // unreadable metadata) lets the upload through and the server is the
    // safety net for those.
    const durationSec = await getAudioDurationSec(f)
    if (durationSec != null) {
      // Same optimistic-when-not-loaded rule as the size check above:
      // during the supabase.auth.getUser() hydration window, treat the
      // user as authed for cap purposes. Server enforces the real cap.
      const isAuthed = !authLoaded ? true : !!authUser
      const maxSec = isAuthed ? AUTH_MAX_DURATION_SEC : ANON_MAX_DURATION_SEC
      if (durationSec > maxSec) {
        const minutes = Math.round(durationSec / 60)
        setError(
          t(
            locale,
            isAuthed ? 'status.fileTooLongAuth' : 'status.fileTooLongAnon',
            { minutes }
          )
        )
        // The anon message includes a "sign up" pitch — surface the same
        // CTA the rate-limit 429 path uses so the user sees a sign-in
        // button on the error screen. Pair it with the split-audio guide
        // so users have an actionable second option besides registering.
        setErrorOffersSignIn(!isAuthed)
        setErrorHelpType('split')
        setState('error')
        return
      }
    }

    setFile(f)
    setState('uploading')
    setProgress(2)

    let ticker = null

    try {
      // ── Step 1: direct upload to Vercel Blob ────────────────────────────
      // The browser uploads straight to Blob storage; our serverless function
      // is never in the path, so the 4.5 MB request-body limit is bypassed
      // entirely. /api/upload-token issues a short-lived, scoped client token
      // (audio/video MIME only, ≤25 MB, random suffix on the path).
      //
      // Filename is sanitized to ASCII before put() — @vercel/blob mis-handles
      // non-ASCII names and produces a mojibake URL that 400s on later GET
      // (observed in prod 2026-06-09 with a Chinese-named file). The MIME
      // type is also passed so sanitize can derive an extension when the
      // user's filename has none — Whisper rejects files with no recognized
      // extension (observed in prod 2026-06-11 with "karine 2" / "interview
      // bagagerie damien"). The original f.name stays in component state
      // for the UI and download exports.
      const blob = await upload(sanitizeBlobFilename(f.name, f.type), f, {
        access: 'public',
        handleUploadUrl: '/api/upload-token',
        contentType: f.type || 'audio/mpeg',
        onUploadProgress: ({ percentage }) => {
          // Reserve 0–50% of the progress bar for the upload phase. Whisper
          // (the longer step) gets 50–100%, ticker-driven below.
          setProgress(Math.max(2, Math.round(percentage * 0.5)))
        },
      })

      // ── Step 2: ask our route to transcribe the file at that URL ────────
      // The route fetches the blob server-side, sends to Whisper, and
      // del()s the blob in its finally block — we don't have to clean up.
      //
      // Files >60 MB go to /api/transcribe-multi which auto-splits into
      // 2-3 chunks (authed users only; each chunk burns 1 daily credit).
      // Smaller files keep the well-tested /api/transcribe path with the
      // full provider chain.
      setProgress(50)
      ticker = setInterval(() => {
        setProgress(p => Math.min(p + Math.random() * 4, 92))
      }, 800)

      // Decimal MB to match the modal trigger (BIG_FILE_THRESHOLD_BYTES at the
      // top of this file) AND the /api/transcribe AUTH_MAX_BYTES cap. Mixing
      // 1024*1024 here would route a 61 MB file (61_000_000 bytes, modal
      // shown) to /api/transcribe — which rejects with "Maximum size is 57MB"
      // because the cap is 60_000_000 bytes (= 57.22 binary MB).
      const transcribeEndpoint = f.size > BIG_FILE_THRESHOLD_BYTES
        ? '/api/transcribe-multi'
        : '/api/transcribe'

      const res = await fetch(transcribeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blobUrl: blob.url,
          language: language || undefined,
          fileName: f.name,
          fileType: f.type || 'audio/mpeg',
          fileSize: f.size,
        }),
      })
      clearInterval(ticker)
      ticker = null

      if (!res.ok && res.status !== 202) {
        const data = await res.json().catch(() => ({}))
        const failed = new Error(data.error || 'Transcription failed. Please try again.')
        // Carry the signInHelps flag through to the catch handler so the
        // error UI knows whether to show a "Sign in to keep going" CTA.
        failed.offersSignIn = !!data.signInHelps
        // Server may hint which help-guide link to surface (e.g. 'split'
        // for duration rejections). Forwarded to the error UI.
        failed.helpType = data.helpType || null
        throw failed
      }

      let data = await res.json()

      // 202 = Groq was rate-limited; server enqueued the job. Switch into
      // polling mode and wait for the worker to finish. queueInfo drives the
      // UI label ("Position N of M") while we wait.
      if (res.status === 202 && data.jobId) {
        setState('queued')
        setProgress(50) // stay at 50%; queue progress is shown as position
        setQueueInfo({ position: null, queueLength: null, jobStatus: 'queued' })
        data = await pollJob(data.jobId)
      }

      setProgress(100)
      // Surface chunk-level failures from /api/transcribe-multi so the result
      // view can show the "some chunks failed" banner. Empty/missing for
      // normal single-file transcribes (/api/transcribe).
      if (Array.isArray(data.failedChunks) && data.failedChunks.length > 0) {
        setFailedChunks(data.failedChunks)
      } else {
        setFailedChunks([])
      }
      const segs = data.segments ?? []
      const finalText = segs.length > 0 ? toParagraphs(segs) : data.text
      const detectedLang = data.language || null
      const tId = data.transcriptId || null
      // Use paragraph-formatted text if segments are available, else raw text
      setTranscript(finalText)
      setSegments(segs)
      setSpokenLanguage(detectedLang)
      setTranscriptId(tId)
      setState('done')

      // Kick off the AI summary in parallel — doesn't block the transcript UI.
      // Pass the detected spoken language so the summary is in the same
      // language as the recording (a Ukrainian audio → Ukrainian summary).
      // Pass transcriptId so the summary is attached to the same /history row.
      generateSummary(finalText, detectedLang, tId)
    } catch (err) {
      if (ticker) clearInterval(ticker)
      setError(err?.message || 'Transcription failed. Please try again.')
      setErrorOffersSignIn(!!err?.offersSignIn)
      // Server-side duration rejection sends `helpType: 'split'`; respect it
      // when present, otherwise fall back to compress as the safe default
      // (covers historical errors and generic failures).
      setErrorHelpType(err?.helpType || 'compress')
      setState('error')
    }
  }, [language, locale, generateSummary, pollJob])

  // Max files in one batch. UI enforces this AND backend per-user queue
  // depth caps at PER_USER_QUEUE_LIMIT (=3) anyway, so the user can't
  // smuggle more in by tampering with the picker.
  const MAX_BATCH = 3

  // Pick a list of files for processing. Authed users get multi-file batch;
  // anonymous users always single-file (matches their IP rate budget).
  const acceptFiles = useCallback((fileList) => {
    if (!fileList || fileList.length === 0) return
    const all = Array.from(fileList)
    if (!authUser || all.length === 1) {
      processFile(all[0])
      return
    }
    // Authed multi-file: process the first immediately, queue the rest.
    const batch = all.slice(0, MAX_BATCH)
    const [first, ...rest] = batch
    setBatchQueue(rest)
    setBatchTotal(batch.length)
    setBatchDoneCount(0)
    processFile(first)
  }, [authUser, processFile])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setState('idle')
    acceptFiles(e.dataTransfer.files)
  }, [acceptFiles])

  const handleFile = (e) => {
    acceptFiles(e.target.files)
  }

  // When a file completes (state='done'), check whether there are more in
  // the batch and start the next one after a short pause. 10s is the
  // current compromise: long enough to glance at the result and to give
  // Groq's per-minute window a small breather, short enough that a batch
  // of 3 finishes in ~2 minutes total. Revisit if log analytics shows
  // batched uploads from authed users crowding anonymous users out of
  // sync slots — at that point routing batch files to a VPS queue is the
  // proper fix.
  const BATCH_INTERVAL_MS = 10_000

  useEffect(() => {
    if (state !== 'done') return
    if (batchQueue.length === 0) return
    const timer = setTimeout(() => {
      const [next, ...rest] = batchQueue
      setBatchQueue(rest)
      setBatchDoneCount(c => c + 1)
      // Reset most state but keep batch counters.
      setState('idle')
      setProgress(0)
      setFile(null)
      setTranscript('')
      setSegments([])
      setError('')
      setCopied(false)
      setSummaryStatus('idle')
      setSummaryData(null)
      setSummaryError('')
      setSpokenLanguage(null)
      setTranscriptId(null)
      setQueueInfo({ position: null, queueLength: null, jobStatus: 'queued' })
      setRestoredFromSnapshot(false)
      setErrorOffersSignIn(false)
      setErrorHelpType('compress')
      // Kick off the next file.
      processFile(next)
    }, BATCH_INTERVAL_MS)
    return () => clearTimeout(timer)
  }, [state, batchQueue, processFile])

  // Pick which transcript/segments the export handlers should use, based on
  // the exportContent toggle. When 'translation' is selected we route txt
  // exports to the user-edited translatedTranscript and srt/vtt to the
  // translatedSegments (timing intact, text translated — exactly the format
  // video creators want for foreign-language captions).
  const isExportingTranslation = exportContent === 'translation' && translatedSegments
  const activeText = () => (isExportingTranslation ? translatedTranscript : transcript)
  const activeSegments = () => (isExportingTranslation ? translatedSegments : segments)
  // Append '.es' / '.fr' / etc to the filename when exporting translation
  // so users with both the original and a translation in the same folder
  // don't overwrite each other.
  const fileSuffix = () => (isExportingTranslation && translateLang ? `.${translateLang}` : '')

  const copy = async () => {
    await navigator.clipboard.writeText(activeText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadTxt = () => {
    const blob = new Blob([activeText()], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + fileSuffix() + '.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadSRT = () => {
    const srt = toSRT(activeSegments())
    if (!srt) return
    const blob = new Blob([srt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + fileSuffix() + '.srt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadTimestampedTxt = () => {
    const txt = toTimestampedTxt(activeSegments())
    if (!txt) return
    const blob = new Blob([txt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + fileSuffix() + '-timestamped.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  // ── Auth-gated export handlers (DOCX/PDF/VTT/JSON) ────────────────────────
  // All four formats require sign-in. Anonymous users get redirected to the
  // sign-in page with a `next` param that brings them back here.

  const requireSignIn = () => {
    if (authUser) return true
    // Snapshot the current result so it's restored after the auth round-trip
    // — see the comment on RESULT_SNAPSHOT_KEY above. Without this we'd
    // make the user re-upload and pay for another Whisper call.
    saveResultSnapshot()
    const next = encodeURIComponent(window.location.pathname + (window.location.hash || ''))
    window.location.href = `/sign-in?next=${next}`
    return false
  }

  const triggerBlobDownload = (blob, fileNameOut) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileNameOut
    a.click()
    URL.revokeObjectURL(url)
  }

  const baseName = () => (file?.name?.replace(/\.[^.]+$/, '') || 'transcript')

  // Builds the payload shared by all the server-backed export handlers
  // (DOCX, PDF, JSON), honoring the current `exportContent` toggle:
  //   all         → original transcript + summary (if present)
  //   summary     → summary only
  //   transcript  → original transcript only
  //   translation → translated transcript only (no summary — translation
  //                 is its own deliverable)
  // VTT skips this — it's always just segments and respects the toggle
  // separately via activeSegments().
  const buildExportPayload = () => {
    const hasSummary = summaryStatus === 'done' && summaryData
    const includeSummary = hasSummary && (exportContent === 'all' || exportContent === 'summary')
    const includeTranscript = exportContent !== 'summary' || !hasSummary
    const useTranslation = exportContent === 'translation' && translatedSegments

    return {
      text: includeTranscript ? (useTranslation ? translatedTranscript : transcript) : '',
      segments: includeTranscript ? (useTranslation ? translatedSegments : segments) : [],
      fileName: file?.name ? (useTranslation && translateLang ? file.name.replace(/\.[^.]+$/, '') + `.${translateLang}` + (file.name.match(/\.[^.]+$/)?.[0] || '') : file.name) : undefined,
      fileSize: file?.size,
      fileType: file?.type,
      language: useTranslation ? translateLang : spokenLanguage,
      summary: includeSummary ? summaryData : null,
    }
  }

  // Client-side: VTT and JSON are tiny, no need to hit the server.
  // VTT honors the translation toggle: original captions by default,
  // translated captions when exportContent === 'translation'. Same timing
  // either way — only the cue text changes.
  const downloadVTT = () => {
    if (!requireSignIn()) return
    const vtt = toVTT(activeSegments())
    if (!vtt) return
    triggerBlobDownload(new Blob([vtt], { type: 'text/vtt' }), baseName() + fileSuffix() + '.vtt')
  }

  const downloadJSON = () => {
    if (!requireSignIn()) return
    const json = toJSON(buildExportPayload())
    triggerBlobDownload(new Blob([json], { type: 'application/json' }), baseName() + '.json')
  }

  // Server-side: DOCX and PDF need server libraries (docx, pdf-lib) so we
  // post the transcript and stream back the binary file.
  const downloadServerFormat = async (format) => {
    if (!requireSignIn()) return
    const res = await fetch(`/api/export/${format}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildExportPayload()),
    })
    if (res.status === 401) {
      // Session expired between page load and click — go re-auth.
      requireSignIn()
      return
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      // Surface unsupported_script and other clean errors via alert (good
      // enough for an indie scope; can be replaced with a toast later).
      alert(data.error || `Could not generate the ${format.toUpperCase()} file.`)
      return
    }
    const blob = await res.blob()
    triggerBlobDownload(blob, baseName() + '.' + format)
  }

  const downloadDOCX = () => downloadServerFormat('docx')
  const downloadPDF  = () => downloadServerFormat('pdf')

  // ── STATES ──────────────────────────────────────────────────────────────────

  if (state === 'uploading' || state === 'queued') {
    // Headline + sub-line depend on whether we're still in flight to Groq
    // (uploading) or stuck in the post-429 queue waiting for the worker.
    const inQueue = state === 'queued'
    const isProcessing = inQueue && queueInfo.jobStatus === 'processing'
    const headline = isProcessing
      ? t(locale, 'status.processing')
      : inQueue
        ? t(locale, 'status.queuedHeader')
        : t(locale, 'status.transcribing')

    // Rough wait estimate: ~45s per job ahead in queue (Whisper ~30s + worker overhead).
    let queueLine = null
    if (inQueue && queueInfo.position != null && queueInfo.queueLength != null) {
      const minutes = Math.max(1, Math.ceil((queueInfo.position * 45) / 60))
      queueLine = t(locale, 'status.queuePosition', {
        position: queueInfo.position,
        total: queueInfo.queueLength,
        minutes,
      })
    }

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-5">
          <svg className="animate-spin text-brand-600" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="32" strokeDashoffset="10"/>
          </svg>
        </div>
        <p className="text-lg font-semibold text-slate-800 mb-1">{headline}</p>
        <p className="text-sm text-slate-500 mb-2">
          {file?.name}
          {batchTotal > 1 && (
            <span className="ml-2 text-xs text-slate-400">({batchDoneCount + 1} of {batchTotal})</span>
          )}
        </p>
        {queueLine && (
          <p className="text-xs text-slate-500 mb-4">{queueLine}</p>
        )}
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        {!inQueue && (
          <p className="text-xs text-slate-400 mt-2">{Math.round(progress)}%</p>
        )}

        {/* AdSense slot — shown while user waits */}
        <div className="mt-8 border border-dashed border-slate-200 rounded-xl p-4 text-xs text-slate-400">
          <ins className="adsbygoogle block" data-ad-format="auto" data-full-width-responsive="true" />
          <span>Ad</span>
        </div>
      </div>
    )
  }

  if (state === 'done') {
    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length
    const charCount = transcript.length
    const hasSRT = segments.length > 0

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Big-file partial-result banner — surfaces failedChunks from
            /api/transcribe-multi so the user knows the transcript below
            is missing audio from those time ranges. */}
        {failedChunks.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex items-start gap-3 text-sm">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white inline-flex items-center justify-center text-[11px] font-bold mt-0.5">!</div>
            <div className="flex-1 leading-relaxed">
              <p className="font-semibold text-amber-900 mb-1">
                {t(locale, 'bigFile.failedBanner').split('.')[0]}
              </p>
              <p className="text-amber-800 text-xs">
                {t(locale, 'bigFile.failedBanner').split('.').slice(1).join('.').trim()}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFailedChunks([])}
              className="flex-shrink-0 text-amber-500 hover:text-amber-700 text-lg leading-none"
              aria-label="Dismiss"
              title="Dismiss"
            >
              ×
            </button>
          </div>
        )}
        {restoredFromSnapshot && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 flex items-start gap-3 text-sm">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white inline-flex items-center justify-center text-[11px] font-bold mt-0.5">✓</div>
            <div className="flex-1 leading-relaxed">
              <p className="font-semibold text-slate-800 mb-1">Your transcript is back</p>
              <p className="text-slate-600 text-xs">
                Restored from your browser's local storage — it was never uploaded to Mictoo's servers and is only visible to you on this device. It will be cleared when you refresh the page or click <em>New file</em>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setRestoredFromSnapshot(false)}
              className="flex-shrink-0 text-slate-400 hover:text-slate-600 text-lg leading-none"
              aria-label="Dismiss"
              title="Dismiss"
            >
              ×
            </button>
          </div>
        )}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h2 className="font-semibold text-slate-800">
              {t(locale, 'result.title')}
              {batchTotal > 1 && (
                <span className="ml-2 text-xs font-normal text-slate-400">
                  ({batchDoneCount + 1} of {batchTotal})
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t(locale, 'result.stats', { words: wordCount, chars: charCount, name: file?.name })}
            </p>
            {batchQueue.length > 0 && (
              <p className="text-xs text-brand-600 mt-1">
                Next file starts in ~10 seconds — {batchQueue.length} more to go.
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={copy} className="btn-ghost">
              {copied ? (
                <><CheckIcon className="w-4 h-4 text-green-500" /> {t(locale, 'result.copied')}</>
              ) : (
                <><CopyIcon className="w-4 h-4" /> {t(locale, 'result.copy')}</>
              )}
            </button>
            <button onClick={downloadTxt} className="btn-ghost">
              <DownloadIcon className="w-4 h-4" /> .txt
            </button>
            {hasSRT && (
              <button
                onClick={downloadTimestampedTxt}
                className="btn-ghost"
                title={t(locale, 'result.timestampedHint')}
                aria-label={t(locale, 'result.timestampedHint')}
              >
                <ClockIcon className="w-4 h-4" /> .txt
              </button>
            )}
            {hasSRT && (
              <button onClick={downloadSRT} className="btn-ghost">
                <SubtitleIcon className="w-4 h-4" /> .srt
              </button>
            )}

            {/* Export-content toggle. Shown whenever there's something to
                pick between (summary or translation present). All download
                buttons (Copy/.txt/.srt/timestamped-.txt/DOCX/PDF/VTT/JSON)
                honour this — when 'translation' is selected the file uses
                the translated text and the filename gets a .{lang} suffix. */}
            {((summaryStatus === 'done' && summaryData) || translatedSegments) && (
              <div className="inline-flex items-center gap-0 bg-slate-100 rounded-lg p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setExportContent('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${exportContent === 'all' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  title="Export the original transcript together with the AI summary"
                >
                  All
                </button>
                {summaryStatus === 'done' && summaryData && (
                  <button
                    type="button"
                    onClick={() => setExportContent('summary')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${exportContent === 'summary' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    title="Export only the AI summary"
                  >
                    Summary
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setExportContent('transcript')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${exportContent === 'transcript' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  title="Export only the original transcript"
                >
                  Transcript
                </button>
                {translatedSegments && (
                  <button
                    type="button"
                    onClick={() => setExportContent('translation')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${exportContent === 'translation' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    title={`Export the ${(DICT[locale]?.languages?.[translateLang] ?? DICT.en.languages[translateLang] ?? translateLang.toUpperCase())} translation`}
                  >
                    {DICT[locale]?.languages?.[translateLang] ?? DICT.en.languages[translateLang] ?? translateLang.toUpperCase()}
                  </button>
                )}
              </div>
            )}

            {/* Auth-gated formats. We always render the buttons so anonymous
                users see they exist — clicking just sends them to /sign-in. */}
            <button
              onClick={downloadDOCX}
              className="btn-ghost"
              title={authUser ? 'Export as Word document' : 'Sign in to export as Word'}
              aria-label="Export as Word"
            >
              {!authUser && <LockIcon className="w-3 h-3 text-slate-400" />}
              <DocIcon className="w-4 h-4" /> .docx
            </button>
            {hasSRT && (
              <button
                onClick={downloadPDF}
                className="btn-ghost"
                title={authUser ? 'Export as PDF' : 'Sign in to export as PDF'}
                aria-label="Export as PDF"
              >
                {!authUser && <LockIcon className="w-3 h-3 text-slate-400" />}
                <PdfIcon className="w-4 h-4" /> .pdf
              </button>
            )}
            {hasSRT && (
              <button
                onClick={downloadVTT}
                className="btn-ghost"
                title={authUser ? 'Export as WebVTT subtitles' : 'Sign in to export as VTT'}
                aria-label="Export as VTT"
              >
                {!authUser && <LockIcon className="w-3 h-3 text-slate-400" />}
                <SubtitleIcon className="w-4 h-4" /> .vtt
              </button>
            )}
            <button
              onClick={downloadJSON}
              className="btn-ghost"
              title={authUser ? 'Export as JSON' : 'Sign in to export as JSON'}
              aria-label="Export as JSON"
            >
              {!authUser && <LockIcon className="w-3 h-3 text-slate-400" />}
              <CodeIcon className="w-4 h-4" /> .json
            </button>

            <button onClick={reset} className="btn-primary">
              {t(locale, 'result.newFile')}
            </button>
          </div>
        </div>
        <SummaryCard
          locale={locale}
          status={summaryStatus}
          data={summaryData}
          error={summaryError}
          onRetry={() => generateSummary(transcript, spokenLanguage, transcriptId)}
        />

        {/* Chat with transcript — RAG over the current transcript via
            /api/chat. Auth-required: anonymous visitors see a locked
            teaser, logged-in visitors get the full collapse-to-expand
            chat panel. Only renders when we have real Whisper segments
            (the RAG retrieval needs them); falls back to nothing
            otherwise so the result view stays clean for the rare
            no-segments case. */}
        {hasSRT && (
          <ChatPanel
            segments={segments}
            onSeek={(s) => {
              if (audioRef.current) {
                audioRef.current.currentTime = s
                audioRef.current.play().catch(() => {})
                // Scroll the player into view so the user sees something
                // happen — without this, clicking a Chat-cited timestamp
                // silently seeks an off-screen audio element and looks
                // like a dead link to the user.
                audioRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
            isAuth={!!authUser}
            pathname={pathname}
            locale={locale}
          />
        )}

        {/* Reader / Editor toggle. The Reader view (per-line timestamp + text
            rows from Whisper segments) is the default when we have segments —
            it's far easier to scan than a wall of text. The Editor falls back
            to the plain textarea so the user can fix typos / proper nouns
            before exporting. When segments aren't available (rare edge case),
            we skip the toggle and render the Editor only. */}
        {hasSRT && (
          <div className="inline-flex items-center gap-0 bg-slate-100 rounded-lg p-0.5 text-xs mb-3">
            <button
              type="button"
              onClick={() => setViewMode('reader')}
              className={`px-3 py-1.5 rounded-md transition-colors ${viewMode === 'reader' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              title={t(locale, 'result.viewReaderHint')}
            >
              {t(locale, 'result.viewReader')}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('editor')}
              className={`px-3 py-1.5 rounded-md transition-colors ${viewMode === 'editor' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              title={t(locale, 'result.viewEditorHint')}
            >
              {t(locale, 'result.viewEditor')}
            </button>
          </div>
        )}

        {/* Translate row. Only visible alongside the Reader view (translation
            doesn't apply to the Editor textarea). The picker mirrors the
            language selector used at upload; we exclude the spoken-language
            from the targets since translating into itself is a no-op. */}
        {hasSRT && viewMode === 'reader' && (
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <select
              value={translateTarget}
              onChange={(e) => setTranslateTarget(e.target.value)}
              disabled={translateStatus === 'loading'}
              className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Translation target language"
            >
              {PICKER_LANG_CODES
                .filter(code => code !== (spokenLanguage || '').toLowerCase())
                .map(code => (
                  <option key={code} value={code}>{DICT[locale]?.languages?.[code] ?? DICT.en.languages[code]}</option>
                ))}
            </select>
            <button
              type="button"
              onClick={() => translateTo(translateTarget)}
              disabled={translateStatus === 'loading'}
              className="text-sm px-3 py-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1.5"
            >
              {translateStatus === 'loading' ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                  </svg>
                  {t(locale, 'result.translating')}
                </>
              ) : (
                t(locale, 'result.translate')
              )}
            </button>
            {translatedSegments && translateStatus === 'done' && (
              <>
                <span className="text-xs text-slate-500 ml-1">
                  {t(locale, 'result.showingTranslation', { lang: DICT[locale]?.languages?.[translateLang] ?? DICT.en.languages[translateLang] ?? translateLang.toUpperCase() })}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setTranslatedSegments(null)
                    setTranslatedTranscript('')
                    setTranslateLang('')
                    setTranslateStatus('idle')
                  }}
                  className="text-xs text-brand-600 hover:underline"
                >
                  {t(locale, 'result.showOriginal')}
                </button>
              </>
            )}
            {translateStatus === 'error' && (
              <span className="text-xs text-red-600">{translateError}</span>
            )}
          </div>
        )}

        {/* Optional audio player. Only renders when we have a local object
            URL for the source File — i.e. the user uploaded in this session,
            not a restored-from-snapshot transcript. The Reader-view timestamps
            below are wired to seek this element. */}
        {audioUrl && hasSRT && viewMode === 'reader' && (
          <audio
            ref={audioRef}
            src={audioUrl}
            controls
            preload="metadata"
            className="w-full mb-3"
            onTimeUpdate={(e) => setAudioCurrentTime(e.currentTarget.currentTime || 0)}
            onSeeked={(e) => setAudioCurrentTime(e.currentTarget.currentTime || 0)}
          />
        )}

        {hasSRT && viewMode === 'reader' ? (
          <>
            {/* Search bar above the Reader. Only renders in Reader mode —
                in Editor mode the textarea supports browser Cmd+F natively.
                Stays visible at all times (no expand/collapse) since it's a
                single-row affordance and discovery matters more than chrome
                minimalism for this. */}
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { e.preventDefault(); setSearchQuery('') }
                    else if (e.key === 'Enter') {
                      e.preventDefault()
                      if (searchTotal > 0) {
                        const next = (searchActiveIdx + 1) % searchTotal
                        setSearchActiveIdx(next)
                      }
                    }
                  }}
                  placeholder={t(locale, 'reader.search.placeholder')}
                  className="w-full text-sm border border-slate-200 rounded-lg pl-9 pr-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              {searchQuery && (
                <>
                  <span className="text-xs text-slate-500 tabular-nums whitespace-nowrap">
                    {searchTotal > 0
                      ? t(locale, 'reader.search.count', { current: searchActiveIdx + 1, total: searchTotal })
                      : t(locale, 'reader.search.noResults')}
                  </span>
                  <div className="inline-flex items-center gap-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        if (searchTotal === 0) return
                        setSearchActiveIdx((searchActiveIdx - 1 + searchTotal) % searchTotal)
                      }}
                      disabled={searchTotal === 0}
                      title={t(locale, 'reader.search.prev')}
                      className="p-1.5 rounded hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (searchTotal === 0) return
                        setSearchActiveIdx((searchActiveIdx + 1) % searchTotal)
                      }}
                      disabled={searchTotal === 0}
                      title={t(locale, 'reader.search.next')}
                      className="p-1.5 rounded hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    title={t(locale, 'reader.search.clear')}
                    className="p-1.5 rounded hover:bg-slate-100"
                  >
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <TranscriptReader
              segments={translatedSegments || segments}
              currentTime={audioCurrentTime}
              onSeek={audioUrl ? (sec) => {
                const el = audioRef.current
                if (!el) return
                el.currentTime = Math.max(0, sec)
                el.play().catch(() => {})
              } : undefined}
              query={searchQuery}
              activeMatchIdx={searchActiveIdx}
              onMatchCountChange={setSearchTotal}
            />
          </>
        ) : translatedSegments ? (
          // Editor mode + translation active → bind textarea to the
          // translated text. The original stays in `transcript` state so
          // toggling "Show original" puts it right back.
          <textarea
            className="w-full h-64 text-sm text-slate-700 border border-slate-100 rounded-xl p-4 bg-slate-50 resize-y focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={translatedTranscript}
            onChange={e => setTranslatedTranscript(e.target.value)}
            aria-label="Edit translated transcript"
          />
        ) : (
          <textarea
            className="w-full h-64 text-sm text-slate-700 border border-slate-100 rounded-xl p-4 bg-slate-50 resize-y focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={transcript}
            onChange={e => setTranscript(e.target.value)}
            aria-label="Edit transcript"
          />
        )}
        <p className="text-xs text-slate-400 mt-2">
          {hasSRT && viewMode === 'reader'
            ? t(locale, 'result.viewReaderHint')
            : translatedSegments
              ? t(locale, 'result.editingTranslation', { lang: DICT[locale]?.languages?.[translateLang] ?? DICT.en.languages[translateLang] ?? translateLang.toUpperCase() })
              : t(locale, 'result.editHint') + (hasSRT ? t(locale, 'result.srtHint') : '')}
        </p>
      </div>
    )
  }

  if (state === 'error') {
    // When the server signalled signInHelps (= anonymous user hit IP rate
    // limit), surface a primary "Sign in" CTA. Signing in moves them onto
    // the user-keyed bucket which is independent from the IP one — so they
    // get a fresh budget immediately, not "wait 32 min".
    const signInHref =
      typeof window !== 'undefined'
        ? `/sign-in?next=${encodeURIComponent(window.location.pathname || '/')}`
        : '/sign-in'

    return (
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-5 text-3xl">
          ⚠️
        </div>
        <p className="text-lg font-semibold text-slate-800 mb-1">{t(locale, 'status.somethingWrong')}</p>
        <p className="text-sm text-slate-500 mb-3">{error}</p>
        {errorHelpType && (
          // The "how to fix this" link is shown even when errorOffersSignIn is
          // true — duration-rejected anon users need both options (sign up to
          // unlock 60 min, OR follow the split guide right now).
          <p className="text-sm mb-6">
            <a
              href={localized(errorHelpType === 'split' ? '/how-to-split-audio' : '/how-to-compress-audio', locale)}
              className="text-brand-600 hover:underline"
            >
              {t(locale, errorHelpType === 'split' ? 'status.howToSplit' : 'status.howToCompress')}
            </a>
          </p>
        )}
        {errorOffersSignIn ? (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <a href={signInHref} className="btn-primary">Sign in to keep going</a>
            <button onClick={reset} className="btn-ghost">{t(locale, 'status.tryAgain')}</button>
          </div>
        ) : (
          <button onClick={reset} className="btn-primary">{t(locale, 'status.tryAgain')}</button>
        )}
      </div>
    )
  }

  // IDLE — main upload zone
  return (
    <div className="space-y-3">
      {/* Big-file confirm modal — shown when an authed user picks a file
          larger than 60 MB. Explains the credit cost before we commit
          their daily quota. Audio files give a precise chunk count;
          video files use a "1-3 credits" range because the actual count
          depends on the audio length inside the container. */}
      {bigFileConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
          onClick={() => setBigFileConfirm(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold text-slate-900 mb-3">
              {t(locale, 'bigFile.modalTitle')}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {(() => {
                const remaining = creditsRemaining ?? '—'
                const n = bigFileConfirm.chunkCount
                const key = bigFileConfirm.isVideo ? 'bigFile.modalVideo' : 'bigFile.modalAudio'
                return t(locale, key)
                  .replace(/\{n\}/g, String(n))
                  .replace(/\{remaining\}/g, String(remaining))
              })()}
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setBigFileConfirm(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
              >
                {t(locale, 'bigFile.cancel')}
              </button>
              <button
                type="button"
                onClick={processFileConfirmed}
                className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
              >
                {t(locale, 'bigFile.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Language selector */}
      <div className="flex items-center justify-end gap-2">
        <label htmlFor="lang-select" className="text-xs text-slate-400 font-medium">{t(locale, 'picker.label')}:</label>
        <select
          id="lang-select"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
          title={t(locale, 'picker.hint')}
        >
          <option value="">{t(locale, 'picker.auto')}</option>
          {PICKER_LANG_CODES.map(code => (
            <option key={code} value={code}>{DICT[locale]?.languages?.[code] ?? DICT.en.languages[code]}</option>
          ))}
        </select>
      </div>

      {/* YouTube URL input — gated by the enableYouTubeUrl prop. See the
          comment at the top of the file for the migration history. The
          entire block + "or" divider stay together: if the input isn't
          shown, the divider above the drop zone would be a non-sequitur. */}
      {enableYouTubeUrl && (
        <>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="yt-url" className="text-xs text-slate-500 font-medium">
                {t(locale, 'youtube.label')}
              </label>
              <span className="text-[11px] text-slate-400">{t(locale, 'youtube.hint')}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="yt-url"
                type="url"
                value={youtubeUrl}
                onChange={e => setYoutubeUrl(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); fetchYouTubeCaptions() } }}
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                disabled={youtubeStatus === 'loading'}
              />
              <button
                type="button"
                onClick={fetchYouTubeCaptions}
                disabled={youtubeStatus === 'loading' || !youtubeUrl.trim()}
                className="text-sm px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                {youtubeStatus === 'loading' ? (
                  <>
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                    </svg>
                    {t(locale, 'youtube.fetching')}
                  </>
                ) : (
                  t(locale, 'youtube.button')
                )}
              </button>
            </div>
            {youtubeStatus === 'noCaptions' && (
              <p className="text-xs text-amber-700 mt-2">
                {t(locale, 'youtube.noCaptions')}{' '}
                {/* Always show the locale-aware "upload audio above" CTA —
                    it points at the same UploadZone the user is already on,
                    so no navigation needed. */}
                <span className="text-brand-600 font-medium">
                  {t(locale, 'youtube.tryUploadInstead')}
                </span>
                {/* The download-YouTube-audio guide page only exists in EN,
                    so only surface the link for EN visitors. Non-EN users
                    get the primary "upload above" CTA above, which is the
                    immediately actionable next step in any case. */}
                {locale === 'en' && (
                  <>
                    {' · '}
                    <a href="/how-to-download-youtube-video" className="text-brand-600 hover:underline font-medium">
                      {t(locale, 'youtube.downloadGuide')}
                    </a>
                  </>
                )}
              </p>
            )}
            {youtubeStatus === 'error' && (
              <p className="text-xs text-red-600 mt-2">{youtubeError}</p>
            )}
            {youtubeDebug && (youtubeStatus === 'noCaptions' || youtubeStatus === 'error') && (
              <details className="text-[10px] text-slate-500 mt-2">
                <summary className="cursor-pointer select-none">show technical details</summary>
                <pre className="bg-slate-50 border border-slate-200 rounded p-2 mt-1 overflow-auto whitespace-pre-wrap break-words">{JSON.stringify(youtubeDebug, null, 2)}</pre>
              </details>
            )}
            {/* Wave 8.5 social proof — only renders once we've crossed
                the visibility threshold (see component). Subtle, sits at
                the bottom of the card so it doesn't compete with error
                states above it. */}
            <YouTubeFetchCounter />
          </div>

          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[11px] uppercase tracking-wide text-slate-400 font-medium">{t(locale, 'youtube.or')}</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
        </>
      )}

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setState('dragging') }}
        onDragLeave={() => setState('idle')}
        onClick={() => fileRef.current?.click()}
        className={`
          bg-white rounded-2xl border-2 border-dashed shadow-sm p-10 text-center cursor-pointer transition-all
          ${state === 'dragging'
            ? 'border-brand-500 bg-brand-50 scale-[1.01]'
            : 'border-slate-200 hover:border-brand-400 hover:bg-brand-50/40'}
        `}
      >
        <input
          ref={fileRef}
          type="file"
          accept=".mp3,.mp4,.m4a,.aac,.wav,.ogg,.opus,.webm,.mpeg,.flac,.mov,.qt,.3gp"
          multiple={!!authUser}
          className="hidden"
          onChange={handleFile}
        />
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-5">
          <UploadIcon className="w-8 h-8 text-brand-500" />
        </div>
        <p className="text-xl font-semibold text-slate-800 mb-2">
          {state === 'dragging' ? t(locale, 'dropzone.dragging') : t(locale, 'dropzone.primary')}
        </p>
        <p className="text-slate-500 text-sm mb-4">{t(locale, 'dropzone.secondary')}</p>
        <p className="text-xs text-slate-400">
          MP3 · MP4 · WAV · M4A · OGG · WEBM · FLAC &nbsp;·&nbsp; {t(locale, 'dropzone.maxSize')} &nbsp;·&nbsp; {t(locale, 'dropzone.maxDuration', { minutes: authUser ? 60 : 30 })}
          {!authUser && (
            <>
              {' '}(
              <a href="/sign-in" className="hover:text-brand-600 hover:underline transition-colors">
                {t(locale, 'dropzone.signInForLonger')}
              </a>
              )
            </>
          )}
        </p>
        {authUser && (
          <p className="text-xs text-brand-600 mt-2">
            Signed in — drop up to 3 files at once, we'll process them in order.
          </p>
        )}
      </div>

      {/* Preventive hints about the 25 MB and duration limits — visible from the
          start so users with larger or longer files know what to do before they
          even try uploading. Two parallel links because they point to two
          different guides (compress for size, split for duration). */}
      <p className="text-xs text-slate-400 text-center mt-1">
        <a href={localized('/how-to-compress-audio', locale)} className="hover:text-brand-600 hover:underline transition-colors">
          {t(locale, 'dropzone.bigFileHint')}
        </a>
      </p>
      <p className="text-xs text-slate-400 text-center mt-1">
        <a href={localized('/how-to-split-audio', locale)} className="hover:text-brand-600 hover:underline transition-colors">
          {t(locale, 'dropzone.longFileHint')}
        </a>
      </p>
    </div>
  )
}

// ── Icons ────────────────────────────────────────────────────────────────────

function UploadIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
  )
}

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.75a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
  )
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  )
}

function SubtitleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.094.083a.75.75 0 101.173.944l.094-.083a.75.75 0 10-1.173-.944zm2.857.773l-.094.083a.75.75 0 101.173.944l.094-.083a.75.75 0 10-1.173-.944zm2.857.773l-.094.083a.75.75 0 101.173.944l.094-.083a.75.75 0 10-1.173-.944z" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function DocIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function PdfIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function CodeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25m4.5 12l3-15" />
    </svg>
  )
}

function LockIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}
