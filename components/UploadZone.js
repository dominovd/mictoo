'use client'

import { useState, useRef, useCallback } from 'react'

const ACCEPTED_TYPES = ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/m4a', 'audio/ogg',
  'audio/webm', 'video/mp4', 'video/webm', 'video/mpeg', 'audio/x-m4a',
  'audio/flac', 'application/octet-stream']
const MAX_SIZE_MB = 25
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

const LANGUAGES = [
  { code: '', label: '🌐 Auto-detect' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Spanish' },
  { code: 'fr', label: '🇫🇷 French' },
  { code: 'de', label: '🇩🇪 German' },
  { code: 'pt', label: '🇧🇷 Portuguese' },
  { code: 'ru', label: '🇷🇺 Russian' },
  { code: 'it', label: '🇮🇹 Italian' },
  { code: 'nl', label: '🇳🇱 Dutch' },
  { code: 'pl', label: '🇵🇱 Polish' },
  { code: 'tr', label: '🇹🇷 Turkish' },
  { code: 'ja', label: '🇯🇵 Japanese' },
  { code: 'ko', label: '🇰🇷 Korean' },
  { code: 'zh', label: '🇨🇳 Chinese' },
  { code: 'ar', label: '🇸🇦 Arabic' },
  { code: 'hi', label: '🇮🇳 Hindi' },
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

export default function UploadZone({ defaultLanguage = '' }) {
  const [state, setState] = useState('idle') // idle | dragging | uploading | done | error
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [segments, setSegments] = useState([])
  const [language, setLanguage] = useState(defaultLanguage)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const fileRef = useRef(null)

  const reset = () => {
    setState('idle')
    setProgress(0)
    setFile(null)
    setTranscript('')
    setSegments([])
    setError('')
    setCopied(false)
  }

  const processFile = useCallback(async (f) => {
    if (f.size > MAX_SIZE_BYTES) {
      setError(`File too large. Max size is ${MAX_SIZE_MB}MB.`)
      setState('error')
      return
    }

    setFile(f)
    setState('uploading')
    setProgress(10)

    const ticker = setInterval(() => {
      setProgress(p => Math.min(p + Math.random() * 8, 88))
    }, 800)

    try {
      const form = new FormData()
      form.append('file', f)
      if (language) form.append('language', language)

      const res = await fetch('/api/transcribe', { method: 'POST', body: form })
      clearInterval(ticker)

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Transcription failed. Please try again.')
      }

      const data = await res.json()
      setProgress(100)
      const segs = data.segments ?? []
      // Use paragraph-formatted text if segments are available, else raw text
      setTranscript(segs.length > 0 ? toParagraphs(segs) : data.text)
      setSegments(segs)
      setState('done')
    } catch (err) {
      clearInterval(ticker)
      setError(err.message)
      setState('error')
    }
  }, [language])

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

  // ── STATES ──────────────────────────────────────────────────────────────────

  if (state === 'uploading') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-5">
          <svg className="animate-spin text-brand-600" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="32" strokeDashoffset="10"/>
          </svg>
        </div>
        <p className="text-lg font-semibold text-slate-800 mb-1">Transcribing…</p>
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
            <h2 className="font-semibold text-slate-800">Transcript</h2>
            <p className="text-xs text-slate-400 mt-0.5">{wordCount} words · {charCount} characters · {file?.name}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={copy} className="btn-ghost">
              {copied ? (
                <><CheckIcon className="w-4 h-4 text-green-500" /> Copied!</>
              ) : (
                <><CopyIcon className="w-4 h-4" /> Copy</>
              )}
            </button>
            <button onClick={downloadTxt} className="btn-ghost">
              <DownloadIcon className="w-4 h-4" /> .txt
            </button>
            {hasSRT && (
              <button onClick={downloadSRT} className="btn-ghost">
                <SubtitleIcon className="w-4 h-4" /> .srt
              </button>
            )}
            <button onClick={reset} className="btn-primary">
              ↑ New file
            </button>
          </div>
        </div>
        <textarea
          className="w-full h-64 text-sm text-slate-700 border border-slate-100 rounded-xl p-4 bg-slate-50 resize-y focus:outline-none focus:ring-2 focus:ring-brand-500"
          value={transcript}
          onChange={e => setTranscript(e.target.value)}
        />
        <p className="text-xs text-slate-400 mt-2">
          You can edit the transcript above.{hasSRT ? ' Download .srt for subtitles.' : ''}
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
        <p className="text-lg font-semibold text-slate-800 mb-1">Something went wrong</p>
        <p className="text-sm text-slate-500 mb-6">{error}</p>
        <button onClick={reset} className="btn-primary">Try again</button>
      </div>
    )
  }

  // IDLE — main upload zone
  return (
    <div className="space-y-3">
      {/* Language selector */}
      <div className="flex items-center justify-end gap-2">
        <label htmlFor="lang-select" className="text-xs text-slate-400 font-medium">Language:</label>
        <select
          id="lang-select"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
        >
          {LANGUAGES.map(l => (
            <option key={l.code} value={l.code}>{l.label}</option>
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
          {state === 'dragging' ? 'Drop it!' : 'Drop your file here'}
        </p>
        <p className="text-slate-500 text-sm mb-4">or click to browse</p>
        <p className="text-xs text-slate-400">
          MP3 · MP4 · WAV · M4A · OGG · WEBM · FLAC &nbsp;·&nbsp; Max {MAX_SIZE_MB}MB
        </p>
      </div>
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
