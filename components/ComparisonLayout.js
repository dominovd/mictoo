import UploadZone from '@/components/UploadZone'

// Reusable layout for /[competitor]-alternative pages.
// Each comparison page renders: hero, side-by-side table, why-Mictoo features,
// "when to choose" two-column section, FAQ, related links, and the upload zone
// (so visitors can actually try the tool without scrolling all the way back).
//
// Keep the comparison fair — these pages target Google's helpful-content review.
// No bashing, no exaggeration, honest "when to choose them" section.
export default function ComparisonLayout({
  badge,
  h1,
  subtitle,
  competitorName,
  rows,           // [{ label, mictoo, them }]
  whyMictoo,      // [{ icon, title, desc }]
  whenToChoose,   // { mictoo: string[], them: string[] }
  faq,            // [{ q, a }]
  relatedLinks,   // [{ href, label }]
}) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {badge && (
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">{h1}</h1>
          <p className="text-lg text-slate-500 mb-0">{subtitle}</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left font-semibold px-4 py-3 w-1/3"></th>
                <th className="text-left font-semibold px-4 py-3 text-brand-700">Mictoo</th>
                <th className="text-left font-semibold px-4 py-3">{competitorName}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-medium text-slate-700">{row.label}</td>
                  <td className="px-4 py-3 text-slate-700">{row.mictoo}</td>
                  <td className="px-4 py-3 text-slate-500">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Mictoo */}
      {whyMictoo?.length > 0 && (
        <section className="bg-white border-y border-slate-100 py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Why pick Mictoo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {whyMictoo.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to choose */}
      {whenToChoose && (
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Which one fits you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Choose Mictoo if</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {whenToChoose.mictoo.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-brand-600">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Choose {competitorName} if</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {whenToChoose.them.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Try Mictoo right here */}
      <section className="bg-white border-y border-slate-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">Try Mictoo now — no signup</h2>
          <UploadZone />
        </div>
      </section>

      {/* FAQ */}
      {faq?.length > 0 && (
        <section className="max-w-2xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Frequently asked questions</h2>
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
            <p className="text-sm text-slate-400 mb-4 text-center">More comparisons</p>
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
