// Reusable layout for the /about page across locales.
// Pass localized strings via props — see app/about/page.js for the EN canonical
// reference and app/{fr,de,es,ru}/about/page.js for translations.
//
// EN page passes the long-form expanded copy. Other locales keep using the
// shorter set of strings until translated.
export default function AboutLayout({ strings, contactHref }) {
  const {
    h1,
    lead,
    ourWhy,
    whoBuiltHeading,
    whoBuiltBody,
    whatPowersHeading,
    whatPowersBody,
    securityHeading,
    securityBody,
    moneyHeading,
    moneyBody,
    principlesHeading,
    principles,
    editorialHeading,
    editorialBullets,
    contactHeading,
    contactPrefix,
    contactCtaLabel,
    contactSuffix,
  } = strings

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">{h1}</h1>

      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
        <p className="text-base">{lead}</p>

        <p>{ourWhy}</p>

        {whoBuiltHeading && (
          <>
            <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{whoBuiltHeading}</h2>
            {Array.isArray(whoBuiltBody)
              ? whoBuiltBody.map((p, i) => <p key={i}>{p}</p>)
              : <p>{whoBuiltBody}</p>}
          </>
        )}

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{whatPowersHeading}</h2>
        <p>{whatPowersBody}</p>

        {securityHeading && (
          <>
            <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{securityHeading}</h2>
            {Array.isArray(securityBody)
              ? securityBody.map((p, i) => <p key={i}>{p}</p>)
              : <p>{securityBody}</p>}
          </>
        )}

        {moneyHeading && (
          <>
            <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{moneyHeading}</h2>
            {Array.isArray(moneyBody)
              ? moneyBody.map((p, i) => <p key={i}>{p}</p>)
              : <p>{moneyBody}</p>}
          </>
        )}

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{principlesHeading}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {principles.map((p, i) => (
            <li key={i}><strong>{p.label}</strong> {p.body}</li>
          ))}
        </ul>

        {editorialHeading && editorialBullets?.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{editorialHeading}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {editorialBullets.map((p, i) => (
                <li key={i}><strong>{p.label}</strong> {p.body}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{contactHeading}</h2>
        <p>
          {contactPrefix}{' '}
          <a href={contactHref} className="text-brand-600 hover:underline">{contactCtaLabel}</a>
          {contactSuffix}{' '}
          <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">
            info@mictoo.com
          </a>.
        </p>
      </div>
    </section>
  )
}
