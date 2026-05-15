'use client'

import { useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { upload } from '@vercel/blob/client'
import { detectLocaleFromPath, t, DICT } from '@/lib/i18n'
import SummaryCard from './SummaryCard'

const ACCEPTED_TYPES = ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/m4a', 'audio/ogg',
  'audio/webm', 'video/mp4', 'video/webm', 'video/mpeg', 'audio/x-m4a',
  'audio/flac', 'application/octet-stream']
// 25 MB is the OpenAI Whisper hard cap and our real ceiling. We bypass
// Vercel's 4.5 MB function body limit by uploading directly to Vercel Blob
// from the browser (see processFile below), then passing the blob URL to
// /api/transcribe. The function never has to ingest the file body itself.
const MAX_SIZE_MB = 25
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

// Whisper language codes shown in the picker.
// Labels (with flag) come from the i18n dictionary per UI locale.
const PICKER_LANG_CODES = ['en', 'es', 'fr', 'de', 'pt', 'ru', 'it', 'nl', 'pl', 'tr', 'ja', 'ko', 'zh', 'ar', 'hi']

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

export default function UploadZone({ defaultLanguage = '', locale: localeProp }) {
  // UI locale: explicit prop (from /fr, /de, /es, /ru pages via LandingLayout)
  // wins, otherwise infer from URL (covers EN homepage and all format/use-case
  // pages, which currently share the EN dictionary).
  const pathname = usePathname() || '/'
  const locale = localeProp || detectLocaleFromPath(pathname)

  const [state, setState] = useState('idle') // idle | dragging | uploading | done | error
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [segments, setSegments] = useState([])
  const [language, setLanguage] = useState(defaultLanguage)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  // Separate state for the AI summary so it can stream in independently of
  // the transcript. status: idle | loading | done | error
  const [summaryStatus, setSummaryStatus] = useState('idle')
  const [summaryData, setSummaryData] = useState(null)
  const [summaryError, setSummaryError] = useState('')

  // Spoken language as detected by Whisper (e.g. "ukrainian", "english").
  // Used by the summarize call so the AI summary matches the recording's
  // language rather than the UI locale.
  const [spokenLanguage, setSpokenLanguage] = useState(null)

  const fileRef = useRef(null)

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
  }

  // Kicks off the /api/summarize call. Pulled out so the Retry button in
  // SummaryCard can re-trigger without re-running the whole transcription.
  // spokenLanguage comes from Whisper's detected language (e.g. "ukrainian"),
  // so the summary is written in the recording's language by default rather
  // than the UI locale — that's almost always what the user wants.
  const generateSummary = useCallback(async (transcriptText, spokenLanguage) => {
    if (!transcriptText || transcriptText.length < 30) return
    setSummaryStatus('loading')
    setSummaryError('')
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: transcriptText, spokenLanguage, locale }),
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
    if (f.size > MAX_SIZE_BYTES) {
      const sizeStr = `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      setError(t(locale, 'status.fileTooLargeDetailed', { size: sizeStr }))
      setState('error')
      return
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
      const blob = await upload(f.name, f, {
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
      setProgress(50)
      ticker = setInterval(() => {
        setProgress(p => Math.min(p + Math.random() * 4, 92))
      }, 800)

      const res = await fetch('/api/transcribe', {
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

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Transcription failed. Please try again.')
      }

      const data = await res.json()
      setProgress(100)
      const segs = data.segments ?? []
      const finalText = segs.length > 0 ? toParagraphs(segs) : data.text
      const detectedLang = data.language || null
      // Use paragraph-formatted text if segments are available, else raw text
      setTranscript(finalText)
      setSegments(segs)
      setSpokenLanguage(detectedLang)
      setState('done')

      // Kick off the AI summary in parallel — doesn't block the transcript UI.
      // Pass the detected spoken language so the summary is in the same
      // language as the recording (a Ukrainian audio → Ukrainian summary).
      generateSummary(finalText, detectedLang)
    } catch (err) {
      if (ticker) clearInterval(ticker)
      setError(err?.message || 'Transcription failed. Please try again.')
      setState('error')
    }
  }, [language, locale, generateSummary])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setState('idle')
    const f = e.dataTransfer.files[0]
    if (f) processFile(f)
  }, [processFile])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (f) processFile(f)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(transcript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadTxt = () => {
    const blob = new Blob([transcript], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + '.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadSRT = () => {
    const srt = toSRT(segments)
    if (!srt) return
    const blob = new Blob([srt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + '.srt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadTimestampedTxt = () => {
    const txt = toTimestampedTxt(segments)
    if (!txt) return
    const blob = new Blob([txt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + '-timestamped.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  // ── STATES ──────────────────────────────────────────────────────────────────

  if (state === 'uploading') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-5">
          <svg className="animate-spin text-brand-600" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="32" strokeDashoffset="10"/>
          </svg>
        </div>
        <p className="text-lg font-semibold text-slate-800 mb-1">{t(locale, 'status.transcribing')}</p>
        <p className="text-sm text-slate-500 mb-6">{file?.name}</p>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-400 mt-2">{Math.round(progress)}%</p>

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
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h2 className="font-semibold text-slate-800">{t(locale, 'result.title')}</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t(locale, 'result.stats', { words: wordCount, chars: charCount, name: file?.name })}
            </p>
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
          onRetry={() => generateSummary(transcript, spokenLanguage)}
        />

        <textarea
          className="w-full h-64 text-sm text-slate-700 border border-slate-100 rounded-xl p-4 bg-slate-50 resize-y focus:outline-none focus:ring-2 focus:ring-brand-500"
          value={transcript}
          onChange={e => setTranscript(e.target.value)}
        />
        <p className="text-xs text-slate-400 mt-2">
          {t(locale, 'result.editHint')}{hasSRT ? t(locale, 'result.srtHint') : ''}
        </p>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-5 text-3xl">
          ⚠️
        </div>
        <p className="text-lg font-semibold text-slate-800 mb-1">{t(locale, 'status.somethingWrong')}</p>
        <p className="text-sm text-slate-500 mb-3">{error}</p>
        <p className="text-sm mb-6">
          <a href="/how-to-compress-audio" className="text-brand-600 hover:underline">
            {t(locale, 'status.howToCompress')}
          </a>
        </p>
        <button onClick={reset} className="btn-primary">{t(locale, 'status.tryAgain')}</button>
      </div>
    )
  }

  // IDLE — main upload zone
  return (
    <div className="space-y-3">
      {/* Language selector */}
      <div className="flex items-center justify-end gap-2">
        <label htmlFor="lang-select" className="text-xs text-slate-400 font-medium">{t(locale, 'picker.label')}:</label>
        <select
          id="lang-select"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
        >
          <option value="">{t(locale, 'picker.auto')}</option>
          {PICKER_LANG_CODES.map(code => (
            <option key={code} value={code}>{DICT[locale]?.languages?.[code] ?? DICT.en.languages[code]}</option>
          ))}
        </select>
      </div>

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
          accept=".mp3,.mp4,.m4a,.wav,.ogg,.webm,.mpeg,.flac"
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
          MP3 · MP4 · WAV · M4A · OGG · WEBM · FLAC &nbsp;·&nbsp; {t(locale, 'dropzone.maxSize')}
        </p>
      </div>

      {/* Preventive hint about the 25 MB limit — visible from the start so users
          with larger files know what to do before they even try uploading. */}
      <p className="text-xs text-slate-400 text-center mt-1">
        <a href="/how-to-compress-audio" className="hover:text-brand-600 hover:underline transition-colors">
          {t(locale, 'dropzone.bigFileHint')}
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
