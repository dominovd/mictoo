/**
 * Reusable layout for blog posts on /blog/[slug].
 *
 * Renders a hero (title, subtitle, date, reading time), the post body as
 * children, an optional Related links section, a CTA to the tool, and
 * injects Article JSON-LD schema for Google rich results.
 */
export default function BlogLayout({
  title,
  subtitle,
  publishedAt,        // ISO date string, e.g. '2026-05-25'
  updatedAt,          // optional
  readingMinutes,     // integer
  author = 'Mictoo team',
  description,        // for JSON-LD (matches the page meta description)
  slug,               // 'mp3-vs-m4a-vs-wav-vs-flac-for-transcription'
  related,            // [{href, label, desc}]
  children,
}) {
  const url = `https://mictoo.com/blog/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: { '@type': 'Organization', name: author, url: 'https://mictoo.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Mictoo',
      url: 'https://mictoo.com',
      logo: { '@type': 'ImageObject', url: 'https://mictoo.com/icon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const formattedDate = formatDate(publishedAt)

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-slate-500 mb-3">
            <a href="/blog" className="text-brand-600 hover:underline">Blog</a>
            <span className="mx-2">·</span>
            <time dateTime={publishedAt}>{formattedDate}</time>
            {readingMinutes ? (
              <>
                <span className="mx-2">·</span>
                <span>{readingMinutes} min read</span>
              </>
            ) : null}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-500 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose-content">
          {children}
        </div>
      </article>

      {/* CTA back to the tool */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Want to try Mictoo?
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Free AI transcription. No signup. Drop any audio or video file and get the text in seconds.
          </p>
          <a
            href="/"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Open the transcriber
          </a>
        </div>
      </section>

      {/* Related */}
      {related?.length > 0 && (
        <section className="border-t border-slate-100 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-slate-400 mb-4 text-center">Related on Mictoo</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map(({ href, label, desc }) => (
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
          </div>
        </section>
      )}

      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
