// Mictoo homepage (DE).
//
// Redesigned from a functional single-column layout into a modern SaaS
// homepage with a tool grid, live result preview, audience segmentation,
// comparison table, and a bottom CTA plate. Adapted from the provided
// mockup with the following deliberate changes:
//   - brand palette (brand-blue) instead of the mockup’s default blue
//   - existing SiteHeader / SiteFooter / logo kept (rendered by layout.js)
//   - existing UploadZone kept in full (no functionality simplified)
//   - flat nav in the header (no mega-menu) ,  SiteHeader unchanged
//   - long FAQ (10 questions) preserved for SEO / AI citation
//   - "live preview" is static JSX with brand colors, not a live component
//     (upgrade path: swap for a typing-animation later if needed)
//
// Locale coverage: DE only for now. fr/en/es/ru/it/pt/pl/ja/ko homes still
// use the previous layout; they will be ported via scripts/translate-page.mjs
// once we validate this one in prod.

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  alternates: {
    canonical: 'https://mictoo.com/de',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Ist Mictoo wirklich kostenlos?',
    a: 'Ja. Mictoo ist völlig kostenlos für Dateien bis zu 25 MB. Kein Konto, keine Kreditkarte, keine versteckten Gebühren. Angemeldete Benutzer erhalten ein höheres Limit von 60 MB pro Datei und 7 kostenlose Transkriptionen pro Tag, immer noch ohne Zahlung erforderlich.',
  },
  {
    q: 'Wie genau ist die Transkription?',
    a: "Mictoo verwendet OpenAI’s Whisper large-v3, eines der genauesten verfügbaren offenen Sprachmodelle. Die Genauigkeit hängt von der Audioqualität und dem Akzent ab, übersteigt jedoch typischerweise 95 % bei klaren Aufnahmen.",
  },
  {
    q: 'Welche Sprachen werden unterstützt?',
    a: "Whisper unterstützt über 50 Sprachen, darunter Englisch, Spanisch, Französisch, Deutsch, Portugiesisch, Russisch, Ukrainisch, Japanisch, Chinesisch, Arabisch und mehr. Die Sprache wird automatisch erkannt, oder Sie können eine manuell im Upload-Formular auswählen.",
  },
  {
    q: 'Wird meine Datei auf Ihren Servern gespeichert?',
    a: "Nein. Dateien werden direkt an die Whisper-API von Groq (in den USA gehostet) zur Transkription gestreamt, wobei die Whisper-API von OpenAI als automatischer Fallback dient, und werden nicht auf den Servern von Mictoo gespeichert. Keiner der Anbieter verwendet API-Audio für das Training des Modells; OpenAI speichert Daten maximal 30 Tage zur Missbrauchsüberwachung, bevor sie gelöscht werden.",
  },
  {
    q: 'Was ist die maximale Dateigröße?',
    a: 'Bis zu 25 MB anonym, 60 MB nach einer kostenlosen Anmeldung. Größere Dateien bis zu 180 MB werden automatisch in Teile aufgeteilt und zu einem einzigen Transkript für registrierte Benutzer zusammengeführt.',
  },
  {
    q: 'Welche Dateiformate unterstützt Mictoo?',
    a: 'Mictoo unterstützt MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV und MPEG. Sowohl Audio- als auch Videodateien werden akzeptiert; für Video extrahieren wir den Audiotrack serverseitig.',
  },
  {
    q: 'Wie lange dauert die Transkription?',
    a: 'Die meisten Dateien sind in Sekunden fertig. Eine 10-minütige Audiodatei benötigt typischerweise 15 bis 30 Sekunden; ein 60-minütiger Podcast ist in etwa einer Minute fertig.',
  },
  {
    q: 'Kann ich das Transkript nach der Erstellung bearbeiten?',
    a: 'Ja. Das Transkript ist vollständig in Ihrem Browser bearbeitbar, bevor Sie es kopieren oder herunterladen. Kein Konto ist erforderlich, um Änderungen in Ihrer lokalen Sitzung zu speichern.',
  },
  {
    q: 'Muss ich ein Konto erstellen?',
    a: 'Nein. Für Dateien bis zu 25 MB können Sie ohne Konto transkribieren. Ein kostenloses Konto schaltet größere Dateien (bis zu 60 MB pro Datei, 180 MB durch automatische Aufteilung), Verlauf, KI-Zusammenfassung, Übersetzung in 28 Sprachen und Chat mit Ihrem Transkript frei.',
  },
  {
    q: 'Welche Technologie treibt Mictoo an?',
    a: "Mictoo basiert auf dem Whisper large-v3-Modell von OpenAI, das von Groq für Geschwindigkeit bereitgestellt wird, mit OpenAI als Fallback. Es ist dasselbe Sprachmodell, das die Sprachfunktionen von ChatGPT und viele professionelle Untertitelungsdienste antreibt.",
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com/de',
  description:
    'Kostenloses Online-Tool zur Transkription von Audio und Video, unterstützt von OpenAI Whisper. Keine Anmeldung erforderlich. Unterstützt über 50 Sprachen.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Erfordert einen modernen Browser mit aktiviertem JavaScript.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'Transkribieren Sie Audio in Text',
    'Transkribieren Sie Video in Text',
    'Unterstützt über 50 Sprachen',
    'Kein Konto erforderlich',
    'Kostenlos zu nutzen',
    'KI-generierte Zusammenfassung des Transkripts',
    'Übersetzen Sie das Transkript in 28 Sprachen',
    'Chatten Sie mit dem Transkript',
    'Unterstützt MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Small reusable pieces ────────────────────────────────────────────────────

// Trust chip: icon + short label, sits in the hero under the H1.
function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

// SVG icon set used in Trust chips + tool grid + benefit cards + audience row.
// All outline style, 24x24 viewBox, currentColor stroke ,  inherits color from
// the parent `text-brand-*` class.
const Icons = {
  gift: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" /></svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  music: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
  ),
  video: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>
  ),
  waveform: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  mic: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>
  ),
  editPen: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
  ),
  cap: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /><path d="M20 8h2v10a2 2 0 0 1-2 2" /><path d="M8 8h6M8 12h6M8 16h6" /></svg>
  ),
  briefcase: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
  ),
  upload: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

