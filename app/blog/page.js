/**
 * Blog index page. Lists all published posts, newest first.
 *
 * To add a post: write the page file at app/blog/<slug>/page.js, then add
 * an entry here. The list is hand-maintained on purpose so we have full
 * control over ordering and which posts are featured.
 */
const POSTS = [
  {
    slug: 'how-to-chat-with-transcripts',
    title: 'How to Chat with Your Transcript (and Why It Beats Reading 60 Minutes of Text)',
    excerpt:
      'Practical guide to the new Chat feature: sample prompts that work, how RAG retrieval keeps answers grounded in the actual source, and the honest limits. Free, sign-in required.',
    publishedAt: '2026-06-04',
    readingMinutes: 9,
  },
  {
    slug: 'can-chatgpt-transcribe-audio',
    title: 'Can ChatGPT Transcribe Audio? Honest Answer for 2026',
    excerpt:
      'Short version: not really. ChatGPT is a chat product, not a transcription product. Here is what the consumer app actually does with audio, what the API can do, and the three practical paths when you need a real transcript.',
    publishedAt: '2026-05-27',
    readingMinutes: 8,
  },
  {
    slug: 'mp3-vs-m4a-vs-wav-vs-flac-for-transcription',
    title: 'MP3 vs M4A vs WAV vs FLAC for Transcription: Which Format Should You Use?',
    excerpt:
      'A practical comparison of the four most common audio formats from a transcription accuracy and workflow perspective. Includes a quick decision table.',
    publishedAt: '2026-05-25',
    readingMinutes: 9,
  },
]

export const metadata = {
  title: 'Blog — Mictoo',
  description:
    'Practical articles about audio transcription, file formats, workflows, and the tools we use to build Mictoo.',
  alternates: {
    canonical: 'https://mictoo.com/blog',
  },

  openGraph: {
    title: "Blog — Mictoo",
    description: "Practical articles about audio transcription, file formats, workflows, and the tools we use to build Mictoo.",
    url: "https://mictoo.com/blog",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Mictoo",
    description: "Practical articles about audio transcription, file formats, workflows, and the tools we use to build Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function BlogIndex() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Mictoo Blog</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Practical articles about audio transcription, file formats, recording quality, and the tools we use to build Mictoo. No fluff, no listicles padded to hit a word count.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        {POSTS.length === 0 ? (
          <p className="text-slate-500 text-center py-10">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {POSTS.map(post => (
              <li key={post.slug}>
                <PostCard {...post} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

function PostCard({ slug, title, excerpt, publishedAt, readingMinutes }) {
  const href = `/blog/${slug}`
  const date = new Date(publishedAt)
  const formattedDate = Number.isNaN(date.getTime())
    ? publishedAt
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <a
      href={href}
      className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-400 hover:shadow-sm transition-all"
    >
      <p className="text-xs text-slate-400 mb-2">
        <time dateTime={publishedAt}>{formattedDate}</time>
        {readingMinutes ? <span className="mx-2">·</span> : null}
        {readingMinutes ? <span>{readingMinutes} min read</span> : null}
      </p>
      <h2 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">{title}</h2>
      <p className="text-sm text-slate-600 leading-relaxed">{excerpt}</p>
    </a>
  )
}
