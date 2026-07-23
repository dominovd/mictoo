'use client'

import { useState } from 'react'
import { toVTT } from '@/lib/exports/vtt'
import { toJSON } from '@/lib/exports/json'

// HistoryList — interactive list of past transcripts.
//
// Per-row actions:
//   - Expand / collapse the transcript text inline.
//   - When the row has an AI summary attached, a Both/Summary/Transcript
//     toggle controls which sections appear in the expanded view AND in
//     all downstream re-exports (.docx, .pdf, .json). VTT and SRT are
//     transcript-only by their nature.
//   - Copy the visible content (transcript and/or summary) to clipboard.
//   - Re-export to .txt / .srt / .vtt / .json (client-side) and
//     .docx / .pdf (server-side via /api/export/*).
//   - Delete the row.

// `labels` carries locale-resolved strings from the /history server page.
// Keeping them as a prop keeps this component client-only without dragging in
// the whole i18n dictionary. Missing labels fall back to English so the file
// stays usable if invoked from a context that hasn't been migrated yet.
const DEFAULT_LABELS = {
  // From the /history page shell.
  view: 'View', delete: 'Delete', words: '{n} words',
  deleting: 'Deleting…',
  deleteConfirm: "Delete this transcript? This can't be undone.",
  deleteError: 'Could not delete.', networkError: 'Network error while deleting.',
  // From the expanded row body.
  allDeleted: 'All history was deleted.',
  allDeletedCta: 'Transcribe a file',
  allDeletedTail: ' to start a new one.',
  copyFailed: 'Copy failed, your browser blocked clipboard access.',
  exportFailed: 'Could not generate the {format} file.',
  untitled: 'untitled',
  aiSummary: 'AI summary',
  hide: 'Hide',
  deleteTitle: 'Delete this transcript',
  toggleBoth: 'Both', toggleSummary: 'Summary', toggleTranscript: 'Transcript',
  copied: '✓ Copied', copy: '⧉ Copy',
  keyPoints: 'Key Points', actionItems: 'Action Items',
  noTranscriptText: 'No transcript text.',
  summaryHeadingUpper: 'SUMMARY',
  keyPointsHeadingUpper: 'KEY POINTS',
  actionItemsHeadingUpper: 'ACTION ITEMS',
  // BCP47 tag used for the row's date/time formatting (Intl).
  dateLocale: 'en-US',
  // Path used by the empty-state CTA link.
  homeHref: '/',
}

export default function HistoryList({ transcripts: initial, labels }) {
  const L = { ...DEFAULT_LABELS, ...(labels || {}) }
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
        alert(data.error || L.deleteError)
      }
    } catch {
      alert(L.networkError)
    } finally {
      setPendingDelete(null)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        {L.allDeleted}{' '}
        <a href={L.homeHref} className="text-brand-600 hover:underline">{L.allDeletedCta}</a>
        {L.allDeletedTail}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((t) => (
        <Row
          key={t.id}
          t={t}
          labels={L}
          isExpanded={expanded.has(t.id)}
          isDeleting={pendingDelete === t.id}
          onToggle={() => toggleExpand(t.id)}
          onDelete={() => handleDelete(t.id)}
        />
      ))}
    </div>
  )
}

