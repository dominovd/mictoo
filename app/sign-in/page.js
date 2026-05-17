'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

// /sign-in — magic link by email + Google OAuth button.
// Stays English-only for Phase A; the rest of the site keeps its i18n.

function SignInForm() {
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/account'
  const errorParam = searchParams.get('error')

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const supabase = createClient()

  const callbackUrl = (() => {
    if (typeof window === 'undefined') return '/auth/callback'
    return `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`
  })()

  const handleMagicLink = async (e) => {
    e.preventDefault()
    setState('sending')
    setErrorMsg('')
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: callbackUrl },
    })
    if (error) {
      setErrorMsg(error.message || 'Could not send the magic link. Please try again.')
      setState('error')
    } else {
      setState('sent')
    }
  }

  const handleGoogle = async () => {
    setState('sending')
    setErrorMsg('')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: callbackUrl },
    })
    if (error) {
      setErrorMsg(error.message || 'Could not start Google sign-in. Please try again.')
      setState('error')
    }
    // On success the browser navigates away to Google's consent page; no UI update needed.
  }

  if (state === 'sent') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-5 text-3xl">📬</div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">Check your inbox</h2>
        <p className="text-sm text-slate-500 mb-1">
          We sent a sign-in link to <strong className="text-slate-700">{email}</strong>.
        </p>
        <p className="text-sm text-slate-500">
          Click the link from the same device to finish signing in. The link is valid for one hour.
        </p>
        <button
          onClick={() => { setState('idle'); setEmail('') }}
          className="text-sm text-brand-600 hover:underline mt-6"
        >
          ← Use a different email
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">Sign in to Mictoo</h1>
      <p className="text-sm text-slate-500 mb-7 text-center">
        Free, optional, takes 10 seconds. Anonymous transcription keeps working without an account.
      </p>

      {errorParam === 'missing_code' && (
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-sm text-amber-800 mb-5">
          The sign-in link looks incomplete. Please try again.
        </div>
      )}
      {errorParam === 'auth_failed' && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-800 mb-5">
          Sign-in failed. The link may have expired — request a new one.
        </div>
      )}

      <button
        type="button"
        onClick={handleGoogle}
        disabled={state === 'sending'}
        className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors disabled:opacity-60"
      >
        <GoogleIcon className="w-4 h-4" />
        Continue with Google
      </button>

      <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
        <div className="flex-1 h-px bg-slate-100" />
        <span>or with email</span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <form onSubmit={handleMagicLink} className="space-y-3">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          inputMode="email"
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <button
          type="submit"
          disabled={state === 'sending' || !email}
          className="btn-primary w-full py-3 text-sm disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Send magic link'}
        </button>
      </form>

      {state === 'error' && errorMsg && (
        <p className="text-sm text-red-600 mt-4 text-center">{errorMsg}</p>
      )}

      <p className="text-xs text-slate-400 mt-7 text-center">
        We never share your email. Read our <a href="/privacy" className="text-brand-600 hover:underline">privacy policy</a>.
      </p>
    </div>
  )
}

export default function SignInPage() {
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <Suspense fallback={null}>
        <SignInForm />
      </Suspense>
    </section>
  )
}

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
