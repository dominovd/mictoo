'use client'

import { useState, useRef, useCallback } from 'react'

const ACCEPTED_TYPES = ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/m4a', 'audio/ogg',
  'audio/webm', 'video/mp4', 'video/webm', 'video/mpeg', 'audio/x-m4a',
  'audio/flac', 'application/octet-stream']
const MAX_SIZE_MB = 25
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

export default function UploadZone() {
  const [state, setState] = useState('idle') // idle | dragging | uploading | done | error
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const fileRef = useRef(null)

  const reset = () => {
    setState('idle')
    setProgress(0)
    setFile(null)
    setTranscript('')
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

    // Simulate progress ticks while waiting for Whisper
    const ticker = setInterval(() => {
      setProgress(p => Math.min(p + Math.random() * 8, 88))
    }, 800)

    try {
      const form = new FormData()
      form.append('file', f)

      const res = await fetch('/api/transcribe', { method: 'POST', body: form })
      clearInterval(ticker)

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Transcription failed. Please try again.')
      }

      const data = await res.json()
      setProgress(100)
      setTranscript(data.text)
      setState('done')
    } catch (err) {
      clearInterval(ticker)
      setError(err.message)
      setState('error')
    }
  }, [])

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

  const download = () => {
    const blob = new Blob([transcript], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (file?.name?.replace(/\.[^.]+$/, '') || 'transcript') + '.txt'
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
          {/* Replace with real AdSense unit */}
          <ins className="adsbygoogle block" data-ad-format="auto" data-full-width-responsive="true" />
          <span>Ad</span>
        </div>
      </div>
    )
  }

  if (state === 'done') {
    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length
    const charCount = transcript.length

    return (
      <div className="space-y-4">
        {/* Result header */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h2 className="font-semibold text-slate-800">Transcript</h2>
              <p className="text-xs text-slate-400 mt-0.5">{wordCount} words · {charCount} characters · {file?.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={copy} className="btn-ghost">
                {copied ? (
                  <><CheckIcon className="w-4 h-4 text-green-500" /> Copied!</>
                ) : (
                  <><CopyIcon className="w-4 h-4" /> Copy</>
                )}
              </button>
              <button onClick={download} className="btn-ghost">
                <DownloadIcon className="w-4 h-4" /> Download .txt
              </button>
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
          <p className="text-xs text-slate-400 mt-2">You can edit the transcript directly above.</p>
        </div>

        {/* Affiliate upsell */}
        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5">
          <p className="text-sm font-semibold text-brand-800 mb-1">Need more? Try a pro tool</p>
          <p className="text-xs text-slate-500 mb-3">Speaker detection, timestamps, team sharing, and more.</p>
          <div className="flex flex-wrap gap-2">
            <a href="https://otter.ai" target="_blank" rel="noopener noreferrer sponsored"
              className="text-xs px-3 py-1.5 bg-white border border-brand-200 text-brand-700 rounded-lg hover:bg-brand-100 transition-colors font-medium">
              Otter.ai →
            </a>
            <a href="https://sonix.ai" target="_blank" rel="noopener noreferrer sponsored"
              className="text-xs px-3 py-1.5 bg-white border border-brand-200 text-brand-700 rounded-lg hover:bg-brand-100 transition-colors font-medium">
              Sonix →
            </a>
            <a href="https://www.happyscribe.com" target="_blank" rel="noopener noreferrer sponsored"
              className="text-xs px-3 py-1.5 bg-white border border-brand-200 text-brand-700 rounded-lg hover:bg-brand-100 transition-colors font-medium">
              HappyScribe →
            </a>
          </div>
        </div>
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

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
