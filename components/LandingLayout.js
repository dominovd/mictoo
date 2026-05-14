import UploadZone from '@/components/UploadZone'

export default function LandingLayout({
  badge,
  h1,
  subtitle,
  features,   // [{icon, title, desc}]
  faq,        // [{q, a}]
  relatedLinks, // [{href, label}]
  defaultLanguage = '',
}) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {badge && (
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            {h1}
          </h1>
          <p className="text-lg text-slate-500 mb-0">{subtitle}</p>
        </div>
      </section>

      {/* Upload tool */}
      <section className="max-w-2xl mx-auto px-4 -mt-6 pb-12 pt-10">
        <UploadZone defaultLanguage={defaultLanguage} />
      </section>

      {/* Features */}
      {features?.length > 0 && (
        <section className="bg-white border-y border-slate-100 py-14 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="text-2xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq?.length > 0 && (
        <section className="max-w-2xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faq.map(({ q, a }) => (
              <div key={q} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-slate-800 mb-2">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related links */}
      {relatedLinks?.length > 0 && (
        <section className="border-t border-slate-100 py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-slate-400 mb-4 text-center">More transcription tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
