// Mictoo homepage (PL).
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
// Locale coverage: PL only for now. fr/de/es/ru/it/pt/pl/ja/ko homes still
// use the previous layout; they will be ported via scripts/translate-page.mjs
// once we validate this one in prod.

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  title: 'Bezpłatna transkrypcja audio i wideo z AI | Mictoo',
  description:
    'Transkrybuj audio i wideo na tekst bezpłatnie i bez rejestracji. Obsługa MP3, MP4, WAV, M4A oraz ponad 50 języków.',
  alternates: {
    canonical: 'https://mictoo.com/pl',
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
  openGraph: {
    title: 'Bezpłatna transkrypcja audio i wideo z AI | Mictoo',
    description: 'Prześlij plik audio lub wideo i otrzymaj dokładną transkrypcję w kilka sekund.',
    url: 'https://mictoo.com/pl',
    siteName: 'Mictoo',
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — bezpłatna transkrypcja z AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bezpłatna transkrypcja z AI | Mictoo',
    description: 'Prześlij audio lub wideo i otrzymaj tekst w kilka sekund.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Czy Mictoo jest naprawdę darmowe?',
    a: 'Tak. Mictoo jest bezpłatne dla plików do 25 MB. Nie wymaga konta ani karty płatniczej i nie ma ukrytych opłat. Zalogowani użytkownicy mogą przetwarzać pliki do 180 MB i mają 7 bezpłatnych transkrypcji dziennie.',
  },
  {
    q: 'Jak dokładna jest transkrypcja?',
    a: "Mictoo używa modelu Whisper large-v3 od OpenAI, jednego z najdokładniejszych modeli rozpoznawania mowy dostępnych na rynku. Dokładność zależy od jakości dźwięku i akcentu, ale zazwyczaj przekracza 95% dla wyraźnych nagrań.",
  },
  {
    q: 'Jakie języki są wspierane?',
    a: "Whisper obsługuje ponad 50 języków, w tym angielski, hiszpański, francuski, niemiecki, portugalski, rosyjski, ukraiński, japoński, chiński, arabski i inne. Język jest automatycznie wykrywany, lub można go wybrać ręcznie w formularzu przesyłania.",
  },
  {
    q: 'Czy mój plik jest przechowywany na waszych serwerach?',
    a: "Nie. Pliki są przesyłane bezpośrednio do API Whisper od Groq (hostowane w USA) do transkrypcji, a API Whisper od OpenAI jest używane jako automatyczna rezerwa i nie są przechowywane na serwerach Mictoo. Żaden z dostawców nie używa audio z API do szkolenia modeli; OpenAI przechowuje dane maksymalnie przez 30 dni w celu monitorowania nadużyć przed usunięciem.",
  },
  {
    q: 'Jaki jest maksymalny rozmiar pliku?',
    a: 'Do 25 MB bez konta i do 180 MB po bezpłatnej rejestracji. Duże pliki są automatycznie dzielone, a wynik łączony w jedną transkrypcję.',
  },
  {
    q: 'Jakie formaty plików wspiera Mictoo?',
    a: 'Mictoo wspiera MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV i MPEG. Akceptowane są zarówno pliki audio, jak i wideo; dla wideo wyodrębniamy ścieżkę audio po stronie serwera.',
  },
  {
    q: 'Ile czasu zajmuje transkrypcja?',
    a: 'Większość plików kończy się w kilka sekund. 10-minutowy plik audio zazwyczaj zajmuje 15 do 30 sekund; 60-minutowy podcast kończy się w około minutę.',
  },
  {
    q: 'Czy mogę edytować transkrypt po jego wygenerowaniu?',
    a: 'Tak. Transkrypt jest w pełni edytowalny w przeglądarce przed skopiowaniem lub pobraniem. Nie jest potrzebne konto, aby zapisać zmiany w lokalnej sesji.',
  },
  {
    q: 'Czy muszę zakładać konto?',
    a: 'Nie. Pliki do 25 MB można transkrybować bez konta. Bezpłatne konto umożliwia przetwarzanie plików do 180 MB oraz udostępnia historię, podsumowanie AI, tłumaczenie na 36 języków i czat z transkrypcją.',
  },
  {
    q: 'Jaką technologię wykorzystuje Mictoo?',
    a: "Mictoo jest zbudowane na modelu Whisper large-v3 od OpenAI, obsługiwanym przez Groq dla szybkości z OpenAI jako rezerwą. Jest to ten sam model rozpoznawania mowy, który zasila funkcje głosowe ChatGPT i wiele profesjonalnych usług napisów.",
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pl-PL',
  name: 'Mictoo',
  url: 'https://mictoo.com/pl',
  description:
    'Darmowe narzędzie do transkrypcji audio i wideo online zasilane przez OpenAI Whisper. Nie wymaga rejestracji. Obsługuje ponad 50 języków.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Wymaga nowoczesnej przeglądarki z włączonym JavaScript.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Transkrybuj audio na tekst',
    'Transkrybuj wideo na tekst',
    'Obsługuje ponad 50 języków',
    'Nie wymaga konta',
    'Darmowe w użyciu',
    'Podsumowanie transkryptu generowane przez AI',
    'Tłumacz transkrypcję na 36 języków',
    'Czat z transkryptem',
    'Obsługuje MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pl-PL',
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
export default function PlHome() {
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
            Darmowa transkrypcja AI · Brak rejestracji
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Darmowa transkrypcja audio i wideo AI<br />
            <span className="text-brand-600">na tekst</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            Dokładne transkrypty w kilka sekund. Prześlij MP3, MP4, WAV i więcej. Nie wymaga konta.
          </p>

          {/* Trust chips ,  shared component so LandingLayout hero matches
              this one exactly (single source of truth, updates propagate
              site-wide). */}
          <div className="mb-5">
            <HeroChips locale="pl" />
          </div>

          {/* Live counter from /api/stats (Supabase transcripts table).
              Rounded down to the nearest 500 with a + suffix, so it reads
              as a milestone rather than an exact number. Hides itself if
              the API is down or the count is below the visibility
              threshold. See components/HeroCounter.js. */}
          <HeroCounter locale="pl" />
        </div>

        {/* Upload tool sits inside the same section so the background
            wraps the Language selector too. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="pl" locale="pl" />
        </div>
      </section>

      {/* ────────────────── TOOL GRID ──────────────────
        Wrapped in the same slate-100 tint as the hero + upload section
        above so the top of the page reads as one cohesive intro block
        (hero + upload + "here are all the tools we have"). The seam
        against the following "Jak działa Mictoo?" section (bg-white) is
        where the intro area ends and the deeper content begins.
      */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Konwertuj dowolny plik na tekst</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/pl/transcribe-mp3-to-text',   label: 'MP3 na tekst',        icon: Icons.music },
              { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst',      icon: Icons.video },
              { href: '/pl/wav-to-text',              label: 'WAV na tekst',        icon: Icons.waveform },
              { href: '/pl/meeting-transcription',    label: 'Transkrypcja spotkań', icon: Icons.users },
              { href: '/pl/podcast-transcription',    label: 'Transkrypcja podcastów', icon: Icons.mic },
              { href: '/pl/voice-memo-to-text',       label: 'Notatka głosowa na tekst', icon: Icons.editPen },
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

      {/* ────────────────── JAK DZIAŁA MICTOO? ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Jak działa Mictoo?</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 steps */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'Prześlij swój plik',
                  desc: 'Przeciągnij i upuść lub wybierz plik audio lub wideo. MP3, MP4, WAV, M4A i więcej.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'AI transkrybuje',
                  desc: 'Whisper large-v3 przekształca mowę na tekst z wysoką dokładnością i automatyczną interpunkcją.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: 'Sprawdź i wyeksportuj',
                  desc: 'Edytuj, podsumowuj, tłumacz i pobierz swój transkrypt jako TXT, DOCX, PDF lub SRT.',
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
              src="/how-mictoo-works-interview-pl.webp"
              alt="Podgląd Mictoo z wywiadem przepisanym po polsku, znacznikami czasu i tłumaczeniem"
              width={1127}
              height={1396}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── DLACZEGO WYBRAĆ MICTOO? ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Dlaczego warto wybrać Mictoo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: 'Wysoka dokładność',
              desc: 'Whisper large-v3 dostarcza dokładne transkrypty nawet z akcentami i szumem w tle.',
            },
            {
              icon: Icons.bolt,
              title: 'Szybkie wyniki',
              desc: 'Uzyskaj transkrypty w kilka sekund, a nie godzin. 30-minutowy plik zazwyczaj kończy się w około minutę.',
            },
            {
              icon: Icons.lock,
              title: 'Prywatność z założenia',
              desc: 'Pliki są przetwarzane bezpiecznie i nigdy nie są przechowywane na naszych serwerach. Brak treningu na twoim audio.',
            },
            {
              icon: Icons.globe,
              title: 'Ponad 50 języków',
              desc: 'Transkrybuj i tłumacz w ponad 50 językach. Automatyczne wykrywanie lub wybierz swój język.',
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

      {/* ────────────────── STWORZONE DLA KAŻDEGO GŁOSU ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Stworzone dla każdego głosu</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/pl/lecture-transcription',
                icon: Icons.cap,
                label: 'Studenci',
                desc: 'Transkrybuj wykłady i materiały do nauki. Skup się na nauce.',
              },
              {
                href: '/pl/podcast-transcription',
                icon: Icons.mic,
                label: 'Podcasterzy',
                desc: 'Przekształć odcinki w notatki, blogi i treści w mediach społecznościowych.',
              },
              {
                href: '/pl/interview-transcription',
                icon: Icons.newspaper,
                label: 'Dziennikarze',
                desc: 'Szybko transkrybuj wywiady i weryfikuj cytaty z łatwością.',
              },
              {
                href: '/pl/meeting-transcription',
                icon: Icons.briefcase,
                label: 'Zespoły',
                desc: 'Dokumentuj spotkania i dziel się praktycznymi transkryptami.',
              },
              {
                href: '/pl/free-srt-generator',
                icon: Icons.video,
                label: 'Twórcy treści',
                desc: 'Przekształcaj audio i wideo w napisy, artykuły i więcej.',
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

      {/* ────────────────── UNIFIED COMPARISON TABLE ──────────────────
        Single table where every named competitor gets its own row and
        the whole row is a link to that tool’s /X-alternative page.
        Structure:
          - 4 feature columns: Free / No signup / Summary / Translation
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
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Darmowa transkrypcja bez subskrypcji</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Jak Mictoo wypada w porównaniu do narzędzi, które ludzie zazwyczaj rozważają. Kliknij dowolny wiersz, aby uzyskać pełne porównanie funkcji.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Darmowe</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Brak rejestracji</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Podsumowanie AI</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Tłumaczenie</th>
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
                      <div className="text-[11px] text-brand-700 font-medium">Darmowe dla wszystkich</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: 'Darmowe w użyciu' },
                  { yes: true, label: 'Brak konta' },
                  { yes: true, label: 'Wliczone' },
                  { yes: true, label: 'Ponad 50 języków' },
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
                  name: 'Descript',    href: '/pl/descript-alternative',    tag: 'Workflow z pierwszeństwem edytora',
                  cells: ['Ograniczony poziom',    'Wymagana rejestracja', 'Płatny dodatek',   'Ograniczone'],
                },
                {
                  name: 'Fireflies',   href: '/pl/fireflies-alternative',   tag: 'Bot nagrywający spotkania',
                  cells: ['Ograniczony poziom',    'Wymagana rejestracja', 'Poziom pro',      'Ograniczone'],
                },
                {
                  name: 'TurboScribe', href: '/pl/turboscribe-alternative', tag: 'Casual transcription',
                  cells: ['Dzienny limit',        'Wymagana rejestracja', 'Nie wliczone',  'Ograniczone'],
                },
                {
                  name: 'Otter',       href: '/pl/otter-alternative',       tag: 'Notatki z na żywo',
                  cells: ['Miesięczny limit',      'Wymagana rejestracja', 'Poziom pro',      'Ograniczone'],
                },
                {
                  name: 'Notta',       href: '/pl/notta-alternative',       tag: 'Skupienie na wielu językach',
                  cells: ['Miesięczny limit',      'Wymagana rejestracja', 'Poziom pro',      'Szerokie'],
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
          Tylko migawka. Strony cenowe się zmieniają; zobacz powiązane porównanie dla aktualnych danych.
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Najczęściej zadawane pytania
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

      {/* ────────────────── DOLNA PLATFORMA CTA ──────────────────
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
              the "AI transcription" cue). */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            {/* AI badge ,  sparkles instead of a third waveform */}
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                Transkrybuj swój plik, za darmo
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Przeciągnij swoje audio lub wideo i uzyskaj dokładny transkrypt w kilka sekund.
              </div>
              {/* Trust chips ,  three reasons to trust the CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Brak rejestracji
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Brak karty kredytowej
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Ponad 50 języków
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Rozpocznij transkrypcję</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
