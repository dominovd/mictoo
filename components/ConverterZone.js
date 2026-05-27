'use client'

import { useState, useRef, useCallback } from 'react'
import { upload } from '@vercel/blob/client'

// ConverterZone — drop file → upload → /api/convert → download.
//
// This is the format-converter sibling of UploadZone (which routes to
// /api/transcribe). It deliberately stays narrow: no language picker, no
// summary, no SRT — just "give me {to} from this {from}".
//
// The component renders a single hero block intended for the top of a
// converter landing page. The surrounding marketing content (howItWorks,
// FAQ, etc.) lives in ConverterLayout.

const MAX_SIZE_MB = 25
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

// Map source extension → list of accepted MIME types and the <input accept>
// hint. We keep it permissive: browsers misdetect mime on plenty of formats,
// and the server re-validates anyway.
const SOURCE_ACCEPT = {
  mp4:  { mimes: ['video/mp4', 'audio/mp4', 'application/octet-stream'], accept: '.mp4,video/mp4' },
  wav:  { mimes: ['audio/wav', 'audio/x-wav', 'application/octet-stream'], accept: '.wav,audio/wav' },
  webm: { mimes: ['audio/webm', 'video/webm', 'application/octet-stream'], accept: '.webm,audio/webm,video/webm' },
  flac: { mimes: ['audio/flac', 'application/octet-stream'], accept: '.flac,audio/flac' },
  mp3:  { mimes: ['audio/mpeg', 'audio/mp3', 'application/octet-stream'], accept: '.mp3,audio/mpeg' },
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

export default function ConverterZone({ from, to, labels }) {
  // labels.* are passed by the page so each landing can put its own
  // human strings ("MP4 to MP3 Converter", "Convert", etc.) — keeps this
  // component locale-agnostic.
  const sourceCfg = SOURCE_ACCEPT[from] || SOURCE_ACCEPT.mp4

  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle') // idle | uploading | converting | done | error
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null) // { downloadUrl, outputName, outputSize }
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef(null)
  const tickerRef = useRef(null)

  const reset = useCallback(() => {
    setFile(null)
    setStatus('idle')
    setProgress(0)
    setError('')
    setResult(null)
    if (tickerRef.current) {
      clearInterval(tickerRef.current)
      tickerRef.current = null
    }
  }, [])

  const processFile = useCallback(async (f) => {
    if (!f) return
    setError('')

    // Client-side size check. The server re-validates, but failing fast
    // here saves the user a 25 MB upload they can't use.
    if (f.size > MAX_SIZE_BYTES) {
      setError(`File too large: ${fmtBytes(f.size)}. Max is ${MAX_SIZE_MB} MB.`)
      return
    }
    // Soft extension check (file picker should enforce, but drag-drop bypasses).
    const ext = f.name.split('.').pop()?.toLowerCase()
    if (ext && ext !== from) {
      setError(`This converter accepts .${from} files. You uploaded .${ext}.`)
      return
    }

    setFile(f)
    setStatus('uploading')
    setProgress(0)

    try {
      // Step 1: direct upload to Vercel Blob (browser → blob, no function
      // in the middle, so we bypass the 4.5 MB body limit).
      const blob = await upload(f.name, f, {
        access: 'public',
        handleUploadUrl: '/api/upload-token',
        contentType: f.type || sourceCfg.mimes[0],
        onUploadProgress: ({ percentage }) => {
          // Reserve 0–40% of the bar for the upload. Conversion + result
          // download share the remaining 60%.
          setProgress(Math.max(2, Math.round(percentage * 0.4)))
        },
      })

      // Step 2: ask the server to convert.
      setStatus('converting')
      setProgress(45)
      tickerRef.current = setInterval(() => {
        setProgress(p => Math.min(p + Math.random() * 3, 90))
      }, 400)

      const res = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blobUrl: blob.url,
          from,
          to,
          fileName: f.name,
          fileType: f.type || '',
        }),
      })

      clearInterval(tickerRef.current)
      tickerRef.current = null

      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || `Server returned ${res.status}.`)
      }
      const data = await res.json()
      setProgress(100)
      setStatus('done')
      setResult(data)
    } catch (err) {
      if (tickerRef.current) {
        clearInterval(tickerRef.current)
        tickerRef.current = null
      }
      setStatus('error')
      setError(err?.message || 'Conversion failed.')
    }
  }, [from, to, sourceCfg.mimes])

  const onFiles = useCallback((files) => {
    if (!files || !files.length) return
    processFile(files[0])
  }, [processFile])

  const onDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    onFiles(e.dataTransfer.files)
  }, [onFiles])

  const onDragOver = useCallback((e) => {
    e.preventDefault()
    if (!isDragging) setIsDragging(true)
  }, [isDragging])

  const onDragLeave = useCallback(() => setIsDragging(false), [])

  // Download via fetch → Blob so the file lands with the right name,
  // even cross-origin (Vercel Blob serves from blob.vercel-storage.com).
  const triggerDownload = useCallback(async () => {
    if (!result?.downloadUrl) return
    try {
      const r = await fetch(result.downloadUrl)
      const b = await r.blob()
      const url = URL.createObjectURL(b)
      const a = document.createElement('a')
      a.href = url
      a.download = result.outputName
      document.body.appendChild(a)
      a.click()
      a.remove()
      // Defer revoke so older Safari versions actually get to read the URL.
      setTimeout(() => URL.revokeObjectURL(url), 1500)
    } catch {
      // Fallback: open in new tab, browser handles download dialog.
      window.open(result.downloadUrl, '_blank', 'noopener')
    }
  }, [result])

  const busy = status === 'uploading' || status === 'converting'

  return (
    <div id="tool" className="max-w-2xl mx-auto px-4">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative rounded-2xl border-2 border-dashed transition-colors p-8 text-center
          ${isDragging ? 'border-brand-500 bg-brand-50' : 'border-slate-300 bg-white'}
          ${busy ? 'pointer-events-none opacity-90' : 'hover:border-brand-400'}`}
      >
        {status === 'idle' && (
          <>
            <div className="text-4xl mb-3">🎵</div>
            <p className="text-lg font-semibold text-slate-800 mb-1">
              {labels?.dropPrimary || `Drop your .${from} file`}
            </p>
            <p className="text-sm text-slate-500 mb-4">
              {labels?.dropSecondary || 'or click to browse'}
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              {labels?.browseButton || 'Choose file'}
            </button>
            <p className="text-xs text-slate-400 mt-4">
              {labels?.sizeHint || `Max ${MAX_SIZE_MB} MB · .${from} only`}
            </p>
            <input
              ref={inputRef}
              type="file"
              accept={sourceCfg.accept}
              className="hidden"
              onChange={(e) => onFiles(e.target.files)}
            />
          </>
        )}

        {busy && (
          <>
            <div className="text-4xl mb-3">⏳</div>
            <p className="text-base font-semibold text-slate-800 mb-1">
              {status === 'uploading'
                ? (labels?.uploading || 'Uploading…')
                : (labels?.converting || `Converting to .${to}…`)}
            </p>
            <p className="text-xs text-slate-500 mb-4">{file?.name}</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-2">{progress}%</p>
          </>
        )}

        {status === 'done' && result && (
          <>
            <div className="text-4xl mb-3">✅</div>
            <p className="text-lg font-semibold text-slate-800 mb-1">
              {labels?.doneTitle || 'Conversion complete'}
            </p>
            <p className="text-sm text-slate-500 mb-4">
              {result.outputName} · {fmtBytes(result.outputSize)}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={triggerDownload}
                className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                ↓ {labels?.downloadButton || `Download .${to}`}
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                {labels?.newFileButton || 'Convert another'}
              </button>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="text-4xl mb-3">⚠️</div>
            <p className="text-base font-semibold text-slate-800 mb-2">
              {labels?.errorTitle || 'Something went wrong'}
            </p>
            <p className="text-sm text-red-600 mb-4">{error}</p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              {labels?.tryAgain || 'Try again'}
            </button>
          </>
        )}
      </div>

      {/* Plain idle-state error (e.g. size guard) renders outside the box so
          we don't disturb the dropzone visual when the user just dragged
          something invalid. */}
      {status === 'idle' && error && (
        <p className="text-sm text-red-600 mt-3 text-center">{error}</p>
      )}
    </div>
  )
}
