// Reusable layout for /privacy and /terms — both are "heading + last-updated + numbered sections".
// Pass localized content via props. Section.body can be a string or JSX (for links).
export default function InfoSectionsLayout({ h1, lastUpdated, sections }) {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{h1}</h1>
      <p className="text-sm text-slate-400 mb-10">{lastUpdated}</p>

      <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{section.heading}</h2>
            <p>{section.body}</p>
            {section.list && (
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {section.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
