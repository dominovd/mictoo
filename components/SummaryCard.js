'use client'

import { useState } from 'react'
import { t } from '@/lib/i18n'

// Renders the AI summary that appears above the editable transcript.
// Receives data via props from UploadZone (which kicks off the fetch in parallel
// with rendering the transcript). Keeps internal state only for the collapse toggle.
export default function SummaryCard({ locale, status, data, error, onRetry }) {
  const [collapsed, setCollapsed] = useState(false)

  // Don't render anything in idle state — the parent only mounts this card
  // when the transcript is ready.
  if (status === 'idle') return null

  const isLoading = status === 'loading'
  const hasError = status === 'error'
  const isDone = status === 'done' && data

  return (
    <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-5 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <SparkleIcon className="w-4 h-4 text-brand-600" />
          <h3 className="font-semibold text-sm text-slate-800">{t(locale, 'summary.title')}</h3>
        </div>
        {isDone && (
          <button
            type="button"
            onClick={() => setCollapsed(c => !c)}
            className="text-xs text-slate-500 hover:text-slate-700"
          >
            {collapsed ? t(locale, 'summary.show') : t(locale, 'summary.hide')}
          </button>
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

function SparkleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}
