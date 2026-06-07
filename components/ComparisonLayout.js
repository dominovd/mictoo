import UploadZone from '@/components/UploadZone'

/**
 * Layout for /[competitor]-alternative pages.
 *
 * Refactored 2026-06-05 per Alternative_pages_TZ.pdf in response to the
 * AdSense "Useless content" rejection (see
 * project_mictoo_adsense_rejection_2026_06_05 memory). Previous version
 * had identical H2 sequence across all 5 alternative pages ("Why pick
 * Mictoo", "Which one fits you?", "Try Mictoo now", "FAQ") which the
 * AdSense classifier flags as doorway template.
 *
 * New rendering order (top to bottom), per ТЗ:
 *   1. Hero (badge + h1 + subtitle anchored to competitor's specific pain)
 *   2. Tool (UploadZone, try Mictoo immediately, no scroll)
 *   3. Quick Fit / Not Fit (two-column, 3-5 items each)
 *   4. Main use case angle (page-specific prose, unique per competitor)
 *   5. Comparison table (Need / Workflow / Mictoo / Competitor, 7-10 rows)
 *   6. Why Mictoo (4-5 benefit cards, different angles per competitor)
 *   7. When [Competitor] is still better (3-4 honest situations)
 *   8. Workflow (4-step "how to switch")
 *   9. Use cases (cards specific to competitor's typical user intent)
 *  10. FAQ (40-80 word answers, 2-3 unique per competitor)
 *  11. Final CTA
 *  12. relatedLinks
 *
 * All section slots are optional. Pages that haven't been migrated to the
 * full ТЗ structure render only the sections they pass props for.
 */
export default function ComparisonLayout({
  // Hero
  badge,
  h1,
  subtitle,
  competitorName,

  // Quick Fit / Not Fit
  quickFit,        // { mictoo: string[], competitor: string[] }

  // Main use case angle (prose JSX)
  mainAngle,       // JSX node

  // Comparison table
  rows,            // [{ label, mictoo, them }]

  // Why Mictoo cards
  whyMictoo,       // [{ icon?, title, desc }]

  // When competitor is still better
  whenBetter,      // { title?, items: string[] }  honest, respectful

  // Workflow (4-step "how to switch")
  workflow,        // [{ title, desc }]  usually 4 steps

  // Use cases tailored to competitor intent
  useCases,        // { title?, items: [{ title, desc }] }

  // FAQ
  faq,             // [{ q, a }]   answers 40-80 words

  // Final CTA
  cta,             // { title, text, button }

  // Related comparisons
  relatedLinks,    // [{ href, label }]

  // LEGACY (kept for backward compat with un-migrated pages)
  whenToChoose,    // { mictoo: string[], them: string[] }
}) {
  // FAQ JSON-LD for Google rich results
  const faqSchema = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <>
      {/* 1. Hero */}
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

      {/* 2. Tool, try Mictoo immediately */}
      <section id="tool" className="max-w-2xl mx-auto px-4 -mt-6 pb-12 pt-10 scroll-mt-20">
        <UploadZone />
      </section>

      {/* 3. Quick Fit / Not Fit */}
      {quickFit && (
        <section id="quick-fit" className="max-w-4xl mx-auto px-4 py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            Quick fit check
          </h2>
          <p className="text-sm text-slate-500 text-center mb-10 max-w-xl mx-auto">
            Be honest with yourself before you switch. Each tool is built
            around a different workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-brand-600">✓</span>
                Choose Mictoo if
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {quickFit.mictoo.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-600 mt-0.5 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-slate-400">→</span>
                Stay with {competitorName} if
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {quickFit.competitor.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 4. Main use case angle (unique prose) */}
      {mainAngle && (
        <section id="angle" className="bg-white border-y border-slate-100 py-12 px-4 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            {mainAngle}
          </div>
        </section>
      )}

      {/* 5. Comparison table */}
      {rows?.length > 0 && (
        <section id="comparison" className="max-w-4xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8 max-w-xl mx-auto">
            Features and workflows compared. Read it as a buying guide, not
            a ranking.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left font-semibold px-4 py-3 w-2/5">Need / Workflow</th>
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
      )}

      {/* 6. Why Mictoo */}
      {whyMictoo?.length > 0 && (
        <section id="why-mictoo" className="bg-white border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Why people switch to Mictoo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyMictoo.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. When [Competitor] is still better */}
      {whenBetter?.items?.length > 0 && (
        <section id="when-better" className="max-w-3xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            {whenBetter.title || `When ${competitorName} is the better fit`}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8 max-w-xl mx-auto">
            We are not the right tool for every job. Here is when you
            should stick with {competitorName}.
          </p>
          <ul className="space-y-4">
            {whenBetter.items.map((item, i) => (
              <li key={i} className="flex gap-3 bg-slate-50 rounded-xl p-5">
                <span className="text-slate-400 flex-shrink-0 font-mono text-sm mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 8. Workflow (4-step how-to-switch) */}
      {workflow?.length > 0 && (
        <section id="workflow" className="bg-slate-50 border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              How to try Mictoo with a {competitorName} recording
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {workflow.map(({ title, desc }, i) => (
                <li key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-brand-600 font-bold text-sm mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* 9. Use cases */}
      {useCases?.items?.length > 0 && (
        <section id="use-cases" className="max-w-4xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            {useCases.title || `Common ways people use Mictoo instead of ${competitorName}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.items.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Legacy "When to choose" two-column (kept for any un-migrated page) */}
      {!quickFit && whenToChoose && (
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

      {/* 10. FAQ */}
      {faq?.length > 0 && (
        <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faq.map(({ q, a }, i) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                    <span>{q}</span>
                    <svg className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {typeof a === 'string' ? <p>{a}</p> : a}
                  </div>
                </details>
              ))}
            </div>
          </div>
          {faqSchema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          )}
        </section>
      )}

      {/* 11. Final CTA */}
      {cta && (
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{cta.title}</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">{cta.text}</p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {cta.button || 'Try Mictoo with your file'}
          </a>
        </section>
      )}

      {/* 12. Related comparisons */}
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