// ── Page component ───────────────────────────────────────────────────────────
export default function DeHome() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HERO + UPLOAD ──────────────────
        Single continuous section so the subtle background gradient wraps
        from the H1 all the way down through the Language selector and
        drop zone. Before this change the Language selector was floating
        on plain white with the gray background starting only below it , 
        felt disconnected. Now everything sits inside one soft-slate
        container and the white drop-zone card stands out cleanly against
        the surrounding tone.
      */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Kostenlose KI-Transkription · Keine Anmeldung
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Kostenlose KI-Audio- &amp; Video<br />
            <span className="text-brand-600">Transkription in Text</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            Präzise Transkripte in Sekunden. Laden Sie MP3, MP4, WAV und mehr hoch. Kein Konto erforderlich.
          </p>

          {/* Trust chips ,  shared component so LandingLayout hero matches
              this one exactly (single source of truth, updates propagate
              site-wide). */}
          <div className="mb-5">
            <HeroChips locale="de" />
          </div>

          {/* Live counter from /api/stats (Supabase transcripts table).
              Rounded down to the nearest 500 with a + suffix, so it reads
              as a milestone rather than an exact number. Hides itself if
              the API is down or the count is below the visibility
              threshold. See components/HeroCounter.js. */}
          <HeroCounter locale="de" />
        </div>

        {/* Upload tool sits inside the same section so the background
            wraps the Language selector too. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="de" locale="de" />
        </div>
      </section>

      {/* ────────────────── TOOL GRID ──────────────────
        Wrapped in the same slate-100 tint as the hero + upload section
        above so the top of the page reads as one cohesive intro block
        (hero + upload + "here are all the tools we have"). The seam
        against the following "Wie Mictoo funktioniert" section (bg-white) is
        where the intro area ends and the deeper content begins.
      */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Konvertieren Sie jede Datei in Text</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/de/transcribe-mp3-to-text',   label: 'MP3 in Text',        icon: Icons.music },
              { href: '/de/transcribe-video-to-text', label: 'Video in Text',      icon: Icons.video },
              { href: '/de/wav-to-text',              label: 'WAV in Text',        icon: Icons.waveform },
              { href: '/de/meeting-transcription',    label: 'Besprechungs-Transkription', icon: Icons.users },
              { href: '/de/podcast-transcription',    label: 'Podcast-Transkription', icon: Icons.mic },
              { href: '/de/voice-memo-to-text',       label: 'Sprachnotiz in Text', icon: Icons.editPen },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── WIE MICTOO FUNKTIONIERT ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Wie Mictoo funktioniert</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 steps */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'Laden Sie Ihre Datei hoch',
                  desc: 'Ziehen Sie eine Audio- oder Videodatei per Drag & Drop oder wählen Sie eine Datei aus. MP3, MP4, WAV, M4A und mehr.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'KI transkribiert',
                  desc: 'Whisper large-v3 wandelt Sprache mit hoher Genauigkeit und automatischer Interpunktion in Text um.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: 'Überprüfen und exportieren',
                  desc: 'Bearbeiten, zusammenfassen, übersetzen und Ihr Transkript als TXT, DOCX, PDF oder SRT herunterladen.',
                },
              ].map(({ step, icon, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-semibold flex items-center justify-center">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 text-brand-600">{icon}</span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Product result preview */}
            <Image
              src="/how-mictoo-works-interview.webp"
              alt="Mictoo-Transkript-Arbeitsbereich zeigt ein englisches Transkript mit Zeitstempeln und Übersetzungssteuerungen"
              width={1127}
              height={1395}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── WARUM MICTOO WÄHLEN? ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Warum Mictoo wählen?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: 'Hohe Genauigkeit',
              desc: 'Whisper large-v3 liefert genaue Transkripte, selbst mit Akzenten und Hintergrundgeräuschen.',
            },
            {
              icon: Icons.bolt,
              title: 'Schnelle Ergebnisse',
              desc: 'Erhalten Sie Transkripte in Sekunden, nicht in Stunden. Eine 30-minütige Datei ist normalerweise in etwa einer Minute fertig.',
            },
            {
              icon: Icons.lock,
              title: 'Privat von Design',
              desc: 'Dateien werden sicher verarbeitet und niemals auf unseren Servern gespeichert. Kein Training mit Ihren Audiodaten.',
            },
            {
              icon: Icons.globe,
              title: 'Über 50 Sprachen',
              desc: 'Transkribieren und übersetzen in über 50 Sprachen. Automatische Erkennung oder wählen Sie Ihre Sprache.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                <span className="w-6 h-6">{icon}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── FÜR JEDEN STIMME GEBAUT ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Für jede Stimme gebaut</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/de/lecture-transcription',
                icon: Icons.cap,
                label: 'Studierende',
                desc: 'Transkribieren Sie Vorlesungen und Lernmaterialien. Konzentrieren Sie sich auf das Lernen.',
              },
              {
                href: '/de/podcast-transcription',
                icon: Icons.mic,
                label: 'Podcaster',
                desc: 'Verwandeln Sie Episoden in Show-Notizen, Blogs und soziale Inhalte.',
              },
              {
                href: '/de/interview-transcription',
                icon: Icons.newspaper,
                label: 'Journalisten',
                desc: 'Transkribieren Sie Interviews schnell und überprüfen Sie Zitate mit Leichtigkeit.',
              },
              {
                href: '/de/meeting-transcription',
                icon: Icons.briefcase,
                label: 'Teams',
                desc: 'Dokumentieren Sie Besprechungen und teilen Sie umsetzbare Transkripte.',
              },
              {
                href: '/de/free-srt-generator',
                icon: Icons.video,
                label: 'Inhaltsersteller',
                desc: 'Verwandeln Sie Audio und Video in Untertitel, Artikel und mehr.',
              },
            ].map(({ href, icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex items-start justify-between gap-2">
                  <span>{desc}</span>
                  <span className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-0.5">{Icons.arrowRight}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── VEREINHEITLICHTER VERGLEICHSTABELLE ──────────────────
        Single table where every named competitor gets its own row and
        the whole row is a link to that tool’s /X-alternative page.
        Structure:
          - 4 feature columns: Kostenlos / Keine Anmeldung / Zusammenfassung / Übersetzung
          - Row 1: mictoo (brand-highlighted) with ✓ badges per cell
          - Rows 2-6: Descript / Fireflies / TurboScribe / Otter / Notta
                      each row is clickable → their alternative page
                      Cells use compact honest labels; detailed pricing
                      claims live on the per-tool comparison pages.
        Cell copy stays deliberately conservative on specific numbers so
        the table doesn’t go out of date every time a competitor changes
        their free tier. Real numbers are on each linked page.
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Kostenlose Transkription ohne Abonnement</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Wie Mictoo im Vergleich zu den Tools abschneidet, die die Leute normalerweise in Betracht ziehen. Klicken Sie auf eine Zeile für einen vollständigen Vergleich nach Funktionen.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Kostenlos</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Keine Anmeldung</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">KI-Zusammenfassung</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Übersetzung</th>
              </tr>
            </thead>
            <tbody>
              {/* Mictoo row ,  brand-highlighted, not clickable (it’s the reference) */}
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/40">
                <td className="px-5 py-5 border-t border-slate-100 align-middle">
                  <div className="inline-flex items-center gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0284c7" />
                      <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">mictoo</div>
                      <div className="text-[11px] text-brand-700 font-medium">Kostenlos für alle</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: 'Kostenlos zu nutzen' },
                  { yes: true, label: 'Kein Konto' },
                  { yes: true, label: 'Inklusive' },
                  { yes: true, label: 'Über 50 Sprachen' },
                ].map(({ label }, i) => (
                  <td key={i} className="text-center px-4 py-5 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Competitor rows ,  one per tool, whole row is a link. */}
              {[
                {
                  name: 'Descript',    href: '/de/descript-alternative',    tag: 'Editor-first workflow',
                  cells: ['Eingeschränkter Tarif',    'Anmeldung erforderlich', 'Bezahltes Add-on',   'Eingeschränkt'],
                },
                {
                  name: 'Fireflies',   href: '/de/fireflies-alternative',   tag: 'Meeting-Bot-Aufzeichnung',
                  cells: ['Eingeschränkter Tarif',    'Anmeldung erforderlich', 'Pro-Tarif',      'Eingeschränkt'],
                },
                {
                  name: 'TurboScribe', href: '/de/turboscribe-alternative', tag: 'Gelegentliche Transkription',
                  cells: ['Tägliches Limit',        'Anmeldung erforderlich', 'Nicht enthalten',  'Eingeschränkt'],
                },
                {
                  name: 'Otter',       href: '/de/otter-alternative',       tag: 'Live-Besprechungsnotizen',
                  cells: ['Monatliches Limit',      'Anmeldung erforderlich', 'Pro-Tarif',      'Eingeschränkt'],
                },
                {
                  name: 'Notta',       href: '/de/notta-alternative',       tag: 'Fokus auf mehrere Sprachen',
                  cells: ['Monatliches Limit',      'Anmeldung erforderlich', 'Pro-Tarif',      'Umfangreich'],
                },
              ].map(({ name, href, tag, cells }) => (
                <tr key={href} className="group hover:bg-slate-50 transition-colors">
                  <td className="border-t border-slate-100 align-middle p-0">
                    <a href={href} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div>
                        <div className="font-semibold text-slate-800">vs {name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tag}</div>
                      </div>
                      <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all">
                        {Icons.arrowRight}
                      </span>
                    </a>
                  </td>
                  {cells.map((label, i) => (
                    <td key={i} className="border-t border-slate-100 align-middle p-0">
                      <a
                        href={href}
                        className="block text-center px-4 py-4 text-xs text-slate-500"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Nur ein Snapshot. Preisseiten ändern sich; siehe den verlinkten Vergleich für aktuelle Zahlen.
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
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
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── UNTERE CTA PLATTE ──────────────────
        Redesigned: dropped the middle waveform badge (was a third
        waveform on top of the two side accents ,  too repetitive),
        replaced with an AI-sparkles badge, added a trust-chip row
        under the tagline, and made the CTA button larger with a
        right-arrow so it reads as an action, not a static link.
        Softer side-waveform accents so the copy has more contrast.
      */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          {/* Subtle radial glow behind the button ,  soft focus, no
              waveform accents (removed per user request; the plate reads
              cleaner without them and the sparkles badge alone carries
              the "KI-Transkription" cue). */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            {/* KI badge ,  sparkles instead of a third waveform */}
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                Transkribieren Sie Ihre Datei kostenlos
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Laden Sie Ihre Audio- oder Videodatei hoch und erhalten Sie in Sekunden ein genaues Transkript.
              </div>
              {/* Trust chips ,  three reasons to trust the CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Keine Anmeldung
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Keine Kreditkarte
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Über 50 Sprachen
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Transkribieren starten</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}