'use client'

import { useState, useRef, useEffect } from 'react'
import { t } from '@/lib/i18n'

// Chat panel for "ask anything about this transcript" — RAG over the
// current transcript via /api/chat. Auth-only: anonymous visitors see a
// collapsed locked card with a sign-in CTA, authenticated visitors see
// a collapsed unlocked card that expands into the full chat UI.
//
// We render the locked teaser on purpose (instead of hiding the section
// entirely for anon) because it signals the feature exists and gives us
// a conversion path into sign-up. The lock icon is the visual cue that
// makes it clear "you can have this if you sign in".
//
// Props:
//   segments       — Whisper segments [{start, text}, ...] required for RAG
//   audioCurrentTime, onSeek — wired to the audio player so [HH:MM:SS]
//                    citations in answers become clickable seeks
//   isAuth         — boolean; controls locked vs unlocked render
//   pathname       — used in the sign-in CTA's `next` param so users
//                    bounce back to the same page after logging in
//   locale         — i18n key resolver
//
// The component owns its own conversation history (in-memory, lost on
// page reload). For v1 there's no persistence. If we add saved chats
// later they'd live in Supabase keyed by transcript id.

function formatTimestamp(seconds) {
  const s = Math.floor(seconds || 0)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const ss = String(s % 60).padStart(2, '0')
  const mm = String(m % 60).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

function parseTimestamp(ts) {
  // Accepts "MM:SS" or "HH:MM:SS". Returns seconds or null on parse fail.
  const parts = ts.split(':').map(p => parseInt(p, 10))
  if (parts.some(Number.isNaN)) return null
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  return null
}

// Renders an answer string, turning [HH:MM:SS] / [MM:SS] / [H:MM:SS]
// tokens into clickable buttons that seek the audio player. The model
// is instructed to use those bracket-wrapped timestamps for citations.
function renderAnswer(text, onSeek) {
  if (!text) return null
  const parts = []
  // Matches [12:34], [1:23:45], [12:34:56] — anywhere in the text.
  const re = /\[(\d{1,2}:\d{2}(?::\d{2})?)\]/g
  let last = 0
  let m
  let keyCounter = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={`t${keyCounter++}`}>{text.slice(last, m.index)}</span>)
    const seconds = parseTimestamp(m[1])
    if (seconds != null && onSeek) {
      parts.push(
        <button
          key={`b${keyCounter++}`}
          type="button"
          onClick={() => onSeek(seconds)}
          className="inline-flex items-baseline gap-0.5 font-mono text-xs px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
          title="Jump to this moment"
        >
          {m[0]}
        </button>
      )
    } else {
      parts.push(<span key={`t${keyCounter++}`} className="font-mono text-xs text-slate-500">{m[0]}</span>)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(<span key={`t${keyCounter++}`}>{text.slice(last)}</span>)
  return parts
}

export default function ChatPanel({
  segments,
  onSeek,
  isAuth,
  pathname = '/',
  locale = 'en',
}) {
  // Whole panel starts collapsed. User opens it intentionally — keeps
  // the result view scannable for visitors who don't care about chat.
  const [expanded, setExpanded] = useState(false)
  const [question, setQuestion] = useState('')
  const [history, setHistory] = useState([]) // [{role: 'user'|'assistant', content: string}]
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  // Auto-scroll the conversation list to the bottom when a new message
  // arrives. Smooth so users see the new turn slide in.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history.length, status])

  // Three seed prompts that double as discoverability for what Chat is
  // good for. Translated per locale.
  const suggestions = [
    t(locale, 'chat.suggested.summary'),
    t(locale, 'chat.suggested.actions'),
    t(locale, 'chat.suggested.quote'),
  ]

  async function send(text) {
    const q = (text ?? question).trim()
    if (!q || status === 'loading') return
    if (!isAuth) return

    const newHistory = [...history, { role: 'user', content: q }]
    setHistory(newHistory)
    setQuestion('')
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segments,
          question: q,
          // Send the prior turns so the model has conversation memory.
          // Trim before sending — server also caps, but no point sending
          // ancient history we know it'll discard.
          history: newHistory.slice(0, -1).slice(-8),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`)
      }
      setHistory([...newHistory, { role: 'assistant', content: data.answer || '' }])
      setStatus('idle')
    } catch (e) {
      setError(e?.message || 'Chat failed.')
      setStatus('error')
      // Don't pop the user message off — they'll see what they asked
      // alongside the error, so the next retry isn't a black box.
    }
  }

  // ── Locked state (anonymous user) ────────────────────────────────────
  if (!isAuth) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-slate-100 inline-flex items-center justify-center text-slate-500 shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.105.895-2 2-2s2 .895 2 2v3M5 11h14M7 11V8a5 5 0 0110 0v3" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800">
              {t(locale, 'chat.locked.title')}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {t(locale, 'chat.locked.desc')}
            </p>
          </div>
        </div>
        <a
          href={`/sign-in?next=${encodeURIComponent(pathname)}`}
          className="text-xs font-semibold px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors whitespace-nowrap"
        >
          {t(locale, 'chat.locked.cta')}
        </a>
      </div>
    )
  }

  // ── Unlocked state (logged-in user) ──────────────────────────────────
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm mt-4 overflow-hidden">
      {/* Header — always visible, click to expand/collapse */}
      <button
        type="button"
        onClick={() => setExpanded(e => !e)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-brand-50 inline-flex items-center justify-center text-brand-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">{t(locale, 'chat.title')}</p>
            {!expanded && (
              <p className="text-xs text-slate-500">{t(locale, 'chat.collapsed.hint')}</p>
            )}
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-slate-100 p-4 space-y-3">
          {/* Suggested prompts — only when there's no history yet, so they
              fade away once the conversation gets going. */}
          {history.length === 0 && (
            <div>
              <p className="text-[11px] uppercase tracking-wide font-semibold text-slate-500 mb-2">
                {t(locale, 'chat.suggested.label')}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-slate-200 hover:border-brand-300 hover:bg-brand-50/40 text-slate-600 hover:text-brand-700 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conversation history */}
          {history.length > 0 && (
            <div
              ref={scrollRef}
              className="max-h-80 overflow-y-auto space-y-3 border border-slate-100 rounded-lg p-3 bg-slate-50/30"
            >
              {history.map((turn, i) => (
                <div key={i} className={turn.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div
                    className={
                      turn.role === 'user'
                        ? 'max-w-[85%] bg-brand-600 text-white text-sm px-3 py-2 rounded-2xl rounded-br-md'
                        : 'max-w-[85%] bg-white border border-slate-200 text-slate-700 text-sm px-3 py-2 rounded-2xl rounded-bl-md leading-relaxed'
                    }
                  >
                    {turn.role === 'user' ? turn.content : renderAnswer(turn.content, onSeek)}
                  </div>
                </div>
              ))}
              {status === 'loading' && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 px-3 py-2 rounded-2xl rounded-bl-md inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}
            </div>
          )}

          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}

          {/* Input + send */}
          <form
            onSubmit={(e) => { e.preventDefault(); send() }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t(locale, 'chat.placeholder')}
              maxLength={1000}
              disabled={status === 'loading'}
              className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !question.trim()}
              className="text-sm px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              {status === 'loading' ? t(locale, 'chat.sending') : t(locale, 'chat.send')}
            </button>
          </form>

          <p className="text-[11px] text-slate-400">
            {t(locale, 'chat.disclaimer')}
          </p>
        </div>
      )}
    </div>
  )
}
