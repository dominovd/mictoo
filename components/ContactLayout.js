// Reusable layout for the /contact page across locales.
// Pass localized strings via props — see app/contact/page.js for the EN canonical
// reference and app/{fr,de,es,ru}/contact/page.js for translations.
//
// EN page passes the long-form expanded copy. Other locales keep using the
// shorter set of strings until translated.
export default function ContactLayout({ strings, privacyHref }) {
  const {
    h1,
    lead,
    privacyPrefix,
    privacyLinkLabel,
    privacySuffix,
    responseTimeHeading,
    responseTimeBody,
    supportScopeHeading,
    supportScopeItems,
    businessHeading,
    businessBody,
    faqShortcutHeading,
    faqShortcutBody,
    languagesHeading,
    languagesBody,
  } = strings

  const hasExtras = responseTimeHeading || supportScopeHeading || businessHeading
    || faqShortcutHeading || languagesHeading

  return (
    <>
      {/* Hero with email CTA */}
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

      {/* Extra sections (long-form, EN only for now) */}
      {hasExtras && (
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            {responseTimeHeading && (
              <>
                <h2 className="text-lg font-semibold text-slate-800 mt-4 mb-2">{responseTimeHeading}</h2>
                <p>{responseTimeBody}</p>
              </>
            )}

            {supportScopeHeading && supportScopeItems?.length > 0 && (
              <>
                <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{supportScopeHeading}</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {supportScopeItems.map((s, i) => (
                    <li key={i}><strong>{s.label}</strong> {s.body}</li>
                  ))}
                </ul>
              </>
            )}

            {faqShortcutHeading && (
              <>
                <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{faqShortcutHeading}</h2>
                {Array.isArray(faqShortcutBody)
                  ? faqShortcutBody.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{faqShortcutBody}</p>}
              </>
            )}

            {businessHeading && (
              <>
                <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{businessHeading}</h2>
                {Array.isArray(businessBody)
                  ? businessBody.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{businessBody}</p>}
              </>
            )}

            {languagesHeading && (
              <>
                <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{languagesHeading}</h2>
                <p>{languagesBody}</p>
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}
