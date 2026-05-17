'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

// AccountPreferences — small client component embedded into the /account
// Server Component. Reads + updates the user's notification preferences
// directly via Supabase (RLS scopes both read and update to auth.uid()).
//
// Row may not exist initially — defaults to "opted in" until the user
// changes it (matching the column default), and we upsert on first toggle.

export default function AccountPreferences({ initialNotify, labels }) {
  const [notify, setNotify] = useState(initialNotify)
  const [pending, setPending] = useState(false)
  const [feedback, setFeedback] = useState('')

  const supabase = createClient()

  const handleToggle = async (checked) => {
    setPending(true)
    setFeedback('')
    // Optimistic update — revert if the server rejects.
    setNotify(checked)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setFeedback(labels.signInRequired)
        setNotify(!checked)
        return
      }
      const { error } = await supabase
        .from('notification_preferences')
        .upsert(
          {
            user_id: user.id,
            notify_on_transcript_ready: checked,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id' }
        )
      if (error) {
        console.error('[prefs] upsert failed', error.message)
        setNotify(!checked)
        setFeedback(labels.saveFailed)
      } else {
        setFeedback(labels.saved)
        setTimeout(() => setFeedback(''), 2000)
      }
    } catch (err) {
      setNotify(!checked)
      setFeedback(labels.saveFailed)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="flex items-start gap-3">
      <label className="inline-flex items-center cursor-pointer mt-0.5">
        <input
          type="checkbox"
          checked={notify}
          onChange={(e) => handleToggle(e.target.checked)}
          disabled={pending}
          className="sr-only peer"
        />
        <span className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-300 rounded-full peer peer-checked:bg-brand-500 transition-colors">
          <span className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full shadow transition-transform ${notify ? 'translate-x-4' : ''}`} />
        </span>
      </label>
      <div className="flex-1 -mt-0.5">
        <p className="text-sm text-slate-700">
          <strong className="text-slate-800">{labels.title}</strong>{' '}
          <span className="text-slate-500">{labels.subtitle}</span>
        </p>
        {feedback && (
          <p className="text-xs text-slate-400 mt-1">{feedback}</p>
        )}
      </div>
    </div>
  )
}