function Row({ t, labels: L = DEFAULT_LABELS, isExpanded, isDeleting, onToggle, onDelete }) {
  // Three-state content selector — only relevant for rows that have an AI
  // summary attached. Drives both the in-card preview and the re-export
  // payload going to the server / generated client-side.
  const hasSummary = !!t.summary && (
    t.summary.summary || t.summary.keyPoints?.length || t.summary.actionItems?.length
  )
  const [contentMode, setContentMode] = useState('both') // 'both' | 'summary' | 'transcript'
  const effectiveMode = hasSummary ? contentMode : 'transcript'

  // Copy-to-clipboard pulse feedback.
  const [copied, setCopied] = useState(false)

  const created = new Date(t.created_at)
  const date = created.toLocaleString(L.dateLocale || 'en-US', {
    month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
  const wordCount = (t.text || '').trim().split(/\s+/).filter(Boolean).length
  const baseName = (t.file_name || 'transcript').replace(/\.[^.]+$/, '') // filename base, not locale-sensitive
  const hasSegments = Array.isArray(t.segments) && t.segments.length > 0

  // Plain-text rendering of the AI summary block. Used for Copy and as part
  // of the unified clipboard payload when contentMode = 'both'.
  const summaryAsText = () => {
    if (!hasSummary) return ''
    const parts = []
    if (t.summary.summary) {
      parts.push(L.summaryHeadingUpper, t.summary.summary)
    }
    if (t.summary.keyPoints?.length) {
      parts.push('', L.keyPointsHeadingUpper, ...t.summary.keyPoints.map((p) => `• ${p}`))
    }
    if (t.summary.actionItems?.length) {
      parts.push('', L.actionItemsHeadingUpper, ...t.summary.actionItems.map((p) => `• ${p}`))
    }
    return parts.join('\n')
  }

  const copyToClipboard = async () => {
    let payload = ''
    if (effectiveMode === 'summary') {
      payload = summaryAsText()
    } else if (effectiveMode === 'transcript') {
      payload = t.text || ''
    } else {
      // both
      const summaryBlock = summaryAsText()
      const sep = summaryBlock ? '\n\n────────\n\n' : ''
      payload = summaryBlock + sep + (t.text || '')
    }
    try {
      await navigator.clipboard.writeText(payload)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      alert(L.copyFailed)
    }
  }

  // Build the export payload honoring the three-state selector.
  const exportPayload = () => {
    const includeSummary = hasSummary && effectiveMode !== 'transcript'
    const includeTranscript = effectiveMode !== 'summary'
    return {
      text: includeTranscript ? (t.text || '') : '',
      segments: includeTranscript ? (t.segments || []) : [],
      fileName: t.file_name,
      fileSize: t.file_size,
      fileType: t.file_type,
      language: t.language,
      summary: includeSummary ? t.summary : null,
    }
  }

  const triggerDownload = (blob, name) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  // .txt — concatenates summary (if selected) and transcript (if selected).
  const downloadTxt = () => {
    const summaryBlock = (effectiveMode !== 'transcript') ? summaryAsText() : ''
    const transcriptBlock = (effectiveMode !== 'summary') ? (t.text || '') : ''
    const sep = summaryBlock && transcriptBlock ? '\n\n────────\n\n' : ''
    const text = summaryBlock + sep + transcriptBlock
    triggerDownload(new Blob([text], { type: 'text/plain' }), baseName + '.txt')
  }

  // .srt and .vtt are subtitle-only — toggle has no meaning here, transcript
  // segments are the only sensible content.
  const downloadSrt = () => {
    if (!hasSegments) return
    const srt = (t.segments || [])
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
    const json = toJSON(exportPayload())
    triggerDownload(new Blob([json], { type: 'application/json' }), baseName + '.json')
  }

  const downloadServer = async (format) => {
    const res = await fetch(`/api/export/${format}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exportPayload()),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error || L.exportFailed.replace('{format}', format.toUpperCase()))
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
          <h3 className="font-semibold text-slate-800 truncate">{t.file_name || L.untitled}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {date}
            {t.language && <> · {t.language}</>}
            {wordCount > 0 && <> · {L.words.replace('{n}', wordCount)}</>}
            {hasSummary && <> · <span className="text-brand-600">{L.aiSummary}</span></>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onToggle} className="btn-ghost text-xs">
            {isExpanded ? L.hide : L.view}
          </button>
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="btn-ghost text-xs text-red-500 hover:text-red-600 disabled:opacity-50"
            title={L.deleteTitle}
          >
            {isDeleting ? L.deleting : L.delete}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-slate-100 p-5 space-y-4">
          {/* Toggle + actions row */}
          <div className="flex flex-wrap items-center gap-2">
            {hasSummary && (
              <div className="inline-flex items-center gap-0 bg-slate-100 rounded-lg p-0.5 text-xs">
                <ToggleBtn active={contentMode === 'both'}       onClick={() => setContentMode('both')}>{L.toggleBoth}</ToggleBtn>
                <ToggleBtn active={contentMode === 'summary'}    onClick={() => setContentMode('summary')}>{L.toggleSummary}</ToggleBtn>
                <ToggleBtn active={contentMode === 'transcript'} onClick={() => setContentMode('transcript')}>{L.toggleTranscript}</ToggleBtn>
              </div>
            )}

            <button onClick={copyToClipboard} className="btn-ghost text-xs">
              {copied ? L.copied : L.copy}
            </button>

            <span className="text-slate-300 text-xs">·</span>

            <button onClick={downloadTxt} className="btn-ghost text-xs">.txt</button>
            {hasSegments && <button onClick={downloadSrt} className="btn-ghost text-xs">.srt</button>}
            <button onClick={() => downloadServer('docx')} className="btn-ghost text-xs">.docx</button>
            {hasSegments && <button onClick={() => downloadServer('pdf')} className="btn-ghost text-xs">.pdf</button>}
            {hasSegments && <button onClick={downloadVtt} className="btn-ghost text-xs">.vtt</button>}
            <button onClick={downloadJson} className="btn-ghost text-xs">.json</button>
          </div>

          {/* AI summary block — shown when summary exists AND not "transcript only" */}
          {hasSummary && effectiveMode !== 'transcript' && (
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 space-y-3 text-sm">
              {t.summary.summary && (
                <p className="text-slate-800 leading-relaxed">{t.summary.summary}</p>
              )}
              {t.summary.keyPoints?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{L.keyPoints}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {t.summary.keyPoints.map((p, i) => (<li key={i}>{p}</li>))}
                  </ul>
                </div>
              )}
              {t.summary.actionItems?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{L.actionItems}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {t.summary.actionItems.map((p, i) => (<li key={i}>{p}</li>))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Transcript text — shown unless "summary only" */}
          {effectiveMode !== 'summary' && (
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-700 whitespace-pre-wrap max-h-96 overflow-y-auto">
              {t.text || <span className="text-slate-400">{L.noTranscriptText}</span>}
            </div>
          )}
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

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-1 rounded-md transition-colors ${active ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
    >
      {children}
    </button>
  )
}
