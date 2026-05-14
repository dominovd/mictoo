// Reusable layout for the /contact page across locales.
// Pass localized strings via props — see app/contact/page.js for the EN canonical
// reference and app/{fr,de,es,ru}/contact/page.js for translations.
export default function ContactLayout({ strings, privacyHref }) {
  const { h1, lead, privacyPrefix, privacyLinkLabel, privacySuffix } = strings

  return (
    <section className="max-w-lg mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-4">{h1}</h1>
      <p className="text-slate-500 mb-8 leading-relaxed">{lead}</p>

      <a
        href="mailto:info@mictoo.com"
        className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        info@mictoo.com
      </a>

      <p className="text-xs text-slate-400 mt-6">
        {privacyPrefix}{' '}
        <a href={privacyHref} className="hover:text-slate-600 transition-colors underline">
          {privacyLinkLabel}
        </a>{privacySuffix}
      </p>
    </section>
  )
}
