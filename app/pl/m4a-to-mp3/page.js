const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'Jak skonwertować M4A na MP3 — darmowe metody (lub pominąć) | Mictoo',
  description: "Skonwertuj M4A na MP3 w sekundach darmowymi narzędziami online, QuickTime, VLC lub ffmpeg. Uwaga: większość aplikacji (w tym Mictoo) akceptuje M4A bezpośrednio — możesz wcale nie musieć konwertować.",
  alternates: { canonical: 'https://mictoo.com/pl/m4a-to-mp3', languages: LANGS },

  openGraph: {
    title: "Jak skonwertować M4A na MP3 — darmowe metody (lub pominąć) | Mictoo",
    description: "Skonwertuj M4A na MP3 w sekundach darmowymi narzędziami online, QuickTime, VLC lub ffmpeg. Uwaga: większość aplikacji (w tym Mictoo) akceptuje M4A bezpośrednio — możesz wcale nie musieć konwertować.",
    url: "https://mictoo.com/pl/m4a-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak skonwertować M4A na MP3 — darmowe metody (lub pominąć) | Mictoo",
    description: "Skonwertuj M4A na MP3 w sekundach darmowymi narzędziami online, QuickTime, VLC lub ffmpeg. Uwaga: większość aplikacji (w tym Mictoo) akceptuje M4A bezpośrednio — możesz wcale nie musieć konwertować.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Jak skonwertować M4A na MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A to domyślny format audio dla notatek głosowych iPhone, pobrań Apple Podcasts i większości aplikacji nagrywających na macOS. MP3 jest bardziej uniwersalne, ale w 2026 zaskakująco wiele narzędzi akceptuje M4A bezpośrednio — niemal wszystkie przeglądarki, edytory audio, aplikacje podcastowe i usługi transkrypcji. Tu — kiedy naprawdę musisz konwertować i najszybsze darmowe sposoby.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Najprawdopodobniej nie musisz konwertować.</strong> M4A i MP3 mają bardzo podobną jakość dźwięku. Nowoczesne aplikacje czytające MP3 prawie zawsze czytają też M4A. Konkretnie:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transkrypcja:</strong> Mictoo akceptuje <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> bezpośrednio — upuść plik i dostań tekst. Bez konwersji.</li>
          <li><strong>Edycja audio:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve — wszystkie czytają M4A.</li>
          <li><strong>Streaming/odtwarzanie:</strong> Spotify, Apple Music, YouTube Music, każda nowoczesna przeglądarka i OS odtwarza M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          MP3 jest naprawdę potrzebny tylko wtedy, gdy docelowa aplikacja wyraźnie mówi tylko MP3 — niektóre starsze radia samochodowe, sprzęt fitness, podstawowe rejestratory głosu lub przestarzałe oprogramowanie.
        </p>
        <a href="/pl" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Spróbuj transkrybować .m4a bezpośrednio w Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Mimo to potrzebujesz MP3?</strong> Wybierz metodę poniżej pasującą do Twojej konfiguracji. Wszystkie darmowe.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 1 — Konwerter online</h2>
          <p className="mb-4">
            Przeciągnij, upuść, pobierz — zwykle poniżej 10 sekund dla typowej notatki głosowej:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Prywatność: narzędzia online wysyłają plik. Pomiń je dla wrażliwych nagrań — użyj metody desktopowej.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 2 — macOS (bez instalacji)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="Aplikacja Muzyka w macOS: kliknij Plik w pasku menu, najedź na Konwertuj, potem wybierz Utwórz wersję MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>Aplikacja Muzyka:</strong> Przeciągnij plik <code className="font-mono">.m4a</code> do Muzyki, zaznacz go, potem <strong>Plik → Konwertuj → Utwórz wersję MP3</strong>. MP3 pojawia się obok oryginału.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Otwórz plik → <strong>Plik → Eksportuj jako → Tylko audio</strong>. QuickTime domyślnie eksportuje do M4A; połącz z VLC lub Audacity poniżej, jeśli potrzebujesz MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 3 — VLC (międzyplatformowy)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> na Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Otwórz VLC → <strong>Media → Konwertuj / Zapisz</strong>.</li>
            <li>Dodaj plik <code className="font-mono">.m4a</code>, kliknij <strong>Konwertuj / Zapisz</strong>.</li>
            <li>Wybierz profil <code className="font-mono">Audio - MP3</code>.</li>
            <li>Wybierz cel z <code className="font-mono">.mp3</code>, kliknij <strong>Start</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 4 — Wiersz poleceń (ffmpeg)</h2>
          <p className="mb-4">
            Jedna linia z <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Dla głosu/transkrypcji użyj <code className="font-mono">-ab 64k -ac 1</code> — plik 2–3× mniejszy bez utraty jakości mowy.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Potrzebujesz transkrypcji?</h2>
          <p className="mb-4">
            Zarówno M4A jak i MP3 działają bezpośrednio w Mictoo. Upuść plik, dostań tekst z timestampami, napisami SRT i streszczeniem AI — za darmo, bez rejestracji.
          </p>
          <a href="/pl" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transkrybuj audio na tekst za darmo
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Powiązane przewodniki</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pl/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC na MP3</a>
          <a href="/pl/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA na MP3</a>
          <a href="/pl/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A na tekst</a>
          <a href="/pl/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Kompresuj audio</a>
        </div>
      </div>
    </section>
  )
}
