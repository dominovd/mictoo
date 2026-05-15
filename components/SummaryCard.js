'use client'

import { useState } from 'react'
import { t } from '@/lib/i18n'

// Format the summary as readable plain text for copy/paste into Notion, email,
// docs, etc. Section labels are localized so the pasted text feels native in
// the user's language.
function formatSummaryForCopy(data, locale) {
  if (!data) return ''
  const lines = []
  lines.push(t(locale, 'summary.title'))
  lines.push('')
  if (data.summary) {
    lines.push(data.summary)
    lines.push('')
  }
  if (data.keyPoints?.length > 0) {
    lines.push(`${t(locale, 'summary.keyPoints')}:`)
    for (const p of data.keyPoints) lines.push(`• ${p}`)
    lines.push('')
  }
  if (data.actionItems?.length > 0) {
    lines.push(`${t(locale, 'summary.actionItems')}:`)
    for (const a of data.actionItems) lines.push(`• ${a}`)
    lines.push('')
  }
  return lines.join('\n').trimEnd()
}

// Renders the AI summary that appears above the editable transcript.
// Receives data via props from UploadZone (which kicks off the fetch in parallel
// with rendering the transcript). Keeps internal state only for the collapse
// toggle and the transient "Copied!" feedback.
export default function SummaryCard({ locale, status, data, error, onRetry }) {
  const [collapsed, setCollapsed] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatSummaryForCopy(data, locale))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // navigator.clipboard can fail on insecure contexts; silent failure is fine.
    }
  }

  // Don't render anything in idle state — the parent only mounts this card
  // when the transcript is ready.
  if (status === 'idle') return null

  const isLoading = status === 'loading'
  const hasError = status === 'error'
  const isDone = status === 'done' && data

  return (
    <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-5 mb-4">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <SparkleIcon className="w-4 h-4 text-brand-600" />
          <h3 className="font-semibold text-sm text-slate-800">{t(locale, 'summary.title')}</h3>
        </div>
        {isDone && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="text-xs text-slate-500 hover:text-slate-700 inline-flex items-center gap-1"
              aria-label={t(locale, 'result.copy')}
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-green-500" />
                  {t(locale, 'result.copied')}
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5" />
                  {t(locale, 'result.copy')}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setCollapsed(c => !c)}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              {collapsed ? t(locale, 'summary.show') : t(locale, 'summary.hide')}
            </button>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="animate-spin text-brand-500" width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="10" />
          </svg>
          <span>{t(locale, 'summary.loading')}</span>
        </div>
      )}

      {hasError && (
        <div className="text-sm text-slate-500">
          <p className="mb-2">{error || t(locale, 'summary.error')}</p>
          <button type="button" onClick={onRetry} className="text-brand-600 hover:underline text-xs">
            {t(locale, 'summary.retry')}
          </button>
        </div>
      )}

      {isDone && !collapsed && (
        <div className="space-y-4 text-sm text-slate-700">
          {data.summary && (
            <p className="leading-relaxed">{data.summary}</p>
          )}

          {data.keyPoints?.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                {t(locale, 'summary.keyPoints')}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {data.keyPoints.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          )}

          {data.actionItems?.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                {t(locale, 'summary.actionItems')}
              </p>
              <ul className="list-[square] pl-5 space-y-1">
                {data.actionItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.75a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
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

function SparkleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}
