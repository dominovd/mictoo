import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'
import { t } from '@/lib/i18n'

/**
 * Reusable layout for all landing pages.
 *
 * Rendering order (top to bottom):
 *   1. Hero (badge + h1 + subtitle)
 *   2. Tool (UploadZone by default, custom `tool` prop overrides)
 *   3. valueBlock , short prose, "why this page" in 2-4 paragraphs
 *   4. howItWorks , 3-step process
 *   5. whyUse     , 4-5 benefit cards
 *   6. useCases   , grid of specific use-case cards
 *   7. proTips    , practical recommendations (e.g. "Best WAV settings")
 *   8. deepDive   , long-form technical/historical prose (page-specific)
 *   9. comparison , format-vs-format comparison block
 *  10. faq        , accordion + FAQ JSON-LD
 *  11. epilogueSection, optional extra section above CTA
 *  12. CTA + relatedLinks
 *
 * Legacy props (still supported for older pages that have not been migrated):
 *   - features: [{icon, title, desc}] , 3-card horizontal grid
 *
 * Page-content props:
 *   - howItWorks: [{icon, title, desc}]
 *   - whyUse:     { title?, bullets: [{title, desc}] }
 *   - useCases:   { title?, items:   [{title, desc}] }
 *   - proTips:    { title?, tips:    [{title, desc}] }
 *
 * Long-form unique-content slots (added 2026-06-05 in response to AdSense
 * "Low-value content" rejection, see memory
 * project_mictoo_adsense_rejection_2026_06_05). All optional JSX nodes:
 *   - valueBlock       JSX rendered right after Tool, 2-4 short paragraphs.
 *                       Tool-first orientation, not academic prose.
 *   - deepDive         JSX rendered below proTips, technical depth for
 *                       SEO uniqueness + E-E-A-T signals.
 *   - comparison       JSX rendered between deepDive and FAQ. Use for
 *                       "Format vs other formats" tables / card grids.
 *   - epilogueSection  JSX rendered between FAQ and CTA. Free slot.
 *
 * Always supported:
 *   - faq:          [{q, a}]           , rendered as <details> accordion + JSON-LD
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
  transcriptionLanguage,
  // Optional override for the hero tool. Pages can pass a custom node here
  // (e.g. <ConverterZone />) and the default <UploadZone /> won't render.
  // Default: undefined → UploadZone (transcription pages).
  tool,
  // Show the "paste YouTube URL" input above the file drop zone. Off by
  // default; enable only on pages where YouTube URL ingestion is the
  // primary intent (/youtube-to-text, /transcribe-video-to-text). Backed
  // by transcriptapi.com, see lib/yt-transcript-provider.js.
  enableYouTubeUrl = false,
  // Long-form unique-content slots; see top-of-file comment for ordering.
  valueBlock,
  deepDive,
  comparison,
  epilogueSection,
}) {
  const locale = defaultLanguage || 'en'
  const uploadLanguage = transcriptionLanguage ?? defaultLanguage

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
      {/* Hero + tool — one continuous tinted section matching the
          homepage. Same gradient (brand-50/40 → slate-100/60 →
          slate-100) so the Language selector inside UploadZone sits
          on the same background as the H1 above it, and the white
          drop-zone card lifts cleanly against the tinted surround.
          Replaced the old TrustRow (small gray inline text) with
          HeroChips (4 icon-labeled chips: Free / Private / 50+
          languages / AI summary) plus a HeroCounter below — same
          pattern used by the homepage since Wave 197. */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            {h1}
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">{subtitle}</p>

          <div className="mb-5">
            <HeroChips locale={locale} />
          </div>

          <HeroCounter locale={locale} />
        </div>

        {/* Hero tool, UploadZone by default, custom node if `tool` prop
            given. Inside the same section so the Language selector
            inherits the tinted background. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          {tool || <UploadZone defaultLanguage={uploadLanguage} locale={locale} enableYouTubeUrl={enableYouTubeUrl} />}
        </div>
      </section>

      {/* Quick value block, short prose right after the tool to orient
          users on what this page is for, before the structured sections. */}
      {valueBlock && (
        <section id="value" className="max-w-3xl mx-auto px-4 py-8 scroll-mt-20">
          {valueBlock}
        </section>
      )}

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
                  {/* min-w-0 lets the flex child shrink below its intrinsic
                      content width so long unbreakable strings (file paths,
                      URLs) wrap inside the column instead of overflowing
                      into the next grid cell. break-words is the actual
                      breaker that engages once the parent allows shrinking. */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1 break-words">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed break-words">{desc}</p>
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
          <div className="space-y-5">
            {proTips.tips.map(({ title, desc }, i) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1 break-words">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical deep-dive, page-specific long-form prose, placed below
          the practical sections so the page stays tool-first up top. */}
      {deepDive && (
        <section id="deep-dive" className="max-w-3xl mx-auto px-4 py-12 scroll-mt-20">
          {deepDive}
        </section>
      )}

      {/* Format comparison, small table or card grid that links to
          sibling format pages. Helps users decide which page is right. */}
      {comparison && (
        <section id="comparison" className="bg-slate-50 border-y border-slate-100 py-12 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            {comparison}
          </div>
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

      {/* Epilogue section (page-specific), renders between FAQ and CTA */}
      {epilogueSection && (
        <section className="max-w-3xl mx-auto px-4 py-10">
          {epilogueSection}
        </section>
      )}

      {/* Default CTA — suppressed when the page provides its own
          epilogueSection (which always doubles as a page-specific CTA),
          so we don't show two back-to-back "back to uploader" blocks. */}
      {!epilogueSection && (howItWorks || whyUse || useCases || proTips) && (
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
