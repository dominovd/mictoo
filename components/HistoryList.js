'use client'

import { useState } from 'react'
import { toVTT } from '@/lib/exports/vtt'
import { toJSON } from '@/lib/exports/json'

// HistoryList — interactive list of past transcripts.
//
// Per-row actions:
//   - Expand / collapse the transcript text inline (no separate detail page
//     for Phase B.1; can be added later if users ask).
//   - Re-export to .txt / .srt / .vtt / .json (client-side, no server hit)
//     and .docx / .pdf (server-side via the existing /api/export/* routes).
//   - Delete the row.
//
// All actions assume the user is authenticated — this component is only
// rendered inside /history which already requires auth at the server level.

export default function HistoryList({ transcripts: initial }) {
  const [items, setItems] = useState(initial || [])
  const [expanded, setExpanded] = useState(() => new Set())
  const [pendingDelete, setPendingDelete] = useState(null)

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleDelete = async (id) => {
    setPendingDelete(id)
    try {
      const res = await fetch(`/api/history/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setItems((prev) => prev.filter((t) => t.id !== id))
      } else {
        const data = await res.json().catch(() => ({}))
        alert(data.error || 'Could not delete.')
      }
    } catch (err) {
      alert('Network error while deleting.')
    } finally {
      setPendingDelete(null)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        All history was deleted. <a href="/" className="text-brand-600 hover:underline">Transcribe a file</a> to start a new one.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((t) => (
        <Row
          key={t.id}
          t={t}
          isExpanded={expanded.has(t.id)}
          isDeleting={pendingDelete === t.id}
          onToggle={() => toggleExpand(t.id)}
          onDelete={() => handleDelete(t.id)}
        />
      ))}
    </div>
  )
}

function Row({ t, isExpanded, isDeleting, onToggle, onDelete }) {
  const created = new Date(t.created_at)
  const date = created.toLocaleString('en-US', {
    month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
  const wordCount = (t.text || '').trim().split(/\s+/).filter(Boolean).length
  const baseName = (t.file_name || 'transcript').replace(/\.[^.]+$/, '')
  const hasSegments = Array.isArray(t.segments) && t.segments.length > 0

  const triggerDownload = (blob, name) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadTxt = () => {
    triggerDownload(new Blob([t.text || ''], { type: 'text/plain' }), baseName + '.txt')
  }

  const downloadSrt = () => {
    if (!hasSegments) return
    const srt = t.segments
      .map((seg, i) => {
        const fmt = (s) => {
          const h = Math.floor(s / 3600)
          const m = Math.floor((s % 3600) / 60)
          const sec = Math.floor(s % 60)
          const ms = Math.round((s % 1) * 1000)
          return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(ms).padStart(3, '0')}`
        }
        return `${i + 1}\n${fmt(seg.start)} --> ${fmt(seg.end)}\n${(seg.text || '').trim()}`
      })
      .join('\n\n') + '\n'
    triggerDownload(new Blob([srt], { type: 'text/plain' }), baseName + '.srt')
  }

  const downloadVtt = () => {
    if (!hasSegments) return
    const vtt = toVTT(t.segments)
    triggerDownload(new Blob([vtt], { type: 'text/vtt' }), baseName + '.vtt')
  }

  const downloadJson = () => {
    const json = toJSON({
      text: t.text,
      segments: t.segments,
      language: t.language,
      fileName: t.file_name,
      fileSize: t.file_size,
      fileType: t.file_type,
    })
    triggerDownload(new Blob([json], { type: 'application/json' }), baseName + '.json')
  }

  // DOCX/PDF still go through /api/export/* — they need server libraries.
  const downloadServer = async (format) => {
    const res = await fetch(`/api/export/${format}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: t.text,
        segments: t.segments,
        fileName: t.file_name,
        language: t.language,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error || `Could not generate the ${format.toUpperCase()} file.`)
      return
    }
    const blob = await res.blob()
    triggerDownload(blob, baseName + '.' + format)
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header row */}
      <div className="p-5 flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-800 truncate">{t.file_name || 'untitled'}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {date}
            {t.language && <> · {t.language}</>}
            {wordCount > 0 && <> · {wordCount} words</>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onToggle} className="btn-ghost text-xs">
            {isExpanded ? 'Hide' : 'View'}
          </button>
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="btn-ghost text-xs text-red-500 hover:text-red-600 disabled:opacity-50"
            title="Delete this transcript"
          >
            {isDeleting ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>

      {/* Expanded section */}
      {isExpanded && (
        <div className="border-t border-slate-100 p-5 space-y-4">
          {/* Download buttons */}
          <div className="flex flex-wrap gap-2">
            <button onClick={downloadTxt} className="btn-ghost text-xs">.txt</button>
            {hasSegments && <button onClick={downloadSrt} className="btn-ghost text-xs">.srt</button>}
            <button onClick={() => downloadServer('docx')} className="btn-ghost text-xs">.docx</button>
            {hasSegments && <button onClick={() => downloadServer('pdf')} className="btn-ghost text-xs">.pdf</button>}
            {hasSegments && <button onClick={downloadVtt} className="btn-ghost text-xs">.vtt</button>}
            <button onClick={downloadJson} className="btn-ghost text-xs">.json</button>
          </div>

          {/* Transcript preview */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-700 whitespace-pre-wrap max-h-96 overflow-y-auto">
            {t.text || <span className="text-slate-400">No transcript text.</span>}
          </div>
        </div>
      )}

      {!isExpanded && t.text && (
        <div className="border-t border-slate-100 p-5 text-sm text-slate-500 line-clamp-2">
          {t.text.length > 200 ? t.text.slice(0, 200) + '…' : t.text}
        </div>
      )}
    </div>
  )
}
