import UploadZone from '@/components/UploadZone'
import TrustRow from '@/components/TrustRow'
import { t } from '@/lib/i18n'

/**
 * Reusable layout for all landing pages.
 *
 * Legacy props (still supported for older pages that have not been migrated):
 *   - features: [{icon, title, desc}]  — 3-card horizontal grid
 *
 * New props (for pages migrated to the long-form template):
 *   - howItWorks: [{icon, title, desc}]
 *   - whyUse:     { title?, bullets: [{title, desc}] }
 *   - useCases:   { title?, items:   [{title, desc}] }
 *   - proTips:    { title?, tips:    [{title, desc}] }
 *
 * Always supported:
 *   - faq:          [{q, a}]            — rendered as <details> accordion + JSON-LD
 *   - relatedLinks: [{href, label, desc?}]
 */
export default function LandingLayout({
  badge,
  h1,
  subtitle,
  features,
  howItWorks,
  whyUse,
  useCases,
  proTips,
  faq,
  relatedLinks,
  defaultLanguage = '',
  // Optional override for the hero tool. Pages can pass a custom node here
  // (e.g. <ConverterZone />) and the default <UploadZone /> won't render.
  // Default: undefined → UploadZone (transcription pages).
  tool,
}) {
  const locale = defaultLanguage || 'en'

  // FAQ JSON-LD schema for Google rich results
  const faqSchema = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  } : null

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
          <TrustRow locale={locale} />
        </div>
      </section>

      {/* Hero tool — UploadZone by default, custom node if `tool` prop given */}
      <section id="tool" className="max-w-2xl mx-auto px-4 -mt-6 pb-12 pt-10 scroll-mt-20">
        {tool || <UploadZone defaultLanguage={defaultLanguage} locale={locale} />}
      </section>

      {/* How it works (new template) */}
      {howItWorks?.length > 0 && (
        <section id="how-it-works" className="bg-white border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              {t(locale, 'landing.howItWorksTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {howItWorks.map(({ icon, title, desc }, i) => (
                <div key={title} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">{icon || `${i + 1}.`}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legacy features grid (kept for old pages not yet migrated) */}
      {!howItWorks && features?.length > 0 && (
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

      {/* Why use Mictoo (new template) */}
      {whyUse?.bullets?.length > 0 && (
        <section id="why-use" className="max-w-3xl mx-auto px-4 py-14 scroll-mt-20">
          {whyUse.title && (
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {whyUse.title}
            </h2>
          )}
          <div className="space-y-6">
            {whyUse.bullets.map(({ title, desc }) => (
              <div key={title} className="border-l-2 border-brand-400 pl-5">
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common use cases (new template) */}
      {useCases?.items?.length > 0 && (
        <section id="use-cases" className="bg-slate-50 border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {useCases.title || t(locale, 'landing.useCasesTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {useCases.items.map(({ title, desc }) => (
                <div key={title} className="bg-white border border-slate-100 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pro tips (new template) */}
      {proTips?.tips?.length > 0 && (
        <section id="pro-tips" className="max-w-3xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {proTips.title || t(locale, 'landing.proTipsTitle')}
          </h2>
          <ol className="space-y-5 list-none counter-reset-tips">
            {proTips.tips.map(({ title, desc }, i) => (
              <li key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQ accordion */}
      {faq?.length > 0 && (
        <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              {t(locale, 'landing.faqTitle')}
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
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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

          {/* JSON-LD FAQ schema for Google rich results */}
          {faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          )}
        </section>
      )}

      {/* CTA */}
      {(howItWorks || whyUse || useCases || proTips) && (
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            {t(locale, 'landing.ctaTitle')}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {t(locale, 'landing.ctaText')}
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t(locale, 'landing.ctaButton')}
          </a>
        </section>
      )}

      {/* Related links */}
      {relatedLinks?.length > 0 && (
        <section className="border-t border-slate-100 py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-slate-400 mb-4 text-center">
              {t(locale, 'landing.moreTools')}
            </p>
            {/* If any link has a description, render as cards; otherwise pills */}
            {relatedLinks.some(l => l.desc) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedLinks.map(({ href, label, desc }) => (
                  <a
                    key={href}
                    href={href}
                    className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-brand-400 hover:shadow-sm transition-all"
                  >
                    <div className="text-sm font-semibold text-slate-800 mb-1">{label}</div>
                    {desc && <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>}
                  </a>
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </section>
      )}
    </>
  )
}
